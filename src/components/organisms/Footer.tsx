// Figma node 81:707 — 1920×86px
import { Link } from 'react-router-dom';

const LOGO = "/assets/brand/footer-logo.png";

const NAV_ITEMS = [
  { href: "/locations", label: "UBICACIONES" },
  { href: "/menu",      label: "NUESTRO MENÚ" },
  { href: "/contact",   label: "CONTACTANOS" },
];

export default function Footer() {
  return (
    <footer
      className="relative w-full min-h-[clamp(4rem,6vw,5rem)] bg-[#1b1b1b]"
      data-name="FOOTER"
      data-node-id="81:707"
    >
      <div className="relative h-full max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1700px] mx-auto flex items-center justify-between">
        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-[clamp(1.5rem,3vw,3.1875rem)]">
          {/* Logo */}
          <Link to="/" className="shrink-0 block w-[74px] h-[66px]">
            <img alt="Bunkr Logo" className="w-[74px] h-[60px] object-contain" src={LOGO} />
          </Link>

          {/* Nav links */}
          <nav className="flex items-center gap-[clamp(1.5rem,3vw,3.1875rem)]">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="font-league font-bold text-xs md:text-sm tracking-wide text-[#d9d9d9]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: Copyright */}
        <p
          className="font-kulim font-bold text-[15px] text-[#6b6965] tracking-[0.72px] leading-normal whitespace-nowrap"
          data-node-id="31:554"
        >
          ©2026 Bunkr. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
