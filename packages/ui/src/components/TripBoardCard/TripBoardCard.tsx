import type { HTMLAttributes } from "react";

import {
  TripStatusBadge,
  type TripStatusBadgeStatus,
} from "../TripStatusBadge";

import { TripETAChip } from "../TripETAChip";

import "./TripBoardCard.css";

export interface TripBoardCardProps extends HTMLAttributes<HTMLDivElement> {
  time: string;

  status: TripStatusBadgeStatus;

  originLabel: string;
  destinationLabel: string;

  teamName: string;
  teamCategory?: string;

  passengerCount?: number;

  vehicleName?: string;

  etaLabel?: string;

  highlighted?: boolean;

  draggable?: boolean;
}

export function TripBoardCard({
  time,
  status,
  originLabel,
  destinationLabel,
  teamName,
  teamCategory,
  passengerCount,
  vehicleName,
  etaLabel,
  highlighted = false,
  draggable = false,
  className = "",
  ...props
}: TripBoardCardProps) {
  return (
    <div
      className={[
        "bb-trip-board-card",
        highlighted && "bb-trip-board-card--highlighted",
        draggable && "bb-trip-board-card--draggable",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <div className="bb-trip-board-card__top">
        <div className="bb-trip-board-card__time">{time}</div>

        <TripStatusBadge status={status} size="sm" />
      </div>

      <div className="bb-trip-board-card__route">
        <div className="bb-trip-board-card__route-point">
          <span className="bb-trip-board-card__route-dot" />

          <span>{originLabel}</span>
        </div>

        <div className="bb-trip-board-card__route-line" />

        <div className="bb-trip-board-card__route-point">
          <span className="bb-trip-board-card__route-dot bb-trip-board-card__route-dot--destination" />

          <span>{destinationLabel}</span>
        </div>
      </div>

      <div className="bb-trip-board-card__team">
        <strong>{teamName}</strong>

        {teamCategory && <span>{teamCategory}</span>}
      </div>

      <div className="bb-trip-board-card__bottom">
        <div className="bb-trip-board-card__meta">
          {passengerCount !== undefined && <span>👥 {passengerCount}</span>}

          {vehicleName && <span>🚐 {vehicleName}</span>}
        </div>

        {etaLabel && <TripETAChip value={etaLabel} tone="info" />}
      </div>
    </div>
  );
}
