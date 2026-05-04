import type { HTMLAttributes, ReactNode } from "react";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { Text } from "../Typography";
import { Badge } from "../Badge";
import { TeamBadge } from "../TeamBadge";
import "./TripCard.css";

export type TripStatus =
  | "pending"
  | "assigned"
  | "in_progress"
  | "completed"
  | "cancelled";

export interface TripCardProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  from: string;
  to: string;
  time: string;
  team?: {
    name: string;
    logoSrc?: string | null;
    category?: string;
  };
  vehicle?: string;
  driver?: string;
  peopleCount?: number;
  status: TripStatus;
  footer?: ReactNode;
}

const statusConfig: Record<
  TripStatus,
  { label: string; variant: "success" | "warning" | "danger" | "info" }
> = {
  pending: { label: "Pendiente", variant: "info" },
  assigned: { label: "Asignado", variant: "warning" },
  in_progress: { label: "En curso", variant: "warning" },
  completed: { label: "Completado", variant: "success" },
  cancelled: { label: "Cancelado", variant: "danger" },
};

export function TripCard({
  from,
  to,
  time,
  team,
  vehicle,
  driver,
  peopleCount,
  status,
  footer,
  className = "",
  ...props
}: TripCardProps) {
  const config = statusConfig[status];

  return (
    <Card className={`bb-trip-card ${className}`} {...props}>
      <Stack gap={4}>
        {/* HEADER */}
        <div className="bb-trip-card__header">
          <div>
            <Text tone="muted">{time}</Text>
            <div className="bb-trip-card__route">
              {from} → {to}
            </div>
          </div>

          <Badge variant={config.variant}>{config.label}</Badge>
        </div>

        {/* TEAM */}
        {team ? (
          <TeamBadge
            name={team.name}
            logoSrc={team.logoSrc}
            category={team.category}
          />
        ) : null}

        {/* INFO */}
        <div className="bb-trip-card__info">
          {vehicle ? (
            <div>
              <Text tone="muted">Vehículo</Text>
              <Text>{vehicle}</Text>
            </div>
          ) : null}

          {driver ? (
            <div>
              <Text tone="muted">Conductor</Text>
              <Text>{driver}</Text>
            </div>
          ) : null}

          {peopleCount != null ? (
            <div>
              <Text tone="muted">Personas</Text>
              <Text>{peopleCount}</Text>
            </div>
          ) : null}
        </div>

        {/* FOOTER */}
        {footer ? <div className="bb-trip-card__footer">{footer}</div> : null}
      </Stack>
    </Card>
  );
}
