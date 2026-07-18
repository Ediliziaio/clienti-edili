import { useEffect, useRef } from "react";
import { Navigate, Link, useLocation } from "react-router-dom";
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
  zones: string;
  marketContext: string;
  searchTerms: string[];
  faqs: { q: string; a: string }[];
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
    testimonial: { name: "Davide Marchetti", company: "Marchetti Costruzioni", text: "In 2 giorni avevo il sito online. Il mese dopo ho ricevuto 12 richieste di preventivo da clienti nella zona di Milano." },
    zones: "Lavoriamo con imprese edili di tutta Milano città — dal Centro a Isola, Porta Romana, Navigli, Città Studi, Bicocca, Lambrate, Bovisa e Corvetto — e dell'intero hinterland milanese: Sesto San Giovanni, Cinisello Balsamo, Cologno Monzese, Rho, Monza, San Donato Milanese, Segrate, Corsico, Rozzano e Legnano. Ogni sito web è ottimizzato per le ricerche della zona specifica in cui opera la tua impresa.",
    marketContext: "Milano è il mercato edile più competitivo e redditizio d'Italia: ristrutturazioni di appartamenti, riqualificazioni energetiche di condomini, restyling di uffici e spazi commerciali. La domanda è altissima, ma lo è anche la concorrenza — decine di imprese edili si contendono lo stesso cliente milanese. In questo contesto chi non compare nella prima pagina di Google, di fatto, non esiste per il cliente. Un milanese che deve ristrutturare casa apre Google, confronta 3-4 imprese e sceglie quella che trasmette più professionalità online. In una città dove un singolo intervento vale in media decine di migliaia di euro, anche una sola richiesta di preventivo in più ripaga ampiamente il sito web.",
    searchTerms: ["ristrutturazione appartamento Milano", "impresa edile Sesto San Giovanni", "ristrutturazione bagno Milano", "impresa di costruzioni Monza", "riqualificazione energetica condominio Milano", "ristrutturazione ufficio Milano"],
    faqs: [
      { q: "Quanto conta la SEO locale per un'impresa edile a Milano?", a: "A Milano la SEO locale è decisiva: il mercato è saturo di imprese e il cliente sceglie tra le prime che trova su Google. Posizionarsi per 'impresa edile Milano' e per le ricerche di quartiere (es. 'ristrutturazione Navigli') significa intercettare clienti pronti a chiedere un preventivo, prima che lo facciano i concorrenti." },
      { q: "In quali zone di Milano seguite le imprese edili?", a: "Seguiamo imprese edili in tutta Milano e nell'hinterland: Sesto San Giovanni, Cinisello Balsamo, Cologno Monzese, Rho, Monza, San Donato, Segrate, Corsico e Rozzano. Il sito viene ottimizzato per la zona precisa in cui lavori, così ricevi richieste dai clienti più vicini al tuo raggio d'azione." },
      { q: "Quanto costa il sito web per un'impresa edile a Milano?", a: "Il pacchetto completo costa 1.000€ (invece di 1.400€), tutto incluso: design, copywriting, ottimizzazione SEO locale per Milano e 30 giorni di assistenza. Zero anticipo: paghi solo a sito approvato, con garanzia soddisfatti o rimborsati." },
    ],
  },
  {
    slug: "roma",
    name: "Roma",
    region: "Lazio",
    intro: "ClientiEdili aiuta le imprese edili di Roma e del Lazio a trovare nuovi clienti online. Realizziamo siti web professionali per imprese di costruzione romane, ottimizzati per posizionarsi su Google nelle ricerche locali. Consegna in 48 ore, zero anticipo, garanzia soddisfatti o rimborsati.",
    whyDigital: "Roma è un mercato enorme per l'edilizia: ristrutturazioni di appartamenti, manutenzioni condominiali, restauri e nuove costruzioni. Ogni mese migliaia di romani cercano 'impresa edile Roma', 'ristrutturazione Roma' o 'ditta edile zona Roma'. ClientiEdili posiziona la tua impresa davanti a questi clienti, con un sito web che converte visitatori in richieste di preventivo.",
    localKeyword: "impresa edile Roma",
    projects: 25,
    testimonial: { name: "Fabio Pellegrini", company: "Edil Pellegrini", text: "Finalmente un'agenzia che capisce le esigenze di chi lavora nei cantieri romani. Professionalità e risultati concreti." },
    zones: "Serviamo imprese edili in tutta Roma — Prati, Trastevere, EUR, Parioli, Monteverde, Tuscolano, Montesacro, Ostiense, San Giovanni e Ostia — e nei comuni del Lazio: Fiumicino, Guidonia Montecelio, Tivoli, Pomezia, Frascati, Ciampino, Anzio e Nettuno. Il sito viene costruito per farti trovare dai clienti del tuo quadrante e della tua provincia.",
    marketContext: "Roma è un mercato edile enorme e frammentato: ristrutturazioni di appartamenti, manutenzioni condominiali, restauri di palazzi storici nel centro e nuove costruzioni in periferia e nell'hinterland. La domanda è costante tutto l'anno, ma il cliente romano è diffidente e prima di affidare un lavoro controlla online chi ha di fronte. Un'impresa senza sito, o con un sito vecchio, perde credibilità in partenza. In una città grande come Roma, dove i quartieri funzionano quasi come città a sé, farsi trovare per le ricerche locali del proprio zona è ciò che riempie l'agenda dei sopralluoghi.",
    searchTerms: ["impresa edile Roma", "ristrutturazione appartamento Roma", "impresa edile Roma Est", "ristrutturazione casa Ostia", "manutenzione condominio Roma", "ditta edile Roma Nord"],
    faqs: [
      { q: "Come faccio a farmi trovare come impresa edile a Roma?", a: "A Roma serve un sito web professionale ottimizzato per la SEO locale e un profilo Google My Business curato. Insieme ti fanno comparire quando un romano cerca 'impresa edile Roma' o 'ristrutturazione' nel suo quartiere. ClientiEdili costruisce entrambe le cose e le ottimizza per il tuo quadrante di riferimento." },
      { q: "Lavorate anche con imprese fuori dal centro di Roma?", a: "Sì. Seguiamo imprese edili in tutta l'area romana e nei comuni del Lazio — da Fiumicino a Guidonia, da Tivoli a Pomezia e Frascati. Ottimizziamo il sito per la zona in cui operi, così ricevi richieste dai clienti realmente raggiungibili dai tuoi cantieri." },
      { q: "Quanto tempo serve per avere il sito online a Roma?", a: "48 ore lavorative dalla chiamata conoscitiva, con un'anteprima entro le prime 24 ore. In pochi giorni la tua impresa edile romana è online, ottimizzata per Google e pronta a ricevere richieste di preventivo." },
    ],
  },
  {
    slug: "torino",
    name: "Torino",
    region: "Piemonte",
    intro: "ClientiEdili è specializzata nella creazione di siti web per imprese edili a Torino e in Piemonte. Aiutiamo le imprese di costruzione torinesi a posizionarsi su Google e a ricevere richieste di preventivo ogni settimana. Consegna in 48 ore, nessun anticipo richiesto.",
    whyDigital: "Il settore edile torinese è in forte crescita grazie alle ristrutturazioni e ai bonus edilizi. Chi cerca 'impresa edile Torino' o 'ristrutturazione casa Torino' su Google trova solo le imprese con un sito web ottimizzato. ClientiEdili ti porta in prima pagina su Google per le ricerche locali di Torino e provincia.",
    localKeyword: "impresa edile Torino",
    projects: 15,
    testimonial: { name: "Alessio Damiani", company: "Impresa Damiani", text: "Zero anticipo e risultato eccellente. Primo su Google per 'impresa edile Torino' in 4 mesi." },
    zones: "Seguiamo imprese edili in tutta Torino — Crocetta, San Salvario, Vanchiglia, Mirafiori, Santa Rita, Lingotto, Barriera di Milano e Aurora — e nella cintura torinese: Moncalieri, Rivoli, Collegno, Nichelino, Settimo Torinese, Grugliasco, Chieri e Venaria Reale. Il sito è ottimizzato per intercettare i clienti della tua zona di lavoro.",
    marketContext: "Il mercato edile torinese è in ripresa, spinto da ristrutturazioni, bonus edilizi e dalla riqualificazione di edifici ex-industriali e sottotetti tipici della città. Torino è una piazza più contenuta rispetto a Milano, ma proprio per questo chi presidia bene Google conquista una fetta importante di clienti locali. Molte imprese edili torinesi lavorano ancora solo con il passaparola: chi affianca al passaparola un sito web professionale e la SEO locale si trova con un flusso costante di richieste di preventivo, anche nei mesi più lenti.",
    searchTerms: ["impresa edile Torino", "ristrutturazione casa Torino", "ristrutturazione mansarda Torino", "impresa edile Moncalieri", "riqualificazione energetica Torino", "ristrutturazione appartamento Torino"],
    faqs: [
      { q: "Conviene investire in un sito web per un'impresa edile a Torino?", a: "Sì: a Torino molte imprese vivono ancora di solo passaparola e lasciano scoperto Google. Chi presidia le ricerche locali ('impresa edile Torino', 'ristrutturazione casa Torino') intercetta clienti che altrimenti andrebbero ai pochi concorrenti già online. Con un investimento contenuto ottieni un vantaggio competitivo reale." },
      { q: "Ottimizzate il sito anche per la provincia di Torino?", a: "Sì. Lavoriamo con imprese edili di Torino città e della cintura — Moncalieri, Rivoli, Collegno, Nichelino, Settimo Torinese, Grugliasco e Chieri. Il sito viene ottimizzato per i comuni in cui operi, così le richieste arrivano dai clienti più vicini ai tuoi cantieri." },
      { q: "In quanto tempo posso posizionarmi su Google a Torino?", a: "Il sito è online in 48 ore. Per il posizionamento SEO locale i primi risultati arrivano di norma nell'arco di alcuni mesi: diversi nostri clienti torinesi sono arrivati in prima pagina per 'impresa edile Torino' in circa 4 mesi di lavoro costante." },
    ],
  },
  {
    slug: "napoli",
    name: "Napoli",
    region: "Campania",
    intro: "ClientiEdili crea siti web professionali per imprese edili a Napoli e in Campania. Portiamo la tua impresa di costruzione in prima pagina su Google, con un sito web che genera richieste di preventivo ogni settimana. Consegna in 48 ore, garanzia soddisfatti o rimborsati.",
    whyDigital: "Napoli e la Campania rappresentano uno dei mercati edili più dinamici del Sud Italia. Migliaia di persone cercano ogni mese 'impresa edile Napoli', 'ditta ristrutturazioni Napoli' o 'impresa costruzioni Campania'. ClientiEdili ti rende visibile a tutti questi potenziali clienti con un sito web professionale e ottimizzato per la SEO locale.",
    localKeyword: "impresa edile Napoli",
    projects: 20,
    testimonial: { name: "Stefano Cattaneo", company: "Cattaneo Edilizia", text: "Il sito ha dato una svolta alla mia attività. Ora i clienti mi trovano su Google e mi chiamano ogni settimana." },
    zones: "Lavoriamo con imprese edili in tutta Napoli — Vomero, Posillipo, Chiaia, Fuorigrotta, Arenella, Bagnoli e Soccavo — e nella provincia campana: Pozzuoli, Giugliano in Campania, Casoria, Portici, Ercolano, Torre del Greco, Aversa e Marano. Ogni sito è ottimizzato per la zona in cui la tua impresa opera davvero.",
    marketContext: "Napoli e la Campania sono tra i mercati edili più dinamici del Sud Italia: ristrutturazioni di appartamenti, consolidamenti strutturali, risanamento dell'umidità e restauro di palazzi storici sono richieste ricorrenti in una città dal patrimonio immobiliare antico. La concorrenza è numerosa ma spesso poco presente online, e questa è una grande opportunità: l'impresa edile napoletana che investe in un sito professionale e nella SEO locale si distingue subito e conquista fiducia. Il cliente campano si fida di chi mostra lavori concreti e recensioni reali — esattamente ciò che un buon sito web mette in evidenza.",
    searchTerms: ["impresa edile Napoli", "ristrutturazione appartamento Napoli", "impresa edile Vomero", "risanamento umidità Napoli", "ristrutturazione casa Pozzuoli", "ditta ristrutturazioni Napoli"],
    faqs: [
      { q: "Perché un'impresa edile a Napoli dovrebbe avere un sito web?", a: "A Napoli molte imprese edili non sono ancora presenti online in modo professionale: chi lo fa si distingue immediatamente e conquista la fiducia del cliente. Un sito con lavori, recensioni e form di contatto ti fa trovare quando i napoletani cercano 'impresa edile Napoli' o 'ristrutturazione' nel loro quartiere." },
      { q: "Seguite imprese edili anche in provincia di Napoli?", a: "Sì. Lavoriamo con imprese di Napoli città e della provincia — Pozzuoli, Giugliano, Casoria, Portici, Ercolano, Torre del Greco e Aversa. Il sito viene ottimizzato per i comuni in cui operi, così ricevi richieste dai clienti più vicini ai tuoi cantieri." },
      { q: "Il sito include le foto dei miei lavori a Napoli?", a: "Sì: la galleria lavori è inclusa nel pacchetto. Le foto dei tuoi cantieri napoletani, ben presentate, sono lo strumento più efficace per convincere un nuovo cliente. Bastano le foto scattate con il telefono, alla grafica e all'ottimizzazione pensiamo noi." },
    ],
  },
  {
    slug: "bologna",
    name: "Bologna",
    region: "Emilia-Romagna",
    intro: "ClientiEdili realizza siti web professionali per imprese edili a Bologna e in Emilia-Romagna. Aiutiamo le imprese di costruzione bolognesi ad acquisire nuovi clienti tramite Google, con siti web ottimizzati per la SEO locale. Consegna in 48 ore, zero anticipo.",
    whyDigital: "Bologna e l'Emilia-Romagna hanno un mercato edile vivace, con forte domanda di ristrutturazioni e nuove costruzioni. Chi cerca 'impresa edile Bologna' o 'ristrutturazione Bologna' su Google troverà solo chi ha investito nella propria presenza online. ClientiEdili ti porta davanti a questi clienti con un sito che funziona davvero.",
    localKeyword: "impresa edile Bologna",
    projects: 12,
    testimonial: { name: "Matteo Sartori", company: "Sartori Edil Service", text: "Con il nuovo sito ricevo 3-4 richieste di preventivo a settimana. Un investimento che si è ripagato nel primo mese." },
    zones: "Seguiamo imprese edili in tutta Bologna — Centro, Bolognina, San Donato, Santo Stefano, Saragozza, Navile, Murri e Corticella — e nella provincia: Casalecchio di Reno, San Lazzaro di Savena, Imola, Castel Maggiore, Zola Predosa e Castenaso, fino alle vicine Modena e Ferrara. Il sito è ottimizzato per i clienti della tua area.",
    marketContext: "Bologna e l'Emilia-Romagna hanno un mercato edile solido e con forte domanda: ristrutturazioni di appartamenti, efficientamento energetico, recupero di sottotetti e il caratteristico restauro dei portici e degli edifici del centro storico. Il cliente emiliano è concreto e informato: confronta più imprese, legge le recensioni e sceglie chi comunica in modo chiaro e professionale. Un'impresa edile bolognese con un sito web ben fatto e una buona SEO locale parte avvantaggiata, perché intercetta la domanda proprio nel momento in cui il cliente cerca su Google e prima che si rivolga alla concorrenza.",
    searchTerms: ["impresa edile Bologna", "ristrutturazione appartamento Bologna", "efficientamento energetico Bologna", "impresa edile Casalecchio", "ristrutturazione casa Bologna", "ristrutturazione bagno Bologna"],
    faqs: [
      { q: "Un sito web aiuta davvero un'impresa edile a Bologna a trovare clienti?", a: "Sì: a Bologna il cliente è informato e confronta più imprese online prima di scegliere. Un sito professionale con lavori, recensioni e form di contatto, ottimizzato per 'impresa edile Bologna', ti fa comparire e ti fa scegliere. Diversi nostri clienti bolognesi ricevono 3-4 richieste di preventivo a settimana." },
      { q: "Lavorate con imprese in provincia di Bologna e in Emilia?", a: "Sì. Seguiamo imprese edili di Bologna città e della provincia — Casalecchio, San Lazzaro, Imola, Castel Maggiore, Zola Predosa — oltre alle vicine Modena e Ferrara. Ottimizziamo il sito per l'area in cui operi, così le richieste arrivano dai clienti raggiungibili." },
      { q: "Cosa è incluso nel sito per un'impresa edile bolognese?", a: "Design personalizzato, copywriting, galleria lavori, form di contatto, ottimizzazione SEO locale per Bologna, profilo Google My Business e 30 giorni di assistenza — tutto a 1.000€ (invece di 1.400€), zero anticipo e garanzia soddisfatti o rimborsati." },
    ],
  },
];

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
        title={`Siti Web per Imprese Edili a ${city.name} | ClientiEdili`}
        description={`ClientiEdili crea siti web per imprese edili a ${city.name}. Consegna in 48 ore, zero anticipo. Primi su Google per "${city.localKeyword}".`}
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
