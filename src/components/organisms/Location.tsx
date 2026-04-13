const MAP_1  = "/assets/locations/map-1.jpg";
const MAP_2  = "/assets/locations/map-2.jpg";

export default function Location({ className = "" }: { className?: string }) {
  return (
    <section
      className={`w-full bg-[#0c1011] ${className}`}
      data-name="LOCATION"
    >
      <div className="max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1700px] mx-auto px-[clamp(1rem,5vw,6.25rem)] pt-[clamp(1rem,2vw,1.25rem)] pb-[clamp(2.5rem,5vw,3.75rem)]">
      {/* Content row — title + schedule on left, maps on right at the same level */}
      <div className="flex gap-[clamp(1.5rem,3vw,2.5rem)]">
        {/* Left: Title + Schedule & Branches */}
        <div className="w-[42%] shrink-0 animate-fade-in-up">
          <p className="font-kulim font-bold text-[clamp(1.75rem,2vw,2.5rem)] text-white tracking-[0.2px] leading-normal mb-[clamp(1rem,2.5vw,1.875rem)]">
            HORARIOS Y SUCURSALES
          </p>
          <div className="flex items-center mt-[clamp(0.75rem,1.5vw,1.25rem)]">
            {/* Column 1 — Horarios */}
            <div className="w-1/2 pr-[20px]">
              <p className="font-kulim font-bold text-[20px] text-white tracking-[0.6px] leading-normal">
                LUNES A DOMINGO
              </p>
              <div className="mt-[20px]">
                <p className="font-kulim font-bold text-[18px] text-[#df9a1b] tracking-[0.6px] leading-normal">LUNES A VIERNES</p>
                <p className="font-kulim font-normal text-[15px] text-[#d9d9d9] tracking-[0.75px] leading-normal mt-[4px]">10:00am a 9:00pm</p>
              </div>
              <div className="mt-[30px]">
                <p className="font-kulim font-bold text-[18px] text-[#df9a1b] tracking-[0.6px] leading-normal">SABADO A DOMINGO</p>
                <p className="font-kulim font-normal text-[15px] text-[#d9d9d9] tracking-[0.75px] leading-normal mt-[4px]">10:00am a 5:00pm</p>
              </div>
            </div>

            {/* Vertical divider */}
            <div className="w-px h-[60%] bg-white/30" />

            {/* Column 2 — Sucursales */}
            <div className="w-1/2 pl-[20px]">
              <p className="font-kulim font-bold text-[20px] text-white tracking-[0.6px] leading-normal">
                LUNES A DOMINGO
              </p>
              <div className="mt-[20px]">
                <p className="font-kulim font-bold text-[20px] text-[#df9a1b] tracking-[0.6px] leading-normal">HEREDIA</p>
                <p className="font-kulim font-normal text-[15px] text-[#d9d9d9] tracking-[0.75px] leading-normal mt-[4px]">10:00am a 9:00pm</p>
              </div>
              <div className="mt-[30px]">
                <p className="font-kulim font-bold text-[20px] text-[#df9a1b] tracking-[0.6px] leading-normal">SAN JOSÉ</p>
                <p className="font-kulim font-normal text-[15px] text-[#d9d9d9] tracking-[0.75px] leading-normal mt-[4px]">10:00am a 5:00pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Maps */}
        <div className="flex-1 flex gap-[clamp(0.75rem,1.2vw,1rem)] animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          {/* Map 1 — Heredia */}
          <a href="/locations" className="flex-1 min-h-[clamp(14rem,20vw,17.5rem)] aspect-[5/4] rounded-[25px] overflow-hidden hover:opacity-90 transition-opacity">
            <img alt="Mapa Heredia" className="w-full h-full object-cover" src={MAP_1} />
          </a>

          {/* Map 2 — San José */}
          <a href="/locations" className="flex-1 min-h-[clamp(14rem,20vw,17.5rem)] aspect-[5/4] rounded-[25px] overflow-hidden hover:opacity-90 transition-opacity">
            <img alt="Mapa San José" className="w-full h-full object-cover" src={MAP_2} />
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}
