import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "../Card";
import { Stack } from "../Stack";
import { DriverAvailabilityBadge } from "./DriverAvailabilityBadge";

const meta: Meta<typeof DriverAvailabilityBadge> = {
  title: "Transport/DriverAvailabilityBadge",
  component: DriverAvailabilityBadge,
  args: {
    status: "available",
    withDot: true,
    size: "md",
  },
  argTypes: {
    status: {
      control: "select",
      options: ["available", "assigned", "resting", "offline"],
    },
    size: {
      control: "select",
      options: ["sm", "md"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof DriverAvailabilityBadge>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => (
    <Card style={{ maxWidth: 520 }}>
      <Stack direction="vertical" gap={3}>
        <DriverAvailabilityBadge status="available" />
        <DriverAvailabilityBadge status="assigned" />
        <DriverAvailabilityBadge status="resting" />
        <DriverAvailabilityBadge status="offline" />
      </Stack>
    </Card>
  ),
};

export const Small: Story = {
  render: () => (
    <Stack direction="vertical" gap={3}>
      <DriverAvailabilityBadge size="sm" status="available" />
      <DriverAvailabilityBadge size="sm" status="assigned" />
      <DriverAvailabilityBadge size="sm" status="resting" />
      <DriverAvailabilityBadge size="sm" status="offline" />
    </Stack>
  ),
};
