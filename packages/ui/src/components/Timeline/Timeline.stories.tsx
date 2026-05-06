import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "../Badge";
import { Button } from "../Button";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { Text } from "../Typography";
import { Timeline } from "./Timeline";

const meta: Meta<typeof Timeline> = {
  title: "Components/Timeline",
  component: Timeline,
};

export default meta;

type Story = StoryObj<typeof Timeline>;

export const TripFlow: Story = {
  render: () => (
    <Card style={{ maxWidth: 640 }}>
      <Timeline
        items={[
          {
            id: 1,
            title: "Viaje asignado",
            description: "CB Zaragoza · 15 pasajeros",
            time: "18:00",
            icon: "🚌",
            variant: "info",
            content: (
              <Stack gap={3}>
                <Text tone="muted">Furgoneta 1 asignada automáticamente.</Text>

                <Badge variant="info">Pendiente de aceptación</Badge>
              </Stack>
            ),
          },
          {
            id: 2,
            title: "Conductor confirmado",
            description: "Luis Varona",
            time: "18:12",
            icon: "✅",
            variant: "success",
          },
          {
            id: 3,
            title: "En camino al hotel",
            description: "Polideportivo La Luz → Hotel",
            time: "18:35",
            icon: "📍",
            variant: "warning",
            content: <Button size="sm">Compartir ubicación</Button>,
          },
        ]}
      />
    </Card>
  ),
};

export const MatchEvents: Story = {
  render: () => (
    <Card style={{ maxWidth: 640 }}>
      <Timeline
        items={[
          {
            id: 1,
            title: "Inicio del partido",
            time: "10:00",
            icon: "🏀",
          },
          {
            id: 2,
            title: "Triple convertido",
            description: "Luis Varona · #7",
            time: "10:14",
            icon: "🔥",
            variant: "success",
          },
          {
            id: 3,
            title: "Tiempo muerto",
            description: "CB Zaragoza",
            time: "10:22",
            icon: "⏱️",
            variant: "warning",
          },
        ]}
      />
    </Card>
  ),
};
