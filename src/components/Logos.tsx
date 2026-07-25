import React from "react";

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  size?: number;
}

export const AlphaAmpereLogo: React.FC<LogoProps> = ({ size = 48, className = "", alt = "Alpha Ampere Logo", ...props }) => {
  return (
    <img
      src="/logo_1_nobg.png"
      alt={alt}
      style={{ height: `${size}px`, width: 'auto' }}
      className={`object-contain transition-all duration-300 ${className}`}
      {...props}
    />
  );
};

export const MetalectricLogo: React.FC<LogoProps> = ({ size = 48, className = "", alt = "Metalectric Logo", ...props }) => {
  return (
    <img
      src="/logo_2_nobg.png"
      alt={alt}
      style={{ height: `${size}px`, width: 'auto' }}
      className={`object-contain transition-all duration-300 ${className}`}
      {...props}
    />
  );
};
