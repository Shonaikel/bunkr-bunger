const HERO_BG   = "/assets/hero/hero-bg.jpg";
const FACEBOOK  = "/assets/hero/hero-facebook.svg";
const X_ICON    = "/assets/hero/hero-x-icon.svg";
const INSTAGRAM = "/assets/hero/hero-instagram.svg";

const SOCIAL_ICONS = [
  { src: FACEBOOK,  alt: "Facebook",  href: "#" },
  { src: X_ICON,    alt: "X",         href: "#" },
  { src: INSTAGRAM, alt: "Instagram", href: "#" },
];

const numClass = "font-kulim font-bold text-xs md:text-sm text-white leading-none";

export default function Hero({ className = "" }: { className?: string }) {
  return (
    <div className="flex w-full justify-center bg-black m-0 p-0 leading-none">
      <section className={`relative w-full max-w-[1920px] overflow-hidden bg-black aspect-[1920/816] m-0 ${className}`}>

        {/* Background image */}
        <div className="absolute inset-0 pointer-events-none">
          <img 
            alt="" 
            src={HERO_BG} 
            className="absolute w-full h-full object-cover object-center block"
          />
           <div className="absolute inset-0" />
        </div>

        {/* Decorative overlays */}
        <div className="absolute bg-[rgba(0,0,0,0.8)] blur-[60px] inset-[79.66%_0_0_0] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black via-black/60 to-transparent z-10 pointer-events-none" />

        {/* Main layout */}
        <div className="relative z-20 h-full max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1700px] mx-auto gap-4 md:gap-8 items-start py-8 md:py-21 grid grid-cols-[clamp(2.75rem,4.6vw,4.625rem)_1fr_2.5625rem]">

          {/* Numbers column */}
          <div className="flex flex-col items-center pt-[clamp(0.5rem,2.2vw,2rem)] animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-col items-center gap-[clamp(1rem,2.6vw,2.5rem)]">
              {['05', '04', '03', '02'].map(n => <p key={n} className={numClass}>{n}</p>)}
            </div>
            <div className="flex flex-col items-center gap-[clamp(0.75rem,1.6vw,1.5rem)] mt-[clamp(0.75rem,1.6vw,1.5rem)]">
              <div className="w-px bg-white h-[clamp(2.5rem,8.7vw,10.4375rem)]" />
              <p className={numClass}>01</p>
            </div>
          </div>

          {/* Content block */}
          <div className="flex flex-col gap-1 md:gap-2 max-w-md md:max-w-lg pt-4 md:pt-12 pl-2 md:pl-20 animate-fade-in-up">
            <p className="font-kufam font-bold text-[#df9a1b] leading-none tracking-wider text-[clamp(3rem,7vw,8rem)] drop-shadow-lg">
              BUNKR
            </p>

            <p className="font-league font-semibold text-[#d9d9d9] tracking-[0.5px] leading-normal text-[clamp(0.5rem,0.94vw,1.125rem)]">
              EL VERDADERO SABER DE LA HAMBURGUESA
            </p>

            <a
              href="/menu"
              className="mt-4 w-fit flex items-center justify-center bg-[#d9d9d9] text-[#1b1b1b] rounded-md px-6 py-2 md:px-8 md:py-3 
                         shadow hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span className="font-league font-semibold text-[#1b1b1b] tracking-[1px] leading-normal text-[clamp(0.625rem,1.05vw,1.25rem)]">
                ORDENA YA
              </span>
            </a>
          </div>

          {/* Social icons column */}
            <div className="flex flex-col items-center gap-4 md:gap-6 pt-2 md:pt-4 translate-x-2 md:translate-x-2.5 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            {SOCIAL_ICONS.map(({ src, alt, href }) => (
              <a
                key={alt}
                href={href}
                className="hover:opacity-70 transition-opacity flex items-center justify-center"
              >
                <img
                  src={src}
                  alt={alt}
                  className="w-4 md:w-6 xl:w-7 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}