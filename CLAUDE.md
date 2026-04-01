# Bunkr Burger Factory — Project Guidelines

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4 (`@import "tailwindcss"` — no config file)
- Figma MCP server for design assets

## Design Baseline

All sections are designed for a **1920px-wide** frame. Pixel positions are converted to
percentages relative to that frame width/height and applied via Tailwind `inset-[top%_right%_bottom%_left%]`.

Page background: `#0C1011`

## Typography

All fonts are loaded from Google Fonts in `src/index.css` and registered as Tailwind
utility classes via `@theme`:

| Utility class  | Font family     | Available weights | Use case                        |
| -------------- | --------------- | ----------------- | ------------------------------- |
| `font-kufam`   | Kufam           | 700 (bold)        | Hero title "BUNKR", large brand text |
| `font-league`  | League Spartan  | 600, 700          | Subtitles, buttons, nav links   |
| `font-kulim`   | Kulim Park      | 400, 700          | Body text, cards, numbers       |

**Always use these utility classes** — never use `font-['Kufam',sans-serif]` inline syntax.

```css
/* src/index.css — @theme block */
--font-kufam:  'Kufam', sans-serif;
--font-league: 'League Spartan', sans-serif;
--font-kulim:  'Kulim Park', sans-serif;
```

## Colors

| Token         | Value     | Use case                     |
| ------------- | --------- | ---------------------------- |
| `#df9a1b`     | Gold      | Section titles, BUNKR text   |
| `#f3731c`     | Orange    | CTA buttons (VER MENÚ, etc.) |
| `#d9d9d9`     | Light gray| Secondary buttons, body text |
| `#1b1b1b`     | Near black| Button text on light bg      |
| `#0C1011`     | Dark bg   | Page & section backgrounds   |
| `#131718`     | Card bg   | Info/service cards           |
| `#1b1b1b`     | Footer bg | Footer background            |

## Layout Conventions

- `#root` is `max-width: 1920px; margin: 0 auto` — all sections fit within this.
- Header: `absolute top-0 left-0 w-full z-50` (transparent, overlays Hero).
- Sections with lateral padding use `px-[100px]`.
- Spacing between sections: `mt-[80px]` className prop on the section component.
- `border-0 outline-none` on sections and cards to suppress Tailwind v4's default border.

## Known Tailwind v4 Quirks

- **Default border color**: Tailwind v4 sets `border-color: currentColor` by default,
  which causes visible white borders. Fixed globally with `--default-border-color: transparent`
  in the `@theme` block. Also add `border-0 outline-none` to affected elements.
- **`color-scheme`**: Set to `dark` in `:root` to prevent browser white flash.

## Component Structure

```
src/
  components/
    organisms/
      Header.tsx
      Hero.tsx
      BestBurgers.tsx
      Information.tsx
      Services.tsx
      Location.tsx
      ActionSection.tsx
      Footer.tsx
  constants/
    assets.ts       ← Figma MCP asset URLs (logo, cart icon, etc.)
  pages/
    Home.tsx
```

## Figma File

File key: `BbIpqCoQLXQ5lthwVaIkT1` — "Bunkr Burger Factory (Community)"
