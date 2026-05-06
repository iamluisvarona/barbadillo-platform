import type { HTMLAttributes } from "react";

import { Button } from "../Button";
import { RouteMetricsBar } from "../RouteMetricsBar";
import { TripRouteSummary } from "../TripRouteSummary";

import "./TripCompletionSummary.css";

export interface TripCompletionSummaryProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  durationLabel?: string;

  distanceLabel?: string;

  originLabel: string;
  destinationLabel: string;

  teamName: string;
  teamCategory?: string;

  passengerCount: number;

  vehicleName?: string;
  driverName?: string;

  onGoHome?: () => void;
  onViewTrips?: () => void;
}

export function TripCompletionSummary({
  durationLabel,
  distanceLabel,
  originLabel,
  destinationLabel,
  teamName,
  teamCategory,
  passengerCount,
  vehicleName,
  driverName,
  onGoHome,
  onViewTrips,
  className = "",
  ...props
}: TripCompletionSummaryProps) {
  return (
    <div
      className={[
        "bb-trip-completion-summary",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <div className="bb-trip-completion-summary__hero">
        <div className="bb-trip-completion-summary__icon">
          ✓
        </div>

        <div className="bb-trip-completion-summary__texts">
          <h2 className="bb-trip-completion-summary__title">
            Viaje completado
          </h2>

          <p className="bb-trip-completion-summary__subtitle">
            Todos los pasajeros han llegado correctamente
            al destino.
          </p>
        </div>
      </div>

      {(durationLabel || distanceLabel) && (
        <RouteMetricsBar
          items={[
            ...(distanceLabel
              ? [
                  {
                    icon: "📍",
                    label: "Distancia",
                    value: distanceLabel,
                    tone: "info" as const,
                  },
                ]
              : []),

            ...(durationLabel
              ? [
                  {
                    icon: "⏱",
                    label: "Duración",
                    value: durationLabel,
                    tone: "success" as const,
                  },
                ]
              : []),
          ]}
        />
      )}

      <TripRouteSummary
        variant="vertical"
        originLabel={originLabel}
        destinationLabel={destinationLabel}
      />

      <div className="bb-trip-completion-summary__grid">
        <div className="bb-trip-completion-summary__card">
          <span>Equipo</span>
          <strong>{teamName}</strong>

          {teamCategory && (
            <small>{teamCategory}</small>
          )}
        </div>

        <div className="bb-trip-completion-summary__card">
          <span>Pasajeros</span>
          <strong>{passengerCount}</strong>
        </div>

        {vehicleName && (
          <div className="bb-trip-completion-summary__card">
            <span>Vehículo</span>
            <strong>{vehicleName}</strong>
          </div>
        )}

        {driverName && (
          <div className="bb-trip-completion-summary__card">
            <span>Conductor</span>
            <strong>{driverName}</strong>
          </div>
        )}
      </div>

      {(onGoHome || onViewTrips) && (
        <div className="bb-trip-completion-summary__actions">
          {onGoHome && (
            <Button
              onClick={onGoHome}
            >
              Volver al inicio
            </Button>
          )}

          {onViewTrips && (
            <Button
              variant="secondary"
              onClick={onViewTrips}
            >
              Ver trayectos
            </Button>
          )}
        </div>
      )}
    </div>
  );
}