import { useId } from "react";

type Variant = "silver" | "rose" | "gold" | "platinum";

interface RingMockupProps {
  variant?: Variant;
  /** Color of the central emerald / AI core gem */
  gemColor?: string;
  /** Show the soft glow halo around the ring (the "AI core" glow) */
  glow?: boolean;
  /** Show the small etched serial number on the band */
  serial?: string;
  className?: string;
  ariaLabel?: string;
}

const BAND_PALETTES: Record<
  Variant,
  { a: string; b: string; c: string; d: string; rim: string }
> = {
  silver: {
    a: "#F5F5F2",
    b: "#D8D8D2",
    c: "#9DA3A0",
    d: "#6E7572",
    rim: "#3F4744",
  },
  rose: {
    a: "#F8DCC9",
    b: "#E2B193",
    c: "#B9836A",
    d: "#7E513F",
    rim: "#3E2A22",
  },
  gold: {
    a: "#F5E2B0",
    b: "#E2C98A",
    c: "#C9A45C",
    d: "#8C6A2A",
    rim: "#4A381A",
  },
  platinum: {
    a: "#F0F4F2",
    b: "#D2DBD7",
    c: "#A1ABA7",
    d: "#5E6764",
    rim: "#2A302E",
  },
};

/**
 * A stylized top-down Claddagh ring illustration rendered entirely in SVG.
 * No external imagery is used — this gives a premium, original look while
 * keeping the project free of copyrighted assets.
 *
 * The composition (top-down):
 *   ┌────────────────┐
 *   │   crown ✦      │
 *   │ hand ♥ hand    │   <- claddagh emblem at the top of the circular band
 *   │   (band)       │
 *   └────────────────┘
 */
export default function RingMockup({
  variant = "silver",
  gemColor = "#0F6B4F",
  glow = true,
  serial,
  className,
  ariaLabel = "A speculative Claddagh ring with an AI core gemstone.",
}: RingMockupProps) {
  const uid = useId().replace(/:/g, "");
  const p = BAND_PALETTES[variant];

  const gBand = `band-${uid}`;
  const gInner = `inner-${uid}`;
  const gGem = `gem-${uid}`;
  const gGemHL = `gemhl-${uid}`;
  const gHalo = `halo-${uid}`;
  const fSoft = `soft-${uid}`;
  const fInk = `ink-${uid}`;

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label={ariaLabel}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Band metal gradient — gives the ring its rounded sheen */}
        <radialGradient
          id={gBand}
          cx="50%"
          cy="42%"
          r="60%"
          fx="42%"
          fy="32%"
        >
          <stop offset="0%" stopColor={p.a} />
          <stop offset="35%" stopColor={p.b} />
          <stop offset="70%" stopColor={p.c} />
          <stop offset="100%" stopColor={p.d} />
        </radialGradient>

        {/* Inside-of-band darkening (the inner shadow of a ring's inner wall) */}
        <radialGradient id={gInner} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FAFAF7" stopOpacity="0.0" />
          <stop offset="65%" stopColor="#1F2933" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#1F2933" stopOpacity="0.22" />
        </radialGradient>

        {/* Emerald gem gradient */}
        <radialGradient id={gGem} cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#A7E3C5" stopOpacity="0.95" />
          <stop offset="35%" stopColor={gemColor} />
          <stop offset="100%" stopColor="#03281E" />
        </radialGradient>

        {/* Tiny sparkle highlight on gem */}
        <radialGradient id={gGemHL} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.0" />
        </radialGradient>

        {/* Soft halo behind the ring — "AI core glow" */}
        <radialGradient id={gHalo} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={gemColor} stopOpacity="0.35" />
          <stop offset="55%" stopColor={gemColor} stopOpacity="0.08" />
          <stop offset="100%" stopColor={gemColor} stopOpacity="0" />
        </radialGradient>

        {/* Soft drop shadow filter */}
        <filter
          id={fSoft}
          x="-30%"
          y="-30%"
          width="160%"
          height="160%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
          <feOffset dx="0" dy="6" result="off" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.35" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Subtle engraved-line filter */}
        <filter id={fInk} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.4" />
        </filter>
      </defs>

      {/* Halo glow (AI core) */}
      {glow && (
        <circle
          cx="200"
          cy="208"
          r="180"
          fill={`url(#${gHalo})`}
          className="animate-soft-pulse origin-center"
        />
      )}

      {/* Soft ground shadow */}
      <ellipse
        cx="200"
        cy="338"
        rx="120"
        ry="14"
        fill="#1F2933"
        opacity="0.10"
      />

      {/* RING BAND (top-down view) */}
      <g filter={`url(#${fSoft})`}>
        {/* Outer band */}
        <circle
          cx="200"
          cy="208"
          r="138"
          fill={`url(#${gBand})`}
          stroke={p.rim}
          strokeOpacity="0.45"
          strokeWidth="1"
        />
        {/* Inner cutout — the "hole" of the ring */}
        <circle cx="200" cy="208" r="86" fill="#FAFAF7" />
        {/* Inner-wall shading inside the cutout */}
        <circle cx="200" cy="208" r="86" fill={`url(#${gInner})`} />
        {/* Subtle inner highlight ring */}
        <circle
          cx="200"
          cy="208"
          r="86"
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity="0.55"
          strokeWidth="1"
        />
        {/* Outer micro-bevel */}
        <circle
          cx="200"
          cy="208"
          r="138"
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
      </g>

      {/* Engraved hairline detail along the band */}
      <circle
        cx="200"
        cy="208"
        r="118"
        fill="none"
        stroke={p.rim}
        strokeOpacity="0.18"
        strokeDasharray="1 3"
        strokeWidth="0.8"
        filter={`url(#${fInk})`}
      />

      {/* CLADDAGH EMBLEM — placed at the top of the band */}
      {/*
        The emblem sits across the top arc of the band (around y ~ 64–112).
        We layer crown → hands → heart-with-gem.
      */}
      <g transform="translate(200 86)">
        {/* CROWN — a small five-point coronet */}
        <g transform="translate(0 -28)">
          <path
            d="M -28 6 L -22 -10 L -14 -2 L -8 -16 L 0 -4 L 8 -16 L 14 -2 L 22 -10 L 28 6 Z"
            fill={p.b}
            stroke={p.rim}
            strokeOpacity="0.5"
            strokeWidth="1"
          />
          <path
            d="M -28 6 L 28 6"
            stroke={p.rim}
            strokeOpacity="0.55"
            strokeWidth="1.2"
          />
          {/* Tiny crown jewel — emerald accent */}
          <circle cx="0" cy="-2" r="2.2" fill={gemColor} />
          <circle cx="-16" cy="-8" r="1.4" fill={gemColor} opacity="0.7" />
          <circle cx="16" cy="-8" r="1.4" fill={gemColor} opacity="0.7" />
        </g>

        {/* HEART (carries the AI core gem) */}
        <g>
          {/* heart silhouette base — metal */}
          <path
            d="M 0 22
               C -10 6, -28 6, -28 -8
               C -28 -22, -14 -28, 0 -14
               C 14 -28, 28 -22, 28 -8
               C 28 6, 10 6, 0 22 Z"
            fill={p.a}
            stroke={p.rim}
            strokeOpacity="0.5"
            strokeWidth="1"
          />
          {/* inset gem (the emerald AI core) */}
          <path
            d="M 0 16
               C -7 4, -21 4, -21 -6
               C -21 -16, -10 -20, 0 -10
               C 10 -20, 21 -16, 21 -6
               C 21 4, 7 4, 0 16 Z"
            fill={`url(#${gGem})`}
            stroke="#03281E"
            strokeOpacity="0.6"
            strokeWidth="0.8"
          />
          {/* sparkle */}
          <ellipse
            cx="-6"
            cy="-8"
            rx="4"
            ry="2.2"
            fill={`url(#${gGemHL})`}
            transform="rotate(-25 -6 -8)"
          />
        </g>

        {/* HANDS — two stylized cuff/hand shapes flanking the heart */}
        <g
          fill={p.b}
          stroke={p.rim}
          strokeOpacity="0.5"
          strokeWidth="1"
          opacity="0.95"
        >
          {/* left hand */}
          <path
            d="M -54 6
               C -50 -6, -42 -10, -34 -8
               C -32 -4, -32 0, -34 4
               C -36 10, -42 14, -50 12
               C -54 12, -56 10, -54 6 Z"
          />
          {/* right hand */}
          <path
            d="M 54 6
               C 50 -6, 42 -10, 34 -8
               C 32 -4, 32 0, 34 4
               C 36 10, 42 14, 50 12
               C 54 12, 56 10, 54 6 Z"
          />
        </g>
      </g>

      {/* Optional engraved serial number on lower band */}
      {serial && (
        <text
          x="200"
          y="328"
          textAnchor="middle"
          fill={p.rim}
          fillOpacity="0.55"
          fontSize="9"
          letterSpacing="0.32em"
          fontFamily="Inter, sans-serif"
          fontWeight={500}
        >
          {serial}
        </text>
      )}

      {/* Top reflective highlight on the band */}
      <path
        d="M 96 168 A 130 130 0 0 1 304 168"
        fill="none"
        stroke="#FFFFFF"
        strokeOpacity="0.55"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
