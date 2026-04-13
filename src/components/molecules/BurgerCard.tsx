interface BurgerCardProps {
  image: string;
  name: string;
  price: string;
  description: string;
  href?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const HOVER_ACTIVE = "border-2 border-[#f3731c] bg-[rgba(243,115,28,0.25)] shadow-[inset_0px_4px_250px_0px_rgba(0,0,0,0.25)]";
const HOVER_IDLE   = "bg-[rgba(67,67,67,0.05)] group-hover:border-2 group-hover:border-[#f3731c] group-hover:bg-[rgba(243,115,28,0.25)] group-hover:shadow-[inset_0px_4px_250px_0px_rgba(0,0,0,0.25)]";

export default function BurgerCard({ image, name, price, description, href, isActive, onClick }: BurgerCardProps) {
  const inner = (
    <>
      <div className={`absolute inset-0 rounded-[25px] transition-all duration-300 ${isActive ? HOVER_ACTIVE : HOVER_IDLE}`} />
      <div className="absolute inset-[2%_7%_35%_2.5%]">
        <img
          alt={name}
          src={image}
          className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full"
        />
      </div>
      <p className="absolute left-[5%] top-[66%] font-kulim font-bold text-[20px] text-white tracking-[0.72px] leading-normal">
        {name}
      </p>
      <p className="absolute left-[5%] right-[40%] bottom-[11%] font-kulim font-normal text-[12px] text-[#d9d9d9] tracking-[0.42px] leading-normal">
        {description}
      </p>
      <p className="absolute right-[5%] bottom-[11%] font-kulim font-bold text-[36px] text-[#d9d9d9] tracking-[1.41px] leading-[1]">
        {price}
      </p>
    </>
  );

  const base = "relative flex-1 min-w-0 max-w-[22.8125rem] aspect-[365/400] group transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]";

  if (href) {
    return <a href={href} className={base}>{inner}</a>;
  }

  return (
    <div className={`${base} cursor-pointer`} onClick={onClick}>
      {inner}
    </div>
  );
}
