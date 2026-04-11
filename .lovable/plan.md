

# Aggiungere loghi animati generati con AI al ticker clienti

## Cosa
Sostituire il ticker testuale dei clienti con un ticker di loghi SVG generati. Creerò ~8 loghi finti di imprese edili in formato SVG inline direttamente nel codice, con il classico effetto marquee scorrevole.

## Come

### 1. Generare i loghi SVG
Creerò 8 loghi SVG inline stilizzati per le aziende fittizie già presenti (Rossi Costruzioni, Edil Bianchi, ecc.). Ogni logo sarà un componente SVG semplice ma professionale — icona geometrica (casa, gru, mattone, elmetto) + nome azienda — in stile monocromatico (grigio/muted) per integrarsi col design dark.

### 2. Aggiornare il ClientsTicker
Modificare la sezione `ClientsTicker` in `src/pages/Index.tsx` (righe 434-454):
- Sostituire le `<span>` testuali con i componenti logo SVG
- Ogni logo avrà dimensione ~120x50px con icona + testo
- Mantenere l'animazione `animate-ticker` esistente
- I loghi saranno semitrasparenti (`opacity-30`) come il testo attuale, con hover che li rende più visibili

### 3. Componente loghi
Creare un array di componenti SVG inline in `src/pages/Index.tsx` (o file separato `src/components/ClientLogos.tsx`) con loghi stilizzati per:
- Rossi Costruzioni (icona casa)
- Edil Bianchi (icona mattoni)
- Muratori Uniti (icona cazzuola)
- Costruzioni Ferrari (icona gru)
- Impresa Colombo (icona elmetto)
- Edilizia Moretti (icona edificio)
- Fratelli Ricci (icona chiave inglese)
- Cantieri Lombardi (icona cantiere)

## File modificati
- `src/pages/Index.tsx` — Aggiornare `ClientsTicker` con loghi SVG inline al posto del testo

