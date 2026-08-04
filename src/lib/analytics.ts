/**
 * Punto unico di uscita degli eventi di analytics.
 *
 * Ogni evento viene inoltrato a tre destinazioni:
 *  - dataLayer -> Google Tag Manager (GTM-5BH98VJL)
 *  - gtag      -> GA4 (G-3ZLE1Q7TKR)
 *  - fbq       -> Meta Pixel (912028060826443)
 *
 * ATTENZIONE GA4: il tag GA4 è caricato direttamente in index.html, NON dentro
 * il container GTM. I page_view NON passano da qui: li invia gtag.js da solo,
 * sia al primo caricamento sia sulle navigazioni SPA (enhanced measurement sugli
 * eventi cronologia). Mandarli anche a mano li conterebbe due volte — verificato
 * sul campo. Da qui a GA4 passano solo gli eventi di conversione.
 * Se qualcuno aggiunge un tag "GA4 Configuration" dentro GTM, prima va rimosso
 * lo snippet gtag.js da index.html, altrimenti si raddoppia tutto.
 */

export const GA4_MEASUREMENT_ID = "G-3ZLE1Q7TKR";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/** Invia lo stesso evento al dataLayer di GTM e a GA4. */
function emit(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
  window.gtag?.("event", event, params);
}

/**
 * Visualizzazione di pagina.
 *
 * Va al dataLayer (per i tag dentro GTM, che altrimenti vedrebbero solo la
 * prima schermata) e a Meta. NON a GA4: ci pensa gtag.js da solo — vedi la nota
 * in testa al file.
 *
 * @param isFirstLoad true al primo render dopo un caricamento completo: in quel
 * caso il PageView di Meta l'ha già inviato lo snippet base in index.html, e
 * ripeterlo qui lo conterebbe due volte.
 */
export function trackPageView({ isFirstLoad }: { isFirstLoad: boolean }) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "page_view",
    page_path: window.location.pathname + window.location.search,
    page_location: window.location.href,
    page_title: document.title,
  });

  if (!isFirstLoad) {
    window.fbq?.("track", "PageView");
    window.fbq?.("trackCustom", "PV_Clientiedili");
  }
}

/** Richiesta di contatto completata (atterraggio su /grazie). */
export function trackLead() {
  emit("generate_lead");
  if (typeof window !== "undefined") window.fbq?.("track", "Lead");
}

/** Intento di contatto: click su un link telefono o WhatsApp. */
export function trackContact(method: "phone" | "whatsapp") {
  emit("contact", { method });
  if (typeof window !== "undefined") window.fbq?.("track", "Contact");
}
