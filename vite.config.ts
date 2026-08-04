import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "node:fs";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { generateSitemap } from "./scripts/sitemap";

/**
 * Genera dist/sitemap.xml a fine build a partire dalle rotte reali
 * (src/data/blogPosts, cities, services), così non può restare indietro rispetto
 * al sito come faceva la versione scritta a mano in public/.
 * Solo sulla build client: quella SSR scrive in una cartella temporanea.
 */
function sitemapPlugin(): Plugin {
  let isSsrBuild = false;
  return {
    name: "clientiedili-sitemap",
    apply: "build",
    configResolved(config) {
      isSsrBuild = Boolean(config.build.ssr);
    },
    closeBundle() {
      if (isSsrBuild) return;
      const outDir = path.resolve(__dirname, "dist");
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, "sitemap.xml"), generateSitemap(), "utf8");
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), sitemapPlugin(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
