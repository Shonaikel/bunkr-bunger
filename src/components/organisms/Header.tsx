import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import NavLink from "../atoms/NavLink";
import { useCart } from "../../context/CartContext";

const PHONE = "(+506) 1234-5678";

const NAV_ITEMS = [
  { href: "/locations", label: "UBICACIONES" },
  { href: "/menu",      label: "NUESTRO MENÚ" },
  { href: "/contact",   label: "CONTACTANOS" },
];

const CART_PATH = "M8.74667 23.3244C7.14311 23.3244 5.84569 24.6364 5.84569 26.24C5.84569 27.8436 7.14311 29.1556 8.74667 29.1556C10.3502 29.1556 11.6622 27.8436 11.6622 26.24C11.6622 24.6364 10.3502 23.3244 8.74667 23.3244ZM0 0V2.91556H2.91556L8.16356 13.9801L6.19556 17.5516C5.96231 17.9598 5.83111 18.4409 5.83111 18.9511C5.83111 20.5547 7.14311 21.8667 8.74667 21.8667H26.24V18.9511H9.35893C9.15484 18.9511 8.99449 18.7908 8.99449 18.5867L9.03822 18.4117L10.3502 16.0356H21.2107C22.304 16.0356 23.2661 15.4379 23.7618 14.534L28.9806 5.07307C29.0972 4.86898 29.1556 4.62116 29.1556 4.37333C29.1556 3.57156 28.4996 2.91556 27.6978 2.91556H6.13724L4.76693 0H0ZM23.3244 23.3244C21.7209 23.3244 20.4235 24.6364 20.4235 26.24C20.4235 27.8436 21.7209 29.1556 23.3244 29.1556C24.928 29.1556 26.24 27.8436 26.24 26.24C26.24 24.6364 24.928 23.3244 23.3244 23.3244Z";

interface HeaderProps {
  logoSrc: string;
  cartIconSrc?: string;
  navigationItems?: { href: string; label: string }[];
  phoneNumber?: string;
  className?: string;
}

export default function Header({
  logoSrc,
  navigationItems = NAV_ITEMS,
  phoneNumber = PHONE,
  className = "",
}: HeaderProps) {
  const { totalItems, bump, setIsOpen } = useCart();
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bump === 0 || !cartRef.current) return;
    cartRef.current.classList.remove("animate-cart-bump");
    void cartRef.current.offsetWidth;
    cartRef.current.classList.add("animate-cart-bump");
  }, [bump]);

  return (
    <header className={`fixed top-0 left-0 w-full h-[67px] z-50 ${className}`}>
      {/* Glass background — full width edge-to-edge */}
      <div className="absolute inset-0 bg-[#0C1011]/60 backdrop-blur-md border-b border-white/5" />

      <div className="relative h-full max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1700px] mx-auto flex items-center justify-between ">
        {/* Left — Logo + Phone */}
        <div className="flex items-center" style={{ gap: "clamp(1.25rem, 3vw, 3.2rem)" }}>
          <Link to="/" className="shrink-0 flex items-center w-[74px]">
            <img alt="Bunkr Logo" className="w-full h-auto object-contain" src={logoSrc} />
          </Link>
          <p
            className="font-league font-bold text-[#d9d9d9] tracking-[0.7px] leading-normal"
            style={{ fontSize: "clamp(0.65rem, 0.8vw, 0.75rem)" }}
          >
            {phoneNumber}
          </p>
        </div>

        {/* Right — Nav + Cart */}
        <div className="flex items-center" style={{ gap: "clamp(1.25rem, 3vw, 3.2rem)" }}>
          <nav className="flex items-center" style={{ gap: "clamp(1.25rem, 3vw, 3.2rem)" }}>
            {navigationItems.map(item => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>

          <div
            ref={cartRef}
            onClick={() => setIsOpen(true)}
            className="relative w-[41px] h-[41px] shrink-0 cursor-pointer group/cart
              transition-transform duration-200 hover:scale-110"
          >
            <div className="relative w-full h-full p-[6px_8px_5px_4px]">
              <svg viewBox="0 0 29.1556 29.1556" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d={CART_PATH} className="fill-[#d9d9d9] transition-colors duration-200 group-hover/cart:fill-[#df9a1b]" />
              </svg>
            </div>
            {totalItems > 0 && (
              <span className="absolute -top-[6px] -right-[6px] bg-[#f3731c] text-white font-kulim font-bold text-[10px]
                min-w-[18px] h-[18px] flex items-center justify-center rounded-full px-[4px]
                shadow-[0_2px_8px_rgba(243,115,28,0.5)] transition-transform duration-200 group-hover/cart:scale-110">
                {totalItems}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
