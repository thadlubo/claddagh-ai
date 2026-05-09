/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        claddagh: {
          deep: "#064E3B",
          rich: "#0F6B4F",
          mint: "#E8F5EF",
          ivory: "#FAFAF7",
          gold: "#C9A45C",
          goldsoft: "#E2C98A",
          charcoal: "#1F2933",
          grey: "#E5E7EB",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        editorial: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      letterSpacing: {
        "ultra-wide": "0.32em",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.06)",
        card: "0 1px 2px rgba(6, 78, 59, 0.04), 0 12px 40px rgba(6, 78, 59, 0.08)",
        gold: "0 0 0 1px rgba(201, 164, 92, 0.35), 0 12px 40px rgba(201, 164, 92, 0.18)",
      },
      backgroundImage: {
        "noise-grain":
          "radial-gradient(rgba(31,41,51,0.04) 1px, transparent 1px)",
        "emerald-fade":
          "linear-gradient(180deg, #FAFAF7 0%, #F4F8F3 60%, #E8F5EF 100%)",
        "gold-line":
          "linear-gradient(90deg, transparent 0%, #C9A45C 30%, #E2C98A 50%, #C9A45C 70%, transparent 100%)",
      },
      animation: {
        "fade-up": "fade-up 0.9s ease-out both",
        "soft-pulse": "soft-pulse 4s ease-in-out infinite",
        shimmer: "shimmer 6s ease-in-out infinite",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "soft-pulse": {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" },
        },
        shimmer: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
