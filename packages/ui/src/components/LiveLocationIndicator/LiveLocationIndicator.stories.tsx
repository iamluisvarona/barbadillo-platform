import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "../Card";
import { Stack } from "../Stack";

import { LiveLocationIndicator } from "./LiveLocationIndicator";

const meta: Meta<typeof LiveLocationIndicator> = {
  title: "Transport/LiveLocationIndicator",
  component: LiveLocationIndicator,
  args: {
    status: "live",
    compact: false,
    pulsing: true,
  },
  argTypes: {
    status: {
      control: "select",
      options: ["live", "connecting", "offline"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof LiveLocationIndicator>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => (
    <Card style={{ maxWidth: 520 }}>
      <Stack direction="horizontal" gap={3}>
        <LiveLocationIndicator status="live" />
        <LiveLocationIndicator status="connecting" />
        <LiveLocationIndicator status="offline" />
      </Stack>
    </Card>
  ),
};

export const Compact: Story = {
  render: () => (
    <Stack direction="horizontal" gap={3}>
      <LiveLocationIndicator compact status="live" />
      <LiveLocationIndicator compact status="connecting" />
      <LiveLocationIndicator compact status="offline" />
    </Stack>
  ),
};
