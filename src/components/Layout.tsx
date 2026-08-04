import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Menu, X, MessageCircle, Gift } from "lucide-react";
import clientiEdiliLogo from "@/assets/clientiedili_dark.png";
import Footer from "@/components/Footer";

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
    { label: "Settori", href: "/settori" },
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden fixed inset-0 top-[calc(var(--nav-top,0px)+5rem)] bg-[#0a0a0a] px-6 pt-8 pb-6 flex flex-col gap-6 z-40"
        >
          {links.map((l) =>
            l.href.startsWith("/#") ? (
              <a key={l.href} href={l.href} onClick={() => handleClick(l.href)} className="text-foreground text-lg font-ui border-b border-border pb-4">{l.label}</a>
            ) : (
              <Link key={l.href} to={l.href} onClick={() => setMobileOpen(false)} className="text-foreground text-lg font-ui border-b border-border pb-4">{l.label}</Link>
            )
          )}
          <Link to="/contatti" onClick={() => setMobileOpen(false)} className="btn-carino text-center justify-center mt-4">
            Contattaci
            <span className="arrow-circle"><ArrowUpRight size={18} /></span>
          </Link>
        </motion.div>
      )}
    </nav>
  );
}

// ─── Floating WhatsApp ────────────────────────────────────────
function FloatingWhatsApp() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=393501782744&text&type=phone_number&app_absent=0"
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
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
