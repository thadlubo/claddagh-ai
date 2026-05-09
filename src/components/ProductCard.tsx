import RingMockup from "./RingMockup";

type Variant = "silver" | "rose" | "gold" | "platinum";

export interface ProductCardProps {
  name: string;
  price: string;
  description: string;
  material: string;
  aiFeature: string;
  badge?: string;
  variant: Variant;
  gemColor?: string;
  serial?: string;
}

export default function ProductCard({
  name,
  price,
  description,
  material,
  aiFeature,
  badge,
  variant,
  gemColor,
  serial,
}: ProductCardProps) {
  return (
    <article className="card card-hover group relative flex flex-col overflow-hidden">
      {/* Top badge */}
      {badge && (
        <div className="absolute left-4 top-4 z-10">
          <span className="tag-gold">
            <span aria-hidden>✦</span>
            {badge}
          </span>
        </div>
      )}

      {/* Wishlist icon */}
      <button
        type="button"
        aria-label="Save to favourites"
        className="absolute right-4 top-4 z-10 grid place-items-center h-9 w-9 rounded-full
                   bg-white/80 backdrop-blur border border-claddagh-grey/70
                   text-claddagh-charcoal/60 hover:text-claddagh-deep hover:border-claddagh-gold/50
                   transition"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Visual area. Pure CSS + SVG. */}
      <div
        className="relative aspect-[4/3] overflow-hidden
                   bg-gradient-to-b from-claddagh-mint/60 via-claddagh-ivory to-white"
      >
        <div
          aria-hidden
          className="absolute inset-0 noise opacity-50 pointer-events-none"
        />
        {/* concentric soft rings */}
        <svg
          aria-hidden
          viewBox="0 0 400 300"
          className="absolute inset-0 w-full h-full opacity-60 transition-transform duration-700 group-hover:scale-[1.04]"
        >
          <g fill="none" stroke="rgba(201,164,92,0.35)" strokeWidth="0.8">
            <circle cx="200" cy="150" r="118" strokeDasharray="1 4" />
            <circle cx="200" cy="150" r="92" />
            <circle cx="200" cy="150" r="64" strokeDasharray="2 5" />
          </g>
        </svg>
        {/* warm gold glow */}
        <div
          aria-hidden
          className="absolute -inset-12 rounded-full bg-claddagh-gold/[0.07]
                     [mask-image:radial-gradient(closest-side,white,transparent_70%)]
                     transition-all duration-700 group-hover:bg-claddagh-gold/[0.14] group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center p-6 transition-transform duration-700 group-hover:-translate-y-1 group-hover:scale-[1.04]">
          <RingMockup
            variant={variant}
            gemColor={gemColor}
            glow
            serial={serial}
            className="w-[78%] h-auto drop-shadow-[0_14px_22px_rgba(6,78,59,0.16)]"
          />
        </div>

        {/* hairline divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-claddagh-grey/70" />
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="tag-emerald">{material}</span>
          <span className="tag-charcoal">{aiFeature}</span>
        </div>

        <h3 className="h-card mt-4 leading-snug">{name}</h3>

        <p className="mt-2 text-sm text-claddagh-charcoal/75 leading-relaxed">
          {description}
        </p>

        <div className="mt-auto pt-6 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-[10px]">From</p>
            <p className="font-display text-2xl text-claddagh-deep leading-none mt-1">
              {price}
            </p>
          </div>
          <button
            type="button"
            className="btn-gold !px-5 !py-2.5 text-[13px]"
          >
            Reserve Now
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </article>
  );
}
