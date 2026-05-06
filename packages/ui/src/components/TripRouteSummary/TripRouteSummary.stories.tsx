import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "../Card";
import { Stack } from "../Stack";
import { TripRouteSummary } from "./TripRouteSummary";

const meta: Meta<typeof TripRouteSummary> = {
  title: "Transport/TripRouteSummary",
  component: TripRouteSummary,
  args: {
    originLabel: "Hotel Tres Cantos",
    originAddress: "Av. Colmenar Viejo 12",
    destinationLabel: "Pabellón La Luz",
    destinationAddress: "Calle del Deporte 5",
    variant: "detailed",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["compact", "detailed", "vertical"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof TripRouteSummary>;

export const Detailed: Story = {};

export const Compact: Story = {
  args: {
    variant: "compact",
  },
};

export const Vertical: Story = {
  args: {
    variant: "vertical",
  },
};

export const InsideCards: Story = {
  render: () => (
    <Stack gap={4}>
      <Card style={{ maxWidth: 520 }}>
        <TripRouteSummary
          variant="compact"
          originLabel="Hotel"
          destinationLabel="La Luz"
        />
      </Card>

      <Card style={{ maxWidth: 520 }}>
        <TripRouteSummary
          variant="detailed"
          originLabel="Hotel Tres Cantos"
          originAddress="Madrid"
          destinationLabel="Pabellón La Luz"
          destinationAddress="Tres Cantos"
        />
      </Card>

      <Card style={{ maxWidth: 520 }}>
        <TripRouteSummary
          variant="vertical"
          originLabel="Estación"
          destinationLabel="Hotel"
        />
      </Card>
    </Stack>
  ),
};
