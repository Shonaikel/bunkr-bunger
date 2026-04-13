const LOREM = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque sapien planet.";

const SERVICES = [
  { icon: "/assets/icons/icon-delivery.svg", title: "36 MINUTOS DE DELIVERY" },
  { icon: "/assets/icons/icon-drinks.svg", title: "VARIEDAD DE DIPS" },
  { icon: "/assets/icons/icon-shipping.svg", title: "ENVIO GRATIS" },
  { icon: "/assets/icons/icon-award.svg", title: "LA MEJOR GARANTIA" },
];

export default function Services({ className = "" }: { className?: string }) {
  return (
    <section
      className={`w-full bg-[#0C1011] border-0 outline-none ${className}`}
      data-name="SERVICE"
    >
      <div className="max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1700px] mx-auto px-[clamp(1rem,5vw,6.25rem)]">
      <div className="flex">
        {SERVICES.map((s, i) => (
          <div key={s.title} className="flex-1 flex flex-col items-center gap-[12px] bg-[#131718] px-[clamp(0.75rem,1.5vw,1.5rem)] py-[clamp(1.25rem,2vw,2rem)] min-h-[clamp(16rem,22vw,0.5rem)] border-0 outline-none animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="w-[60px] h-[60px]">
              <img alt={s.title} className="w-full h-full object-contain" src={s.icon} />
            </div>
            <p className="font-kulim font-bold text-[20px] text-white text-center tracking-[0.72px] leading-normal">
              {s.title}
            </p>
            <p className="font-kulim font-normal text-[14px] text-[#d9d9d9] text-center tracking-[0.75px] leading-normal">
              {LOREM}
            </p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
