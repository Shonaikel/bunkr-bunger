/**
 * Header Component Examples
 * Demonstrates various usage patterns for the Header component system
 */

import { Header, Navigation, HeaderActions, Logo, NavLink, Icon, PhoneNumber } from "../";
import { LOGO_URL, CART_ICON_URL } from "../../constants/assets";

export function BasicHeader() {
  return (
    <Header
      logoSrc={LOGO_URL}
      cartIconSrc={CART_ICON_URL}
    />
  );
}

export function CustomNavigationHeader() {
  const customNav = [
    { href: "/inicio", label: "INICIO" },
    { href: "/promociones", label: "PROMOCIONES" },
    { href: "/ubicaciones", label: "UBICACIONES" },
    { href: "/nosotros", label: "NOSOTROS" },
    { href: "/contacto", label: "CONTACTO" },
  ];

  return (
    <Header
      logoSrc={LOGO_URL}
      navigationItems={customNav}
      cartIconSrc={CART_ICON_URL}
      phoneNumber="(+506) 8765-4321"
    />
  );
}

export function MinimalHeader() {
  return (
    <Header
      logoSrc={LOGO_URL}
      cartIconSrc={CART_ICON_URL}
      navigationItems={[
        { href: "/menu", label: "MENU" },
      ]}
    />
  );
}

export function DarkThemeHeader() {
  return (
    <Header
      logoSrc={LOGO_URL}
      cartIconSrc={CART_ICON_URL}
      className="bg-slate-900"
    />
  );
}

export function ComponentShowcase() {
  const navItems = [
    { href: "/", label: "INICIO" },
    { href: "/menu", label: "MENU" },
    { href: "/contact", label: "CONTACTO" },
  ];

  return (
    <div className="space-y-8 p-8 bg-gray-100">
      {/* Atoms */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Atoms</h2>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded">
            <p className="text-sm text-gray-600 mb-2">Logo</p>
            <Logo src={LOGO_URL} />
          </div>

          <div className="bg-white p-4 rounded">
            <p className="text-sm text-gray-600 mb-2">NavLink</p>
            <NavLink href="#" label="NUESTRO MENÚ" />
          </div>

          <div className="bg-white p-4 rounded">
            <p className="text-sm text-gray-600 mb-2">Icon</p>
            <Icon src={CART_ICON_URL} />
          </div>

          <div className="bg-white p-4 rounded">
            <p className="text-sm text-gray-600 mb-2">PhoneNumber</p>
            <PhoneNumber number="(+506) 1234-5678" />
          </div>
        </div>
      </section>

      {/* Molecules */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Molecules</h2>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded">
            <p className="text-sm text-gray-600 mb-2">Navigation</p>
            <Navigation items={navItems} />
          </div>

          <div className="bg-white p-4 rounded">
            <p className="text-sm text-gray-600 mb-2">HeaderActions</p>
            <HeaderActions
              phoneNumber="(+506) 1234-5678"
              cartIconSrc={CART_ICON_URL}
            />
          </div>
        </div>
      </section>

      {/* Organisms */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Organisms - Header Variations</h2>

        <div className="space-y-4">
          <div className="bg-white rounded overflow-hidden border border-gray-300">
            <p className="text-sm text-gray-600 p-2 bg-gray-50">Basic Header</p>
            <BasicHeader />
          </div>

          <div className="bg-white rounded overflow-hidden border border-gray-300">
            <p className="text-sm text-gray-600 p-2 bg-gray-50">Custom Navigation</p>
            <CustomNavigationHeader />
          </div>

          <div className="bg-white rounded overflow-hidden border border-gray-300">
            <p className="text-sm text-gray-600 p-2 bg-gray-50">Minimal Header</p>
            <MinimalHeader />
          </div>

          <div className="bg-white rounded overflow-hidden border border-gray-300">
            <p className="text-sm text-gray-600 p-2 bg-gray-50">Dark Theme</p>
            <DarkThemeHeader />
          </div>
        </div>
      </section>
    </div>
  );
}
