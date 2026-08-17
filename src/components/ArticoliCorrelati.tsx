import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import { postsByTag } from "@/data/blogPosts";
import { coverSrc, onCoverError } from "@/lib/blogCover";

/**
 * Articoli del blog che approfondiscono una pagina hub (settore o servizio).
 *
 * È la metà "hub → articolo" del topic cluster: senza questi link gli articoli
 * ricevevano uno o due collegamenti interni in tutto il sito, contro i 26 delle
 * pagine città, e Google li scansionava senza indicizzarli.
 *
 * Non rende nulla se per quel tag non ci sono articoli, così la sezione non
 * compare vuota sulle hub ancora senza contenuti di approfondimento.
 */
export default function ArticoliCorrelati({
  tag,
  titolo = "Approfondimenti",
  quanti = 6,
}: {
  tag: string;
  titolo?: string;
  quanti?: number;
}) {
  const posts = postsByTag(tag, quanti);
  if (posts.length === 0) return null;

  return (
    <section className="py-20 border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold mb-3 flex items-center gap-3">
          <BookOpen size={24} className="text-primary" /> {titolo}
        </h2>
        <p className="text-muted-foreground mb-10">
          Le guide del nostro blog che entrano nel dettaglio di questo argomento.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group block">
              <div className="bg-card border border-border rounded-2xl overflow-hidden h-full hover:border-primary/40 transition-all">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={coverSrc(post.slug)}
                    onError={(e) => onCoverError(e, post.slug)}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <span className="text-primary font-ui text-xs tracking-wider uppercase">
                    {post.category}
                  </span>
                  <h3 className="font-display text-lg font-bold mt-2 leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="text-primary font-ui text-sm flex items-center gap-1 mt-3">
                    Leggi <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
