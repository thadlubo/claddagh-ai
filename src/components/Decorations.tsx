import { useMemo, type ReactNode } from "react";

/**
 * EmeraldGlow — soft ambient gradient blob used as an abstract background light.
 */
export function EmeraldGlow({
  className = "",
  intensity = 0.45,
  hue = "emerald",
}: {
  className?: string;
  intensity?: number;
  hue?: "emerald" | "gold" | "ivory";
}) {
  const colour =
    hue === "gold"
      ? `rgba(201, 164, 92, ${intensity})`
      : hue === "ivory"
      ? `rgba(232, 245, 239, ${intensity})`
      : `rgba(15, 107, 79, ${intensity})`;

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{
        background: `radial-gradient(circle at 50% 50%, ${colour}, transparent 70%)`,
      }}
    />
  );
}

/**
 * CelticPattern — interlaced knotwork band rendered in SVG. Used as a
 * decorative separator between sections.
 */
export function CelticPattern({
  className = "",
  tone = "gold",
}: {
  className?: string;
  tone?: "gold" | "emerald" | "ivory";
}) {
  const stroke =
    tone === "emerald"
      ? "rgba(15, 107, 79, 0.55)"
      : tone === "ivory"
      ? "rgba(250, 250, 247, 0.7)"
      : "rgba(201, 164, 92, 0.65)";

  return (
    <svg
      aria-hidden
      viewBox="0 0 480 40"
      className={`block ${className}`}
      preserveAspectRatio="none"
    >
      <g fill="none" stroke={stroke} strokeWidth="1.1" strokeLinecap="round">
        <path d="M0 20 H480" opacity="0.35" />
        {Array.from({ length: 12 }).map((_, i) => {
          const x = 20 + i * 40;
          return (
            <g key={i} transform={`translate(${x} 20)`}>
              <path d="M -12 0 q 6 -14 12 0 q 6 14 12 0" />
              <path d="M -12 0 q 6 14 12 0 q 6 -14 12 0" opacity="0.7" />
              <circle r="1.4" fill={stroke} stroke="none" />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

/**
 * FloatingParticles — a small constellation of golden specks. Static positions.
 */
export function FloatingParticles({
  count = 14,
  className = "",
  tone = "gold",
}: {
  count?: number;
  className?: string;
  tone?: "gold" | "ivory" | "emerald";
}) {
  const colour =
    tone === "ivory"
      ? "rgba(250,250,247,0.85)"
      : tone === "emerald"
      ? "rgba(167,227,197,0.85)"
      : "rgba(226,201,138,0.9)";

  const seeds = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const a = Math.sin(i * 12.9898) * 43758.5453;
        const b = Math.sin(i * 78.233) * 43758.5453;
        const c = Math.sin(i * 33.117) * 43758.5453;
        return {
          x: Math.abs(a - Math.floor(a)) * 100,
          y: Math.abs(b - Math.floor(b)) * 100,
          size: 1.5 + Math.abs(c - Math.floor(c)) * 2.5,
        };
      }),
    [count],
  );

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {seeds.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            background: colour,
            boxShadow: `0 0 ${s.size * 3}px ${colour}`,
            opacity: 0.65,
          }}
        />
      ))}
    </div>
  );
}

/**
 * GoldHairline — a thin gold gradient divider.
 */
export function GoldHairline({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`relative h-px w-full overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(201,164,92,0.35) 30%, rgba(226,201,138,0.95) 50%, rgba(201,164,92,0.35) 70%, transparent 100%)",
        }}
      />
    </div>
  );
}

/**
 * KnotCorner — a small Celtic knot corner ornament.
 */
export function KnotCorner({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 48 48"
      className={`${className} ${flip ? "scale-x-[-1]" : ""}`}
    >
      <g
        fill="none"
        stroke="rgba(201,164,92,0.7)"
        strokeWidth="1"
        strokeLinecap="round"
      >
        <path d="M2 24 q12 -22 22 -22" />
        <path d="M24 2 q22 12 22 22" />
        <path d="M14 6 q4 8 12 12" />
        <circle
          cx="24"
          cy="24"
          r="2.5"
          fill="rgba(201,164,92,0.5)"
          stroke="none"
        />
      </g>
    </svg>
  );
}

/**
 * SectionHeader — eyebrow + display heading + lede block.
 */
export function SectionHeader({
  eyebrow,
  children,
  lede,
  align = "left",
}: {
  eyebrow?: string;
  children: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"
      }
    >
      {eyebrow && <p className="eyebrow-gold mb-3">{eyebrow}</p>}
      <h2 className="h-section text-balance">{children}</h2>
      {lede && (
        <p className="mt-4 text-claddagh-charcoal/75 text-base sm:text-lg">
          {lede}
        </p>
      )}
    </div>
  );
}
