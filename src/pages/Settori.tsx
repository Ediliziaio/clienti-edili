import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, ArrowRight, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { settori } from "@/data/settori";
import { cities } from "@/data/cities";

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * Hub dei settori e delle zone.
 *
 * Serve a due cose insieme: dare all'utente un punto da cui raggiungere la
 * pagina che lo riguarda, e far arrivare link — quindi autorevolezza — alle
 * pagine verticali e locali, che altrimenti resterebbero appese solo al footer.
 */
export default function Settori() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jsonLd = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://clientiedili.com/" },
        { "@type": "ListItem", position: 2, name: "Settori", item: "https://clientiedili.com/settori" },
      ],
    },
    {
      "@type": "CollectionPage",
      name: "Settori e zone servite da ClientiEdili",
      description:
        "Le pagine dedicate a ogni mestiere della filiera edile e a ogni città in cui ClientiEdili segue imprese.",
      url: "https://clientiedili.com/settori",
      hasPart: settori.map((s) => ({
        "@type": "WebPage",
        name: s.label,
        url: `https://clientiedili.com/${s.slug}`,
      })),
    },
  ];

  return (
    <Layout>
      <SeoHead
        title="Settori e Zone | Marketing per la Filiera Edile | ClientiEdili"
        description="Marketing per ogni mestiere delle costruzioni: imprese edili, serramentisti, fotovoltaico, impiantisti, cappotto termico, coperture. E per ogni città in cui operi."
        canonical="https://clientiedili.com/settori"
        jsonLd={jsonLd}
      />

      <section className="pb-16 pt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Settori" }]} />
          <FadeIn>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.08] font-bold mb-6">
              Ogni mestiere ha le sue <span className="text-gradient-lime">ricerche</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              Chi cerca un serramentista non digita le stesse parole di chi cerca un'impresa edile,
              e chi ha un'infiltrazione al tetto non cerca come chi deve rifare il bagno. Per questo
              ogni settore ha la sua pagina: le ricerche da intercettare sono diverse, e diverso è il
              modo in cui il cliente decide di chi fidarsi.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Settori */}
      <section className="py-16 border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold mb-10">Marketing per settore</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-5">
            {settori.map((s, i) => (
              <FadeIn key={s.slug} delay={i * 0.04}>
                <Link
                  to={`/${s.slug}`}
                  className="group flex flex-col h-full bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all"
                >
                  <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {s.label}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {s.metaDescription}
                  </p>
                  <span className="text-primary font-ui text-sm flex items-center gap-1 mt-4">
                    Vai alla pagina <ArrowRight size={14} />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Città */}
      <section className="py-16 border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold mb-4 flex items-center gap-3">
              <MapPin size={26} className="text-primary" /> Dove seguiamo imprese
            </h2>
            <p className="text-muted-foreground mb-10 max-w-3xl">
              Ogni città ha un mercato edile diverso: a Firenze pesa il recupero su immobili
              vincolati, a Brescia i capannoni, a Genova i cantieri difficili del centro storico.
              Ogni pagina parte da lì.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cities.map((c, i) => (
              <FadeIn key={c.slug} delay={i * 0.03}>
                <Link
                  to={`/siti-web-edili-${c.slug}`}
                  className="group flex items-center justify-between bg-card border border-border rounded-xl px-5 py-4 hover:border-primary/40 transition-all"
                >
                  <span>
                    <span className="font-ui font-semibold group-hover:text-primary transition-colors">
                      {c.name}
                    </span>
                    <span className="block text-muted-foreground text-xs">{c.region}</span>
                  </span>
                  <ArrowRight size={15} className="text-primary shrink-0" />
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Non trovi il tuo mestiere o la tua zona?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Seguiamo tutta la filiera delle costruzioni in tutta Italia. Nell'analisi gratuita
              guardiamo le ricerche reali del tuo settore nella tua provincia e ti diciamo quanta
              domanda c'è e quanto è forte la concorrenza.
            </p>
            <Link to="/contatti" className="btn-carino">
              Richiedi l'analisi gratuita
              <span className="arrow-circle"><ArrowUpRight size={18} /></span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
