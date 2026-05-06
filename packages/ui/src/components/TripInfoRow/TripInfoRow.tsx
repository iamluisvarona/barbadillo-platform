import type { HTMLAttributes, ReactNode } from "react";

import "./TripInfoRow.css";

export type TripInfoRowTone =
  | "default"
  | "primary"
  | "success"
  | "info"
  | "warning"
  | "danger";

export interface TripInfoRowProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  label?: ReactNode;
  value: ReactNode;
  description?: ReactNode;
  tone?: TripInfoRowTone;
}

export function TripInfoRow({
  icon,
  label,
  value,
  description,
  tone = "default",
  className = "",
  ...props
}: TripInfoRowProps) {
  return (
    <div
      className={["bb-trip-info-row", `bb-trip-info-row--${tone}`, className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {icon && <div className="bb-trip-info-row__icon">{icon}</div>}

      <div className="bb-trip-info-row__content">
        {label && <div className="bb-trip-info-row__label">{label}</div>}

        <div className="bb-trip-info-row__value">{value}</div>

        {description && (
          <div className="bb-trip-info-row__description">{description}</div>
        )}
      </div>
    </div>
  );
}
