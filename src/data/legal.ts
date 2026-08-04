/**
 * Dati del titolare del trattamento, usati dalle pagine legali e dal footer.
 * Fonte: visura Domus Group S.r.l.
 */
export const TITOLARE = {
  ragioneSociale: "Domus Group S.r.l.",
  brand: "ClientiEdili",
  sede: "Via Aurelio Saffi 29, 20123 Milano (MI), Italia",
  piva: "13132010961",
  pec: "domusgroupsrl@legalmail.it",
  email: "info@clientiedili.com",
  telefono: "+39 350 178 2744",
  sito: "https://clientiedili.com",
} as const;

/** Ultimo aggiornamento dei testi legali. Aggiornare quando cambiano. */
export const LEGAL_LAST_UPDATE = "4 agosto 2026";

/** Strumenti di terze parti che impostano cookie o tracciano la navigazione. */
export const TRACCIAMENTI = [
  {
    nome: "Google Analytics 4",
    fornitore: "Google Ireland Limited",
    finalita:
      "Statistiche di navigazione in forma aggregata: pagine viste, provenienza del traffico, richieste di contatto completate.",
    categoria: "Statistica",
    durata: "Fino a 2 anni",
    privacy: "https://policies.google.com/privacy",
  },
  {
    nome: "Google Tag Manager",
    fornitore: "Google Ireland Limited",
    finalita:
      "Gestione tecnica degli altri strumenti di misurazione. Da solo non profila l'utente.",
    categoria: "Tecnico",
    durata: "Durata della sessione",
    privacy: "https://policies.google.com/privacy",
  },
  {
    nome: "Meta Pixel",
    fornitore: "Meta Platforms Ireland Limited",
    finalita:
      "Misurazione dei risultati delle campagne pubblicitarie su Facebook e Instagram e creazione di pubblici per il remarketing.",
    categoria: "Marketing",
    durata: "Fino a 90 giorni",
    privacy: "https://www.facebook.com/privacy/policy",
  },
  {
    nome: "EdiliziaInCloud",
    fornitore: "Domus Group S.r.l.",
    finalita:
      "Modulo di richiesta contatto: raccoglie i dati che inserisci volontariamente e li recapita al nostro CRM.",
    categoria: "Tecnico",
    durata: "Durata della sessione",
    privacy: "https://ediliziaincloud.it",
  },
] as const;
