

# Add Top Offer Banner

## What
Add a sticky/fixed top banner above the navbar with the guarantee message: **"Offerta: Se non sei soddisfatto del nostro servizio, il sito te lo lasciamo GRATIS"**

## How

### File: `src/pages/Index.tsx`

1. **Create `TopBanner` component** — A full-width bar with dark/accent background, the offer text centered, and a close (X) button. Uses `useState` to allow dismissal. Styled with lime/primary accent color to stand out.

2. **Update `Navbar`** — Add a `top` offset (`top-10` or similar) when banner is visible so the fixed navbar sits below the banner. Pass banner visibility state via context or lift state to `Index`.

3. **Update `Index` render** — Add `<TopBanner />` as the first element, above `<ScrollProgress />`. Add `pt` offset to the hero when banner is visible.

### Design
- Full-width bar, `fixed top-0 z-[60]` (above navbar z-50)
- Background: primary/lime gradient or solid primary with dark text
- Bold text with icon (e.g. Shield or Gift icon)
- Dismissable with X button (persists in session via state)
- Navbar shifts down when banner is visible

### Files Modified
- `src/pages/Index.tsx` — New `TopBanner` component, state management in `Index`, offset adjustments for Navbar and Hero

