

# ClientiEdili — High-Conversion Landing Page

## What We're Building

A single-page, dark-themed landing page in Italian for **ClientiEdili**, an agency that sells professional websites to Italian construction companies. The page features bold orange accents, scroll animations, testimonials, FAQ, pricing, and a contact form.

## Design Summary

- **Theme**: Dark background (#0D0D0D), orange accent (#F05A28), gold badges
- **Fonts**: Bebas Neue (headings), DM Sans (body)
- **Animations**: Framer Motion — scroll-triggered reveals, animated counters, staggered cards, scroll progress bar

## Sections (in order)

1. **Navbar** — Fixed, transparent → blurred on scroll, logo + CTA button
2. **Hero** — Full-screen, headline "IL TUO SITO CHE PORTA CLIENTI IN CANTIERE. IN 48 ORE.", badge, checklist, CTA, floating labels, mock browser preview
3. **Marquee Logos** — Scrolling ticker of client company names
4. **Problem Section** — 3 pain-point cards with icons (XCircle, AlertTriangle, Building2)
5. **Offer Section** — Pricing card (€1.400 → €1.000), feature checklist, bonus items, guarantees (Zero Anticipo, 48 Ore, Soddisfatto o Rimborsato)
6. **Process Section** — 3 steps (call → preview in 24h → live in 48h)
7. **Reviews Section** — Testimonial cards with star ratings, avatars, animated counters (127+ companies, 98% satisfaction, 48h delivery, €0 upfront)
8. **FAQ Section** — Accordion with 6 Q&As
9. **Final CTA** — Urgency section with two CTA buttons
10. **Contact Form** — Glowing card with fields: name, phone, email, city, business type, description, submission confirmation
11. **Footer** — Brand, legal links, copyright

## Technical Plan

### Step 1: Setup dependencies and fonts
- Add Google Fonts links to `index.html`
- Install `framer-motion` (lucide-react already available)

### Step 2: Global CSS (`src/index.css`)
- CSS custom properties for the full color palette
- Base styles: dark background, typography, button styles, card styles, badges, FAQ, scroll bar, responsive breakpoints

### Step 3: Single-page component (`src/pages/Index.tsx`)
- All sections as sub-components in one file
- Data arrays for reviews, FAQ, process steps, offer items, company logos
- `AnimatedCounter` component using framer-motion's `useMotionValue`
- `ScrollProgressBar` using `useScroll` + `useSpring`
- Contact form with React state, simple validation, success state
- All scroll-triggered animations via `useInView`

### Step 4: Update `src/App.tsx`
- Keep single route pointing to Index

## Notes
- Phone number placeholder: `tel:+39XXXXXXXXXX`
- Form is UI-only (no backend integration)
- Fully responsive with mobile breakpoints

