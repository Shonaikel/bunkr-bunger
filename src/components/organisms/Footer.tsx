// Figma node 81:707 — 1920×86px
import { Link } from 'react-router-dom';

const LOGO = "/assets/footer-logo.png";

const NAV_ITEMS = [
  { href: "/locations", label: "UBICACIONES" },
  { href: "/menu",      label: "NUESTRO MENÚ" },
  { href: "/contact",   label: "CONTACTANOS" },
];

export default function Footer() {
  return (
    <footer
      className="relative w-full h-[80px] bg-[#1b1b1b]"
      data-name="FOOTER"
      data-node-id="81:707"
    >
      <div className="relative h-full flex items-center justify-between px-[100px]">
        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-[51px]">
          {/* Logo */}
          <div className="w-[74px] h-[66px] shrink-0 self-center" data-node-id="2070:1484">
            <img
              alt="Bunkr Logo"
              className="w-full h-full object-cover pointer-events-none"
              src={LOGO}
            />
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-[51px]">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="font-league font-bold text-[12px] text-[#d9d9d9] tracking-[0.95px] leading-normal whitespace-nowrap cursor-pointer hover:text-white transition-colors"
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
