

# ClientiEdili v2 — Premium Dark Agency Redesign

## Summary

Complete redesign of the landing page with a new visual identity inspired by premium dark agency aesthetics (Carino/Pemogan style). The orange accent is replaced with **lime green (#C8F53E)**, fonts change to **Playfair Display** (display headings) + **Syne** (UI/buttons) + **DM Sans** (body), and layouts become more asymmetric with sophisticated interactions.

## Key Changes from Current Version

| Aspect | Current (v1) | New (v2) |
|--------|-------------|----------|
| Accent color | Orange #F05A28 | Lime #C8F53E |
| Heading font | Bebas Neue | Playfair Display (display), Syne (UI) |
| Layout style | Centered/symmetric | Asymmetric two-column, editorial |
| Problem section | 3 icon cards | Narrative left column + numbered pain points right |
| Hero | Badge + checklist + mock browser | "Il sito che porta clienti alla tua impresa. In 48 ore." + social proof cluster + stat badges |
| Ticker | Company names | USP ticker ("Zero Anticipo ◆ Consegna 48 Ore ◆ ...") |
| FAQ | Accordion (radix) | Custom AnimatePresence +/- toggle |
| Reviews | Cards with avatars | Cards with "Verificato" badge, longer testimonials |
| CTA Final | Urgency text | Two-column card with guarantees grid |
| Contact | Glowing card | Two-column: info left + form right, sector dropdown |

## Technical Plan

### Step 1: Update `index.html`
- Replace Google Fonts link with Playfair Display + Syne + DM Sans

### Step 2: Rewrite `src/index.css`
- New CSS variables: `--accent: #C8F53E`, `--accent2: #E8FF6B`, `--bg: #0A0A0A`, `--surface: #1C1C1C`, etc.
- New utility classes: `.display` (Playfair), `.sans-heavy` (Syne), step numbers, stars, price styles
- Updated glow effects using lime color
- Ticker animation with hover-pause

### Step 3: Update `tailwind.config.ts`
- Add Playfair Display + Syne to font families
- Update accent/primary color mappings to lime

### Step 4: Completely rewrite `src/pages/Index.tsx`
All sections rebuilt with new content and layout:

1. **ScrollProgress** — lime accent bar
2. **Navbar** — "CE" monogram + "ClientiEdili" text, nav links (Offerta, Come Funziona, Recensioni, FAQ), "Contattaci Gratis" CTA pill
3. **Hero** — Asymmetric: left side has category label, large Playfair headline "Il sito che porta clienti alla tua impresa. In 48 ore.", subtitle, two CTA buttons; right side has avatar cluster with "+123" badge, star rating, quote, and stat counters (127+, 48h, €0)
4. **Guarantees Bar** — 3-column grid: Zero anticipo, Consegna 48 ore, Soddisfatto o rimborsato
5. **Ticker** — Scrolling USPs with ◆ separators, pauses on hover
6. **Problem** — Two-column: left editorial text "Hai già bruciato soldi in un sito che non ha mai funzionato?"; right column with 3 numbered pain points (01, 02, 03)
7. **Offer** — Two-column: left has pricing (€1.400 → €1.000), guarantees, CTA; right has included features checklist + bonus section
8. **Process** — "3 passi. 48 ore. Nessun rischio." with numbered steps (01, 02, 03) as bordered rows with hover animation
9. **Stats** — 4 animated counters (127+, 98%, 48h, 0€)
10. **Reviews** — "Cosa dicono i tuoi colleghi imprenditori" with 6 testimonial cards, star ratings, verified badges
11. **FAQ** — Two-column: left editorial text + "Hai altre domande?" CTA; right custom accordion with +/- icons and AnimatePresence
12. **CTA Final** — Bordered card, two-column: left urgency text; right has two buttons + 4 guarantee items with icons
13. **Contact** — Two-column: left info text with 3 trust signals; right form (nome, telefono, email, città, settore dropdown, note, submit) with animated success state
14. **Footer** — CE monogram, tagline, legal links, copyright

### New Data

- **6 testimonials**: Marco Ricci, Giuseppe Ferri, Antonio Bianchi, Luca Gatti, Salvatore Greco, Roberto Conti — with company, city, longer Italian text
- **5 FAQs**: Updated questions and answers from the doc
- **3 process steps**: "Ci chiami — 5 minuti", "Vedi la bozza — 24h", "Vai live — 48h"
- **8 included features** + **4 bonuses** (Google My Business, Facebook/Instagram, Analytics, PDF guide)
- **Ticker items**: "Zero Anticipo ◆ Consegna 48 Ore ◆ Garanzia Soddisfatto o Rimborsato ◆ Google My Business Gratis ◆ Social Inclusi ◆ Solo Imprese Edili"

## Files Modified
- `index.html` — font links
- `src/index.css` — complete rewrite of variables and utilities
- `tailwind.config.ts` — font families and color updates
- `src/pages/Index.tsx` — complete rewrite (~900 lines)

