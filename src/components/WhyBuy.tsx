import type { ReactNode } from "react";
import { CelticPattern, FloatingParticles } from "./Decorations";

interface Feature {
  title: string;
  body: string;
  icon: ReactNode;
  span?: "sm" | "md" | "lg";
}

const FEATURES: Feature[] = [
  {
    title: "Government Approved",
    body: "Part of the National Romantic Stability Programme, designed to increase compatible lasting pairings across Ireland.",
    span: "lg",
    icon: (
      <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden>
        <path
          d="M16 3l11 4v8c0 7-4.6 11.5-11 14-6.4-2.5-11-7-11-14V7l11-4z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M11 16l4 4 7-8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Encounter Filtering",
    body: "Reduce emotionally inefficient meetings by allowing the system to guide who enters your social field.",
    icon: (
      <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden>
        <path
          d="M4 6h24L19 17v8l-6 3V17z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Irish Citizen Priority Mode",
    body: "Optional matching parameters designed for future population planning, cultural continuity, and approved family formation.",
    icon: (
      <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden>
        <path
          d="M16 4c-3 4-3 7 0 10 3-3 3-6 0-10z"
          fill="currentColor"
          opacity="0.85"
        />
        <path
          d="M9 13c1 5 4 7 7 7s6-2 7-7c-3 1-5 1-7-1-2 2-4 2-7 1z"
          fill="currentColor"
          opacity="0.6"
        />
        <circle
          cx="16"
          cy="22"
          r="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    ),
  },
  {
    title: "Compatibility Before Conversation",
    body: "Know whether someone is worth meeting before either of you speaks.",
    icon: (
      <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden>
        <path
          d="M6 8h14a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4h-7l-5 4v-4H6z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="13" cy="14" r="1.4" fill="currentColor" />
        <circle cx="18" cy="14" r="1.4" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Trackable Affection",
    body: "Every signal, pause, pulse, and repeated encounter becomes part of your romantic identity profile.",
    span: "md",
    icon: (
      <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden>
        <path
          d="M3 18h5l3-9 4 16 3-11 3 6h8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function WhyBuy() {
  return (
    <section
      className="relative py-20 sm:py-24 lg:py-28 bg-claddagh-deep text-claddagh-ivory overflow-hidden"
      aria-labelledby="why-heading"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 40% at 80% 0%, rgba(201,164,92,0.18), transparent 60%)," +
            "radial-gradient(ellipse 50% 35% at 0% 100%, rgba(167,227,197,0.10), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 noise opacity-[0.18] mix-blend-overlay"
      />
      <FloatingParticles count={20} tone="gold" />

      <div className="container-x relative">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-ultra-wide font-medium text-claddagh-goldsoft mb-3">
            Why Choose CladdaghAI
          </p>
          <h2
            id="why-heading"
            className="h-section !text-claddagh-ivory text-balance"
          >
            Five quiet reasons the system is{" "}
            <span className="italic font-editorial text-claddagh-goldsoft">
              already wearing you
            </span>
            .
          </h2>
          <p className="mt-4 text-claddagh-ivory/75 text-base sm:text-lg max-w-2xl">
            CladdaghAI is engineered for stability. For families. For
            continuity. For a country that wants to know, softly, who you
            should love.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className={[
                "group relative rounded-2xl p-7 sm:p-8 h-full",
                "bg-white/5 backdrop-blur-sm border border-white/10",
                "transition-all duration-500",
                "hover:-translate-y-1 hover:bg-white/[0.08]",
                "hover:border-claddagh-goldsoft/45 hover:shadow-[0_24px_70px_rgba(0,0,0,0.35)]",
                f.span === "lg"
                  ? "lg:col-span-2"
                  : f.span === "md"
                  ? "md:col-span-2 lg:col-span-1"
                  : "",
              ].join(" ")}
            >
              <div className="flex items-center gap-4">
                <span
                  className="grid place-items-center h-12 w-12 rounded-full
                             bg-claddagh-goldsoft/15 text-claddagh-goldsoft
                             border border-claddagh-goldsoft/30
                             transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105"
                >
                  {f.icon}
                </span>
                <h3 className="font-display text-xl sm:text-2xl text-claddagh-ivory leading-tight">
                  {f.title}
                </h3>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-claddagh-ivory/80">
                {f.body}
              </p>

              <span
                aria-hidden
                className="absolute inset-x-7 bottom-5 h-px origin-left scale-x-[0.3] opacity-0
                           bg-gradient-to-r from-transparent via-claddagh-goldsoft/40 to-transparent
                           transition-all duration-700 group-hover:scale-x-100 group-hover:opacity-100"
              />
            </article>
          ))}
        </div>

        <div className="mt-12 flex items-start gap-3 max-w-2xl text-claddagh-ivory/65">
          <span
            aria-hidden
            className="mt-1 inline-grid place-items-center h-5 w-5 rounded-full
                       border border-claddagh-goldsoft/50 text-claddagh-goldsoft text-[11px]"
          >
            !
          </span>
          <p className="text-sm italic font-editorial">
            CladdaghAI is a fictional speculative design project exploring
            love, surveillance, national identity, and algorithmic control.
            No real product, government, or matchmaking service is being
            offered here.
          </p>
        </div>

        <CelticPattern className="mt-16 h-7 opacity-70" tone="gold" />
      </div>
    </section>
  );
}
