import type { HTMLAttributes } from "react";
import "./LoadingSpinner.css";

export type LoadingSpinnerSize = "sm" | "md" | "lg";
export type LoadingSpinnerTone = "primary" | "success" | "info" | "warning" | "danger" | "muted";

export interface LoadingSpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: LoadingSpinnerSize;
  tone?: LoadingSpinnerTone;
  label?: string;
}

export function LoadingSpinner({
  size = "md",
  tone = "primary",
  label = "Cargando...",
  className = "",
  ...props
}: LoadingSpinnerProps) {
  return (
    <div
      className={`bb-loading-spinner bb-loading-spinner--${size} bb-loading-spinner--${tone} ${className}`}
      role="status"
      aria-label={label}
      {...props}
    >
      <span className="bb-loading-spinner__circle" />
      <span className="bb-loading-spinner__label">{label}</span>
    </div>
  );
}