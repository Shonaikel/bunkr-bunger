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
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px flex-1 max-w-[200px]">
            <img src={LINE_LEFT} alt="" className="w-full h-full" />
          </div>

          <p className="font-kulim font-bold text-xl md:text-2xl xl:text-3xl text-[#df9a1b] tracking-wide whitespace-nowrap">
            LAS MEJORES HAMBURGUESAS
          </p>

          <div className="h-px flex-1 max-w-[200px]">
            <img src={LINE_RIGHT} alt="" className="w-full h-full" />
          </div>
        </div>

        {/* Subtitle */}
        <p className="font-kulim font-bold text-2xl md:text-4xl xl:text-5xl text-white text-center mt-8 md:mt-10 xl:mt-12 tracking-wide">
          HAMBURGUESAS QUE ABRAZAN EL ANTOJO
        </p>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-8 mt-10">

          {/* Left — Cards */}
          <div className="w-full lg:w-[45%] bg-[#0f1415] p-6 md:p-8 flex flex-col gap-8">

            {CARDS.map((c) => (
              <div key={c.title} className="flex items-start gap-4">

                {/* Icon */}
                <img
                  src={c.icon}
                  alt={c.title}
                  className="w-25 h-8 mt-1 object-contain"
                />

                {/* Text */}
                <div>
                  <p className="font-kulim font-bold text-white text-sm md:text-base tracking-wide">
                    {c.title}
                  </p>
                  <p className="text-[#d9d9d9] text-xs md:text-sm mt-2 leading-relaxed">
                    {LOREM}
                  </p>
                </div>

              </div>
            ))}

          </div>

          {/* Right — Images */}
          <div className="w-full lg:w-[55%] relative h-[320px] md:h-[400px] lg:h-[450px]">

            {/* Contenedor de papas */}
            <div className="absolute top-0 left-0 w-[83%] h-full overflow-hidden rounded-sm">
              <img
                src={IMG_FRIES}
                alt="Fries"
                className="
                  w-full h-full
                  object-cover
                  object-[95%_20%]   /* ← mueve el foco */
                  scale-[1.3]       /* ← zoom más marcado */
                "
              />
            </div>

            {/* Burger */}
            <div className="absolute top-[5%] right-0 w-[48%] md:w-[40%] lg:w-[34%] h-[90%] overflow-hidden rounded-sm">
              <img
                src={IMG_BURGER}
                alt="Burger"
                className="
                  w-full h-full
                  object-cover
                  object-[40%_50%]
                  scale-[1.6]
                  shadow-[0_15px_50px_rgba(0,0,0,0.6)]
                "
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}