export type TripStatus =
  | "pending"
  | "assigned"
  | "in_progress"
  | "completed"
  | "cancelled";

export type Trip = {
  id: string;
  from: string;
  to: string;
  time: string;
  teamName: string;
  teamCategory?: string;
  teamLogoSrc?: string | null;
  vehicle?: string;
  driver?: string;
  peopleCount: number;
  status: TripStatus;
};
