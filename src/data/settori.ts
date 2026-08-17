/**
 * Pagine verticali per settore e per intento di ricerca (/<slug>).
 *
 * Servono a intercettare le ricerche che la home non copre: chi cerca
 * "marketing edilizia", "lead fotovoltaico" o "come trovare clienti serramenti"
 * non cerca "impresa edile", ma è esattamente il nostro cliente.
 *
 * Unica fonte di verità: da qui arrivano le rotte (src/App.tsx) e le voci del
 * sitemap (scripts/sitemap.ts). Nessun import: il file viene letto anche da
 * Node dentro vite.config.ts.
 */

export interface SettoreData {
  /** Diventa l'URL: /<slug> */
  slug: string;
  /** Nome breve usato nei link e nei breadcrumb. */
  label: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** Keyword principale, citata nelle CTA. */
  mainKeyword: string;
  /** Paragrafo di apertura: deve rispondere subito alla query. */
  intro: string;
  /** Il problema, raccontato come lo vive chi fa questo mestiere. */
  problemTitle: string;
  problemText: string;
  /** Come funziona il mercato di questo settore. */
  marketContext: string;
  /** Cosa ottiene concretamente il cliente. */
  deliverables: string[];
  /** Ricerche che la pagina punta a intercettare. */
  searchTerms: string[];
  faqs: { q: string; a: string }[];
}

export const settori: SettoreData[] = [
  {
    slug: "marketing-edilizia",
    label: "Marketing edilizia",
    h1: "Marketing per l'Edilizia: come si trovano clienti oggi",
    metaTitle: "Marketing Edilizia: Trovare Clienti nel 2026 | ClientiEdili",
    metaDescription:
      "Marketing per l'edilizia che porta richieste di preventivo: sito web, SEO locale e Google My Business per imprese edili. Analisi gratuita su clientiedili.com.",
    mainKeyword: "marketing edilizia",
    intro:
      "Il marketing per l'edilizia non è fare post su Facebook: è costruire un sistema che porta richieste di preventivo ogni settimana, anche quando il passaparola si ferma. Per un'impresa edile, un serramentista o un installatore, quel sistema si regge su tre pezzi che lavorano insieme: un sito che convince chi ti ha trovato, la SEO locale che ti fa trovare, e un profilo Google curato che ti mette nei primi tre risultati con la mappa. ClientiEdili li costruisce e li gestisce per te.",
    problemTitle: "Perché il marketing tradizionale non funziona più nell'edilizia",
    problemText:
      "Volantini, insegne, inserzioni sui giornali locali: hanno funzionato per trent'anni e oggi rendono sempre meno, perché il cliente non li incontra più. Chi deve ristrutturare casa o cambiare gli infissi apre Google, digita quello che gli serve e sceglie tra i primi risultati. Se lì non ci sei, per quel cliente la tua impresa non esiste — non importa quanto lavori bene o da quanti anni sei sul mercato. Il problema opposto è chi si affida a un'agenzia generalista: spende in campagne pubblicitarie che portano contatti curiosi ma non preventivi, perché chi imposta quelle campagne non ha idea di come ragiona un committente edile né di cosa lo fa decidere. Il risultato è la sensazione, molto comune tra gli imprenditori edili, che il marketing sia soldi buttati. Non lo è: lo diventa quando lo fa chi non conosce il settore.",
    marketContext:
      "L'edilizia italiana ha una caratteristica che la rende molto favorevole a chi si muove online: la concorrenza digitale è ancora bassissima. In quasi tutte le province, cercando \"impresa edile\" o \"serramentista\" seguito dal nome della città, i risultati sono pochi e spesso di scarsa qualità — siti vecchi, profili Google abbandonati, aziende che non compaiono affatto. Significa che il costo per arrivare in prima pagina è, oggi, molto più basso di quello che sarà tra due o tre anni, quando anche i tuoi concorrenti si saranno mossi. C'è poi un dato che nell'edilizia pesa più che altrove: il valore di un singolo cliente. Una ristrutturazione completa, una fornitura di serramenti per una villa, un impianto fotovoltaico da 10 kW valgono migliaia di euro. Basta una richiesta in più al mese perché l'investimento nel marketing si ripaghi da solo — e questa è la ragione per cui, nell'edilizia, farsi trovare online conviene molto più che nella media degli altri settori.",
    deliverables: [
      "Sito web professionale consegnato in 48 ore, ottimizzato per convertire",
      "SEO locale sulle ricerche della tua provincia e dei comuni in cui lavori",
      "Profilo Google My Business ottimizzato per entrare nel Local Pack",
      "Gestione social e pubblicazione continuativa (497€ al mese, opzionale)",
      "Strategia recensioni: le recensioni recenti pesano sul posizionamento locale",
      "Report mensile su richieste, chiamate e posizionamento",
    ],
    searchTerms: [
      "marketing edilizia",
      "marketing per imprese edili",
      "agenzia marketing edilizia",
      "pubblicità per imprese edili",
      "come promuovere un'impresa edile",
      "strategie marketing settore edile",
    ],
    faqs: [
      {
        q: "Quanto costa fare marketing per un'impresa edile?",
        a: "Il sito professionale costa 1.000€ una tantum (invece di 1.400€), zero anticipo e con garanzia soddisfatti o rimborsati. La gestione continuativa di social e Google My Business costa 497€ al mese, senza vincolo di durata. Non c'è un budget pubblicitario obbligatorio: il sistema è costruito per portare richieste dal traffico organico, non solo dalle campagne a pagamento.",
      },
      {
        q: "In quanto tempo il marketing porta le prime richieste?",
        a: "Il sito è online in 48 ore e può iniziare subito a raccogliere richieste da chi già ti cerca per nome. Il posizionamento sulle ricerche generiche del tuo settore richiede più tempo: i primi movimenti si vedono in genere entro 2-3 mesi, i risultati consolidati in 4-6 mesi di lavoro costante.",
      },
      {
        q: "Serve anche se lavoro già bene con il passaparola?",
        a: "Il passaparola funziona quando c'è lavoro e sparisce nei mesi lenti, cioè quando serve di più. Un sistema online lavora anche allora, e rafforza il passaparola stesso: chi riceve il tuo nome da un conoscente ti cerca comunque su Google prima di chiamarti, e quello che trova decide se la segnalazione si trasforma in una telefonata.",
      },
      {
        q: "Lavorate solo con imprese edili o anche con altri mestieri?",
        a: "Seguiamo tutta la filiera delle costruzioni: imprese edili, serramentisti, installatori di impianti fotovoltaici, impiantisti termoidraulici ed elettrici, carpenterie, pavimentisti. Il metodo è lo stesso, cambiano le ricerche da intercettare e il modo in cui il cliente valuta un preventivo.",
      },
    ],
  },
  {
    slug: "lead-generation-edilizia",
    label: "Lead generation edilizia",
    h1: "Lead Generation per l'Edilizia: richieste vere, non liste di nomi",
    metaTitle: "Lead Generation Edilizia: Preventivi Veri | ClientiEdili",
    metaDescription:
      "Lead generation per l'edilizia senza comprare contatti rivenduti a cinque aziende: un sistema che ti porta richieste di preventivo tue. Analisi gratuita.",
    mainKeyword: "lead generation edilizia",
    intro:
      "Lead generation nell'edilizia significa una cosa sola: far arrivare alla tua azienda richieste di preventivo da persone che hanno davvero un lavoro da far fare. Non contatti comprati a pacchetti e rivenduti in parallelo a cinque tuoi concorrenti, non liste di numeri da chiamare a freddo. ClientiEdili costruisce il canale che genera quelle richieste — sito, SEO locale e presenza su Google — così i contatti arrivano direttamente a te e restano tuoi.",
    problemTitle: "Il problema dei lead comprati",
    problemText:
      "Chi vende lead nell'edilizia funziona quasi sempre allo stesso modo: raccoglie una richiesta e la rivende a più aziende contemporaneamente. Il risultato lo conosci se ci sei passato — chiami un contatto che nel frattempo ha già ricevuto quattro telefonate, è infastidito, e l'unica leva rimasta per aggiudicarsi il lavoro è abbassare il prezzo. Paghi per un contatto e ti ritrovi in una gara al ribasso su un cliente che non ti ha scelto. C'è anche una questione più profonda: quei contatti non costruiscono niente. Il mese in cui smetti di pagare, le richieste si fermano di colpo, perché non hai costruito nulla di tuo. Un canale che ti appartiene — un sito posizionato, un profilo Google forte — continua invece a portare richieste anche dopo, e quelle richieste arrivano da chi ha scelto di contattare te.",
    marketContext:
      "Nell'edilizia la qualità del contatto conta più del numero. Un'impresa che riceve trenta richieste generiche al mese e ne chiude una sta peggio di una che ne riceve cinque mirate e ne chiude due: il tempo speso in sopralluoghi e preventivi a vuoto è tempo tolto ai cantieri, ed è il costo più sottovalutato dell'acquisizione clienti. Le richieste che nascono da una ricerca su Google partono già molto avanti: chi cerca \"ristrutturazione appartamento\" nella sua città ha un'esigenza concreta, spesso una tempistica in testa, e sceglie di contattare te — non ha ricevuto una chiamata a freddo. Il tasso con cui questi contatti si trasformano in lavori è nettamente più alto, e migliora ancora quando il sito ha già risposto in anticipo alle domande su prezzi, tempi e garanzie. È questa la differenza tra comprare contatti e generarli.",
    deliverables: [
      "Sito costruito per convertire la visita in richiesta di preventivo",
      "Form di contatto collegato al CRM, con notifica immediata di ogni richiesta",
      "Pagine dedicate ai servizi e alle zone in cui lavori davvero",
      "Contenuti che rispondono in anticipo alle obiezioni su prezzo e tempi",
      "Tracciamento delle conversioni: sai da dove arriva ogni richiesta",
      "Nessun contatto condiviso con altre aziende: i lead sono solo tuoi",
    ],
    searchTerms: [
      "lead generation edilizia",
      "lead edilizia",
      "acquisizione clienti impresa edile",
      "come trovare clienti edilizia",
      "contatti qualificati settore edile",
      "generare preventivi impresa edile",
    ],
    faqs: [
      {
        q: "Vendete lead o contatti per l'edilizia?",
        a: "No, e la differenza è sostanziale. Non rivendiamo contatti raccolti altrove: costruiamo il canale con cui la tua azienda genera le proprie richieste. Ogni contatto che arriva dal tuo sito è tuo, non viene condiviso con nessun altro e non ti mette in gara con quattro concorrenti sullo stesso cliente.",
      },
      {
        q: "Quante richieste di preventivo posso aspettarmi?",
        a: "Dipende dalla zona, dal settore e dalla concorrenza locale, e diffidare di chi ti garantisce un numero preciso prima di aver guardato il tuo mercato è una buona regola. Quello che possiamo dirti dopo l'analisi gratuita è quante ricerche mensili ci sono per i tuoi servizi nella tua zona e quanto è forte la concorrenza: da lì si ragiona su numeri realistici.",
      },
      {
        q: "Come faccio a sapere da dove arrivano le richieste?",
        a: "Il sito viene consegnato con il tracciamento delle conversioni già configurato: ogni richiesta inviata dal form viene registrata, così sai quante ne arrivano, da quali pagine e da quali ricerche. Non è una stima, sono dati.",
      },
      {
        q: "Funziona anche per settori specifici come serramenti o fotovoltaico?",
        a: "Sì. Anzi, in quei settori funziona particolarmente bene, perché chi cerca \"preventivo serramenti\" o \"impianto fotovoltaico\" nella sua città ha già deciso di comprare e sta solo scegliendo da chi. Abbiamo pagine dedicate al marketing per serramentisti e per installatori fotovoltaici.",
      },
    ],
  },
  {
    slug: "marketing-serramentisti",
    label: "Serramentisti",
    h1: "Marketing per Serramentisti: come arrivano i preventivi",
    metaTitle: "Marketing per Serramentisti: Trovare Clienti | ClientiEdili",
    metaDescription:
      "Marketing e siti web per serramentisti: farsi trovare da chi cerca infissi e preventivi nella tua zona. Consegna in 48 ore, zero anticipo.",
    mainKeyword: "marketing per serramentisti",
    intro:
      "Chi deve cambiare gli infissi non gira più per showroom: cerca \"sostituzione infissi\" seguito dal nome della sua città, guarda i primi risultati, e chiede due o tre preventivi. Se la tua azienda in quella ricerca non compare, quei preventivi li fa qualcun altro. ClientiEdili costruisce il sito e la presenza su Google che ti mettono dentro quella scelta, con consegna in 48 ore e zero anticipo.",
    problemTitle: "Perché i serramentisti perdono clienti prima ancora di parlarci",
    problemText:
      "Nel settore serramenti la decisione del cliente si forma quasi tutta prima della telefonata. Chi sta valutando di cambiare le finestre passa settimane a informarsi: confronta PVC, alluminio e legno, cerca di capire cosa cambia davvero tra un triplo vetro e un doppio, si informa sulle detrazioni fiscali e su quanto tempo serve per la posa. Fa tutto questo online. Se in quella fase non ti trova, quando arriva al momento di chiedere i preventivi tu non sei nella sua lista — non perché il tuo prodotto sia peggiore, ma perché non c'eri quando si stava decidendo. C'è poi la questione del prezzo: il serramentista che compare solo alla fine viene confrontato unicamente sulla cifra, perché il cliente non ha nessun altro elemento per distinguerlo. Chi invece è presente da subito, con contenuti che spiegano le differenze e mostrano lavori fatti, arriva al preventivo avendo già costruito credibilità — e su quello si difende un margine.",
    marketContext:
      "Il mercato dei serramenti ha due caratteristiche che lo rendono adatto alla ricerca online più di quasi ogni altro settore edile. La prima è il valore per commessa: una fornitura completa per un appartamento parte da diverse migliaia di euro e per una villa arriva molto più in alto, quindi anche poche richieste in più all'anno cambiano il bilancio. La seconda è il legame con le detrazioni fiscali: ogni volta che cambia la normativa sui bonus, le ricerche esplodono, e chi in quel momento è già posizionato raccoglie una quota sproporzionata di richieste. A questo si aggiunge il fatto che le ricerche sono estremamente locali — la posa richiede sopralluogo e assistenza, quindi il cliente cerca per forza vicino a casa — e che la concorrenza online tra serramentisti resta bassa: molti hanno solo una pagina Facebook o un sito vetrina fermo da anni. È una posizione che oggi si conquista con relativamente poco.",
    deliverables: [
      "Sito con galleria delle pose realizzate e schede dei materiali trattati",
      "Pagine ottimizzate per \"sostituzione infissi\" e \"preventivo serramenti\" nella tua zona",
      "Contenuti su detrazioni fiscali e differenze tra PVC, alluminio e legno",
      "Profilo Google My Business ottimizzato per le ricerche di zona",
      "Form di richiesta preventivo pensato per il sopralluogo",
      "Strategia recensioni: nel settore infissi pesano moltissimo",
    ],
    searchTerms: [
      "marketing per serramentisti",
      "come trovare clienti serramenti",
      "sito web serramentista",
      "lead serramenti",
      "pubblicità azienda serramenti",
      "preventivo infissi online",
    ],
    faqs: [
      {
        q: "Come trovo nuovi clienti come serramentista?",
        a: "Intercettando le ricerche di chi sta già valutando di cambiare gli infissi nella tua zona: \"sostituzione infissi\" e \"preventivo serramenti\" seguiti dal nome della città. Servono un sito che mostri le pose realizzate e risponda alle domande su materiali e detrazioni, e un profilo Google curato che ti porti nei tre risultati con la mappa.",
      },
      {
        q: "Conviene puntare sulle ricerche legate ai bonus fiscali?",
        a: "Sì, ed è uno dei motivi per cui vale la pena muoversi prima. Quando cambia la normativa sulle detrazioni le ricerche aumentano in modo netto e improvviso: chi è già posizionato raccoglie quelle richieste, chi comincia in quel momento arriva quando l'onda è già passata.",
      },
      {
        q: "Il sito serve anche se lavoro principalmente con imprese e costruttori?",
        a: "Sì, cambia il modo in cui viene scritto. Il committente professionale valuta capacità produttiva, tempi di consegna, marchi trattati e lavori già eseguiti su commesse simili: il sito viene costruito per mettere in evidenza quelli, invece che per parlare al privato che ristruttura casa.",
      },
      {
        q: "Quanto costa il sito per un'azienda di serramenti?",
        a: "1.000€ invece di 1.400€, tutto incluso: design, copywriting, galleria pose, ottimizzazione SEO locale, profilo Google My Business e 30 giorni di assistenza. Zero anticipo: paghi solo dopo aver approvato il sito, con garanzia soddisfatti o rimborsati.",
      },
    ],
  },
  {
    slug: "marketing-fotovoltaico",
    label: "Fotovoltaico",
    h1: "Marketing per il Fotovoltaico: intercettare chi ha già deciso",
    metaTitle: "Marketing Fotovoltaico: Lead e Clienti Veri | ClientiEdili",
    metaDescription:
      "Marketing e siti web per installatori fotovoltaici: farsi trovare da chi cerca un preventivo nella tua zona, senza comprare lead rivenduti.",
    mainKeyword: "marketing fotovoltaico",
    intro:
      "Nel fotovoltaico il cliente arriva già informato: ha letto di autoconsumo, ha fatto due conti sul risparmio in bolletta, sa più o meno che potenza gli serve. Quello che gli manca è scegliere l'installatore, e lo cerca su Google. ClientiEdili costruisce il sito e la presenza online che ti fanno trovare in quel momento preciso — quando la decisione di installare è già presa e resta solo da decidere con chi.",
    problemTitle: "Perché comprare lead fotovoltaici è la strada più cara",
    problemText:
      "Il fotovoltaico è il settore in cui il mercato dei lead a pagamento è più aggressivo, e anche quello in cui funziona peggio. Il meccanismo lo conosci: paghi un contatto che nello stesso momento è stato venduto ad altri quattro installatori, chiami una persona già bombardata di telefonate, e l'unico modo per chiudere diventa fare il preventivo più basso. Su un impianto residenziale, dove il margine è già compresso tra costo dei moduli, costo della manodopera e pratiche di connessione, quella corsa al ribasso ti mangia esattamente il guadagno. Il paradosso è che nel frattempo, nella tua provincia, decine di persone cercano ogni mese \"impianto fotovoltaico\" o \"preventivo fotovoltaico\" e finiscono da chi si è posizionato. Sono richieste che arrivano gratis a chi le intercetta, e che tu stai comprando da un intermediario.",
    marketContext:
      "La domanda di fotovoltaico in Italia è strutturalmente alta e molto sensibile a due variabili: il prezzo dell'energia e gli incentivi. Quando la bolletta sale o esce una nuova misura di sostegno, le ricerche aumentano nel giro di giorni — e chi in quel momento è già in prima pagina raccoglie il grosso delle richieste, mentre chi comincia allora arriva tardi. C'è poi una particolarità del settore: il cliente non compra solo l'impianto, compra la fiducia che tra dieci anni ci sarà ancora qualcuno a fare manutenzione. Questo rende decisivo tutto ciò che dimostra solidità — impianti realizzati con foto e dati di produzione, certificazioni, tempi di intervento, recensioni recenti. Un installatore che online mostra questo si difende dal confronto sul solo prezzo, che è la trappola in cui il settore fa più margine perso. Infine il mercato si sta spostando verso l'ibrido residenziale con accumulo e verso il capannone industriale: due clienti diversi che cercano cose diverse, e che vale la pena intercettare con pagine distinte.",
    deliverables: [
      "Sito con portfolio impianti, potenze installate e dati di produzione reali",
      "Pagine ottimizzate per \"impianto fotovoltaico\" e \"preventivo fotovoltaico\" nella tua zona",
      "Sezioni separate per residenziale con accumulo e per industriale",
      "Contenuti su incentivi, tempi di rientro e pratiche di connessione",
      "Profilo Google My Business ottimizzato per le ricerche locali",
      "Nessun lead condiviso: le richieste arrivano solo a te",
    ],
    searchTerms: [
      "marketing fotovoltaico",
      "lead fotovoltaico",
      "come trovare clienti fotovoltaico",
      "sito web installatore fotovoltaico",
      "acquisizione clienti impianti fotovoltaici",
      "pubblicità azienda fotovoltaico",
    ],
    faqs: [
      {
        q: "Conviene comprare lead fotovoltaici o generarli con il sito?",
        a: "I lead comprati arrivano subito ma sono condivisi con altri installatori, ti mettono in gara sul prezzo e si fermano il giorno in cui smetti di pagare. Il sito posizionato parte più lentamente ma genera richieste esclusive, che continuano ad arrivare anche dopo. Nella pratica ha senso partire dai lead se serve volume immediato, costruendo intanto il canale proprio.",
      },
      {
        q: "Quanto tempo serve per posizionarsi su \"fotovoltaico\" nella mia città?",
        a: "Sulle ricerche locali del tuo comune e dei comuni vicini i primi risultati arrivano di norma in 3-4 mesi. Sulle ricerche di capoluogo, dove la concorrenza è più alta, servono in genere 5-8 mesi di lavoro costante. Il sito però è online in 48 ore e inizia subito a convertire chi ti cerca per nome o ti trova dal profilo Google.",
      },
      {
        q: "Meglio puntare sul residenziale o sull'industriale?",
        a: "Sono due mercati con ricerche e clienti diversi, e la cosa più efficace è presidiarli con pagine distinte. Il residenziale ha volumi alti e decisione rapida; l'industriale ha meno ricerche ma commesse molto più grandi e un committente che valuta referenze e capacità tecnica. Nell'analisi gratuita guardiamo i volumi reali della tua zona per capire dove conviene investire per primo.",
      },
      {
        q: "Il sito aiuta anche con la manutenzione e il post-vendita?",
        a: "Sì, ed è una fonte di lavoro spesso trascurata. Molte ricerche riguardano manutenzione, pulizia moduli, sostituzione inverter e revamping di impianti installati anni fa da aziende che non ci sono più. Sono interventi a buon margine e con poca concorrenza online: chi presidia quelle ricerche si costruisce un flusso costante.",
      },
    ],
  },
  {
    slug: "marketing-impiantisti",
    label: "Impiantisti",
    h1: "Marketing per Impiantisti: farsi trovare quando serve",
    metaTitle: "Marketing per Impiantisti Termoidraulici ed Elettrici",
    metaDescription:
      "Siti web e SEO locale per impiantisti termoidraulici ed elettrici: farsi trovare da chi cerca un intervento nella tua zona. Consegna in 48 ore.",
    mainKeyword: "marketing per impiantisti",
    intro:
      "Chi ha la caldaia guasta o deve rifare l'impianto non chiede in giro: cerca su Google e chiama uno dei primi numeri che trova. Nel lavoro impiantistico la posizione nei risultati locali vale più che in qualsiasi altro mestiere edile, perché la decisione si prende in pochi minuti. ClientiEdili costruisce il sito e il profilo Google che ti mettono tra quei primi numeri.",
    problemTitle: "Nel tuo mestiere si decide in cinque minuti",
    problemText:
      "L'impiantistica ha una dinamica tutta sua: una parte importante del lavoro nasce da un'urgenza. La caldaia si spegne a dicembre, salta un impianto elettrico, si rompe una tubazione. In quei casi il cliente non confronta tre preventivi e non chiede consiglio a nessuno: apre il telefono, cerca, e chiama il primo risultato credibile con un numero visibile. Se il tuo profilo Google non c'è o è incompleto, quella chiamata la prende un altro — e quel cliente, una volta trovato un tecnico che risolve, resta suo anche per tutte le manutenzioni successive. È il motivo per cui nell'impiantistica la posizione locale non porta solo un intervento, porta un cliente ricorrente. E vale anche per l'altra metà del lavoro, quella programmata: rifacimento bagno, nuovo impianto di riscaldamento, pompa di calore. Lì il cliente si informa più a lungo, ma parte comunque dalla stessa ricerca.",
    marketContext:
      "Il mercato impiantistico italiano sta vivendo una transizione che sposta molto lavoro: pompe di calore al posto delle caldaie, impianti ibridi, colonnine di ricarica, adeguamenti elettrici legati all'aumento dei carichi domestici. Sono tutte cose che il cliente conosce poco e su cui cerca informazioni prima di chiamare — e chi risponde a quelle domande online si presenta come il tecnico competente prima ancora del sopralluogo. Allo stesso tempo la concorrenza digitale tra impiantisti è tra le più basse dell'intero settore edile: moltissime aziende non hanno sito, e chi ce l'ha ha spesso una pagina di contatti e poco altro. Chi presidia bene le ricerche del proprio comune e dei comuni limitrofi, con un profilo Google pieno di recensioni recenti, si trova in una posizione difficile da attaccare — perché nell'urgenza il cliente non scorre oltre i primi tre risultati.",
    deliverables: [
      "Sito con numero di telefono sempre visibile e chiamata a un tocco da mobile",
      "Pagine per ogni intervento: caldaie, pompe di calore, impianti elettrici, bagni",
      "Profilo Google My Business ottimizzato per il Local Pack e le urgenze",
      "Contenuti su pompe di calore, ibridi e adeguamenti normativi",
      "Strategia recensioni: nell'urgenza il cliente sceglie chi ne ha di recenti",
      "Zone di intervento chiare, così ricevi chiamate raggiungibili",
    ],
    searchTerms: [
      "marketing per impiantisti",
      "sito web idraulico",
      "come trovare clienti impiantistica",
      "sito web elettricista",
      "pubblicità azienda impianti termoidraulici",
      "farsi trovare come idraulico",
    ],
    faqs: [
      {
        q: "Cosa conta di più per un impiantista: il sito o il profilo Google?",
        a: "Il profilo Google porta le chiamate immediate, soprattutto sulle urgenze, ed è la priorità. Il sito serve a due cose che il profilo non fa: convincere sui lavori programmati, dove il cliente si informa prima, e reggere il posizionamento nel tempo. Lavorano bene insieme, ma se devi partire da uno, si parte dal profilo.",
      },
      {
        q: "Come faccio a ricevere più chiamate per le urgenze?",
        a: "Servono un profilo Google completo — orari, zone servite, servizi, foto — recensioni recenti e un numero cliccabile ben visibile. Nell'urgenza il cliente non scorre: guarda i primi tre risultati con la mappa e chiama. Tutto il lavoro si concentra lì.",
      },
      {
        q: "Vale la pena fare contenuti su pompe di calore e impianti ibridi?",
        a: "Sì, è una delle opportunità migliori del momento. Sono tecnologie che il cliente conosce poco e su cui cerca molte informazioni prima di decidere: chi risponde a quelle domande viene percepito come il tecnico competente e riceve la richiesta di sopralluogo, spesso senza nemmeno essere confrontato con altri.",
      },
      {
        q: "Seguite sia i termoidraulici sia gli elettricisti?",
        a: "Sì, e anche chi fa entrambe le cose. Cambiano le ricerche da intercettare e il tipo di intervento da mettere in evidenza, ma l'impianto del lavoro è lo stesso: profilo Google forte per le chiamate immediate, sito e contenuti per i lavori programmati.",
      },
    ],
  },
  {
    slug: "marketing-cappotto-termico",
    label: "Cappotto termico",
    h1: "Farsi Scegliere da Privati e Amministratori di Condominio",
    metaTitle: "Cappotto Termico: Farsi Scegliere dai Committenti",
    metaDescription:
      "Marketing e siti web per imprese di cappotto termico ed efficientamento energetico: intercettare chi cerca un preventivo nella tua zona. Analisi gratuita.",
    mainKeyword: "marketing cappotto termico",
    intro:
      "Chi cerca \"cappotto termico\" su Google non sta curiosando: ha una bolletta alta, un condominio da riqualificare o una detrazione da sfruttare, e sta cercando chi glielo fa. È il momento in cui la tua impresa deve comparire. ClientiEdili costruisce il sito e la presenza locale che ti mettono in quella pagina di risultati, con consegna in 48 ore e zero anticipo.",
    problemTitle: "Il problema di chi vive di bonus: il rubinetto si chiude",
    problemText:
      "Le imprese cresciute con i bonus edilizi hanno imparato una lezione dura: quando l'incentivo cambia o si riduce, il telefono smette di squillare da un giorno all'altro. Non perché il lavoro non esista più — l'efficientamento energetico resta obbligato dalle direttive europee sugli edifici e dal costo dell'energia — ma perché quelle imprese non avevano un canale proprio: i clienti arrivavano da general contractor, da segnalazioni, da un'onda che si è ritirata. Chi in quegli anni ha costruito anche una presenza online continua a ricevere richieste, perché intercetta direttamente il proprietario o l'amministratore che cerca. È la differenza tra dipendere da un'onda e avere un canale che resta.",
    marketContext:
      "Il mercato dell'efficientamento in Italia ha una domanda strutturale enorme: gran parte del patrimonio edilizio è in classe energetica bassa e la direttiva europea sulle case green spinge verso riqualificazioni che dureranno anni. Ma è anche un mercato dove il cliente parte disorientato — non sa distinguere un cappotto in EPS da uno in lana di roccia, non sa quanto durano i lavori, ha sentito storie di cantieri infiniti e di ponteggi rimasti su per mesi. Questo crea un'opportunità precisa: chi risponde online a quelle domande, con casi reali e spiegazioni chiare, viene percepito come l'impresa seria prima ancora del sopralluogo, e arriva al preventivo senza dover competere solo sul prezzo. Il committente condominiale poi ha un percorso tutto suo: decide un'assemblea, istruita da un amministratore che confronta imprese online e vuole vedere lavori simili già portati a termine.",
    deliverables: [
      "Sito con casi reali di cappotto: prima, durante e dopo, con i dati energetici",
      "Pagine per \"cappotto termico\" e \"riqualificazione energetica\" nella tua zona",
      "Sezione dedicata agli amministratori di condominio e alle assemblee",
      "Contenuti su materiali, tempi di cantiere e detrazioni vigenti",
      "Profilo Google My Business ottimizzato per le ricerche locali",
      "Form di richiesta sopralluogo pensato per il committente condominiale",
    ],
    searchTerms: [
      "marketing cappotto termico",
      "trovare clienti cappotto termico",
      "impresa cappotto termico",
      "riqualificazione energetica condominio",
      "clienti efficientamento energetico",
      "preventivo cappotto termico",
    ],
    faqs: [
      {
        q: "Ha senso investire nel marketing ora che i bonus sono ridotti?",
        a: "Ha più senso di prima. Con incentivi generosi il lavoro arrivava da solo e la concorrenza online era feroce; ora molte imprese si sono fermate o hanno chiuso, e chi resta trova meno concorrenza sulle stesse ricerche. La domanda di efficientamento non sparisce: è spinta dal costo dell'energia e dalle direttive europee sugli edifici.",
      },
      {
        q: "Come intercetto gli amministratori di condominio?",
        a: "Con contenuti pensati per loro, che sono un cliente diverso dal privato: vogliono vedere lavori condominiali già conclusi, capire come gestisci l'assemblea e la documentazione, sapere che i tempi vengono rispettati. Il sito prevede una sezione dedicata proprio a questo percorso.",
      },
      {
        q: "Quanto tempo serve per posizionarsi su \"cappotto termico\" nella mia zona?",
        a: "Sulle ricerche del tuo comune e dei comuni vicini in genere 3-5 mesi. Sulle ricerche di capoluogo serve di più, tra 6 e 9 mesi. Il sito è comunque online in 48 ore e inizia subito a convertire chi ti trova dal profilo Google o ti cerca per nome.",
      },
      {
        q: "Il sito serve se lavoro in subappalto per general contractor?",
        a: "Sì, e serve per due motivi. Il primo è difensivo: dipendere da pochi committenti è fragile, e un canale proprio riduce quel rischio. Il secondo è che anche i general contractor selezionano i subappaltatori guardando online chi ha già fatto lavori simili.",
      },
    ],
  },
  {
    slug: "marketing-ristrutturazioni",
    label: "Ristrutturazioni",
    h1: "Marketing per imprese di ristrutturazione: farsi scegliere",
    metaTitle: "Marketing Imprese di Ristrutturazione | ClientiEdili",
    metaDescription:
      "Marketing e siti web per imprese di ristrutturazione: intercettare chi cerca un preventivo nella tua zona e non competere solo sul prezzo. Analisi gratuita.",
    mainKeyword: "marketing imprese di ristrutturazione",
    intro:
      "La ristrutturazione è la ricerca più fatta dell'intero settore edile: ogni mese, in ogni provincia italiana, migliaia di persone cercano chi ristruttura casa. È anche la più competitiva, ed è per questo che va affrontata con metodo — non con una pagina vetrina uguale a quella di tutti. ClientiEdili costruisce il sito e la strategia locale che ti fanno scegliere, con consegna in 48 ore e zero anticipo.",
    problemTitle: "Perché la ristrutturazione si vince prima del preventivo",
    problemText:
      "Chi ristruttura casa sta per affidare a uno sconosciuto decine di migliaia di euro e il posto dove vive. È la decisione più carica di ansia di tutto il settore, e non si gioca sul prezzo: si gioca sulla paura di trovarsi con un cantiere fermo, costi che salgono in corsa e un'impresa che sparisce a metà lavoro. Il preventivo più basso, in questo contesto, spesso spaventa invece di convincere. Chi vince è chi arriva al sopralluogo avendo già tolto quella paura — mostrando lavori conclusi, spiegando come gestisce tempi e varianti, facendo vedere che esiste un'azienda vera dietro il numero di telefono. Tutto questo o è online, o non esiste: sono le informazioni che il cliente cerca esattamente nei giorni in cui decide chi chiamare, e quasi nessuna impresa gliele dà.",
    marketContext:
      "Il mercato delle ristrutturazioni residenziali è il più grande dell'edilizia italiana e il più frammentato: migliaia di imprese piccole e medie che si contendono gli stessi clienti, quasi tutte indistinguibili l'una dall'altra agli occhi di chi cerca. Questo è un problema per il cliente ma un'opportunità per te, perché differenziarsi richiede poco: bastano un portfolio credibile, risposte chiare su tempi e costi e recensioni recenti per uscire dal mucchio. Un secondo elemento decisivo è la specializzazione. Le ricerche generiche come \"ristrutturazione casa\" sono contese da tutti; quelle specifiche — ristrutturazione bagno, ristrutturazione appartamento chiavi in mano, ristrutturazione cucina, ristrutturazione uffici — hanno meno concorrenza, intenzione d'acquisto più alta e portano clienti che cercano esattamente quello che sai fare meglio. È lì che si costruisce un posizionamento difendibile.",
    deliverables: [
      "Portfolio con prima e dopo di ogni lavoro, la cosa che il cliente guarda per prima",
      "Pagine separate per bagno, cucina, appartamento completo e chiavi in mano",
      "Contenuti su tempi, gestione delle varianti e cosa comprende davvero un preventivo",
      "SEO locale sulle ricerche del tuo comune e dei comuni limitrofi",
      "Profilo Google My Business con strategia recensioni",
      "Form di richiesta sopralluogo, non un generico 'contattaci'",
    ],
    searchTerms: [
      "marketing imprese di ristrutturazione",
      "trovare clienti ristrutturazioni",
      "sito web impresa di ristrutturazione",
      "clienti ristrutturazione chiavi in mano",
      "pubblicità impresa ristrutturazioni",
      "preventivo ristrutturazione online",
    ],
    faqs: [
      {
        q: "Come mi differenzio da decine di imprese che fanno la stessa cosa?",
        a: "Con due leve. La prima è la specializzazione: presidiare le ricerche specifiche — bagno, cucina, chiavi in mano, uffici — invece della generica \"ristrutturazione\", dove competi con tutti. La seconda è la riduzione del rischio percepito: mostrare lavori conclusi, spiegare come gestisci tempi e varianti, avere recensioni recenti.",
      },
      {
        q: "Meglio puntare sulle ricerche generiche o su quelle specifiche?",
        a: "Su quelle specifiche, almeno all'inizio. \"Ristrutturazione bagno\" più il nome della tua città ha meno concorrenza, si conquista in meno mesi e porta clienti con un'esigenza già definita. Le generiche si aggrediscono dopo, quando il sito ha accumulato autorevolezza.",
      },
      {
        q: "Devo mostrare i prezzi sul sito?",
        a: "Non i prezzi puntuali, ma sì gli ordini di grandezza e soprattutto cosa comprende e cosa no un preventivo. È la domanda che il cliente si fa per prima, e chi le risponde riceve richieste più qualificate: meno sopralluoghi a vuoto con chi ha un budget fuori scala.",
      },
      {
        q: "Quanto costa il sito per un'impresa di ristrutturazione?",
        a: "1.000€ invece di 1.400€, tutto incluso: design, copywriting, portfolio prima-dopo, ottimizzazione SEO locale, profilo Google My Business e 30 giorni di assistenza. Zero anticipo: paghi solo dopo aver approvato il sito, con garanzia soddisfatti o rimborsati.",
      },
    ],
  },
  {
    slug: "marketing-coperture-tetti",
    label: "Coperture e tetti",
    h1: "Marketing per chi fa tetti e coperture",
    metaTitle: "Marketing per Imprese di Coperture e Tetti | ClientiEdili",
    metaDescription:
      "Siti web e SEO locale per imprese di coperture e rifacimento tetti: farsi trovare da chi ha un'infiltrazione o deve rifare il tetto. Consegna in 48 ore.",
    mainKeyword: "marketing coperture e tetti",
    intro:
      "Il rifacimento del tetto è un lavoro che il cliente non programma: lo decide quando compare una macchia sul soffitto o dopo una grandinata. In quel momento cerca su Google, chiama due o tre numeri e sceglie chi risponde e ispira fiducia. ClientiEdili ti mette tra quei numeri, con un sito online in 48 ore e un profilo Google costruito per le ricerche della tua zona.",
    problemTitle: "Un lavoro che nasce da un'urgenza e da una diffidenza",
    problemText:
      "Chi ha un'infiltrazione ha due sensazioni contemporaneamente: fretta e sospetto. Fretta perché l'acqua non aspetta, sospetto perché il tetto è la parte di casa che non può controllare — non sale a vedere se il lavoro è fatto bene, non sa se il preventivo è onesto, e sa che nel settore girano storie di interventi gonfiati. Il risultato è che chiama più imprese e sceglie quella che gli sembra più solida, non la più economica. Se online non ti trova, o trova un numero di cellulare senza altro, quella solidità non gliela stai dimostrando. Foto di coperture rifatte, spiegazioni su come si individua davvero il punto dell'infiltrazione, chiarezza sui materiali e sulle garanzie: sono le cose che spostano quella telefonata su di te — e sono anche quelle che ti permettono di non farti tirare sul prezzo.",
    marketContext:
      "Il mercato delle coperture ha caratteristiche che lo rendono particolarmente interessante da presidiare online. È fortemente stagionale e reattivo agli eventi meteo: dopo una grandinata o un periodo di piogge intense le ricerche di \"riparazione tetto\" nella zona colpita esplodono per giorni, e chi è già posizionato raccoglie tutto. È un settore dove la concorrenza digitale è bassissima — moltissime imprese di coperture non hanno sito, lavorano solo su segnalazione — e dove il valore per intervento è alto, dal rifacimento completo alla sostituzione della guaina fino ai lavori in quota su condominio. C'è poi una fascia in crescita legata all'efficientamento: isolamento del sottotetto, coperture ventilate, integrazione con il fotovoltaico. Sono ricerche in aumento e quasi prive di concorrenza qualificata.",
    deliverables: [
      "Sito con galleria delle coperture rifatte e dettaglio dei materiali usati",
      "Pagine per rifacimento tetto, infiltrazioni, guaina, lattoneria e sottotetto",
      "Numero di telefono cliccabile e sempre visibile: qui si decide in fretta",
      "Profilo Google My Business ottimizzato per le urgenze locali",
      "Contenuti su garanzie, sicurezza in quota e come si individua un'infiltrazione",
      "Zone di intervento chiare, così ricevi chiamate raggiungibili",
    ],
    searchTerms: [
      "marketing coperture e tetti",
      "trovare clienti rifacimento tetti",
      "sito web impresa coperture",
      "clienti riparazione infiltrazioni tetto",
      "pubblicità azienda lattoneria",
      "preventivo rifacimento tetto",
    ],
    faqs: [
      {
        q: "Come ricevo più chiamate quando c'è stata una grandinata?",
        a: "Bisogna essere già posizionati prima: dopo un evento meteo le ricerche durano pochi giorni e non c'è tempo di costruire nulla. Un profilo Google completo con recensioni recenti e un sito con pagine dedicate a infiltrazioni e riparazioni urgenti fanno la differenza esattamente in quelle finestre.",
      },
      {
        q: "Conviene puntare anche sul sottotetto e sulle coperture ventilate?",
        a: "Sì, ed è una delle opportunità migliori del settore. Sono ricerche in crescita, legate all'efficientamento energetico, con valore per commessa alto e quasi nessuna concorrenza qualificata online: chi le presidia ora se le tiene a lungo.",
      },
      {
        q: "Il sito aiuta anche con i lavori condominiali?",
        a: "Sì. L'amministratore che deve far rifare la copertura di un condominio cerca online imprese che abbiano già gestito cantieri simili: ponteggi, sicurezza, tempi, rapporto con l'assemblea. Mostrare quei lavori è ciò che ti fa entrare nella rosa dei preventivi.",
      },
      {
        q: "Quanto costa il sito per un'impresa di coperture?",
        a: "1.000€ invece di 1.400€, tutto incluso: design, copywriting, galleria lavori, SEO locale, profilo Google My Business e 30 giorni di assistenza. Zero anticipo, garanzia soddisfatti o rimborsati.",
      },
    ],
  },
  {
    slug: "marketing-edilizia-industriale",
    label: "Edilizia industriale",
    h1: "Marketing per l'edilizia industriale e i capannoni",
    metaTitle: "Marketing Edilizia Industriale e Capannoni | ClientiEdili",
    metaDescription:
      "Marketing per imprese di edilizia industriale: farsi trovare dalle aziende che cercano chi costruisce o ristruttura capannoni. Analisi gratuita del mercato.",
    mainKeyword: "marketing edilizia industriale",
    intro:
      "Nell'edilizia industriale una commessa vale quanto decine di lavori residenziali, e il committente è un'azienda che prima di chiamarti ti controlla online. Se non trova referenze, capacità produttiva e lavori simili già realizzati, non ti mette nemmeno in gara. ClientiEdili costruisce il sito che regge quella verifica, con consegna in 48 ore e zero anticipo.",
    problemTitle: "Il committente industriale ti valuta prima di contattarti",
    problemText:
      "Quando un'azienda deve costruire un capannone, ampliare uno stabilimento o rifare una copertura industriale, il percorso è diverso da quello del privato. Non c'è emotività: c'è un responsabile tecnico o un titolare che fa una lista corta di imprese e la fa cercando online chi ha già fatto quel tipo di lavoro. Guarda le dimensioni delle opere realizzate, i settori dei committenti passati, le certificazioni, se l'impresa è strutturata abbastanza da reggere una commessa da centinaia di migliaia di euro senza fermarsi a metà. Un'impresa che online non mostra niente di tutto questo viene esclusa in quella fase, prima di qualunque contatto — e non lo saprà mai, perché nessuno la chiama per dirle che è stata scartata. È il costo invisibile dell'assenza digitale, ed è più alto qui che in qualsiasi altro segmento dell'edilizia.",
    marketContext:
      "L'edilizia industriale italiana è trainata da logistica, rilocalizzazione produttiva e adeguamenti normativi: nuovi capannoni, ampliamenti, rifacimento di coperture industriali spesso con amianto da bonificare, adeguamenti antisismici, impianti fotovoltaici su tetti di grande superficie. Sono commesse di importo elevato e con cicli decisionali lunghi, mesi durante i quali il committente si informa e confronta. Questo cambia completamente cosa deve fare il sito: non serve a generare una telefonata impulsiva, serve a reggere una valutazione. Il vantaggio è che la concorrenza online in questo segmento è quasi inesistente — la maggior parte delle imprese industriali si affida a relazioni consolidate e non ha presenza digitale. Chi si posiziona sulle ricerche di settore trova campo libero, e ogni singola commessa intercettata ripaga l'investimento molte volte.",
    deliverables: [
      "Sito che mostra opere realizzate con metrature, tempi e settore del committente",
      "Pagine per costruzione capannoni, ampliamenti, coperture industriali e bonifiche",
      "Sezione certificazioni, qualifiche SOA e capacità produttiva",
      "Contenuti su adeguamento sismico, antincendio e normative",
      "SEO sulle ricerche di settore e sulla tua area di operatività",
      "Form pensato per il responsabile tecnico, non per il privato",
    ],
    searchTerms: [
      "marketing edilizia industriale",
      "costruzione capannoni industriali",
      "impresa edile industriale",
      "rifacimento copertura capannone",
      "clienti edilizia industriale",
      "ampliamento stabilimento produttivo",
    ],
    faqs: [
      {
        q: "Serve davvero un sito se lavoriamo su relazioni consolidate?",
        a: "Le relazioni portano lavoro finché reggono, ma concentrano il rischio su pochi committenti: se uno rallenta o cambia fornitore, il buco è grosso. Il sito apre un secondo canale e, soprattutto, sostiene le relazioni stesse — anche chi ti viene segnalato ti verifica online prima di metterti in gara.",
      },
      {
        q: "Cosa deve mostrare il sito di un'impresa industriale?",
        a: "Cose concrete e verificabili: metrature realizzate, tipologie di opere, settori dei committenti, certificazioni e qualifiche SOA, capacità di gestire commesse di una certa dimensione. Il committente tecnico cerca prove di capacità, non slogan.",
      },
      {
        q: "Le ricerche in questo settore sono poche: vale la pena?",
        a: "Sì, perché il valore per commessa ribalta il conto. Nel residenziale servono molte richieste per fare fatturato; qui una sola commessa intercettata ripaga l'investimento molte volte. E la concorrenza online quasi assente rende il posizionamento più rapido e più stabile.",
      },
      {
        q: "Seguite anche la bonifica amianto e il fotovoltaico industriale?",
        a: "Sì, e sono due delle ricerche più redditizie del segmento. Molti capannoni hanno coperture in cemento-amianto da sostituire, spesso con un impianto fotovoltaico da installare sulla nuova copertura: è un lavoro ad alto valore su cui poche imprese si posizionano online.",
      },
    ],
  },
  {
    slug: "google-ads-edilizia",
    label: "Google Ads edilizia",
    h1: "Campagne a Pagamento per l'Edilizia: come le impostiamo",
    metaTitle: "Campagne a Pagamento per Imprese Edili | ClientiEdili",
    metaDescription:
      "Google Ads per imprese edili: quando ha senso, quanto costa un contatto e perché senza una pagina che converte è denaro buttato. Analisi gratuita.",
    mainKeyword: "Google Ads per edilizia",
    intro:
      "Google Ads nell'edilizia funziona, ma non come te l'hanno raccontato. Ti porta clic dal primo giorno — e li porta anche a chi ha una pagina che non converte, bruciando budget senza una richiesta. ClientiEdili parte dall'altra estremità: prima costruisce la pagina che trasforma il clic in preventivo, poi valuta con te se l'investimento in campagne ha senso nel tuo mercato.",
    problemTitle: "Perché la maggior parte delle campagne edili perde soldi",
    problemText:
      "Il meccanismo di fallimento è quasi sempre lo stesso. L'impresa attiva una campagna su parole generiche come \"ristrutturazioni\" o \"impresa edile\", paga clic anche di chi cerca informazioni e non lavori, e manda tutti sulla home del sito. La home parla dell'azienda, non risponde alla domanda che l'utente aveva in mente, e la persona esce in pochi secondi. Risultato: budget consumato, zero richieste, e la convinzione che Google Ads nell'edilizia non funzioni. In realtà non ha funzionato la struttura: chi cerca \"rifacimento bagno\" deve atterrare su una pagina che parla di rifacimento bagno, con foto di bagni rifatti e un modo immediato per chiedere il sopralluogo. C'è poi un errore ancora più costoso, e diffuso: spendere in campagne senza aver prima costruito il canale organico, cioè pagare ogni singolo contatto per sempre invece di costruire qualcosa che continua a portare richieste anche quando smetti.",
    marketContext:
      "Nell'edilizia il costo per clic varia moltissimo a seconda della ricerca e della zona: le parole generiche nei capoluoghi sono contese e care, quelle specifiche nei comuni minori costano una frazione e portano contatti molto più qualificati. Questo rende la scelta delle parole più importante del budget. C'è poi una particolarità del settore che cambia i conti: il valore di un cliente è alto, quindi si può sostenere un costo per contatto che in altri settori sarebbe insostenibile — ma solo se la percentuale di richieste che diventano lavori è decente, e quella dipende quasi tutta dalla pagina di atterraggio e dalla velocità con cui richiami. Le campagne rendono al massimo quando affiancano un canale organico già avviato: il traffico a pagamento copre i picchi e le stagionalità, l'organico regge la base. Usate da sole, restano un rubinetto che si chiude nel momento esatto in cui smetti di pagare.",
    deliverables: [
      "Pagine di atterraggio dedicate a ogni servizio, non la home per tutti",
      "Struttura del sito pensata perché il traffico a pagamento converta",
      "Tracciamento delle conversioni configurato: sai quanto costa ogni richiesta",
      "Analisi preventiva di volumi e costi per clic della tua zona",
      "Indicazione onesta su quando le campagne non convengono nel tuo caso",
      "Canale organico in parallelo, per non dipendere solo dal budget",
    ],
    searchTerms: [
      "Google Ads per edilizia",
      "campagne Google per imprese edili",
      "pubblicità Google impresa edile",
      "quanto costa Google Ads edilizia",
      "advertising settore edile",
      "campagne Facebook per imprese edili",
    ],
    faqs: [
      {
        q: "Google Ads conviene per un'impresa edile?",
        a: "Dipende dalla zona e dal servizio. Nelle ricerche specifiche e nei comuni minori il costo per contatto è spesso sostenibile e le campagne rendono; sulle generiche nei capoluoghi si spende molto per contatti poco qualificati. Nell'analisi gratuita guardiamo i volumi e i costi reali della tua zona e te lo diciamo prima che tu spenda.",
      },
      {
        q: "Meglio Google Ads o SEO?",
        a: "Fanno cose diverse. Le campagne portano richieste subito e si fermano quando smetti di pagare; la SEO parte più lenta ma costruisce un canale che resta. Nella maggior parte dei casi conviene partire dal sito e dall'organico, e usare le campagne per coprire i mesi lenti o lanciare un servizio nuovo.",
      },
      {
        q: "Perché la mia campagna non ha portato richieste?",
        a: "Quasi sempre per due motivi: le parole erano troppo generiche e il traffico atterrava sulla home invece che su una pagina dedicata a quel servizio. Chi cerca \"rifacimento bagno\" deve trovare una pagina di rifacimenti bagno, non la presentazione dell'azienda.",
      },
      {
        q: "Gestite voi le campagne?",
        a: "Il nostro lavoro parte dal sito e dalle pagine che convertono, che sono la condizione perché qualunque campagna renda. Sulla gestione pubblicitaria ragioniamo insieme dopo l'analisi: se nel tuo mercato non conviene, te lo diciamo invece di venderti un budget.",
      },
    ],
  },
];

export const settoreSlugs = settori.map((s) => s.slug);
