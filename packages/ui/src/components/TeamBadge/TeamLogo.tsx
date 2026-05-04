import type { ImgHTMLAttributes } from "react";
import "./TeamLogo.css";

export interface TeamLogoProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src?: string | null;
  name: string;
  size?: "sm" | "md" | "lg";
}

export function TeamLogo({
  src,
  name,
  size = "md",
  className = "",
  alt,
  ...props
}: TeamLogoProps) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");

  return (
    <div className={`bb-team-logo bb-team-logo--${size} ${className}`}>
      {src ? (
        <img src={src} alt={alt ?? name} className="bb-team-logo__image" {...props} />
      ) : (
        <span className="bb-team-logo__fallback">{initials}</span>
      )}
    </div>
  );
}