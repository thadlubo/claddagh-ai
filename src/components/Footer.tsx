import { CelticPattern, FloatingParticles, GoldHairline } from "./Decorations";

const COLUMNS = [
  {
    title: "Rings",
    links: [
      "The Emerald Match Ring",
      "The Loyalty Signal Ring",
      "The Crown Protocol Ring",
      "The Heirloom Algorithm Ring",
    ],
  },
  {
    title: "Meaning",
    links: ["Heritage", "Symbol Index", "Wear Orientation", "Connemara Atelier"],
  },
  {
    title: "Ethics",
    links: [
      "Critical Design Statement",
      "Consent and Calibration",
      "Surveillance Disclosure",
      "Speculative Disclaimer",
    ],
  },
  {
    title: "Matchlist",
    links: [
      "Join the Trial",
      "Citizen Priority Mode",
      "Compatibility Officers",
      "Press · 2042",
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="relative bg-claddagh-deep text-claddagh-ivory pt-16 pb-10 overflow-hidden"
      aria-label="Site footer"
    >
      <GoldHairline className="absolute inset-x-0 top-0" />
      <div
        aria-hidden
        className="absolute inset-0 noise opacity-[0.18] mix-blend-overlay pointer-events-none"
      />
      <FloatingParticles count={14} tone="gold" className="opacity-70" />

      <div className="container-x relative">
        <CelticPattern className="h-8 mb-12 opacity-50" tone="gold" />

        {/* Top */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          <div className="lg:col-span-4">
            <a
              href="#top"
              className="inline-flex items-center gap-2"
              aria-label="CladdaghAI"
            >
              <span className="grid place-items-center h-9 w-9 rounded-full bg-claddagh-ivory/10 border border-claddagh-goldsoft/40">
                <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
                  <circle
                    cx="16"
                    cy="17"
                    r="11"
                    fill="none"
                    stroke="#E2C98A"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M16 11 L18 8 L20 10 L22 8 L20 13 Z"
                    fill="#E2C98A"
                  />
                  <path
                    d="M16 22 C12 18, 8 18, 8 14 C8 11, 13 10, 16 14 C19 10, 24 11, 24 14 C24 18, 20 18, 16 22 Z"
                    fill="#A7E3C5"
                  />
                </svg>
              </span>
              <span className="font-display text-2xl tracking-tight">
                Claddagh
                <span className="text-claddagh-goldsoft">AI</span>
              </span>
            </a>
            <p className="mt-5 text-claddagh-ivory/70 text-[15px] leading-relaxed max-w-sm">
              An imagined Irish heirloom for an imagined future, where love
              is no longer felt. It is issued, verified, and renewed.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {[
                { label: "Instagram", glyph: "◎" },
                { label: "X", glyph: "✕" },
                { label: "Notes", glyph: "✦" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="grid place-items-center h-9 w-9 rounded-full
                             border border-white/15 text-claddagh-ivory/85
                             transition-all hover:scale-105 hover:text-claddagh-goldsoft
                             hover:border-claddagh-goldsoft/60"
                >
                  <span aria-hidden className="text-sm">
                    {s.glyph}
                  </span>
                </a>
              ))}
            </div>

            <p className="mt-6 text-[11px] uppercase tracking-[0.32em] text-claddagh-goldsoft/80">
              University of Limerick
              <br />
              Interaction and Experience Design
            </p>
          </div>

          {COLUMNS.map((col) => (
            <nav
              key={col.title}
              className="lg:col-span-2"
              aria-label={col.title}
            >
              <p className="text-xs uppercase tracking-ultra-wide text-claddagh-goldsoft mb-4">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-[14px] text-claddagh-ivory/75 hover:text-claddagh-ivory
                                 transition-all inline-block hover:translate-x-1"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="py-8 border-b border-white/10">
          <div className="flex items-start gap-3 max-w-3xl">
            <span
              aria-hidden
              className="mt-1 inline-grid place-items-center h-5 w-5 rounded-full
                         border border-claddagh-goldsoft/50 text-claddagh-goldsoft text-[11px]"
            >
              !
            </span>
            <p className="text-[13px] text-claddagh-ivory/65 leading-relaxed italic font-editorial">
              Created in conjunction with the University of Limerick,
              Interaction and Experience Design. This is a fictional
              speculative design website created for critical design
              purposes. It is not affiliated with any government, jewellery
              company, or real matchmaking service. No data is collected and
              no products are for sale.
            </p>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-claddagh-ivory/55 tracking-[0.18em] uppercase">
            © 2042 · CladdaghAI · Made in Limerick, in another timeline
          </p>
          <ul className="flex items-center gap-5 text-xs text-claddagh-ivory/60">
            {["Critical Design Notes", "Press", "Disclaimer"].map((l) => (
              <li key={l}>
                <a
                  href="#"
                  className="hover:text-claddagh-ivory inline-block transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
