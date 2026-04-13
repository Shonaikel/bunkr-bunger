const IMG_FRIES  = "/assets/sections/info-fries.png";
const IMG_BURGER = "/assets/burgers/info-burger.png";
const LINE_LEFT  = "/assets/icons/info-line-left.svg";
const LINE_RIGHT = "/assets/icons/info-line-right.svg";

const LOREM =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit Quisque faucibus ex sapien vitae pellentesque sem placerat In id cursus mi pretium tellus duis convallis pellentesque sem placerat.";

const CARDS = [
  { icon: "/assets/icons/info-icon-1.svg", title: "AUTENTICA COMIDA" },
  { icon: "/assets/icons/info-icon-2.svg", title: "INGREDIENTES PREMIUM" },
  { icon: "/assets/icons/info-icon-3.svg", title: "MENÚ CREATIVO" },
];

export default function Information({ className = "" }: { className?: string }) {
  return (
    <section className={`w-full bg-[#0C1011] ${className}`}>
      <div className="max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1700px] mx-auto px-[clamp(1rem,5vw,6.25rem)] py-10">

        {/* Title */}
        <div className="flex items-center justify-center gap-4 mb-4 animate-fade-in-up">
          <div className="h-px flex-1 max-w-[200px]">
            <img src={LINE_LEFT} alt="" className="w-full h-full" />
          </div>
          <p className="font-kulim font-bold text-[clamp(1rem,1.8vw,1.875rem)] text-[#df9a1b] tracking-wide whitespace-nowrap">
            LAS MEJORES HAMBURGUESAS
          </p>
          <div className="h-px flex-1 max-w-[200px]">
            <img src={LINE_RIGHT} alt="" className="w-full h-full" />
          </div>
        </div>

        {/* Subtitle */}
        <p className="font-kulim font-bold text-[clamp(1.25rem,3vw,3rem)] text-white text-center mt-[clamp(1.5rem,2.5vw,3rem)] tracking-wide">
          HAMBURGUESAS QUE ABRAZAN EL ANTOJO
        </p>

        {/* Content */}
        <div className="flex gap-8 mt-10">

          {/* Left — Cards */}
          <div className="w-[45%] shrink-0 bg-[#0f1415] p-[clamp(1.25rem,2vw,2rem)] flex flex-col gap-6 animate-fade-in-up">
            {CARDS.map((c) => (
              <div key={c.title} className="flex items-start gap-4">
                <img
                  src={c.icon}
                  alt={c.title}
                  className="w-25 h-8 mt-1 object-contain shrink-0"
                />
                <div>
                  <p className="font-kulim font-bold text-white text-[clamp(0.75rem,1vw,0.9375rem)] tracking-wide">
                    {c.title}
                  </p>
                  <p className="font-kulim text-[#d9d9d9] text-[clamp(0.6875rem,0.85vw,0.8125rem)] mt-2 leading-relaxed">
                    {LOREM}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — Images */}
          <div className="flex-1 relative h-[clamp(16rem,24vw,26rem)] animate-fade-in-up" style={{ animationDelay: "0.15s" }}>

            {/* Fries */}
            <div className="absolute top-0 left-0 w-[83%] h-full overflow-hidden rounded-sm">
              <img
                src={IMG_FRIES}
                alt="Fries"
                className="w-full h-full object-cover object-[95%_20%] scale-[1.3]"
              />
            </div>

            {/* Burger */}
            <div className="absolute top-[5%] right-0 w-[36%] h-[90%] overflow-hidden rounded-sm">
              <img
                src={IMG_BURGER}
                alt="Burger"
                className="w-full h-full object-cover object-[40%_50%] scale-[1.6] shadow-[0_15px_50px_rgba(0,0,0,0.6)]"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
