import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Eventi Meta Pixel per la SPA.
 * - PageView: il codice base in index.html lo invia al primo caricamento;
 *   qui lo ri-inviamo a ogni navigazione client-side (che il pixel da solo
 *   non rileva).
 * - Lead: sulla pagina di ringraziamento /grazie (richiesta di contatto
 *   completata). Perché scatti servono i lead che atterrano su /grazie:
 *   imposta l'URL di ringraziamento del form EiC su /grazie.
 * - Contact: al click su un link telefono o WhatsApp (intento di contatto).
 */
export default function MetaPixelTracker() {
  const location = useLocation();
  const firstRender = useRef(true);

  // PageView sulle navigazioni SPA + Lead su /grazie
  useEffect(() => {
    if (typeof window === "undefined" || typeof window.fbq !== "function") return;

    if (firstRender.current) {
      // PageView e PV_Clientiedili iniziali li ha già inviati il codice base nell'HTML
      firstRender.current = false;
    } else {
      window.fbq("track", "PageView");
      window.fbq("trackCustom", "PV_Clientiedili");
    }

    if (location.pathname === "/grazie") {
      window.fbq("track", "Lead");
    }
  }, [location.pathname, location.search]);

  // Contact: click su link telefono / WhatsApp
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.("a");
      const href = link?.getAttribute("href") || "";
      if (/^tel:|wa\.me|api\.whatsapp\.com|wa\.link/i.test(href)) {
        window.fbq?.("track", "Contact");
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
