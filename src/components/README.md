# Header Component System - Atomic Design

This directory contains the header component system built using **Atomic Design** principles.

## 📐 Structure

```
components/
├── atoms/              # Smallest, reusable building blocks
│   ├── Logo.tsx        # Brand logo image
│   ├── NavLink.tsx     # Single navigation link
│   ├── Icon.tsx        # Generic icon component
│   └── PhoneNumber.tsx # Phone number text
├── molecules/          # Groups of atoms functioning together
│   ├── Navigation.tsx  # Collection of nav links
│   └── HeaderActions.tsx # Phone + Cart icon together
├── organisms/          # Complete, independent sections
│   └── Header.tsx      # Full header component
└── index.ts            # Barrel exports
```

## 🧬 Atomic Design Levels

### Atoms
Smallest functional units - single UI elements with clear purpose:
- **Logo**: Displays brand logo image
- **NavLink**: Single clickable navigation link
- **Icon**: Generic icon wrapper (cart, etc.)
- **PhoneNumber**: Phone number text display

### Molecules
Combinations of atoms that work together:
- **Navigation**: Multiple nav links in a group
- **HeaderActions**: Phone number + cart icon together

### Organisms
Complete, independent sections:
- **Header**: Full header combining logo, navigation, and actions

## 📦 Usage

### Basic Usage

```tsx
import { Header } from "@/components";

export default function Home() {
  return (
    <Header
      logoSrc="/assets/logo.png"
      cartIconSrc="/assets/cart.svg"
      phoneNumber="(+506) 1234-5678"
    />
  );
}
```

### Custom Navigation Items

```tsx
import { Header } from "@/components";

const customNav = [
  { href: "/about", label: "ABOUT US" },
  { href: "/menu", label: "MENU" },
  { href: "/contact", label: "CONTACT" },
];

export default function Home() {
  return (
    <Header
      logoSrc="/assets/logo.png"
      navigationItems={customNav}
      cartIconSrc="/assets/cart.svg"
    />
  );
}
```

### Individual Atoms

```tsx
import { Logo, NavLink, Icon, PhoneNumber } from "@/components";

export default function CustomHeader() {
  return (
    <header>
      <Logo src="/logo.png" width={80} height={80} />
      <NavLink href="/menu" label="Menu" />
      <Icon src="/cart.svg" alt="Cart" />
      <PhoneNumber number="(+506) 1234-5678" />
    </header>
  );
}
```

## 🎨 Styling

All components use **Tailwind CSS** with custom font and color specifications from Figma:

- **Font**: League Spartan Bold
- **Text Color**: `#d9d9d9`
- **Font Size**: 14px
- **Letter Spacing**: 0.7px
- **Background**: `rgba(4,12,13,0.05)`

### Customizing Styles

Pass `className` prop to any component to add additional Tailwind classes:

```tsx
<Header
  logoSrc="/logo.png"
  cartIconSrc="/cart.svg"
  className="bg-slate-900"
/>

<Navigation
  items={navItems}
  className="gap-8"
/>
```

## 🔧 Props Reference

### Header
```ts
interface HeaderProps {
  logoSrc: string;                    // Logo image URL
  navigationItems?: NavigationItem[]; // Nav items (default provided)
  phoneNumber?: string;               // Phone number to display
  cartIconSrc?: string;               // Cart icon URL
  className?: string;                 // Additional Tailwind classes
}

interface NavigationItem {
  href: string;  // Navigation link href
  label: string; // Link text
}
```

### Logo
```ts
interface LogoProps {
  src: string;           // Image URL
  alt?: string;          // Alt text
  width?: number;        // Width in pixels (default: 74)
  height?: number;       // Height in pixels (default: 66)
  className?: string;    // Additional Tailwind classes
}
```

### NavLink
```ts
interface NavLinkProps {
  href: string;       // Link destination
  label: string;      // Link text
  className?: string; // Additional Tailwind classes
}
```

### Icon
```ts
interface IconProps {
  src: string;        // Icon image URL
  alt?: string;       // Alt text
  width?: number;     // Width in pixels (default: 24)
  height?: number;    // Height in pixels (default: 24)
  className?: string; // Additional Tailwind classes
}
```

### PhoneNumber
```ts
interface PhoneNumberProps {
  number: string;     // Phone number text
  className?: string; // Additional Tailwind classes
}
```

## 🚀 Extending Components

### Adding Active Link State

```tsx
// molecules/Navigation.tsx - Example modification
import { useLocation } from "react-router-dom";

export default function Navigation({ items, className = "" }: NavigationProps) {
  const location = useLocation();

  return (
    <nav className={`flex items-center gap-12 ${className}`}>
      {items.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          label={item.label}
          className={location.pathname === item.href ? "text-white" : ""}
        />
      ))}
    </nav>
  );
}
```

### Adding Mobile Menu

```tsx
// organisms/Header.tsx - Example modification
import { useState } from "react";
import MobileMenu from "../molecules/MobileMenu";

export default function Header({ ... }: HeaderProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="relative h-[67px] w-full">
      {/* Desktop nav */}
      <Navigation items={navigationItems} className="hidden md:flex" />

      {/* Mobile menu */}
      <MobileMenu
        isOpen={isMobileOpen}
        items={navigationItems}
        onClose={() => setIsMobileOpen(false)}
      />
    </header>
  );
}
```

## 📝 Design Specs (from Figma)

- **Height**: 67px
- **Header Width**: Full width
- **Logo**: 74.107px × 66.107px (flipped on Y-axis)
- **Nav Spacing**: 12px gaps between items
- **Phone Text Size**: 14px, weight: bold
- **Cart Icon**: Positioned at right side

## 🎯 Design Tokens

These should eventually be moved to a dedicated token system:

```tsx
// tokens/typography.ts
export const typography = {
  heading: {
    fontFamily: "'League Spartan:Bold', sans-serif",
    fontSize: "14px",
    fontWeight: 700,
    letterSpacing: "0.7px",
  },
};

// tokens/colors.ts
export const colors = {
  text: {
    primary: "#d9d9d9",
    hover: "#ffffff",
  },
  background: {
    overlay: "rgba(4,12,13,0.05)",
  },
};
```

## 📋 Asset Management

Current assets are sourced from Figma URLs (valid for 7 days). For production:

1. Download assets from Figma
2. Store in `public/assets/` folder
3. Update `src/constants/assets.ts` with local paths
4. Remove Figma URLs

```ts
// Before (Figma URLs)
export const LOGO_URL = "https://www.figma.com/api/mcp/asset/...";

// After (Local assets)
export const LOGO_URL = "/assets/logo.png";
```

## ✅ Checklist for Pixel Perfect Implementation

- [x] Component structure (atoms → molecules → organisms)
- [x] TypeScript interfaces for all props
- [x] Tailwind styling matching Figma specs
- [x] Responsive container structure
- [x] Asset constants setup
- [ ] Download and optimize assets from Figma
- [ ] Add hover/active states
- [ ] Test on different screen sizes
- [ ] Consider dark/light mode variants
- [ ] Set up design tokens system
- [ ] Add Storybook stories for components
