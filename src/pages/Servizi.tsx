import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe, Search, Share2, BarChart3, ArrowUpRight, Check,
  Shield, Clock, Zap, Headphones
} from "lucide-react";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import serviceConstruction from "@/assets/service-construction.jpg";
import serviceSeo from "@/assets/service-seo.jpg";
import serviceGmb from "@/assets/service-gmb.jpg";
import serviceSocial from "@/assets/service-social.jpg";

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}

const services = [
  {
    icon: Globe,
    title: "Sito Web Professionale",
    desc: "ClientiEdili crea siti web moderni, veloci e responsive per imprese edili italiane. Ogni sito è progettato su misura per trasmettere professionalità e convertire visitatori in richieste di preventivo. Consegna in 48 ore, zero anticipo.",
    image: serviceConstruction,
    features: [
      "Design personalizzato e moderno",
      "Ottimizzato per smartphone e tablet",
      "Galleria lavori fotografica",
      "Form contatto integrato",
      "Caricamento ultra-veloce",
      "Certificato SSL e hosting inclusi",
      "Dominio personalizzato per 1 anno",
      "Manutenzione e aggiornamenti inclusi",
    ],
  },
  {
    icon: Search,
    title: "SEO Locale",
    desc: "ClientiEdili offre servizi di SEO locale per imprese edili: quando qualcuno cerca 'impresa edile + la tua città' su Google, la tua azienda apparirà tra i primi risultati. Analisi keyword, ottimizzazione on-page e monitoraggio mensile inclusi.",
    image: serviceSeo,
    features: [
      "Analisi keyword del settore edile",
      "Ottimizzazione on-page completa",
      "Contenuti SEO per ogni servizio",
      "Pagine locali per ogni zona servita",
      "Link building strategico",
      "Monitoraggio posizionamento mensile",
      "Report risultati dettagliati",
      "Strategia contenuti blog",
    ],
  },
  {
    icon: Share2,
    title: "Google My Business",
    desc: "ClientiEdili ottimizza il profilo Google My Business della tua impresa edile per apparire nel Local Pack — i 3 risultati con mappa in cima a Google. Include creazione profilo, strategia recensioni e post settimanali.",
    image: serviceGmb,
    features: [
      "Creazione e verifica profilo",
      "Ottimizzazione completa 100%",
      "Strategia recensioni clienti",
      "Post settimanali con foto",
      "Gestione domande e risposte",
      "Configurazione messaggistica",
      "Monitoraggio statistiche",
      "Aggiornamenti continui",
    ],
  },
  {
    icon: BarChart3,
    title: "Social Media Marketing",
    desc: "ClientiEdili gestisce i social media della tua impresa edile: pagine Facebook e Instagram professionali con piano editoriale, contenuti foto e video dei tuoi lavori, e campagne pubblicitarie mirate per generare contatti.",
    image: serviceSocial,
    features: [
      "Setup pagine Facebook e Instagram",
      "Piano editoriale mensile",
      "Contenuti foto e video",
      "Gestione community",
      "Campagne pubblicitarie mirate",
      "Report engagement mensile",
      "Strategia hashtag locale",
      "Formazione team interno",
    ],
  },
];

const whyUs = [
  { icon: Shield, title: "Zero Anticipo", desc: "Paghi solo a lavoro completato e approvato da te. Nessun rischio." },
  { icon: Clock, title: "Consegna 48h", desc: "Il tuo sito online in soli 2 giorni lavorativi." },
  { icon: Zap, title: "Soddisfatto o Rimborsato", desc: "Non ti piace? Ti restituiamo tutto, senza domande." },
  { icon: Headphones, title: "Supporto Dedicato", desc: "Assistenza continua anche dopo la consegna." },
];

const serviziJsonLd = [
  {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://clientiedili.com/" },
      { "@type": "ListItem", "position": 2, "name": "Servizi", "item": "https://clientiedili.com/servizi" },
    ],
  },
  {
    "@type": "WebPage",
    "name": "Servizi di Marketing Digitale per Imprese Edili",
    "description": "ClientiEdili offre siti web professionali, SEO locale, Google My Business e social media marketing per imprese edili italiane. Zero anticipo, consegna in 48 ore.",
    "url": "https://clientiedili.com/servizi",
    "isPartOf": { "@id": "https://clientiedili.com/#website" },
  },
];

export default function Servizi() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SeoHead
        title="Servizi Marketing Digitale per Imprese Edili | ClientiEdili"
        description="Siti web professionali, SEO locale, Google My Business e social media per imprese edili italiane. Zero anticipo, consegna in 48 ore, garanzia soddisfatti o rimborsati."
        canonical="https://clientiedili.com/servizi"
        jsonLd={serviziJsonLd}
      />
      {/* Hero */}
      <section className="pb-20 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="section-label mb-6">( I Nostri Servizi )</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] font-bold mb-6">
              Tutto ciò che serve alla tua{" "}
              <span className="text-gradient-lime">impresa edile</span>{" "}
              per crescere online.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Dal sito web alla SEO, da Google My Business ai social media. Soluzioni complete e personalizzate per portare più clienti alla tua impresa.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, idx) => (
        <section key={idx} className="py-20 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? "lg:direction-rtl" : ""}`}>
              <FadeIn className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </FadeIn>
              <FadeIn delay={0.1} className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <service.icon size={24} className="text-primary" />
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold">{service.title}</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">{service.desc}</p>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check size={16} className="text-primary mt-1 shrink-0" />
                      <span className="text-sm text-foreground/80">{f}</span>
                    </div>
                  ))}
                </div>
                <Link to="/#contatti" className="btn-carino">
                  Richiedi Preventivo
                  <span className="arrow-circle"><ArrowUpRight size={18} /></span>
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

      {/* Why Us */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="section-label mb-6 text-center">( Perché Sceglierci )</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-center mb-16">
              Garanzie che <span className="text-gradient-lime">nessun altro</span> ti offre.
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:-translate-y-2 transition-all duration-500 h-full">
                  <item.icon size={28} className="text-primary mb-4" />
                  <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
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
            <h2 className="font-display text-3xl font-bold mb-8 text-center">Scopri di più</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <Link to="/progetti" className="block bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all">
                <h3 className="font-display text-lg font-bold mb-2">I Nostri Progetti</h3>
                <p className="text-muted-foreground text-sm">Guarda i siti web che abbiamo realizzato per imprese edili in tutta Italia.</p>
              </Link>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link to="/blog" className="block bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all">
                <h3 className="font-display text-lg font-bold mb-2">Blog Marketing Edile</h3>
                <p className="text-muted-foreground text-sm">Guide e strategie per portare più clienti alla tua impresa edile.</p>
              </Link>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Link to="/chi-siamo" className="block bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all">
                <h3 className="font-display text-lg font-bold mb-2">Chi Siamo</h3>
                <p className="text-muted-foreground text-sm">Il team di ClientiEdili: specialisti in marketing digitale per il settore edile dal 2019.</p>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-display text-5xl sm:text-6xl font-bold mb-6">
              Pronto a far crescere la tua impresa<span className="text-primary">?</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Contattaci per una consulenza gratuita. Ti mostreremo come portare più clienti alla tua impresa edile.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/#contatti" className="btn-carino">
                Parliamone Subito
                <span className="arrow-circle"><ArrowUpRight size={18} /></span>
              </Link>
              <a href="tel:+390212345678" className="btn-carino-outline">
                Chiama Ora
                <span className="arrow-circle"><ArrowUpRight size={18} /></span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
