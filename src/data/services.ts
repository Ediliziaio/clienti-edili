/**
 * Servizi con pagina di dettaglio dedicata (/servizi/<slug>).
 *
 * Unica fonte di verità: da qui arrivano le rotte (src/App.tsx), il sitemap
 * (scripts/sitemap.ts) e il contenuto della pagina. Per aggiungere un servizio
 * basta appendere un elemento a questo array.
 *
 * IMPORTANTE: questo file deve restare di soli dati, senza import. Viene letto
 * anche da scripts/sitemap.ts, che gira dentro vite.config.ts prima che esistano
 * l'alias "@" e i loader per le immagini: un import di .jpg qui fa fallire il
 * build. Icona e immagine sono quindi chiavi, risolte in ServizioDettaglio.tsx.
 */

/** Chiavi delle icone lucide usate dalle pagine servizio. */
export type ServiceIcon = "globe" | "search" | "share" | "chart" | "megaphone";

/** Chiavi delle immagini di copertina delle pagine servizio. */
export type ServiceImage = "construction" | "seo" | "gmb" | "social";

export interface ServiceData {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** Chiavi risolte in icona e immagine da src/pages/ServizioDettaglio.tsx. */
  icon: ServiceIcon;
  image: ServiceImage;
  intro: string;
  whyTitle: string;
  whyText: string;
  howItWorks: { step: string; title: string; desc: string }[];
  features: string[];
  stats: { value: string; label: string }[];
  faqs: { q: string; a: string }[];
  relatedServices: string[];
  /**
   * Prezzo esposto in pagina. Da valorizzare solo dove il prezzo è pubblico.
   * `amount` e `billing` alimentano lo schema.org Offer: `billing` usa i codici
   * UN/CEFACT ("MON" = mese, "ANN" = anno); ometterlo per un prezzo una tantum.
   */
  price?: { value: string; period?: string; note?: string; amount?: string; billing?: "MON" | "ANN" };
}

export const services: ServiceData[] = [
  {
    slug: "sito-web-edile",
    title: "Sito Web Professionale",
    h1: "Siti Web Professionali per Imprese Edili",
    metaTitle: "Siti Web per Imprese Edili | Consegna 48 Ore | ClientiEdili",
    metaDescription: "ClientiEdili crea siti web professionali per imprese edili. Consegna in 48 ore, zero anticipo, design responsive. 127+ imprese servite.",
    icon: "globe",
    image: "construction",
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
    icon: "search",
    image: "seo",
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
    icon: "share",
    image: "gmb",
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
      { value: "0€", label: "Anticipo: paghi a lavoro approvato" },
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
    icon: "chart",
    image: "social",
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
  {
    slug: "gestione-social-gmb",
    title: "Gestione Social + Google My Business",
    h1: "Social e Google My Business per Imprese Edili",
    metaTitle: "Gestione Social e Google My Business Edilizia | 497€/mese",
    metaDescription: "Gestione completa di Facebook, Instagram e Google My Business per imprese edili: post pubblicati per te e profilo curato. 497€/mese, disdici quando vuoi.",
    icon: "megaphone",
    image: "social",
    price: { value: "497€", period: "al mese", note: "Nessun vincolo di durata: disdici quando vuoi.", amount: "497", billing: "MON" },
    intro: "Il sito porta clienti se qualcuno lo trova. Il problema è che tra un cantiere e l'altro nessuno ha tempo di pubblicare foto, rispondere alle recensioni e tenere aggiornato il profilo Google — e così l'unica cosa che il cliente trova di te è una pagina ferma a due anni fa. Con questo servizio ce ne occupiamo noi: piano editoriale, post pubblicati, profilo Google My Business curato e monitorato. Tu mandi le foto dal cantiere, al resto pensiamo noi.",
    whyTitle: "Perché un profilo fermo ti costa clienti ogni mese",
    whyText: "Quando qualcuno cerca un'impresa edile nella tua zona, Google mostra per primi i tre profili del Local Pack: quelli con recensioni recenti, foto aggiornate e post pubblicati di continuo. Non è un caso, è il criterio con cui Google li ordina. Se il tuo profilo è vuoto o abbandonato resti fuori da quei tre risultati, e chi cerca non scorre oltre. Lo stesso vale per Facebook e Instagram: il cliente che ha ricevuto il tuo nome da un conoscente va a controllarti sui social prima di chiamarti, e una pagina ferma gli dice che l'azienda forse non lavora più. Sono clienti che avevi già in mano e che perdi per una cosa che non richiede competenze, solo costanza — che è esattamente quello che manca a chi sta in cantiere tutto il giorno.",
    howItWorks: [
      { step: "01", title: "Setup in una settimana", desc: "Sistemiamo il profilo Google My Business — categorie, servizi, zone servite, orari, foto — e mettiamo in ordine le pagine Facebook e Instagram. Se non ci sono, le creiamo." },
      { step: "02", title: "Tu mandi le foto, noi pubblichiamo", desc: "Ci mandi le foto dei cantieri su WhatsApp quando capita. Noi scriviamo i testi, prepariamo il piano editoriale del mese e pubblichiamo con costanza su tutti i canali." },
      { step: "03", title: "Recensioni e report", desc: "Gestiamo le richieste di recensione ai tuoi clienti e rispondiamo a quelle che arrivano. Ogni mese ricevi un report con chiamate, richieste di indicazioni e visite al profilo." },
    ],
    features: [
      "Profilo Google My Business ottimizzato e verificato",
      "Post settimanali su Google My Business",
      "Pubblicazione su Facebook e Instagram (12 post al mese)",
      "Piano editoriale mensile costruito sui tuoi lavori",
      "Testi e grafiche a partire dalle tue foto di cantiere",
      "Strategia recensioni e risposta alle recensioni ricevute",
      "Aggiornamento di orari, servizi e zone servite",
      "Report mensile su chiamate e contatti generati",
      "Nessun vincolo di durata",
    ],
    stats: [
      { value: "497€", label: "Al mese, tutto incluso" },
      { value: "12", label: "Post pubblicati ogni mese" },
      { value: "0", label: "Vincoli di durata: disdici quando vuoi" },
      { value: "1", label: "Report ogni mese sui risultati" },
    ],
    faqs: [
      { q: "Quanto costa la gestione social e Google My Business?", a: "497€ al mese, tutto incluso: gestione del profilo Google My Business, post settimanali su Google, 12 pubblicazioni al mese tra Facebook e Instagram, strategia recensioni e report mensile. Nessun vincolo di durata: se non sei soddisfatto disdici quando vuoi." },
      { q: "Devo fornire io i contenuti?", a: "Solo le foto dei tuoi cantieri, che ci mandi su WhatsApp quando capita di farle. A testi, grafiche, piano editoriale e pubblicazione pensiamo noi. Se in un mese non hai foto nuove, lavoriamo sull'archivio e su contenuti che non richiedono cantieri in corso." },
      { q: "Serve anche se ho già il sito?", a: "Sono due cose diverse che lavorano insieme. Il sito convince chi ti ha già trovato; il profilo Google curato è quello che ti fa trovare, perché ti porta dentro il Local Pack — i tre risultati con la mappa che intercettano la maggior parte delle ricerche locali da smartphone." },
      { q: "Posso disdire quando voglio?", a: "Sì. Non c'è vincolo di durata né penale: il servizio si rinnova di mese in mese e puoi interromperlo con un preavviso di 30 giorni. Il profilo Google e le pagine social restano tuoi, con tutto il lavoro fatto fino a quel momento." },
      { q: "In quanto tempo si vedono i risultati?", a: "Le prime settimane servono a sistemare il profilo e a riattivare la pubblicazione. I miglioramenti nelle visualizzazioni e nelle chiamate dal profilo Google si vedono di norma entro il secondo mese, e continuano a crescere finché la pubblicazione resta costante." },
    ],
    relatedServices: ["google-my-business", "social-media", "sito-web-edile"],
  },
];

export const SERVICE_SLUGS = services.map((s) => s.slug);
