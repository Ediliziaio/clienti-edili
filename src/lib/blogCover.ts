import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const FALLBACKS = [blog1, blog2, blog3];

/**
 * Percorso della copertina dedicata di un articolo.
 * Per dare una copertina a un articolo basta mettere l'immagine in:
 *   public/blog-covers/<slug>.jpg
 * Finché il file non esiste, l'onError mostra una copertina di fallback.
 */
export function coverSrc(slug: string): string {
  return `/blog-covers/${slug}.jpg`;
}

/** Copertina di fallback deterministica (in base allo slug) finché manca quella dedicata. */
export function coverFallback(slug: string): string {
  const n = [...slug].reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return FALLBACKS[n % FALLBACKS.length];
}

/** Handler onError da usare sugli <img> di copertina: al primo errore passa al fallback. */
export function onCoverError(
  e: React.SyntheticEvent<HTMLImageElement>,
  slug: string,
): void {
  const img = e.currentTarget;
  img.onerror = null; // evita loop
  img.src = coverFallback(slug);
}
