import { Link, useMatch } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  label: string;
  className?: string;
}

export default function NavLink({ href, label, className = "" }: NavLinkProps) {
  const match = useMatch(href);
  return (
    <Link
      to={href}
      className={`font-league font-bold tracking-[0.7px] leading-normal cursor-pointer transition-all duration-300 hover:text-[#df9a1b] hover:tracking-[1px] ${match ? 'text-[#df9a1b]' : 'text-[#d9d9d9]'} ${className}`}
      style={{ fontSize: "clamp(0.65rem, 0.8vw, 0.75rem)" }}
    >
      {label}
    </Link>
  );
}
