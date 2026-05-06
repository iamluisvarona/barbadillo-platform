import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

import "./FloatingMapControls.css";

export interface FloatingMapControlItem {
  id: string;

  icon: ReactNode;

  label?: string;

  onClick?: () => void;

  disabled?: boolean;

  active?: boolean;
}

export interface FloatingMapControlsProps extends HTMLAttributes<HTMLDivElement> {
  controls: FloatingMapControlItem[];

  orientation?: "vertical" | "horizontal";
}

interface ControlButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

function ControlButton({
  active = false,
  className = "",
  children,
  ...props
}: ControlButtonProps) {
  return (
    <button
      type="button"
      className={[
        "bb-floating-map-controls__button",
        active && "bb-floating-map-controls__button--active",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}

export function FloatingMapControls({
  controls,
  orientation = "vertical",
  className = "",
  ...props
}: FloatingMapControlsProps) {
  return (
    <div
      className={[
        "bb-floating-map-controls",
        `bb-floating-map-controls--${orientation}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {controls.map((control) => (
        <ControlButton
          key={control.id}
          active={control.active}
          disabled={control.disabled}
          onClick={control.onClick}
          aria-label={control.label}
          title={control.label}
        >
          <span className="bb-floating-map-controls__icon">{control.icon}</span>
        </ControlButton>
      ))}
    </div>
  );
}
