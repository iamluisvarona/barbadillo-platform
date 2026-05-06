import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "../Card";
import { Stack } from "../Stack";
import { TripStatusBadge } from "./TripStatusBadge";

const meta: Meta<typeof TripStatusBadge> = {
  title: "Transport/TripStatusBadge",
  component: TripStatusBadge,
  args: {
    status: "assigned",
    size: "md",
    withDot: true,
  },
  argTypes: {
    status: {
      control: "select",
      options: [
        "assigned",
        "confirmed",
        "going_to_pickup",
        "arrived",
        "in_progress",
        "completed",
        "cancelled",
        "rejected",
        "incident",
      ],
    },
    size: {
      control: "select",
      options: ["sm", "md"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof TripStatusBadge>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => (
    <Card style={{ maxWidth: 720 }}>
      <Stack direction="vertical" gap={3}>
        <TripStatusBadge status="assigned" />
        <TripStatusBadge status="confirmed" />
        <TripStatusBadge status="going_to_pickup" />
        <TripStatusBadge status="arrived" />
        <TripStatusBadge status="in_progress" />
        <TripStatusBadge status="completed" />
        <TripStatusBadge status="cancelled" />
        <TripStatusBadge status="rejected" />
        <TripStatusBadge status="incident" />
      </Stack>
    </Card>
  ),
};

export const Small: Story = {
  render: () => (
    <Card style={{ maxWidth: 560 }}>
      <Stack direction="vertical" gap={3}>
        <TripStatusBadge size="sm" status="assigned" />

        <TripStatusBadge size="sm" status="in_progress" />

        <TripStatusBadge size="sm" status="completed" />
      </Stack>
    </Card>
  ),
};

export const WithoutDot: Story = {
  args: {
    withDot: false,
    status: "going_to_pickup",
  },
};
