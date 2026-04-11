import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Phone, Mail, MapPin, Star, ArrowUpRight, Menu, X,
  Facebook, Instagram, MessageCircle, Gift
} from "lucide-react";
import clientiEdiliLogo from "@/assets/clientiedili_dark.png";

// ─── Scroll Progress ──────────────────────────────────────────
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]" style={{ scaleX }} />;
}

// ─── Top Offer Banner ─────────────────────────────────────────
function TopBanner({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  if (!visible) return null;
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-3 h-10 relative">
        <Gift size={16} className="shrink-0 hidden sm:block" />
        <p className="text-xs sm:text-sm font-ui font-bold tracking-wide text-center">
          Offerta: Se non sei soddisfatto del nostro servizio, il sito te lo lasciamo <span className="underline underline-offset-2">GRATIS</span>
        </p>
        <button onClick={onClose} className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity" aria-label="Chiudi">
          <X size={16} />
        </button>
      </div>
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────
function Navbar({ bannerVisible }: { bannerVisible: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Servizi", href: "/servizi" },
    { label: "Progetti", href: "/progetti" },
    { label: "Chi Siamo", href: "/chi-siamo" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/#faq" },
  ];

  const handleClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#") && location.pathname === "/") {
      const el = document.querySelector(href.replace("/", ""));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed left-0 right-0 z-50 transition-all duration-300 ${bannerVisible ? "top-10" : "top-0"} ${scrolled ? "bg-background/90 backdrop-blur-lg border-b border-border" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center">
          <img src={clientiEdiliLogo} alt="ClientiEdili" className="h-10" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) =>
            l.href.startsWith("/#") ? (
              <a key={l.href} href={l.href} onClick={() => handleClick(l.href)} className="text-muted-foreground hover:text-foreground transition-colors text-sm font-ui">
                {l.label}
              </a>
            ) : (
              <Link key={l.href} to={l.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm font-ui">
                {l.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden md:block">
          <Link to="/contatti" className="btn-carino">
            Contattaci
            <span className="arrow-circle"><ArrowUpRight size={18} /></span>
          </Link>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border px-4 pb-6 pt-2 flex flex-col gap-4"
        >
          {links.map((l) =>
            l.href.startsWith("/#") ? (
              <a key={l.href} href={l.href} onClick={() => handleClick(l.href)} className="text-muted-foreground hover:text-foreground py-2 font-ui">{l.label}</a>
            ) : (
              <Link key={l.href} to={l.href} onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-foreground py-2 font-ui">{l.label}</Link>
            )
          )}
          <Link to="/#contatti" onClick={() => setMobileOpen(false)} className="btn-carino text-center justify-center mt-2">
            Contattaci
            <span className="arrow-circle"><ArrowUpRight size={18} /></span>
          </Link>
        </motion.div>
      )}
    </nav>
  );
}

// ─── Footer ───────────────────────────────────────────────────
function LayoutFooter() {
  const [email, setEmail] = useState("");
  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img src={clientiEdiliLogo} alt="ClientiEdili" className="h-10" />
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed mb-6">
              ClientiEdili è l'agenzia di marketing digitale specializzata in siti web per imprese edili italiane. Consegna in 48 ore, zero anticipo, garanzia soddisfatti o rimborsati.
            </p>
            <div className="inline-flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3 mb-6">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={14} className="text-primary fill-primary" />
                ))}
              </div>
              <span className="text-sm text-foreground font-semibold">4.9/5</span>
              <span className="text-xs text-muted-foreground">su Google Reviews</span>
            </div>
            <div>
              <p className="font-ui text-xs uppercase tracking-wider text-muted-foreground mb-3">Newsletter</p>
              <form onSubmit={(e) => { e.preventDefault(); setEmail(""); }} className="flex gap-2">
                <input
                  type="email"
                  placeholder="La tua email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
                <button type="submit" className="bg-primary text-primary-foreground rounded-lg px-4 py-2.5 font-ui text-sm font-semibold hover:bg-primary/90 transition-colors">
                  Iscriviti
                </button>
              </form>
            </div>
          </div>

          <div>
            <h4 className="font-ui font-semibold mb-4 text-sm">Link Utili</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><Link to="/servizi" className="hover:text-foreground transition-colors">Servizi</Link></li>
              <li><Link to="/progetti" className="hover:text-foreground transition-colors">Progetti</Link></li>
              <li><Link to="/chi-siamo" className="hover:text-foreground transition-colors">Chi Siamo</Link></li>
              <li><Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><a href="/#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-ui font-semibold mb-4 text-sm">Contatti</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>+39 02 1234 5678</li>
              <li>info@clientiedili.it</li>
              <li>Milano, Italia</li>
            </ul>
            <div className="flex gap-3 mt-6">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: MessageCircle, href: "https://wa.me/390212345678" },
              ].map((s, i) => (
                <a key={i} href={s.href} className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300">
                  <s.icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© 2026 ClientiEdili. Tutti i diritti riservati.</p>
          <div className="flex gap-6 text-muted-foreground text-sm">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Floating WhatsApp ────────────────────────────────────────
function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/390212345678"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contattaci su WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center animate-whatsapp-pulse transition-transform hover:scale-110"
      style={{ backgroundColor: "hsl(142 70% 49%)" }}
    >
      <MessageCircle size={26} className="text-white" />
    </a>
  );
}

// ─── Layout ───────────────────────────────────────────────────
export default function Layout({ children }: { children: React.ReactNode }) {
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <TopBanner visible={bannerVisible} onClose={() => setBannerVisible(false)} />
      <ScrollProgress />
      <Navbar bannerVisible={bannerVisible} />
      <main className="pt-32">
        {children}
      </main>
      <LayoutFooter />
      <FloatingWhatsApp />
    </div>
  );
}
