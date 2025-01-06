import React from "react";

interface BannerProps {
  title: string;
  description: string;
  backgroundImage: string;
  textColor?: string;
  overlayOpacity?: string;
}

const Banner: React.FC<BannerProps> = ({
  title,
  description,
  backgroundImage,
  textColor = "text-white",
  overlayOpacity = "bg-black/50",
}) => {
  return (
    <div
      className="relative h-64 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={`absolute inset-0 ${overlayOpacity}`} aria-hidden="true"></div>
      <div className="text-center">
      <h1 className={`relative text-3xl font-bold ${textColor}`}>{title}</h1>
      <h2 className={`relative text-2xl font-bold ${textColor}`}>{description}</h2>
      </div>
    </div>
  );
};

export default Banner;
