import { describe, it, expect } from "vitest";
import { blogPosts, blogPostsSorted, parseItalianDate, toISODate } from "@/data/blogPosts";
import { blogContent } from "@/data/blogContent";
import { cities, citySlugs } from "@/data/cities";
import { SERVICE_SLUGS } from "@/data/services";

/**
 * Controlli sui dati da cui nascono rotte, sitemap e meta tag.
 * Sono la rete di sicurezza per quando si aggiungono articoli o città: un dato
 * sbagliato qui diventa una pagina rotta o un URL fuori dal sitemap.
 */

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

describe("articoli del blog", () => {
  it("hanno slug unici e in formato URL", () => {
    for (const post of blogPosts) {
      expect(post.slug, `slug non valido: ${post.slug}`).toMatch(SLUG);
    }
    const slugs = blogPosts.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("hanno date convertibili in ISO", () => {
    for (const post of blogPosts) {
      const iso = toISODate(post.date);
      expect(iso, `data non convertita: "${post.date}" (${post.slug})`).toMatch(ISO_DATE);
      // toISODate ripiega su gennaio se il mese non è riconosciuto: senza questo
      // controllo un mese scritto male passerebbe inosservato.
      expect(Number.isNaN(parseItalianDate(post.date))).toBe(false);
      const month = Number(iso.slice(5, 7));
      const written = post.date.split(" ")[1];
      expect(month === 1 || written !== "Gen", `mese non riconosciuto in "${post.date}"`).toBe(true);
    }
  });

  it("sono ordinati dal più recente in blogPostsSorted", () => {
    const times = blogPostsSorted.map((p) => parseItalianDate(p.date));
    expect(times).toEqual([...times].sort((a, b) => b - a));
  });

  it("hanno meta tag dentro i limiti utili per Google", () => {
    for (const post of blogPosts) {
      expect(post.metaTitle.length, `metaTitle troppo lungo: ${post.slug}`).toBeLessThanOrEqual(70);
      expect(
        post.metaDescription.length,
        `metaDescription troppo lunga: ${post.slug}`,
      ).toBeLessThanOrEqual(165);
      expect(post.metaDescription.length, `metaDescription troppo corta: ${post.slug}`).toBeGreaterThan(50);
    }
  });

  it("hanno tutti i campi editoriali compilati", () => {
    for (const post of blogPosts) {
      for (const field of ["title", "category", "readTime", "excerpt"] as const) {
        expect(post[field]?.trim(), `${field} vuoto in ${post.slug}`).toBeTruthy();
      }
    }
  });

  // Il corpo degli articoli vive in un modulo separato (vedi blogContent.ts):
  // un articolo senza corpo renderizzerebbe una pagina vuota, quindi va sorvegliato.
  it("hanno tutti un corpo in blogContent", () => {
    for (const post of blogPosts) {
      const corpo = blogContent[post.slug];
      expect(corpo?.trim(), `corpo mancante per ${post.slug}`).toBeTruthy();
      expect(corpo.split(/\s+/).length, `corpo troppo corto: ${post.slug}`).toBeGreaterThan(500);
    }
  });

  it("non ha corpi orfani senza articolo", () => {
    const slugs = new Set(blogPosts.map((p) => p.slug));
    for (const slug of Object.keys(blogContent)) {
      expect(slugs.has(slug), `blogContent ha "${slug}" ma non esiste l'articolo`).toBe(true);
    }
  });
});

describe("pagine città", () => {
  it("hanno slug unici e in formato URL", () => {
    for (const slug of citySlugs) {
      expect(slug, `slug non valido: ${slug}`).toMatch(SLUG);
    }
    expect(new Set(citySlugs).size).toBe(citySlugs.length);
  });

  it("hanno i contenuti necessari alla pagina e agli schema.org", () => {
    for (const city of cities) {
      expect(city.name.trim(), `name vuoto: ${city.slug}`).toBeTruthy();
      expect(city.region.trim(), `region vuota: ${city.slug}`).toBeTruthy();
      expect(city.intro.length, `intro troppo corta: ${city.slug}`).toBeGreaterThan(100);
      expect(city.faqs.length, `nessuna FAQ: ${city.slug}`).toBeGreaterThan(0);
      for (const faq of city.faqs) {
        expect(faq.q.trim(), `domanda vuota in ${city.slug}`).toBeTruthy();
        expect(faq.a.trim(), `risposta vuota in ${city.slug}`).toBeTruthy();
      }
      expect(city.searchTerms.length, `nessuna search term: ${city.slug}`).toBeGreaterThan(0);
    }
  });
});

describe("servizi", () => {
  it("hanno slug unici e in formato URL", () => {
    for (const slug of SERVICE_SLUGS) {
      expect(slug).toMatch(SLUG);
    }
    expect(new Set(SERVICE_SLUGS).size).toBe(SERVICE_SLUGS.length);
  });
});
