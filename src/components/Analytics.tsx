import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackContact, trackPageView } from "@/lib/analytics";

/** Existing Meta SPA events and phone/WhatsApp intent hooks.
 * Google page views are managed exclusively by GTM, never by this component.
 * The /grazie callback does not emit a Google generate_lead event.
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
