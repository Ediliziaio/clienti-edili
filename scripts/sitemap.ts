import { execFileSync } from "node:child_process";
import { blogPosts, toISODate } from "../src/data/blogPosts";
import { citySlugs } from "../src/data/cities";
import { settoreSlugs } from "../src/data/settori";
import { SERVICE_SLUGS } from "../src/data/services";

const ORIGIN = "https://clientiedili.com";

type ChangeFreq = "weekly" | "monthly";

interface SitemapEntry {
  path: string;
  lastmod: string;
  changefreq: ChangeFreq;
  priority: string;
}

/**
 * Data dell'ultima modifica reale di un file, presa dal commit git che lo ha
 * toccato per ultimo. Se git non è disponibile (o la history è troppo corta,
 * come in alcune build CI con clone shallow) si ripiega sulla data odierna.
 */
function lastCommitDate(file: string, fallback: string): string {
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cs", "--", file], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return out || fallback;
  } catch {
    return fallback;
  }
}

/**
 * Costruisce le voci del sitemap a partire dalle stesse fonti da cui nascono le
 * rotte (blogPosts, cities, services): finché le rotte si generano da lì, il
 * sitemap non può andare fuori sincrono.
 *
 * /grazie e /404 sono volutamente escluse: sono noindex.
 */
export function buildSitemapEntries(today: string): SitemapEntry[] {
  const pages: Array<[string, string, ChangeFreq, string]> = [
    ["/", "src/pages/Index.tsx", "weekly", "1.0"],
    ["/servizi", "src/pages/Servizi.tsx", "monthly", "0.9"],
    ["/settori", "src/pages/Settori.tsx", "monthly", "0.9"],
    ["/progetti", "src/pages/Progetti.tsx", "monthly", "0.8"],
    ["/contatti", "src/pages/Contatti.tsx", "monthly", "0.8"],
    ["/chi-siamo", "src/pages/ChiSiamo.tsx", "monthly", "0.7"],
    ["/blog", "src/pages/Blog.tsx", "weekly", "0.8"],
    ["/privacy-policy", "src/pages/PrivacyPolicy.tsx", "monthly", "0.3"],
    ["/cookie-policy", "src/pages/CookiePolicy.tsx", "monthly", "0.3"],
  ];

  const entries: SitemapEntry[] = pages.map(([path, file, changefreq, priority]) => ({
    path,
    lastmod: lastCommitDate(file, today),
    changefreq,
    priority,
  }));

  const servicesLastmod = lastCommitDate("src/pages/ServizioDettaglio.tsx", today);
  for (const slug of SERVICE_SLUGS) {
    entries.push({
      path: `/servizi/${slug}`,
      lastmod: servicesLastmod,
      changefreq: "monthly",
      priority: "0.9",
    });
  }

  const citiesLastmod = lastCommitDate("src/data/cities.ts", today);
  for (const slug of citySlugs) {
    entries.push({
      path: `/siti-web-edili-${slug}`,
      lastmod: citiesLastmod,
      changefreq: "monthly",
      priority: "0.9",
    });
  }

  const settoriLastmod = lastCommitDate("src/data/settori.ts", today);
  for (const slug of settoreSlugs) {
    entries.push({
      path: `/${slug}`,
      lastmod: settoriLastmod,
      changefreq: "monthly",
      priority: "0.9",
    });
  }

  // Per gli articoli la data di pubblicazione è più veritiera di quella di git:
  // un commit che ne tocca 22 insieme (es. le copertine) non li ha "aggiornati".
  for (const post of blogPosts) {
    entries.push({
      path: `/blog/${post.slug}`,
      lastmod: toISODate(post.date),
      changefreq: "monthly",
      priority: "0.7",
    });
  }

  return entries;
}

export function renderSitemap(entries: SitemapEntry[]): string {
  const urls = entries
    .map(
      (e) => `  <url>
    <loc>${ORIGIN}${e.path}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export function generateSitemap(today = new Date().toISOString().slice(0, 10)): string {
  return renderSitemap(buildSitemapEntries(today));
}
