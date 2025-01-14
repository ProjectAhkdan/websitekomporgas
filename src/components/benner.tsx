interface BannerProps {
  title: string;
  description: string;
  backgroundImage: string;
  overlayOpacity?: string; // Default is optional
  textAlignment?: string;
  textColor?: string;
  height?: string;
}

const Banner: React.FC<BannerProps> = ({
  title,
  description,
  backgroundImage,
  overlayOpacity = "bg-black/50",
  textAlignment = "text-center",
  textColor = "text-white",
  height = "h-[60vh]",
}) => {
  return (
    <div
      className={`relative ${height} flex items-center justify-center`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayOpacity}`}></div>

      {/* Content */}
      <div
        className={`relative z-10 ${textAlignment} ${textColor} px-4 max-w-4xl`}
      >
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        <p className="mt-2 text-base md:text-lg">{description}</p>
      </div>
    </div>
  );
};

export default Banner;
