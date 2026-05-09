import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Rings", href: "#rings" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Meaning", href: "#meaning" },
  { label: "Launching Soon", href: "#launching" },
  { label: "Reviews", href: "#reviews" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Trial banner */}
      <div
        className="w-full bg-claddagh-deep text-claddagh-ivory/90 text-[11px] sm:text-xs"
        role="region"
        aria-label="Trial notice"
      >
        <div className="container-x flex items-center justify-center gap-2 py-2 tracking-[0.22em] uppercase">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full bg-claddagh-gold animate-soft-pulse"
            aria-hidden
          />
          <span className="font-medium">
            Government Alignment Trial · Ireland 2042
          </span>
          <span
            className="hidden sm:inline text-claddagh-ivory/50"
            aria-hidden
          >
            ·
          </span>
          <span className="hidden sm:inline text-claddagh-ivory/60">
            Citizen enrolment now open
          </span>
        </div>
      </div>

      {/* Nav */}
      <div
        className={[
          "transition-all duration-500 border-b",
          scrolled
            ? "bg-white/85 backdrop-blur-md border-claddagh-grey/70 shadow-soft"
            : "bg-claddagh-ivory/70 backdrop-blur-sm border-transparent",
        ].join(" ")}
      >
        <div className="container-x flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <a
            href="#top"
            className="flex items-center gap-2 group"
            aria-label="CladdaghAI home"
          >
            <span className="relative inline-flex h-8 w-8 items-center justify-center">
              <span
                className="absolute inset-0 rounded-full bg-claddagh-mint"
                aria-hidden
              />
              <svg
                viewBox="0 0 32 32"
                className="relative h-7 w-7"
                aria-hidden
              >
                <circle
                  cx="16"
                  cy="17"
                  r="11"
                  fill="none"
                  stroke="#C9A45C"
                  strokeWidth="1.5"
                />
                <path
                  d="M16 11 L18 8 L20 10 L22 8 L20 13 Z"
                  fill="#C9A45C"
                />
                <path
                  d="M16 22 C12 18, 8 18, 8 14 C8 11, 13 10, 16 14 C19 10, 24 11, 24 14 C24 18, 20 18, 16 22 Z"
                  fill="#0F6B4F"
                />
              </svg>
            </span>
            <span className="font-display text-[1.35rem] leading-none text-claddagh-deep tracking-tight">
              Claddagh
              <span className="text-claddagh-gold">AI</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-9"
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-claddagh-charcoal/85 hover:text-claddagh-deep
                           transition-colors relative
                           after:absolute after:left-0 after:right-0 after:-bottom-1
                           after:h-px after:scale-x-0 after:bg-claddagh-gold
                           after:transition-transform hover:after:scale-x-100"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#matchlist"
              className="hidden sm:inline-flex btn-primary"
            >
              Join the Matchlist
              <span aria-hidden>→</span>
            </a>

            {/* Mobile toggle */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full
                         border border-claddagh-deep/15 text-claddagh-deep
                         hover:bg-white transition"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label="Toggle navigation"
              onClick={() => setOpen((v) => !v)}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                {open ? (
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div id="mobile-nav" className="lg:hidden overflow-hidden">
            <div className="container-x py-4 flex flex-col gap-1 border-t border-claddagh-grey/60">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-base text-claddagh-charcoal hover:text-claddagh-deep"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#matchlist"
                onClick={() => setOpen(false)}
                className="btn-primary mt-3 w-full"
              >
                Join the Matchlist
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
