import { useEffect, useRef } from "react";
import { Navigate, Link, useLocation } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Check, Search, Target } from "lucide-react";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactFormEmbed from "@/components/ContactFormEmbed";
import ArticoliCorrelati from "@/components/ArticoliCorrelati";
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
 * Pagina verticale di settore (/<slug>), guidata da src/data/settori.ts.
 * Intercetta le ricerche che la home non copre: "marketing edilizia",
 * "lead fotovoltaico", "come trovare clienti serramenti".
 */
export default function Settore() {
  const location = useLocation();
  const slug = location.pathname.replace(/^\//, "");
  const settore = settori.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [settore]);

  if (!settore) return <Navigate to="/servizi" replace />;

  const url = `https://clientiedili.com/${settore.slug}`;
  const altri = settori.filter((s) => s.slug !== settore.slug);

  const jsonLd = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://clientiedili.com/" },
        { "@type": "ListItem", position: 2, name: "Settori", item: "https://clientiedili.com/settori" },
        { "@type": "ListItem", position: 3, name: settore.label, item: url },
      ],
    },
    {
      "@type": "Service",
      name: settore.h1,
      description: settore.intro,
      provider: { "@id": "https://clientiedili.com/#organization" },
      areaServed: { "@type": "Country", name: "Italia" },
      serviceType: settore.label,
    },
    {
      "@type": "FAQPage",
      mainEntity: settore.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <Layout>
      <SeoHead
        title={settore.metaTitle}
        description={settore.metaDescription}
        canonical={url}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="pb-20 pt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Settori", to: "/settori" },
              { label: settore.label },
            ]}
          />
          <FadeIn>
            <span className="font-ui text-xs tracking-[0.2em] uppercase text-primary mb-4 block">
              ( {settore.label} )
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.08] font-bold mb-8">
              {settore.h1}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{settore.intro}</p>
            <Link to="/contatti" className="btn-carino">
              Richiedi l'analisi gratuita
              <span className="arrow-circle"><ArrowUpRight size={18} /></span>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Il problema */}
      <section className="py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">{settore.problemTitle}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{settore.problemText}</p>
          </FadeIn>
        </div>
      </section>

      {/* Come funziona il mercato */}
      <section className="py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">
              Com'è messo oggi il mercato
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{settore.marketContext}</p>
          </FadeIn>
        </div>
      </section>

      {/* Cosa ottieni */}
      <section className="py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-10">Cosa ottieni</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-4">
            {settore.deliverables.map((d, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 bg-card border border-border rounded-xl p-5 h-full">
                  <Check size={18} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{d}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Ricerche intercettate */}
      <section className="py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Le ricerche che puntiamo a intercettare
            </h2>
            <p className="text-muted-foreground mb-10">
              Sono le query da cui arrivano i clienti di questo settore. La strategia parte da qui.
            </p>
          </FadeIn>
          <div className="flex flex-wrap gap-3">
            {settore.searchTerms.map((t, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <span className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2.5 text-sm text-muted-foreground">
                  <Search size={14} className="text-primary" />
                  {t}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-10">Domande frequenti</h2>
          </FadeIn>
          <div className="space-y-6">
            {settore.faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-display text-lg font-bold mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <ArticoliCorrelati tag={settore.slug} />

      {/* Form */}
      <section className="py-20 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                Analisi gratuita del tuo mercato
              </h2>
              <p className="text-muted-foreground text-lg">
                Ti diciamo quante ricerche ci sono per "{settore.mainKeyword}" e per i tuoi servizi
                nella tua zona, e quanto è forte la concorrenza. Senza impegno.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
              <ContactFormEmbed />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Link interni */}
      <section className="py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
              <Target size={22} className="text-primary" /> Altri settori che seguiamo
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {altri.map((s, i) => (
              <FadeIn key={s.slug} delay={i * 0.05}>
                <Link
                  to={`/${s.slug}`}
                  className="block bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all h-full"
                >
                  <h3 className="font-display text-lg font-bold mb-1">{s.label}</h3>
                  <p className="text-muted-foreground text-sm">{s.metaDescription}</p>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <h2 className="font-display text-2xl font-bold mb-6">Siti web per città</h2>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground">
              {cities.map((c) => (
                <Link
                  key={c.slug}
                  to={`/siti-web-edili-${c.slug}`}
                  className="hover:text-foreground transition-colors"
                >
                  Imprese Edili {c.name}
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
