import type { HTMLAttributes } from "react";

import { TripRouteSummary } from "../TripRouteSummary";
import {
  TripStatusBadge,
  type TripStatusBadgeStatus,
} from "../TripStatusBadge";

import "./DriverTripListCard.css";

export type DriverTripListCardVariant = "next" | "upcoming" | "completed";

export interface DriverTripListCardProps extends HTMLAttributes<HTMLDivElement> {
  time: string;
  status: TripStatusBadgeStatus;

  originLabel: string;
  destinationLabel: string;

  teamName: string;
  teamCategory?: string;
  teamLogoSrc?: string;

  passengerCount: number;

  vehicleName?: string;
  vehiclePlate?: string;

  highlighted?: boolean;
  disabled?: boolean;

  variant?: DriverTripListCardVariant;

  onClick?: () => void;
}

export function DriverTripListCard({
  time,
  status,
  originLabel,
  destinationLabel,
  teamName,
  teamCategory,
  teamLogoSrc,
  passengerCount,
  vehicleName,
  vehiclePlate,
  highlighted = false,
  disabled = false,
  variant = "upcoming",
  onClick,
  className = "",
  ...props
}: DriverTripListCardProps) {
  const rootClassName = [
    "bb-driver-trip-list-card",
    `bb-driver-trip-list-card--${variant}`,
    onClick && "bb-driver-trip-list-card--clickable",
    highlighted && "bb-driver-trip-list-card--highlighted",
    disabled && "bb-driver-trip-list-card--disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <div className="bb-driver-trip-list-card__top">
        <div className="bb-driver-trip-list-card__time">{time}</div>
        <TripStatusBadge size="sm" status={status} />
      </div>

      <div className="bb-driver-trip-list-card__route">
        <TripRouteSummary
          variant="compact"
          originLabel={originLabel}
          destinationLabel={destinationLabel}
        />
      </div>

      <div className="bb-driver-trip-list-card__middle">
        <div className="bb-driver-trip-list-card__team">
          <div className="bb-driver-trip-list-card__team-logo-wrapper">
            {teamLogoSrc ? (
              <img
                src={teamLogoSrc}
                alt={teamName}
                className="bb-driver-trip-list-card__team-logo"
              />
            ) : (
              <div className="bb-driver-trip-list-card__team-logo-placeholder">
                🏀
              </div>
            )}
          </div>

          <div className="bb-driver-trip-list-card__team-texts">
            <div className="bb-driver-trip-list-card__team-name">
              {teamName}
            </div>

            {teamCategory && (
              <div className="bb-driver-trip-list-card__team-category">
                {teamCategory}
              </div>
            )}
          </div>
        </div>

        <div className="bb-driver-trip-list-card__passengers">
          👥 {passengerCount}
        </div>
      </div>

      {(vehicleName || vehiclePlate) && (
        <div className="bb-driver-trip-list-card__bottom">
          {vehicleName && (
            <div className="bb-driver-trip-list-card__vehicle">
              🚐 {vehicleName}
            </div>
          )}

          {vehiclePlate && (
            <div className="bb-driver-trip-list-card__plate">
              {vehiclePlate}
            </div>
          )}
        </div>
      )}
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        className={rootClassName}
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
      >
        {content}
      </button>
    );
  }

  return (
    <div className={rootClassName} {...props}>
      {content}
    </div>
  );
}
