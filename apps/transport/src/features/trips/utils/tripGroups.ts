import type { Trip, TripStatus } from "../types/trip.types";

export const tripStatusLabels: Record<TripStatus, string> = {
  pending: "Pendientes",
  assigned: "Asignados",
  in_progress: "En curso",
  completed: "Finalizados",
  cancelled: "Cancelados",
};

export function getTripsByStatus(trips: Trip[], status: TripStatus) {
  return trips.filter((trip) => trip.status === status);
}

export function getTripCountByStatus(trips: Trip[], status: TripStatus) {
  return getTripsByStatus(trips, status).length;
}
