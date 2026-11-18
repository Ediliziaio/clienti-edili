/** Shared persisted preferences for the existing cookie banner.
 * public/analytics-consent.js is the only bridge to GTM and the existing Meta
 * pixel; each category remains denied until its explicit consent.
 */

export const CONSENT_STORAGE_KEY = "ce_consent";

/** Evento su window: il banner lo emette quando la scelta cambia. */
export const CONSENT_CHANGED_EVENT = "ce:consent-changed";

export interface ConsentState {
  /** Statistiche di navigazione (Google Analytics). */
  statistics: boolean;
  /** Pubblicità e remarketing (Meta Pixel, Google Ads). */
  marketing: boolean;
  /** Timestamp ISO della scelta: serve a dimostrare quando è stata raccolta. */
  decidedAt: string;
}

export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    if (typeof parsed?.statistics !== "boolean" || typeof parsed?.marketing !== "boolean") {
      return null;
    }
    return {
      statistics: parsed.statistics,
      marketing: parsed.marketing,
      decidedAt: parsed.decidedAt ?? "",
    };
  } catch {
    // localStorage non disponibile (navigazione privata, storage pieno):
    // trattiamo come "scelta non ancora fatta", quindi restano i default negati.
    return null;
  }
}

/** Salva la scelta e la propaga a Google e Meta. */
export function writeConsent(choice: { statistics: boolean; marketing: boolean }) {
  if (typeof window === "undefined") return;

  const state: ConsentState = { ...choice, decidedAt: new Date().toISOString() };

  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Se non possiamo salvare, la scelta vale comunque per questa sessione.
  }

  // Google and the existing Meta pixel read this same saved preference through
  // public/analytics-consent.js. No direct gtag/config or duplicate consent push.
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: state }));
}
