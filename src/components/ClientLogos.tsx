import React from "react";

const ClientLogo = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-12 opacity-30 hover:opacity-60 transition-opacity duration-300 shrink-0">
    {children}
  </div>
);

const MarchettiCostruzioni = () => (
  <svg width="180" height="50" viewBox="0 0 180 50" fill="none" className="text-foreground">
    {/* Stylized house with clean lines */}
    <path d="M20 18L10 28h3v12h5v-7h4v7h5V28h3L20 18z" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <path d="M20 18L10 28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M20 18L30 28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="17" y1="22" x2="23" y2="22" stroke="currentColor" strokeWidth="0.6" />
    {/* Text */}
    <text x="40" y="26" fill="currentColor" fontSize="10" fontWeight="700" letterSpacing="0.1em" fontFamily="system-ui, sans-serif">MARCHETTI</text>
    <text x="40" y="38" fill="currentColor" fontSize="7" fontWeight="300" letterSpacing="0.25em" fontFamily="system-ui, sans-serif">COSTRUZIONI</text>
    <line x1="40" y1="29" x2="110" y2="29" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
  </svg>
);

const EdilPellegrini = () => (
  <svg width="160" height="50" viewBox="0 0 160 50" fill="none" className="text-foreground">
    {/* Three staggered bricks */}
    <rect x="6" y="16" width="12" height="6" rx="0.5" stroke="currentColor" strokeWidth="1" fill="none" />
    <rect x="10" y="23" width="12" height="6" rx="0.5" stroke="currentColor" strokeWidth="1" fill="none" />
    <rect x="6" y="30" width="12" height="6" rx="0.5" stroke="currentColor" strokeWidth="1" fill="none" />
    {/* Mortar lines */}
    <line x1="12" y1="16" x2="12" y2="22" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
    <line x1="16" y1="23" x2="16" y2="29" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
    <line x1="12" y1="30" x2="12" y2="36" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
    {/* Text - serif style */}
    <text x="30" y="24" fill="currentColor" fontSize="9" fontWeight="300" letterSpacing="0.08em" fontFamily="Georgia, serif" fontStyle="italic">edil</text>
    <text x="30" y="37" fill="currentColor" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="Georgia, serif">PELLEGRINI</text>
  </svg>
);

const MuratoriAssociati = () => (
  <svg width="170" height="50" viewBox="0 0 170 50" fill="none" className="text-foreground">
    {/* Trowel and level crossed */}
    <path d="M12 38L22 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M22 14l8-2-1 4-7 4V14z" stroke="currentColor" strokeWidth="0.8" fill="currentColor" opacity="0.3" />
    <path d="M28 38L18 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="14" y="12" width="12" height="3" rx="1" stroke="currentColor" strokeWidth="0.6" fill="none" transform="rotate(-10 20 13.5)" />
    {/* Circle accent */}
    <circle cx="20" cy="26" r="2" stroke="currentColor" strokeWidth="0.8" fill="none" />
    {/* Text - bold condensed */}
    <text x="40" y="24" fill="currentColor" fontSize="10" fontWeight="800" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">MURATORI</text>
    <text x="40" y="37" fill="currentColor" fontSize="9" fontWeight="300" letterSpacing="0.15em" fontFamily="system-ui, sans-serif">ASSOCIATI</text>
  </svg>
);

const CattaneoEdilizia = () => (
  <svg width="190" height="50" viewBox="0 0 190 50" fill="none" className="text-foreground">
    {/* Crane - angular modern */}
    <line x1="18" y1="8" x2="18" y2="42" stroke="currentColor" strokeWidth="1.5" />
    <line x1="8" y1="8" x2="32" y2="8" stroke="currentColor" strokeWidth="1.5" />
    <line x1="8" y1="8" x2="8" y2="12" stroke="currentColor" strokeWidth="0.8" />
    <line x1="32" y1="8" x2="32" y2="18" stroke="currentColor" strokeWidth="0.6" />
    <rect x="30" y="18" width="4" height="3" rx="0.5" stroke="currentColor" strokeWidth="0.6" fill="none" />
    <line x1="8" y1="12" x2="18" y2="18" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
    <rect x="12" y="40" width="12" height="2" rx="0.5" stroke="currentColor" strokeWidth="0.6" fill="none" />
    {/* Text */}
    <text x="44" y="22" fill="currentColor" fontSize="7" fontWeight="300" letterSpacing="0.3em" fontFamily="system-ui, sans-serif">CATTANEO</text>
    <text x="44" y="36" fill="currentColor" fontSize="14" fontWeight="200" letterSpacing="0.08em" fontFamily="system-ui, sans-serif">EDILIZIA</text>
  </svg>
);

const ImpresaDamiani = () => (
  <svg width="170" height="50" viewBox="0 0 170 50" fill="none" className="text-foreground">
    {/* Detailed helmet with visor */}
    <path d="M10 28c0-6 4.5-11 10-11s10 5 10 11H10z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" opacity="0.15" />
    <path d="M8 28h24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M8 28c0 1.5 1 3 3 3h18c2 0 3-1.5 3-3" stroke="currentColor" strokeWidth="1" fill="none" />
    <line x1="17" y1="17" x2="23" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 24h16" stroke="currentColor" strokeWidth="0.4" opacity="0.3" />
    {/* Text */}
    <text x="40" y="22" fill="currentColor" fontSize="7" fontWeight="400" letterSpacing="0.15em" fontFamily="system-ui, sans-serif">IMPRESA</text>
    <text x="40" y="35" fill="currentColor" fontSize="12" fontWeight="600" letterSpacing="0.1em" fontFamily="Georgia, serif">Damiani</text>
    <line x1="40" y1="38" x2="110" y2="38" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />
  </svg>
);

const EdiliziaZanetti = () => (
  <svg width="175" height="50" viewBox="0 0 175 50" fill="none" className="text-foreground">
    {/* Skyline - 3 buildings */}
    <rect x="6" y="18" width="7" height="22" stroke="currentColor" strokeWidth="0.8" fill="currentColor" opacity="0.1" />
    <rect x="14" y="10" width="8" height="30" stroke="currentColor" strokeWidth="0.8" fill="currentColor" opacity="0.15" />
    <rect x="23" y="22" width="6" height="18" stroke="currentColor" strokeWidth="0.8" fill="currentColor" opacity="0.08" />
    {/* Windows */}
    <rect x="8" y="21" width="2" height="2" fill="currentColor" opacity="0.4" />
    <rect x="8" y="26" width="2" height="2" fill="currentColor" opacity="0.4" />
    <rect x="8" y="31" width="2" height="2" fill="currentColor" opacity="0.4" />
    <rect x="16" y="13" width="2" height="2" fill="currentColor" opacity="0.4" />
    <rect x="19" y="13" width="2" height="2" fill="currentColor" opacity="0.4" />
    <rect x="16" y="18" width="2" height="2" fill="currentColor" opacity="0.4" />
    <rect x="19" y="18" width="2" height="2" fill="currentColor" opacity="0.4" />
    <rect x="16" y="23" width="2" height="2" fill="currentColor" opacity="0.4" />
    <rect x="19" y="23" width="2" height="2" fill="currentColor" opacity="0.4" />
    <rect x="25" y="25" width="2" height="2" fill="currentColor" opacity="0.4" />
    <rect x="25" y="30" width="2" height="2" fill="currentColor" opacity="0.4" />
    {/* Antenna */}
    <line x1="18" y1="4" x2="18" y2="10" stroke="currentColor" strokeWidth="0.6" />
    <circle cx="18" cy="4" r="1" fill="currentColor" opacity="0.5" />
    {/* Text */}
    <text x="36" y="25" fill="currentColor" fontSize="12" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EDILIZIA</text>
    <text x="36" y="38" fill="currentColor" fontSize="9" fontWeight="300" letterSpacing="0.18em" fontFamily="system-ui, sans-serif">ZANETTI</text>
  </svg>
);

const FratelliTomasini = () => (
  <svg width="165" height="50" viewBox="0 0 165 50" fill="none" className="text-foreground">
    {/* Wrench and hammer crossed */}
    <path d="M10 36L26 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M26 12l-2-3h5l-1 5-2-2z" fill="currentColor" opacity="0.5" />
    <path d="M26 36L10 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="10" cy="12" r="3" stroke="currentColor" strokeWidth="0.8" fill="none" />
    <circle cx="10" cy="12" r="1.2" stroke="currentColor" strokeWidth="0.5" fill="none" />
    {/* Decorative diamond */}
    <path d="M18 22l2 3-2 3-2-3z" fill="currentColor" opacity="0.3" />
    {/* Text - serif */}
    <text x="38" y="22" fill="currentColor" fontSize="8" fontWeight="400" letterSpacing="0.12em" fontFamily="Georgia, serif" fontStyle="italic">Fratelli</text>
    <text x="38" y="36" fill="currentColor" fontSize="13" fontWeight="700" letterSpacing="0.04em" fontFamily="Georgia, serif">TOMASINI</text>
    <line x1="38" y1="24" x2="95" y2="24" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />
  </svg>
);

const CantieriPietrasanta = () => (
  <svg width="190" height="50" viewBox="0 0 190 50" fill="none" className="text-foreground">
    {/* Warning triangle with stripes */}
    <path d="M18 10L6 38h24L18 10z" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <path d="M18 14L9 34h18L18 14z" stroke="currentColor" strokeWidth="0.4" fill="currentColor" opacity="0.08" />
    {/* Diagonal stripes inside */}
    <line x1="12" y1="30" x2="16" y2="20" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
    <line x1="15" y1="32" x2="19" y2="22" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
    <line x1="18" y1="34" x2="22" y2="24" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
    {/* Exclamation */}
    <line x1="18" y1="20" x2="18" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="18" cy="32" r="1" fill="currentColor" />
    {/* Text */}
    <text x="38" y="22" fill="currentColor" fontSize="7" fontWeight="300" letterSpacing="0.15em" fontFamily="system-ui, sans-serif">CANTIERI</text>
    <text x="38" y="36" fill="currentColor" fontSize="11" fontWeight="800" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">PIETRASANTA</text>
  </svg>
);

export const clientLogos = [
  { component: MarchettiCostruzioni },
  { component: EdilPellegrini },
  { component: MuratoriAssociati },
  { component: CattaneoEdilizia },
  { component: ImpresaDamiani },
  { component: EdiliziaZanetti },
  { component: FratelliTomasini },
  { component: CantieriPietrasanta },
];

export { ClientLogo };
export default ClientLogo;
