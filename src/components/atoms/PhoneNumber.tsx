interface PhoneNumberProps {
  number: string;
  className?: string;
}

export default function PhoneNumber({
  number,
  className = "",
}: PhoneNumberProps) {
  return (
    <p
      className={`font-bold font-['League_Spartan:Bold',sans-serif] text-[14px] text-[#d9d9d9] tracking-[0.7px] ${className}`}
    >
      {number}
    </p>
  );
}
