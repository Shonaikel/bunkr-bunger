// Figma node 2070:1349 — 1920×1561px

// Background
const BG_BLUR     = "/assets/best-bg-blur.jpg";

// Burger card images
const BURGER_1    = "/assets/best-burger-1.png";
const BURGER_2    = "/assets/best-burger-2.png";
const BURGER_3    = "/assets/best-burger-3.png";
const BURGER_4    = "/assets/best-burger-4.png";

// Menu grid images
const MENU_LEFT   = "/assets/menu-left.jpg";
const MENU_MID_T  = "/assets/menu-mid-t.jpg";
const MENU_MID_B  = "/assets/menu-mid-b.jpg";
const MENU_RIGHT  = "/assets/menu-right.jpg";

// Decorative lines
const LINE_LEFT   = "/assets/line-left.svg";
const LINE_RIGHT  = "/assets/line-right.svg";

interface BurgerCardProps {
  image: string;
  name: string;
  price: string;
  description: string;
}

function BurgerCard({ image, name, price, description }: BurgerCardProps) {
  return (
    <div className="relative h-[380px] w-[400px] shrink-0 group cursor-pointer">
      <div className="absolute inset-[0_5.25%_0_0] bg-[rgba(67,67,67,0.05)] rounded-[25px] transition-all duration-300 group-hover:bg-[rgba(243,115,28,0.25)] group-hover:shadow-[0_0_50px_rgba(243,115,28,0.5)]" />
      {/* Burger image */}
      <div className="absolute inset-[2.64%_7.31%_24.28%_2.74%]">
        <img alt={name} className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full" src={image} />
      </div>
      {/* Name */}
      <p className="absolute inset-[75.72%_44.52%_auto_5.25%] font-kulim font-bold text-[24px] text-white tracking-[0.72px] leading-normal">
        {name}
      </p>
      {/* Price */}
      <p className="absolute inset-[88%_7.31%_auto_62%] font-kulim font-bold text-[43px] text-[#d9d9d9] tracking-[1.41px] leading-normal">
        {price}
      </p>
      {/* Description */}
      <p className="absolute inset-[88%_40.87%_3.13%_5.25%] font-kulim font-normal text-[13px] text-[#d9d9d9] tracking-[0.42px] leading-normal">
        {description}
      </p>
    </div>
  );
}

const BURGER_DESCRIPTION = "Doble Torta Angus, Doble chedar americano, pepinillos, bacon dulce, mayonesa BUNKR, cebolla";

export default function BestBurgers({ className = "" }: { className?: string }) {
  return (
    <section
      className={`relative w-full h-[1561px] overflow-hidden bg-black ${className}`}
      data-name="BEST BURGERS + MENU"
      data-node-id="2070:1349"
    >
      {/* Blurred background photo */}
      <div className="absolute inset-[5.77%_0_32.29%_0] blur-[10px]" data-node-id="2028:1263">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[102.35%] left-0 max-w-none top-[-1.18%] w-full object-cover" src={BG_BLUR} />
        </div>
      </div>

      {/* ── BEST BURGERS ── */}

      {/* Title */}
      <p
        className="absolute inset-[0_30.99%_auto_31.51%] font-kulim font-bold text-[37px] text-[#df9a1b] text-center tracking-[1.2px] leading-normal"
        data-node-id="2028:1281"
      >
        LO MEJOR DE LO MEJOR
      </p>

      {/* Decorative line left */}
      <div className="absolute inset-[1.6%_64.58%_auto_13.54%] flex items-center justify-center">
        <div className="shrink-0 h-px w-[420px] rotate-180" data-node-id="2028:1282">
          <div className="relative w-full h-full">
            <div className="absolute inset-[-2px_0_0_0]">
              <img alt="" className="block max-w-none w-full h-full" src={LINE_LEFT} />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative line right */}
      <div className="absolute inset-[1.6%_11.35%_auto_65.16%] flex items-center justify-center">
        <div className="shrink-0 h-px w-[451px] rotate-180" data-node-id="2028:1283">
          <div className="relative w-full h-full">
            <div className="absolute inset-[-2px_0_0_0]">
              <img alt="" className="block max-w-none w-full h-full" src={LINE_RIGHT} />
            </div>
          </div>
        </div>
      </div>

      {/* Burger cards */}
      <div className="absolute top-[5.64%] left-[5.36%] right-[3.85%] flex gap-[16px]">
        <BurgerCard image={BURGER_4} name="SWEET BACON" price="$11.99" description={BURGER_DESCRIPTION} />
        <BurgerCard image={BURGER_1} name="SWEET BACON" price="$11.99" description={BURGER_DESCRIPTION} />
        <BurgerCard image={BURGER_2} name="SWEET BACON" price="$11.99" description={BURGER_DESCRIPTION} />
        <BurgerCard image={BURGER_3} name="SWEET BACON" price="$11.99" description={BURGER_DESCRIPTION} />
      </div>

      {/* VER MENÚ button */}
      <a
        href="/menu"
        className="absolute inset-[38.24%_43.54%_58.17%_45.36%] flex items-center justify-center bg-[#f3731c] rounded-[5px] hover:opacity-90 transition-opacity cursor-pointer"
        data-node-id="2028:1284"
      >
        <span className="font-kulim font-bold text-[18px] text-white tracking-[0.96px] leading-normal">
          VER MENÚ
        </span>
      </a>

      {/* ── MENU GRID ── */}

      {/* Large left image */}
      <div className="absolute inset-[47.09%_58.65%_0_5.36%] overflow-hidden pointer-events-none" data-node-id="2028:1265">
        <img alt="" className="absolute h-[114.55%] left-[-113.84%] max-w-none top-[-0.03%] w-[245.34%] object-cover" src={MENU_LEFT} />
      </div>

      {/* Dark fill center-top */}
      <div className="absolute inset-[47.02%_40.83%_26.46%_41.35%] bg-[#131718]" data-node-id="2028:1266" />

      {/* Dark fill bottom-right */}
      <div className="absolute inset-[73.54%_22.92%_0_59.17%] bg-[#131718]" data-node-id="2028:1267" />

      {/* Menu image center-bottom */}
      <div className="absolute inset-[73.54%_40.83%_0_41.35%]" data-node-id="2028:1268">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full" src={MENU_MID_T} />
      </div>

      {/* Menu image far right */}
      <div className="absolute inset-[73.54%_5.05%_0_77.08%] overflow-hidden pointer-events-none" data-node-id="2028:1269">
        <img alt="" className="absolute h-full left-[-57.93%] max-w-none top-0 w-[215.73%] object-cover" src={MENU_MID_B} />
      </div>

      {/* Menu image center-right */}
      <div className="absolute inset-[47.09%_22.92%_26.46%_59.17%]" data-node-id="2028:1270">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full" src={MENU_RIGHT} />
      </div>

      {/* Dark fill top-right */}
      <div className="absolute inset-[47.09%_5.05%_26.46%_77.08%] bg-[#131718]" data-node-id="2028:1271" />

      {/* Menu text overlays */}
      <p className="absolute inset-[52.85%_45.78%_auto_45.16%] font-kulim font-bold text-[18px] text-white tracking-[0.72px] leading-normal" data-node-id="2028:1272">
        SWEET BACON
      </p>
      <p className="absolute inset-[55.09%_43.54%_29.08%_43.75%] font-kulim font-normal text-[14px] text-[#d9d9d9] text-center tracking-[0.75px] leading-normal" data-node-id="2028:1276">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
      </p>

      <p className="absolute inset-[53.11%_8.91%_auto_81.51%] font-kulim font-bold text-[18px] text-white tracking-[0.72px] leading-normal" data-node-id="2028:1275">
        SWEET BACON
      </p>
      <p className="absolute inset-[55.35%_7.19%_29.72%_80.1%] font-kulim font-normal text-[14px] text-[#d9d9d9] text-center tracking-[0.75px] leading-normal" data-node-id="2028:1279">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
      </p>

      <p className="absolute inset-[77.96%_27.81%_auto_63.18%] font-kulim font-bold text-[18px] text-white tracking-[0.72px] leading-normal" data-node-id="2028:1274">
        SWEET BACON
      </p>
      <p className="absolute inset-[80.2%_25.52%_4.29%_61.77%] font-kulim font-normal text-[14px] text-[#d9d9d9] text-center tracking-[0.75px] leading-normal" data-node-id="2028:1278">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
      </p>

      <p className="absolute inset-[92.89%_76.67%_auto_7.08%] font-kulim font-bold text-[18px] text-white tracking-[0.72px] leading-normal" data-node-id="2028:1273">
        SWEET BACON
      </p>
      <p className="absolute inset-[95.2%_61.04%_2.69%_7.03%] font-kulim font-normal text-[14px] text-[#d9d9d9] tracking-[0.75px] leading-normal" data-node-id="2028:1277">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
      </p>
    </section>
  );
}
