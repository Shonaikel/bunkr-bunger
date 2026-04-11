export default function ActionSection({ className = "" }: { className?: string }) {
  return (
    /* Contenedor padre para centrado y evitar espacios extra */
    <div className="flex w-full justify-center bg-[#f4b525] m-0 p-0 leading-none">
      
      <section
        className={`relative w-full max-w-[1920px] min-h-[clamp(26rem,35vw,33.25rem)] overflow-hidden bg-[#f4b525] ${className}`}
        data-name="ACTION SECTION"
      >
        {/* IMAGE BACKGROUND*/}
        <div className="absolute top-0 right-[-53px] bottom-0 w-[60%] pointer-events-none z-0 transform translate-y-[10%]">
          <img
            alt="Bunkr Burger"
            src="/assets/burgers/action-burger.png"
            className="h-full w-full object-cover object-right scale-105 origin-right"
          />
        </div>

        {/* Content layer — Mantenemos tu estructura de grid pero aseguramos el z-index */}
        <div className="relative z-10 min-h-[inherit] max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1700px] mx-auto px-[clamp(1rem,5vw,6.25rem)] grid grid-cols-[45%_1fr]">

          {/* Left — Text + CTA */}
          <div className="flex flex-col justify-center shrink-0">
            <p className="leading-none text-black whitespace-nowrap">
              <span className="block font-league font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-normal">RESERVA YA EN</span>
              <span className="block font-league font-semibold text-[clamp(2.5rem,4.8vw,4rem)] leading-normal">BUNKR</span>
            </p>
            <p className="font-kulim font-bold text-[clamp(0.75rem,0.9vw,0.875rem)] text-[#515151] tracking-[0.42px] leading-normal mt-[clamp(0.5rem,1vw,0.75rem)] max-w-[22.125rem]">
              Escribenos para reservaciones, pedidos o más información y
              déjanos hacer de tu visita un momento único con vistas increíbles, buena comida y un ambiente especial.
            </p>
            <a
              href="/contact"
              className="mt-[clamp(1rem,2vw,1.5rem)] w-fit flex items-center justify-center px-[clamp(1rem,2vw,2rem)] py-[clamp(0.5rem,0.75vw,0.75rem)] bg-[#f3731c] rounded-[5px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] hover:opacity-90 transition-opacity"
            >
              <span className="font-kulim font-semibold text-[clamp(0.875rem,1vw,1rem)] text-white tracking-[2.4px] leading-normal">
                CONTACTANOS
              </span>
            </a>
          </div>

          {/* Right column — El espacio vacío que permite ver la imagen de fondo */}
          <div />

        </div>
      </section>
    </div>
  );
}