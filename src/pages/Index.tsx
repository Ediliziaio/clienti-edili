import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import {
  Phone, Mail, MapPin, ChevronDown, Check, Star, ArrowRight,
  XCircle, AlertTriangle, Building2, Clock, Shield, Zap,
  Menu, X, Send, User, Briefcase, MessageSquare
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// ─── Data ─────────────────────────────────────────────────────

const companies = [
  "Rossi Costruzioni", "Edil Bianchi", "Muratori Uniti", "Costruzioni Ferrari",
  "Impresa Colombo", "Edilizia Moretti", "Fratelli Ricci", "Cantieri Lombardi",
  "Edil Service Roma", "Costruzioni Napoli", "Impresa Greco", "Edil Pro Milano"
];

const problems = [
  { icon: XCircle, title: "Nessuna Presenza Online", desc: "I tuoi concorrenti ti rubano clienti ogni giorno perché appaiono su Google e tu no." },
  { icon: AlertTriangle, title: "Sito Vecchio o Inesistente", desc: "Un sito datato o assente comunica scarsa professionalità. I clienti scelgono chi si presenta meglio." },
  { icon: Building2, title: "Passaparola Non Basta Più", desc: "Il mercato è cambiato. Il 78% dei clienti cerca online prima di chiamare un'impresa edile." },
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
  { title: "5 Foto Professionali Ottimizzate", value: "€150" },
  { title: "Copywriting Persuasivo", value: "€300" },
];

const guarantees = [
  { icon: Shield, title: "Zero Anticipo", desc: "Paghi solo a sito completato e approvato." },
  { icon: Clock, title: "48 Ore", desc: "Il tuo sito pronto in soli 2 giorni lavorativi." },
  { icon: Zap, title: "Soddisfatto o Rimborsato", desc: "Se non ti piace, ti restituiamo tutto." },
];

const steps = [
  { num: "01", title: "Chiamata Conoscitiva", desc: "15 minuti per capire la tua impresa, i tuoi servizi e i tuoi obiettivi.", time: "15 min" },
  { num: "02", title: "Anteprima in 24 Ore", desc: "Ti mostriamo la prima bozza del tuo sito. Tu approvi o chiedi modifiche.", time: "24 ore" },
  { num: "03", title: "Online in 48 Ore", desc: "Sito pubblicato, ottimizzato e pronto a ricevere clienti.", time: "48 ore" },
];

const reviews = [
  { name: "Marco Rossi", company: "Rossi Costruzioni", city: "Milano", text: "In 2 giorni avevo il sito online. Il mese dopo ho ricevuto 12 richieste di preventivo.", rating: 5, avatar: "MR" },
  { name: "Giuseppe Bianchi", company: "Edil Bianchi", city: "Roma", text: "Finalmente un'agenzia che capisce le esigenze di chi lavora in cantiere. Professionali e veloci.", rating: 5, avatar: "GB" },
  { name: "Antonio Ferrari", company: "Costruzioni Ferrari", city: "Napoli", text: "Il sito ha dato una svolta alla mia attività. Ora i clienti mi trovano su Google.", rating: 5, avatar: "AF" },
  { name: "Luca Colombo", company: "Impresa Colombo", city: "Torino", text: "Zero anticipo e risultato eccellente. Lo consiglio a tutti i colleghi del settore.", rating: 5, avatar: "LC" },
];

const stats = [
  { value: 127, suffix: "+", label: "Imprese Edili Servite" },
  { value: 98, suffix: "%", label: "Clienti Soddisfatti" },
  { value: 48, suffix: "h", label: "Tempo di Consegna" },
  { value: 0, suffix: "€", label: "Anticipo Richiesto", prefix: "" },
];

const faqs = [
  { q: "Quanto costa il sito web?", a: "Il prezzo è di €1.000 (invece di €1.400) tutto incluso. Dominio, hosting, SSL, design, copywriting e ottimizzazione SEO. Nessun costo nascosto." },
  { q: "Devo pagare un anticipo?", a: "No, zero anticipo. Paghi solo dopo aver visto e approvato il sito completato. Se non ti piace, non paghi nulla." },
  { q: "In quanto tempo sarà pronto?", a: "Il sito viene consegnato in 48 ore lavorative dalla chiamata conoscitiva. Riceverai un'anteprima entro le prime 24 ore." },
  { q: "Il sito sarà visibile su Google?", a: "Assolutamente sì. Ogni sito viene ottimizzato SEO per posizionarsi nelle ricerche locali della tua zona." },
  { q: "Posso modificare il sito dopo?", a: "Certo. Avrai accesso completo al pannello di gestione. Inoltre offriamo supporto per modifiche per 30 giorni." },
  { q: "Cosa succede se non mi piace?", a: "Garanzia soddisfatti o rimborsati. Se il risultato non ti convince, ti restituiamo l'intero importo senza domande." },
];

// ─── Animated Counter ─────────────────────────────────────────

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

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}

// ─── Section Wrapper ──────────────────────────────────────────

function FadeInSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Scroll Progress Bar ──────────────────────────────────────

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]"
      style={{ scaleX }}
    />
  );
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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-lg border-b border-border" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        <a href="#" className="font-heading text-2xl sm:text-3xl tracking-wider">
          CLIENTI<span className="text-primary">EDILI</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#problema" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Problema</a>
          <a href="#offerta" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Offerta</a>
          <a href="#recensioni" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Recensioni</a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors text-sm">FAQ</a>
          <a href="#contatti" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors">
            Richiedi il Tuo Sito
          </a>
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
          <a href="#problema" onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-foreground py-2">Problema</a>
          <a href="#offerta" onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-foreground py-2">Offerta</a>
          <a href="#recensioni" onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-foreground py-2">Recensioni</a>
          <a href="#faq" onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-foreground py-2">FAQ</a>
          <a href="#contatti" onClick={() => setMobileOpen(false)} className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm text-center">
            Richiedi il Tuo Sito
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
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-0">
        <div className="space-y-8">
          <FadeInSection>
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-accent text-sm font-medium">
              <Zap size={14} />
              Offerta Limitata — Solo 10 Posti al Mese
            </div>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-wide">
              IL TUO SITO CHE PORTA <span className="text-gradient-orange">CLIENTI IN CANTIERE.</span>{" "}
              <span className="text-primary">IN 48 ORE.</span>
            </h1>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-lg leading-relaxed">
              Creiamo siti web professionali per imprese edili italiane. Zero anticipo, consegna in 48 ore, garanzia soddisfatti o rimborsati.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <div className="space-y-3">
              {["Design professionale su misura", "Ottimizzato per Google (SEO)", "Zero anticipo — paghi solo a sito finito"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-primary" />
                  </div>
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contatti" className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all glow-orange text-center">
                Voglio il Mio Sito →
              </a>
              <a href="#offerta" className="border border-border text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors text-center">
                Scopri l'Offerta
              </a>
            </div>
          </FadeInSection>
        </div>

        {/* Mock Browser */}
        <FadeInSection delay={0.3} className="hidden lg:block">
          <div className="relative">
            <div className="bg-card border border-border rounded-xl overflow-hidden glow-orange-lg">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-muted rounded-md px-3 py-1 text-xs text-muted-foreground">
                    www.tuaimpresaedile.it
                  </div>
                </div>
              </div>
              {/* Mock content */}
              <div className="p-6 space-y-4">
                <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                  <Building2 size={48} className="text-primary/40" />
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded w-3/4" />
                  <div className="h-3 bg-muted/60 rounded w-full" />
                  <div className="h-3 bg-muted/60 rounded w-5/6" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-20 bg-muted/40 rounded-lg" />
                  ))}
                </div>
              </div>
            </div>
            {/* Floating labels */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-bold shadow-lg"
            >
              SEO Ottimizzato ✓
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-bold shadow-lg"
            >
              Mobile-First 📱
            </motion.div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

// ─── Marquee ──────────────────────────────────────────────────

function Marquee() {
  return (
    <section className="py-12 border-y border-border overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...companies, ...companies].map((name, i) => (
          <span key={i} className="mx-8 text-muted-foreground/40 font-heading text-2xl tracking-wider">
            {name.toUpperCase()}
          </span>
        ))}
      </div>
    </section>
  );
}

// ─── Problem Section ──────────────────────────────────────────

function ProblemSection() {
  return (
    <section id="problema" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Il Problema</span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl mt-4">
              PERCHÉ LA TUA IMPRESA EDILE<br />
              <span className="text-primary">STA PERDENDO CLIENTI</span>
            </h2>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <FadeInSection key={i} delay={i * 0.15}>
              <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-all group h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <p.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-heading text-2xl mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Offer Section ────────────────────────────────────────────

function OfferSection() {
  return (
    <section id="offerta" className="py-20 sm:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">L'Offerta</span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl mt-4">
              TUTTO QUELLO CHE TI SERVE.<br />
              <span className="text-primary">UN UNICO PREZZO.</span>
            </h2>
          </div>
        </FadeInSection>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Pricing Card */}
          <FadeInSection>
            <div className="bg-card border border-primary/30 rounded-2xl p-8 sm:p-10 glow-orange relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-6 py-2 text-sm font-bold rounded-bl-xl">
                -29%
              </div>
              <div className="mb-8">
                <p className="text-muted-foreground line-through text-xl">€1.400</p>
                <div className="flex items-end gap-2 mt-1">
                  <span className="font-heading text-6xl sm:text-7xl text-primary">€1.000</span>
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

              <a href="#contatti" className="block w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-lg text-center hover:bg-primary/90 transition-colors glow-orange">
                Richiedi il Tuo Sito Ora →
              </a>
            </div>
          </FadeInSection>

          <div className="space-y-6">
            {/* Bonus */}
            <FadeInSection delay={0.1}>
              <div className="bg-card border border-accent/30 rounded-xl p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Star size={20} className="text-accent" />
                  <h3 className="font-heading text-2xl">BONUS INCLUSI GRATIS</h3>
                </div>
                <div className="space-y-4">
                  {bonuses.map((b, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Check size={16} className="text-accent" />
                        <span>{b.title}</span>
                      </div>
                      <span className="text-accent font-semibold">Valore {b.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            {/* Guarantees */}
            <FadeInSection delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {guarantees.map((g, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-5 text-center">
                    <g.icon size={28} className="text-primary mx-auto mb-3" />
                    <h4 className="font-heading text-xl mb-1">{g.title}</h4>
                    <p className="text-muted-foreground text-sm">{g.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Process Section ──────────────────────────────────────────

function ProcessSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Come Funziona</span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl mt-4">
              3 PASSI SEMPLICI.<br />
              <span className="text-primary">IL TUO SITO È ONLINE.</span>
            </h2>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-[16.5%] right-[16.5%] h-0.5 bg-border" />

          {steps.map((s, i) => (
            <FadeInSection key={i} delay={i * 0.2}>
              <div className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground font-heading text-2xl flex items-center justify-center mx-auto mb-6 relative z-10">
                  {s.num}
                </div>
                <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {s.time}
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground max-w-xs mx-auto">{s.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Reviews Section ──────────────────────────────────────────

function ReviewsSection() {
  return (
    <section id="recensioni" className="py-20 sm:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Recensioni</span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl mt-4">
              COSA DICONO I NOSTRI<br />
              <span className="text-primary">CLIENTI EDILI</span>
            </h2>
          </div>
        </FadeInSection>

        {/* Stats */}
        <FadeInSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((s, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="font-heading text-4xl sm:text-5xl text-primary">
                  <AnimatedCounter value={s.value} suffix={s.suffix} prefix={s.prefix} />
                </div>
                <p className="text-muted-foreground text-sm mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <FadeInSection key={i} delay={i * 0.1}>
              <div className="bg-card border border-border rounded-xl p-6 sm:p-8 hover:border-primary/20 transition-colors h-full">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} size={16} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-foreground/90 mb-6 leading-relaxed italic">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 text-primary font-bold text-sm flex items-center justify-center">
                    {r.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{r.name}</p>
                    <p className="text-muted-foreground text-xs">{r.company} — {r.city}</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ Section ──────────────────────────────────────────────

function FAQSection() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">FAQ</span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl mt-4">
              DOMANDE<br />
              <span className="text-primary">FREQUENTI</span>
            </h2>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-xl px-6 overflow-hidden">
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeInSection>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <FadeInSection>
          <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/20 rounded-full px-4 py-1.5 text-destructive text-sm font-medium mb-8">
            <AlertTriangle size={14} />
            Solo 10 posti disponibili questo mese
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
            NON PERDERE ALTRI CLIENTI.<br />
            <span className="text-primary">AGISCI ORA.</span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Ogni giorno senza un sito professionale è un giorno in cui i tuoi concorrenti ti superano. Inizia oggi, zero rischi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contatti" className="bg-primary text-primary-foreground px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all glow-orange">
              Richiedi il Tuo Sito Ora →
            </a>
            <a href="tel:+39XXXXXXXXXX" className="border border-border text-foreground px-10 py-4 rounded-xl font-semibold text-lg hover:bg-secondary transition-colors flex items-center justify-center gap-2">
              <Phone size={18} />
              Chiamaci
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

// ─── Contact Form ─────────────────────────────────────────────

function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", city: "", business: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contatti" className="py-20 sm:py-28">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="bg-card border border-primary/30 rounded-2xl p-10 sm:p-14 text-center glow-orange">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <Check size={40} className="text-primary" />
              </div>
              <h2 className="font-heading text-4xl sm:text-5xl mb-4">RICHIESTA INVIATA!</h2>
              <p className="text-muted-foreground text-lg">
                Ti contatteremo entro 2 ore lavorative per fissare la chiamata conoscitiva gratuita.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>
    );
  }

  return (
    <section id="contatti" className="py-20 sm:py-28">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Contatti</span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl mt-4">
              RICHIEDI IL TUO<br />
              <span className="text-primary">SITO WEB ORA</span>
            </h2>
            <p className="text-muted-foreground mt-4">Compila il modulo e ti contatteremo entro 2 ore.</p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 sm:p-10 glow-orange-lg space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Nome e Cognome *</label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text" required value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-lg pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                    placeholder="Mario Rossi"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Telefono *</label>
                <div className="relative">
                  <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="tel" required value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-lg pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                    placeholder="+39 333 123 4567"
                  />
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="email" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-lg pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                    placeholder="mario@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Città</label>
                <div className="relative">
                  <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text" value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-lg pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                    placeholder="Milano"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Tipo di Attività</label>
              <div className="relative">
                <Briefcase size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text" value={form.business}
                  onChange={(e) => setForm({ ...form, business: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-lg pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                  placeholder="Es. Ristrutturazioni, Costruzioni, Impianti..."
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Messaggio</label>
              <div className="relative">
                <MessageSquare size={16} className="absolute left-3 top-3.5 text-muted-foreground" />
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full bg-secondary border border-border rounded-lg pl-10 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
                  placeholder="Raccontaci del tuo progetto..."
                />
              </div>
            </div>

            <button type="submit" className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all glow-orange flex items-center justify-center gap-2">
              <Send size={18} />
              Invia Richiesta Gratuita
            </button>

            <p className="text-muted-foreground text-xs text-center">
              Nessun impegno. Ti contatteremo entro 2 ore lavorative.
            </p>
          </form>
        </FadeInSection>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-heading text-2xl tracking-wider">
            CLIENTI<span className="text-primary">EDILI</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Termini di Servizio</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ClientiEdili. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ────────────────────────────────────────────────

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Marquee />
      <ProblemSection />
      <OfferSection />
      <ProcessSection />
      <ReviewsSection />
      <FAQSection />
      <FinalCTA />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
