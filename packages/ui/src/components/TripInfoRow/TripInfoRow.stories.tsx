import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "../Card";
import { Stack } from "../Stack";
import { TripInfoRow } from "./TripInfoRow";

const meta: Meta<typeof TripInfoRow> = {
  title: "Transport/TripInfoRow",
  component: TripInfoRow,
  args: {
    icon: "📍",
    label: "Origen",
    value: "Hotel Tres Cantos",
    description: "Av. Colmenar Viejo 12",
    tone: "primary",
  },
  argTypes: {
    tone: {
      control: "select",
      options: ["default", "primary", "success", "info", "warning", "danger"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof TripInfoRow>;

export const Default: Story = {};

export const TripDetails: Story = {
  render: () => (
    <Card style={{ maxWidth: 520 }}>
      <Stack gap={3}>
        <TripInfoRow
          icon="📍"
          label="Origen"
          value="Hotel Tres Cantos"
          description="Av. Colmenar Viejo 12"
          tone="primary"
        />

        <TripInfoRow
          icon="🏁"
          label="Destino"
          value="Pabellón La Luz"
          description="Calle del Deporte 5"
          tone="success"
        />

        <TripInfoRow
          icon="👥"
          label="Pasajeros"
          value="15 personas"
          tone="info"
        />

        <TripInfoRow
          icon="🚐"
          label="Vehículo"
          value="Furgoneta 1"
          description="1234 KLM"
        />
      </Stack>
    </Card>
  ),
};
