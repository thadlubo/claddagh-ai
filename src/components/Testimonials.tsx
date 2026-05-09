import { EmeraldGlow, SectionHeader } from "./Decorations";

interface Testimonial {
  name: string;
  location: string;
  quote: string;
  pairing: string;
  initials: string;
  hue: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Grace C.",
    location: "Galway",
    quote:
      "The ring told me to stop seeing three people I thought I liked. Six months later, I was matched with someone my family and the system both approved of.",
    pairing: "Pairing #00184 · Approved",
    initials: "GC",
    hue: "#0F6B4F",
  },
  {
    name: "Roslyn S.K.",
    location: "Limerick",
    quote:
      "I used to waste time on uncertain conversations. Now the ring glows before I even introduce myself.",
    pairing: "Pairing #00231 · Active",
    initials: "RS",
    hue: "#C9A45C",
  },
  {
    name: "Róisín & Pádraig",
    location: "Cork",
    quote:
      "Our bracelets wrapped at the same time during a government social trial. It felt romantic, even if we knew it was being recorded.",
    pairing: "Pairing #00097 · Bonded",
    initials: "R&P",
    hue: "#1F8B68",
  },
  {
    name: "Tadhg L.",
    location: "Clare",
    quote:
      "The AI glasses blurred my ex at a wedding. Honestly, that feature alone was worth the subscription.",
    pairing: "Pairing #00342 · Stable",
    initials: "TL",
    hue: "#8C6A2A",
  },
];

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="relative py-20 sm:py-24 lg:py-28 bg-claddagh-ivory overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <EmeraldGlow
        className="-top-20 right-[-10%] h-[400px] w-[400px]"
        intensity={0.18}
      />
      <EmeraldGlow
        className="bottom-[-160px] left-[-10%] h-[420px] w-[420px]"
        hue="gold"
        intensity={0.16}
      />

      <div className="container-x relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Approved Pairings"
            lede="Reviews shared with the Ministry of Belonging."
          >
            Reviews from{" "}
            <span className="italic font-editorial text-claddagh-rich">
              citizens the system was right about
            </span>
            .
          </SectionHeader>

          <div className="flex items-center gap-2 text-sm text-claddagh-charcoal/70">
            <span className="inline-flex h-2 w-2 rounded-full bg-claddagh-rich animate-soft-pulse" />
            12,418 active pairings · last verified today
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.name + i}
              className="card card-hover group relative p-7 sm:p-8 overflow-hidden"
            >
              <span
                aria-hidden
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl opacity-0
                           transition-opacity duration-700 group-hover:opacity-25"
                style={{ backgroundColor: t.hue }}
              />
              <span
                aria-hidden
                className="absolute right-7 top-6 font-display text-[5rem] leading-none text-claddagh-gold/15 select-none"
              >
                “
              </span>

              <div className="flex items-center gap-4 relative">
                <span
                  className="grid place-items-center h-12 w-12 rounded-full
                             font-display text-lg text-white
                             ring-1 ring-claddagh-deep/10"
                  style={{ backgroundColor: t.hue }}
                  aria-hidden
                >
                  {t.initials}
                </span>
                <div>
                  <p className="font-display text-claddagh-deep text-lg leading-tight">
                    {t.name}
                  </p>
                  <p className="text-xs text-claddagh-charcoal/60 tracking-[0.18em] uppercase">
                    {t.location}
                  </p>
                </div>
              </div>

              <blockquote className="mt-5 text-[17px] leading-relaxed font-editorial italic text-claddagh-charcoal/90 relative">
                “{t.quote}”
              </blockquote>

              <div className="mt-6 pt-5 border-t border-claddagh-grey/70 flex items-center justify-between">
                <span className="eyebrow-gold text-[10px]">{t.pairing}</span>
                <span className="flex items-center gap-1 text-claddagh-gold">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg
                      key={j}
                      viewBox="0 0 20 20"
                      className="h-3.5 w-3.5"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M10 1.5l2.7 5.5 6 .9-4.3 4.2 1 6L10 15.4 4.6 18l1-6L1.3 7.9l6-.9z" />
                    </svg>
                  ))}
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-xs text-claddagh-charcoal/55 italic">
          Testimonials are fictional and exist only within the world of this
          speculative design project. Any resemblance to real persons, real
          pairings, or real ministries is intentional as critique, not as
          fact.
        </p>
      </div>
    </section>
  );
}
