import { useEffect, useRef, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Calendar, User, List, ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import { blogPosts, relatedPosts, toISODate } from "@/data/blogPosts";
import { blogContent } from "@/data/blogContent";
import HubDiRiferimento from "@/components/HubDiRiferimento";
import { coverSrc, onCoverError } from "@/lib/blogCover";
import ContactFormEmbed from "@/components/ContactFormEmbed";

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


// ─── Extract TOC from markdown ───────────────────────────────
interface TocItem { id: string; text: string; level: number }

function extractToc(content: string): TocItem[] {
  const items: TocItem[] = [];
  content.split("\n").forEach((line) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("### ")) {
      const text = trimmed.slice(4);
      items.push({ id: slugify(text), text, level: 3 });
    } else if (trimmed.startsWith("## ")) {
      const text = trimmed.slice(3);
      items.push({ id: slugify(text), text, level: 2 });
    }
  });
  return items;
}

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9àèéìòù]+/g, "-").replace(/(^-|-$)/g, "");
}

// ─── Inline markdown → HTML (immagini, link, grassetto) ──────
// Ordine: immagini prima dei link (la sintassi immagine contiene []()),
// poi i link, infine il grassetto. I link esterni si aprono in nuova scheda.
function inlineHtml(text: string) {
  return text
    .replace(
      /!\[([^\]]*)\]\(([^)]+)\)/g,
      '<img src="$2" alt="$1" loading="lazy" class="inline-block align-middle max-w-full h-auto" />'
    )
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, label: string, url: string) => {
      const external = /^https?:\/\//.test(url);
      const attrs = external ? ' target="_blank" rel="noopener"' : "";
      return `<a href="${url}"${attrs} class="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors">${label}</a>`;
    })
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>');
}

// ─── Render markdown ─────────────────────────────────────────
function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];
  let tableRows: string[][] = [];

  const flushTable = () => {
    if (tableRows.length === 0) return;
    const [head, ...body] = tableRows;
    elements.push(
      <div key={`tbl-${elements.length}`} className="my-8 overflow-x-auto">
        <table className="w-full text-left border-collapse text-[15px]">
          <thead>
            <tr className="border-b border-border">
              {head.map((c, i) => (
                <th key={i} className="py-3 pr-6 font-ui font-semibold text-foreground align-bottom">
                  <span dangerouslySetInnerHTML={{ __html: inlineHtml(c) }} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((row, r) => (
              <tr key={r} className="border-b border-border/50 align-top">
                {row.map((c, i) => (
                  <td key={i} className="py-3 pr-6 text-foreground/80 leading-relaxed">
                    <span dangerouslySetInnerHTML={{ __html: inlineHtml(c) }} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    tableRows = [];
  };

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="space-y-2 my-6">
          {listItems.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-foreground/80 leading-relaxed">
              <span className="text-primary mt-1.5 shrink-0">•</span>
              <span dangerouslySetInnerHTML={{ __html: inlineHtml(item) }} />
            </li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  lines.forEach((line, i) => {
    const trimmed = line.trim();
    if (!trimmed) { flushList(); flushTable(); return; }

    // Tabella markdown: righe che iniziano e finiscono con "|".
    // La riga di separazione (|---|---|) viene scartata.
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      flushList();
      const cells = trimmed.slice(1, -1).split("|").map((c) => c.trim());
      if (!cells.every((c) => /^:?-{2,}:?$/.test(c))) tableRows.push(cells);
      return;
    }
    flushTable();

    if (trimmed.startsWith("- ")) { listItems.push(trimmed.slice(2)); return; }
    flushList();

    // Immagine su riga dedicata (es. logo) → blocco centrato
    const imgOnly = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imgOnly) {
      elements.push(
        <div key={i} className="my-10 flex justify-center">
          <img src={imgOnly[2]} alt={imgOnly[1]} loading="lazy" className="w-full max-w-sm h-auto" />
        </div>
      );
      return;
    }

    if (trimmed.startsWith("### ")) {
      const text = trimmed.slice(4);
      elements.push(<h3 key={i} id={slugify(text)} className="font-display text-2xl font-bold mt-12 mb-4 scroll-mt-32">{text}</h3>);
    } else if (trimmed.startsWith("## ")) {
      const text = trimmed.slice(3);
      elements.push(<h2 key={i} id={slugify(text)} className="font-display text-3xl sm:text-4xl font-bold mt-16 mb-6 scroll-mt-32">{text}</h2>);
    } else {
      elements.push(
        <p key={i} className="text-foreground/80 text-lg leading-relaxed my-4" dangerouslySetInnerHTML={{ __html: inlineHtml(trimmed) }} />
      );
    }
  });
  flushList();
  flushTable();
  return elements;
}

// ─── TOC Sidebar ─────────────────────────────────────────────
function TocSidebar({ items, activeId }: { items: TocItem[]; activeId: string }) {
  return (
    <nav className="space-y-1">
      <p className="font-ui text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3 flex items-center gap-2">
        <List size={14} /> Indice
      </p>
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`block text-sm py-1 transition-colors duration-200 ${
            item.level === 3 ? "pl-4" : ""
          } ${
            activeId === item.id
              ? "text-primary font-semibold border-l-2 border-primary pl-3"
              : "text-muted-foreground hover:text-foreground border-l-2 border-transparent pl-3"
          }`}
        >
          {item.text}
        </a>
      ))}
    </nav>
  );
}

// ─── Mobile TOC ──────────────────────────────────────────────
function MobileToc({ items }: { items: TocItem[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden mb-8 bg-card border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 font-ui text-sm font-semibold"
      >
        <span className="flex items-center gap-2"><List size={16} /> Indice dei Contenuti</span>
        <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-4 pb-4 space-y-1">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`block text-sm py-1 text-muted-foreground hover:text-foreground ${item.level === 3 ? "pl-4" : ""}`}
            >
              {item.text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── useActiveHeading ────────────────────────────────────────
function useActiveHeading(ids: string[]) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (ids.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}

// ─── BlogPost ────────────────────────────────────────────────
export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const post = blogPosts[postIndex];

  const content = post ? blogContent[post.slug] ?? "" : "";
  const tocItems = extractToc(content);
  const activeId = useActiveHeading(tocItems.map((t) => t.id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  const articleJsonLd = [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://clientiedili.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://clientiedili.com/blog" },
        { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://clientiedili.com/blog/${post.slug}` },
      ],
    },
    {
      "@type": "Article",
      "headline": post.title,
      "description": post.metaDescription,
      "url": `https://clientiedili.com/blog/${post.slug}`,
      "image": "https://clientiedili.com/og-image.jpg",
      "datePublished": toISODate(post.date),
      "dateModified": toISODate(post.date),
      "author": {
        "@type": "Organization",
        "name": "ClientiEdili",
        "url": "https://clientiedili.com/",
      },
      "publisher": { "@id": "https://clientiedili.com/#organization" },
      "mainEntityOfPage": `https://clientiedili.com/blog/${post.slug}`,
      "articleSection": post.category,
      "inLanguage": "it-IT",
    },
    ...(post.faqs?.length
      ? [
          {
            "@type": "FAQPage",
            "mainEntity": post.faqs.map((f) => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a },
            })),
          },
        ]
      : []),
  ];

  const related = relatedPosts(slug ?? post.slug);

  return (
    <Layout>
      <SeoHead
        title={post.metaTitle}
        description={post.metaDescription}
        canonical={`https://clientiedili.com/blog/${post.slug}`}
        ogType="article"
        jsonLd={articleJsonLd}
      />
      {/* Back link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-ui text-sm">
          <ArrowLeft size={16} /> Torna al Blog
        </Link>
      </div>

      {/* Article Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-4xl">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-ui text-xs font-semibold tracking-wider uppercase">
              {post.category}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] font-bold mt-6 mb-8">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-sm border-b border-border pb-8 mb-8">
              <div className="flex items-center gap-2"><User size={16} /><span>Team ClientiEdili</span></div>
              <div className="flex items-center gap-2"><Calendar size={16} /><span>{post.date}</span></div>
              <div className="flex items-center gap-2"><Clock size={16} /><span>{post.readTime} di lettura</span></div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Full-width Hero Image */}
      <FadeIn delay={0.1}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="aspect-[21/9] rounded-2xl overflow-hidden relative">
            <img src={coverSrc(post.slug)} onError={(e) => onCoverError(e, post.slug)} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </div>
      </FadeIn>

      {/* Two-column layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-12">
          {/* Main Content */}
          <article className="flex-1 min-w-0 max-w-4xl">
            <MobileToc items={tocItems} />

            <FadeIn delay={0.2}>
              <div className="prose-custom">
                {renderMarkdown(content)}
              </div>
            </FadeIn>

            <HubDiRiferimento tags={post.tags} />

            {/* Domande frequenti — alimentano anche il FAQPage JSON-LD */}
            {post.faqs && post.faqs.length > 0 && (
              <FadeIn delay={0.1}>
                <section className="mt-16">
                  <h2
                    id="domande-frequenti"
                    className="font-display text-3xl sm:text-4xl font-bold mb-8 scroll-mt-32"
                  >
                    Domande frequenti
                  </h2>
                  <div className="space-y-4">
                    {post.faqs.map((faq, i) => (
                      <div key={i} className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-display text-lg font-bold mb-3">{faq.q}</h3>
                        <p className="text-foreground/80 leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </FadeIn>
            )}

            {/* Author */}
            <FadeIn>
              <div className="border-t border-b border-border py-8 my-16">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center text-lg">CE</div>
                  <div>
                    <p className="font-display font-bold text-lg">Team ClientiEdili</p>
                    <p className="text-muted-foreground text-sm">Specialisti in marketing digitale per imprese edili italiane.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* CTA + Form richiesta contatto */}
            <FadeIn>
              <div id="richiedi-informazioni" className="bg-card border border-border rounded-2xl p-6 sm:p-10 text-center my-16 scroll-mt-32">
                <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">
                  Vuoi portare più clienti alla tua impresa edile?
                </h3>
                <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                  Richiedi una consulenza gratuita: ti ricontattiamo nelle prossime ore. Ti mostreremo come il marketing digitale può trasformare la tua attività.
                </p>
                <ContactFormEmbed />
              </div>
            </FadeIn>
          </article>

          {/* Sidebar TOC (desktop) */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-32">
              <TocSidebar items={tocItems} activeId={activeId} />
            </div>
          </aside>
        </div>
      </div>

      {/* Related Posts */}
      <section className="py-20 border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold mb-12 text-center">Articoli Correlati</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((rp, i) => {
              return (
                <FadeIn key={rp.slug} delay={i * 0.1}>
                  <Link to={`/blog/${rp.slug}`} className="group block">
                    <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:-translate-y-2 transition-all duration-500">
                      <div className="aspect-[16/10] overflow-hidden">
                        <img src={coverSrc(rp.slug)} onError={(e) => onCoverError(e, rp.slug)} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                      </div>
                      <div className="p-5">
                        <span className="text-primary font-ui text-xs tracking-wider uppercase">{rp.category}</span>
                        <h3 className="font-display text-lg font-bold mt-2 group-hover:text-primary transition-colors">{rp.title}</h3>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
