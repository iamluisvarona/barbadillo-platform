import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./IconButton.css";

export type IconButtonVariant = "ghost" | "soft" | "primary";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: IconButtonVariant;
  size?: "sm" | "md" | "lg";
}

export function IconButton({
  children,
  variant = "ghost",
  size = "md",
  className = "",
  ...props
}: IconButtonProps) {
  return (
    <button
      className={`bb-icon-button 
        bb-icon-button--${variant} 
        bb-icon-button--${size} 
        ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}