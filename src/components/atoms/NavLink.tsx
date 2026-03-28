interface NavLinkProps {
  href: string;
  label: string;
  className?: string;
}

export default function NavLink({
  href,
  label,
  className = "",
}: NavLinkProps) {
  return (
    <a
      href={href}
      className={`font-bold font-['League_Spartan:Bold',sans-serif] text-[14px] text-[#d9d9d9] tracking-[0.7px] cursor-pointer transition-colors hover:text-white ${className}`}
    >
      {label}
    </a>
  );
}
