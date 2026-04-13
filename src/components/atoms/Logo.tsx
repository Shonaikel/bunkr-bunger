interface LogoProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function Logo({
  src,
  alt = "Logo",
  width = 74,
  height = 66,
  className = "",
}: LogoProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
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
