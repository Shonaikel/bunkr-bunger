export default function ActionSection({ className = "" }: { className?: string }) {
  return (
    <div className="flex w-full justify-center bg-[#f4b525] leading-none">
      
      <section
        className={`relative w-full max-w-[1920px] min-h-[clamp(26rem,35vw,33.25rem)] bg-[#f4b525] ${className}`}
        data-name="ACTION SECTION"
      >

        {/* IMAGE BACKGROUND */}
        <div className="absolute top-0 right-0 bottom-0 w-[65%] translate-x-[4%] translate-y-[12%]">
          <img
            alt="Bunkr Burger"
            src="/assets/burgers/action-burger.png"
            className="h-full w-full object-cover object-right scale-105"
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 min-h-[inherit] max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1700px] mx-auto px-[clamp(1rem,5vw,6.25rem)] flex">

          {/* Left — Text + CTA */}
          <div className="flex flex-col ml-[8%] -mt-[4rem] justify-center w-full lg:w-[45%] animate-fade-in-up">

            <p className="leading-none text-black whitespace-nowrap">
              <span className="block font-league font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-normal">
                RESERVA YA EN
              </span>
              <span className="block font-league font-semibold text-[clamp(2.5rem,4.8vw,4rem)] leading-normal">
                BUNKR
              </span>
            </p>

            <p className="font-kulim font-bold text-[clamp(0.75rem,0.9vw,0.875rem)] text-[#515151] mt-[clamp(0.5rem,1vw,0.75rem)] max-w-[25rem]">
              Escríbenos para reservaciones, pedidos o más información y déjanos hacer de tu visita un momento único con vistas increíbles, buena comida y un ambiente especial.
            </p>

            <a
              href="/contact"
              className="mt-[clamp(1rem,2vw,1.5rem)] w-fit flex items-center justify-center px-[clamp(1rem,2vw,2rem)] py-[clamp(0.5rem,0.75vw,0.75rem)] bg-[#f3731c] rounded-[5px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span className="font-kulim font-semibold text-[clamp(0.875rem,1vw,1rem)] text-white tracking-[2.4px]">
                CONTÁCTANOS
              </span>
            </a>

          </div>

        </div>
      </section>
    </div>
  );
}