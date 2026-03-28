interface IconProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function Icon({
  src,
  alt = "Icon",
  width = 24,
  height = 24,
  className = "",
}: IconProps) {
  return (
    <div className={`flex items-center justify-center cursor-pointer ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="block"
      />
    </div>
  );
}
