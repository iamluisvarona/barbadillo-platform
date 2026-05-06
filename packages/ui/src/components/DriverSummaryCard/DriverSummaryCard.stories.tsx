import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { DriverSummaryCard } from "./DriverSummaryCard";

const meta: Meta<typeof DriverSummaryCard> = {
  title: "Transport/DriverSummaryCard",
  component: DriverSummaryCard,
  args: {
    name: "Luis Varona",
    phone: "+34 600 123 456",
    status: "available",
  },
  argTypes: {
    status: {
      control: "select",
      options: ["available", "assigned", "unavailable"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof DriverSummaryCard>;

export const Default: Story = {};

export const WithCallAction: Story = {
  args: {
    onCallClick: () => {
      console.log("Call driver");
    },
  },
};

export const WithExtraActions: Story = {
  args: {
    status: "assigned",
    onCallClick: () => {
      console.log("Call");
    },
    actions: (
      <Button size="sm" variant="secondary">
        Ver viajes
      </Button>
    ),
  },
};

export const AllStates: Story = {
  render: () => (
    <Stack gap={4}>
      <DriverSummaryCard
        name="Luis Varona"
        phone="+34 600 123 456"
        status="available"
      />

      <DriverSummaryCard
        name="Carlos Martín"
        phone="+34 611 888 222"
        status="assigned"
      />

      <DriverSummaryCard
        name="Sergio López"
        phone="+34 622 444 999"
        status="unavailable"
      />
    </Stack>
  ),
};

export const InsideCard: Story = {
  render: () => (
    <Card style={{ maxWidth: 720 }}>
      <DriverSummaryCard
        name="Conductor torneo"
        phone="+34 600 999 000"
        status="assigned"
        onCallClick={() => {}}
      />
    </Card>
  ),
};
