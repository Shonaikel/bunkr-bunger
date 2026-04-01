import type { NavigationItem } from "../molecules/Navigation";

interface HeaderProps {
  logoSrc: string;
  navigationItems?: NavigationItem[];
  phoneNumber?: string;
  cartIconSrc?: string;
  className?: string;
}

const DEFAULT_NAV_ITEMS: NavigationItem[] = [
  { href: "/locations", label: "UBICACIONES" },
  { href: "/menu", label: "NUESTRO MENÚ" },
  { href: "/contact", label: "CONTACTANOS" },
];

const NAV_LINK_CLASS =
  "font-league font-bold text-[#d9d9d9] text-xs tracking-[0.7px] leading-normal cursor-pointer transition-colors hover:text-white";

export default function Header({
  logoSrc,
  navigationItems = DEFAULT_NAV_ITEMS,
  phoneNumber = "(+506) 1234-5678",
  cartIconSrc = "",
  className = "",
}: HeaderProps) {
  return (
    <header
      className={`absolute top-0 left-0 w-full h-[67px] z-50 ${className}`}
      data-name="HEADER"
      data-node-id="81:729"
    >
      {/* Background overlay — node 81:728 */}
      <div className="absolute top-[7px] left-0 right-0 bottom-0 bg-[rgba(4,12,13,0.05)]" data-node-id="81:728" />

      {/* Content layer */}
      <div className="relative h-full flex items-center justify-between px-[100px]">
        {/* Left group: Logo + Phone */}
        <div className="flex items-center gap-[51px]">
          {/* Logo — node 2021:1157 */}
          <div
            className="w-[74px] h-[66px] shrink-0"
            data-name="logo_Bunkr_Factory 1"
            data-node-id="2021:1157"
          >
            <img
              alt="Bunkr Logo"
              className="w-full h-full object-cover pointer-events-none"
              src={logoSrc}
            />
          </div>

          {/* Phone number — node 7:460 */}
          <p
            className="font-league font-bold text-[#d9d9d9] text-xs tracking-[0.7px] leading-normal"
            data-node-id="7:460"
          >
            {phoneNumber}
          </p>
        </div>

        {/* Right group: Nav + Cart */}
        <div className="flex items-center gap-[51px]">
          {/* Navigation links */}
          <nav className="flex items-center gap-[51px]">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={NAV_LINK_CLASS}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Cart icon — node 5:435 */}
          <div className="w-[41px] h-[41px] overflow-clip shrink-0" data-node-id="5:435">
            <div className="relative w-full h-full p-[6px_8px_5px_4px]" data-node-id="31:584">
              <img alt="Shopping cart" className="w-full h-full" src={cartIconSrc} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
