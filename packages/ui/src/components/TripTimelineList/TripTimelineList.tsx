import type { HTMLAttributes, ReactNode } from "react";

import {
  DriverTripListCard,
  type DriverTripListCardVariant,
} from "../DriverTripListCard";

import type { TripStatusBadgeStatus } from "../TripStatusBadge";

import "./TripTimelineList.css";

export interface TripTimelineItem {
  id: string;

  time: string;

  status: TripStatusBadgeStatus;

  originLabel: string;
  destinationLabel: string;

  teamName: string;
  teamCategory?: string;

  passengerCount: number;

  vehicleName?: string;
}

export interface TripTimelineListProps extends HTMLAttributes<HTMLDivElement> {
  trips: TripTimelineItem[];

  renderTrip?: (trip: TripTimelineItem) => ReactNode;
}

function resolveVariant(
  status: TripStatusBadgeStatus,
): DriverTripListCardVariant {
  if (status === "completed") {
    return "completed";
  }

  if (
    status === "going_to_pickup" ||
    status === "arrived" ||
    status === "in_progress"
  ) {
    return "next";
  }

  return "upcoming";
}

export function TripTimelineList({
  trips,
  renderTrip,
  className = "",
  ...props
}: TripTimelineListProps) {
  return (
    <div
      className={["bb-trip-timeline-list", className].filter(Boolean).join(" ")}
      {...props}
    >
      {trips.map((trip) => (
        <div key={trip.id} className="bb-trip-timeline-list__item">
          <div className="bb-trip-timeline-list__line-wrapper">
            <div className="bb-trip-timeline-list__dot" />

            <div className="bb-trip-timeline-list__line" />
          </div>

          <div className="bb-trip-timeline-list__content">
            {renderTrip ? (
              renderTrip(trip)
            ) : (
              <DriverTripListCard
                time={trip.time}
                status={trip.status}
                originLabel={trip.originLabel}
                destinationLabel={trip.destinationLabel}
                teamName={trip.teamName}
                teamCategory={trip.teamCategory}
                passengerCount={trip.passengerCount}
                vehicleName={trip.vehicleName}
                variant={resolveVariant(trip.status)}
                highlighted={trip.status === "in_progress"}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
