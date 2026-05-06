import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";
import { RouteMetricsBar } from "../RouteMetricsBar";
import { Stack } from "../Stack";
import { TripRouteSummary } from "../TripRouteSummary";

import { DriverRouteSheet } from "./DriverRouteSheet";

const meta: Meta<typeof DriverRouteSheet> = {
  title: "Transport/DriverRouteSheet",
  component: DriverRouteSheet,
  args: {
    title: "Viaje a La Luz",
    subtitle: "Recoge al equipo y dirígete al pabellón principal.",
    status: "going_to_pickup",
  },
};

export default meta;

type Story = StoryObj<typeof DriverRouteSheet>;

export const Default: Story = {
  render: (args) => (
    <DriverRouteSheet
      {...args}
      primaryAction={<Button>He llegado al origen</Button>}
      secondaryAction={<Button variant="secondary">Ver navegación</Button>}
      dangerAction={<Button variant="danger">Reportar incidencia</Button>}
    >
      <Stack gap={4}>
        <TripRouteSummary
          variant="vertical"
          originLabel="Hotel Tres Cantos"
          destinationLabel="Pabellón La Luz"
        />

        <RouteMetricsBar
          items={[
            {
              icon: "📍",
              label: "Distancia",
              value: "6,8 km",
              tone: "info",
            },
            {
              icon: "⏱",
              label: "Tiempo",
              value: "12 min",
            },
            {
              icon: "🚦",
              label: "ETA",
              value: "09:53",
              tone: "success",
            },
          ]}
        />
      </Stack>
    </DriverRouteSheet>
  ),
};

export const Completed: Story = {
  args: {
    title: "Trayecto completado",
    subtitle: "Todos los pasajeros han llegado correctamente.",
    status: "completed",
  },
};
