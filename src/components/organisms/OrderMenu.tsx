const IMG_LEFT    = "/assets/menu/menu-left.png";
const IMG_MID_T   = "/assets/menu/menu-right.jpg";
const IMG_MID_B   = "/assets/menu/menu-mid-t.jpg";
const IMG_RIGHT_B = "/assets/menu/menu-mid-b.jpg";

const LOREM  = "Lorem ipsum dolor sit amet consectetur adipiscing elit Quisque faucibus ex sapien vitae pellentesque sem placerat In id cursus mi pretium tellus duis convallis Quisque faucibus ex sapien vitae pellentesque sem placerat In id cursus mi pretium tellus duis convallis.";
const LOREM1 = "Lorem ipsum dolor sit amet consectetur adipiscing elit Quisque faucibus ex sapien vitae pellentesque sem placerat In id cursus mi pretium tellus duis convallis In id cursus mi pretium tellus duis.";

function Card({ text }: { text: string }) {
  return (
    <div className="bg-[#131718] flex flex-col justify-center items-center px-[clamp(1rem,2vw,1.875rem)] py-[clamp(1rem,2vw,1.875rem)] text-center overflow-hidden">
      <p className="font-kulim font-bold text-[24px] text-white tracking-[0.72px] leading-normal">SWEET BACON</p>
      <p className="font-kulim font-normal text-[15px] text-[#d9d9d9] tracking-[0.75px] leading-normal mt-[12px]">{text}</p>
    </div>
  );
}

function ImgCell({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden">
      <img alt={alt} src={src} className="w-full h-full object-cover" />
    </div>
  );
}

export default function OrderMenu({ className = "" }: { className?: string }) {
  return (
    <section
      className={`w-full bg-black ${className}`}
      data-name="ORDER MENU"
    >
      <div className="max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1700px] mx-auto px-[clamp(1rem,5vw,6.25rem)]">
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr] grid-rows-2 min-h-[clamp(28rem,42vw,40rem)]">

        {/* Col 1 — large image, spans both rows */}
        <div className="relative overflow-hidden row-span-2">
          <img alt="Burger" src={IMG_LEFT} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end
            pl-[clamp(1rem,1.5vw,1.5rem)] pr-[clamp(1.5rem,4vw,5rem)] pb-[20px] pt-[60px]
            bg-gradient-to-t from-black/80 to-transparent">
            <p className="font-kulim font-bold text-[24px] text-white tracking-[0.72px] leading-normal">SWEET BACON</p>
            <p className="font-kulim font-normal text-[15px] text-[#d9d9d9] tracking-[0.75px] leading-normal mt-[6px]">{LOREM1}</p>
          </div>
        </div>

        {/* Row 1 — Card | Image | Card */}
        <Card text={LOREM} />
        <ImgCell src={IMG_MID_T} alt="Dish" />
        <Card text={LOREM} />

        {/* Row 2 — Image | Card | Image */}
        <ImgCell src={IMG_MID_B} alt="Burger" />
        <Card text={LOREM} />
        <ImgCell src={IMG_RIGHT_B} alt="Food" />

      </div>
      </div>
    </section>
  );
}
