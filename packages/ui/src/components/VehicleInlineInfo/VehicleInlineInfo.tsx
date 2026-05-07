import type { HTMLAttributes, ReactNode } from "react";

import "./VehicleInlineInfo.css";

export interface VehicleInlineInfoProps extends HTMLAttributes<HTMLDivElement> {
  name: ReactNode;
  plate?: ReactNode;
  capacity?: ReactNode;
}

export function VehicleInlineInfo({
  name,
  plate,
  capacity,
  className = "",
  ...props
}: VehicleInlineInfoProps) {
  const classes = ["bb-vehicle-inline-info", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      <strong className="bb-vehicle-inline-info__name">{name}</strong>

      {plate || capacity ? (
        <span className="bb-vehicle-inline-info__meta">
          {plate}
          {plate && capacity ? " · " : null}
          {capacity}
        </span>
      ) : null}
    </div>
  );
}
