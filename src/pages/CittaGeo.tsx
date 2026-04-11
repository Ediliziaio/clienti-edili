import { useEffect, useRef } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Check, Star, MapPin, Phone, Clock, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
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

interface CityData {
  slug: string;
  name: string;
  region: string;
  intro: string;
  whyDigital: string;
  localKeyword: string;
  projects: number;
  testimonial: { name: string; company: string; text: string };
}

const cities: CityData[] = [
  {
    slug: "milano",
    name: "Milano",
    region: "Lombardia",
    intro: "ClientiEdili è l'agenzia di riferimento per le imprese edili a Milano e in Lombardia. Creiamo siti web professionali ottimizzati per le ricerche locali milanesi, con consegna in 48 ore e zero anticipo. Oltre 30 imprese edili milanesi si affidano già a noi per trovare nuovi clienti online.",
    whyDigital: "Milano è il mercato edile più competitivo d'Italia. Ogni giorno migliaia di persone cercano su Google 'impresa edile Milano', 'ristrutturazione appartamento Milano' o 'impresa di costruzioni Milano'. Senza un sito web professionale e ottimizzato per la SEO locale, la tua impresa è invisibile a questi potenziali clienti. ClientiEdili ti posiziona in prima pagina su Google per le ricerche nella zona di Milano e hinterland.",
    localKeyword: "impresa edile Milano",
    projects: 30,
    testimonial: { name: "Marco Rossi", company: "Rossi Costruzioni", text: "In 2 giorni avevo il sito online. Il mese dopo ho ricevuto 12 richieste di preventivo da clienti nella zona di Milano." },
  },
  {
    slug: "roma",
    name: "Roma",
    region: "Lazio",
    intro: "ClientiEdili aiuta le imprese edili di Roma e del Lazio a trovare nuovi clienti online. Realizziamo siti web professionali per imprese di costruzione romane, ottimizzati per posizionarsi su Google nelle ricerche locali. Consegna in 48 ore, zero anticipo, garanzia soddisfatti o rimborsati.",
    whyDigital: "Roma è un mercato enorme per l'edilizia: ristrutturazioni di appartamenti, manutenzioni condominiali, restauri e nuove costruzioni. Ogni mese migliaia di romani cercano 'impresa edile Roma', 'ristrutturazione Roma' o 'ditta edile zona Roma'. ClientiEdili posiziona la tua impresa davanti a questi clienti, con un sito web che converte visitatori in richieste di preventivo.",
    localKeyword: "impresa edile Roma",
    projects: 25,
    testimonial: { name: "Giuseppe Bianchi", company: "Edil Bianchi", text: "Finalmente un'agenzia che capisce le esigenze di chi lavora nei cantieri romani. Professionalità e risultati concreti." },
  },
  {
    slug: "torino",
    name: "Torino",
    region: "Piemonte",
    intro: "ClientiEdili è specializzata nella creazione di siti web per imprese edili a Torino e in Piemonte. Aiutiamo le imprese di costruzione torinesi a posizionarsi su Google e a ricevere richieste di preventivo ogni settimana. Consegna in 48 ore, nessun anticipo richiesto.",
    whyDigital: "Il settore edile torinese è in forte crescita grazie alle ristrutturazioni e ai bonus edilizi. Chi cerca 'impresa edile Torino' o 'ristrutturazione casa Torino' su Google trova solo le imprese con un sito web ottimizzato. ClientiEdili ti porta in prima pagina su Google per le ricerche locali di Torino e provincia.",
    localKeyword: "impresa edile Torino",
    projects: 15,
    testimonial: { name: "Luca Colombo", company: "Impresa Colombo", text: "Zero anticipo e risultato eccellente. Primo su Google per 'impresa edile Torino' in 4 mesi." },
  },
  {
    slug: "napoli",
    name: "Napoli",
    region: "Campania",
    intro: "ClientiEdili crea siti web professionali per imprese edili a Napoli e in Campania. Portiamo la tua impresa di costruzione in prima pagina su Google, con un sito web che genera richieste di preventivo ogni settimana. Consegna in 48 ore, garanzia soddisfatti o rimborsati.",
    whyDigital: "Napoli e la Campania rappresentano uno dei mercati edili più dinamici del Sud Italia. Migliaia di persone cercano ogni mese 'impresa edile Napoli', 'ditta ristrutturazioni Napoli' o 'impresa costruzioni Campania'. ClientiEdili ti rende visibile a tutti questi potenziali clienti con un sito web professionale e ottimizzato per la SEO locale.",
    localKeyword: "impresa edile Napoli",
    projects: 20,
    testimonial: { name: "Antonio Ferrari", company: "Costruzioni Ferrari", text: "Il sito ha dato una svolta alla mia attività. Ora i clienti mi trovano su Google e mi chiamano ogni settimana." },
  },
  {
    slug: "bologna",
    name: "Bologna",
    region: "Emilia-Romagna",
    intro: "ClientiEdili realizza siti web professionali per imprese edili a Bologna e in Emilia-Romagna. Aiutiamo le imprese di costruzione bolognesi ad acquisire nuovi clienti tramite Google, con siti web ottimizzati per la SEO locale. Consegna in 48 ore, zero anticipo.",
    whyDigital: "Bologna e l'Emilia-Romagna hanno un mercato edile vivace, con forte domanda di ristrutturazioni e nuove costruzioni. Chi cerca 'impresa edile Bologna' o 'ristrutturazione Bologna' su Google troverà solo chi ha investito nella propria presenza online. ClientiEdili ti porta davanti a questi clienti con un sito che funziona davvero.",
    localKeyword: "impresa edile Bologna",
    projects: 12,
    testimonial: { name: "Roberto Conti", company: "Edil Pro Bologna", text: "Con il nuovo sito ricevo 3-4 richieste di preventivo a settimana. Un investimento che si è ripagato nel primo mese." },
  },
];

const features = [
  "Sito web professionale su misura",
  "Ottimizzato per ricerche locali nella tua zona",
  "Design responsive (mobile-first)",
  "Galleria lavori fotografica",
  "Form contatto integrato",
  "Profilo Google My Business ottimizzato",
  "Certificato SSL e hosting inclusi",
  "30 giorni di assistenza post-consegna",
];

const projectImages = [project1, project2, project3];

export default function CittaGeo() {
  const { citta } = useParams<{ citta: string }>();
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
        { "@type": "ListItem", position: 2, name: "Servizi", item: "https://clientiedili.com/servizi" },
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
  ];

  return (
    <Layout>
      <SeoHead
        title={`Siti Web per Imprese Edili a ${city.name} | ClientiEdili`}
        description={`ClientiEdili crea siti web professionali per imprese edili a ${city.name}. Consegna in 48 ore, zero anticipo. Posizionamento su Google per "${city.localKeyword}".`}
        canonical={`https://clientiedili.com/siti-web-edili-${city.slug}`}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="pb-20 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-2 mb-6">
              <MapPin size={16} className="text-primary" />
              <span className="font-ui text-xs tracking-[0.2em] uppercase text-primary">{city.name}, {city.region}</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] font-bold mb-8">
              Siti Web per Imprese Edili a{" "}
              <span className="text-gradient-lime">{city.name}</span>
            </h1>
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
                  <p className="font-display text-4xl text-primary font-bold">{city.projects}+</p>
                  <p className="text-muted-foreground text-sm mt-1">Imprese edili servite a {city.name}</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <p className="font-display text-4xl text-primary font-bold">48h</p>
                  <p className="text-muted-foreground text-sm mt-1">Consegna del sito web</p>
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

      {/* Testimonial */}
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
          <div className="flex flex-wrap gap-3 mt-6">
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
