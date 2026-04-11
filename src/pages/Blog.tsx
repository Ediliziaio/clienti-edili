import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
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

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Blog Marketing Edile | ClientiEdili";
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="pb-16 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="section-label mb-6">( Il Nostro Blog )</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] font-bold mb-6">
              Strategie e consigli per{" "}
              <span className="text-gradient-lime">crescere</span>{" "}
              online.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Guide approfondite, consigli pratici e strategie testate per portare più clienti alla tua impresa edile.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.1}>
                <Link to={`/blog/${post.slug}`} className="group block">
                  <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={blogImages[i]}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-primary font-ui text-xs tracking-wider uppercase">{post.category}</span>
                        <span className="text-muted-foreground text-xs">•</span>
                        <span className="text-muted-foreground text-xs">{post.date}</span>
                      </div>
                      <h2 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-1">{post.excerpt}</p>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                        <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                          <Clock size={12} />
                          <span>{post.readTime} lettura</span>
                        </div>
                        <span className="text-primary font-ui text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                          Leggi <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
