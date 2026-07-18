import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Traccia i cambi pagina della SPA per Google Tag Manager / GA4.
 * A ogni navigazione client-side invia un evento "page_view" al dataLayer
 * (con path e titolo aggiornati). Serve perché in una Single Page App il
 * browser non ricarica la pagina, quindi GTM da solo conterebbe solo la
 * prima schermata. In GTM basta far scattare i tag sul trigger evento
 * personalizzato "page_view".
 */
export default function GtmRouteTracker() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.dataLayer = window.dataLayer || [];
    // timeout 0 per leggere il <title> dopo l'aggiornamento di react-helmet
    const id = window.setTimeout(() => {
      window.dataLayer!.push({
        event: "page_view",
        page_path: location.pathname + location.search,
        page_location: window.location.href,
        page_title: document.title,
      });
    }, 0);
    return () => window.clearTimeout(id);
  }, [location.pathname, location.search]);

  return null;
}
