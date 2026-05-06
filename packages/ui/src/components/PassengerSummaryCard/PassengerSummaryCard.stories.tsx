import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { PassengerSummaryCard } from "./PassengerSummaryCard";

const meta: Meta<typeof PassengerSummaryCard> = {
  title: "Transport/PassengerSummaryCard",
  component: PassengerSummaryCard,
  args: {
    teamName: "CB Cabrini",
    teamCategory: "Infantil Masculino",
    passengerCount: 15,
  },
};

export default meta;

type Story = StoryObj<typeof PassengerSummaryCard>;

export const Default: Story = {};

export const WithActions: Story = {
  args: {
    actions: <Button size="sm">Ver equipo</Button>,
  },
};

export const DifferentSizes: Story = {
  render: () => (
    <Stack gap={4}>
      <PassengerSummaryCard
        teamName="CB Zaragoza"
        teamCategory="Cadete Masculino"
        passengerCount={8}
      />

      <PassengerSummaryCard
        teamName="EASO Basket"
        teamCategory="Infantil Femenino"
        passengerCount={15}
      />

      <PassengerSummaryCard
        teamName="Las Rozas"
        teamCategory="Junior Masculino"
        passengerCount={22}
      />
    </Stack>
  ),
};

export const InsideCard: Story = {
  render: () => (
    <Card style={{ maxWidth: 720 }}>
      <PassengerSummaryCard
        teamName="CB Cabrini"
        teamCategory="Infantil Masculino"
        passengerCount={15}
      />
    </Card>
  ),
};
