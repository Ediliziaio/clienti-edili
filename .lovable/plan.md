

# ClientiEdili v3 — Full Visual Overhaul with AI-Generated Images

## Problem

The current site is text-and-icons only — no photos, no images, no visual richness. The Carino reference uses images everywhere: service cards with photos, project showcase with large images, team member photos, testimonial photos, blog cards with images, and a CTA banner with inline images. The current version feels like a wireframe compared to Carino.

## What Changes

### 1. Generate AI images (10-12 images)
Using the AI image generation gateway, create construction/edili-themed images:
- **4 service card images**: construction site, SEO/analytics dashboard, Google Maps pin, social media on phone
- **3 project showcase images**: finished modern buildings/renovations
- **4 team member portraits**: professional headshots (Italian construction industry feel)
- **1 CTA banner accent image**: aerial construction site or modern building

Images will be generated at build time, saved to `src/assets/`, and imported as static files.

### 2. Match Carino's font — use Sora or the exact Carino fonts
Carino uses a clean geometric sans-serif for body and a refined serif for display. Update Google Fonts to match more closely: **General Sans** (body/UI) isn't on Google Fonts, so we'll use **Inter** or **Plus Jakarta Sans** for body and keep **Playfair Display** for serif headings — or switch to the fonts that Carino actually loads.

### 3. Add missing Carino sections with images

**Services section** — Replace icon cards with image-based cards that expand/reveal on hover (like Carino's service cards with photos underneath titles)

**Projects section** (NEW) — 3 large project cards with AI-generated construction images, title overlay, and description. Matches Carino's "Our Recent Projects" section.

**CTA Banner** — Large editorial text "Trasformiamo Click in Clienti" with inline rounded images between words (exactly like Carino's "Transforming Clicks Into Conversions" section)

**Blog/Insights section** (NEW) — 4 cards with AI-generated images, dates, and article titles about construction marketing

**Team section** (NEW, optional) — Could show "Il Nostro Team" with AI-generated portraits — but since this is a construction agency, may skip or keep minimal

### 4. Enhanced animations and effects
- Parallax scroll on project images
- Image hover zoom/scale on service and project cards
- Smooth clip-path reveals on images when scrolling into view
- Staggered card entrance animations

### 5. Update section order to match Carino exactly
1. Navbar
2. Hero (with floating testimonial card + avatar cluster — keep)
3. Clients ticker bar
4. About section with stats
5. **Services with IMAGE cards**
6. **Projects section (NEW) with large image cards**
7. Why Choose Us (2x2 grid)
8. Double marquee ticker
9. Testimonials (with real photos)
10. **CTA Banner with inline images**
11. Pricing/Offer
12. **Blog/Insights (NEW) with image cards**
13. FAQ
14. Contact form
15. Final CTA "Collaboriamo!"
16. Footer

## Technical Plan

### Step 1: Generate images with AI gateway
- Use `lovable_ai.py` script with `--image` flag to generate ~10 images
- Save to `public/images/` directory
- Categories: services (4), projects (3), blog (4), CTA accent (1)

### Step 2: Update `src/pages/Index.tsx` (~1100 lines)
Complete rewrite adding:
- Image-based service cards with hover overlay
- New `ProjectsSection` with large image cards + overlay text
- New `CTABannerWithImages` with inline rounded images in large text
- New `BlogSection` with image card grid
- Updated testimonials with photo avatars
- Parallax and clip-path reveal animations
- Image zoom on hover effects

### Step 3: Update `src/index.css`
- Add image card hover styles
- Clip-path reveal animations
- Parallax helper classes
- Image overlay gradient styles

### Step 4: Keep `index.html` and `tailwind.config.ts` mostly unchanged
- Minor font tweaks if needed

## Files Modified
- `public/images/` — 10-12 AI-generated images
- `src/pages/Index.tsx` — complete rewrite with image sections
- `src/index.css` — new image/animation styles

