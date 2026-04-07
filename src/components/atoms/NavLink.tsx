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
      className={`font-league font-bold text-xs tracking-[0.7px] leading-normal cursor-pointer transition-colors hover:text-[#df9a1b] ${match ? 'text-[#df9a1b]' : 'text-[#d9d9d9]'} ${className}`}
    >
      {label}
    </Link>
  );
}
