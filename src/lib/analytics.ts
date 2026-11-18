/** Existing Meta events remain consent-gated by the shared CMP adapter.
 * Google page views are generated exclusively by GTM; no route/config calls here.
 */
import { readConsent } from './consent';

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/** One data-layer event, with fixed non-personal parameters, after opt-in. */
function emit(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined' || !readConsent()?.statistics) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

/** Existing Meta SPA page views only; Google is managed by GTM history tags. */
export function trackPageView({ isFirstLoad }: { isFirstLoad: boolean }) {
  if (typeof window === 'undefined' || isFirstLoad) return;
  window.fbq?.('track', 'PageView');
  window.fbq?.('trackCustom', 'PV_Clientiedili');
}

export function trackContact(method: 'phone' | 'whatsapp') {
  emit('contact', { method });
  if (typeof window !== 'undefined') window.fbq?.('track', 'Contact');
}
