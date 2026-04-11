

# Creare pagine Servizi, Progetti e Blog con 5 articoli SEO

## Cosa
Creare 3 nuove pagine standalone + 5 articoli blog lunghi e SEO-oriented per il settore edile. Aggiornare la navigazione per collegare tutto.

## Struttura

### 1. Layout condiviso
Estrarre `Navbar`, `Footer`, `FloatingWhatsApp` e `TopBanner` in un componente `Layout` riutilizzabile (o importarli direttamente nelle nuove pagine) per mantenere header/footer coerenti su tutte le pagine.

### 2. Pagina Servizi (`/servizi`)
Pagina dedicata ai 4 servizi con sezioni approfondite per ciascuno:
- Hero con titolo e sottotitolo
- 4 blocchi servizio espansi (immagine, descrizione lunga, features, CTA)
- Sezione "Perché sceglierci" e CTA finale

### 3. Pagina Progetti (`/progetti`)
Portfolio completo con filtri per categoria:
- Hero con titolo
- Griglia progetti con card dettagliate (immagine, titolo, categoria, descrizione)
- Possibilità di aggiungere più progetti rispetto ai 3 in homepage
- CTA finale

### 4. Pagina Blog (`/blog`)
Lista di tutti gli articoli:
- Hero con titolo
- Griglia card articoli con immagine, titolo, data, categoria, excerpt
- Link a ciascun articolo singolo

### 5. 5 Articoli Blog SEO (`/blog/:slug`)
Pagina articolo singolo con layout editoriale. I 5 articoli saranno lunghi (2000+ parole ciascuno), ottimizzati SEO per il settore edile:

1. **"Come un Sito Web Professionale Può Raddoppiare i Clienti della Tua Impresa Edile"** — keyword: sito web impresa edile
2. **"SEO Locale per Imprese Edili: La Guida Completa per Dominare Google nella Tua Zona"** — keyword: SEO locale imprese edili
3. **"Google My Business per Imprese di Costruzione: Come Ottenere Più Chiamate e Preventivi"** — keyword: Google My Business costruzioni
4. **"5 Errori Fatali che le Imprese Edili Fanno Online (e Come Evitarli)"** — keyword: errori marketing imprese edili
5. **"Social Media Marketing per Imprese Edili: Guida Pratica per Facebook e Instagram"** — keyword: social media imprese edili

Ogni articolo include: meta title/description, H1/H2/H3 strutturati, paragrafi lunghi, elenchi puntati, CTA interni, sezione autore, articoli correlati.

## Modifiche alla navigazione
- **Navbar**: i link "Servizi", "Progetti", "Blog" punteranno alle nuove pagine (`/servizi`, `/progetti`, `/blog`) invece che agli anchor `#servizi`, `#progetti`, `#blog`
- **App.tsx**: aggiungere le nuove route
- **Footer**: aggiornare i link

## File da creare/modificare
- `src/components/Layout.tsx` — Layout condiviso con Navbar, Footer, WhatsApp, Banner
- `src/pages/Servizi.tsx` — Pagina servizi completa
- `src/pages/Progetti.tsx` — Pagina portfolio
- `src/pages/Blog.tsx` — Lista articoli
- `src/pages/BlogPost.tsx` — Template articolo singolo con dati dei 5 articoli
- `src/data/blogPosts.ts` — Dati dei 5 articoli (titolo, slug, contenuto lungo, meta)
- `src/App.tsx` — Nuove route
- `src/pages/Index.tsx` — Aggiornare link navbar, estrarre componenti condivisi

