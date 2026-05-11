import {
  EmeraldGlow,
  FloatingParticles,
  GoldHairline,
} from "./Decorations";

/** Respects `vite.config.ts` `base` (e.g. /claddagh-ai/) so the file is not requested from the wrong path. */
const HERO_RING_VIDEO_SRC = `${import.meta.env.BASE_URL}RingAnimation.mp4`;

const TRUST_BADGES = [
  { label: "AI Match Scoring", icon: "✦" },
  { label: "Biometric Affection Signals", icon: "❤" },
  { label: "Government Mandated Trial", icon: "✺" },
  { label: "Irish Identity Priority Mode", icon: "☘" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-emerald-fade"
      aria-labelledby="hero-heading"
    >
      {/* Layered abstract backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <EmeraldGlow
          className="-top-32 -left-24 h-[520px] w-[520px]"
          hue="emerald"
          intensity={0.35}
        />
        <EmeraldGlow
          className="bottom-[-160px] right-[-120px] h-[600px] w-[600px]"
          hue="gold"
          intensity={0.28}
        />
        <EmeraldGlow
          className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[760px] w-[760px]"
          hue="ivory"
          intensity={0.25}
        />
      </div>

      <div
        aria-hidden
        className="absolute inset-0 noise opacity-50 pointer-events-none"
      />

      {/* Floating particles */}
      <FloatingParticles count={16} tone="gold" />

      <div className="container-x relative pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-24 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Copy */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-claddagh-gold/70" aria-hidden />
              <span className="eyebrow-gold">
                CladdaghAI · Heirloom Intelligence
              </span>
            </div>

            <h1 id="hero-heading" className="h-display text-balance">
              The Claddagh Ring
              <br className="hidden sm:block" />{" "}
              <span className="italic font-editorial text-claddagh-rich">
                That Finds Love
              </span>{" "}
              For You.
            </h1>

            <p className="mt-7 max-w-xl text-lg sm:text-xl leading-relaxed text-claddagh-charcoal/85">
              A future Irish heirloom powered by AI compatibility, biometric
              emotion reading, and encounter guidance approved by the state.
            </p>

            <p className="mt-3 max-w-xl text-base text-claddagh-charcoal/65 italic font-editorial">
              Love, loyalty, and friendship. Now interpreted through
              predictive systems.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#rings" className="btn-primary">
                Explore the Rings
                <span aria-hidden>→</span>
              </a>
              <a href="#how-it-works" className="btn-ghost">
                How Matching Works
              </a>
            </div>
            
            {/* Trust badges */}
            <div className="mt-10">
              <p className="eyebrow mb-3">Trial grade signals</p>
              <ul
                role="list"
                className="flex flex-wrap gap-2 sm:gap-2.5 max-w-2xl"
              >
                {TRUST_BADGES.map((b) => (
                  <li key={b.label}>
                    <span
                      className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur
                                 border border-claddagh-deep/10 px-3.5 py-1.5
                                 text-xs sm:text-[13px] text-claddagh-deep
                                 shadow-[0_1px_2px_rgba(15,23,42,0.04)]
                                 transition-all hover:-translate-y-[2px]
                                 hover:border-claddagh-gold/45 hover:shadow-card"
                    >
                      <span
                        className="text-claddagh-gold leading-none"
                        aria-hidden
                      >
                        {b.icon}
                      </span>
                      {b.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Visual column — ring animation (ruby → emerald AI core) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-[540px]">
              {/* decorative gold ring outline behind */}
              <div
                aria-hidden
                className="absolute -inset-6 rounded-full
                           border border-claddagh-gold/35
                           [mask-image:radial-gradient(closest-side,white,transparent_72%)]"
              />
              <div
                aria-hidden
                className="absolute -inset-14 rounded-full
                           border border-claddagh-deep/10
                           [mask-image:radial-gradient(closest-side,white,transparent_75%)]"
              />

              <div className="relative isolate glass rounded-[28px] p-4 sm:p-6 overflow-hidden transition-transform duration-500 hover:-translate-y-1">
                {/* soft inner tint over video (stays under floating chips) */}
                <div
                  aria-hidden
                  className="absolute inset-0 z-[1] bg-gradient-to-b from-white/25 via-claddagh-mint/25 to-white/20 pointer-events-none"
                />
                <div className="relative z-[2] rounded-2xl overflow-hidden shadow-[0_18px_30px_rgba(6,78,59,0.12)]">
                  <video
                    className="w-full h-auto block align-middle"
                    src={HERO_RING_VIDEO_SRC}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    aria-label="Animated Claddagh ring: ruby core transitioning to emerald AI core"
                  />
                </div>

                {/* Floating chips: z above video + tint for product-style overlays */}
                <div
                  className="pointer-events-none absolute -left-4 sm:-left-8 top-10 sm:top-14 z-20
                             max-w-[220px] hidden sm:block"
                  role="note"
                  aria-label="Vibration advisory: elevated avoidance signal for a flagged profile"
                >
                  <div
                    className="glass rounded-2xl px-4 py-3 text-left shadow-[0_10px_40px_rgba(15,23,42,0.14)]
                               ring-1 ring-white/70 backdrop-blur-md"
                  >
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-amber-900/75">
                      Vibration advisory
                    </p>
                    <p className="font-display text-claddagh-deep text-lg leading-snug mt-1">
                      Avoid contact
                    </p>
                    <p className="text-[11px] text-claddagh-charcoal/65 mt-0.5 leading-snug">
                      Resonance recommends distance.
                    </p>
                    <div className="mt-2.5 h-1.5 rounded-full bg-amber-100/90 overflow-hidden">
                      <div
                        className="h-full w-[88%] rounded-full bg-gradient-to-r from-amber-700 to-amber-500"
                        aria-hidden
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="pointer-events-none absolute -right-3 sm:-right-6 bottom-8 sm:bottom-12 z-20
                             max-w-[230px] hidden sm:block"
                  role="note"
                  aria-label="Compatibility score panel"
                >
                  <div
                    className="glass rounded-2xl px-4 py-3 text-left shadow-[0_10px_40px_rgba(15,23,42,0.14)]
                               ring-1 ring-white/70 backdrop-blur-md"
                  >
                    <p className="eyebrow-gold text-[10px]">Compatibility</p>
                    <p className="font-display text-claddagh-deep text-2xl leading-tight mt-0.5">
                      94.6%
                    </p>
                    <p className="text-[11px] text-claddagh-charcoal/70 mt-0.5">
                      Approved. Encounter pending.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-center text-[11px] uppercase tracking-[0.32em] text-claddagh-charcoal/55">
                Édition Première · Ruby & Emerald AI Core · 18kt
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* gold hairline at bottom */}
      <div className="container-x">
        <GoldHairline />
      </div>
    </section>
  );
}
