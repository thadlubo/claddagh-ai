import {
  CelticPattern,
  EmeraldGlow,
  GoldHairline,
  KnotCorner,
  SectionHeader,
} from "./Decorations";
import RingMockup from "./RingMockup";

const SYMBOLS = [
  {
    glyph: "♥",
    label: "Heart",
    meaning: "Love",
    note: "Felt, then measured.",
  },
  {
    glyph: "✋",
    label: "Hands",
    meaning: "Friendship",
    note: "Now extended only to the approved.",
  },
  {
    glyph: "♛",
    label: "Crown",
    meaning: "Loyalty",
    note: "Verified by the system.",
  },
  {
    glyph: "✦",
    label: "Algorithm",
    meaning: "Permission",
    note: "The fourth, modern symbol.",
  },
];

export default function MeaningSection() {
  return (
    <section
      id="meaning"
      className="relative py-20 sm:py-24 lg:py-28 bg-white overflow-hidden"
      aria-labelledby="meaning-heading"
    >
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <EmeraldGlow
          className="left-[-12%] top-[40%] h-[420px] w-[420px]"
          intensity={0.18}
        />
      </div>

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Editorial copy */}
          <div className="lg:col-span-7">
            <SectionHeader eyebrow="Heritage · Reinterpreted">
              The Meaning of the{" "}
              <span className="italic font-editorial text-claddagh-rich">
                Claddagh Ring
              </span>
            </SectionHeader>

            <div className="mt-6 max-w-2xl space-y-5 text-claddagh-charcoal/85 text-[17px] leading-[1.7]">
              <p>
                The Claddagh ring contains three symbols: the heart for{" "}
                <em>love</em>, the hands for <em>friendship</em>, and the
                crown for <em>loyalty</em>. Its origins date back to the
                1700s near Limerick, and over time it became one of Ireland’s
                most recognised symbols of affection, identity, and
                belonging.
              </p>
              <p>
                Traditionally, how the ring is worn also carries meaning. On
                the right hand with the heart facing outward, it suggests
                the wearer is single. Facing inward, it can suggest they are
                in a relationship. On the left hand, the ring often marks
                engagement or marriage.
              </p>
              <p className="text-claddagh-deep font-medium">
                CladdaghAI reimagines this tradition for a future where love
                is no longer only felt. It is measured, filtered, scored,
                and approved.
              </p>
            </div>

            {/* Wear orientation diagrams */}
            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                { label: "Outward · Right", note: "Single", deg: 0 },
                {
                  label: "Inward · Right",
                  note: "In a relationship",
                  deg: 180,
                },
                {
                  label: "Inward · Left",
                  note: "Engaged or married",
                  deg: 180,
                },
              ].map((c) => (
                <div
                  key={c.label}
                  className="rounded-2xl border border-claddagh-grey/70 bg-claddagh-ivory/60 p-4
                             transition-all duration-500 hover:-translate-y-1
                             hover:border-claddagh-gold/45 hover:shadow-card"
                >
                  <div className="aspect-square grid place-items-center">
                    <div style={{ transform: `rotate(${c.deg}deg)` }}>
                      <RingMockup
                        variant="gold"
                        glow={false}
                        className="w-24 h-24"
                      />
                    </div>
                  </div>
                  <p className="eyebrow-gold text-[10px]">{c.label}</p>
                  <p className="font-display text-claddagh-deep text-base mt-0.5">
                    {c.note}
                  </p>
                </div>
              ))}
            </div>

            <GoldHairline className="mt-10" />
          </div>

          {/* Side panel — symbols */}
          <aside className="lg:col-span-5">
            <div className="glass card-hover group rounded-3xl p-7 sm:p-8 sticky top-32 relative">
              <KnotCorner className="absolute -top-3 -left-3 h-10 w-10" />
              <KnotCorner
                className="absolute -bottom-3 -right-3 h-10 w-10"
                flip
              />

              <p className="eyebrow-gold mb-3">Symbol Index</p>
              <h3 className="font-display text-2xl text-claddagh-deep leading-tight">
                Three traditions and one quiet new one.
              </h3>

              <GoldHairline className="mt-6 mb-6" />

              <ul className="divide-y divide-claddagh-grey/70">
                {SYMBOLS.map((s) => (
                  <li
                    key={s.label}
                    className="py-4 flex items-start gap-4 transition-transform hover:translate-x-1"
                  >
                    <span
                      className="grid place-items-center h-11 w-11 rounded-full
                                 bg-claddagh-mint text-claddagh-deep text-lg
                                 border border-claddagh-deep/10"
                      aria-hidden
                    >
                      {s.glyph}
                    </span>
                    <div className="flex-1">
                      <p className="font-display text-claddagh-deep text-lg leading-snug">
                        {s.label}{" "}
                        <span className="text-claddagh-gold">=</span>{" "}
                        <span className="italic font-editorial">
                          {s.meaning}
                        </span>
                      </p>
                      <p className="text-sm text-claddagh-charcoal/70 mt-0.5">
                        {s.note}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs text-claddagh-charcoal/55 italic font-editorial">
                The fourth symbol is not engraved. It is calculated.
              </p>
            </div>
          </aside>
        </div>

        <CelticPattern className="mt-16 h-7 opacity-60" tone="emerald" />
      </div>
    </section>
  );
}
