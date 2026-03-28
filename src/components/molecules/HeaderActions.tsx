import PhoneNumber from "../atoms/PhoneNumber";
import Icon from "../atoms/Icon";

interface HeaderActionsProps {
  phoneNumber: string;
  cartIconSrc: string;
  className?: string;
}

export default function HeaderActions({
  phoneNumber,
  cartIconSrc,
  className = "",
}: HeaderActionsProps) {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      <PhoneNumber number={phoneNumber} />
      <Icon
        src={cartIconSrc}
        alt="Shopping cart"
        width={24}
        height={24}
      />
    </div>
  );
}
