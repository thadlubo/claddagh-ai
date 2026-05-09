import { CelticPattern, EmeraldGlow } from "./Decorations";
import RingMockup from "./RingMockup";

export default function LegacySection() {
  return (
    <section
      className="relative py-20 sm:py-24 lg:py-28
                 bg-gradient-to-b from-white via-claddagh-ivory to-claddagh-mint/40
                 border-y border-claddagh-grey/60 overflow-hidden"
      aria-labelledby="legacy-heading"
    >
      <EmeraldGlow
        className="bottom-[-160px] right-[-80px] h-[480px] w-[480px]"
        hue="gold"
        intensity={0.18}
      />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Heirloom rings stack */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative max-w-[460px] mx-auto">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  { variant: "gold" as const, glow: false, deg: -2 },
                  { variant: "silver" as const, glow: false, deg: 2, ty: 24 },
                  { variant: "rose" as const, glow: false, deg: 1, ty: 12 },
                  { variant: "platinum" as const, glow: true, deg: -1 },
                ].map((cfg, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-3xl bg-white border border-claddagh-grey/70 shadow-soft grid place-items-center p-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-card"
                    style={{
                      transform: `rotate(${cfg.deg}deg) translateY(${cfg.ty ?? 0}px)`,
                    }}
                  >
                    <RingMockup
                      variant={cfg.variant}
                      glow={cfg.glow}
                      className="w-full"
                    />
                  </div>
                ))}
              </div>

              <div
                aria-hidden
                className="absolute -inset-6 rounded-[2rem] -z-10
                           bg-claddagh-gold/10 blur-2xl"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <p className="eyebrow-gold mb-3">A Legacy That Lives On</p>
            <h2 id="legacy-heading" className="h-section text-balance">
              Worn daily.{" "}
              <span className="italic font-editorial text-claddagh-rich">
                Handed down.
              </span>{" "}
              Now interpreted.
            </h2>

            <div className="mt-6 max-w-2xl space-y-5 text-claddagh-charcoal/85 text-[17px] leading-[1.7]">
              <p>
                While the Claddagh ring’s origins date to the 1700s, its
                global appeal grew throughout the 19th and 20th centuries.
                In recent years, it has become a statement of identity and
                affection, worn by people across Ireland and around the
                world.
              </p>
              <p>
                Crafted in yellow gold, white gold, silver, and now
                speculative AI enabled materials, each piece is imagined as
                something worn daily and handed down through family lines.
                These rings are not just jewellery. They are heirlooms with
                a story.
              </p>
              <p className="text-claddagh-deep font-medium">
                In this future, however, the story is no longer written
                only by families. It is interpreted by systems.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="tag-emerald">Finely finished in Limerick</span>
              <span className="tag-gold">Lifetime calibration</span>
              <span className="tag-charcoal">
                Generational data optional
              </span>
            </div>
          </div>
        </div>

        <CelticPattern className="mt-16 h-7 opacity-50" tone="gold" />
      </div>
    </section>
  );
}
