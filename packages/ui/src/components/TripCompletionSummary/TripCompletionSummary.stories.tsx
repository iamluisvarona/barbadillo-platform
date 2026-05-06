import type { Meta, StoryObj } from "@storybook/react";

import { TripCompletionSummary } from "./TripCompletionSummary";

const meta: Meta<typeof TripCompletionSummary> = {
  title: "Transport/TripCompletionSummary",
  component: TripCompletionSummary,
  args: {
    durationLabel: "18 min",
    distanceLabel: "6,8 km",
    originLabel: "Hotel Tres Cantos",
    destinationLabel: "Pabellón La Luz",
    teamName: "CB Zaragoza",
    teamCategory: "Infantil Masculino",
    passengerCount: 15,
    vehicleName: "Furgoneta 1",
    driverName: "Luis Varona",
  },
};

export default meta;

type Story = StoryObj<typeof TripCompletionSummary>;

export const Default: Story = {};

export const Minimal: Story = {
  args: {
    durationLabel: undefined,
    distanceLabel: undefined,
    teamCategory: undefined,
    vehicleName: undefined,
    driverName: undefined,
  },
};

export const WithActions: Story = {
  args: {
    onGoHome: () => console.log("home"),
    onViewTrips: () => console.log("trips"),
  },
};
