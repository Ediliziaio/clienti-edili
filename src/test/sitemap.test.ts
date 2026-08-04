import { describe, it, expect } from "vitest";
import { routes } from "@/App";
import { buildSitemapEntries } from "../../scripts/sitemap";

/**
 * Il sitemap è stato per mesi un file scritto a mano in public/, e ogni rotta
 * nuova rischiava di restare fuori. Ora si genera dalle stesse fonti delle
 * rotte: questi test verificano che le due liste restino identiche.
 */

// Rotte escluse dal sitemap perché non devono finire nell'indice di Google.
const NOINDEX = new Set(["/grazie"]);

function routePaths(): string[] {
  const children = routes[0].children ?? [];
  return children
    .map((child) => {
      if ("index" in child && child.index) return "/";
      const path = (child as { path?: string }).path;
      if (!path || path === "*") return null;
      return `/${path}`;
    })
    .filter((p): p is string => p !== null);
}

/** Espande le rotte parametriche (:slug) usando i getStaticPaths del router. */
function staticPaths(): string[] {
  const children = routes[0].children ?? [];
  const expanded: string[] = [];
  for (const child of children) {
    const getStaticPaths = (child as { getStaticPaths?: () => string[] }).getStaticPaths;
    if (getStaticPaths) expanded.push(...getStaticPaths());
  }
  return expanded;
}

describe("sitemap", () => {
  const sitemapPaths = buildSitemapEntries("2026-01-01").map((e) => e.path);

  it("copre tutte le rotte indicizzabili del router", () => {
    const attese = [...routePaths().filter((p) => !p.includes(":")), ...staticPaths()]
      .filter((p) => !NOINDEX.has(p))
      .sort();
    expect([...sitemapPaths].sort()).toEqual(attese);
  });

  it("non include le pagine noindex", () => {
    for (const path of NOINDEX) {
      expect(sitemapPaths).not.toContain(path);
    }
  });

  it("non ha URL duplicati", () => {
    expect(new Set(sitemapPaths).size).toBe(sitemapPaths.length);
  });

  it("ha lastmod in formato ISO e priorità valide", () => {
    for (const entry of buildSitemapEntries("2026-01-01")) {
      expect(entry.lastmod, `lastmod non ISO su ${entry.path}`).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      const priority = Number(entry.priority);
      expect(priority).toBeGreaterThan(0);
      expect(priority).toBeLessThanOrEqual(1);
    }
  });
});
