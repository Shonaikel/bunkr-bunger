// Figma node 2070:1468 — 1920×389px

const MAP_BG    = "https://www.figma.com/api/mcp/asset/6a5eb234-1db3-4a8e-a2e5-fcb7779edc6d";
const MAP_1     = "https://www.figma.com/api/mcp/asset/837a9b8e-5ebc-4cbd-bb58-6b79828b9669";
const MAP_2     = "https://www.figma.com/api/mcp/asset/d9717a9a-abbe-4b80-91c7-721a6f0da0df";
const LINE      = "https://www.figma.com/api/mcp/asset/83209165-21bc-413b-9e6c-fdf2fa1f8e07";

export default function Location({ className = "" }: { className?: string }) {
  return (
    <section
      className={`relative w-full h-[389px] overflow-hidden bg-[#0c1011] ${className}`}
      data-name="LOCATION"
      data-node-id="2070:1468"
    >
      {/* Title */}
      <p
        className="absolute inset-[2.57%_54.72%_auto_7.72%] font-kulim font-bold text-[40px] text-white text-center tracking-[1.2px] leading-normal whitespace-nowrap"
        data-node-id="2070:1465"
      >
        HORARIOS Y SUCURSALES
      </p>

      {/* Column 1 header */}
      <p className="absolute inset-[23.14%_76.67%_auto_13.59%] font-kulim font-bold text-[20px] text-white tracking-[0.6px] leading-normal whitespace-nowrap" data-node-id="2070:1455">
        LUNES A DOMINGO
      </p>
      {/* Column 2 header */}
      <p className="absolute inset-[23.14%_60.31%_auto_29.69%] font-kulim font-bold text-[20px] text-white tracking-[0.6px] leading-normal whitespace-nowrap" data-node-id="2070:1456">
        LUNES A DOMINGO
      </p>

      {/* Vertical divider line */}
      <div className="absolute inset-[31.63%_73.19%_23.23%_26.81%] flex items-center justify-center">
        <div className="shrink-0 h-px w-[175.597px] rotate-90">
          <div className="relative w-full h-full">
            <div className="absolute inset-[-2px_0_0_0]">
              <img alt="" className="block max-w-none w-full h-full" src={LINE} />
            </div>
          </div>
        </div>
      </div>

      {/* Row 1 col 1 */}
      <p className="absolute inset-[40.36%_77.76%_auto_13.65%] font-kulim font-bold text-[20px] text-[#df9a1b] tracking-[0.6px] leading-normal whitespace-nowrap" data-node-id="2070:1457">LUNES A VIERNES</p>
      <p className="absolute inset-[50.64%_78.75%_auto_13.59%] font-kulim font-normal text-[15px] text-[#d9d9d9] tracking-[0.75px] leading-normal whitespace-nowrap" data-node-id="2070:1461">10:00am a 9:00pm</p>

      {/* Row 1 col 2 */}
      <p className="absolute inset-[40.36%_65.89%_auto_29.74%] font-kulim font-bold text-[20px] text-[#df9a1b] tracking-[0.6px] leading-normal whitespace-nowrap" data-node-id="2070:1458">HEREDIA</p>
      <p className="absolute inset-[50.64%_62.92%_auto_29.69%] font-kulim font-normal text-[15px] text-[#d9d9d9] tracking-[0.75px] leading-normal whitespace-nowrap" data-node-id="2070:1462">10:00am a 9:00pm</p>

      {/* Row 2 col 1 */}
      <p className="absolute inset-[68.89%_75.68%_auto_13.65%] font-kulim font-bold text-[20px] text-[#df9a1b] tracking-[0.6px] leading-normal whitespace-nowrap" data-node-id="2070:1459">SABADO A DOMINGO</p>
      <p className="absolute inset-[78.92%_78.75%_auto_13.59%] font-kulim font-normal text-[15px] text-[#d9d9d9] tracking-[0.75px] leading-normal whitespace-nowrap" data-node-id="2070:1463">10:00am a 5:00pm</p>

      {/* Row 2 col 2 */}
      <p className="absolute inset-[68.89%_65.26%_auto_29.74%] font-kulim font-bold text-[20px] text-[#df9a1b] tracking-[0.6px] leading-normal whitespace-nowrap" data-node-id="2070:1460">SAN JOSÉ</p>
      <p className="absolute inset-[78.92%_62.92%_auto_29.69%] font-kulim font-normal text-[15px] text-[#d9d9d9] tracking-[0.75px] leading-normal whitespace-nowrap" data-node-id="2070:1464">10:00am a 5:00pm</p>

      {/* Map 1 — Heredia */}
      <div className="absolute inset-[8.74%_26.76%_16.45%_54.83%] rounded-[25px] overflow-hidden" data-node-id="2070:1452">
        <img alt="" className="absolute max-w-none object-cover w-full h-full rounded-[25px]" src={MAP_BG} />
        <div className="absolute inset-0 overflow-hidden rounded-[25px]">
          <img alt="Mapa Heredia" className="absolute h-[109.35%] left-[-19.98%] max-w-none top-[-9.34%] w-[132.44%] object-cover" src={MAP_1} />
        </div>
      </div>

      {/* Map 2 — San José */}
      <div className="absolute inset-[7.71%_7.25%_17.48%_74.33%] rounded-[25px] overflow-hidden" data-node-id="2070:1453">
        <img alt="" className="absolute max-w-none object-cover w-full h-full rounded-[25px]" src={MAP_BG} />
        <div className="absolute inset-0 overflow-hidden rounded-[25px]">
          <img alt="Mapa San José" className="absolute h-[121.36%] left-[-32.8%] max-w-none top-[-12.67%] w-[165.24%] object-cover" src={MAP_2} />
        </div>
      </div>
    </section>
  );
}
