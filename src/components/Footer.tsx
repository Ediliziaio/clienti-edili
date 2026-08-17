import { Link } from "react-router-dom";
import { ShieldCheck, Wallet, MessageCircle } from "lucide-react";
import clientiEdiliLogo from "@/assets/clientiedili_dark.png";
import { cities } from "@/data/cities";
import { settori } from "@/data/settori";
import { TITOLARE } from "@/data/legal";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=393501782744&text&type=phone_number&app_absent=0";

/**
 * Footer unico del sito. Prima esisteva in due copie quasi identiche (Layout e
 * home): le correzioni ne raggiungevano una sola, ed è così che i link alle
 * pagine legali sono rimasti rotti per mesi.
 */
export default function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img src={clientiEdiliLogo} alt="ClientiEdili" className="h-10" />
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed mb-6">
              ClientiEdili è l'agenzia di marketing digitale specializzata in siti web per imprese
              edili italiane. Consegna in 48 ore, zero anticipo, garanzia soddisfatti o rimborsati.
            </p>

            {/* Segnali di fiducia verificabili: la garanzia è un impegno
                contrattuale, non una valutazione che nessuno può controllare. */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-3 text-sm">
                <ShieldCheck size={15} className="text-primary shrink-0" />
                <span className="text-foreground font-semibold">Soddisfatti o rimborsati</span>
              </span>
              <span className="inline-flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-3 text-sm">
                <Wallet size={15} className="text-primary shrink-0" />
                <span className="text-foreground font-semibold">Zero anticipo</span>
              </span>
            </div>
          </div>

          <div>
            <h2 className="font-ui font-semibold mb-4 text-sm">Link Utili</h2>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><Link to="/servizi" className="hover:text-foreground transition-colors">Servizi</Link></li>
              <li><Link to="/settori" className="hover:text-foreground transition-colors">Settori e zone</Link></li>
              <li><Link to="/progetti" className="hover:text-foreground transition-colors">Progetti</Link></li>
              <li><Link to="/chi-siamo" className="hover:text-foreground transition-colors">Chi Siamo</Link></li>
              <li><Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><a href="/#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-ui font-semibold mb-4 text-sm">Contatti</h2>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a href={`tel:${TITOLARE.telefono.replace(/\s/g, "")}`} className="hover:text-foreground transition-colors">
                  {TITOLARE.telefono}
                </a>
              </li>
              <li>
                <a href={`mailto:${TITOLARE.email}`} className="hover:text-foreground transition-colors">
                  {TITOLARE.email}
                </a>
              </li>
              <li>
                <a href={`mailto:${TITOLARE.pec}`} className="hover:text-foreground transition-colors">
                  PEC: {TITOLARE.pec}
                </a>
              </li>
              <li>Via Aurelio Saffi 29, 20123 Milano</li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Scrivici su WhatsApp"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <MessageCircle size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Settori e intenti di ricerca */}
        <div className="border-t border-border pt-8 mb-8">
          <h2 className="font-ui font-semibold mb-4 text-sm">Marketing per settore</h2>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground text-sm">
            {settori.map((s) => (
              <Link key={s.slug} to={`/${s.slug}`} className="hover:text-foreground transition-colors">
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Siti web per città — SEO locale */}
        <div className="border-t border-border pt-8 mb-8">
          <h2 className="font-ui font-semibold mb-4 text-sm">Siti web per imprese edili per città</h2>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground text-sm">
            {cities.map((city) => (
              <Link
                key={city.slug}
                to={`/siti-web-edili-${city.slug}`}
                className="hover:text-foreground transition-colors"
              >
                Imprese Edili {city.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
            <p className="text-muted-foreground text-sm">
              © 2026 ClientiEdili. Tutti i diritti riservati.
            </p>
            <div className="flex gap-6 text-muted-foreground text-sm">
              <Link to="/privacy-policy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cookie-policy" className="hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
          <div className="text-muted-foreground/60 text-xs text-center leading-relaxed">
            <p>
              {TITOLARE.ragioneSociale} — Sede Legale: Via Aurelio Saffi 29, CAP 20123 Milano —
              P.IVA: {TITOLARE.piva}
            </p>
            <p>Capitale Sociale: 20.000,00€ — SDI: USAL8PV — PEC: {TITOLARE.pec}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
