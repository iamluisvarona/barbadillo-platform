import {
  CardGrid,
  Page,
  PageHeader,
  Stack,
  TripBoardCard,
  TripKanbanColumn,
} from "@barbadillo/ui";

import { mockTrips } from "../../features/trips/mocks/trips.mock";
import {
  getTripsByStatus,
  tripStatusLabels,
} from "../../features/trips/utils/tripGroups";
import { mapTripStatusToBadgeStatus } from "../../features/trips/utils/tripStatusMapper";
import type { TripStatus } from "../../features/trips/types/trip.types";

const boardStatuses: TripStatus[] = [
  "pending",
  "assigned",
  "in_progress",
  "completed",
  "cancelled",
];

export function BoardPage() {
  return (
    <Page>
      <PageHeader
        title="Panel operativo"
        description="Vista logística de trayectos por estado"
      />

      <Stack gap={6}>
        <CardGrid columns={4}>
          {boardStatuses.map((status) => {
            const trips = getTripsByStatus(mockTrips, status);

            return (
              <TripKanbanColumn
                key={status}
                title={tripStatusLabels[status]}
                count={trips.length}
                tone={status === "cancelled" ? "danger" : "default"}
              >
                {trips.map((trip) => (
                  <TripBoardCard
                    key={trip.id}
                    time={trip.time}
                    status={mapTripStatusToBadgeStatus(trip.status)}
                    originLabel={trip.from}
                    destinationLabel={trip.to}
                    teamName={trip.teamName}
                    teamCategory={trip.teamCategory}
                    passengerCount={trip.peopleCount}
                    vehicleName={trip.vehicle}
                  />
                ))}
              </TripKanbanColumn>
            );
          })}
        </CardGrid>
      </Stack>
    </Page>
  );
}
