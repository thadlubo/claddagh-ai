import type { ReactNode } from "react";
import { EmeraldGlow, GoldHairline, SectionHeader } from "./Decorations";

interface Step {
  step: string;
  title: string;
  body: string;
  status: string;
  icon: ReactNode;
}

const STEPS: Step[] = [
  {
    step: "01",
    title: "Wear the Ring",
    body: "The ring quietly learns your pulse, emotional rhythms, movement, and social preferences, building a private profile of your romantic self.",
    status: "Onboarding · 7 days",
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" aria-hidden>
        <circle
          cx="24"
          cy="26"
          r="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M24 16 L26 12 L29 14 L32 12 L29 18 Z"
          fill="currentColor"
          opacity="0.85"
        />
        <path
          d="M24 32 C20 28, 16 28, 16 24 C16 21, 21 20, 24 24 C27 20, 32 21, 32 24 C32 28, 28 28, 24 32 Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    step: "02",
    title: "The System Filters Encounters",
    body: "AI identifies which people you should approach, avoid, ignore, or report as low compatibility. The world quietly sorts itself around you.",
    status: "Continuous · Always on",
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" aria-hidden>
        <path
          d="M6 10h36L29 26v12l-10 4V26z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="38" cy="36" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Love Is Approved",
    body: "When both rings agree, a soft green signal is released. The wearers are guided through a brief interaction ritual approved by the state.",
    status: "Sanctioned · Encouraged",
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" aria-hidden>
        <path
          d="M10 24l8 8 20-20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.4"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-20 sm:py-24 lg:py-28
                 bg-gradient-to-b from-claddagh-mint/40 via-claddagh-ivory to-white
                 border-y border-claddagh-grey/60 overflow-hidden"
      aria-labelledby="how-heading"
    >
      <EmeraldGlow
        className="top-[-120px] left-1/2 -translate-x-1/2 h-[460px] w-[760px]"
        intensity={0.22}
      />

      <div className="container-x relative">
        <SectionHeader
          eyebrow="How It Works"
          lede="CladdaghAI is designed to feel invisible. You wear the ring. The system listens. Eventually, the right person is no longer a hope. They are a notification."
        >
          Three quiet stages, from{" "}
          <span className="italic font-editorial text-claddagh-rich">
            wearer to approved pair
          </span>
          .
        </SectionHeader>

        <ol className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* connecting hairline (desktop) */}
          <div
            aria-hidden
            className="hidden md:block absolute left-[8%] right-[8%] top-[3.25rem]
                       h-px bg-gradient-to-r from-transparent via-claddagh-gold/50 to-transparent"
          />

          {STEPS.map((s) => (
            <li key={s.step} className="relative">
              <div className="card card-hover p-7 sm:p-8 h-full flex flex-col group">
                <div className="flex items-center justify-between">
                  <span className="font-display text-claddagh-gold text-sm tracking-[0.32em]">
                    Step {s.step}
                  </span>
                  <span
                    className="grid place-items-center h-12 w-12 rounded-full
                               bg-claddagh-mint text-claddagh-deep
                               border border-claddagh-deep/10
                               transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105"
                  >
                    {s.icon}
                  </span>
                </div>

                <h3 className="font-display text-2xl text-claddagh-deep mt-6 leading-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-claddagh-charcoal/80">
                  {s.body}
                </p>

                <div className="mt-6 pt-5 border-t border-claddagh-grey/70">
                  <span className="eyebrow text-[10px]">{s.status}</span>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-12 max-w-2xl text-sm text-claddagh-charcoal/65 italic font-editorial">
          “Romantic friction is a public health concern.” Ministry of
          Belonging, internal memo, 2041.
        </p>

        <GoldHairline className="mt-12" />
      </div>
    </section>
  );
}
