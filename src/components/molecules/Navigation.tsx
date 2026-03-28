import NavLink from "../atoms/NavLink";

export interface NavigationItem {
  href: string;
  label: string;
}

interface NavigationProps {
  items: NavigationItem[];
  className?: string;
}

export default function Navigation({
  items,
  className = "",
}: NavigationProps) {
  return (
    <nav className={`flex items-center gap-12 ${className}`}>
      {items.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          label={item.label}
        />
      ))}
    </nav>
  );
}
