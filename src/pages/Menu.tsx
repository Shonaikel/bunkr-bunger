// Figma node 2187:1142 — 1917×1171px (Menu Section)
import { useState } from 'react';
import { useCart } from '../context/CartContext';

const BG_BLUR    = "/assets/menu-bg-blur.jpg";
const MENU_LOGO  = "/assets/menu-logo.png";
const BURGER_154 = "/assets/burger-154.png";
const BURGER_147 = "/assets/burger-147.png";
const BURGER_148 = "/assets/burger-148.png";
const BURGER_149 = "/assets/burger-149.png";
const ARROW      = "/assets/arrow.svg";

const DESC = "Doble Torta Angus, Doble chedar americano, pepinillos, bacon dulce, mayonesa BUNKR, cebolla";

const BURGERS = [
  { image: BURGER_154, name: "SWEET BACON", price: "$11.99", description: DESC },
  { image: BURGER_147, name: "SWEET BACON", price: "$11.99", description: DESC },
  { image: BURGER_148, name: "SWEET BACON", price: "$11.99", description: DESC },
  { image: BURGER_149, name: "SWEET BACON", price: "$11.99", description: DESC },
];

interface MenuCardProps {
  image: string;
  name: string;
  price: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

function MenuCard({ image, name, price, description, isActive, onClick }: MenuCardProps) {
  return (
    <div
      className="relative h-[400px] w-[365px] shrink-0 group cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`absolute inset-0 rounded-[25px] transition-all duration-300 ${
          isActive
            ? "border-2 border-[#f3731c] bg-[rgba(243,115,28,0.25)] shadow-[inset_0px_4px_250px_0px_rgba(0,0,0,0.25)]"
            : "bg-[rgba(67,67,67,0.05)]"
        }`}
      />
      {/* Burger image */}
      <div className="absolute inset-[2%_7%_35%_2.5%]">
        <img alt={name} className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full" src={image} />
      </div>
      {/* Name */}
      <p className="absolute left-[5%] top-[66%] font-kulim font-bold text-[20px] text-white tracking-[0.72px] leading-normal">
        {name}
      </p>
      {/* Description + Price row */}
      <p className="absolute left-[5%] right-[40%] bottom-[11%] font-kulim font-normal text-[11px] text-[#d9d9d9] tracking-[0.42px] leading-normal">
        {description}
      </p>
      <p className="absolute right-[5%] bottom-[11%] font-kulim font-bold text-[36px] text-[#d9d9d9] tracking-[1.41px] leading-[1]">
        {price}
      </p>
    </div>
  );
}

export default function Menu() {
  const [selected, setSelected] = useState(0);
  const [displayed, setDisplayed] = useState(0);
  const [animState, setAnimState] = useState<"idle" | "out" | "in">("in");
  const [activeExtras, setActiveExtras] = useState<Set<number>>(new Set([0, 1]));
  const [quantity, setQuantity] = useState("1");
  const { addItem } = useCart();

  const EXTRAS_MAP = ["Pepinillo", "Salsa Bunkr"];
  const handleAdd = () => {
    const extras = [...activeExtras].map((i) => EXTRAS_MAP[i]);
    addItem({
      name: burger.name,
      image: burger.image,
      price: burger.price,
      quantity: Number(quantity) || 1,
      extras,
    });
    setQuantity("1");
  };

  const burger = BURGERS[displayed];

  const selectBurger = (i: number) => {
    if (i === selected || animState === "out") return;
    setSelected(i);
    setAnimState("out");
    setTimeout(() => {
      setDisplayed(i);
      setAnimState("in");
    }, 400);
  };

  const toggleExtra = (i: number) =>
    setActiveExtras(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  const goPrev = () => selectBurger((selected - 1 + BURGERS.length) % BURGERS.length);
  const goNext = () => selectBurger((selected + 1) % BURGERS.length);

  const animClass = animState === "out"
    ? "animate-slide-out-right"
    : animState === "in"
      ? "animate-slide-in-left"
      : "";

  return (
    <section
      className="relative w-full h-[1171px] bg-[#131017] overflow-hidden"
      data-name="MENU SECTION" data-node-id="2187:1142"
    >
      {/* Ambient fire blur */}
      <div className="absolute blur-[10px] inset-[13.41%_0.16%_0_0] pointer-events-none" data-node-id="2187:1079">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-50 pointer-events-none size-full"
          src={BG_BLUR}
        />
      </div>

      {/* Top dark overlay (covers header zone + upper section) */}
      <div className="absolute bg-[#0c1011] blur-[60px] inset-[0_0_76.26%_0] pointer-events-none" data-node-id="2187:1080"
      />

      {/* ── BUNKR MENÚ logo ── */}
      <div className="absolute inset-[6.49%_6.99%_68.66%_57.12%] animate-fade-in-up" data-node-id="2187:1081">
        <img alt="BUNKR MENÚ" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={MENU_LOGO}
        />
      </div>

      {/* Dark blurs on logo edges */}
      <div className="absolute bg-[rgba(19,16,23,0.8)] blur-[60px] inset-[1.54%_31.14%_88.81%_57.02%] pointer-events-none" data-node-id="2187:1102" />
      <div className="absolute bg-[rgba(19,16,23,0.8)] blur-[60px] inset-[1.54%_7.62%_88.81%_80.54%] pointer-events-none"  data-node-id="2187:1103" />

      {/* MENÚ rotated text */}
      <div className="absolute flex inset-[24.68%_7.04%_67.67%_70.42%] items-center justify-center pointer-events-none">
        <p className="font-kulim font-bold leading-normal text-[#df9a1b] text-[40px] text-center tracking-[1.2px] rotate-[-4.65deg] w-[429px] h-[55px]"
          data-node-id="2187:1110"
        >
          MENÚ
        </p>
      </div>

      {/* ── Featured burger image ── */}
      <div key={`img-${displayed}`} className={`absolute inset-[8%_61.09%_56.37%_8.35%] pointer-events-none ${animClass}`} data-node-id="2187:1082">
        <img alt={burger.name} className="absolute inset-0 max-w-none object-cover pointer-events-none h-[400px] w-[470px]"
              src={burger.image}
        />
      </div>

      {/* ── Detail panel ── */}
      <div key={`detail-${displayed}`} className={`absolute inset-[14%_42%_48%_38.34%] ${animClass}`} style={{ animationDelay: "0.08s" }}>
        {/* Price */}
        <p className="font-kulim font-bold leading-normal text-[#d9d9d9] text-[37px] tracking-[1.41px]">{burger.price}</p>

        {/* Name */}
        <p className="font-kulim font-bold leading-normal text-[24px] text-white tracking-[0.72px] mt-[8px]">{burger.name}</p>

        {/* Description */}
        <p className="font-kulim font-normal leading-normal text-[#d9d9d9] text-[13px] tracking-[0.42px] mt-[4px]">{burger.description}</p>

        {/* EXTRAS heading */}
        <p className="font-kulim font-bold leading-normal text-[20px] text-white tracking-[0.6px] mt-[80px]">EXTRAS</p>

        {/* Extra 1 */}
        <button onClick={() => toggleExtra(0)} className={`mt-[12px] h-[34px] w-[226px] rounded-[5px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] flex items-center gap-[8px] px-[8px] cursor-pointer transition-all duration-200 border-2 ${activeExtras.has(0) ? 'bg-[rgba(243,115,28,0.25)] border-[#f3731c]' : 'bg-[#131017] border-[#a2a2a2]'}`}>
          <div className={`shrink-0 w-[13px] h-[13px] rounded-full ${activeExtras.has(0) ? 'bg-[#f3731c]' : 'bg-transparent border border-[#a2a2a2]'}`} />
          <p className="font-kulim font-normal text-[#d9d9d9] text-[14px] tracking-[0.42px] leading-normal whitespace-nowrap">
            Pepinillo + USD$ 0.50
          </p>
        </button>

        {/* Extra 2 */}
        <button onClick={() => toggleExtra(1)} className={`mt-[6px] h-[34px] w-[226px] rounded-[5px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] flex items-center gap-[8px] px-[8px] cursor-pointer transition-all duration-200 border-2 ${activeExtras.has(1) ? 'bg-[rgba(243,115,28,0.25)] border-[#f3731c]' : 'bg-[#131017] border-[#a2a2a2]'}`}>
          <div className={`shrink-0 w-[13px] h-[13px] rounded-full ${activeExtras.has(1) ? 'bg-[#f3731c]' : 'bg-transparent border border-[#a2a2a2]'}`} />
          <p className="font-kulim font-normal text-[#d9d9d9] text-[14px] tracking-[0.42px] leading-normal whitespace-nowrap">
            Salsa Bunkr + USD$ 0.50
          </p>
        </button>

        {/* Add + Quantity row */}
        <div className="flex gap-[8px] mt-[8px]">
          <input
            type="text"
            inputMode="numeric"
            value={quantity}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, "");
              if (val === "") { setQuantity(""); return; }
              const num = Math.min(Number(val), 99);
              setQuantity(String(num));
            }}
            onBlur={() => { if (!quantity) setQuantity("1"); }}
            className="h-[34px] w-[56px] bg-[#151319] border-2 border-[#a2a2a2] rounded-[5px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] text-center font-kulim font-semibold text-[#d9d9d9] text-[14px] tracking-[0.42px] leading-normal outline-none focus:border-[#f3731c] transition-colors"
          />
          <button onClick={handleAdd} className="h-[34px] px-[20px] bg-[#f3731c] rounded-[5px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer">
            <p className="font-kulim font-semibold text-[#d9d9d9] text-[14px] text-center tracking-[0.42px] leading-normal">
              Añadir
            </p>
          </button>
        </div>
      </div>

      {/* ── Arrows + Burger cards row ── */}
      <div className="absolute top-[48%] left-[4%] right-[4%] flex items-center gap-[16px] animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        {/* Left arrow */}
        <button
          onClick={goPrev}
          className="shrink-0 flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
          data-node-id="81:684-left"
        >
          <div className="rotate-180 size-[41px]">
            <img alt="Anterior" src={ARROW} className="block w-full h-full" />
          </div>
        </button>

        {/* Cards */}
        <div className="flex-1 flex justify-center gap-[16px]">
          {BURGERS.map((b, i) => (
            <MenuCard
              key={i}
              image={b.image}
              name={b.name}
              price={b.price}
              description={b.description}
              isActive={selected === i}
              onClick={() => selectBurger(i)}
            />
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={goNext}
          className="shrink-0 flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
          data-node-id="81:684-right"
        >
          <img alt="Siguiente" src={ARROW} className="block size-[41px]" />
        </button>
      </div>
    </section>
  );
}
