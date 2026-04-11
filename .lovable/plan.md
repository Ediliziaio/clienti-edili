

# Pagina Chi Siamo + Miglioramento Blog

## 1. Pagina Chi Siamo (`/chi-siamo`)

Nuova pagina dedicata con sezioni:
- **Hero**: Titolo "Chi Siamo" con sottotitolo sulla missione aziendale
- **La Nostra Storia**: Timeline con tappe fondamentali (fondazione, primi clienti, crescita, oggi)
- **I Nostri Valori**: 4 card con icone (Trasparenza, Risultati, Innovazione, Dedizione)
- **Il Team**: Griglia con 4 membri del team (foto placeholder con iniziali, nome, ruolo, breve bio)
- **Numeri**: Contatori animati (clienti serviti, progetti completati, anni di esperienza)
- **CTA finale**: Invito a contattare

## 2. Miglioramento BlogPost

Rework del layout articolo singolo:
- **Hero image full-width** fuori dal container `max-w-4xl`, con aspect-ratio più ampio (`21/9`) e overlay gradient
- **Layout a 2 colonne** (desktop): contenuto a sinistra + sidebar sticky a destra
- **Sidebar con indice** (Table of Contents): estrae automaticamente H2 e H3 dal contenuto markdown, genera link con scroll smooth. Sticky con `top-32`. Highlight della sezione attiva con `IntersectionObserver`
- Su mobile la sidebar si nasconde e l'indice diventa un blocco collassabile sopra il contenuto

## 3. Navigazione

- Aggiungere "Chi Siamo" ai link nel Navbar e Footer in `Layout.tsx`
- Aggiungere route `/chi-siamo` in `App.tsx`

## File da creare/modificare
- **Creare**: `src/pages/ChiSiamo.tsx`
- **Modificare**: `src/pages/BlogPost.tsx` (layout 2 colonne + sidebar TOC + hero grande)
- **Modificare**: `src/components/Layout.tsx` (link "Chi Siamo" in navbar e footer)
- **Modificare**: `src/App.tsx` (route `/chi-siamo`)

