const IMG_FRIES  = "/assets/sections/info-fries.png";
const IMG_BURGER = "/assets/burgers/info-burger.png";
const LINE_LEFT  = "/assets/icons/info-line-left.svg";
const LINE_RIGHT = "/assets/icons/info-line-right.svg";

const LOREM = "Lorem ipsum dolor sit amet consectetur adipiscing elit Quisque faucibus ex sapien vitae pellentesque sem placerat In id cursus mi pretium tellus duis convallis pellentesque sem placerat.";

const CARDS = [
  { icon: "/assets/icons/info-icon-1.svg", title: "AUTENTICA COMIDA" },
  { icon: "/assets/icons/info-icon-2.svg", title: "INGREDIENTES PREMIUM" },
  { icon: "/assets/icons/info-icon-3.svg", title: "MENÚ CREATIVO" },
];

export default function Information({ className = "" }: { className?: string }) {
  return (
    <section
      className={`w-full bg-[#0C1011] border-0 outline-none ${className}`}
      data-name="INFORMATION"
    >
      <div className="max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1700px] mx-auto px-[clamp(1rem,5vw,6.25rem)] py-[10px]">
      {/* Title with decorative lines */}
      <div className="flex items-center justify-center gap-[clamp(0.5rem,1.5vw,1rem)]">
        <div className="shrink-0 h-px flex-1 max-w-[223px]">
          <img alt="" className="block w-full h-full" src={LINE_LEFT} />
        </div>
        <p className="font-kulim font-bold text-[clamp(1.5rem,2.1vw,2.5rem)] text-[#df9a1b] text-center tracking-[1.2px] leading-normal whitespace-nowrap">
          LAS MEJORES HAMBURGUESAS
        </p>
        <div className="shrink-0 h-px flex-1 max-w-[223px]">
          <img alt="" className="block w-full h-full" src={LINE_RIGHT} />
        </div>
      </div>

      {/* Subtitle */}
      <p className="font-kulim font-bold text-[clamp(2rem,3.2vw,3.75rem)] text-white text-center tracking-[1.8px] leading-normal mt-[clamp(1rem,2.5vw,1.875rem)]">
        HAMBURGUESAS QUE ABRAZAN EL ANTOJO
      </p>

      {/* Content row */}
      <div className="flex gap-[clamp(1.5rem,3vw,2.5rem)] mt-[clamp(1.5rem,3vw,2.5rem)]">
        {/* Cards column */}
        <div className="w-[46%] shrink-0 flex flex-col">
          {CARDS.map((c) => (
            <div key={c.title} className="flex items-center gap-[clamp(1rem,1.8vw,1.5rem)] bg-[#131718] px-[clamp(1rem,2.5vw,2.5rem)] min-h-[clamp(9rem,14vw,11.625rem)] flex-1 border-0 outline-none">
              <div className="shrink-0 w-[clamp(2rem,2.3vw,2.75rem)] h-[clamp(2rem,2.3vw,2.75rem)]">
                <img alt={c.title} className="w-full h-full object-contain" src={c.icon} />
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className="font-kulim font-bold text-[clamp(1rem,1.25vw,1.5rem)] text-white tracking-[0.72px] leading-normal">
                  {c.title}
                </p>
                <p className="font-kulim font-normal text-[clamp(0.75rem,0.9vw,0.9375rem)] text-[#d9d9d9] tracking-[0.75px] leading-normal">
                  {LOREM}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Images */}
        <div className="flex-1 relative min-h-[clamp(24rem,40vw,34.875rem)]">
          {/* Fries image — background, cropped */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt="Fries"
              className="absolute top-[-2.17%] left-[-31.09%] w-[114%] h-[115.8%] max-w-none object-cover pointer-events-none"
              src={IMG_FRIES}
            />
          </div>
          {/* Burger image — overlay on right, extending slightly past fries */}
          <div className="absolute top-[5%] right-0 bottom-[12%] w-[35%] overflow-hidden shadow-[0px_4px_70px_0px_rgba(0,0,0,0.25)]">
            <img
              alt="Burger"
              className="absolute top-[-19.13%] left-[-170%] w-[431.87%] h-[140.43%] max-w-none object-cover pointer-events-none"
              src={IMG_BURGER}
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
