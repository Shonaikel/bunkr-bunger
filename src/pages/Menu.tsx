import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { BURGERS } from '../constants/burgers';

const BG_BLUR   = "/assets/menu/menu-bg-blur.jpg";
const MENU_LOGO = "/assets/menu/menu-logo.png";
const ARROW     = "/assets/icons/arrow.svg";

const EXTRAS = [
  { label: "Pepinillo",   price: 0.50 },
  { label: "Salsa Bunkr", price: 0.50 },
];

const ANIM: Record<string, string> = {
  out:  "animate-slide-out-right",
  in:   "animate-slide-in-left",
  idle: "",
};

// ── Sub-components ──────────────────────────────────────────

const CARD_ACTIVE = "border-2 border-[#f3731c] bg-[rgba(243,115,28,0.25)] shadow-[inset_0px_4px_250px_0px_rgba(0,0,0,0.25)]";
const CARD_IDLE   = "bg-[rgba(67,67,67,0.05)] group-hover:border-2 group-hover:border-[#f3731c] group-hover:bg-[rgba(243,115,28,0.25)] group-hover:shadow-[inset_0px_4px_250px_0px_rgba(0,0,0,0.25)]";

function MenuBurgerCard({ image, name, price, description, isActive, onClick }: {
  image: string; name: string; price: string; description: string; isActive: boolean; onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="@container relative flex-1 min-w-0 max-w-[22.8125rem] aspect-[365/400] group cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
    >
      <div className={`absolute inset-0 rounded-[25px] transition-all duration-300 ${isActive ? CARD_ACTIVE : CARD_IDLE}`} />
      <div className="absolute inset-[2%_7%_35%_2.5%]">
        <img alt={name} src={image} className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full" />
      </div>
      <p className="absolute left-[5%] top-[66%] font-kulim font-bold text-[clamp(0.75rem,5.5cqw,1.25rem)] text-white tracking-[0.72px] leading-tight">
        {name}
      </p>
      <p className="absolute left-[5%] right-[40%] bottom-[11%] font-kulim font-normal text-[clamp(0.5rem,3.3cqw,0.75rem)] text-[#d9d9d9] tracking-[0.42px] leading-snug">
        {description}
      </p>
      <p className="absolute right-[5%] bottom-[11%] font-kulim font-bold text-[clamp(1rem,9.9cqw,2.25rem)] text-[#d9d9d9] tracking-[1.41px] leading-[1]">
        {price}
      </p>
    </div>
  );
}

function ExtraButton({ label, price, active, onToggle }: {
  label: string; price: number; active: boolean; onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className={`h-[clamp(2rem,2.3vw,2.125rem)] w-full max-w-[14.125rem] rounded-[5px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] flex items-center gap-[8px] px-[10px] transition-all duration-200 border-2 ${
        active ? "bg-[rgba(243,115,28,0.25)] border-[#f3731c]" : "bg-[#131017] border-[#a2a2a2]"
      }`}
    >
      <div className={`shrink-0 w-[13px] h-[13px] rounded-full ${active ? "bg-[#f3731c]" : "bg-transparent border border-[#a2a2a2]"}`} />
      <span className="font-kulim font-normal text-[#d9d9d9] text-[clamp(0.75rem,0.9vw,0.875rem)] tracking-[0.42px] leading-normal whitespace-nowrap">
        {label} + USD$ {price.toFixed(2)}
      </span>
    </button>
  );
}

// ── Page ────────────────────────────────────────────────────

export default function Menu() {
  const getInitialIndex = () => {
    const slug = window.location.hash.replace("#", "");
    const i = BURGERS.findIndex(b => b.slug === slug);
    return i !== -1 ? i : 0;
  };

  const [activeIndex,  setActiveIndex]  = useState(getInitialIndex);
  const [visibleIndex, setVisibleIndex] = useState(getInitialIndex);
  const [animState,    setAnimState]    = useState<"idle" | "out" | "in">("in");
  const [activeExtras, setActiveExtras] = useState<Set<number>>(new Set());
  const [quantity,     setQuantity]     = useState(1);

  const { addItem } = useCart();
  const burger    = BURGERS[visibleIndex];
  const animClass = ANIM[animState];

  const selectBurger = (i: number) => {
    if (i === activeIndex || animState === "out") return;
    setActiveIndex(i);
    setAnimState("out");
    setActiveExtras(new Set());
    setQuantity(1);
    setTimeout(() => {
      setVisibleIndex(i);
      setAnimState("in");
    }, 400);
  };

  const toggleExtra = (i: number) =>
    setActiveExtras(prev => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  const handleAdd = () => {
    const extrasCost = [...activeExtras].reduce((sum, i) => sum + EXTRAS[i].price, 0);
    addItem({
      name: burger.name,
      image: burger.image,
      price: `$${(burger.price + extrasCost).toFixed(2)}`,
      quantity,
      extras: [...activeExtras].map(i => EXTRAS[i].label),
    });
    setQuantity(1);
  };

  const goPrev = () => selectBurger((activeIndex - 1 + BURGERS.length) % BURGERS.length);
  const goNext = () => selectBurger((activeIndex + 1) % BURGERS.length);

  return (
    <section className="relative w-full bg-[#131017] overflow-hidden">

      {/* Ambient background — full-bleed image, dynamically cropped */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          alt=""
          src={BG_BLUR}
          className="absolute inset-0 w-full h-full object-cover object-top opacity-50 blur-[10px]"
        />
      </div>
      <div className="absolute bg-[#0c1011] blur-[60px] inset-[0_0_76.26%_0] pointer-events-none" />
      <div className="absolute bg-[rgba(19,16,23,0.8)] blur-[60px] inset-[1.54%_31.14%_88.81%_57.02%] pointer-events-none" />
      <div className="absolute bg-[rgba(19,16,23,0.8)] blur-[60px] inset-[1.54%_7.62%_88.81%_80.54%] pointer-events-none" />

      {/* Sign — BUNKR MENÚ (decorative overlay, upper-right) */}
      <div className="absolute top-[4%] left-[57%] right-[7%] origin-top animate-sign-swing pointer-events-none">
        <div className="relative">
          <img alt="BUNKR MENÚ" className="w-full object-contain pointer-events-none" src={MENU_LOGO} />
          <p className="absolute top-[68%] left-[68%] -translate-x-1/2 font-kulim font-bold text-[#df9a1b] text-[clamp(1.5rem,2.8vw,2.5rem)] text-center tracking-[1.2px] rotate-[-4.65deg] leading-normal">
            MENÚ
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="relative flex flex-col max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1700px] mx-auto px-[clamp(1rem,5vw,6.25rem)] pt-[clamp(1rem,2vw,2rem)] pb-[clamp(2.5rem,5vw,3.75rem)]">

        {/* Upper row: featured burger + detail panel — side by side, left-anchored */}
        <div className="flex items-start gap-x-[clamp(1rem,2vw,1.25rem)]">

          {/* Featured burger image */}
          <div key={`img-${visibleIndex}`} className={`shrink-0 pointer-events-none ${animClass}`}>
            <img alt={burger.name} className="h-[clamp(18rem,30vw,25.8125rem)] w-auto object-contain pointer-events-none" src={burger.image} />
          </div>

          {/* Detail panel */}
          <div key={`detail-${visibleIndex}`} className={`pt-13 w-full max-w-[23.125rem] shrink-0 flex flex-col gap-[clamp(0.75rem,1.5vw,1.25rem)] [animation-delay:0.08s] ${animClass}`}>
            {/* Info */}
            <div className="flex flex-col gap-[clamp(0.25rem,0.4vw,0.375rem)]">
              <p className="font-kulim font-bold text-[#d9d9d9] text-[clamp(1.75rem,2.8vw,2.3125rem)] tracking-[1.41px] leading-none">
                ${burger.price.toFixed(2)}
              </p>
              <p className="font-kulim font-bold text-white text-[clamp(1.25rem,1.8vw,1.5rem)] tracking-[0.72px] leading-tight">
                {burger.name}
              </p>
              <p className="font-kulim font-normal text-[#d9d9d9] text-[clamp(0.75rem,0.9vw,0.8125rem)] tracking-[0.42px] leading-normal">
                {burger.description}
              </p>
            </div>

            {/* Extras */}
            <div className="flex flex-col gap-[clamp(0.375rem,0.6vw,0.5rem)]">
              <p className="font-kulim font-bold text-white text-[clamp(1rem,1.4vw,1.25rem)] tracking-[0.6px] leading-normal">EXTRAS</p>
              {EXTRAS.map((extra, i) => (
                <ExtraButton
                  key={i}
                  label={extra.label}
                  price={extra.price}
                  active={activeExtras.has(i)}
                  onToggle={() => toggleExtra(i)}
                />
              ))}
            </div>

            {/* Add to cart */}
            <div className="flex gap-[clamp(0.5rem,0.8vw,0.75rem)]">
              <input
                type="text"
                inputMode="numeric"
                value={quantity}
                onChange={e => {
                  const val = parseInt(e.target.value.replace(/\D/g, ""));
                  setQuantity(isNaN(val) ? 1 : Math.min(val, 99));
                }}
                className="h-[clamp(2.25rem,2.5vw,2.375rem)] w-[clamp(3rem,3.5vw,3.5rem)] bg-[#151319] border-2 border-[#a2a2a2] rounded-[5px] text-center font-kulim font-semibold text-[#d9d9d9] text-[clamp(0.75rem,0.9vw,0.875rem)] tracking-[0.42px] leading-normal outline-none focus:border-[#f3731c] transition-colors"
              />
              <button
                onClick={handleAdd}
                className="h-[clamp(2.25rem,2.5vw,2.375rem)] px-[clamp(1rem,1.5vw,1.5rem)] bg-[#f3731c] rounded-[5px] flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <span className="font-kulim font-semibold text-[#d9d9d9] text-[clamp(0.75rem,0.9vw,0.875rem)] tracking-[0.42px] leading-normal">
                  Añadir al carrito
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Burger cards + navigation */}
        <div className="flex items-center gap-[clamp(0.75rem,1.5vw,1.25rem)] mt-[clamp(0.5rem,1.5vw,1rem)] animate-fade-in-up [animation-delay:0.2s]">
          <button onClick={goPrev} className="shrink-0 flex items-center justify-center hover:opacity-80 transition-opacity">
            <img alt="Anterior" src={ARROW} className="block size-[clamp(2rem,2.8vw,2.5625rem)] rotate-180" />
          </button>

          <div className="flex-1 flex justify-center items-stretch gap-[clamp(0.75rem,1.5vw,1.25rem)]">
            {BURGERS.map((b, i) => (
              <MenuBurgerCard
                key={b.slug}
                image={b.image}
                name={b.name}
                price={`$${b.price.toFixed(2)}`}
                description={b.description}
                isActive={activeIndex === i}
                onClick={() => selectBurger(i)}
              />
            ))}
          </div>

          <button onClick={goNext} className="shrink-0 flex items-center justify-center hover:opacity-80 transition-opacity">
            <img alt="Siguiente" src={ARROW} className="block size-[clamp(2rem,2.8vw,2.5625rem)]" />
          </button>
        </div>

      </div>

    </section>
  );
}
