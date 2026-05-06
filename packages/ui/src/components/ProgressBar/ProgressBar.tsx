import type { HTMLAttributes } from "react";
import "./ProgressBar.css";

export type ProgressBarVariant =
  | "default"
  | "success"
  | "info"
  | "warning"
  | "danger";

export type ProgressBarSize = "sm" | "md";

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  variant?: ProgressBarVariant;
  size?: ProgressBarSize;
  showValue?: boolean;
  label?: string;
}

export function ProgressBar({
  value,
  variant = "default",
  size = "md",
  showValue = false,
  label,
  className = "",
  ...props
}: ProgressBarProps) {
  const normalizedValue = Math.min(100, Math.max(0, value));

  return (
    <div
      className={[
        "bb-progress-bar",
        `bb-progress-bar--${variant}`,
        `bb-progress-bar--${size}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {(label || showValue) && (
        <div className="bb-progress-bar__header">
          {label && <span className="bb-progress-bar__label">{label}</span>}
          {showValue && (
            <span className="bb-progress-bar__value">
              {Math.round(normalizedValue)}%
            </span>
          )}
        </div>
      )}

      <div
        className="bb-progress-bar__track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={normalizedValue}
        aria-label={label}
      >
        <div
          className="bb-progress-bar__fill"
          style={{ width: `${normalizedValue}%` }}
        />
      </div>
    </div>
  );
}
