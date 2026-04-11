import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}

const contattiJsonLd = [
  {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://clientiedili.com/" },
      { "@type": "ListItem", position: 2, name: "Contatti", item: "https://clientiedili.com/contatti" },
    ],
  },
  {
    "@type": "ContactPage",
    name: "Contatta ClientiEdili",
    description: "Contatta ClientiEdili per una consulenza gratuita. Creiamo siti web professionali per imprese edili italiane con consegna in 48 ore.",
    url: "https://clientiedili.com/contatti",
    mainEntity: { "@id": "https://clientiedili.com/#organization" },
  },
];

export default function Contatti() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <Layout>
      <SeoHead
        title="Contatti ClientiEdili | Consulenza Gratuita Edili"
        description="Contatta ClientiEdili per una consulenza gratuita. Siti web per imprese edili in 48 ore, zero anticipo. Chiamaci o compila il form."
        canonical="https://clientiedili.com/contatti"
        jsonLd={contattiJsonLd}
      />

      {/* Hero */}
      <section className="pb-16 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="font-ui text-xs tracking-[0.2em] uppercase text-primary mb-4 block">( Contattaci )</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] font-bold mb-6">
              Parliamo del tuo{" "}
              <span className="text-gradient-lime">progetto</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              ClientiEdili offre una consulenza gratuita e senza impegno. Raccontaci la tua impresa edile e ti mostreremo come portare più clienti online.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12">
            {/* Info */}
            <FadeIn>
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl font-bold mb-6">Informazioni di Contatto</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    ClientiEdili è l'agenzia di marketing digitale specializzata nel settore edile. Contattaci per una consulenza gratuita: analizziamo la tua situazione e ti proponiamo la strategia migliore per acquisire nuovi clienti online.
                  </p>
                </div>

                <div className="space-y-5">
                  {[
                    { icon: Phone, label: "Telefono", value: "+39 350 178 2744", href: "tel:+393501782744" },
                    { icon: MessageCircle, label: "WhatsApp", value: "+39 350 178 2744", href: "https://api.whatsapp.com/send/?phone=393501782744&text&type=phone_number&app_absent=0" },
                    { icon: Mail, label: "Email", value: "info@clientiedili.com", href: "mailto:info@clientiedili.com" },
                    { icon: MapPin, label: "Sede", value: "Via Aurelio Saffi 29, 20123 Milano", href: undefined },
                    { icon: Clock, label: "Orari", value: "Lun-Ven 9:00-18:00", href: undefined },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-ui uppercase tracking-wider">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-foreground hover:text-primary transition-colors font-semibold">{item.value}</a>
                        ) : (
                          <p className="text-foreground font-semibold">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-card border border-border rounded-xl p-6 mt-8">
                  <h3 className="font-display text-lg font-bold mb-2">Risposta garantita in 2 ore</h3>
                  <p className="text-muted-foreground text-sm">Ogni richiesta riceve una risposta personale entro 2 ore lavorative. Niente risposte automatiche, solo persone reali.</p>
                </div>
              </div>
            </FadeIn>

            {/* Form */}
            <FadeIn delay={0.2}>
              <div className="bg-card border border-border rounded-2xl p-8 sm:p-10">
                <h2 className="font-display text-2xl font-bold mb-2">Richiedi Consulenza Gratuita</h2>
                <p className="text-muted-foreground text-sm mb-8">Compila il form e ti ricontatteremo entro 2 ore.</p>

                {sent ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <Send size={24} className="text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-2">Messaggio Inviato!</h3>
                    <p className="text-muted-foreground">Ti ricontatteremo entro 2 ore lavorative.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-ui uppercase tracking-wider text-muted-foreground mb-1.5 block">Nome e Cognome *</label>
                        <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Il tuo nome" />
                      </div>
                      <div>
                        <label className="text-xs font-ui uppercase tracking-wider text-muted-foreground mb-1.5 block">Nome Impresa</label>
                        <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="La tua impresa" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-ui uppercase tracking-wider text-muted-foreground mb-1.5 block">Email *</label>
                        <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="info@tuaimpresa.it" />
                      </div>
                      <div>
                        <label className="text-xs font-ui uppercase tracking-wider text-muted-foreground mb-1.5 block">Telefono</label>
                        <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="+39 333 1234567" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-ui uppercase tracking-wider text-muted-foreground mb-1.5 block">Come possiamo aiutarti? *</label>
                      <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" placeholder="Raccontaci la tua impresa edile e cosa stai cercando..." />
                    </div>
                    <button type="submit" className="btn-carino w-full justify-center">
                      Invia Richiesta
                      <span className="arrow-circle"><ArrowUpRight size={18} /></span>
                    </button>
                    <p className="text-xs text-muted-foreground text-center">Nessun impegno. Consulenza gratuita.</p>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold mb-8 text-center">Scopri di più su ClientiEdili</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <Link to="/servizi" className="block bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all">
                <h3 className="font-display text-lg font-bold mb-2">I Nostri Servizi</h3>
                <p className="text-muted-foreground text-sm">Siti web, SEO, Google My Business e social media per imprese edili.</p>
              </Link>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link to="/progetti" className="block bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all">
                <h3 className="font-display text-lg font-bold mb-2">Progetti Realizzati</h3>
                <p className="text-muted-foreground text-sm">Guarda i siti web che abbiamo creato per imprese edili italiane.</p>
              </Link>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Link to="/chi-siamo" className="block bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all">
                <h3 className="font-display text-lg font-bold mb-2">Chi Siamo</h3>
                <p className="text-muted-foreground text-sm">Il team ClientiEdili: specialisti in marketing per imprese edili dal 2019.</p>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
}
