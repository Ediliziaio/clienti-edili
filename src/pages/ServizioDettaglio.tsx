import { useEffect, useRef } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  Globe, Search, Share2, BarChart3, Megaphone, ArrowUpRight, ArrowRight, Check, Star,
  Clock, Shield, Zap, FileText, BarChart, Users, TrendingUp, Target, Map
} from "lucide-react";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import { services, type ServiceIcon, type ServiceImage } from "@/data/services";
import ArticoliCorrelati from "@/components/ArticoliCorrelati";
import serviceConstruction from "@/assets/service-construction.jpg";
import serviceSeo from "@/assets/service-seo.jpg";
import serviceGmb from "@/assets/service-gmb.jpg";
import serviceSocial from "@/assets/service-social.jpg";

// I dati dei servizi restano puri (vedi src/data/services.ts): icona e immagine
// vengono risolte qui, dove React e il loader delle immagini esistono.
const ICONS: Record<ServiceIcon, typeof Globe> = {
  globe: Globe,
  search: Search,
  share: Share2,
  chart: BarChart3,
  megaphone: Megaphone,
};

const IMAGES: Record<ServiceImage, string> = {
  construction: serviceConstruction,
  seo: serviceSeo,
  gmb: serviceGmb,
  social: serviceSocial,
};

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}


export default function ServizioDettaglio() {
  const { servizio } = useParams<{ servizio: string }>();
  const service = services.find((s) => s.slug === servizio);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service]);

  if (!service) return <Navigate to="/servizi" replace />;

  const ServiceIconComponent = ICONS[service.icon];

  const related = services.filter((s) => service.relatedServices.includes(s.slug));

  const jsonLd = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://clientiedili.com/" },
        { "@type": "ListItem", position: 2, name: "Servizi", item: "https://clientiedili.com/servizi" },
        { "@type": "ListItem", position: 3, name: service.title, item: `https://clientiedili.com/servizi/${service.slug}` },
      ],
    },
    {
      "@type": "Service",
      name: service.h1,
      description: service.intro,
      provider: { "@id": "https://clientiedili.com/#organization" },
      areaServed: { "@type": "Country", name: "Italia" },
      serviceType: service.title,
      ...(service.price?.amount && {
        offers: {
          "@type": "Offer",
          price: service.price.amount,
          priceCurrency: "EUR",
          ...(service.price.billing && {
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: service.price.amount,
              priceCurrency: "EUR",
              billingDuration: 1,
              billingIncrement: 1,
              unitCode: service.price.billing,
            },
          }),
        },
      }),
    },
    {
      "@type": "FAQPage",
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ];

  return (
    <Layout>
      <SeoHead
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={`https://clientiedili.com/servizi/${service.slug}`}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="pb-20 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <ServiceIconComponent size={24} className="text-primary" />
                </div>
                <span className="font-ui text-xs tracking-[0.2em] uppercase text-primary">Servizio ClientiEdili</span>
              </div>
              <h1 className="font-display text-5xl sm:text-6xl leading-[1.05] font-bold mb-8">
                {service.h1.split(" ").slice(0, -2).join(" ")}{" "}
                <span className="text-gradient-lime">{service.h1.split(" ").slice(-2).join(" ")}</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">{service.intro}</p>
              {service.price && (
                <div className="inline-flex flex-col bg-card border border-primary/30 rounded-2xl px-6 py-5 mb-8">
                  <p className="font-display text-4xl font-bold">
                    {service.price.value}
                    {service.price.period && (
                      <span className="text-muted-foreground text-lg font-normal"> {service.price.period}</span>
                    )}
                  </p>
                  {service.price.note && (
                    <p className="text-muted-foreground text-sm mt-1">{service.price.note}</p>
                  )}
                </div>
              )}
              <div className="flex flex-wrap gap-4">
                <Link to="/contatti" className="btn-carino">
                  Richiedi Preventivo Gratuito
                  <span className="arrow-circle"><ArrowUpRight size={18} /></span>
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src={IMAGES[service.image]} alt={service.h1} className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {service.stats.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="text-center">
                  <p className="font-display text-4xl text-primary font-bold">{s.value}</p>
                  <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">{service.whyTitle}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{service.whyText}</p>
          </FadeIn>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12">Come funziona</h2>
          </FadeIn>
          <div className="space-y-8">
            {service.howItWorks.map((step, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 rounded-full bg-primary text-primary-foreground font-display font-bold text-lg flex items-center justify-center">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12">Cosa include</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.features.map((f, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all">
                  <Check size={18} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/80">{f}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12">Domande Frequenti</h2>
          </FadeIn>
          <div className="space-y-6">
            {service.faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-display text-lg font-bold mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold mb-8">Servizi Correlati</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-6">
            {related.map((r, i) => (
              <FadeIn key={r.slug} delay={i * 0.1}>
                <Link to={`/servizi/${r.slug}`} className="group block bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={IMAGES[r.image]} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors">{r.title}</h3>
                    <span className="text-primary font-ui text-sm flex items-center gap-1 mt-2">Scopri di più <ArrowRight size={14} /></span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/progetti" className="text-primary font-ui text-sm hover:underline">Progetti Realizzati →</Link>
            <Link to="/blog" className="text-primary font-ui text-sm hover:underline">Blog Marketing Edile →</Link>
            <Link to="/chi-siamo" className="text-primary font-ui text-sm hover:underline">Chi Siamo →</Link>
          </div>
        </div>
      </section>

      <ArticoliCorrelati tag={service.slug} />

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Pronto a far crescere la tua impresa edile?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Contatta ClientiEdili per una consulenza gratuita e senza impegno.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link to="/contatti" className="btn-carino">
              Parliamone Subito
              <span className="arrow-circle"><ArrowUpRight size={18} /></span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
