// Figma node 2070:1412 — 1920×757px

const IMG_FRIES  = "/assets/info-fries.png";
const IMG_BURGER = "/assets/info-burger.png";
const LINE_LEFT  = "/assets/info-line-left.svg";
const LINE_RIGHT = "/assets/info-line-right.svg";

// Icons — Figma node 2070:1412
const ICON_1 = "/assets/info-icon-1.svg"; // AUTENTICA COMIDA
const ICON_2 = "/assets/info-icon-2.svg"; // INGREDIENTES PREMIUM
const ICON_3 = "/assets/info-icon-3.svg"; // MENÚ CREATIVO

const LOREM = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis pellentesque sem placerat. In id cursus pellentesquet.";

interface InfoCardProps {
  icon: string;
  title: string;
  description: string;
}

function InfoCard({ icon, title, description }: InfoCardProps) {
  return (
    <div className="flex items-center gap-[24px] bg-[#131718] px-[40px] h-[186px] border-0 outline-none">
      <div className="shrink-0 w-[44px] h-[44px]">
        <img alt={title} className="w-full h-full object-contain" src={icon} />
      </div>
      <div className="flex flex-col gap-[8px]">
        <p className="font-kulim font-bold text-[20px] text-white tracking-[0.72px] leading-normal">
          {title}
        </p>
        <p className="font-kulim font-normal text-[13px] text-[#d9d9d9] tracking-[0.75px] leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Information({ className = "" }: { className?: string }) {
  return (
    <section
      className={`relative w-full h-[757px] overflow-hidden bg-[#0C1011] border-0 outline-none ${className}`}
      data-name="INFORMATION"
      data-node-id="2070:1412"
    >
      {/* Title */}
      <p
        className="absolute inset-[0_33.02%_auto_29.48%] font-kulim font-bold text-[36px] text-[#df9a1b] text-center tracking-[1.2px] leading-normal"
        data-node-id="2070:1383"
      >
        LAS MEJORES HAMBURGUESAS
      </p>

      {/* Decorative line left */}
      <div className="absolute inset-[3.3%_69.53%_auto_18.85%] flex items-center justify-center">
        <div className="shrink-0 h-px w-[223px] rotate-180">
          <div className="relative w-full h-full">
            <div className="absolute inset-[-2px_0_0_0]">
              <img alt="" className="block max-w-none w-full h-full" src={LINE_LEFT} />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative line right */}
      <div className="absolute inset-[3.3%_22.4%_auto_65.99%] flex items-center justify-center">
        <div className="shrink-0 h-px w-[223px] rotate-180">
          <div className="relative w-full h-full">
            <div className="absolute inset-[-2px_0_0_0]">
              <img alt="" className="block max-w-none w-full h-full" src={LINE_RIGHT} />
            </div>
          </div>
        </div>
      </div>

      {/* Subtitle */}
      <p
        className="absolute inset-[9.25%_7.86%_auto_6.82%] font-kulim font-bold text-[54px] text-white text-center tracking-[1.8px] leading-normal"
        data-node-id="2070:1384"
      >
        HAMBURGUESAS QUE ABRAZAN EL ANTOJO
      </p>

      {/* Cards column — left side */}
      <div
        className="absolute top-[26.55%] left-[5.21%] right-[53.8%] bottom-0 flex flex-col"
        data-node-id="cards-column"
      >
        <InfoCard icon={ICON_1} title="AUTENTICA COMIDA"     description={LOREM} />
        <InfoCard icon={ICON_2} title="INGREDIENTES PREMIUM" description={LOREM} />
        <InfoCard icon={ICON_3} title="MENÚ CREATIVO"        description={LOREM} />
      </div>

      {/* Fries image — right side top */}
      <div className="absolute inset-[26.55%_9.48%_0_49.48%] overflow-hidden pointer-events-none" data-node-id="2070:1387">
        <img alt="Fries" className="absolute h-[115.8%] left-[-31.09%] max-w-none top-[-2.17%] w-[146.39%] object-cover" src={IMG_FRIES} />
      </div>

      {/* Burger image — right side bottom */}
      <div className="absolute inset-[30.25%_5.21%_8.98%_80.83%] shadow-[0px_4px_70px_0px_rgba(0,0,0,0.25)] overflow-hidden pointer-events-none" data-node-id="2070:1388">
        <img alt="Burger" className="absolute h-[140.43%] left-[-235.16%] max-w-none top-[-19.13%] w-[431.87%] object-cover" src={IMG_BURGER} />
      </div>
    </section>
  );
}
