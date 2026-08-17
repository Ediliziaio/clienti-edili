export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  /**
   * Domande frequenti in coda all'articolo. Alimentano anche il FAQPage
   * JSON-LD: sono il modo più diretto per ottenere i rich result a fisarmonica
   * nei risultati di Google.
   */
  faqs?: { q: string; a: string }[];
  /**
   * Slug di settori (src/data/settori.ts) e servizi (src/data/services.ts) a cui
   * l'articolo appartiene: costruiscono il topic cluster, cioè la hub linka gli
   * articoli e gli articoli linkano la hub.
   *
   * Senza questi collegamenti gli articoli restano quasi orfani, ed è il motivo
   * per cui diversi erano "scansionati ma non indicizzati" su Search Console:
   * ricevevano uno o due link interni contro i 26 delle pagine città.
   */
  tags?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "sito-web-professionale-impresa-edile",
    title: "Cosa Guarda un Cliente sul Sito di un'Impresa Edile",
    metaTitle: "Cosa Guarda il Cliente sul Sito di un'Impresa Edile",
    metaDescription: "Cosa guarda davvero un cliente quando apre il sito di un'impresa edile, in che ordine, e cosa lo fa chiudere la pagina senza chiamare.",
    date: "15 Mar 2026",
    category: "Marketing Digitale",
    readTime: "12 min",
    excerpt: "Scopri come un sito web professionale può trasformare la tua impresa edile, attirando nuovi clienti ogni giorno e aumentando il fatturato.",
    tags: ["sito-web-edile", "marketing-edilizia"],
  },
  {
    slug: "seo-locale-imprese-edili-guida-completa",
    title: "Come Funziona la SEO Locale: Guida per Chi Lavora in Cantiere",
    metaTitle: "Come Funziona la SEO Locale nell'Edilizia",
    metaDescription: "Come funziona la SEO locale spiegata a chi lavora in cantiere: cosa guarda Google per le ricerche di zona e in quanto tempo cambia qualcosa.",
    date: "10 Mar 2026",
    category: "SEO",
    readTime: "15 min",
    excerpt: "La guida definitiva per posizionare la tua impresa edile in cima ai risultati di Google nella tua zona. Strategie pratiche e risultati concreti.",
    tags: ["seo-locale", "marketing-edilizia"],
  },
  {
    slug: "google-my-business-imprese-costruzione",
    title: "Scheda Google: gli Errori che Tengono Fuori dal Local Pack",
    metaTitle: "Scheda Google: gli Errori più Comuni nell'Edilizia",
    metaDescription: "Gli errori più comuni nella scheda Google di un'impresa di costruzioni e come correggerli: categorie, servizi, foto, orari e coerenza dei dati.",
    date: "5 Mar 2026",
    category: "Google",
    readTime: "13 min",
    excerpt: "Impara a ottimizzare il tuo profilo Google My Business per ricevere più chiamate e richieste di preventivo dalla tua zona.",
    tags: ["google-my-business", "gestione-social-gmb"],
  },
  {
    slug: "errori-fatali-imprese-edili-online",
    title: "5 Errori che Fanno Perdere Clienti alle Imprese Edili Online",
    metaTitle: "5 Errori che Fanno Perdere Clienti Online",
    metaDescription: "I cinque errori che fanno perdere clienti alle imprese edili online, dal profilo abbandonato al preventivo che non arriva mai. Come correggerli.",
    date: "28 Feb 2026",
    category: "Strategia",
    readTime: "11 min",
    excerpt: "I 5 errori più comuni che le imprese edili fanno con la loro presenza online. Scopri come evitarli e iniziare a generare clienti.",
    tags: ["marketing-edilizia"],
  },
  {
    slug: "social-media-marketing-imprese-edili",
    title: "Cosa Pubblicare sui Social con un'Impresa Edile",
    metaTitle: "Cosa Pubblicare sui Social: Impresa Edile",
    metaDescription: "Cosa pubblicare su Facebook e Instagram quando hai un'impresa edile: idee di contenuto dai cantieri, frequenza e cosa evitare. Esempi pratici.",
    date: "20 Feb 2026",
    category: "Social Media",
    readTime: "14 min",
    excerpt: "Guida pratica all'uso di Facebook e Instagram per imprese edili. Strategie, contenuti e consigli per trovare nuovi clienti sui social.",
    tags: ["social-media", "gestione-social-gmb"],
  },
{
  slug: "come-trovare-clienti-impresa-edile",
  title: "Come Trovare Clienti per un'Impresa Edile: la Guida Completa 2026",
  metaTitle: "Come Trovare Clienti Impresa Edile: Guida 2026",
  metaDescription: "Come trovare clienti per un'impresa edile senza passaparola casuale: strategie online che portano preventivi veri. Analisi gratuita su clientiedili.com.",
  date: "10 Apr 2026",
  category: "Lead Generation",
  readTime: "12 min",
  excerpt: "Basta aspettare che squilli il telefono. Ecco il sistema pratico per far arrivare richieste di preventivo alla tua impresa edile ogni settimana, anche in bassa stagione.",
  tags: ["lead-generation-edilizia", "marketing-edilizia"],
  },
{
  slug: "quanto-costa-sito-web-impresa-edile",
  title: "Quanto Costa un Sito Web per Impresa Edile? Prezzi Reali e Cosa Include",
  metaTitle: "Quanto Costa un Sito Web per Impresa Edile 2026",
  metaDescription: "Quanto costa un sito web per impresa edile? Prezzi reali, cosa include e come evitare fregature. Analisi e preventivo gratuito su clientiedili.com.",
  date: "22 Apr 2026",
  category: "Sito Web",
  readTime: "11 min",
  excerpt: "Prezzi veri, senza sorprese: quanto costa davvero un sito web per un'impresa edile, cosa deve includere e come capire se stai pagando il giusto o buttando soldi.",
  tags: ["sito-web-edile"],
  },
{
  slug: "landing-page-impresa-edile-conversioni",
  title: "Landing Page per Impresa Edile: Come Trasformare i Clic in Preventivi",
  metaTitle: "Landing Page per Impresa Edile: Guida Conversioni",
  metaDescription: "Landing page per impresa edile che converte i clic in preventivi veri. Struttura, esempi e errori da evitare. Analisi gratuita su clientiedili.com.",
  date: "05 Mag 2026",
  category: "Marketing Digitale",
  readTime: "12 min",
  excerpt: "Una landing page fatta bene trasforma chi clicca in una richiesta di preventivo. Ecco la struttura esatta che fa dire sì ai clienti di un'impresa edile.",
  tags: ["lead-generation-edilizia", "google-ads-edilizia"],
  },
{
  slug: "google-ads-imprese-edili",
  title: "Google Ads per Imprese Edili: la Guida Pratica per Trovare Clienti Oggi",
  metaTitle: "Google Ads per Imprese Edili: Guida 2026",
  metaDescription: "Google Ads per imprese edili: come impostare campagne che portano richieste di preventivo vere, budget realistici, errori da evitare. Guida pratica.",
  date: "15 Mag 2026",
  category: "Marketing Digitale",
  readTime: "11 min",
  excerpt: "Google Ads per imprese edili spiegato senza fuffa: come trovare clienti mentre cercano un'impresa, quanto spendere davvero e quali errori bruciano il budget.",
  tags: ["google-ads-edilizia"],
  },
{
  slug: "parole-chiave-seo-impresa-edile",
  title: "Come Scegliere le Parole Chiave per un'Impresa Edile",
  metaTitle: "Come Scegliere le Parole Chiave: Impresa Edile",
  metaDescription: "Come si scelgono le parole chiave per un'impresa edile: volume, intenzione e concorrenza, e perché le ricerche di comune battono quelle generiche.",
  date: "28 Mag 2026",
  category: "SEO & Google",
  readTime: "10 min",
  excerpt: "Parole chiave SEO per impresa edile spiegate senza fuffa: quali termini cercano davvero i tuoi clienti, come sceglierli e dove metterli per finire in cima a Google.",
  tags: ["seo-locale"],
  },
{
  slug: "recensioni-google-impresa-edile",
  title: "Come Ottenere Recensioni Google per Impresa Edile: la Guida Completa",
  metaTitle: "Recensioni Google per Impresa Edile: Guida",
  metaDescription: "Come ottenere recensioni Google per impresa edile: strategie pratiche per chiedere feedback, aumentare le stelle e trasformare i clienti in venditori.",
  date: "08 Giu 2026",
  category: "SEO & Google",
  readTime: "10 min",
  excerpt: "Come ottenere recensioni Google per impresa edile: metodi concreti per chiedere feedback ai clienti, salire nelle stelle e battere i concorrenti in zona.",
  tags: ["google-my-business", "gestione-social-gmb"],
  },
{
  slug: "testi-sito-impresa-edile-copywriting",
  title: "Come Scrivere i Testi del Sito di un'Impresa Edile che Vendono Davvero",
  metaTitle: "Testi Sito Impresa Edile: Guida al Copy",
  metaDescription: "Come scrivere i testi del sito di un'impresa edile che trasformano i visitatori in clienti. Guida pratica al copywriting che porta preventivi veri.",
  date: "18 Giu 2026",
  category: "Sito & Contenuti",
  readTime: "9 min",
  excerpt: "Scrivere i testi del sito di un'impresa edile non è raccontare la tua storia: è togliere i dubbi al cliente e portarlo a chiamarti. Ecco come si fa.",
  tags: ["sito-web-edile"],
  },
{
  slug: "sito-web-mobile-impresa-edile",
  title: "Sito Web Mobile per Impresa Edile: Perché Perdi Clienti se il Sito non Funziona da Cellulare",
  metaTitle: "Sito Web Mobile per Impresa Edile: Guida",
  metaDescription: "Sito web mobile per impresa edile: oltre il 70% dei clienti ti cerca da cellulare. Se il sito non funziona da smartphone, perdi preventivi ogni giorno.",
  date: "28 Giu 2026",
  category: "Sito & Contenuti",
  readTime: "8 min",
  excerpt: "Il tuo cliente ti cerca da cellulare, in pausa pranzo o la sera sul divano. Se il sito è illeggibile da smartphone, hai già perso il preventivo.",
  tags: ["sito-web-edile"],
  },
{
  slug: "foto-lavori-cantiere-marketing-edile",
  title: "Foto dei Lavori in Cantiere: la Tua Arma di Marketing più Sottovalutata",
  metaTitle: "Foto Lavori Cantiere: Marketing per Edili",
  metaDescription: "Foto dei lavori in cantiere per il marketing edile: le immagini prima e dopo sono la prova che convince i clienti. Ecco come scattarle e usarle bene.",
  date: "03 Lug 2026",
  category: "Social & Contenuti",
  readTime: "9 min",
  excerpt: "Ogni cantiere che chiudi è materiale di marketing. Le foto prima e dopo sono la prova più potente che hai. Peccato che quasi nessuno le usi bene.",
  tags: ["social-media", "gestione-social-gmb"],
  },
{
  slug: "whatsapp-business-impresa-edile",
  title: "WhatsApp Business per Impresa Edile: la Guida Pratica per Chiudere Più Preventivi",
  metaTitle: "WhatsApp Business per Impresa Edile: Guida",
  metaDescription: "Come usare WhatsApp Business per impresa edile: rispondi veloce, invia preventivi e chiudi più lavori. Guida pratica per costruttori e ristrutturatori.",
  date: "20 Gen 2026",
  category: "Marketing Digitale",
  readTime: "9 min",
  excerpt: "WhatsApp Business per impresa edile: rispondi in minuti, invia preventivi con foto, automatizza le risposte e trasforma i contatti in cantieri veri.",
  tags: ["lead-generation-edilizia"],
  },
{
  slug: "email-marketing-imprese-edili",
  title: "Email Marketing per Imprese Edili: come Riempire il Cantiere Senza Spendere in Pubblicita",
  metaTitle: "Email Marketing per Imprese Edili: Guida 2026",
  metaDescription: "Email marketing per imprese edili: costruisci la lista, invia le email giuste e riattiva i vecchi clienti. Strategie pratiche per costruttori edili.",
  date: "05 Feb 2026",
  category: "Lead Generation",
  readTime: "10 min",
  excerpt: "Email marketing per imprese edili: come raccogliere contatti, riattivare i vecchi clienti e far ripartire i preventivi con messaggi che vendono davvero.",
  tags: ["lead-generation-edilizia"],
  },
{
  slug: "video-marketing-impresa-edile",
  title: "Video Marketing per Impresa Edile: come Farti Scegliere Mostrando i Tuoi Cantieri",
  metaTitle: "Video Marketing per Impresa Edile: Guida",
  metaDescription: "Video marketing per impresa edile: quali video girare, dove pubblicarli e come trasformare i cantieri in clienti. Guida pratica per costruttori.",
  date: "12 Feb 2026",
  category: "Social & Contenuti",
  readTime: "10 min",
  excerpt: "Video marketing per impresa edile: quali video girare col telefono, dove pubblicarli e come trasformare i tuoi cantieri in nuovi clienti e preventivi.",
  tags: ["social-media", "gestione-social-gmb"],
  },
{
  slug: "reputazione-online-impresa-edile",
  title: "Reputazione Online per Impresa Edile: Come Costruirla e Difenderla nel 2026",
  metaTitle: "Reputazione Online Impresa Edile: Guida 2026",
  metaDescription: "Come costruire e difendere la reputazione online della tua impresa edile: recensioni, Google, gestione critiche. Guida pratica per chi lavora in cantiere.",
  date: "15 Gen 2026",
  category: "Marketing Digitale",
  readTime: "9 min",
  excerpt: "La reputazione online decide se un cliente ti chiama o chiama il concorrente. Ecco come costruirla, alimentarla e proteggerla senza perdere tempo in cantiere.",
  tags: ["google-my-business", "gestione-social-gmb"],
  },
{
  slug: "sito-web-o-social-impresa-edile",
  title: "Sito Web o Social per Impresa Edile: Dove Investire Davvero i Tuoi Soldi",
  metaTitle: "Sito Web o Social per Impresa Edile: la Scelta",
  metaDescription: "Sito web o social per la tua impresa edile? Scopri dove conviene investire tempo e soldi per trovare clienti, con esempi pratici dal cantiere.",
  date: "25 Gen 2026",
  category: "Marketing Digitale",
  readTime: "10 min",
  excerpt: "Sito web o social per la tua impresa edile? La risposta non è quella che ti aspetti. Ecco dove conviene mettere i soldi per trovare clienti veri.",
  tags: ["marketing-edilizia", "social-media"],
  },
{
  slug: "preventivi-online-impresa-edile",
  title: "Preventivi Online: Quante Richieste Perdi Rispondendo Tardi",
  metaTitle: "Preventivi Online: Quanto Conta Rispondere Subito",
  metaDescription: "Perché nell'edilizia chi risponde per primo prende il lavoro, come organizzare le risposte alle richieste di preventivo e cosa scrivere.",
  date: "02 Feb 2026",
  category: "Lead Generation",
  readTime: "10 min",
  excerpt: "Fare preventivi online per la tua impresa edile significa rispondere prima dei concorrenti e chiudere più lavori. Ecco il metodo per non perdere più clienti.",
  tags: ["lead-generation-edilizia"],
  },
{
  slug: "gestionale-imprese-edili-software-cloud",
  title: "Il Miglior Gestionale per Imprese Edili: Guida al Software Cloud che Semplifica Cantiere e Fatturazione",
  metaTitle: "Gestionale per Imprese Edili: Guida al Cloud",
  metaDescription: "Qual è il miglior gestionale per imprese edili? Guida alla scelta del software cloud per fatturazione, cantieri, DDT e preventivi. Scoprilo qui.",
  date: "10 Lug 2026",
  category: "Digitalizzazione",
  readTime: "13 min",
  excerpt: "Fatturazione, cantieri, DDT e preventivi in un unico posto: la guida per scegliere il gestionale cloud giusto per la tua impresa edile.",
  tags: ["marketing-edilizia"],
  },
{
  slug: "digitalizzare-impresa-edile-gestionale",
  title: "Come Digitalizzare la Tua Impresa Edile: dalla Fatturazione Elettronica alla Gestione dei Cantieri",
  metaTitle: "Come Digitalizzare la Tua Impresa Edile",
  metaDescription: "Guida pratica per digitalizzare un'impresa edile: fatturazione elettronica, DDT, preventivi e cantieri in cloud. I passi e gli strumenti giusti.",
  date: "14 Lug 2026",
  category: "Digitalizzazione",
  readTime: "12 min",
  excerpt: "I passi concreti per digitalizzare un'impresa edile: fatturazione elettronica, preventivi, DDT e cantieri in cloud, senza complicazioni.",
  tags: ["marketing-edilizia"],
  },
{
  slug: "come-trovare-clienti-serramentista",
  title: "Come Trovare Clienti come Serramentista: la Guida Pratica",
  metaTitle: "Come Trovare Clienti Serramentista: Guida 2026",
  metaDescription: "Come trovare clienti come serramentista: intercettare chi cerca infissi nella tua zona, difendere il margine e non essere confrontato solo sul prezzo.",
  date: "21 Lug 2026",
  category: "Lead Generation",
  readTime: "13 min",
  excerpt: "Chi cambia gli infissi decide molto prima di chiamarti. Ecco come farti trovare in quella fase, e arrivare al preventivo con un vantaggio che il prezzo non può togliere.",
  tags: ["marketing-serramentisti", "lead-generation-edilizia"],
    faqs: [
    { q: "Come si trovano clienti come serramentista?", a: "Intercettando le ricerche di chi sta già valutando di cambiare gli infissi nella tua zona — \"sostituzione infissi\" e \"preventivo serramenti\" seguiti dal nome della città — e presidiando anche le ricerche informative della fase di studio, come il confronto tra PVC, alluminio e legno. Servono un sito con le pose reali e un profilo Google curato che ti porti nel Local Pack." },
    { q: "Quanto costa acquisire un cliente come serramentista?", a: "Dipende dal canale. I lead comprati da portali hanno un costo alto per contatto, non sono esclusivi e si azzerano quando smetti di pagare. Un profilo Google curato e le pagine posizionate hanno un costo per contatto che tende a zero e continuano a portare richieste anche dopo, perché restano tuoi." },
    { q: "Il sito serve anche se lavoro con imprese e costruttori?", a: "Sì, ma va scritto diversamente. Il committente professionale valuta capacità produttiva, tempi di consegna, marchi trattati e commesse simili già eseguite. Conviene una sezione dedicata: mescolare il messaggio per il privato con quello per il professionista indebolisce entrambi." },
    { q: "Conviene puntare sulle ricerche legate ai bonus fiscali?", a: "Sì, ma preparandosi prima. Quando cambia la normativa sulle detrazioni le ricerche si moltiplicano per poche settimane: chi ha già la pagina posizionata raccoglie, chi comincia a scriverla in quel momento arriva quando l'onda è passata." },
    { q: "Quanto tempo serve per posizionarsi?", a: "Il sito è online in 48 ore e converte subito chi ti cerca per nome o dal profilo Google. Il posizionamento sulle ricerche di zona richiede in genere dai tre ai cinque mesi nei comuni minori e dai cinque agli otto nei capoluoghi. Il profilo Google può invece muoversi nel Local Pack in poche settimane." },
  ],
},
{
  slug: "come-trovare-clienti-fotovoltaico",
  title: "Come Trovare Clienti per il Fotovoltaico senza Comprare Lead",
  metaTitle: "Come Trovare Clienti Fotovoltaico senza Lead a Pagamento",
  metaDescription: "Come trovare clienti per impianti fotovoltaici senza comprare lead rivenduti a cinque installatori: costruire un canale che porta richieste esclusive.",
  date: "24 Lug 2026",
  category: "Lead Generation",
  readTime: "12 min",
  excerpt: "I lead comprati ti mettono in gara con altri quattro installatori sullo stesso cliente. Ecco come costruire un canale che porta richieste solo tue.",
  tags: ["marketing-fotovoltaico", "lead-generation-edilizia"],
    faqs: [
    { q: "Conviene comprare lead fotovoltaici?", a: "I lead comprati arrivano subito ma vengono venduti in parallelo ad altri quattro o cinque installatori, ti mettono in gara sul prezzo e si azzerano quando smetti di pagare. Hanno senso se serve volume immediato, ma solo mentre costruisci un canale proprio: altrimenti tra due anni sei nella stessa posizione con costi più alti." },
    { q: "Quali ricerche fotovoltaiche portano più clienti?", a: "Quelle commerciali locali e transazionali — \"impianto fotovoltaico\" o \"preventivo fotovoltaico\" più il nome della città. C'è poi una fascia molto redditizia e quasi ignorata: manutenzione, pulizia moduli, sostituzione inverter e revamping, che hanno concorrenza online bassissima e generano clienti ricorrenti." },
    { q: "Cosa deve mostrare il sito di un installatore fotovoltaico?", a: "Dati verificabili, non aggettivi: potenza installata, tipo di moduli e inverter, presenza di accumulo, comune, mese di entrata in produzione e produzione annua reale. Il cliente non sa valutare un modulo, ma capisce benissimo quanti kWh ha prodotto un impianto simile al suo." },
    { q: "Meglio puntare sul residenziale o sull'industriale?", a: "Sono due mercati con ricerche e committenti diversi e vanno presidiati con pagine separate. Il residenziale ha volumi alti e decisione rapida; l'industriale ha meno ricerche ma commesse molto più grandi e un committente tecnico che valuta referenze e capacità." },
    { q: "Come si passa dai lead comprati a un canale proprio?", a: "Gradualmente, in tre fasi: si continua a comprare mentre si mette online il sito e si sistema il profilo Google; dopo due o tre mesi si riduce il budget della quota che l'organico già copre; dopo sei-otto mesi l'organico regge la base e i lead restano solo come acceleratore." },
  ],
},
{
  slug: "local-pack-google-imprese-edili",
  title: "Local Pack di Google: come entrare nei 3 risultati con la mappa",
  metaTitle: "Local Pack Google: Entrare nei Primi 3 Risultati | Edilizia",
  metaDescription: "Come entrare nel Local Pack di Google, i tre risultati con la mappa che si prendono la maggior parte delle chiamate. Guida pratica per imprese edili.",
  date: "28 Lug 2026",
  category: "SEO Locale",
  readTime: "12 min",
  excerpt: "I tre risultati con la mappa raccolgono la maggior parte delle chiamate da smartphone. Ecco cosa determina chi ci finisce dentro e cosa puoi controllare davvero.",
  tags: ["gestione-social-gmb", "google-my-business", "seo-locale"],
    faqs: [
    { q: "Cos'è il Local Pack di Google?", a: "È il blocco con la mappa e tre aziende che Google mostra in cima ai risultati per le ricerche locali. Ha le recensioni e il pulsante per chiamare, occupa quasi tutto lo schermo di uno smartphone e raccoglie la maggior parte delle chiamate: chi è quarto, per gran parte delle persone, non esiste." },
    { q: "Come si entra nel Local Pack?", a: "Google usa rilevanza, distanza e prominenza. Sulla rilevanza si agisce con categoria specifica, servizi compilati voce per voce e zone servite; sulla prominenza con recensioni recenti e continue, foto aggiornate e post regolari. La distanza non si può cambiare, ma si può definire bene l'area di lavoro." },
    { q: "Quante recensioni servono per posizionarsi?", a: "Non esiste una soglia: conta più la continuità del totale. Un'impresa con quindici recensioni di cui tre nell'ultimo mese batte una con quaranta ferme a due anni fa. L'obiettivo pratico più utile sono due o tre recensioni nuove al mese, sempre." },
    { q: "Ogni quanto pubblicare sul profilo Google?", a: "Una volta a settimana è la frequenza che dà risultati senza diventare un peso. Sotto le due volte al mese l'effetto si perde. Non serve nulla di elaborato: la foto di un cantiere scattata col telefono e due righe su cosa si sta facendo e dove." },
    { q: "Conta di più il profilo Google o il sito?", a: "Dipende dal lavoro. Per le urgenze — idraulico, elettricista, riparazione tetto — il profilo è quasi tutto, perché si decide in due minuti. Per i lavori programmati il profilo porta il primo contatto ma il sito convince, perché il cliente approfondisce prima di scegliere." },
  ],
},
{
  slug: "trovare-clienti-cappotto-termico",
  title: "Cappotto Termico: come trovare clienti quando i bonus si riducono",
  metaTitle: "Trovare Clienti Cappotto Termico dopo i Bonus | 2026",
  metaDescription: "Come trovare clienti per il cappotto termico ora che gli incentivi si sono ridotti: intercettare la domanda vera di riqualificazione energetica.",
  date: "30 Lug 2026",
  category: "Lead Generation",
  readTime: "11 min",
  excerpt: "Chi è cresciuto con i bonus ha visto il telefono spegnersi da un giorno all'altro. La domanda però è rimasta: cambia solo chi la intercetta.",
  tags: ["marketing-cappotto-termico"],
    faqs: [
    { q: "La domanda di cappotto termico è finita con i bonus?", a: "No: è strutturale. Gran parte del patrimonio edilizio italiano è in classe energetica bassa, il costo dell'energia resta alto e la direttiva europea sull'efficienza degli edifici spinge verso riqualificazioni che dureranno anni. È cambiato il cliente, che ora paga una quota reale e quindi confronta e vuole capire." },
    { q: "Come si intercettano gli amministratori di condominio?", a: "Con una sezione del sito dedicata a loro. L'amministratore deve difendere la scelta in assemblea, quindi cerca referenze condominiali documentate: quanti condomini, di che dimensione, con quali tempi, come è stato gestito il ponteggio e la comunicazione con i residenti." },
    { q: "Quali informazioni convincono chi deve fare il cappotto?", a: "Quelle sulla gestione del cantiere, più che sui materiali: quanto dura, quanto resta su il ponteggio, se si può stare in casa, cosa succede ai balconi e ai davanzali, come si raccorda il cappotto con i serramenti. Sono le domande che il committente si fa e che quasi nessuna impresa affronta online." },
    { q: "Conviene ancora posizionarsi su \"cappotto termico\"?", a: "Sì, e più di due anni fa. Molte imprese nate sull'onda degli incentivi si sono fermate o hanno chiuso, quindi la concorrenza sulle ricerche è più bassa oggi di quando tutti facevano cappotto. Posizionarsi adesso costa meno fatica." },
    { q: "Serve un sito se lavoro in subappalto per general contractor?", a: "Sì, per due motivi. Dipendere da pochi committenti concentra il rischio, e un canale proprio lo riduce. Inoltre anche i general contractor selezionano i subappaltatori guardando online chi ha già fatto lavori simili: un sito ben fatto rafforza pure quel canale." },
  ],
},
{
  slug: "quanto-costa-google-ads-impresa-edile",
  title: "Quanto Costa Google Ads per un'Impresa Edile (e quando conviene)",
  metaTitle: "Quanto Costa Google Ads per Impresa Edile | Costi Reali",
  metaDescription: "Quanto costa Google Ads per un'impresa edile: costo per clic reali, budget minimi sensati e i due errori che bruciano il budget senza portare richieste.",
  date: "01 Ago 2026",
  category: "Marketing Digitale",
  readTime: "11 min",
  excerpt: "Le campagne portano clic dal primo giorno, anche a chi ha una pagina che non converte. Ecco i numeri reali e come capire se nel tuo caso conviene.",
  tags: ["google-ads-edilizia"],
    faqs: [
    { q: "Quanto costa Google Ads per un'impresa edile?", a: "Il costo per clic varia molto: le parole generiche nei capoluoghi sono le più care e portano contatti poco qualificati, quelle specifiche nei comuni minori costano una frazione e convertono meglio. Il numero che conta però non è il costo per clic, è il costo di acquisizione di un cliente — e quello dipende soprattutto dalla pagina di atterraggio." },
    { q: "Perché la mia campagna non ha portato richieste?", a: "Quasi sempre per due motivi: parole troppo generiche e traffico mandato sulla home invece che su una pagina dedicata al servizio cercato. Chi cerca \"rifacimento bagno\" deve atterrare su una pagina di rifacimenti bagno, con foto e un modo immediato per chiedere il sopralluogo." },
    { q: "Meglio Google Ads o SEO per un'impresa edile?", a: "Fanno cose diverse. Le campagne portano richieste subito e si fermano quando smetti di pagare; l'organico parte in mesi ma costruisce un canale che resta. L'ordine che funziona è: prima il sito e le pagine che convertono, poi il profilo Google e l'organico, le campagne come acceleratore." },
    { q: "Quanto budget serve per partire?", a: "Un budget che permetta di raccogliere abbastanza richieste da valutare quante ne chiudi. Con due richieste al mese non si conclude nulla; con quindici si comincia a vedere il tasso reale. La cifra dipende dal costo per clic della tua zona, ed è il dato da misurare prima di partire." },
    { q: "Il tracciamento delle conversioni è indispensabile?", a: "Sì. Senza tracciamento non sai quali parole portano richieste e quali bruciano budget, quindi non puoi ottimizzare nulla. Va configurato prima di attivare qualsiasi campagna: senza, ottieni solo un'opinione su cosa ha funzionato; con, ottieni dati." },
  ],
},
{
  slug: "trovare-clienti-rifacimento-tetti",
  title: "Rifacimento Tetti: come farsi trovare quando c'è un'infiltrazione",
  metaTitle: "Trovare Clienti Rifacimento Tetti e Coperture | Guida",
  metaDescription: "Come farsi trovare come impresa di coperture quando qualcuno ha un'infiltrazione: le ricerche da presidiare e cosa convince un cliente diffidente.",
  date: "04 Ago 2026",
  category: "SEO Locale",
  readTime: "12 min",
  excerpt: "Il tetto non si rifà per scelta: si rifà quando compare una macchia sul soffitto. In quel momento il cliente cerca su Google e chiama due numeri.",
  tags: ["marketing-coperture-tetti"],
    faqs: [
    { q: "Come si trovano clienti per il rifacimento tetti?", a: "Presidiando tre famiglie di ricerche diverse: le urgenze (\"infiltrazione tetto\" più il comune), che si vincono con il profilo Google e il numero cliccabile; i lavori programmati (\"rifacimento copertura\"), che si vincono con il sito; e l'efficientamento (\"isolamento sottotetto\"), che ha valore alto e quasi nessuna concorrenza." },
    { q: "Cosa convince un cliente che non può salire sul tetto?", a: "La trasparenza sul metodo. Spiegare come si individua davvero il punto di un'infiltrazione, quando una riparazione ha senso e quando è denaro buttato, che guaina si usa e cosa copre la garanzia. Sono informazioni che quasi nessuno scrive e che rispondono esattamente al sospetto del cliente." },
    { q: "Come ci si prepara ai picchi dopo una grandinata?", a: "Prima, in un periodo tranquillo. Dopo un evento meteo le ricerche durano pochi giorni e non c'è tempo di costruire nulla: servono profilo Google completo con recensioni recenti, pagina sulle riparazioni urgenti e numero cliccabile già pronti." },
    { q: "L'isolamento del sottotetto è un mercato interessante?", a: "È il segmento con il miglior rapporto tra sforzo e ritorno per un'impresa di coperture. Ha valore per commessa alto perché si somma al rifacimento del manto, è spinto dal costo dell'energia, e la concorrenza online è quasi nulla perché quasi nessuno ha capito che è un mercato a sé." },
    { q: "Come si entra nella rosa per i lavori condominiali?", a: "Documentando le referenze condominiali per intero: quanti condomini, di che dimensione, con quali tempi, come sono stati gestiti ponteggio, sicurezza e comunicazione con i residenti. L'amministratore deve difendere la scelta in assemblea e non rischia su un'impresa di cui non sa nulla." },
  ],
},
];

// ─── Ordinamento per data (dal più recente al meno recente) ──
const MESI_ABBR: Record<string, number> = {
  Gen: 0, Feb: 1, Mar: 2, Apr: 3, Mag: 4, Giu: 5,
  Lug: 6, Ago: 7, Set: 8, Ott: 9, Nov: 10, Dic: 11,
};

export function parseItalianDate(d: string): number {
  const [day, mon, year] = d.split(" ");
  return new Date(Number(year), MESI_ABBR[mon] ?? 0, Number(day)).getTime();
}

// Converte "15 Mar 2026" in "2026-03-15" (ISO 8601, richiesto dagli schema.org).
export function toISODate(d: string): string {
  const [day, mon, year] = d.split(" ");
  const mm = String((MESI_ABBR[mon] ?? 0) + 1).padStart(2, "0");
  const dd = String(Number(day)).padStart(2, "0");
  return `${year}-${mm}-${dd}`;
}

// Articoli ordinati dal più recente al meno recente (usato nel blog e nei correlati).
export const blogPostsSorted: BlogPost[] = [...blogPosts].sort(
  (a, b) => parseItalianDate(b.date) - parseItalianDate(a.date),
);

/**
 * Articoli correlati a uno dato.
 *
 * Prima questa scelta era "i tre più recenti", identici per ogni articolo: i tre
 * in testa ricevevano un link da tutti gli altri e i restanti venticinque
 * nessuno. È una delle ragioni per cui diversi articoli risultavano scansionati
 * ma non indicizzati.
 *
 * Ora la selezione privilegia chi condivide un tag (stesso topic cluster), poi
 * chi condivide la categoria, e completa con i più recenti. La rotazione parte
 * da una posizione derivata dallo slug, così i link si distribuiscono su tutto
 * l'archivio invece di concentrarsi sempre sugli stessi.
 */
export function relatedPosts(slug: string, quanti = 4): BlogPost[] {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return blogPostsSorted.slice(0, quanti);

  const tags = new Set(post.tags ?? []);
  const altri = blogPostsSorted.filter((p) => p.slug !== slug);

  const punteggio = (p: BlogPost) => {
    const comuni = (p.tags ?? []).filter((t) => tags.has(t)).length;
    return comuni * 10 + (p.category === post.category ? 3 : 0);
  };

  const offset = [...slug].reduce((a, c) => a + c.charCodeAt(0), 0);
  const ordinati = altri
    .map((p, i) => ({ p, s: punteggio(p), i }))
    .sort((a, b) => b.s - a.s || ((a.i + offset) % altri.length) - ((b.i + offset) % altri.length));

  return ordinati.slice(0, quanti).map((x) => x.p);
}

/** Articoli appartenenti a un settore o servizio, dal più recente. */
export function postsByTag(tag: string, quanti = 6): BlogPost[] {
  return blogPostsSorted.filter((p) => p.tags?.includes(tag)).slice(0, quanti);
}
