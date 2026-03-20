

# ClientiEdili v2 — Carino-Style UX Redesign

## Reference: Carino Site UX Patterns to Replicate

The Carino template uses these distinctive UX/layout patterns:
- **Hero**: Large serif headline with accent color on key words, subtitle with left border, testimonial card floating right with quote icon, avatar cluster + "12K+" stat, CTA button with arrow icon
- **Clients bar**: "Some of Our Clients" centered label with horizontal rules, logo row
- **About section**: `( About Us )` parenthesized label, large serif heading, body text, 4 animated stat counters in a row (5k, 12+, 8k, 150+)
- **Services**: `( Our Services )` label, subtitle, service cards with images that expand/reveal on hover
- **Projects**: Large project cards with title + description overlay
- **Why Choose Us**: 4 feature cards in a 2x2 grid with icons
- **Double marquee ticker**: One with "WE BUILD BRAND THAT STAND OUT" repeated, another with service keywords (BRANDING, UI/UX, WEB DESIGN...)
- **Team**: Member cards with photos, name, role
- **Testimonials**: Quote cards with photo, name, title, company
- **CTA banner**: "Transforming Clicks Into Conversions with Strategic Design & Marketing Mastery" — large text with inline images
- **Pricing**: 3-tier pricing cards (Basic/Plus/Premium)
- **Blog/Insights**: Card grid with images, dates, titles
- **Final CTA**: "Let's Collaborate!" with button
- **Red accent color** throughout (#E63946-ish)

## Adaptation Strategy

Keep all ClientiEdili Italian content (pricing, guarantees, FAQ, reviews, contact form) but restructure the layout and UX to match Carino's patterns:

1. **Navbar** — Logo left, nav links center, "Contattaci" pill button right with arrow icon (Carino style)
2. **Hero** — Large Playfair headline "Il sito che porta clienti alla tua impresa. In 48 ore." with lime accent on key words. Subtitle with left border accent. Floating testimonial card (right) with quote icon, avatar cluster + "127+" badge. CTA button "Parliamone Subito" with arrow circle
3. **Clients ticker** — "Alcuni dei nostri clienti" centered with horizontal rules, company names scrolling
4. **About/Problem** — `( Chi Siamo )` parenthesized label, large heading "La tua visione, la nostra esperienza. Insieme costruiamo il tuo successo online.", body text, 4 stat counters row (127+ Imprese, 12+ Anni, 98% Soddisfatti, 48h Consegna)
5. **Services/Offer** — `( I Nostri Servizi )` label, heading "Tutto quello che ti serve per portare clienti in cantiere", service cards (Sito Web, SEO, Google My Business, Social Media) with hover reveal
6. **Why Choose Us** — `( Perché Noi )` label, 4 cards: Zero Anticipo, Consegna 48h, Soddisfatto o Rimborsato, Supporto Dedicato
7. **Double marquee** — "PORTIAMO CLIENTI IN CANTIERE" repeated + "SITI WEB ◆ SEO ◆ GOOGLE MY BUSINESS ◆ SOCIAL"
8. **Process** — `( Come Funziona )` label, 3 numbered steps as large cards
9. **Testimonials** — `( Recensioni )` label, quote cards with star ratings and "Verificato" badge
10. **CTA Banner** — "Trasformiamo la tua impresa edile in un magnete per clienti" — large editorial text
11. **Pricing** — `( L'Offerta )` label, single featured pricing card (€1.400 → €1.000) with features + bonuses
12. **FAQ** — `( Domande Frequenti )` label, custom accordion
13. **Contact** — `( Contattaci )` label, two-column: info left, form right
14. **Final CTA** — "Collaboriamo!" with CTA button
15. **Footer** — Brand, links, copyright

## Technical Plan

### Files to modify:
- `src/pages/Index.tsx` — Complete rewrite (~950 lines) with Carino-style section structure
- `src/index.css` — Add parenthesized label styles, Carino-style CTA buttons with arrow circles, inline image CTA banner styles

### Key UX details to replicate:
- Parenthesized section labels: `( Section Name )` in small caps
- CTA buttons: pill shape with circular arrow icon on the right
- Testimonial card in hero: floating card with large quote icon (") at top-right
- Avatar cluster: overlapping circular avatars with stat badge
- Stat counters: animated numbers in a horizontal row
- Service cards: image cards with overlay text
- Double ticker: two rows scrolling in opposite directions
- All scroll-triggered fade-in animations preserved

