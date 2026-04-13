export interface Burger {
  image: string;
  name: string;
  price: number;
  description: string;
  slug: string;
  href: string;
}

export const BURGERS: Burger[] = [
  { image: "/assets/burgers/burger-154.png", name: "SWEET BACON",    price: 11.99, description: "Doble Angus, doble cheddar, bacon dulce, pepinillos, mayonesa BUNKR, cebolla",              slug: "sweet-bacon",    href: "/menu#sweet-bacon" },
  { image: "/assets/burgers/burger-147.png", name: "CHORI BURGER",   price: 10.99, description: "Doble Torta Angus, Doble chedar americano, pepinillos, bacon dulce, mayonesa BUNKR, cebolla", slug: "chori-burger",   href: "/menu#chori-burger" },
  { image: "/assets/burgers/burger-148.png", name: "SMASH OKLAHOMA", price:  9.99, description: "Doble Torta Angus, Doble chedar americano, pepinillos, bacon dulce, mayonesa BUNKR, cebolla", slug: "smash-oklahoma", href: "/menu#smash-oklahoma" },
  { image: "/assets/burgers/burger-149.png", name: "CRISPY BBQ",     price: 12.99, description: "Doble Torta Angus, Doble chedar americano, pepinillos, bacon dulce, mayonesa BUNKR, cebolla", slug: "crispy-bbq",     href: "/menu#crispy-bbq" },
];
