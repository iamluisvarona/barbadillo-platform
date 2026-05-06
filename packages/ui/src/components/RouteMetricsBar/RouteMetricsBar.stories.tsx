import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "../Card";
import { Stack } from "../Stack";
import { RouteMetricsBar } from "./RouteMetricsBar";

const meta: Meta<typeof RouteMetricsBar> = {
  title: "Transport/RouteMetricsBar",
  component: RouteMetricsBar,
};

export default meta;

type Story = StoryObj<typeof RouteMetricsBar>;

export const Default: Story = {
  render: () => (
    <Card style={{ maxWidth: 900 }}>
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
            label: "Duración",
            value: "12 min",
            tone: "default",
          },
          {
            icon: "🚦",
            label: "ETA",
            value: "09:53",
            tone: "success",
          },
        ]}
      />
    </Card>
  ),
};

export const DriverMode: Story = {
  render: () => (
    <Stack gap={4}>
      <RouteMetricsBar
        items={[
          {
            icon: "🚌",
            label: "Trayectos pendientes",
            value: "3",
            tone: "warning",
          },
          {
            icon: "👥",
            label: "Pasajeros",
            value: "15",
            tone: "info",
          },
          {
            icon: "📍",
            label: "Siguiente parada",
            value: "Hotel",
            tone: "default",
          },
          {
            icon: "⛽",
            label: "Combustible",
            value: "62%",
            tone: "success",
          },
        ]}
      />
    </Stack>
  ),
};
