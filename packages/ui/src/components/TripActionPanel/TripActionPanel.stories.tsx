import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "../Card";
import { Stack } from "../Stack";
import { TripActionPanel } from "./TripActionPanel";

const meta: Meta<typeof TripActionPanel> = {
  title: "Transport/TripActionPanel",
  component: TripActionPanel,
  args: {
    primaryLabel: "He llegado al origen",
    sticky: false,
  },
};

export default meta;

type Story = StoryObj<typeof TripActionPanel>;

export const Default: Story = {
  args: {
    onPrimaryClick: () => console.log("primary"),
  },
};

export const WithSecondary: Story = {
  args: {
    primaryLabel: "Iniciar viaje",
    secondaryLabel: "Ver ruta",
    onPrimaryClick: () => console.log("primary"),
    onSecondaryClick: () => console.log("secondary"),
  },
};

export const WithDanger: Story = {
  args: {
    primaryLabel: "Finalizar viaje",
    secondaryLabel: "Llamar organización",
    dangerLabel: "Reportar incidencia",
    onPrimaryClick: () => console.log("primary"),
    onSecondaryClick: () => console.log("secondary"),
    onDangerClick: () => console.log("danger"),
  },
};

export const InsideMobileSurface: Story = {
  render: () => (
    <Card style={{ maxWidth: 420 }}>
      <Stack gap={4}>
        <TripActionPanel
          primaryLabel="Aceptar viaje"
          secondaryLabel="Rechazar"
          primaryIcon="✅"
          onPrimaryClick={() => {}}
          onSecondaryClick={() => {}}
        />

        <TripActionPanel
          primaryLabel="Finalizar viaje"
          dangerLabel="Incidencia"
          onPrimaryClick={() => {}}
          onDangerClick={() => {}}
        />
      </Stack>
    </Card>
  ),
};
