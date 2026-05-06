import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "../Card";
import { Stack } from "../Stack";
import { TripETAChip } from "./TripETAChip";

const meta: Meta<typeof TripETAChip> = {
  title: "Transport/TripETAChip",
  component: TripETAChip,
  args: {
    value: "09:53",
    label: "ETA",
    tone: "success",
  },
  argTypes: {
    tone: {
      control: "select",
      options: ["default", "success", "warning", "danger", "info"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof TripETAChip>;

export const Default: Story = {};

export const AllTones: Story = {
  render: () => (
    <Card style={{ maxWidth: 560 }}>
      <Stack direction="vertical" gap={3}>
        <TripETAChip value="09:53" tone="success" />
        <TripETAChip value="+8 min" tone="warning" />
        <TripETAChip value="Retrasado" tone="danger" />
        <TripETAChip value="12 min" label="Tiempo" tone="info" />
        <TripETAChip value="6,8 km" label="Distancia" />
      </Stack>
    </Card>
  ),
};
