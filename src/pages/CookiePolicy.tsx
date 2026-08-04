import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import LegalPage, { LegalSection } from "@/components/LegalPage";
import { LEGAL_LAST_UPDATE, TITOLARE, TRACCIAMENTI } from "@/data/legal";

export default function CookiePolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SeoHead
        title="Cookie Policy | ClientiEdili"
        description="Quali cookie e strumenti di tracciamento usa il sito ClientiEdili, a cosa servono e come gestirli o disattivarli dal tuo browser."
        canonical="https://clientiedili.com/cookie-policy"
      />

      <LegalPage title="Cookie Policy" updated={LEGAL_LAST_UPDATE}>
        <p>
          I cookie sono piccoli file di testo che i siti salvano sul tuo dispositivo. Qui trovi
          quali usa <strong>{TITOLARE.sito}</strong>, a cosa servono e come disattivarli. Il
          trattamento dei dati personali è descritto nella{" "}
          <Link to="/privacy-policy">Privacy Policy</Link>.
        </p>

        <LegalSection title="1. Categorie di cookie usate">
          <p>
            <strong>Cookie tecnici.</strong> Servono al funzionamento del sito e all'invio del
            modulo di contatto. Non richiedono consenso.
          </p>
          <p>
            <strong>Cookie statistici.</strong> Ci dicono in forma aggregata quante persone
            visitano il sito e quali pagine leggono, così da capire cosa è utile e cosa no.
          </p>
          <p>
            <strong>Cookie di marketing.</strong> Permettono di misurare i risultati delle campagne
            pubblicitarie su Facebook e Instagram e di mostrare annunci pertinenti a chi ha già
            visitato il sito.
          </p>
        </LegalSection>

        <LegalSection title="2. Strumenti installati su questo sito">
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="py-3 pr-4 font-ui font-semibold">Strumento</th>
                  <th className="py-3 pr-4 font-ui font-semibold">Categoria</th>
                  <th className="py-3 pr-4 font-ui font-semibold">Finalità</th>
                  <th className="py-3 font-ui font-semibold whitespace-nowrap">Durata</th>
                </tr>
              </thead>
              <tbody>
                {TRACCIAMENTI.map((t) => (
                  <tr key={t.nome} className="border-b border-border/60 align-top">
                    <td className="py-3 pr-4">
                      <a
                        href={t.privacy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-semibold"
                      >
                        {t.nome}
                      </a>
                      <span className="block text-muted-foreground text-xs mt-1">{t.fornitore}</span>
                    </td>
                    <td className="py-3 pr-4 text-muted-foreground whitespace-nowrap">
                      {t.categoria}
                    </td>
                    <td className="py-3 pr-4 text-muted-foreground">{t.finalita}</td>
                    <td className="py-3 text-muted-foreground whitespace-nowrap">{t.durata}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </LegalSection>

        <LegalSection title="3. Come disattivarli">
          <p>
            Puoi bloccare o cancellare i cookie dalle impostazioni del tuo browser. Bloccando i
            cookie tecnici alcune funzioni del sito, come l'invio del modulo di contatto, potrebbero
            smettere di funzionare correttamente.
          </p>
          <ul>
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>
          <p>
            Per i soli cookie statistici di Google Analytics puoi installare il{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
            >
              componente aggiuntivo per la disattivazione
            </a>
            . Per la pubblicità personalizzata di Meta puoi intervenire dalle impostazioni del tuo
            account Facebook o Instagram.
          </p>
        </LegalSection>

        <LegalSection title="4. Contatti">
          <p>
            Per domande su questa policy scrivi a{" "}
            <a href={`mailto:${TITOLARE.email}`}>{TITOLARE.email}</a> o alla PEC{" "}
            <a href={`mailto:${TITOLARE.pec}`}>{TITOLARE.pec}</a>.
          </p>
        </LegalSection>
      </LegalPage>
    </Layout>
  );
}
