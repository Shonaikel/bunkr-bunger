const HERO_BG   = "/assets/hero/hero-bg.jpg";
const FACEBOOK  = "/assets/hero/hero-facebook.svg";
const X_ICON    = "/assets/hero/hero-x-icon.svg";
const INSTAGRAM = "/assets/hero/hero-instagram.svg";

const SOCIAL_ICONS = [
  { src: FACEBOOK,  alt: "Facebook",  size: "w-[clamp(1rem,1.2vw,1.875rem)]", href: "#" },
  { src: X_ICON,    alt: "X",         size: "w-[clamp(1rem,1.5vw,2.3125rem)]", href: "#" },
  { src: INSTAGRAM, alt: "Instagram", size: "w-[clamp(1rem,1vw,1.5625rem)]",  href: "#" },
];

const numClass = "font-kulim font-bold text-[clamp(0.625rem,0.85vw,0.875rem)] text-white leading-normal";

export default function Hero({ className = "" }: { className?: string }) {
  return (
    /* Eliminamos cualquier margin/padding con m-0 p-0 y aseguramos que no haya espacio de línea con leading-none */
    <div className="flex w-full justify-center bg-black m-0 p-0 leading-none">
      
      <section className={`relative w-full max-w-[1920px] overflow-hidden bg-black aspect-[1920/816] m-0 ${className}`}>

        {/* Background image - block evita el espacio reservado para descendentes de texto */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            alt=""
            src={HERO_BG}
            className="absolute w-full h-full object-cover object-center block"
          />
          <div className="absolute inset-0 shadow-[inset_0px_4px_250px_0px_rgba(0,0,0,0.25)]" />
        </div>

        {/* Decorative overlays */}
        <div className="absolute bg-[rgba(0,0,0,0.8)] blur-[60px] inset-[79.66%_0_0_0] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black via-black/60 to-transparent z-10 pointer-events-none" />

        {/* Main layout */}
        <div className="relative z-20 h-full max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1700px] mx-auto py-[clamp(1.5rem,4.5vw,4.5rem)] grid grid-cols-[clamp(2.75rem,4.6vw,4.625rem)_1fr_2.5625rem] gap-[clamp(0.75rem,2vw,2rem)] items-start">

          {/* Numbers column */}
          <div className="flex flex-col items-center pt-[clamp(0.5rem,2.2vw,2rem)]">
            <div className="flex flex-col items-center gap-[clamp(1rem,2.6vw,2.5rem)]">
              {['05', '04', '03', '02'].map(n => <p key={n} className={numClass}>{n}</p>)}
            </div>
            <div className="flex flex-col items-center gap-[clamp(0.75rem,1.6vw,1.5rem)] mt-[clamp(0.75rem,1.6vw,1.5rem)]">
              <div className="w-px bg-white h-[clamp(2.5rem,8.7vw,10.4375rem)]" />
              <p className={numClass}>01</p>
            </div>
          </div>

          {/* Content block */}
          <div className="flex flex-col gap-[clamp(0.125rem,0.3vw,0.25rem)] max-w-[clamp(16rem,32vw,31.25rem)] pt-[clamp(1rem,4.5vw,4.5rem)] pl-[clamp(0.5rem,3vw,4rem)]">
            <p className="font-kufam font-bold text-[#df9a1b] tracking-[clamp(0.375rem,0.73vw,0.875rem)] leading-none [text-shadow:0px_4px_70px_rgba(0,0,0,0.25)] text-[clamp(2.75rem,7.3vw,8.75rem)]">
              BUNKR
            </p>

            <p className="font-league font-semibold text-[#d9d9d9] tracking-[0.9px] leading-normal text-[clamp(0.5rem,0.94vw,1.125rem)]">
              EL VERDADERO SABER DE LA HAMBURGUESA
            </p>

            <a
              href="/menu"
              className="mt-[clamp(0.5rem,1vw,1rem)] w-fit flex items-center justify-center bg-[#d9d9d9] rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-[clamp(1rem,2vw,2rem)] py-[clamp(0.5rem,0.75vw,0.75rem)] hover:opacity-90 transition-opacity"
            >
              <span className="font-league font-semibold text-[#1b1b1b] tracking-[1px] leading-normal text-[clamp(0.625rem,1.05vw,1.25rem)]">
                ORDENA YA
              </span>
            </a>
          </div>

          {/* Social icons column */}
          <div className="flex flex-col items-center gap-[clamp(1rem,2.6vw,2.5rem)] pt-[clamp(0.25rem,1.1vw,1rem)]">
            {SOCIAL_ICONS.map(({ src, alt, size, href }) => (
              <a key={alt} href={href} className="hover:opacity-70 transition-opacity flex items-center justify-center">
                <img alt={alt} src={src} className={`object-contain ${size} block`} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}