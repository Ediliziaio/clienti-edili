import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useInView, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";
import {
  Phone, Mail, MapPin, Check, Star, ArrowUpRight, ArrowRight,
  Shield, Clock, Zap, Menu, X, Send, User, Briefcase,
  MessageSquare, Globe, Search, Share2, BarChart3, FileText,
  Plus, Minus, Quote, Users, Award, Headphones
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────

const companies = [
  "Rossi Costruzioni", "Edil Bianchi", "Muratori Uniti", "Costruzioni Ferrari",
  "Impresa Colombo", "Edilizia Moretti", "Fratelli Ricci", "Cantieri Lombardi",
  "Edil Service Roma", "Costruzioni Napoli", "Impresa Greco", "Edil Pro Milano"
];

const services = [
  { icon: Globe, title: "Sito Web Professionale", desc: "Design moderno e responsive, ottimizzato per convertire visitatori in clienti." },
  { icon: Search, title: "SEO Locale", desc: "Posizionamento su Google per le ricerche nella tua zona. Più visibilità, più clienti." },
  { icon: Share2, title: "Google My Business", desc: "Profilo ottimizzato per apparire nelle ricerche locali e su Google Maps." },
  { icon: BarChart3, title: "Social Media", desc: "Pagine Facebook e Instagram configurate e collegate al tuo sito web." },
];

const whyUs = [
  { icon: Shield, title: "Zero Anticipo", desc: "Paghi solo a sito completato e approvato da te." },
  { icon: Clock, title: "Consegna 48h", desc: "Il tuo sito online in soli 2 giorni lavorativi." },
  { icon: Zap, title: "Soddisfatto o Rimborsato", desc: "Non ti piace? Ti restituiamo tutto, senza domande." },
  { icon: Headphones, title: "Supporto Dedicato", desc: "30 giorni di assistenza gratuita dopo la consegna." },
];

const steps = [
  { num: "01", title: "Chiamata Conoscitiva", desc: "15 minuti per capire la tua impresa, i tuoi servizi e i tuoi obiettivi. Nessun impegno.", time: "15 min" },
  { num: "02", title: "Anteprima in 24 Ore", desc: "Ti mostriamo la prima bozza del tuo sito. Tu approvi o chiedi modifiche illimitate.", time: "24 ore" },
  { num: "03", title: "Online in 48 Ore", desc: "Sito pubblicato, ottimizzato per Google e pronto a ricevere clienti ogni giorno.", time: "48 ore" },
];

const reviews = [
  { name: "Marco Rossi", company: "Rossi Costruzioni", city: "Milano", text: "In 2 giorni avevo il sito online. Il mese dopo ho ricevuto 12 richieste di preventivo. Mai visto nulla di simile.", rating: 5, avatar: "MR" },
  { name: "Giuseppe Bianchi", company: "Edil Bianchi", city: "Roma", text: "Finalmente un'agenzia che capisce le esigenze di chi lavora in cantiere. Professionali, veloci e il risultato è eccezionale.", rating: 5, avatar: "GB" },
  { name: "Antonio Ferrari", company: "Costruzioni Ferrari", city: "Napoli", text: "Il sito ha dato una svolta alla mia attività. Ora i clienti mi trovano su Google e mi chiamano ogni settimana.", rating: 5, avatar: "AF" },
  { name: "Luca Colombo", company: "Impresa Colombo", city: "Torino", text: "Zero anticipo e risultato eccellente. Lo consiglio a tutti i colleghi del settore edile.", rating: 5, avatar: "LC" },
  { name: "Salvatore Greco", company: "Impresa Greco", city: "Palermo", text: "Pensavo fosse impossibile avere un sito professionale in 48 ore. Mi sbagliavo. Lavoro impeccabile.", rating: 5, avatar: "SG" },
  { name: "Roberto Conti", company: "Edil Pro Milano", city: "Milano", text: "Il mio vecchio sito non portava nessun cliente. Con il nuovo sito ricevo 3-4 richieste a settimana.", rating: 5, avatar: "RC" },
];

const stats = [
  { value: 127, suffix: "+", label: "Imprese Servite" },
  { value: 12, suffix: "+", label: "Anni di Esperienza" },
  { value: 98, suffix: "%", label: "Clienti Soddisfatti" },
  { value: 48, suffix: "h", label: "Tempo di Consegna" },
];

const offerFeatures = [
  "Sito web professionale su misura",
  "Ottimizzato per Google (SEO)",
  "Design responsive (mobile-first)",
  "Galleria lavori fotografica",
  "Form contatto integrato",
  "Velocità di caricamento ottimale",
  "Dominio e hosting per 1 anno",
  "Certificato SSL incluso",
];

const bonuses = [
  { title: "Setup Google My Business", value: "€200" },
  { title: "Pagine Facebook & Instagram", value: "€150" },
  { title: "Google Analytics configurato", value: "€100" },
  { title: "Guida PDF marketing edile", value: "€50" },
];

const faqs = [
  { q: "Quanto costa il sito web?", a: "Il prezzo è di €1.000 (invece di €1.400) tutto incluso. Dominio, hosting, SSL, design, copywriting e ottimizzazione SEO. Nessun costo nascosto." },
  { q: "Devo pagare un anticipo?", a: "No, zero anticipo. Paghi solo dopo aver visto e approvato il sito completato. Se non ti piace, non paghi nulla." },
  { q: "In quanto tempo sarà pronto?", a: "Il sito viene consegnato in 48 ore lavorative dalla chiamata conoscitiva. Riceverai un'anteprima entro le prime 24 ore." },
  { q: "Il sito sarà visibile su Google?", a: "Assolutamente sì. Ogni sito viene ottimizzato SEO per posizionarsi nelle ricerche locali della tua zona." },
  { q: "Cosa succede se non mi piace?", a: "Garanzia soddisfatti o rimborsati. Se il risultato non ti convince, ti restituiamo l'intero importo senza domande." },
];

const tickerLine1 = "PORTIAMO CLIENTI IN CANTIERE";
const tickerLine2 = "SITI WEB ◆ SEO ◆ GOOGLE MY BUSINESS ◆ SOCIAL MEDIA ◆ BRANDING ◆ MARKETING";

// ─── Helpers ──────────────────────────────────────────────────

function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionVal, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, value, motionVal]);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return unsub;
  }, [rounded]);

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: string }) {
  return <p className="section-label mb-6">( {children} )</p>;
}

function CarinoButton({ children, href, variant = "filled" }: { children: string; href: string; variant?: "filled" | "outline" }) {
  const cls = variant === "filled" ? "btn-carino" : "btn-carino-outline";
  return (
    <a href={href} className={cls}>
      {children}
      <span className="arrow-circle">
        <ArrowUpRight size={18} />
      </span>
    </a>
  );
}

// ─── Scroll Progress ──────────────────────────────────────────

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]" style={{ scaleX }} />;
}

// ─── Navbar ───────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Servizi", href: "#servizi" },
    { label: "Come Funziona", href: "#processo" },
    { label: "Recensioni", href: "#recensioni" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-lg border-b border-border" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center font-display text-primary text-sm font-bold">
            CE
          </div>
          <span className="font-ui font-bold text-lg tracking-wide text-foreground">ClientiEdili</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm font-ui">
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <CarinoButton href="#contatti">Contattaci</CarinoButton>
        </div>

        {/* Mobile toggle */}
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
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-foreground py-2 font-ui">{l.label}</a>
          ))}
          <a href="#contatti" onClick={() => setMobileOpen(false)} className="btn-carino text-center justify-center mt-2">
            Contattaci
            <span className="arrow-circle"><ArrowUpRight size={18} /></span>
          </a>
        </motion.div>
      )}
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center py-16 lg:py-0">
        {/* Left */}
        <div className="space-y-8">
          <FadeIn>
            <SectionLabel>Agenzia Web per Imprese Edili</SectionLabel>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
              Il sito che porta{" "}
              <span className="text-primary italic">clienti</span>{" "}
              alla tua impresa.{" "}
              <span className="text-primary">In 48 ore.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="border-l-2 border-primary pl-5">
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                Creiamo siti web professionali per imprese edili italiane. Zero anticipo, consegna in 48 ore, garanzia soddisfatti o rimborsati.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <CarinoButton href="#contatti">Parliamone Subito</CarinoButton>
              <CarinoButton href="#offerta" variant="outline">Scopri l'Offerta</CarinoButton>
            </div>
          </FadeIn>
        </div>

        {/* Right — Testimonial card + social proof */}
        <FadeIn delay={0.3} className="hidden lg:block">
          <div className="relative">
            {/* Main testimonial card */}
            <div className="bg-card border border-border rounded-2xl p-8 relative">
              <Quote size={48} className="text-primary/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-foreground/90 text-lg leading-relaxed italic mb-6">
                "In 2 giorni avevo il sito online. Il mese dopo ho ricevuto 12 richieste di preventivo."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center">
                  MR
                </div>
                <div>
                  <p className="font-ui font-semibold">Marco Rossi</p>
                  <p className="text-muted-foreground text-sm">Rossi Costruzioni, Milano</p>
                </div>
              </div>
            </div>

            {/* Avatar cluster */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 bg-card border border-border rounded-xl p-4 flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {["MR", "GB", "AF", "LC"].map((initials, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center border-2 border-card">
                    {initials}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="text-primary font-bold">+127</span>
                <span className="text-muted-foreground ml-1">imprese</span>
              </div>
            </motion.div>

            {/* Stat badge */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-6 -right-6 bg-primary text-primary-foreground px-5 py-3 rounded-xl font-ui font-bold text-sm"
            >
              48h Consegna ⚡
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Clients Ticker ───────────────────────────────────────────

function ClientsTicker() {
  return (
    <section className="py-10 border-y border-border">
      <FadeIn>
        <div className="flex items-center gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="h-px flex-1 bg-border" />
          <span className="section-label whitespace-nowrap">Alcuni dei Nostri Clienti</span>
          <div className="h-px flex-1 bg-border" />
        </div>
      </FadeIn>
      <div className="overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...companies, ...companies].map((name, i) => (
            <span key={i} className="mx-8 text-muted-foreground/30 font-ui text-xl tracking-widest uppercase">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About / Stats ────────────────────────────────────────────

function AboutSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <FadeIn>
              <SectionLabel>Chi Siamo</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-8">
                La tua visione, la nostra{" "}
                <span className="text-primary italic">esperienza.</span>{" "}
                Insieme costruiamo il tuo successo online.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                Siamo specializzati nella creazione di siti web per imprese edili italiane.
                Conosciamo il tuo settore, i tuoi clienti e le sfide che affronti ogni giorno.
                La nostra missione è semplice: portarti più clienti con un sito che funziona davvero.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6">
                  <div className="font-display text-4xl sm:text-5xl text-primary mb-2">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <p className="text-muted-foreground text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────

function ServicesSection() {
  return (
    <section id="servizi" className="py-24 sm:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionLabel>I Nostri Servizi</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-16 max-w-3xl">
            Tutto quello che ti serve per portare{" "}
            <span className="text-primary italic">clienti</span> in cantiere.
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <s.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-display text-xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-primary text-sm font-ui font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Scopri di più <ArrowRight size={14} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose Us ────────────────────────────────────────────

function WhyUsSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn><SectionLabel>Perché Noi</SectionLabel></FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] max-w-3xl mx-auto">
              Quattro motivi per scegliere{" "}
              <span className="text-primary italic">ClientiEdili</span>
            </h2>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {whyUs.map((w, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <w.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-2xl mb-2">{w.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Double Marquee ───────────────────────────────────────────

function DoubleMarquee() {
  return (
    <section className="py-12 border-y border-border overflow-hidden space-y-4">
      <div className="flex animate-ticker whitespace-nowrap">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="mx-6 font-display text-5xl sm:text-6xl lg:text-7xl text-foreground/5 uppercase tracking-wide">
            {tickerLine1} ◆
          </span>
        ))}
      </div>
      <div className="flex animate-ticker-reverse whitespace-nowrap">
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className="mx-6 font-ui text-lg sm:text-xl text-muted-foreground/20 uppercase tracking-[0.2em]">
            {tickerLine2} ◆{" "}
          </span>
        ))}
      </div>
    </section>
  );
}

// ─── Process ──────────────────────────────────────────────────

function ProcessSection() {
  return (
    <section id="processo" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionLabel>Come Funziona</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-16 max-w-3xl">
            3 passi. 48 ore.{" "}
            <span className="text-primary italic">Nessun rischio.</span>
          </h2>
        </FadeIn>

        <div className="space-y-4">
          {steps.map((s, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="group border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-all flex flex-col sm:flex-row sm:items-center gap-6">
                <span className="font-display text-5xl sm:text-6xl text-primary/20 group-hover:text-primary/40 transition-colors">
                  {s.num}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-2xl sm:text-3xl mb-2">{s.title}</h3>
                  <p className="text-muted-foreground max-w-xl">{s.desc}</p>
                </div>
                <div className="bg-primary/10 text-primary text-sm font-ui font-semibold px-4 py-2 rounded-full self-start sm:self-center">
                  {s.time}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Reviews ──────────────────────────────────────────────────

function ReviewsSection() {
  return (
    <section id="recensioni" className="py-24 sm:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionLabel>Recensioni</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-16 max-w-3xl">
            Cosa dicono i tuoi{" "}
            <span className="text-primary italic">colleghi</span> imprenditori.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/20 transition-colors h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} size={14} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed italic flex-1 mb-6">"{r.text}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 text-primary font-bold text-xs flex items-center justify-center">
                      {r.avatar}
                    </div>
                    <div>
                      <p className="font-ui font-semibold text-sm">{r.name}</p>
                      <p className="text-muted-foreground text-xs">{r.company}, {r.city}</p>
                    </div>
                  </div>
                  <span className="text-xs bg-primary/10 text-primary font-ui font-semibold px-2 py-1 rounded-full">
                    Verificato ✓
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────

function CTABanner() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl xl:text-8xl leading-[1.05] max-w-5xl mx-auto">
            Trasformiamo la tua impresa edile in un{" "}
            <span className="text-primary italic">magnete</span>{" "}
            per clienti
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-10">
            <CarinoButton href="#contatti">Inizia Ora</CarinoButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Offer / Pricing ──────────────────────────────────────────

function OfferSection() {
  return (
    <section id="offerta" className="py-24 sm:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionLabel>L'Offerta</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-16 max-w-3xl">
            Tutto incluso.{" "}
            <span className="text-primary italic">Un unico prezzo.</span>
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Pricing Card */}
          <FadeIn>
            <div className="bg-card border border-primary/30 rounded-2xl p-8 sm:p-10 glow-lime relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-6 py-2 text-sm font-ui font-bold rounded-bl-xl">
                -29%
              </div>
              <div className="mb-8">
                <p className="text-muted-foreground line-through text-xl">€1.400</p>
                <div className="flex items-end gap-2 mt-1">
                  <span className="font-display text-6xl sm:text-7xl text-primary">€1.000</span>
                  <span className="text-muted-foreground mb-2">tutto incluso</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {offerFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={18} className="text-primary flex-shrink-0" />
                    <span className="text-foreground/90">{f}</span>
                  </div>
                ))}
              </div>

              <a href="#contatti" className="btn-carino w-full justify-center">
                Richiedi il Tuo Sito
                <span className="arrow-circle"><ArrowUpRight size={18} /></span>
              </a>
            </div>
          </FadeIn>

          {/* Bonuses + Guarantees */}
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <div className="bg-card border border-primary/20 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Star size={20} className="text-primary" />
                  <h3 className="font-display text-2xl">Bonus Inclusi Gratis</h3>
                </div>
                <div className="space-y-4">
                  {bonuses.map((b, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Check size={16} className="text-primary" />
                        <span>{b.title}</span>
                      </div>
                      <span className="text-primary font-ui font-semibold text-sm">Valore {b.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {whyUs.slice(0, 3).map((g, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-5 text-center">
                    <g.icon size={24} className="text-primary mx-auto mb-3" />
                    <h4 className="font-ui font-semibold text-sm mb-1">{g.title}</h4>
                    <p className="text-muted-foreground text-xs">{g.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────

function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16">
          {/* Left */}
          <div>
            <FadeIn>
              <SectionLabel>Domande Frequenti</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl leading-[1.1] mb-6">
                Hai qualche{" "}
                <span className="text-primary italic">domanda?</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Ecco le risposte alle domande più comuni dei nostri clienti. Se non trovi quello che cerchi, contattaci!
              </p>
              <CarinoButton href="#contatti">Hai Altre Domande?</CarinoButton>
            </FadeIn>
          </div>

          {/* Right — Custom accordion */}
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="border border-border rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenIdx(openIdx === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-secondary/30 transition-colors"
                  >
                    <span className="font-ui font-semibold pr-4">{f.q}</span>
                    <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center flex-shrink-0">
                      {openIdx === i ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIdx === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-muted-foreground leading-relaxed">
                          {f.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact Form ─────────────────────────────────────────────

function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", city: "", sector: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSubmitted(true);
  };

  const sectors = [
    "Ristrutturazioni", "Costruzioni Nuove", "Impianti Elettrici", "Impianti Idraulici",
    "Coperture e Tetti", "Pavimentazioni", "Cartongesso", "Pitture e Decorazioni",
    "Infissi e Serramenti", "Piscine", "Giardinaggio", "Altro"
  ];

  if (submitted) {
    return (
      <section id="contatti" className="py-24 sm:py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-card border border-primary/30 rounded-2xl p-10 sm:p-14 text-center glow-lime">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <Check size={40} className="text-primary" />
              </div>
              <h2 className="font-display text-4xl sm:text-5xl mb-4">Richiesta Inviata!</h2>
              <p className="text-muted-foreground text-lg">
                Ti contatteremo entro 2 ore lavorative per fissare la chiamata conoscitiva gratuita.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section id="contatti" className="py-24 sm:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16">
          {/* Left info */}
          <div>
            <FadeIn>
              <SectionLabel>Contattaci</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl leading-[1.1] mb-6">
                Pronto a portare{" "}
                <span className="text-primary italic">clienti</span>{" "}
                in cantiere?
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Compila il modulo e ti contatteremo entro 2 ore lavorative. Nessun impegno, nessun costo per la consulenza iniziale.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Shield, text: "Zero anticipo — paghi solo a sito approvato" },
                  { icon: Clock, text: "Consegna garantita in 48 ore" },
                  { icon: Zap, text: "Soddisfatto o rimborsato al 100%" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <span className="text-foreground/80">{item.text}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right form */}
          <FadeIn delay={0.2}>
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block font-ui">Nome e Cognome *</label>
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-lg pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                      placeholder="Mario Rossi" />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block font-ui">Telefono *</label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-lg pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                      placeholder="+39 333 123 4567" />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block font-ui">Email</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-lg pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                      placeholder="mario@email.com" />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block font-ui">Città</label>
                  <div className="relative">
                    <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input type="text" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-lg pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                      placeholder="Milano" />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block font-ui">Settore</label>
                <div className="relative">
                  <Briefcase size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <select value={form.sector} onChange={(e) => setForm({ ...form, sector: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-lg pl-10 pr-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition appearance-none">
                    <option value="">Seleziona il tuo settore...</option>
                    {sectors.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block font-ui">Note</label>
                <div className="relative">
                  <MessageSquare size={16} className="absolute left-3 top-3.5 text-muted-foreground" />
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full bg-secondary border border-border rounded-lg pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
                    placeholder="Raccontaci del tuo progetto..." />
                </div>
              </div>

              <button type="submit" className="btn-carino w-full justify-center">
                Invia Richiesta Gratuita
                <span className="arrow-circle"><Send size={16} /></span>
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <FadeIn>
          <SectionLabel>Collaboriamo</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mt-6 mb-8">
            Pronto a far crescere la tua{" "}
            <span className="text-primary italic">impresa?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Non perdere altri clienti. Ogni giorno senza un sito professionale è un giorno in cui i tuoi concorrenti ti superano.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CarinoButton href="#contatti">Richiedi il Tuo Sito</CarinoButton>
            <CarinoButton href="tel:+39XXXXXXXXXX" variant="outline">Chiamaci</CarinoButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center font-display text-primary text-sm font-bold">
              CE
            </div>
            <span className="font-ui font-bold text-lg">ClientiEdili</span>
          </div>

          <p className="text-muted-foreground text-sm text-center">
            Siti web professionali per imprese edili italiane.
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie</a>
            <a href="#" className="hover:text-foreground transition-colors">Termini</a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} ClientiEdili. Tutti i diritti riservati. P.IVA XXXXXXXXXXX
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ────────────────────────────────────────────────

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <ClientsTicker />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <DoubleMarquee />
      <ProcessSection />
      <ReviewsSection />
      <CTABanner />
      <OfferSection />
      <FAQSection />
      <ContactForm />
      <FinalCTA />
      <Footer />
    </div>
  );
}
