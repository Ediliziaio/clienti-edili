import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import LegalPage, { LegalSection } from "@/components/LegalPage";
import { LEGAL_LAST_UPDATE, TITOLARE, TRACCIAMENTI } from "@/data/legal";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SeoHead
        title="Privacy Policy | ClientiEdili"
        description="Come ClientiEdili (Domus Group S.r.l.) raccoglie e tratta i dati personali degli utenti del sito, ai sensi del Regolamento UE 2016/679."
        canonical="https://clientiedili.com/privacy-policy"
      />

      <LegalPage title="Privacy Policy" updated={LEGAL_LAST_UPDATE}>
        <p>
          Questa informativa descrive come vengono trattati i dati personali di chi visita{" "}
          <strong>{TITOLARE.sito}</strong>, ai sensi dell'art. 13 del Regolamento UE 2016/679
          (GDPR).
        </p>

        <LegalSection title="1. Titolare del trattamento">
          <p>
            Il titolare del trattamento è <strong>{TITOLARE.ragioneSociale}</strong>, che opera con
            il marchio {TITOLARE.brand}.
          </p>
          <ul>
            <li>Sede legale: {TITOLARE.sede}</li>
            <li>P.IVA: {TITOLARE.piva}</li>
            <li>
              Email: <a href={`mailto:${TITOLARE.email}`}>{TITOLARE.email}</a>
            </li>
            <li>
              PEC: <a href={`mailto:${TITOLARE.pec}`}>{TITOLARE.pec}</a>
            </li>
          </ul>
          <p>
            Per qualsiasi richiesta relativa ai tuoi dati personali puoi scrivere a uno dei due
            indirizzi indicati sopra.
          </p>
        </LegalSection>

        <LegalSection title="2. Quali dati raccogliamo">
          <p>
            <strong>Dati che ci fornisci tu.</strong> Quando compili il modulo di richiesta contatto
            o ci scrivi via email, WhatsApp o telefono, raccogliamo i dati che inserisci: nome,
            ragione sociale, numero di telefono, indirizzo email e le informazioni che decidi di
            comunicarci sulla tua impresa. Sono dati che fornisci volontariamente: senza di essi non
            possiamo ricontattarti.
          </p>
          <p>
            <strong>Dati raccolti automaticamente.</strong> Durante la navigazione vengono raccolti
            dati tecnici come indirizzo IP, tipo di browser e dispositivo, pagine visitate, durata
            della visita e sito di provenienza. Servono a far funzionare il sito e a capire in forma
            aggregata come viene usato.
          </p>
          <p>
            Il sito non è rivolto a minori di 16 anni e non raccoglie consapevolmente i loro dati.
          </p>
        </LegalSection>

        <LegalSection title="3. Perché li trattiamo e con quale base giuridica">
          <ul>
            <li>
              <strong>Rispondere alle tue richieste e formulare un preventivo</strong> — base
              giuridica: esecuzione di misure precontrattuali su tua richiesta (art. 6.1.b GDPR).
            </li>
            <li>
              <strong>Erogare i servizi</strong> in caso di rapporto contrattuale — base giuridica:
              esecuzione del contratto (art. 6.1.b GDPR).
            </li>
            <li>
              <strong>Misurare l'uso del sito e l'efficacia delle campagne pubblicitarie</strong> —
              base giuridica: il tuo consenso (art. 6.1.a GDPR), revocabile in qualsiasi momento.
            </li>
            <li>
              <strong>Adempiere agli obblighi di legge</strong>, in particolare fiscali e contabili
              — base giuridica: obbligo legale (art. 6.1.c GDPR).
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="4. Strumenti di terze parti">
          <p>
            Il sito utilizza i seguenti strumenti, che possono trattare dati di navigazione. Il
            dettaglio dei cookie impostati è nella <Link to="/cookie-policy">Cookie Policy</Link>.
          </p>
          <ul>
            {TRACCIAMENTI.map((t) => (
              <li key={t.nome}>
                <strong>{t.nome}</strong> ({t.fornitore}) — {t.finalita}{" "}
                <a href={t.privacy} target="_blank" rel="noopener noreferrer">
                  Informativa del fornitore
                </a>
              </li>
            ))}
          </ul>
          <p>
            Alcuni di questi fornitori possono trasferire dati verso gli Stati Uniti. Il
            trasferimento avviene sulla base delle clausole contrattuali standard approvate dalla
            Commissione Europea e, ove applicabile, dell'adesione al EU-US Data Privacy Framework.
          </p>
        </LegalSection>

        <LegalSection title="5. A chi comunichiamo i dati">
          <p>
            I dati possono essere trattati dai nostri collaboratori autorizzati e dai fornitori che
            ci supportano nell'erogazione del servizio, nominati responsabili del trattamento ai
            sensi dell'art. 28 GDPR: fornitore di hosting, piattaforma CRM, strumenti di
            comunicazione e consulenti fiscali. I dati non vengono in alcun caso venduti o ceduti a
            terzi per finalità commerciali proprie.
          </p>
        </LegalSection>

        <LegalSection title="6. Per quanto tempo li conserviamo">
          <ul>
            <li>
              Richieste di contatto non seguite da un rapporto contrattuale: <strong>24 mesi</strong>{" "}
              dall'ultimo contatto.
            </li>
            <li>
              Dati di clienti: per tutta la durata del rapporto e per <strong>10 anni</strong> dalla
              sua conclusione, come previsto dalla normativa fiscale.
            </li>
            <li>
              Dati statistici e di marketing: secondo le durate indicate nella{" "}
              <Link to="/cookie-policy">Cookie Policy</Link>.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="7. I tuoi diritti">
          <p>
            Ai sensi degli articoli da 15 a 22 del GDPR hai diritto di ottenere l'accesso ai tuoi
            dati, la loro rettifica o cancellazione, la limitazione del trattamento, la portabilità
            dei dati, e di opporti al trattamento. Se il trattamento si basa sul consenso, puoi
            revocarlo in qualsiasi momento senza che ciò pregiudichi la liceità del trattamento
            effettuato prima della revoca.
          </p>
          <p>
            Per esercitare questi diritti scrivi a{" "}
            <a href={`mailto:${TITOLARE.email}`}>{TITOLARE.email}</a>. Riceverai risposta entro un
            mese dalla richiesta.
          </p>
          <p>
            Se ritieni che il trattamento dei tuoi dati violi il GDPR, hai diritto di proporre
            reclamo al Garante per la protezione dei dati personali (
            <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">
              garanteprivacy.it
            </a>
            ).
          </p>
        </LegalSection>

        <LegalSection title="8. Modifiche a questa informativa">
          <p>
            Questa informativa può essere aggiornata per riflettere cambiamenti nei servizi o nella
            normativa. La data dell'ultimo aggiornamento è indicata in cima alla pagina.
          </p>
        </LegalSection>
      </LegalPage>
    </Layout>
  );
}
