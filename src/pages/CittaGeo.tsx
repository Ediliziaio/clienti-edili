import { useEffect, useRef } from "react";
import { Navigate, Link, useLocation } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Check, Star, MapPin, Phone, Clock, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { settori } from "@/data/settori";
import { cities } from "@/data/cities";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}


const features = [
  "Sito web professionale su misura",
  "Ottimizzato per ricerche locali nella tua zona",
  "Design responsive (mobile-first)",
  "Galleria lavori fotografica",
  "Form contatto integrato",
  "Profilo Google My Business ottimizzato",
  "30 giorni di assistenza post-consegna",
];

const projectImages = [project1, project2, project3];

export default function CittaGeo() {
  const location = useLocation();
  const citta = location.pathname.replace("/siti-web-edili-", "");
  const city = cities.find((c) => c.slug === citta);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [city]);

  if (!city) return <Navigate to="/servizi" replace />;

  const jsonLd = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://clientiedili.com/" },
        { "@type": "ListItem", position: 2, name: "Settori e zone", item: "https://clientiedili.com/settori" },
        { "@type": "ListItem", position: 3, name: `Siti Web Edili ${city.name}`, item: `https://clientiedili.com/siti-web-edili-${city.slug}` },
      ],
    },
    {
      "@type": "Service",
      name: `Siti Web per Imprese Edili a ${city.name}`,
      description: city.intro,
      provider: { "@id": "https://clientiedili.com/#organization" },
      areaServed: {
        "@type": "City",
        name: city.name,
        containedInPlace: { "@type": "AdministrativeArea", name: city.region },
      },
      serviceType: "Web Design e SEO Locale per Imprese Edili",
    },
    {
      "@type": "FAQPage",
      mainEntity: city.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <Layout>
      <SeoHead
        /* Senza suffisso di brand: con " | ClientiEdili" i title città superavano
           tutti i 60 caratteri e Google li troncava. */
        title={`Imprese Edili ${city.name}: ${city.focus}`}
        description={`${city.h1Angle}. Siti web e SEO locale per imprese edili a ${city.name}. Consegna in 48 ore, zero anticipo.`}
        canonical={`https://clientiedili.com/siti-web-edili-${city.slug}`}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="pb-20 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Settori e zone", to: "/settori" },
              { label: city.name },
            ]}
          />
          <FadeIn>
            <div className="flex items-center gap-2 mb-6">
              <MapPin size={16} className="text-primary" />
              <span className="font-ui text-xs tracking-[0.2em] uppercase text-primary">{city.name}, {city.region}</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.08] font-bold mb-4">
              {/* h1Angle è già una frase compiuta: evidenziamo il nome della città
                  dove compare, senza spostarlo (alcuni angle usano l'aggettivo,
                  es. "cantieri genovesi", e lì non c'è nulla da evidenziare). */}
              {(() => {
                const i = city.h1Angle.indexOf(city.name);
                if (i === -1) return city.h1Angle;
                return (
                  <>
                    {city.h1Angle.slice(0, i)}
                    <span className="text-gradient-lime">{city.name}</span>
                    {city.h1Angle.slice(i + city.name.length)}
                  </>
                );
              })()}
            </h1>
            <p className="font-ui text-muted-foreground text-lg mb-8">
              Siti web e SEO locale per imprese edili a {city.name}: {city.focus}.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
              {city.intro}
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/#contatti" className="btn-carino">
                Richiedi Preventivo Gratuito
                <span className="arrow-circle"><ArrowUpRight size={18} /></span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Digital */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                Perché la tua impresa edile a {city.name} ha bisogno di un sito web
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {city.whyDigital}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <p className="font-display text-4xl text-primary font-bold">48h</p>
                  <p className="text-muted-foreground text-sm mt-1">Consegna del sito web</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  {city.projects ? (
                    <>
                      <p className="font-display text-4xl text-primary font-bold">{city.projects}+</p>
                      <p className="text-muted-foreground text-sm mt-1">Imprese edili servite a {city.name}</p>
                    </>
                  ) : (
                    <>
                      <p className="font-display text-4xl text-primary font-bold">0€</p>
                      <p className="text-muted-foreground text-sm mt-1">Anticipo richiesto: paghi a sito approvato</p>
                    </>
                  )}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="font-display text-xl font-bold mb-6">Cosa include il pacchetto per {city.name}</h3>
                <div className="space-y-4">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check size={16} className="text-primary mt-1 shrink-0" />
                      <span className="text-foreground/80 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-border text-center">
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-muted-foreground line-through text-lg">€1.400</span>
                    <span className="font-display text-4xl text-primary font-bold">€1.000</span>
                  </div>
                  <p className="text-muted-foreground text-xs">Zero anticipo · Soddisfatti o rimborsati</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mercato locale + Zone servite */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">Il mercato edile a {city.name}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{city.marketContext}</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                <MapPin size={18} className="text-primary shrink-0" /> Zone servite a {city.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{city.zones}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Ricerche locali */}
      <section className="py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">Cosa cercano i tuoi clienti a {city.name}</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Ottimizziamo il tuo sito web per le ricerche che ogni giorno i clienti fanno su Google nella zona di {city.name}:
            </p>
          </FadeIn>
          <div className="flex flex-wrap gap-3">
            {city.searchTerms.map((t, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <span className="inline-flex items-center bg-card border border-border rounded-full px-5 py-2.5 text-sm text-foreground/80">
                  {t}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial — mostrata solo dove c'è una testimonianza reale */}
      {city.testimonial && (
        <section className="py-20 border-t border-border bg-card/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <div className="flex justify-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={20} className="text-primary fill-primary" />
                ))}
              </div>
              <blockquote className="font-display text-2xl sm:text-3xl font-bold leading-relaxed mb-8 italic">
                "{city.testimonial.text}"
              </blockquote>
              <p className="font-ui font-semibold">{city.testimonial.name}</p>
              <p className="text-muted-foreground text-sm">{city.testimonial.company}, {city.name}</p>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Projects */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12 text-center">
              Progetti realizzati per imprese edili a {city.name}
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {projectImages.map((img, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={img} alt={`Sito web per impresa edile a ${city.name} - progetto ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12 text-center">
              Le garanzie di ClientiEdili per le imprese edili di {city.name}
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Zero Anticipo", desc: `Paghi solo dopo aver approvato il tuo sito web. Nessun rischio per la tua impresa edile a ${city.name}.` },
              { icon: Clock, title: "Consegna in 48 Ore", desc: "Il tuo sito web professionale pronto in 2 giorni lavorativi. Anteprima entro 24 ore." },
              { icon: Phone, title: "Supporto Dedicato", desc: "30 giorni di assistenza gratuita post-consegna. Un referente dedicato per la tua impresa." },
            ].map((g, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <g.icon size={28} className="text-primary mx-auto mb-4" />
                  <h3 className="font-display text-lg font-bold mb-2">{g.title}</h3>
                  <p className="text-muted-foreground text-sm">{g.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ locali */}
      <section className="py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-10 text-center">
              Domande frequenti — Imprese edili a {city.name}
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {city.faqs.map((f, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-display text-lg font-bold mb-2">{f.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-2xl font-bold mb-6">Siti web per imprese edili in altre città</h2>
          </FadeIn>
          <div className="flex flex-wrap gap-3">
            {cities.filter((c) => c.slug !== city.slug).map((c) => (
              <Link key={c.slug} to={`/siti-web-edili-${c.slug}`} className="bg-card border border-border rounded-full px-5 py-2.5 text-sm font-ui hover:border-primary/30 hover:text-primary transition-all">
                Imprese Edili {c.name}
              </Link>
            ))}
          </div>
          <h3 className="font-display text-xl font-bold mt-12 mb-4">
            Il tuo mestiere a {city.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-5 max-w-2xl">
            Serramentista, installatore fotovoltaico, impiantista: ogni mestiere ha ricerche
            diverse da intercettare, anche nella stessa città.
          </p>
          <div className="flex flex-wrap gap-3">
            {settori.map((s) => (
              <Link key={s.slug} to={`/${s.slug}`} className="bg-card border border-border rounded-full px-5 py-2.5 text-sm font-ui hover:border-primary/30 hover:text-primary transition-all">
                {s.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <Link to="/settori" className="text-primary font-ui text-sm hover:underline">Settori e Zone →</Link>
            <Link to="/servizi" className="text-primary font-ui text-sm hover:underline">Tutti i Servizi →</Link>
            <Link to="/progetti" className="text-primary font-ui text-sm hover:underline">Progetti Realizzati →</Link>
            <Link to="/blog" className="text-primary font-ui text-sm hover:underline">Blog Marketing Edile →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Porta più clienti alla tua impresa edile a {city.name}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Contatta ClientiEdili per una consulenza gratuita. Ti mostreremo come posizionarti in prima pagina su Google per "{city.localKeyword}".
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link to="/#contatti" className="btn-carino">
              Parliamone Subito
              <span className="arrow-circle"><ArrowUpRight size={18} /></span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}

export { cities };
