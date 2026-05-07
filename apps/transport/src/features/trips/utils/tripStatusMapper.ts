import type { TripStatusBadgeStatus } from "@barbadillo/ui";

import type { TripStatus } from "../types/trip.types";

export function mapTripStatusToBadgeStatus(
  status: TripStatus,
): TripStatusBadgeStatus {
  switch (status) {
    case "pending":
      return "assigned";

    case "assigned":
      return "assigned";

    case "in_progress":
      return "in_progress";

    case "completed":
      return "completed";

    case "cancelled":
      return "cancelled";

    default:
      return "assigned";
  }
}
