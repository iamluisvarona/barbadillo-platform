import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Card } from "../Card";
import { Stack } from "../Stack";
import { LocationSharingCard } from "./LocationSharingCard";

function Demo() {
  const [enabled, setEnabled] = useState(true);

  return (
    <Card style={{ maxWidth: 620 }}>
      <LocationSharingCard enabled={enabled} onChange={setEnabled} />
    </Card>
  );
}

const meta: Meta<typeof LocationSharingCard> = {
  title: "Transport/LocationSharingCard",
  component: LocationSharingCard,
  args: {
    enabled: true,
    disabled: false,
    title: "Compartir ubicación",
    description:
      "Permite que la organización vea tu posición en tiempo real durante el trayecto.",
  },
};

export default meta;

type Story = StoryObj<typeof LocationSharingCard>;

export const Default: Story = {
  render: () => <Demo />,
};

export const Disabled: Story = {
  args: {
    enabled: false,
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    enabled: false,
    error: "No se ha podido activar la ubicación del dispositivo.",
  },
};

export const CustomContent: Story = {
  args: {
    enabled: true,
    title: "GPS operativo",
    description: "El staff podrá seguir la ruta del conductor en tiempo real.",
  },
};

export const InList: Story = {
  render: () => (
    <Stack gap={4}>
      <LocationSharingCard enabled />
      <LocationSharingCard enabled={false} />
    </Stack>
  ),
};
