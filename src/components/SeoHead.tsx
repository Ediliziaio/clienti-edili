import { Head } from "vite-react-ssg";

interface SeoHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** Pagine che non devono essere indicizzate (es. ringraziamento post-form). */
  noindex?: boolean;
}

const OG_IMAGE_ALT = "ClientiEdili - Siti Web per Imprese Edili Italiane";

/**
 * Head per-pagina, gestito da react-helmet-async (via vite-react-ssg).
 * A differenza della versione precedente basata su useEffect, questi tag
 * vengono renderizzati nell'HTML statico durante il prerender (SSG),
 * così SEO, social crawler e crawler AI (che non eseguono JS) leggono
 * title/description/canonical/OG e JSON-LD unici per ogni rotta.
 */
export default function SeoHead({
  title,
  description,
  canonical,
  ogImage = "https://clientiedili.com/og-image.jpg",
  ogType = "website",
  jsonLd,
  noindex = false,
}: SeoHeadProps) {
  const jsonLdString = jsonLd
    ? JSON.stringify(
        Array.isArray(jsonLd)
          ? { "@context": "https://schema.org", "@graph": jsonLd }
          : { "@context": "https://schema.org", ...jsonLd },
      )
    : null;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="it" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="ClientiEdili" />
      <meta property="og:locale" content="it_IT" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={OG_IMAGE_ALT} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLdString && (
        <script type="application/ld+json">{jsonLdString}</script>
      )}
    </Head>
  );
}
