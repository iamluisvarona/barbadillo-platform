import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { VehicleSummaryCard } from "./VehicleSummaryCard";

const meta: Meta<typeof VehicleSummaryCard> = {
  title: "Transport/VehicleSummaryCard",
  component: VehicleSummaryCard,
  args: {
    name: "Furgoneta 1",
    plate: "1234 KLM",
    capacity: 15,
    type: "Mercedes Sprinter",
    status: "available",
  },
  argTypes: {
    status: {
      control: "select",
      options: ["available", "assigned", "maintenance", "unavailable"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof VehicleSummaryCard>;

export const Default: Story = {};

export const WithActions: Story = {
  args: {
    status: "assigned",
    actions: (
      <>
        <Button size="sm">Ver detalle</Button>

        <Button size="sm" variant="secondary">
          Llamar conductor
        </Button>
      </>
    ),
  },
};

export const AllStates: Story = {
  render: () => (
    <Stack gap={4}>
      <VehicleSummaryCard
        name="Furgoneta 1"
        plate="1234 KLM"
        capacity={15}
        status="available"
      />

      <VehicleSummaryCard
        name="Furgoneta 2"
        plate="5678 ZTR"
        capacity={9}
        status="assigned"
      />

      <VehicleSummaryCard
        name="Furgoneta 3"
        plate="9123 AAA"
        capacity={12}
        status="maintenance"
      />

      <VehicleSummaryCard
        name="Furgoneta 4"
        plate="4444 BBB"
        capacity={18}
        status="unavailable"
      />
    </Stack>
  ),
};

export const InsideCard: Story = {
  render: () => (
    <Card style={{ maxWidth: 720 }}>
      <VehicleSummaryCard
        name="Furgoneta torneo"
        plate="2026 BAR"
        capacity={15}
        type="Volkswagen Crafter"
        status="assigned"
      />
    </Card>
  ),
};
