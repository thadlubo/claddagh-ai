# CladdaghAI

A speculative dystopian luxury landing page for a fictional AI-powered Irish
Claddagh ring brand. The site looks like a real premium jewellery e-commerce
homepage at first glance, then gradually reveals a darker, surveillance-tinged
future in which love is filtered, scored, and approved by the state.

> This is a **critical / speculative design** project. It is not a real
> product, jewellery company, government service, or matchmaking platform.
> No data is collected. Nothing ships.

---

## Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** (custom Claddagh design tokens)
- All ring imagery is **original SVG** — no copyrighted assets, no real photos.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (typically <http://localhost:5173>).

### Other scripts

- `npm run build` — type-check + production build.
- `npm run preview` — preview the production build.
- `npm run lint` — run the TypeScript project type-check.

## Project structure

```
src/
├── App.tsx
├── main.tsx
├── index.css
└── components/
    ├── Header.tsx
    ├── Hero.tsx
    ├── ProductCard.tsx
    ├── Products.tsx
    ├── HowItWorks.tsx
    ├── LaunchingSoon.tsx
    ├── MeaningSection.tsx
    ├── LegacySection.tsx
    ├── WhyBuy.tsx
    ├── Testimonials.tsx
    ├── Newsletter.tsx
    ├── Footer.tsx
    └── RingMockup.tsx   ← original stylised SVG ring (silver/gold/rose/platinum)
```

## Design tokens

Defined in `tailwind.config.js` under `theme.extend.colors.claddagh`:

| Token                  | Hex       | Use                                  |
| ---------------------- | --------- | ------------------------------------ |
| `claddagh-deep`        | `#064E3B` | Primary emerald — buttons, headings  |
| `claddagh-rich`        | `#0F6B4F` | Hover / accent emerald               |
| `claddagh-mint`        | `#E8F5EF` | Soft surfaces                        |
| `claddagh-ivory`       | `#FAFAF7` | Page background                      |
| `claddagh-gold`        | `#C9A45C` | Champagne gold details               |
| `claddagh-goldsoft`    | `#E2C98A` | Light gold highlights                |
| `claddagh-charcoal`    | `#1F2933` | Body text                            |
| `claddagh-grey`        | `#E5E7EB` | Borders / dividers                   |

Fonts:
- Headings: **Playfair Display** (and **Cormorant Garamond** italic accent)
- Body: **Inter**

Loaded via `<link>` in `index.html`.

## What to know about the copy

The text is intentionally beautiful, romantic, slightly clinical, and softly
unsettling. The dystopia is layered in with phrases like:

- "Government Alignment Trial — Ireland 2042"
- "The Ministry of Belonging"
- "approved encounter ritual"
- "Citizen Compatibility Profile"
- "Algorithm = Permission" (the fourth, modern Claddagh symbol)

Every section also carries a small disclaimer reminding the reader this is
fiction. The footer carries the formal speculative-design statement.

## Notes on imagery

There are **no external product photos**. The ring visuals in the hero,
product cards, meaning section, and legacy stack are all rendered from a
single reusable component (`RingMockup.tsx`) that draws an original
top-down Claddagh-style ring in SVG with multiple metal variants and an
optional glowing emerald "AI core". The Launching Soon section similarly
uses inline SVG illustrations for the glasses, bracelet, and pendant.

This keeps the project free of copyrighted assets from claddaghrings.com
or any other source.

## Deployment

The `npm run build` output is a static `dist/` folder that can be served
from any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages).
