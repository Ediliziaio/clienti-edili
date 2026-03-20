

# Sezione Garanzia "Soddisfatto o Gratis"

## Cosa
Aggiungere una sezione dedicata alla garanzia tra `PricingSection` e `BlogSection` — una sezione visiva e impattante che comunica: **"Se non sei soddisfatto del nostro servizio, il sito te lo lasciamo GRATIS"**.

## Design
- Layout centrato con icona `Shield` grande e animata (glow lime)
- Titolo grande con "GRATIS" evidenziato in gradient lime
- 3 punti garanzia sotto (icone + testo): "Zero rischio", "Nessun vincolo", "Trasparenza totale"
- Card con bordo primary e sfondo scuro, effetto `glow-lime-lg`
- Badge/sigillo visivo tipo "Garanzia 100%"

## Come

### File: `src/pages/Index.tsx`
1. Creare componente `GuaranteeSection` (~50 righe) dopo `PricingSection`
2. Inserirlo nel render di `Index` tra `<PricingSection />` e `<BlogSection />`

### Struttura componente:
- Sezione con `py-24` e sfondo `bg-card/50`
- Card centrale con bordo primary, glow e padding generoso
- Icona Shield grande (64px) con cerchio lime dietro
- Titolo: "Se non sei soddisfatto, il sito è **GRATIS**"
- Sottotitolo esplicativo
- 3 mini-punti garanzia in riga con icone
- CTA button "Inizia Senza Rischi"

### File modificato
- `src/pages/Index.tsx`

