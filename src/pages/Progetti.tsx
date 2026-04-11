import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}

const allProjects = [
  { title: "Sito Web Rossi Costruzioni", category: "Sito Web Completo", desc: "Sito moderno con portfolio lavori, galleria fotografica e form contatto integrato. Aumento del 200% delle richieste di preventivo nel primo mese.", image: project1 },
  { title: "Landing Page Edil Bianchi", category: "Lead Generation", desc: "Landing page ottimizzata per generare preventivi con SEO locale integrato. 15 nuovi contatti nel primo mese online.", image: project2 },
  { title: "Portale Costruzioni Ferrari", category: "Portale Aziendale", desc: "Portale completo con galleria progetti, preventivi online e area clienti. Presenza digitale completa e professionale.", image: project3 },
  { title: "Sito Impresa Colombo", category: "Sito Web Completo", desc: "Sito web responsive con focus sulla SEO locale per Torino e provincia. Primo su Google per 'impresa edile Torino' in 4 mesi.", image: project1 },
  { title: "E-commerce Edil Service Roma", category: "E-commerce", desc: "Piattaforma e-commerce per la vendita di materiali edili con catalogo prodotti, carrello e gestione ordini.", image: project2 },
  { title: "Sito Fratelli Ricci", category: "Sito Web Completo", desc: "Sito vetrina elegante per impresa specializzata in restauri storici. Design premium con galleria interattiva dei progetti.", image: project3 },
];

const categories = ["Tutti", "Sito Web Completo", "Lead Generation", "Portale Aziendale", "E-commerce"];

export default function Progetti() {
  const [filter, setFilter] = useState("Tutti");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Progetti Realizzati | ClientiEdili";
  }, []);

  const filtered = filter === "Tutti" ? allProjects : allProjects.filter(p => p.category === filter);

  return (
    <Layout>
      {/* Hero */}
      <section className="pb-16 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="section-label mb-6">( I Nostri Progetti )</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] font-bold mb-6">
              Risultati che{" "}
              <span className="text-gradient-lime">parlano</span>{" "}
              da soli.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ogni progetto è una storia di successo. Scopri come abbiamo aiutato imprese edili italiane a crescere online.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2.5 rounded-full font-ui text-sm font-semibold transition-all duration-300 ${
                    filter === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <FadeIn key={project.title} delay={i * 0.1}>
                <div className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:-translate-y-2 transition-all duration-500">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-primary font-ui text-xs tracking-wider uppercase">{project.category}</span>
                    <h3 className="font-display text-xl font-bold mt-2 mb-3">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-display text-5xl sm:text-6xl font-bold mb-6">
              Il prossimo progetto potrebbe essere il <span className="text-gradient-lime">tuo</span>.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Contattaci per una consulenza gratuita e scopri come possiamo trasformare la presenza online della tua impresa.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link to="/#contatti" className="btn-carino">
              Parliamone Subito
              <span className="arrow-circle"><ArrowUpRight size={18} /></span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
