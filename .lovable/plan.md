

# ClientiEdili — Font Fix, Image Correction & UX Enhancement

## Problems Identified

1. **Font brutto**: Playfair Display (serif) for headings looks wrong. Carino uses a bold geometric sans-serif (looks like **Sora** or **Outfit** — clean, modern, bold). Need to switch headings to a bold sans-serif.
2. **Images sbagliate**: Current images show houses, villas, apartments. But you SELL WEBSITES to construction companies — images should show laptop screens with websites, web design mockups, dashboards, digital marketing visuals.
3. **UX debole**: Needs more punch — bigger type, stronger animations, more visual contrast, better hover effects.

## Plan

### Step 1: Change heading font from Playfair Display to **Sora** (bold geometric sans-serif like Carino)
- Update `index.html` Google Fonts link: replace Playfair Display with **Sora** (weights 400-800)
- Update `tailwind.config.ts`: change `display` font family to Sora
- Update `src/index.css`: change `h1, h2, h3` font-family to Sora
- Remove all `italic` styling on accent words (Sora looks better without serif italic)

### Step 2: Regenerate ALL images with correct subject matter
Replace all 13 images — new subjects focused on **web design / digital marketing for construction**:
- **hero-bg**: Laptop showing a modern construction company website on a dark desk
- **service-construction**: Modern website mockup on multiple devices (desktop + mobile)
- **service-seo**: Google search results page showing construction company ranking #1
- **service-gmb**: Google Maps with business pin and reviews on phone screen
- **service-social**: Instagram/Facebook feed showing construction company social posts
- **project-1, 2, 3**: Laptop/screen showing different professional construction company websites
- **blog-1, 2, 3**: Digital marketing themed images (analytics dashboard, SEO strategy, social media)
- **cta-aerial, cta-inline**: Web design workspace, code on screen with construction imagery

### Step 3: Fix project data — change from "houses" to "websites built"
Update `projects` array:
- "Sito Web Rossi Costruzioni" — Sito moderno con portfolio lavori e form contatto
- "Landing Page Edil Bianchi" — Landing page per lead generation con SEO locale
- "Portale Costruzioni Ferrari" — Portale completo con galleria progetti e preventivi online

### Step 4: UX improvements
- **Bigger hero headline**: Increase to `text-8xl` on desktop
- **Stronger hover effects**: Cards lift more (`translateY(-8px)`), glow intensity increased
- **Text gradient on accent words** instead of just color change
- **Parallax subtle motion** on hero background
- **Stagger animations** faster entry (reduce delays)
- **Number counters** bigger and bolder
- **CTA buttons** larger with more padding
- **Add micro-interactions**: Button scale on hover, card border glow pulse

### Files Modified
- `index.html` — Sora font
- `src/index.css` — Font family updates, enhanced hover/animation styles
- `tailwind.config.ts` — Sora font family
- `src/pages/Index.tsx` — Complete content/image/UX update
- `src/assets/*.jpg` — All 13 images regenerated with correct subjects

