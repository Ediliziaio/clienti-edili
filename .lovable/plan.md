

# Sostituire logo e rimuovere label Hero

## Cosa
1. Copiare il logo uploadato (`clientiedili_dark.png`) in `src/assets/`
2. Sostituire il logo testuale "CE" + "ClientiEdili" sia nel **Navbar** (riga ~263-267) che nel **Footer** (riga ~1293-1297) con un tag `<img>` che usa il nuovo logo
3. Rimuovere la riga `<SectionLabel>Agenzia Web per Imprese Edili</SectionLabel>` dall'Hero (riga ~334-336)

## File modificati
- `src/assets/clientiedili_dark.png` (nuovo — copia da upload)
- `src/pages/Index.tsx`:
  - Import del logo da `@/assets/clientiedili_dark.png`
  - **Navbar** (righe 263-268): sostituire div cerchio + span con `<img src={logo} alt="ClientiEdili" className="h-10" />`
  - **Footer** (righe 1293-1298): stessa sostituzione
  - **Hero** (righe 334-336): rimuovere il `FadeIn` con `SectionLabel`

