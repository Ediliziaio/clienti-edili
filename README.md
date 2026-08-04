# ClientiEdili

Sito di [clientiedili.com](https://clientiedili.com) — siti web per imprese edili italiane, consegna in 48 ore e zero anticipo.

È un sito di acquisizione contatti: tutto il contenuto è pensato per farsi trovare su Google e sui motori di risposta AI, e per portare l'utente al form di richiesta contatto.

## Stack

- **Vite 5** + **React 18** + **TypeScript**
- **vite-react-ssg** — le pagine vengono prerenderizzate in HTML statico al build. Serve per SEO/GEO: crawler e modelli devono leggere il contenuto senza eseguire JavaScript.
- **Tailwind CSS** + **shadcn/ui** (componenti in `src/components/ui`)
- **Vercel** per l'hosting

## Comandi

```bash
npm install     # richiede legacy-peer-deps, già in .npmrc
npm run dev     # sviluppo (vite-react-ssg dev)
npm run build   # build di produzione con prerender statico -> dist/
npm run test    # vitest
npm run lint    # eslint
```

## Struttura

```
src/
  data/            fonti di verità dei contenuti
    blogPosts.ts     articoli del blog (+ helper per le date)
    cities.ts        città con pagina GEO dedicata
    services.ts      servizi con pagina di dettaglio
    settori.ts       pagine verticali per settore e intento di ricerca
    legal.ts         dati del titolare per privacy e cookie policy
  pages/           una pagina per rotta
  components/      Layout, SeoHead, Analytics, form di contatto
  lib/analytics.ts eventi verso GTM, GA4 e Meta Pixel
scripts/
  sitemap.ts       genera dist/sitemap.xml al build
```

## Aggiungere contenuti

**Un articolo**: aggiungi un elemento a `blogPosts` in `src/data/blogPosts.ts`. Rotta, prerender, pagina indice del blog e sitemap si aggiornano da soli. La `date` va nel formato `"15 Mar 2026"`, con l'abbreviazione italiana del mese (`Gen Feb Mar Apr Mag Giu Lug Ago Set Ott Nov Dic`).

**Una città**: aggiungi un elemento a `cities` in `src/data/cities.ts`. La rotta diventa `/siti-web-edili-<slug>`.

**Un settore o una keyword verticale**: aggiungi un elemento a `settori` in `src/data/settori.ts`. La rotta è `/<slug>` e la pagina viene renderizzata da `src/pages/Settore.tsx`. Servono a intercettare le ricerche che la home non copre — "marketing edilizia", "lead fotovoltaico", "come trovare clienti serramenti". Compare da sola nell'hub `/settori`, nel footer e nei link incrociati delle pagine città.

**Un servizio**: aggiungi un elemento a `services` in `src/data/services.ts`. Attenzione: quel file deve restare **senza import** (lo legge anche Node dentro `vite.config.ts` per generare il sitemap), quindi icona e immagine sono chiavi risolte in `src/pages/ServizioDettaglio.tsx`.

In entrambi i casi `npm run test` verifica slug unici, date valide e lunghezza dei meta tag prima che finiscano online.

## Sitemap

`dist/sitemap.xml` è **generato al build** da `scripts/sitemap.ts`, a partire dalle stesse fonti da cui nascono le rotte. Non esiste più un file da aggiornare a mano in `public/`, e un test fallisce se una rotta indicizzabile resta fuori.

`/grazie` è esclusa di proposito: è `noindex`.

## Analytics

Tre destinazioni, tutte instradate da `src/lib/analytics.ts`:

| Strumento | ID | Dove è caricato |
|---|---|---|
| Google Tag Manager | `GTM-5BH98VJL` | `index.html` |
| Google Analytics 4 | `G-3ZLE1Q7TKR` | `index.html` (gtag.js diretto, **non** dentro GTM) |
| Meta Pixel | `912028060826443` | `index.html` |

Eventi: `page_view` a ogni navigazione, `generate_lead` / `Lead` all'arrivo su `/grazie`, `contact` / `Contact` al click su telefono o WhatsApp.

**Consenso.** `index.html` imposta Google Consent Mode v2 con tutto negato *prima* di caricare GTM, gtag e il pixel — deve stare lì, un default applicato dopo arriverebbe tardi. Il banner (`src/components/CookieBanner.tsx`, stato in `src/lib/consent.ts`) chiama `gtag('consent','update')` e `fbq('consent','grant')` quando l'utente sceglie. Con il consenso negato Google invia ping senza identificatori e modella le conversioni: i rifiuti non diventano dati persi.

⚠️ **GA4 non è dentro il container GTM.** Il container non contiene un tag GA4 — è per questo che tra il 18 luglio e il 4 agosto 2026 Analytics non ha registrato nulla. Se un giorno GA4 viene configurato in GTM, va prima rimosso lo snippet `gtag.js` da `index.html`, altrimenti ogni hit viene contato due volte.

⚠️ **I `page_view` verso GA4 non vanno inviati a mano.** Ci pensa gtag.js, anche sulle navigazioni della SPA, tramite l'enhanced measurement sugli eventi cronologia del browser.

Perché `generate_lead` scatti, l'URL di ringraziamento del form EdiliziaInCloud deve puntare a `/grazie`.

## Deploy

Push su `main` → Vercel builda con `npm run build` e serve `dist/`.

`vercel.json` tiene `cleanUrls` attivo e redirige `www.clientiedili.com` sull'apex con un 308. Non aggiungere rewrite SPA catch-all: schiacciano le pagine statiche generate da vite-react-ssg.

## Claim e prove sociali

Il sito **non** espone `aggregateRating` in JSON-LD: dichiarare recensioni che sulle pagine non esistono è una violazione delle linee guida Google e può costare una manual action. `CityData.testimonial` e `CityData.projects` sono opzionali proprio per non dover inventare testimonianze o numeri per un mercato nuovo: valorizzali solo con dati reali.

Restano nel testo alcuni claim ereditati ("oltre 127 imprese servite", "98% clienti soddisfatti", "+200% richieste"): vanno verificati e, se non sostenibili, sostituiti.

## Vulnerabilità note

`npm audit` segnala 4 problemi residui che richiedono aggiornamenti major:

- **esbuild/vite** (moderate) — riguarda solo il dev server, non il sito pubblicato. Il fix è Vite 8, incompatibile con `vite-react-ssg` 0.9.
- **react-router 6** (moderate) — il fix è React Router 7, che richiede l'aggiornamento di `vite-react-ssg`.

Vanno affrontati insieme quando si aggiorna la toolchain.
