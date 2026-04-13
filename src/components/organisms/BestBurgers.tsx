import BurgerCard from '../molecules/BurgerCard';
import { BURGERS } from '../../constants/burgers';

const BG_BLUR    = "/assets/sections/best-bg-blur.jpg";
const LINE_LEFT  = "/assets/icons/line-left.svg";
const LINE_RIGHT = "/assets/icons/line-right.svg";

export default function BestBurgers({ className = "" }: { className?: string }) {
  return (
    <section
      className={`relative w-full min-h-[clamp(20rem,30vw,26rem)] overflow-hidden bg-black mt-[clamp(-2.5rem,-2.5vw,-1rem)] ${className}`}
      data-name="BEST BURGERS"
    >
      {/* Blurred background — full-bleed, dynamically cropped */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          alt=""
          src={BG_BLUR}
          className="absolute inset-0 w-full h-full object-cover object-center blur-[8px] scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Content — flex column, centered */}
      <div className="relative z-10 max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1700px] mx-auto px-[clamp(1rem,5vw,6.25rem)] flex flex-col items-center justify-between gap-[clamp(0.75rem,1.5vw,1.25rem)] pt-0 pb-[clamp(1.5rem,3vw,2.25rem)]">

        {/* Title with decorative lines */}
        <div className="flex items-center justify-center gap-[clamp(0.5rem,1.5vw,1rem)] w-full animate-fade-in-up">
          <div className="shrink-0 h-px flex-1 max-w-[4500px] xl:max-w-[600px]">
            <img alt="" className="block w-full h-full" src={LINE_LEFT} />
          </div>
          <p className="font-kulim font-bold text-[35px] text-[#df9a1b] text-center tracking-[1.2px] leading-normal whitespace-nowrap">
            LO MEJOR DE LO MEJOR
          </p>
          <div className="shrink-0 h-px flex-1 max-w-[4500px] xl:max-w-[600px]">
            <img alt="" className="block w-full h-full" src={LINE_RIGHT} />
          </div>
        </div>

        {/* Burger cards */}
        <div className="flex justify-center gap-4 w-full animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          {BURGERS.map((b) => (
            <BurgerCard key={b.href} image={b.image} name={b.name} price={`$${b.price.toFixed(2)}`} description={b.description} href={b.href} />
          ))}
        </div>

        {/* VER MENÚ button */}
        <a
          href="/menu"
          className="h-[46px] px-8 flex items-center justify-center bg-[#f3731c] rounded-[5px]
                    hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
        >
          <span className="font-kulim font-bold text-[18px] text-white tracking-[0.96px] leading-normal">
            VER MENÚ
          </span>
        </a>

      </div>
    </section>
  );
}
