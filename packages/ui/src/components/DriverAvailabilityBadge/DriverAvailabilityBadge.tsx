import type { HTMLAttributes } from "react";

import "./DriverAvailabilityBadge.css";

export type DriverAvailabilityStatus =
  | "available"
  | "assigned"
  | "resting"
  | "offline";

const STATUS_CONFIG: Record<
  DriverAvailabilityStatus,
  {
    label: string;
    className: string;
  }
> = {
  available: {
    label: "Disponible",
    className: "success",
  },
  assigned: {
    label: "Asignado",
    className: "info",
  },
  resting: {
    label: "Descansando",
    className: "warning",
  },
  offline: {
    label: "Offline",
    className: "danger",
  },
};

export interface DriverAvailabilityBadgeProps extends HTMLAttributes<HTMLDivElement> {
  status: DriverAvailabilityStatus;

  withDot?: boolean;

  size?: "sm" | "md";
}

export function DriverAvailabilityBadge({
  status,
  withDot = true,
  size = "md",
  className = "",
  ...props
}: DriverAvailabilityBadgeProps) {
  const config = STATUS_CONFIG[status];

  return (
    <div
      className={[
        "bb-driver-availability-badge",
        `bb-driver-availability-badge--${config.className}`,
        `bb-driver-availability-badge--${size}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {withDot && <span className="bb-driver-availability-badge__dot" />}

      <span>{config.label}</span>
    </div>
  );
}
