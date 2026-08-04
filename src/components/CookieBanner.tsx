import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";
import { readConsent, writeConsent } from "@/lib/consent";

/**
 * Banner cookie conforme alle linee guida del Garante: nessuna preselezione,
 * rifiuto facile quanto l'accettazione, scelta granulare tra statistiche e
 * marketing. Finché l'utente non decide, Consent Mode tiene tutto negato (il
 * default è in index.html).
 *
 * Non blocca la pagina: chi vuole leggere può leggere, ma la scelta resta
 * richiesta e il banner non sparisce da solo.
 */
export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [statistics, setStatistics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  useEffect(() => {
    // Il primo render lato client decide: durante il prerender il banner non
    // esiste, così l'HTML statico che legge Google resta pulito.
    if (!readConsent()) setVisible(true);
  }, []);

  if (!visible) return null;

  const decide = (choice: { statistics: boolean; marketing: boolean }) => {
    writeConsent(choice);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Preferenze sui cookie"
      className="fixed inset-x-0 bottom-0 z-[70] p-3 sm:p-4"
    >
      <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl shadow-2xl p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 hidden sm:flex items-center justify-center shrink-0">
            <Cookie size={20} className="text-primary" />
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-foreground font-ui font-semibold mb-1">Cookie</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Usiamo cookie tecnici per far funzionare il sito e, solo con il tuo consenso, cookie
              di statistica e di marketing per capire come viene usato e misurare le campagne.
              Dettagli nella <Link to="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link>.
            </p>

            {showDetails && (
              <div className="mt-4 space-y-3 border-t border-border pt-4">
                <label className="flex items-start gap-3 cursor-not-allowed opacity-70">
                  <input type="checkbox" checked disabled className="mt-1 accent-[hsl(var(--primary))]" />
                  <span className="text-sm">
                    <span className="text-foreground font-semibold">Tecnici</span>
                    <span className="block text-muted-foreground">
                      Necessari al funzionamento del sito e all'invio del modulo. Sempre attivi.
                    </span>
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={statistics}
                    onChange={(e) => setStatistics(e.target.checked)}
                    className="mt-1 accent-[hsl(var(--primary))]"
                  />
                  <span className="text-sm">
                    <span className="text-foreground font-semibold">Statistiche</span>
                    <span className="block text-muted-foreground">
                      Google Analytics: quante persone visitano il sito e quali pagine leggono, in
                      forma aggregata.
                    </span>
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                    className="mt-1 accent-[hsl(var(--primary))]"
                  />
                  <span className="text-sm">
                    <span className="text-foreground font-semibold">Marketing</span>
                    <span className="block text-muted-foreground">
                      Meta Pixel: misura i risultati delle campagne su Facebook e Instagram.
                    </span>
                  </span>
                </label>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-3 mt-5">
              <button
                onClick={() => decide({ statistics: true, marketing: true })}
                className="bg-primary text-primary-foreground rounded-full px-6 py-2.5 font-ui text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Accetta tutti
              </button>
              <button
                onClick={() => decide({ statistics: false, marketing: false })}
                className="border border-border rounded-full px-6 py-2.5 font-ui text-sm font-semibold hover:border-primary/40 transition-colors"
              >
                Rifiuta
              </button>
              {showDetails ? (
                <button
                  onClick={() => decide({ statistics, marketing })}
                  className="border border-border rounded-full px-6 py-2.5 font-ui text-sm font-semibold hover:border-primary/40 transition-colors"
                >
                  Salva le mie scelte
                </button>
              ) : (
                <button
                  onClick={() => setShowDetails(true)}
                  className="text-muted-foreground hover:text-foreground transition-colors font-ui text-sm underline underline-offset-4"
                >
                  Personalizza
                </button>
              )}
            </div>
          </div>

          <button
            onClick={() => decide({ statistics: false, marketing: false })}
            aria-label="Chiudi e rifiuta i cookie non necessari"
            className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
