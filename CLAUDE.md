# CLAUDE.md

Sito ClientiEdili (clientiedili.com). Il `README.md` spiega stack, comandi e struttura — qui ci sono solo le cose su cui è facile sbagliare.

## Trappole

- **Build**: usa `npm run build` (vite-react-ssg, prerender statico). `npm run build:spa` esiste ma produce una SPA senza HTML prerenderizzato: il sito perde tutta la SEO/GEO. Non usarlo per verificare una modifica.
- **`legacy-peer-deps=true`** in `.npmrc` è obbligatorio: `vite-react-ssg` non regge i peer di Vite 5. Non rimuoverlo.
- **`vercel.json`**: mai aggiungere un rewrite SPA catch-all, schiaccia le pagine statiche.
- **Sitemap**: generato al build da `scripts/sitemap.ts`. Non ricreare `public/sitemap.xml`.
- **`src/data/services.ts`, `cities.ts`, `settori.ts` devono restare senza import.** Li legge `scripts/sitemap.ts` da dentro `vite.config.ts`, dove non esistono ancora l'alias `@` né i loader delle immagini: un `import` di un `.jpg` lì fa fallire il build con `ERR_MODULE_NOT_FOUND`.
- **GA4**: caricato con gtag.js in `index.html`, non dentro il container GTM. I `page_view` verso GA4 li manda gtag.js da solo, anche sulle navigazioni SPA — inviarli a mano da `src/lib/analytics.ts` li conta due volte. Il dettaglio è nel README.

- **Consent Mode**: il blocco `gtag('consent','default', ...)` in `index.html` deve restare il primo script del `<head>`, prima di GTM e del pixel. Spostarlo più in basso rende il consenso inefficace.

## Convenzioni

- Contenuti e rotte nascono da `src/data/` (`blogPosts.ts`, `cities.ts`, `services.ts`). Aggiungere una pagina significa aggiungere un dato lì, non una rotta a mano in `App.tsx`: rotta, prerender e sitemap si derivano da soli.
- Testo del sito, commenti e messaggi di commit in italiano.
- Ogni pagina imposta i propri meta tag con `<SeoHead>`; le entità globali (Organization, WebSite) stanno in `index.html`.
- Niente testimonianze, recensioni o valutazioni inventate, e niente `aggregateRating` senza recensioni vere sulle pagine: è una violazione delle linee guida Google che mette a rischio il posizionamento.

## Prima di dire che è fatto

```bash
npm run test && npx tsc --noEmit -p tsconfig.app.json && npm run build
```
