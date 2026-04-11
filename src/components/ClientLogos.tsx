import React from "react";

const ClientLogo = ({ icon, name }: { icon: React.ReactNode; name: string }) => (
  <div className="flex items-center gap-3 mx-10 opacity-30 hover:opacity-60 transition-opacity duration-300 shrink-0">
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="text-foreground">
      {icon}
    </svg>
    <span className="font-ui text-sm tracking-[0.15em] uppercase text-foreground whitespace-nowrap">
      {name}
    </span>
  </div>
);

// House icon
const HouseIcon = (
  <>
    <path d="M18 4L3 16h4v14h8v-9h6v9h8V16h4L18 4z" fill="currentColor" opacity="0.8" />
    <path d="M18 4L3 16h4v14h8v-9h6v9h8V16h4L18 4z" stroke="currentColor" strokeWidth="0.5" fill="none" />
  </>
);

// Bricks icon
const BricksIcon = (
  <>
    <rect x="3" y="6" width="14" height="7" rx="1" fill="currentColor" opacity="0.6" />
    <rect x="19" y="6" width="14" height="7" rx="1" fill="currentColor" opacity="0.8" />
    <rect x="3" y="15" width="10" height="7" rx="1" fill="currentColor" opacity="0.8" />
    <rect x="15" y="15" width="10" height="7" rx="1" fill="currentColor" opacity="0.6" />
    <rect x="27" y="15" width="6" height="7" rx="1" fill="currentColor" opacity="0.7" />
    <rect x="3" y="24" width="14" height="7" rx="1" fill="currentColor" opacity="0.7" />
    <rect x="19" y="24" width="14" height="7" rx="1" fill="currentColor" opacity="0.6" />
  </>
);

// Trowel icon
const TrowelIcon = (
  <>
    <path d="M6 28L16 8l4 2L10 30l-4-2z" fill="currentColor" opacity="0.8" />
    <path d="M16 8l14-4-2 6-12 6v-8z" fill="currentColor" opacity="0.6" />
  </>
);

// Crane icon
const CraneIcon = (
  <>
    <rect x="15" y="4" width="3" height="28" fill="currentColor" opacity="0.8" />
    <rect x="6" y="4" width="24" height="3" fill="currentColor" opacity="0.7" />
    <path d="M6 4v3l3 5V7L6 4z" fill="currentColor" opacity="0.6" />
    <rect x="27" y="7" width="2" height="12" fill="currentColor" opacity="0.5" />
    <rect x="25" y="19" width="6" height="4" rx="1" fill="currentColor" opacity="0.7" />
    <rect x="10" y="30" width="13" height="3" rx="1" fill="currentColor" opacity="0.6" />
  </>
);

// Helmet icon
const HelmetIcon = (
  <>
    <path d="M5 20c0-7.2 5.8-13 13-13s13 5.8 13 13H5z" fill="currentColor" opacity="0.7" />
    <rect x="3" y="20" width="30" height="4" rx="2" fill="currentColor" opacity="0.9" />
    <rect x="15" y="7" width="6" height="3" rx="1" fill="currentColor" opacity="0.5" />
  </>
);

// Building icon
const BuildingIcon = (
  <>
    <rect x="8" y="6" width="20" height="27" rx="1" fill="currentColor" opacity="0.7" />
    <rect x="11" y="9" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.3" />
    <rect x="17" y="9" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.3" />
    <rect x="23" y="9" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.3" />
    <rect x="11" y="16" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.3" />
    <rect x="17" y="16" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.3" />
    <rect x="23" y="16" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.3" />
    <rect x="15" y="26" width="6" height="7" rx="0.5" fill="currentColor" opacity="0.4" />
  </>
);

// Wrench icon
const WrenchIcon = (
  <>
    <path d="M8 28l14-14c-1-4 1-8 5-10l-3 5 2 2 5-3c-2 4-6 6-10 5L7 27l1 1z" fill="currentColor" opacity="0.8" />
  </>
);

// Barrier / construction icon
const BarrierIcon = (
  <>
    <rect x="4" y="14" width="28" height="8" rx="1" fill="currentColor" opacity="0.7" />
    <path d="M4 14l7 8h-7v-8zM11 14l7 8h-7l-7-8h7zM18 14l7 8h-7l-7-8h7zM25 14l7 8h-7l-7-8h7z" fill="currentColor" opacity="0.4" />
    <rect x="8" y="22" width="3" height="10" fill="currentColor" opacity="0.6" />
    <rect x="25" y="22" width="3" height="10" fill="currentColor" opacity="0.6" />
    <rect x="8" y="10" width="3" height="4" fill="currentColor" opacity="0.6" />
    <rect x="25" y="10" width="3" height="4" fill="currentColor" opacity="0.6" />
  </>
);

export const clientLogos = [
  { icon: HouseIcon, name: "Rossi Costruzioni" },
  { icon: BricksIcon, name: "Edil Bianchi" },
  { icon: TrowelIcon, name: "Muratori Uniti" },
  { icon: CraneIcon, name: "Costruzioni Ferrari" },
  { icon: HelmetIcon, name: "Impresa Colombo" },
  { icon: BuildingIcon, name: "Edilizia Moretti" },
  { icon: WrenchIcon, name: "Fratelli Ricci" },
  { icon: BarrierIcon, name: "Cantieri Lombardi" },
];

export default ClientLogo;
