import type { HTMLAttributes } from "react";

import "./TripStatusBadge.css";

export type TripStatusBadgeStatus =
  | "assigned"
  | "confirmed"
  | "going_to_pickup"
  | "arrived"
  | "in_progress"
  | "completed"
  | "cancelled"
  | "rejected"
  | "incident";

export type TripStatusBadgeSize = "sm" | "md";

export interface TripStatusBadgeProps extends HTMLAttributes<HTMLDivElement> {
  status: TripStatusBadgeStatus;
  size?: TripStatusBadgeSize;
  withDot?: boolean;
}

const STATUS_LABELS: Record<TripStatusBadgeStatus, string> = {
  assigned: "Asignado",
  confirmed: "Confirmado",
  going_to_pickup: "En camino al origen",
  arrived: "Llegada",
  in_progress: "En curso",
  completed: "Finalizado",
  cancelled: "Cancelado",
  rejected: "Rechazado",
  incident: "Incidencia",
};

export function TripStatusBadge({
  status,
  size = "md",
  withDot = true,
  className = "",
  ...props
}: TripStatusBadgeProps) {
  return (
    <div
      className={[
        "bb-trip-status-badge",
        `bb-trip-status-badge--${status}`,
        `bb-trip-status-badge--${size}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {withDot && <span className="bb-trip-status-badge__dot" />}

      <span className="bb-trip-status-badge__label">
        {STATUS_LABELS[status]}
      </span>
    </div>
  );
}
