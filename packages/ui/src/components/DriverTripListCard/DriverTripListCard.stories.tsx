import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "../Card";
import { Stack } from "../Stack";
import { DriverTripListCard } from "./DriverTripListCard";

const meta: Meta<typeof DriverTripListCard> = {
  title: "Transport/DriverTripListCard",
  component: DriverTripListCard,
  args: {
    time: "18:00",
    status: "assigned",
    originLabel: "Hotel Tres Cantos",
    destinationLabel: "Pabellón La Luz",
    teamName: "CB Zaragoza",
    teamCategory: "Infantil Masculino",
    passengerCount: 15,
    vehicleName: "Furgoneta 1",
    vehiclePlate: "1234 KLM",
    variant: "upcoming",
  },
};

export default meta;

type Story = StoryObj<typeof DriverTripListCard>;

export const Default: Story = {};

export const NextTrip: Story = {
  args: {
    variant: "next",
    highlighted: true,
    status: "going_to_pickup",
  },
};

export const Completed: Story = {
  args: {
    variant: "completed",
    status: "completed",
  },
};

export const Clickable: Story = {
  args: {
    onClick: () => {
      console.log("Trip clicked");
    },
  },
};

export const RouteSheet: Story = {
  render: () => (
    <Card style={{ maxWidth: 520 }}>
      <Stack gap={4}>
        <DriverTripListCard
          time="18:00"
          status="going_to_pickup"
          originLabel="Hotel"
          destinationLabel="La Luz"
          teamName="CB Zaragoza"
          teamCategory="Cadete Masculino"
          passengerCount={15}
          vehicleName="Furgoneta 1"
          vehiclePlate="1234 KLM"
          variant="next"
          highlighted
        />

        <DriverTripListCard
          time="19:15"
          status="assigned"
          originLabel="La Luz"
          destinationLabel="Estación"
          teamName="EASO Basket"
          passengerCount={8}
          vehicleName="Furgoneta 2"
          variant="upcoming"
        />

        <DriverTripListCard
          time="16:00"
          status="completed"
          originLabel="Hotel"
          destinationLabel="Pabellón"
          teamName="Las Rozas"
          passengerCount={12}
          variant="completed"
        />
      </Stack>
    </Card>
  ),
};
