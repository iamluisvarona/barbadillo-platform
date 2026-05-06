import type { Meta, StoryObj } from "@storybook/react";

import { TripAssignmentCard } from "./TripAssignmentCard";

const meta: Meta<typeof TripAssignmentCard> = {
  title: "Transport/TripAssignmentCard",
  component: TripAssignmentCard,
  args: {
    tripId: "TR-1042",
    originLabel: "Hotel Tres Cantos",
    originAddress: "Av. Colmenar Viejo 12",
    destinationLabel: "Pabellón La Luz",
    destinationAddress: "Calle del Deporte 5",
    dateLabel: "Viernes, 10 de mayo",
    departureTime: "18:00",
    teamName: "CB Zaragoza",
    teamCategory: "Infantil Masculino",
    passengerCount: 15,
    vehicleName: "Furgoneta 1",
    vehicleCapacity: 15,
    driverName: "Luis Varona",
    driverPhone: "+34 600 123 456",
    responseDeadlineLabel: "17:45",
  },
};

export default meta;

type Story = StoryObj<typeof TripAssignmentCard>;

export const Default: Story = {};

export const Minimal: Story = {
  args: {
    tripId: undefined,
    originAddress: undefined,
    destinationAddress: undefined,
    dateLabel: undefined,
    teamCategory: undefined,
    vehicleName: undefined,
    vehicleCapacity: undefined,
    driverName: undefined,
    driverPhone: undefined,
    responseDeadlineLabel: undefined,
  },
};
