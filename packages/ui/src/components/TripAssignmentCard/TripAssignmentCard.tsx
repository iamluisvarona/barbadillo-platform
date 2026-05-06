import type { HTMLAttributes } from "react";

import { Button } from "../Button";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { Text } from "../Typography";
import { TripRouteSummary } from "../TripRouteSummary";

import "./TripAssignmentCard.css";

export interface TripAssignmentCardProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  tripId?: string;

  originLabel: string;
  originAddress?: string;

  destinationLabel: string;
  destinationAddress?: string;

  dateLabel?: string;
  departureTime: string;

  teamName: string;
  teamCategory?: string;

  passengerCount: number;

  vehicleName?: string;
  vehicleCapacity?: number;

  driverName?: string;
  driverPhone?: string;

  responseDeadlineLabel?: string;

  onAccept?: () => void;
  onReject?: () => void;
}

export function TripAssignmentCard({
  tripId,
  originLabel,
  originAddress,
  destinationLabel,
  destinationAddress,
  dateLabel,
  departureTime,
  teamName,
  teamCategory,
  passengerCount,
  vehicleName,
  vehicleCapacity,
  driverName,
  driverPhone,
  responseDeadlineLabel,
  onAccept,
  onReject,
  className = "",
  ...props
}: TripAssignmentCardProps) {
  return (
    <Card
      className={["bb-trip-assignment-card", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <Stack gap={5}>
        <div className="bb-trip-assignment-card__header">
          <div>
            <Text tone="muted">Nuevo trayecto asignado</Text>

            <div className="bb-trip-assignment-card__time">{departureTime}</div>

            {dateLabel && <Text tone="muted">{dateLabel}</Text>}
          </div>

          {tripId && (
            <div className="bb-trip-assignment-card__trip-id">#{tripId}</div>
          )}
        </div>

        <TripRouteSummary
          variant="vertical"
          originLabel={originLabel}
          originAddress={originAddress}
          destinationLabel={destinationLabel}
          destinationAddress={destinationAddress}
        />

        <div className="bb-trip-assignment-card__grid">
          <div className="bb-trip-assignment-card__info">
            <span>Equipo</span>
            <strong>{teamName}</strong>
            {teamCategory && <small>{teamCategory}</small>}
          </div>

          <div className="bb-trip-assignment-card__info">
            <span>Personas</span>
            <strong>{passengerCount}</strong>
          </div>

          {vehicleName && (
            <div className="bb-trip-assignment-card__info">
              <span>Vehículo</span>
              <strong>{vehicleName}</strong>
              {vehicleCapacity !== undefined && (
                <small>{vehicleCapacity} plazas</small>
              )}
            </div>
          )}

          {driverName && (
            <div className="bb-trip-assignment-card__info">
              <span>Conductor</span>
              <strong>{driverName}</strong>
              {driverPhone && <small>{driverPhone}</small>}
            </div>
          )}
        </div>

        {responseDeadlineLabel && (
          <div className="bb-trip-assignment-card__deadline">
            Responder antes de {responseDeadlineLabel}
          </div>
        )}

        <div className="bb-trip-assignment-card__actions">
          <Button onClick={onAccept}>Aceptar viaje</Button>

          <Button variant="secondary" onClick={onReject}>
            Rechazar viaje
          </Button>
        </div>
      </Stack>
    </Card>
  );
}
