import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import type { NavigationItem } from "../molecules/Navigation";
import NavLink from "../atoms/NavLink";
import { useCart } from "../../context/CartContext";

interface HeaderProps {
  logoSrc: string;
  navigationItems?: NavigationItem[];
  phoneNumber?: string;

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

  className = "",
}: HeaderProps) {
  const { totalItems, bump } = useCart();
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bump === 0 || !cartRef.current) return;
    cartRef.current.classList.remove("animate-cart-bump");
    void cartRef.current.offsetWidth;
    cartRef.current.classList.add("animate-cart-bump");
  }, [bump]);

  return (
    <header
      className={`absolute top-0 left-0 w-full h-[67px] z-50 ${className}`}
      data-name="HEADER"
      data-node-id="81:729"
    >
      {/* Background overlay — node 81:728 */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#0C1011]" data-node-id="81:728" />

      {/* Content layer */}
      <div className="relative h-full flex items-center justify-between px-[100px]">
        {/* Left group: Logo + Phone */}
        <div className="flex items-center gap-[51px]">
          {/* Logo — node 2021:1157 */}
          <Link
            to="/"
            className="w-[74px] h-[66px] shrink-0 block"
            data-name="logo_Bunkr_Factory 1"
            data-node-id="2021:1157"
          >
            <img
              alt="Bunkr Logo"
              className="w-full h-full object-cover"
              src={logoSrc}
            />
          </Link>

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
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>

          {/* Cart icon — node 5:435 */}
          <div ref={cartRef} className="relative w-[41px] h-[41px] shrink-0 cursor-pointer group/cart" data-node-id="5:435">
            <div className="relative w-full h-full p-[6px_8px_5px_4px]">
              <svg viewBox="0 0 29.1556 29.1556" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M8.74667 23.3244C7.14311 23.3244 5.84569 24.6364 5.84569 26.24C5.84569 27.8436 7.14311 29.1556 8.74667 29.1556C10.3502 29.1556 11.6622 27.8436 11.6622 26.24C11.6622 24.6364 10.3502 23.3244 8.74667 23.3244ZM0 0V2.91556H2.91556L8.16356 13.9801L6.19556 17.5516C5.96231 17.9598 5.83111 18.4409 5.83111 18.9511C5.83111 20.5547 7.14311 21.8667 8.74667 21.8667H26.24V18.9511H9.35893C9.15484 18.9511 8.99449 18.7908 8.99449 18.5867L9.03822 18.4117L10.3502 16.0356H21.2107C22.304 16.0356 23.2661 15.4379 23.7618 14.534L28.9806 5.07307C29.0972 4.86898 29.1556 4.62116 29.1556 4.37333C29.1556 3.57156 28.4996 2.91556 27.6978 2.91556H6.13724L4.76693 0H0ZM23.3244 23.3244C21.7209 23.3244 20.4235 24.6364 20.4235 26.24C20.4235 27.8436 21.7209 29.1556 23.3244 29.1556C24.928 29.1556 26.24 27.8436 26.24 26.24C26.24 24.6364 24.928 23.3244 23.3244 23.3244Z" className="fill-[#d9d9d9] transition-colors duration-200 group-hover/cart:fill-[#df9a1b]" />
              </svg>
            </div>
            {totalItems > 0 && (
              <span className="absolute -top-[6px] -right-[6px] bg-[#f3731c] text-white font-kulim font-bold text-[10px] min-w-[18px] h-[18px] flex items-center justify-center rounded-full px-[4px]">
                {totalItems}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
