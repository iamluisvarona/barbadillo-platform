import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import "./VehicleSummaryCard.css";

export type VehicleSummaryCardStatus =
  | "available"
  | "assigned"
  | "maintenance"
  | "unavailable";

export interface VehicleSummaryCardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  name: string;

  plate?: string;

  capacity?: number;

  type?: string;

  imageSrc?: string;

  status?: VehicleSummaryCardStatus;

  actions?: ReactNode;
}

const STATUS_LABELS: Record<
  VehicleSummaryCardStatus,
  string
> = {
  available: "Disponible",
  assigned: "Asignado",
  maintenance: "Mantenimiento",
  unavailable: "No disponible",
};

export function VehicleSummaryCard({
  name,
  plate,
  capacity,
  type,
  imageSrc,
  status = "available",
  actions,
  className = "",
  ...props
}: VehicleSummaryCardProps) {
  return (
    <div
      className={[
        "bb-vehicle-summary-card",
        `bb-vehicle-summary-card--${status}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <div className="bb-vehicle-summary-card__media">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={name}
            className="bb-vehicle-summary-card__image"
          />
        ) : (
          <div className="bb-vehicle-summary-card__placeholder">
            🚐
          </div>
        )}
      </div>

      <div className="bb-vehicle-summary-card__body">
        <div className="bb-vehicle-summary-card__top">
          <div className="bb-vehicle-summary-card__texts">
            <div className="bb-vehicle-summary-card__name">
              {name}
            </div>

            <div className="bb-vehicle-summary-card__status">
              <span className="bb-vehicle-summary-card__status-dot" />

              <span>
                {STATUS_LABELS[status]}
              </span>
            </div>
          </div>

          {plate && (
            <div className="bb-vehicle-summary-card__plate">
              {plate}
            </div>
          )}
        </div>

        <div className="bb-vehicle-summary-card__meta">
          {capacity !== undefined && (
            <div className="bb-vehicle-summary-card__meta-item">
              👥 {capacity} plazas
            </div>
          )}

          {type && (
            <div className="bb-vehicle-summary-card__meta-item">
              🚘 {type}
            </div>
          )}
        </div>

        {actions && (
          <div className="bb-vehicle-summary-card__actions">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
}