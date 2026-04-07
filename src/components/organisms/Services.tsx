// Figma node 2070:1448 — 1920×301px

const ICON_DELIVERY  = "/assets/icon-delivery.svg";
const ICON_DRINKS    = "/assets/icon-drinks.svg";
const ICON_SHIPPING  = "/assets/icon-shipping.svg";
const ICON_AWARD     = "/assets/icon-award.svg";

const LOREM = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien planet.";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="flex-1 flex flex-col items-center gap-[12px] bg-[#131718] px-[24px] py-[32px] h-[301px] border-0 outline-none">
      <div className="w-[64px] h-[64px]">
        <img alt={title} className="w-full h-full object-contain" src={icon} />
      </div>
      <p className="font-kulim font-bold text-[20px] text-white text-center tracking-[0.72px] leading-normal">
        {title}
      </p>
      <p className="font-kulim font-normal text-[14px] text-[#d9d9d9] text-center tracking-[0.75px] leading-normal">
        {description}
      </p>
    </div>
  );
}

export default function Services({ className = "" }: { className?: string }) {
  return (
    <section
      className={`w-full px-[100px] bg-[#0C1011] border-0 outline-none ${className}`}
      data-name="SERVICE"
      data-node-id="2070:1448"
    >
      <div className="flex">
        <ServiceCard icon={ICON_DELIVERY} title="36 MINUTOS DE DELIVERY"       description={LOREM} />
        <ServiceCard icon={ICON_DRINKS}   title="VARIEDAD DE ACOMPANAMIENTOS"  description={LOREM} />
        <ServiceCard icon={ICON_SHIPPING} title="ENVIO GRATIS"                 description={LOREM} />
        <ServiceCard icon={ICON_AWARD}    title="LA MEJOR GARANTIA"            description={LOREM} />
      </div>
    </section>
  );
}
