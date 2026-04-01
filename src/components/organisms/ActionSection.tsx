// Figma node 2070:1478 — 1920×532px

const BURGER_IMG = "https://www.figma.com/api/mcp/asset/c9fdfba5-4a8f-4323-9e4d-02b8c3f2cccf";

export default function ActionSection({ className = "" }: { className?: string }) {
  return (
    <section
      className={`relative w-full h-[532px] overflow-hidden bg-[#f4b525] ${className}`}
      data-name="ACTION SECTION"
      data-node-id="2070:1478"
    >
      {/* Burger image — right side */}
      <div className="absolute inset-[4.51%_0_0_32.29%] overflow-hidden pointer-events-none" data-node-id="2070:1476">
        <img
          alt="Burger"
          className="absolute h-[233.87%] left-[6.12%] max-w-none top-[-60.31%] w-[99.24%] object-cover"
          src={BURGER_IMG}
        />
      </div>

      {/* Title: "DISFRUTA YA EN BUNKR" */}
      <p
        className="absolute inset-[20.49%_64.68%_auto_17.16%] leading-none text-black whitespace-nowrap"
        data-node-id="2070:1471"
      >
        <span className="block font-['Kumbh_Sans',sans-serif] font-semibold text-[40px] leading-normal">DISFRUTA YA EN</span>
        <span className="block font-['Kumbh_Sans',sans-serif] font-semibold text-[64px] leading-normal">BUNKR</span>
      </p>

      {/* Subtitle */}
      <p
        className="absolute inset-[46.99%_64.37%_auto_17.16%] font-kulim font-bold text-[14px] text-[#515151] tracking-[0.42px] leading-normal"
        data-node-id="2070:1475"
      >
        Enjoy breathtaking views, beautiful landscapes, and unforgettable moments in one of the world's most iconic destinations.
      </p>

      {/* CTA Button */}
      <a className="absolute contents cursor-pointer" data-node-id="2070:1472">
        <div
          className="absolute inset-[60.9%_72.82%_28.57%_17.16%] bg-[#f3731c] rounded-[5px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] hover:opacity-90 transition-opacity"
          data-node-id="2070:1473"
        />
        <p
          className="absolute inset-[64.29%_72.82%_auto_17.16%] font-kulim font-semibold text-[16px] text-white text-center tracking-[2.4px] leading-normal cursor-pointer whitespace-nowrap"
          data-node-id="2070:1474"
        >
          ORDENA YA
        </p>
      </a>
    </section>
  );
}
