import type { HTMLAttributes, ReactNode } from "react";

import "./TripETAChip.css";

export type TripETAChipTone =
  | "default"
  | "success"
  | "warning"
  | "danger"
  | "info";

export interface TripETAChipProps extends HTMLAttributes<HTMLDivElement> {
  value: ReactNode;
  label?: ReactNode;
  tone?: TripETAChipTone;
  icon?: ReactNode;
}

export function TripETAChip({
  value,
  label = "ETA",
  tone = "default",
  icon = "⏱",
  className = "",
  ...props
}: TripETAChipProps) {
  return (
    <div
      className={["bb-trip-eta-chip", `bb-trip-eta-chip--${tone}`, className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {icon && <span className="bb-trip-eta-chip__icon">{icon}</span>}

      <span className="bb-trip-eta-chip__label">{label}</span>

      <strong className="bb-trip-eta-chip__value">{value}</strong>
    </div>
  );
}
