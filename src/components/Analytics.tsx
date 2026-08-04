import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackContact, trackLead, trackPageView } from "@/lib/analytics";

/**
 * Aggancia gli eventi di analytics al routing della SPA.
 *
 * In una Single Page App il browser non ricarica la pagina, quindi né GTM né il
 * pixel di Meta si accorgono dei cambi di rotta: senza questo componente
 * verrebbe contata solo la prima schermata.
 *
 * - page_view: a ogni navigazione (GTM + GA4; Meta solo dopo il primo render,
 *   perché il PageView iniziale lo manda già lo snippet base in index.html)
 * - generate_lead / Lead: all'atterraggio su /grazie. Perché scatti, l'URL di
 *   ringraziamento del form EdiliziaInCloud deve puntare a /grazie.
 * - contact / Contact: al click su un link telefono o WhatsApp.
 */
export default function Analytics() {
  const location = useLocation();
  const firstRender = useRef(true);

  useEffect(() => {
    const isFirstLoad = firstRender.current;
    firstRender.current = false;

    // timeout 0 per leggere il <title> dopo l'aggiornamento di react-helmet
    const id = window.setTimeout(() => {
      trackPageView({ isFirstLoad });
      if (location.pathname === "/grazie") trackLead();
    }, 0);
    return () => window.clearTimeout(id);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const href = target?.closest?.("a")?.getAttribute("href") || "";
      if (/^tel:/i.test(href)) trackContact("phone");
      else if (/wa\.me|api\.whatsapp\.com|wa\.link/i.test(href)) trackContact("whatsapp");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
