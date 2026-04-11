import { useEffect, useRef } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  Globe, Search, Share2, BarChart3, ArrowUpRight, ArrowRight, Check, Star,
  Clock, Shield, Zap, FileText, BarChart, Users, TrendingUp, Target, Map
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

interface ServiceData {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  icon: typeof Globe;
  image: string;
  intro: string;
  whyTitle: string;
  whyText: string;
  howItWorks: { step: string; title: string; desc: string }[];
  features: string[];
  stats: { value: string; label: string }[];
  faqs: { q: string; a: string }[];
  relatedServices: string[];
}

const services: ServiceData[] = [
  {
    slug: "sito-web-edile",
    title: "Sito Web Professionale",
    h1: "Siti Web Professionali per Imprese Edili",
    metaTitle: "Siti Web per Imprese Edili | Consegna 48 Ore | ClientiEdili",
    metaDescription: "ClientiEdili crea siti web professionali per imprese edili. Consegna in 48 ore, zero anticipo, design responsive. 127+ imprese servite.",
    icon: Globe,
    image: serviceConstruction,
    intro: "ClientiEdili crea siti web professionali su misura per imprese edili italiane. Ogni sito è progettato per trasmettere professionalità, mostrare i tuoi lavori migliori e convertire i visitatori in richieste di preventivo. Consegna garantita in 48 ore lavorative, zero anticipo richiesto, garanzia soddisfatti o rimborsati. Oltre 127 imprese edili in tutta Italia si affidano già a ClientiEdili per la loro presenza online.",
    whyTitle: "Perché la tua impresa edile ha bisogno di un sito web professionale",
    whyText: "Il 92% dei potenziali clienti cerca online prima di contattare un'impresa edile. Senza un sito web professionale, la tua impresa è invisibile a questi clienti. Un sito web ben progettato lavora per te 24 ore al giorno, 7 giorni alla settimana: genera richieste di preventivo, mostra i tuoi lavori e costruisce fiducia con i potenziali clienti ancora prima del primo contatto telefonico. Le imprese edili che hanno un sito web professionale ricevono in media 10-15 richieste di preventivo al mese in più rispetto a chi non ce l'ha.",
    howItWorks: [
      { step: "01", title: "Chiamata Conoscitiva", desc: "15 minuti per capire la tua impresa, i servizi che offri e i tuoi obiettivi. ClientiEdili analizza il tuo mercato locale e i tuoi competitor." },
      { step: "02", title: "Anteprima in 24 Ore", desc: "Ricevi la prima bozza del tuo sito web entro 24 ore. Puoi richiedere modifiche illimitate fino a quando il risultato non ti soddisfa al 100%." },
      { step: "03", title: "Online in 48 Ore", desc: "Il tuo sito web viene pubblicato, ottimizzato per Google e pronto a ricevere clienti. Realizzazione completa con assistenza 30 giorni inclusa." },
    ],
    features: [
      "Design personalizzato e moderno per il settore edile",
      "Ottimizzato per smartphone e tablet (mobile-first)",
      "Galleria lavori fotografica con before/after",
      "Form contatto integrato con notifiche email",
      "Caricamento ultra-veloce (< 3 secondi)",
      "Ottimizzazione SEO on-page inclusa",
      "Integrazione Google Analytics",
      "30 giorni di assistenza post-consegna",
    ],
    stats: [
      { value: "127+", label: "Siti web realizzati per imprese edili" },
      { value: "48h", label: "Tempo medio di consegna" },
      { value: "+200%", label: "Aumento medio richieste preventivo" },
      { value: "98%", label: "Clienti soddisfatti" },
    ],
    faqs: [
      { q: "Quanto costa un sito web per impresa edile?", a: "Il prezzo del pacchetto completo ClientiEdili è di €1.000 (invece di €1.400), tutto incluso: realizzazione sito completa, design personalizzato, copywriting, ottimizzazione SEO e 30 giorni di assistenza. Nessun costo nascosto." },
      { q: "Il sito funziona su smartphone?", a: "Assolutamente sì. Ogni sito ClientiEdili è progettato mobile-first, il che significa che funziona perfettamente su smartphone, tablet e desktop. Questo è fondamentale perché oltre il 65% delle ricerche avviene da mobile." },
      { q: "Posso aggiornare il sito da solo?", a: "Sì, ogni sito viene consegnato con un pannello di gestione semplice e intuitivo. Puoi aggiungere foto, modificare testi e gestire i contenuti senza conoscenze tecniche." },
      { q: "Il sito include l'ottimizzazione SEO?", a: "Sì, ogni sito ClientiEdili include l'ottimizzazione SEO on-page: meta tag, title, description, heading structure, alt text immagini, sitemap XML e velocità di caricamento ottimizzata." },
    ],
    relatedServices: ["seo-locale", "google-my-business", "social-media"],
  },
  {
    slug: "seo-locale",
    title: "SEO Locale",
    h1: "SEO Locale per Imprese Edili",
    metaTitle: "SEO Locale per Imprese Edili | Primi su Google | ClientiEdili",
    metaDescription: "ClientiEdili posiziona la tua impresa edile in prima pagina su Google per le ricerche locali. SEO on-page, keyword edili, monitoraggio mensile.",
    icon: Search,
    image: serviceSeo,
    intro: "ClientiEdili offre servizi di SEO locale specifici per imprese edili italiane. Posizionare la tua impresa in prima pagina su Google per le ricerche nella tua zona significa ricevere richieste di preventivo ogni settimana da clienti che cercano esattamente i tuoi servizi. La SEO locale è l'investimento più efficace per un'impresa edile: a differenza della pubblicità, i risultati della SEO continuano a generare clienti nel tempo.",
    whyTitle: "Perché la SEO locale è fondamentale per le imprese edili",
    whyText: "Quando qualcuno cerca 'impresa edile Milano' o 'ristrutturazione bagno Roma' su Google, trova solo le imprese con un sito web ottimizzato per la SEO locale. Senza SEO, la tua impresa è invisibile a migliaia di potenziali clienti ogni mese. ClientiEdili analizza le keyword specifiche del settore edile nella tua zona, ottimizza il tuo sito per posizionarsi in prima pagina e monitora i risultati mensilmente. Le imprese edili che investono in SEO locale con ClientiEdili vedono un aumento medio del 340% del traffico organico nei primi 3 mesi.",
    howItWorks: [
      { step: "01", title: "Analisi Keyword Edili", desc: "ClientiEdili analizza le keyword che i potenziali clienti usano per cercare imprese edili nella tua zona. Identifichiamo le opportunità con il miglior rapporto volume/competizione." },
      { step: "02", title: "Ottimizzazione On-Page", desc: "Ottimizziamo ogni pagina del tuo sito: title, meta description, heading, contenuti, alt text immagini, velocità di caricamento e struttura URL." },
      { step: "03", title: "Monitoraggio e Report", desc: "Ogni mese ricevi un report dettagliato con il posizionamento delle keyword, il traffico organico e le richieste di preventivo generate dal sito." },
    ],
    features: [
      "Analisi keyword specifiche del settore edile",
      "Ottimizzazione on-page completa di tutte le pagine",
      "Contenuti SEO per ogni servizio offerto",
      "Pagine locali ottimizzate per ogni zona servita",
      "Link building strategico nel settore edile",
      "Ottimizzazione Google My Business",
      "Monitoraggio posizionamento keyword mensile",
      "Report risultati dettagliati ogni mese",
      "Strategia contenuti blog SEO-oriented",
      "Analisi competitor locali",
    ],
    stats: [
      { value: "+340%", label: "Aumento medio traffico organico" },
      { value: "Top 5", label: "Posizionamento medio keyword target" },
      { value: "12", label: "Preventivi medi al mese generati" },
      { value: "3 mesi", label: "Tempo medio per primi risultati" },
    ],
    faqs: [
      { q: "Quanto tempo serve per vedere i risultati della SEO?", a: "I primi miglioramenti sono visibili dopo 4-8 settimane. Risultati significativi (prima pagina Google per keyword principali) si ottengono tipicamente in 3-6 mesi. ClientiEdili fornisce report mensili per monitorare i progressi." },
      { q: "La SEO funziona davvero per le imprese edili?", a: "Sì, e il settore edile è uno dei migliori per la SEO locale. La competizione online è ancora bassa rispetto ad altri settori, il che significa che con una strategia SEO corretta puoi raggiungere la prima pagina di Google più rapidamente." },
      { q: "Che differenza c'è tra SEO e Google Ads?", a: "Google Ads sono annunci a pagamento: paghi per ogni click e quando smetti di pagare, sparisci. La SEO è un investimento a lungo termine: una volta raggiunta la prima pagina, continui a ricevere visite e clienti senza pagare per ogni click." },
      { q: "Per quali keyword mi posizionerete?", a: "ClientiEdili si concentra sulle keyword con il miglior rapporto volume/conversione nella tua zona, ad esempio: 'impresa edile [tua città]', 'ristrutturazione [tua città]', 'ditta edile [tua zona]'." },
    ],
    relatedServices: ["sito-web-edile", "google-my-business", "social-media"],
  },
  {
    slug: "google-my-business",
    title: "Google My Business",
    h1: "Google My Business per Imprese Edili",
    metaTitle: "Google My Business per Imprese Edili | ClientiEdili",
    metaDescription: "ClientiEdili ottimizza il profilo Google My Business della tua impresa edile per apparire nel Local Pack. Più visibilità, più chiamate, più clienti.",
    icon: Share2,
    image: serviceGmb,
    intro: "ClientiEdili gestisce e ottimizza il profilo Google My Business della tua impresa edile per farti apparire nel Local Pack — i 3 risultati con mappa che appaiono in cima a Google. Un profilo Google My Business ottimizzato aumenta la visibilità della tua impresa nelle ricerche locali, genera chiamate dirette e costruisce fiducia con le recensioni dei clienti soddisfatti. Il 46% di tutte le ricerche su Google ha un intento locale.",
    whyTitle: "Perché Google My Business è essenziale per le imprese edili",
    whyText: "Quando un potenziale cliente cerca 'impresa edile vicino a me' su Google, i primi risultati che vede sono i profili Google My Business nel Local Pack — con mappa, foto, recensioni e numero di telefono. Se la tua impresa non è lì, perdi il 46% delle ricerche a intento locale. ClientiEdili crea, verifica e ottimizza il tuo profilo Google My Business al 100%, implementa una strategia per raccogliere recensioni a 5 stelle, pubblica post settimanali con foto dei tuoi lavori e gestisce le domande e risposte. Il risultato: più visibilità, più chiamate, più clienti.",
    howItWorks: [
      { step: "01", title: "Creazione e Verifica", desc: "ClientiEdili crea il tuo profilo Google My Business (o ottimizza quello esistente) e completa la procedura di verifica con Google." },
      { step: "02", title: "Ottimizzazione 100%", desc: "Compiliamo ogni campo del profilo: descrizione ottimizzata con keyword, categorie corrette, orari, foto professionali, servizi offerti e zona servita." },
      { step: "03", title: "Gestione Continua", desc: "Pubblichiamo post settimanali con foto dei tuoi lavori, gestiamo le recensioni e rispondiamo alle domande. Il profilo resta sempre aggiornato e attivo." },
    ],
    features: [
      "Creazione e verifica profilo Google My Business",
      "Ottimizzazione completa 100% di tutti i campi",
      "Strategia raccolta recensioni a 5 stelle",
      "Post settimanali con foto dei tuoi lavori",
      "Gestione domande e risposte",
      "Configurazione messaggistica Google",
      "Monitoraggio statistiche (visualizzazioni, click, chiamate)",
      "Aggiornamenti continui orari, foto, servizi",
      "Integrazione con sito web e SEO",
      "Report mensile performance",
    ],
    stats: [
      { value: "46%", label: "Ricerche Google con intento locale" },
      { value: "+70%", label: "Aumento chiamate con profilo ottimizzato" },
      { value: "4.9/5", label: "Rating medio clienti ClientiEdili" },
      { value: "5x", label: "Più visualizzazioni vs profilo non ottimizzato" },
    ],
    faqs: [
      { q: "Cos'è il Local Pack di Google?", a: "Il Local Pack è il blocco con mappa e 3 risultati locali che appare in cima a Google quando cerchi un servizio locale (es. 'impresa edile Milano'). È la posizione più visibile e genera il maggior numero di chiamate e contatti." },
      { q: "Ho già un profilo Google My Business ma non funziona. Potete aiutarmi?", a: "Sì, ClientiEdili analizza il tuo profilo esistente, identifica i problemi e lo ottimizza al 100%. Spesso un profilo incompleto o non ottimizzato è peggio che non averlo: sistemarlo può trasformare i risultati." },
      { q: "Come raccogliete le recensioni?", a: "ClientiEdili implementa un sistema automatizzato per richiedere recensioni ai clienti soddisfatti al momento giusto — dopo la consegna del lavoro. Ti forniamo template messaggi e un link diretto per lasciare la recensione in 30 secondi." },
      { q: "Quanto tempo serve per vedere risultati?", a: "Un profilo Google My Business ottimizzato inizia a generare risultati in 2-4 settimane. L'aumento delle visualizzazioni e delle chiamate è misurabile fin dal primo mese." },
    ],
    relatedServices: ["sito-web-edile", "seo-locale", "social-media"],
  },
  {
    slug: "social-media",
    title: "Social Media Marketing",
    h1: "Social Media Marketing per Imprese Edili",
    metaTitle: "Social Media Marketing per Imprese Edili | ClientiEdili",
    metaDescription: "ClientiEdili gestisce Facebook e Instagram per imprese edili: piano editoriale, contenuti foto/video, campagne pubblicitarie mirate. Più visibilità online.",
    icon: BarChart3,
    image: serviceSocial,
    intro: "ClientiEdili gestisce i social media della tua impresa edile con un approccio strategico e orientato ai risultati. Pagine Facebook e Instagram professionali, piano editoriale mensile con contenuti che mostrano i tuoi lavori migliori, e campagne pubblicitarie mirate per raggiungere potenziali clienti nella tua zona. I social media sono il canale ideale per costruire fiducia e mostrare la qualità del tuo lavoro a chi sta valutando un'impresa edile.",
    whyTitle: "Perché i social media funzionano per le imprese edili",
    whyText: "Le imprese edili hanno un vantaggio enorme sui social media: il tuo lavoro è visivo. Un prima e dopo di una ristrutturazione, un time-lapse di un cantiere, le foto di un lavoro completato — questi contenuti generano engagement naturale e costruiscono fiducia con i potenziali clienti. ClientiEdili trasforma i tuoi cantieri in contenuti che attirano clienti. Non servono foto perfette: con il tuo smartphone e la nostra strategia, creiamo contenuti che funzionano davvero.",
    howItWorks: [
      { step: "01", title: "Setup e Strategia", desc: "ClientiEdili crea o ottimizza le tue pagine Facebook e Instagram, definisce il piano editoriale mensile e la strategia di contenuti in base ai tuoi obiettivi." },
      { step: "02", title: "Creazione Contenuti", desc: "Ogni settimana pubblichiamo contenuti ottimizzati: foto dei tuoi lavori, storie del cantiere, testimonianze clienti, consigli utili. Tu ci mandi le foto, noi creiamo i post." },
      { step: "03", title: "Campagne e Report", desc: "Gestiamo campagne pubblicitarie mirate per raggiungere potenziali clienti nella tua zona. Ogni mese ricevi un report con engagement, reach e contatti generati." },
    ],
    features: [
      "Setup pagine Facebook e Instagram professionali",
      "Piano editoriale mensile personalizzato",
      "Contenuti foto e video ottimizzati",
      "Gestione community e risposte commenti",
      "Campagne pubblicitarie mirate per zona",
      "Report engagement e performance mensile",
      "Strategia hashtag locale per il settore edile",
      "Contenuti prima/dopo dei tuoi lavori",
      "Storie e reel del cantiere",
      "Formazione base per il tuo team",
    ],
    stats: [
      { value: "+150%", label: "Aumento medio follower in 6 mesi" },
      { value: "8-12", label: "Post pubblicati al mese" },
      { value: "+60%", label: "Aumento engagement medio" },
      { value: "3-5", label: "Contatti medi al mese dai social" },
    ],
    faqs: [
      { q: "Devo fornire io le foto?", a: "Sì, ti chiediamo di inviarci le foto dei tuoi lavori — basta il telefono. ClientiEdili si occupa della post-produzione, del copywriting e della pubblicazione. Se preferisci, possiamo organizzare un servizio fotografico professionale." },
      { q: "Quanto tempo devo dedicare ai social?", a: "Pochissimo. ClientiEdili gestisce tutto: creazione contenuti, pubblicazione, risposte ai commenti e campagne. Il tuo unico impegno è inviarci le foto dei tuoi lavori quando li completi." },
      { q: "Facebook o Instagram? Quale funziona meglio?", a: "Per le imprese edili, entrambi funzionano. Facebook è forte per il target 35-60 anni (proprietari di casa). Instagram è ideale per mostrare i lavori visivamente. ClientiEdili gestisce entrambi con una strategia integrata." },
      { q: "Le campagne pubblicitarie sono incluse nel prezzo?", a: "La gestione delle campagne è inclusa nel servizio. Il budget pubblicitario (quanto spendi su Facebook/Instagram per raggiungere le persone) è separato e lo decidi tu in base ai tuoi obiettivi." },
    ],
    relatedServices: ["sito-web-edile", "seo-locale", "google-my-business"],
  },
];

export default function ServizioDettaglio() {
  const { servizio } = useParams<{ servizio: string }>();
  const service = services.find((s) => s.slug === servizio);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service]);

  if (!service) return <Navigate to="/servizi" replace />;

  const related = services.filter((s) => service.relatedServices.includes(s.slug));

  const jsonLd = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://clientiedili.com/" },
        { "@type": "ListItem", position: 2, name: "Servizi", item: "https://clientiedili.com/servizi" },
        { "@type": "ListItem", position: 3, name: service.title, item: `https://clientiedili.com/servizi/${service.slug}` },
      ],
    },
    {
      "@type": "Service",
      name: service.h1,
      description: service.intro,
      provider: { "@id": "https://clientiedili.com/#organization" },
      areaServed: { "@type": "Country", name: "Italia" },
      serviceType: service.title,
    },
    {
      "@type": "FAQPage",
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ];

  return (
    <Layout>
      <SeoHead
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={`https://clientiedili.com/servizi/${service.slug}`}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="pb-20 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <service.icon size={24} className="text-primary" />
                </div>
                <span className="font-ui text-xs tracking-[0.2em] uppercase text-primary">Servizio ClientiEdili</span>
              </div>
              <h1 className="font-display text-5xl sm:text-6xl leading-[1.05] font-bold mb-8">
                {service.h1.split(" ").slice(0, -2).join(" ")}{" "}
                <span className="text-gradient-lime">{service.h1.split(" ").slice(-2).join(" ")}</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">{service.intro}</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contatti" className="btn-carino">
                  Richiedi Preventivo Gratuito
                  <span className="arrow-circle"><ArrowUpRight size={18} /></span>
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src={service.image} alt={service.h1} className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {service.stats.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="text-center">
                  <p className="font-display text-4xl text-primary font-bold">{s.value}</p>
                  <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">{service.whyTitle}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{service.whyText}</p>
          </FadeIn>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12">Come funziona</h2>
          </FadeIn>
          <div className="space-y-8">
            {service.howItWorks.map((step, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 rounded-full bg-primary text-primary-foreground font-display font-bold text-lg flex items-center justify-center">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12">Cosa include</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.features.map((f, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all">
                  <Check size={18} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/80">{f}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12">Domande Frequenti</h2>
          </FadeIn>
          <div className="space-y-6">
            {service.faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-display text-lg font-bold mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold mb-8">Servizi Correlati</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-6">
            {related.map((r, i) => (
              <FadeIn key={r.slug} delay={i * 0.1}>
                <Link to={`/servizi/${r.slug}`} className="group block bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors">{r.title}</h3>
                    <span className="text-primary font-ui text-sm flex items-center gap-1 mt-2">Scopri di più <ArrowRight size={14} /></span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/progetti" className="text-primary font-ui text-sm hover:underline">Progetti Realizzati →</Link>
            <Link to="/blog" className="text-primary font-ui text-sm hover:underline">Blog Marketing Edile →</Link>
            <Link to="/chi-siamo" className="text-primary font-ui text-sm hover:underline">Chi Siamo →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Pronto a far crescere la tua impresa edile?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Contatta ClientiEdili per una consulenza gratuita e senza impegno.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link to="/contatti" className="btn-carino">
              Parliamone Subito
              <span className="arrow-circle"><ArrowUpRight size={18} /></span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
