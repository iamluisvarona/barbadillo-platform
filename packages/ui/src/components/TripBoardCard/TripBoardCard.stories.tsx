import type { Meta, StoryObj } from "@storybook/react";

import { CardGrid } from "../CardGrid";

import { TripBoardCard } from "./TripBoardCard";

const meta: Meta<typeof TripBoardCard> = {
  title: "Transport/TripBoardCard",
  component: TripBoardCard,
  args: {
    time: "09:30",
    status: "assigned",
    originLabel: "Hotel Tres Cantos",
    destinationLabel: "Pabellón La Luz",
    teamName: "CB Zaragoza",
    teamCategory: "Infantil Masculino",
    passengerCount: 15,
    vehicleName: "Furgoneta 1",
    etaLabel: "09:53",
  },
};

export default meta;

type Story = StoryObj<typeof TripBoardCard>;

export const Default: Story = {};

export const Highlighted: Story = {
  args: {
    highlighted: true,
    status: "in_progress",
  },
};

export const BoardExample: Story = {
  render: () => (
    <CardGrid columns={3}>
      <TripBoardCard
        time="08:30"
        status="assigned"
        originLabel="Hotel VP"
        destinationLabel="La Luz"
        teamName="CB Cabrini"
        passengerCount={12}
      />

      <TripBoardCard
        time="09:00"
        status="going_to_pickup"
        originLabel="Estación"
        destinationLabel="Hotel"
        teamName="EASO Basket"
        highlighted
        etaLabel="09:14"
      />

      <TripBoardCard
        time="10:15"
        status="completed"
        originLabel="Hotel"
        destinationLabel="Columbia"
        teamName="CB Las Rozas"
        passengerCount={15}
        vehicleName="Van 2"
      />
    </CardGrid>
  ),
};
