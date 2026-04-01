interface HeroProps {
  className?: string;
}

const HERO_BG     = "https://www.figma.com/api/mcp/asset/edb4a325-558a-4459-b3bd-063f1e1f517a";
const LINE_TEXT   = "https://www.figma.com/api/mcp/asset/67f0538a-4d7b-43c9-9ab2-4d6302d97be1";
const INSTAGRAM   = "https://www.figma.com/api/mcp/asset/bb8bd29e-b61b-4e02-989b-0968e9dabd7d";
const FACEBOOK    = "https://www.figma.com/api/mcp/asset/f748a236-da17-43fb-8a02-a2ffd2525eb7";
const X_ICON      = "https://www.figma.com/api/mcp/asset/0cf17125-4277-4a8b-b43c-bcd426876a5b";

export default function Hero({ className = "" }: HeroProps) {
  return (
    <section
      className={`relative w-full h-[816px] overflow-hidden bg-black ${className}`}
      data-name="HERO"
      data-node-id="2028:1194"
    >
      {/* Background image */}
      <div className="absolute inset-[0_0_12.25%_0] pointer-events-none" data-node-id="2028:1175">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[149.2%] left-[0.01%] max-w-none top-[-12.23%] w-full object-cover" src={HERO_BG} />
        </div>
        <div className="absolute inset-0 shadow-[inset_0px_4px_250px_0px_rgba(0,0,0,0.25)]" />
      </div>

      {/* Bottom blur */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black via-black/60 to-transparent z-10" data-node-id="2028:1176" />

      {/* 05 */}
      <p className="absolute inset-[18.14%_auto_auto_5.21%] font-kulim font-bold text-[14px] text-white leading-normal" data-node-id="2037:1343">05</p>
      {/* 04 */}
      <p className="absolute inset-[25.98%_auto_auto_5.21%] font-kulim font-bold text-[14px] text-white leading-normal" data-node-id="2037:1342">04</p>
      {/* 03 */}
      <p className="absolute inset-[33.82%_auto_auto_5.21%] font-kulim font-bold text-[14px] text-white leading-normal" data-node-id="2037:1341">03</p>
      {/* 02 */}
      <p className="absolute inset-[41.67%_auto_auto_5.21%] font-kulim font-bold text-[14px] text-white leading-normal" data-node-id="2037:1340">02</p>

      {/* Line-text */}
      <div className="absolute inset-[45.34%_94.43%_34.19%_5.57%] flex items-center justify-center">
        <div className="shrink-0 h-px w-[167px] rotate-90" data-node-id="2028:1183">
          <div className="relative w-full h-full">
            <div className="absolute inset-[-2px_0_0_0]">
              <img alt="" className="block max-w-none w-full h-full" src={LINE_TEXT} />
            </div>
          </div>
        </div>
      </div>

      {/* 01 */}
      <p className="absolute inset-[67.28%_auto_auto_5.21%] font-kulim font-bold text-[14px] text-white leading-normal" data-node-id="2028:1177">01</p>

      {/* BUNKR — Kufam Bold 140px tracking-[10px] */}
      <p
        className="absolute inset-[24.63%_auto_auto_13.28%] font-kufam font-bold text-[140px] text-[#df9a1b] tracking-[10px] leading-none [text-shadow:0px_4px_70px_rgba(0,0,0,0.25)]"
        data-node-id="2028:1178"
      >
        BUNKR
      </p>

      {/* Subtitle — League Spartan SemiBold 18px tracking-[5px] */}
      <p
        className="absolute inset-[42.52%_auto_auto_13.8%] font-league font-semibold text-[16px] text-[#d9d9d9] leading-normal"
        data-node-id="2028:1179"
      >
        EL VERDADERO SABER DE LA HAMBURGUESA
      </p>

      {/* CTA Button */}
      <a
        href="#"
        className="absolute inset-[48.77%_73.54%_44.49%_13.85%] flex items-center justify-center bg-[#d9d9d9] rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:opacity-90 transition-opacity"
        data-node-id="2028:1180"
      >
        <span className="font-league font-semibold text-[17px] text-[#1b1b1b] leading-normal">
          ORDENA YA
        </span>
      </a>

      {/* Instagram */}
      <div className="absolute inset-[22.79%_5.89%_75.25%_93.28%]" data-node-id="2028:1185">
        <img alt="Instagram" className="absolute block max-w-none w-full h-full" src={INSTAGRAM} />
      </div>

      {/* Facebook */}
      <div className="absolute inset-[11.03%_6%_86.33%_93.43%] overflow-hidden" data-node-id="2028:1189">
        <div className="absolute inset-[-245.94%_-546.33%_-310.91%_-546.34%]">
          <img alt="Facebook" className="block max-w-none w-full h-full" src={FACEBOOK} />
        </div>
      </div>

      {/* X */}
      <div className="absolute inset-[17.33%_5.89%_80.94%_93.32%] overflow-hidden" data-node-id="2028:1191">
        <div className="absolute inset-[-374.71%_-397.04%_-473.7%_-397.04%]">
          <img alt="X" className="block max-w-none w-full h-full" src={X_ICON} />
        </div>
      </div>
    </section>
  );
}
