/**
 * Città con pagina GEO dedicata (/siti-web-edili-<slug>).
 *
 * Unica fonte di verità: da qui arrivano sia le rotte (src/App.tsx) sia le voci
 * del sitemap (scripts/sitemap.ts). Per aggiungere una città basta appendere un
 * elemento a questo array: rotta, prerender e sitemap si aggiornano da soli.
 */

export interface CityData {
  slug: string;
  name: string;
  region: string;
  intro: string;
  whyDigital: string;
  localKeyword: string;
  /** Imprese già servite in città. Da valorizzare solo se il numero è reale. */
  projects?: number;
  /** Testimonianza reale del cliente. Da omettere finché non ce n'è una. */
  testimonial?: { name: string; company: string; text: string };
  zones: string;
  marketContext: string;
  searchTerms: string[];
  faqs: { q: string; a: string }[];
}

export const cities: CityData[] = [
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
  {
    slug: "firenze",
    name: "Firenze",
    region: "Toscana",
    intro: "ClientiEdili realizza siti web per imprese edili a Firenze e in Toscana. Se la tua impresa lavora su ristrutturazioni, restauri o manutenzioni nel fiorentino, ti mettiamo davanti ai clienti che ti cercano su Google. Consegna in 48 ore, zero anticipo, garanzia soddisfatti o rimborsati.",
    whyDigital: "A Firenze il cliente che deve ristrutturare non chiede più solo al geometra di fiducia: apre Google e cerca \"impresa edile Firenze\" o \"ristrutturazione appartamento Firenze\". Chi trova un'impresa con un sito curato, foto dei lavori e recensioni visibili parte già con un vantaggio enorme sulla concorrenza. Un sito professionale ottimizzato per le ricerche locali fiorentine ti fa entrare in quella scelta, invece di restare fuori dalla lista.",
    localKeyword: "impresa edile Firenze",
    zones: "Seguiamo imprese edili in tutta Firenze — Centro Storico, Campo di Marte, Novoli, Isolotto, Rifredi, Gavinana, Coverciano e Le Cure — e nei comuni della città metropolitana: Scandicci, Sesto Fiorentino, Campi Bisenzio, Bagno a Ripoli, Calenzano, Empoli, Pontassieve e Figline. Il sito viene ottimizzato per la zona precisa in cui lavori, così le richieste arrivano da cantieri realmente raggiungibili.",
    marketContext: "Firenze è un mercato edile particolare: buona parte del lavoro non è nuova costruzione ma recupero e ristrutturazione di immobili esistenti, spesso in edifici storici soggetti a vincoli della Soprintendenza. Servono imprese che sappiano muoversi tra permessi, materiali tradizionali e tempistiche lunghe — competenze che valgono molto ma che il cliente non può indovinare da un annuncio generico. A questo si aggiunge la spinta del turismo: appartamenti riconvertiti in strutture ricettive, B&B da rinnovare, spazi commerciali in centro da adeguare. È un cliente che confronta più preventivi e che, prima di chiamare, controlla online chi ha di fronte. Un sito che mostra i lavori fatti, spiega come lavori e rende evidente la tua specializzazione trasforma quella verifica in una richiesta di sopralluogo.",
    searchTerms: [
      "impresa edile Firenze",
      "ristrutturazione appartamento Firenze",
      "restauro edifici storici Firenze",
      "impresa edile Scandicci",
      "ristrutturazione bagno Firenze",
      "impresa di costruzioni Sesto Fiorentino",
    ],
    faqs: [
      { q: "Come si posiziona un'impresa edile su Google a Firenze?", a: "Servono due cose insieme: un sito ottimizzato per le ricerche locali fiorentine e un profilo Google My Business curato, con foto dei lavori e recensioni. Insieme ti fanno comparire quando qualcuno cerca \"impresa edile Firenze\" o una ristrutturazione nel proprio quartiere. Costruiamo entrambe le cose e le ottimizziamo per la zona in cui operi." },
      { q: "Il sito può valorizzare i lavori di restauro e su immobili vincolati?", a: "Sì, ed è uno dei punti su cui insistiamo di più a Firenze. La galleria lavori e i testi vengono costruiti per far emergere le competenze specifiche — recupero conservativo, materiali tradizionali, gestione delle pratiche con la Soprintendenza — che a Firenze fanno la differenza tra un preventivo scartato e uno accettato." },
      { q: "In quanto tempo è online il sito della mia impresa fiorentina?", a: "48 ore lavorative dalla chiamata conoscitiva, con un'anteprima entro le prime 24 ore. Non serve alcun anticipo: paghi 1.000€ (invece di 1.400€) solo dopo aver visto e approvato il sito, con garanzia soddisfatti o rimborsati." },
    ],
  },
  {
    slug: "verona",
    name: "Verona",
    region: "Veneto",
    intro: "ClientiEdili crea siti web per imprese edili a Verona e in Veneto. Dalle ristrutturazioni in città ai capannoni della cintura produttiva, ti aiutiamo a farti trovare da chi cerca un'impresa nella tua zona. Consegna in 48 ore, zero anticipo, garanzia soddisfatti o rimborsati.",
    whyDigital: "Nel veronese si lavora ancora molto su passaparola, ed è un vantaggio finché il telefono squilla. Il problema arriva nei mesi lenti, quando il passaparola si ferma e non c'è nient'altro che porti richieste. Un sito web ottimizzato per \"impresa edile Verona\" e per le ricerche dei comuni in cui lavori continua a portare preventivi anche quando le segnalazioni si fermano: è la seconda gamba su cui appoggiare l'azienda.",
    localKeyword: "impresa edile Verona",
    zones: "Lavoriamo con imprese edili di Verona città — Borgo Trento, Borgo Roma, Golosine, San Michele, Santa Lucia — e di tutta la provincia: Villafranca, San Giovanni Lupatoto, Bussolengo, Legnago, San Bonifacio, Peschiera del Garda, Negrar e la Valpolicella. Se lavori sul lago o in Valpolicella, il sito viene ottimizzato per quelle ricerche specifiche.",
    marketContext: "Verona mette insieme tre mercati edili diversi, e ognuno ha un cliente che cerca in modo diverso. C'è la ristrutturazione residenziale in città e nei comuni della cintura, dove decide la famiglia e conta la fiducia. C'è l'edilizia produttiva della zona industriale e dell'asse verso Villafranca e Legnago — capannoni, ampliamenti, manutenzioni — dove decide un'azienda che valuta affidabilità e capacità di rispettare i tempi. E c'è la fascia del lago di Garda e della Valpolicella, con ville, agriturismi e strutture ricettive da riqualificare, spesso con committenti che arrivano da fuori provincia e che l'impresa possono trovarla solo online. Un'impresa veronese che presidia bene le ricerche locali intercetta tutte e tre, invece di dipendere da un solo canale.",
    searchTerms: [
      "impresa edile Verona",
      "ristrutturazione casa Verona",
      "costruzione capannoni Verona",
      "impresa edile Villafranca di Verona",
      "ristrutturazione villa lago di Garda",
      "impresa di costruzioni Valpolicella",
    ],
    faqs: [
      { q: "Serve davvero un sito se lavoro già con il passaparola?", a: "Il passaparola funziona quando c'è lavoro e sparisce quando ne hai più bisogno. Il sito lavora anche nei mesi lenti: intercetta chi cerca un'impresa edile a Verona in quel momento e non ha nessuno da cui farsi consigliare. Non sostituisce il passaparola, gli affianca un canale che porta richieste in modo costante." },
      { q: "Potete ottimizzare il sito per il lago di Garda e la Valpolicella?", a: "Sì. Sono ricerche con un valore per intervento molto alto — ville, agriturismi, strutture ricettive — e con clienti che spesso vengono da fuori provincia e possono trovarti solo online. Se lavori in quelle zone, costruiamo il sito e la SEO locale proprio su quelle ricerche." },
      { q: "Il sito va bene anche per un'impresa che fa capannoni e lavori industriali?", a: "Sì, e cambia il modo in cui viene scritto. Per il committente industriale contano referenze, tempistiche rispettate, certificazioni e dimensione dei lavori già eseguiti: il sito viene costruito per mettere in evidenza quelli, non per parlare di ristrutturazioni residenziali." },
    ],
  },
  {
    slug: "bari",
    name: "Bari",
    region: "Puglia",
    intro: "ClientiEdili realizza siti web per imprese edili a Bari e in Puglia. Se la tua impresa lavora su ristrutturazioni, nuove costruzioni o manutenzioni nel barese, ti mettiamo davanti ai clienti che ti cercano online. Consegna in 48 ore, zero anticipo, garanzia soddisfatti o rimborsati.",
    whyDigital: "A Bari il mercato edile è cresciuto molto, ma la maggior parte delle imprese online è ancora praticamente invisibile: nessun sito, oppure una pagina Facebook aggiornata l'ultima volta due anni fa. Questo per te è un'occasione: farti trovare per \"impresa edile Bari\" oggi costa meno fatica di quanto costerà tra due anni, quando anche i tuoi concorrenti si saranno mossi. Chi arriva prima si prende le richieste.",
    localKeyword: "impresa edile Bari",
    zones: "Seguiamo imprese edili in tutta Bari — Murat, Bari Vecchia, Libertà, Madonnella, Carrassi, Poggiofranco, Japigia, Santo Spirito e Palese — e nei comuni della città metropolitana: Modugno, Bitonto, Molfetta, Monopoli, Altamura, Corato, Bitritto e Triggiano. Il sito viene ottimizzato per il tuo raggio d'azione reale, non per una provincia generica.",
    marketContext: "Bari è uno dei mercati edili più vivaci del Sud: recupero del centro storico e della zona Murat, riqualificazione di condomini, edilizia residenziale in espansione verso i comuni della cintura e un flusso costante di lavori legati ai bonus e all'efficientamento energetico. La domanda c'è, ma è molto frammentata: decine di imprese di dimensioni simili si contendono gli stessi clienti, e il committente barese confronta almeno tre preventivi prima di decidere. In questo scenario la differenza non la fa il prezzo più basso, la fa la fiducia: chi ha un sito che mostra i lavori conclusi, spiega i tempi e rende semplice chiedere un sopralluogo parte avanti. Ed è proprio quello che oggi manca alla maggior parte delle imprese pugliesi online.",
    searchTerms: [
      "impresa edile Bari",
      "ristrutturazione appartamento Bari",
      "impresa edile Modugno",
      "ristrutturazione casa Monopoli",
      "riqualificazione condominio Bari",
      "impresa di costruzioni Molfetta",
    ],
    faqs: [
      { q: "Conviene investire in un sito se a Bari quasi nessuno lo ha?", a: "È esattamente il motivo per cui conviene. Quando i concorrenti sono assenti online, posizionarsi per \"impresa edile Bari\" richiede molto meno sforzo e i risultati arrivano prima. Chi si muove adesso occupa una posizione che tra due anni sarà molto più cara da conquistare." },
      { q: "Seguite anche le imprese dei comuni della provincia di Bari?", a: "Sì: Modugno, Bitonto, Molfetta, Monopoli, Altamura, Corato e gli altri comuni della città metropolitana. Ottimizziamo il sito per la zona in cui lavori davvero, così ricevi richieste da cantieri raggiungibili e non da clienti a un'ora di strada." },
      { q: "Quanto costa il sito per un'impresa edile barese?", a: "1.000€ invece di 1.400€, tutto incluso: design, copywriting, galleria lavori, ottimizzazione SEO locale per Bari, profilo Google My Business e 30 giorni di assistenza. Zero anticipo: paghi solo dopo aver approvato il sito, con garanzia soddisfatti o rimborsati." },
    ],
  },
  {
    slug: "palermo",
    name: "Palermo",
    region: "Sicilia",
    intro: "ClientiEdili crea siti web per imprese edili a Palermo e in Sicilia. Ti aiutiamo a farti trovare da chi cerca un'impresa nella tua zona, con un sito professionale ottimizzato per le ricerche locali palermitane. Consegna in 48 ore, zero anticipo, garanzia soddisfatti o rimborsati.",
    whyDigital: "A Palermo il lavoro si è sempre trovato per conoscenza, ma il cliente è cambiato: chi oggi ristruttura casa ha tra i trenta e i cinquant'anni, cerca su Google e giudica un'impresa da quello che trova. Se non trova niente, o trova un profilo abbandonato, passa alla successiva. Un sito ordinato con le foto dei tuoi lavori e un modo semplice per contattarti recupera tutte quelle richieste che oggi non ti arrivano nemmeno.",
    localKeyword: "impresa edile Palermo",
    zones: "Lavoriamo con imprese edili di tutta Palermo — Centro Storico, Politeama, Libertà, Malaspina, Notarbartolo, Zisa, Mondello e Sferracavallo — e dei comuni vicini: Monreale, Bagheria, Carini, Isola delle Femmine, Villabate, Partinico e Termini Imerese. Il sito viene ottimizzato per le ricerche della zona in cui operi.",
    marketContext: "Palermo ha un patrimonio edilizio che richiede lavoro quasi ovunque: palazzi del centro storico da recuperare, condomini degli anni Sessanta e Settanta da riqualificare, facciate e coperture da rifare, interventi di adeguamento sismico ed energetico. La domanda è ampia e continua. Quello che manca è la fiducia: il committente palermitano è prudente, ha spesso sentito storie di lavori lasciati a metà, e prima di affidare un cantiere vuole capire con chi ha a che fare. Un'impresa che online non esiste non può rassicurare nessuno. Un sito che mostra cantieri conclusi, tempi rispettati e informazioni chiare sull'azienda fa esattamente il lavoro che a Palermo pesa di più: togliere il dubbio prima della telefonata.",
    searchTerms: [
      "impresa edile Palermo",
      "ristrutturazione appartamento Palermo",
      "rifacimento facciata Palermo",
      "impresa edile Bagheria",
      "ristrutturazione casa Monreale",
      "riqualificazione condominio Palermo",
    ],
    faqs: [
      { q: "A Palermo il lavoro arriva per conoscenza: che senso ha un sito?", a: "Il sito non sostituisce le conoscenze, chiude un buco che le conoscenze non coprono. Chi ti viene segnalato ti cerca comunque su Google prima di chiamarti: se non trova nulla, la segnalazione perde forza. E chi non ti conosce può trovarti solo lì. Sono due flussi di richieste in più, non uno al posto dell'altro." },
      { q: "Il sito aiuta con i lavori su condomini e facciate?", a: "Sì, e sono tra le ricerche più redditizie a Palermo. Amministratori e proprietari cercano online chi ha già fatto interventi simili: la galleria lavori e i testi vengono costruiti per far vedere subito che quel tipo di cantiere lo hai già gestito, che è la cosa che li convince a chiamarti." },
      { q: "Seguite imprese anche fuori Palermo città?", a: "Sì: Monreale, Bagheria, Carini, Partinico, Termini Imerese e gli altri comuni dell'area. Il sito viene ottimizzato per il tuo raggio d'azione, così le richieste arrivano da cantieri che puoi davvero seguire." },
    ],
  },
  {
    slug: "genova",
    name: "Genova",
    region: "Liguria",
    intro: "ClientiEdili realizza siti web per imprese edili a Genova e in Liguria. Se la tua impresa lavora su ristrutturazioni, facciate o manutenzioni nel genovese, ti mettiamo davanti ai clienti che ti cercano su Google. Consegna in 48 ore, zero anticipo, garanzia soddisfatti o rimborsati.",
    whyDigital: "A Genova il lavoro edile è tecnicamente difficile — edifici alti e stretti, accessi impossibili, umidità, ponteggi complicati — e il cliente lo sa. Per questo cerca online chi ha già affrontato cantieri come il suo, e sceglie chi glielo dimostra. Un sito che mostra i lavori fatti e spiega come li avete risolti vale molto più di un annuncio: risponde alla domanda che il committente genovese si fa davvero, cioè se sei in grado di gestire il suo caso.",
    localKeyword: "impresa edile Genova",
    zones: "Seguiamo imprese edili in tutta Genova — Centro Storico, Foce, Albaro, Sampierdarena, Sestri Ponente, Marassi, Nervi e Pegli — e nel resto della Liguria: Rapallo, Chiavari, Sestri Levante, Arenzano, Cogoleto e Recco. Il sito viene ottimizzato per la delegazione o la zona di costa in cui lavori.",
    marketContext: "L'edilizia genovese è quasi tutta recupero, e il patrimonio è tra i più impegnativi d'Italia: palazzi alti del centro storico con accessi strettissimi, edifici su terreno acclive, facciate esposte alla salsedine, problemi ricorrenti di infiltrazioni e umidità. Sono lavori che richiedono soluzioni non banali — ponteggi complessi, lavori su fune, interventi in spazi dove un camion non arriva — e che quindi valgono di più, ma solo se il cliente capisce che sai gestirli. A questo si somma la fascia costiera, da Arenzano al Tigullio, con seconde case e strutture ricettive da rinnovare e proprietari che spesso vivono altrove e cercano l'impresa esclusivamente online. Presidiare le ricerche locali significa intercettare entrambi i mercati, invece del solo giro di conoscenze di quartiere.",
    searchTerms: [
      "impresa edile Genova",
      "rifacimento facciata Genova",
      "ristrutturazione appartamento Genova",
      "impresa edile Rapallo",
      "lavori edili su fune Genova",
      "ristrutturazione casa Chiavari",
    ],
    faqs: [
      { q: "Come faccio a farmi trovare come impresa edile a Genova?", a: "Con un sito ottimizzato per le ricerche locali genovesi e un profilo Google My Business curato. A Genova conta molto anche la delegazione: chi cerca a Sampierdarena non vuole un'impresa di Nervi. Ottimizziamo il sito per le zone in cui lavori davvero, così le richieste arrivano da cantieri raggiungibili." },
      { q: "Il sito può valorizzare i lavori in quota, su fune o su ponteggi complessi?", a: "Sì, ed è una delle cose che a Genova pesa di più. Sono lavori che poche imprese sanno gestire e che il cliente non sa valutare da un preventivo: la galleria lavori e i testi vengono costruiti per far vedere subito che quei cantieri li hai già portati a termine." },
      { q: "Lavorate anche con imprese del Tigullio e della riviera?", a: "Sì: Rapallo, Chiavari, Sestri Levante, Recco, Arenzano e la costa ligure. È un mercato in cui molti proprietari vivono fuori regione e possono trovarti solo online, quindi il sito ha un peso ancora maggiore che in città." },
    ],
  },
  {
    slug: "brescia",
    name: "Brescia",
    region: "Lombardia",
    intro: "ClientiEdili realizza siti web per imprese edili a Brescia e provincia. Dalla ristrutturazione in città ai capannoni della Val Trompia e della bassa bresciana, ti facciamo trovare da chi cerca un'impresa nella tua zona. Consegna in 48 ore, zero anticipo.",
    whyDigital: "Brescia è una delle province più industriali d'Italia e il lavoro edile non manca, ma arriva quasi tutto per conoscenza diretta. Il problema è che i committenti stanno cambiando: le aziende hanno responsabili tecnici più giovani che selezionano i fornitori online, e i privati che ristrutturano cercano su Google esattamente come ovunque. Un sito ottimizzato per \"impresa edile Brescia\" e per i comuni in cui lavori ti apre quel canale, senza toglierti nulla del giro che hai già.",
    localKeyword: "impresa edile Brescia",
    zones: "Seguiamo imprese edili di Brescia città e di tutta la provincia: Val Trompia (Gardone, Lumezzane, Sarezzo), Franciacorta, bassa bresciana (Manerbio, Leno, Ghedi), Desenzano e la sponda bresciana del Garda, Chiari, Rovato, Palazzolo e Montichiari.",
    marketContext: "Brescia è un mercato doppio, e presidiarli entrambi conviene. Da un lato c'è l'edilizia industriale: capannoni, ampliamenti produttivi, coperture da rifare, spesso con amianto da bonificare — commesse di importo alto per un tessuto di piccole e medie imprese manifatturiere che è tra i più densi d'Europa. Dall'altro c'è il residenziale, con ristrutturazioni in città e nei paesi della provincia, più la fascia del Garda dove ville, seconde case e strutture ricettive vengono riqualificate da proprietari che spesso vivono altrove e l'impresa possono trovarla solo online. Sono due clienti che cercano cose diverse e valutano in modo diverso: l'azienda guarda referenze e capacità produttiva, il privato guarda lavori conclusi e affidabilità. Un'impresa bresciana che struttura il sito per parlare a entrambi raddoppia le occasioni senza cambiare mestiere.",
    searchTerms: ["impresa edile Brescia", "costruzione capannoni Brescia", "ristrutturazione appartamento Brescia", "impresa edile Val Trompia", "rifacimento copertura capannone Brescia", "ristrutturazione villa lago di Garda"],
    faqs: [
      { q: "Conviene puntare sull'edilizia industriale a Brescia?", a: "Sì, ed è il vantaggio competitivo della provincia. Il tessuto manifatturiero bresciano genera domanda costante di capannoni, ampliamenti e rifacimento coperture, e la concorrenza online su quelle ricerche è quasi inesistente: chi si posiziona trova campo libero su commesse di importo alto." },
      { q: "Seguite anche le imprese della zona del Garda?", a: "Sì. Desenzano, Sirmione, Salò e tutta la sponda bresciana sono un mercato a sé: ville, seconde case e strutture ricettive, con proprietari spesso di fuori provincia che cercano l'impresa esclusivamente online. Se lavori lì, il sito viene ottimizzato su quelle ricerche." },
      { q: "Quanto costa il sito per un'impresa edile bresciana?", a: "1.000€ invece di 1.400€, tutto incluso: design, copywriting, galleria lavori, SEO locale per Brescia e provincia, profilo Google My Business e 30 giorni di assistenza. Zero anticipo, garanzia soddisfatti o rimborsati." },
    ],
  },
  {
    slug: "padova",
    name: "Padova",
    region: "Veneto",
    intro: "ClientiEdili crea siti web per imprese edili a Padova e in Veneto. Ti facciamo trovare da chi cerca un'impresa nella tua zona, con un sito professionale ottimizzato per le ricerche locali padovane. Consegna in 48 ore, zero anticipo, garanzia soddisfatti o rimborsati.",
    whyDigital: "A Padova la concorrenza tra imprese edili è alta e i margini si sono ridotti: chi arriva al preventivo senza essersi fatto conoscere prima viene confrontato solo sulla cifra. Un sito che mostra i lavori fatti e spiega come lavori cambia quel confronto, perché il cliente arriva alla telefonata avendo già motivi per sceglierti che non sono il prezzo. È il modo più concreto per difendere il margine in una piazza affollata.",
    localKeyword: "impresa edile Padova",
    zones: "Lavoriamo con imprese edili di Padova città — Arcella, Stanga, Sacra Famiglia, Brusegana, Guizza — e della provincia: Albignasego, Selvazzano, Rubano, Vigonza, Cadoneghe, Abano Terme, Cittadella, Este e Piove di Sacco.",
    marketContext: "Il padovano ha un patrimonio residenziale ampio costruito tra gli anni Sessanta e Ottanta, oggi al centro di un'ondata di riqualificazioni: cappotti termici, sostituzione infissi, rifacimento impianti, adeguamenti energetici. È lavoro continuativo e prevedibile, ma è anche quello su cui si concentrano tutte le imprese della zona, e la conseguenza è una pressione forte sui prezzi. C'è però una fascia meno battuta e più redditizia: le ville venete e gli immobili storici della provincia, che richiedono competenze di recupero che poche imprese hanno e che il cliente fatica a trovare online. A questo si aggiunge un tessuto produttivo diffuso, con capannoni e sedi aziendali da manutenere e ampliare. Un'impresa padovana che comunica bene una specializzazione — invece di presentarsi come l'ennesima impresa generica — esce dal confronto sul prezzo che soffoca il mercato.",
    searchTerms: ["impresa edile Padova", "ristrutturazione appartamento Padova", "cappotto termico Padova", "impresa edile Albignasego", "restauro ville venete", "ristrutturazione casa Abano Terme"],
    faqs: [
      { q: "Come esco dal confronto sul prezzo a Padova?", a: "Comunicando una specializzazione invece di presentarti come impresa generica. Chi presidia una nicchia — recupero di immobili storici, riqualificazione energetica, ristrutturazioni chiavi in mano — viene cercato per quella competenza e confrontato con molte meno imprese, quindi difende il margine." },
      { q: "Lavorate con imprese di tutta la provincia di Padova?", a: "Sì: Albignasego, Selvazzano, Rubano, Vigonza, Cadoneghe, Abano, Cittadella, Este e Piove di Sacco. Il sito viene ottimizzato per il tuo raggio d'azione reale, così ricevi richieste da cantieri raggiungibili." },
      { q: "In quanto tempo è online il sito?", a: "48 ore lavorative dalla chiamata conoscitiva, con anteprima entro le prime 24 ore. Zero anticipo: paghi 1.000€ (invece di 1.400€) solo dopo aver approvato il sito." },
    ],
  },
  {
    slug: "bergamo",
    name: "Bergamo",
    region: "Lombardia",
    intro: "ClientiEdili realizza siti web per imprese edili a Bergamo e provincia. Dalla città alle valli, ti facciamo trovare da chi cerca un'impresa nella tua zona. Consegna in 48 ore, zero anticipo, garanzia soddisfatti o rimborsati.",
    whyDigital: "Nel bergamasco il lavoro si è sempre trovato per reputazione, e la reputazione qui vale davvero. Il punto è che oggi la reputazione si verifica online: chi riceve il tuo nome cerca la tua impresa su Google prima di chiamarti, e se non trova niente quella segnalazione perde forza. Un sito curato non sostituisce il tuo giro, lo rende più efficace — e in più intercetta chi non ti conosce affatto.",
    localKeyword: "impresa edile Bergamo",
    zones: "Seguiamo imprese edili di Bergamo città — Borgo Palazzo, Longuelo, Colognola, Città Alta — e della provincia: Treviglio, Dalmine, Seriate, Albino, Alzano Lombardo, Romano di Lombardia, Clusone e le valli Seriana, Brembana e Imagna.",
    marketContext: "Bergamo mette insieme una città con un patrimonio storico vincolato, una cintura industriale densa e un entroterra di valli con caratteristiche costruttive tutte sue. In Città Alta e nei centri storici il lavoro è recupero conservativo, con vincoli e materiali tradizionali: competenze rare che valgono molto e che il cliente cerca specificamente. Nella fascia di pianura, da Dalmine a Treviglio, prevalgono capannoni, logistica e residenziale diffuso. Nelle valli c'è un patrimonio di case in pietra, baite e seconde case che vengono recuperate da proprietari che spesso vivono a Milano o all'estero e cercano l'impresa esclusivamente online — e sono lavori a buon margine, perché la difficoltà logistica riduce la concorrenza. Tre mercati distinti nella stessa provincia: presidiarli con pagine e contenuti diversi vale molto più di un sito generico.",
    searchTerms: ["impresa edile Bergamo", "ristrutturazione appartamento Bergamo", "recupero baite valli bergamasche", "impresa edile Treviglio", "ristrutturazione casa Val Seriana", "impresa edile Città Alta"],
    faqs: [
      { q: "Il sito aiuta con i lavori di recupero in Città Alta?", a: "Sì, ed è una delle specializzazioni che rendono di più. Il recupero su immobili vincolati richiede competenze che poche imprese hanno e che il cliente cerca in modo specifico: mostrare quei lavori online significa essere trovato da chi ha esattamente quel problema, senza competere con le imprese generiche." },
      { q: "Conviene puntare sul recupero di baite e seconde case in valle?", a: "Sì. I proprietari spesso vivono fuori provincia e l'impresa possono trovarla solo online, la concorrenza su quelle ricerche è bassa e i margini sono migliori proprio per la difficoltà logistica che scoraggia altri. È un mercato che si presidia con poco sforzo." },
      { q: "Seguite anche le imprese della bassa bergamasca?", a: "Sì: Treviglio, Romano di Lombardia, Caravaggio e tutta la fascia di pianura, dove pesano capannoni e logistica. Il sito viene costruito per il tipo di committente con cui lavori davvero." },
    ],
  },
  {
    slug: "catania",
    name: "Catania",
    region: "Sicilia",
    intro: "ClientiEdili crea siti web per imprese edili a Catania e in Sicilia orientale. Ti facciamo trovare da chi cerca un'impresa nella tua zona, con un sito professionale online in 48 ore e zero anticipo.",
    whyDigital: "A Catania la maggior parte delle imprese edili online non esiste: nessun sito, profili Google vuoti o mai rivendicati. Per te è un'occasione che non durerà per sempre — posizionarsi oggi per \"impresa edile Catania\" costa molto meno fatica di quanto costerà tra due anni. Chi si muove adesso occupa una posizione che poi diventa difficile da attaccare.",
    localKeyword: "impresa edile Catania",
    zones: "Lavoriamo con imprese edili di tutta Catania — Centro, Borgo-Sanzio, Picanello, Ognina, Cibali, San Giovanni Galermo, Librino — e della provincia: Acireale, Misterbianco, Paternò, Adrano, Giarre, Mascalucia, Aci Castello e la fascia etnea.",
    marketContext: "Catania ha un patrimonio edilizio che richiede interventi quasi ovunque: palazzi del centro storico da recuperare, condomini degli anni Sessanta e Settanta da riqualificare, facciate ammalorate dalla salsedine e dall'esposizione, adeguamenti sismici in una delle zone a più alto rischio d'Italia. La domanda c'è ed è continua. Il freno non è il lavoro, è la fiducia: il committente catanese è prudente e prima di affidare un cantiere vuole capire con chi ha a che fare, perché ha sentito troppe storie di lavori abbandonati. Un'impresa che online non esiste non può rassicurare nessuno, e resta esclusa a prescindere dalla qualità del suo lavoro. C'è poi la fascia etnea e costiera, con ville e seconde case i cui proprietari vivono spesso altrove: lì l'unico modo per essere trovati è comparire nelle ricerche.",
    searchTerms: ["impresa edile Catania", "ristrutturazione appartamento Catania", "rifacimento facciata Catania", "impresa edile Acireale", "adeguamento sismico Catania", "ristrutturazione villa Aci Castello"],
    faqs: [
      { q: "A Catania il lavoro arriva per conoscenza: che senso ha un sito?", a: "Il sito non sostituisce le conoscenze, copre quello che le conoscenze non raggiungono. Chi ti viene segnalato ti cerca comunque su Google: se non trova nulla, la segnalazione si indebolisce. E chi non ti conosce può trovarti solo lì. Sono due flussi che si sommano." },
      { q: "Il sito aiuta con i lavori di adeguamento sismico?", a: "Sì, ed è una delle ricerche più redditizie della zona. È un intervento tecnico che il cliente conosce poco e su cui cerca informazioni prima di chiamare: chi risponde a quelle domande online viene percepito come l'impresa competente e riceve la richiesta di sopralluogo." },
      { q: "Seguite imprese anche fuori Catania città?", a: "Sì: Acireale, Misterbianco, Paternò, Adrano, Giarre, Mascalucia e la fascia etnea. Ottimizziamo il sito per la zona in cui operi davvero, così ricevi richieste da cantieri raggiungibili." },
    ],
  },
  {
    slug: "modena",
    name: "Modena",
    region: "Emilia-Romagna",
    intro: "ClientiEdili realizza siti web per imprese edili a Modena e provincia. Ti facciamo trovare da chi cerca un'impresa nella tua zona, con consegna in 48 ore, zero anticipo e garanzia soddisfatti o rimborsati.",
    whyDigital: "Il modenese ha un tessuto di imprese edili solide e ben organizzate, che però online sono quasi tutte uguali: una pagina di presentazione e poco altro. Chi cerca un'impresa non ha modo di distinguerle e finisce per chiedere tre preventivi e guardare la cifra. Un sito che mostra i lavori fatti e spiega come lavori rompe quel pareggio, ed è il modo più concreto per non essere scelto solo sul prezzo.",
    localKeyword: "impresa edile Modena",
    zones: "Seguiamo imprese edili di Modena città e della provincia: Carpi, Sassuolo, Formigine, Maranello, Vignola, Mirandola, Castelfranco Emilia, Pavullo e tutto il distretto ceramico.",
    marketContext: "Modena ha una domanda edilizia che nasce da tre spinte diverse. La prima è la ricostruzione e il consolidamento post-sisma, che nella bassa modenese continua a generare lavoro su edifici pubblici, produttivi e residenziali. La seconda è il distretto ceramico e il tessuto meccanico: capannoni, ampliamenti, sedi aziendali, manutenzioni industriali, con committenti tecnici che selezionano i fornitori guardando referenze e capacità. La terza è il residenziale, tra riqualificazione energetica del costruito e ristrutturazioni. È un mercato con clienti mediamente informati ed esigenti, che valutano documentazione e organizzazione oltre al prezzo: proprio il tipo di committente su cui un sito ben fatto incide di più, perché gli dà esattamente gli elementi che sta cercando per decidere.",
    searchTerms: ["impresa edile Modena", "ristrutturazione appartamento Modena", "costruzione capannoni Modena", "impresa edile Sassuolo", "consolidamento sismico Modena", "impresa edile Carpi"],
    faqs: [
      { q: "Conviene puntare sull'edilizia industriale nel modenese?", a: "Sì. Il distretto ceramico e il tessuto meccanico generano domanda costante di capannoni, ampliamenti e manutenzioni industriali, con commesse di importo alto. Il committente è tecnico e seleziona online guardando referenze: mostrarle è quello che ti fa entrare nella rosa." },
      { q: "I lavori di consolidamento sismico sono ancora un mercato?", a: "Sì, soprattutto nella bassa modenese, e non solo come ricostruzione: c'è tutta la parte di adeguamento e miglioramento sismico su edifici esistenti, un intervento tecnico su cui il cliente cerca informazioni prima di scegliere l'impresa." },
      { q: "Quanto costa il sito per un'impresa edile modenese?", a: "1.000€ invece di 1.400€, tutto incluso: design, copywriting, galleria lavori, SEO locale, profilo Google My Business e 30 giorni di assistenza. Zero anticipo, garanzia soddisfatti o rimborsati." },
    ],
  },
  {
    slug: "salerno",
    name: "Salerno",
    region: "Campania",
    intro: "ClientiEdili crea siti web per imprese edili a Salerno e provincia, dalla città alla Costiera Amalfitana e al Cilento. Ti facciamo trovare da chi cerca un'impresa nella tua zona. Consegna in 48 ore, zero anticipo.",
    whyDigital: "Nel salernitano una parte importante dei committenti non vive qui: proprietari di seconde case in Costiera e nel Cilento, gestori di strutture ricettive, famiglie emigrate che ristrutturano la casa di famiglia. Quelle persone l'impresa possono trovarla soltanto online — non hanno un giro di conoscenze locali da cui farsi consigliare. Se non compari nelle ricerche, per loro non esisti.",
    localKeyword: "impresa edile Salerno",
    zones: "Lavoriamo con imprese edili di Salerno città — centro, Torrione, Pastena, Mercatello, Fratte — e della provincia: Cava de' Tirreni, Battipaglia, Nocera Inferiore e Superiore, Scafati, Pontecagnano, Eboli, la Costiera Amalfitana (Amalfi, Positano, Maiori, Minori) e il Cilento.",
    marketContext: "Salerno è tre mercati in uno. In città e nella valle dell'Irno c'è il residenziale ordinario: ristrutturazioni, riqualificazioni condominiali, manutenzioni. In Costiera Amalfitana il lavoro è tecnicamente difficile e ad alto valore — terreni acclivi, accessi impossibili, vincoli paesaggistici stringenti, cantieri che richiedono soluzioni non banali — con committenti che spesso vivono a Roma, Milano o all'estero e cercano l'impresa esclusivamente online. Nel Cilento c'è il recupero di case rurali e l'adeguamento di strutture ricettive, spinto da un turismo in crescita. Sono tre clienti completamente diversi per aspettative e budget. Un'impresa salernitana che sa gestire i cantieri difficili della Costiera ha una competenza rara e molto richiesta, ma se non la mostra online resta confusa tra le imprese generiche — e viene pagata come loro.",
    searchTerms: ["impresa edile Salerno", "ristrutturazione Costiera Amalfitana", "impresa edile Cava de' Tirreni", "ristrutturazione casa Cilento", "recupero casa rurale Cilento", "impresa edile Battipaglia"],
    faqs: [
      { q: "Come mi faccio trovare dai proprietari di seconde case in Costiera?", a: "Solo online: quei committenti vivono altrove e non hanno conoscenze locali a cui chiedere. Il sito viene costruito per rispondere alle loro domande — vincoli paesaggistici, accessi difficili, tempi, gestione a distanza del cantiere — perché è quello che li rassicura prima di affidare un lavoro a chi non conoscono." },
      { q: "I cantieri difficili della Costiera sono un vantaggio?", a: "Sono il tuo vantaggio più grande, se lo mostri. Terreni acclivi, accessi senza strada, vincoli paesaggistici: sono lavori che poche imprese sanno gestire e che il cliente non sa valutare da un preventivo. Farli vedere è ciò che ti toglie dal confronto sul prezzo con le imprese generiche." },
      { q: "Seguite anche le imprese del Cilento?", a: "Sì. Il recupero di case rurali e l'adeguamento delle strutture ricettive sono un mercato in crescita, con molti committenti di fuori regione che cercano esclusivamente online. Il sito viene ottimizzato per quelle ricerche." },
    ],
  },
];

export const citySlugs = cities.map((c) => c.slug);
