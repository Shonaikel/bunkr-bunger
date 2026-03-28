import Logo from "../atoms/Logo";
import Navigation, { NavigationItem } from "../molecules/Navigation";
import HeaderActions from "../molecules/HeaderActions";

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

export default function Header({
  logoSrc,
  navigationItems = DEFAULT_NAV_ITEMS,
  phoneNumber = "(+506) 1234-5678",
  cartIconSrc = "",
  className = "",
}: HeaderProps) {
  return (
    <header
      className={`relative h-[67px] w-full bg-transparent ${className}`}
      data-name="HEADER"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 top-[10.45%] bg-[rgba(4,12,13,0.05)]" />

      {/* Main header content */}
      <div className="relative h-full flex items-center justify-between px-[5.26%]">
        {/* Logo */}
        <Logo src={logoSrc} width={74} height={66} />

        {/* Navigation - centered */}
        <Navigation
          items={navigationItems}
          className="flex-1 justify-center"
        />

        {/* Header Actions - right side */}
        <HeaderActions
          phoneNumber={phoneNumber}
          cartIconSrc={cartIconSrc}
        />
      </div>
    </header>
  );
}
