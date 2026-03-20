

# Parallax Scroll + Clip-Path Reveal Animations

## Changes

### 1. Add `ParallaxImage` component (in `Index.tsx`)
A reusable wrapper using `useScroll` + `useTransform` from framer-motion. The image translates vertically at a slower rate than scroll, creating a parallax depth effect. Apply to all 3 project cards and the hero background image.

### 2. Add `ClipReveal` component (in `Index.tsx`)
A scroll-triggered clip-path animation wrapper. Images start with `clip-path: inset(100% 0 0 0)` (hidden from bottom) and animate to `inset(0 0 0 0)` (fully visible) as they enter the viewport. Apply to all 4 service cards.

### 3. Update `ServicesSection` (lines 454-479)
- Replace `ScaleIn` wrapper with new `ClipReveal` wrapper on each service card
- The image inside each card reveals with a smooth wipe-up effect on scroll

### 4. Update `ProjectsSection` (lines 508-527)
- Wrap each project card image in `ParallaxImage` so the image moves at ~80% scroll speed
- Keep existing hover effects intact

### 5. Update Hero background (lines 262-266)
- Apply parallax to the hero background image (subtle, ~90% speed)

### 6. Add CSS in `src/index.css`
- Add `will-change: transform` optimization for parallax elements

### Files Modified
- `src/pages/Index.tsx` — Add `ParallaxImage` and `ClipReveal` components, update Services/Projects/Hero sections
- `src/index.css` — Minor performance optimization classes

