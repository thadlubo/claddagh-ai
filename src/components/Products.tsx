import { CelticPattern, EmeraldGlow, SectionHeader } from "./Decorations";
import ProductCard, { type ProductCardProps } from "./ProductCard";

const PRODUCTS: ProductCardProps[] = [
  {
    name: "The Emerald Match Ring",
    price: "€349",
    description:
      "A classic silver Claddagh with an emerald AI core that quietly glows when a compatible person enters your approved encounter radius.",
    material: "Sterling Silver",
    aiFeature: "Proximity Match Glow",
    variant: "silver",
    gemColor: "#0F6B4F",
    serial: "EMR · 0349",
  },
  {
    name: "The Loyalty Signal Ring",
    price: "€499",
    description:
      "Uses emotional pattern analysis to suggest whether a relationship should continue, pause, or be reviewed by the system.",
    material: "Brushed Platinum",
    aiFeature: "Emotional Pattern Analysis",
    variant: "platinum",
    gemColor: "#1F8B68",
    serial: "LYL · 0499",
  },
  {
    name: "The Crown Protocol Ring",
    price: "€699",
    description:
      "Premium gold edition with loyalty tracking, biometric bonding scores, and predictive lasting compatibility ranking.",
    material: "18kt Gold",
    aiFeature: "Lasting Compatibility Ranking",
    badge: "Most Aligned",
    variant: "gold",
    gemColor: "#0F6B4F",
    serial: "CRN · 0699",
  },
  {
    name: "The Heirloom Algorithm Ring",
    price: "€899",
    description:
      "A future family heirloom that stores generational compatibility data and recommends matches aligned with family, nation, and system values.",
    material: "Rose Gold · Heritage",
    aiFeature: "Generational Match Memory",
    badge: "Édition Première",
    variant: "rose",
    gemColor: "#0F6B4F",
    serial: "HLM · 0899",
  },
];

export default function Products() {
  return (
    <section
      id="rings"
      className="relative bg-claddagh-ivory py-20 sm:py-24 lg:py-28 overflow-hidden"
      aria-labelledby="rings-heading"
    >
      {/* abstract decorations */}
      <EmeraldGlow
        className="-top-24 left-[-10%] h-[420px] w-[420px]"
        intensity={0.18}
      />
      <EmeraldGlow
        className="bottom-[-100px] right-[-8%] h-[460px] w-[460px]"
        hue="gold"
        intensity={0.15}
      />

      <div className="container-x relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <SectionHeader
            eyebrow="The Collection · 2042"
            lede="Each piece is finely finished in our Connemara atelier and calibrated against the National Romantic Stability Programme. Every ring is a quiet contract between you, your partner, and the state."
          >
            Four rings, four ways the system{" "}
            <span className="italic font-editorial text-claddagh-rich">
              approves of you
            </span>
            .
          </SectionHeader>

          <div className="flex items-center gap-3 text-sm text-claddagh-charcoal/70">
            <span className="inline-flex h-2 w-2 rounded-full bg-claddagh-gold animate-soft-pulse" />
            Reservations open · Q3 2042
          </div>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-7">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>

        <p className="mt-10 text-xs text-claddagh-charcoal/55 max-w-2xl">
          Prices shown in Euro. All rings ship with a Citizen Compatibility
          Profile and require enrolment in the trial. Renderings are
          speculative. This is a fictional design project.
        </p>

        <CelticPattern className="mt-14 h-7 opacity-60" />
      </div>
    </section>
  );
}
