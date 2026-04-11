import { useEffect, useRef } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Calendar, User } from "lucide-react";
import Layout from "@/components/Layout";
import { blogPosts } from "@/data/blogPosts";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}

const blogImages = [blog1, blog2, blog3, blog1, blog2];

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="space-y-2 my-6">
          {listItems.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-foreground/80 leading-relaxed">
              <span className="text-primary mt-1.5 shrink-0">•</span>
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
            </li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  lines.forEach((line, i) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList();
      return;
    }

    if (trimmed.startsWith("- ")) {
      listItems.push(trimmed.slice(2));
      return;
    }

    flushList();

    if (trimmed.startsWith("### ")) {
      elements.push(<h3 key={i} className="font-display text-2xl font-bold mt-12 mb-4">{trimmed.slice(4)}</h3>);
    } else if (trimmed.startsWith("## ")) {
      elements.push(<h2 key={i} className="font-display text-3xl sm:text-4xl font-bold mt-16 mb-6">{trimmed.slice(3)}</h2>);
    } else {
      elements.push(
        <p key={i} className="text-foreground/80 text-lg leading-relaxed my-4" dangerouslySetInnerHTML={{
          __html: trimmed.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
        }} />
      );
    }
  });

  flushList();
  return elements;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const postIndex = blogPosts.findIndex(p => p.slug === slug);
  const post = blogPosts[postIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (post) {
      document.title = post.metaTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", post.metaDescription);
    }
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  const relatedPosts = blogPosts.filter((_, i) => i !== postIndex).slice(0, 3);

  return (
    <Layout>
      {/* Back link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-ui text-sm">
          <ArrowLeft size={16} />
          Torna al Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-ui text-xs font-semibold tracking-wider uppercase">
              {post.category}
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] font-bold mb-8">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-sm border-b border-border pb-8 mb-12">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>Team ClientiEdili</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{post.readTime} di lettura</span>
            </div>
          </div>
        </FadeIn>

        {/* Article Hero Image */}
        <FadeIn delay={0.1}>
          <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-12">
            <img src={blogImages[postIndex]} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </FadeIn>

        {/* Content */}
        <FadeIn delay={0.2}>
          <div className="prose-custom">
            {renderMarkdown(post.content)}
          </div>
        </FadeIn>

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

        {/* CTA */}
        <FadeIn>
          <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 text-center my-16">
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">
              Vuoi portare più clienti alla tua impresa edile?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Contattaci per una consulenza gratuita. Ti mostreremo come il marketing digitale può trasformare la tua attività.
            </p>
            <Link to="/#contatti" className="btn-carino inline-flex">
              Parliamone Subito
              <span className="arrow-circle"><ArrowRight size={18} /></span>
            </Link>
          </div>
        </FadeIn>
      </article>

      {/* Related Posts */}
      <section className="py-20 border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold mb-12 text-center">Articoli Correlati</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((rp, i) => {
              const rpIndex = blogPosts.indexOf(rp);
              return (
                <FadeIn key={rp.slug} delay={i * 0.1}>
                  <Link to={`/blog/${rp.slug}`} className="group block">
                    <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:-translate-y-2 transition-all duration-500">
                      <div className="aspect-[16/10] overflow-hidden">
                        <img src={blogImages[rpIndex]} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
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
