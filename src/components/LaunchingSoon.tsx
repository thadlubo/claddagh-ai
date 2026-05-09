import type { ReactNode } from "react";
import {
  EmeraldGlow,
  FloatingParticles,
  SectionHeader,
} from "./Decorations";

interface UpcomingProduct {
  name: string;
  subtitle: string;
  description: string;
  visual: ReactNode;
}

const ITEMS: UpcomingProduct[] = [
  {
    name: "AI Filtering Glasses",
    subtitle: "Irish Encounter Lens",
    description:
      "Augmented glasses that highlight suitable partners, blur incompatible citizens, and display cultural alignment scores in real time.",
    visual: <GlassesVisual />,
  },
  {
    name: "AI Handfasting Bracelet",
    subtitle: "The Bond That Wraps Back",
    description:
      "Inspired by Irish handfasting rituals. When two approved users connect, the bracelet tightens softly and syncs with the other person’s pulse pattern.",
    visual: <BraceletVisual />,
  },
  {
    name: "Vibrating Necklace & Earrings",
    subtitle: "Silent Compatibility Alerts",
    description:
      "Luxury jewellery that vibrates when someone nearby has been selected by the system as emotionally, socially, or nationally suitable.",
    visual: <NecklaceVisual />,
  },
];

export default function LaunchingSoon() {
  return (
    <section
      id="launching"
      className="relative py-20 sm:py-24 lg:py-28 bg-claddagh-ivory overflow-hidden"
      aria-labelledby="launching-heading"
    >
      <EmeraldGlow
        className="top-1/4 -left-32 h-[420px] w-[420px]"
        intensity={0.2}
      />

      <div className="container-x relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Roadmap · 2042 to 2045"
            lede="The next pieces extend CladdaghAI from a single finger to your eyes, your wrist, your chest. Each is currently in closed trial with the National Romantic Stability Programme."
          >
            Beyond the ring.{" "}
            <span className="italic font-editorial text-claddagh-rich">
              A quiet, wearable state.
            </span>
          </SectionHeader>

          <a href="#matchlist" className="btn-ghost self-start">
            Be notified at launch
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-7">
          {ITEMS.map((it) => (
            <article
              key={it.name}
              className="card card-hover group flex flex-col overflow-hidden"
            >
              <div
                className="relative aspect-[5/4] overflow-hidden
                           bg-gradient-to-br from-claddagh-deep via-claddagh-rich to-claddagh-deep"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 noise opacity-30 mix-blend-overlay"
                />
                <FloatingParticles
                  count={10}
                  tone="gold"
                  className="opacity-80"
                />
                <div
                  aria-hidden
                  className="absolute -inset-12 rounded-full bg-claddagh-gold/15
                             [mask-image:radial-gradient(closest-side,white,transparent_70%)]
                             transition-all duration-700 group-hover:bg-claddagh-gold/30 group-hover:scale-105"
                />
                <div className="absolute inset-0 grid place-items-center p-6 transition-transform duration-700 group-hover:-translate-y-1 group-hover:scale-[1.05]">
                  {it.visual}
                </div>
                <div className="absolute left-4 top-4">
                  <span className="tag-gold !bg-claddagh-gold/15 !text-claddagh-goldsoft !border-claddagh-gold/40">
                    <span aria-hidden>✦</span>
                    Launching Soon
                  </span>
                </div>
              </div>

              <div className="p-7">
                <p className="eyebrow-gold text-[10px] mb-2">{it.subtitle}</p>
                <h3 className="font-display text-2xl text-claddagh-deep">
                  {it.name}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-claddagh-charcoal/80">
                  {it.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-claddagh-grey/70 pt-5">
                  <span className="eyebrow text-[10px]">Closed Trial</span>
                  <a href="#matchlist" className="btn-link">
                    Request access
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stylised SVG visuals ---------------- */

function GlassesVisual() {
  return (
    <svg viewBox="0 0 320 200" className="w-[78%] h-auto" aria-hidden>
      <defs>
        <linearGradient id="lensG" x1="0" x2="1">
          <stop offset="0%" stopColor="#A7E3C5" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#0F6B4F" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <path
        d="M30 100 H290"
        stroke="#E2C98A"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <rect
        x="36"
        y="64"
        width="110"
        height="74"
        rx="22"
        fill="url(#lensG)"
        stroke="#E2C98A"
        strokeWidth="2.5"
      />
      <rect
        x="174"
        y="64"
        width="110"
        height="74"
        rx="22"
        fill="url(#lensG)"
        stroke="#E2C98A"
        strokeWidth="2.5"
      />
      <g
        fill="none"
        stroke="#FAFAF7"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.85"
      >
        <circle cx="91" cy="101" r="14" />
        <path d="M77 101 H66 M105 101 H116 M91 87 V78 M91 115 V124" />
        <path d="M229 88 H246 M229 96 H260 M229 104 H252" />
        <circle cx="229" cy="116" r="2" fill="#FAFAF7" />
        <text
          x="234"
          y="120"
          fontFamily="Inter, sans-serif"
          fontSize="8"
          fill="#FAFAF7"
          stroke="none"
          letterSpacing="0.2em"
        >
          MATCH 87%
        </text>
      </g>
      <path
        d="M146 96 q14 -10 28 0"
        fill="none"
        stroke="#E2C98A"
        strokeWidth="2.5"
      />
    </svg>
  );
}

function BraceletVisual() {
  return (
    <svg viewBox="0 0 320 200" className="w-[78%] h-auto" aria-hidden>
      <defs>
        <linearGradient id="cordG" x1="0" x2="1">
          <stop offset="0%" stopColor="#E2C98A" />
          <stop offset="50%" stopColor="#C9A45C" />
          <stop offset="100%" stopColor="#8C6A2A" />
        </linearGradient>
      </defs>
      <ellipse
        cx="160"
        cy="170"
        rx="120"
        ry="14"
        fill="#0F6B4F"
        opacity="0.18"
      />
      <g
        fill="none"
        stroke="url(#cordG)"
        strokeWidth="6"
        strokeLinecap="round"
      >
        <path d="M40 92 q120 -60 240 0" />
        <path d="M40 110 q120 -60 240 0" opacity="0.85" />
        <path d="M40 128 q120 -60 240 0" opacity="0.7" />
      </g>
      <g transform="translate(160 110)">
        <circle r="22" fill="#0F6B4F" stroke="#E2C98A" strokeWidth="2" />
        <path
          d="M0 8 C-6 2, -12 2, -12 -2 C-12 -6, -6 -7, 0 -3 C6 -7, 12 -6, 12 -2 C12 2, 6 2, 0 8 Z"
          fill="#E2C98A"
        />
      </g>
    </svg>
  );
}

function NecklaceVisual() {
  return (
    <svg viewBox="0 0 320 200" className="w-[78%] h-auto" aria-hidden>
      <defs>
        <radialGradient id="pendG" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#A7E3C5" />
          <stop offset="60%" stopColor="#0F6B4F" />
          <stop offset="100%" stopColor="#03281E" />
        </radialGradient>
      </defs>
      <path
        d="M40 50 q120 120 240 0"
        fill="none"
        stroke="#E2C98A"
        strokeWidth="2"
        strokeDasharray="2 3"
      />
      <g transform="translate(160 138)">
        <circle r="28" fill="url(#pendG)" stroke="#E2C98A" strokeWidth="1.5" />
        <circle
          r="36"
          fill="none"
          stroke="#E2C98A"
          strokeWidth="1"
          opacity="0.4"
        />
        <path
          d="M0 10 C-7 3, -16 3, -16 -3 C-16 -10, -8 -12, 0 -5 C8 -12, 16 -10, 16 -3 C16 3, 7 3, 0 10 Z"
          fill="#FAFAF7"
          opacity="0.85"
        />
      </g>
      <g fill="#E2C98A">
        <circle cx="56" cy="62" r="4" />
        <circle cx="56" cy="76" r="6" />
        <circle cx="264" cy="62" r="4" />
        <circle cx="264" cy="76" r="6" />
      </g>
    </svg>
  );
}
