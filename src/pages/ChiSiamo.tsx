import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight, Eye, Target, Lightbulb, Heart, Users, Award, Briefcase, Calendar } from "lucide-react";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";

// ─── FadeIn ──────────────────────────────────────────────────
function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}

// ─── Counter ─────────────────────────────────────────────────
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, count, target]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

// ─── Data ────────────────────────────────────────────────────
const timeline = [
  { year: "2019", title: "La Fondazione", desc: "Nasce ClientiEdili con la missione di portare il digitale nel settore edile italiano, partendo da Milano." },
  { year: "2020", title: "Primi 20 Clienti", desc: "Nonostante la pandemia, aiutiamo 20 imprese edili a mantenere il flusso di lavoro grazie alla presenza online." },
  { year: "2022", title: "100 Progetti Completati", desc: "Raggiungiamo il traguardo dei 100 siti web e campagne completate, con clienti in tutta Italia." },
  { year: "2024", title: "Espansione Nazionale", desc: "Il team cresce a 12 professionisti. Lanciamo servizi SEO avanzati e gestione social media." },
  { year: "2026", title: "Leader di Settore", desc: "Oltre 200 imprese edili si affidano a noi. Valutazione media di 4.9 su Google Reviews." },
];

const values = [
  { icon: Eye, title: "Trasparenza", desc: "Report chiari, comunicazione diretta. Sai sempre dove vanno i tuoi soldi e quali risultati stai ottenendo." },
  { icon: Target, title: "Risultati", desc: "Non vendiamo promesse vuote. Ogni strategia è misurabile e orientata a portarti clienti reali." },
  { icon: Lightbulb, title: "Innovazione", desc: "Restiamo aggiornati sulle ultime tendenze del marketing digitale per darti sempre un vantaggio competitivo." },
  { icon: Heart, title: "Dedizione", desc: "Trattiamo ogni cliente come un partner. Il tuo successo è il nostro successo, e ci mettiamo tutto l'impegno necessario." },
];

const team = [
  { initials: "MR", name: "Marco Rossi", role: "Fondatore & CEO", bio: "15 anni di esperienza nel marketing digitale. Ha lavorato con oltre 200 imprese edili in tutta Italia." },
  { initials: "LB", name: "Laura Bianchi", role: "Head of Design", bio: "Specializzata in UI/UX per il settore costruzioni. Crea siti che convertono visitatori in clienti." },
  { initials: "AG", name: "Andrea Galli", role: "SEO Specialist", bio: "Esperto di posizionamento locale. Ha portato decine di imprese in prima pagina su Google." },
  { initials: "SF", name: "Sara Ferrari", role: "Social Media Manager", bio: "Crea contenuti che raccontano il valore delle imprese edili su Facebook e Instagram." },
];

const stats = [
  { value: 200, suffix: "+", label: "Clienti Soddisfatti", icon: Users },
  { value: 350, suffix: "+", label: "Progetti Completati", icon: Award },
  { value: 7, suffix: "", label: "Anni di Esperienza", icon: Calendar },
  { value: 95, suffix: "%", label: "Tasso di Rinnovo", icon: Briefcase },
];

const chiSiamoJsonLd = [
  {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://clientiedili.com/" },
      { "@type": "ListItem", "position": 2, "name": "Chi Siamo", "item": "https://clientiedili.com/chi-siamo" },
    ],
  },
  {
    "@type": "AboutPage",
    "name": "Chi Siamo — Il Team ClientiEdili",
    "description": "ClientiEdili è un team di professionisti del marketing digitale dedicato esclusivamente alle imprese edili italiane dal 2019. Oltre 200 clienti soddisfatti.",
    "url": "https://clientiedili.com/chi-siamo",
    "mainEntity": { "@id": "https://clientiedili.com/#organization" },
  },
];

export default function ChiSiamo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SeoHead
        title="Chi Siamo — ClientiEdili | Agenzia Marketing per Imprese Edili dal 2019"
        description="ClientiEdili è il team di professionisti del marketing digitale dedicato alle imprese edili italiane. Dal 2019, oltre 200 clienti soddisfatti e 350+ progetti completati."
        canonical="https://clientiedili.com/chi-siamo"
        jsonLd={chiSiamoJsonLd}
      />
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="font-ui text-xs tracking-[0.2em] uppercase text-primary mb-4 block">( Chi Siamo )</span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] font-bold mb-6">
              Il Team che Porta<br />
              <span className="text-primary">Clienti alle Imprese Edili</span>
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Dal 2019 aiutiamo le imprese edili italiane a crescere con siti web professionali, SEO locale e strategie digitali che funzionano davvero.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── La Nostra Storia (Timeline) ──────────────────── */}
      <section className="py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="font-ui text-xs tracking-[0.2em] uppercase text-primary mb-4 block text-center">( La Nostra Storia )</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-16">
              Da una Visione a un Team di Esperti
            </h2>
          </FadeIn>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border sm:-translate-x-px" />

            {timeline.map((item, i) => (
              <FadeIn key={item.year} delay={i * 0.1}>
                <div className={`relative flex items-start gap-6 mb-12 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2 z-10 ring-4 ring-background" />

                  {/* Content */}
                  <div className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8"}`}>
                    <span className="text-primary font-display text-2xl font-bold">{item.year}</span>
                    <h3 className="font-display text-xl font-bold mt-1">{item.title}</h3>
                    <p className="text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── I Nostri Valori ───────────────────────────────── */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="font-ui text-xs tracking-[0.2em] uppercase text-primary mb-4 block text-center">( I Nostri Valori )</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-16">
              Cosa Ci Guida Ogni Giorno
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <v.icon size={24} />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Il Team ──────────────────────────────────────── */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="font-ui text-xs tracking-[0.2em] uppercase text-primary mb-4 block text-center">( Il Team )</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-16">
              Le Persone Dietro i Risultati
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="text-center group">
                  <div className="w-28 h-28 rounded-full bg-primary/10 text-primary font-display font-bold text-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    {member.initials}
                  </div>
                  <h3 className="font-display text-lg font-bold">{member.name}</h3>
                  <p className="text-primary text-sm font-ui font-semibold mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Numeri ────────────────────────────────────────── */}
      <section className="py-20 border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="font-ui text-xs tracking-[0.2em] uppercase text-primary mb-4 block text-center">( I Nostri Numeri )</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-16">
              Risultati che Parlano da Soli
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    <stat.icon size={24} />
                  </div>
                  <p className="font-display text-4xl sm:text-5xl font-bold text-primary">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-muted-foreground text-sm mt-2 font-ui">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Internal Links ─────────────────────────────── */}
      <section className="py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold mb-8 text-center">Esplora</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <Link to="/servizi" className="block bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all">
                <h3 className="font-display text-lg font-bold mb-2">I Nostri Servizi</h3>
                <p className="text-muted-foreground text-sm">Siti web in 48 ore, SEO locale, Google My Business e social media marketing per imprese edili.</p>
              </Link>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link to="/progetti" className="block bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all">
                <h3 className="font-display text-lg font-bold mb-2">Progetti Realizzati</h3>
                <p className="text-muted-foreground text-sm">Guarda i siti web che ClientiEdili ha creato per imprese edili in tutta Italia.</p>
              </Link>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Link to="/blog" className="block bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all">
                <h3 className="font-display text-lg font-bold mb-2">Blog Marketing Edile</h3>
                <p className="text-muted-foreground text-sm">Guide, strategie e consigli per far crescere la tua impresa edile online.</p>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-20 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Pronto a Far Crescere la Tua Impresa Edile?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Parliamo del tuo progetto. ClientiEdili ti mostrerà come il marketing digitale può portarti più clienti e più lavoro.
            </p>
            <Link to="/#contatti" className="btn-carino inline-flex">
              Contattaci Ora
              <span className="arrow-circle"><ArrowRight size={18} /></span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
