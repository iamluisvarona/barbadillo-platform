import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "../Card";
import { StatGroup } from "./StatGroup";

const meta: Meta<typeof StatGroup> = {
  title: "Components/StatGroup",
  component: StatGroup,
};

export default meta;

type Story = StoryObj<typeof StatGroup>;

export const DashboardStats: Story = {
  render: () => (
    <Card style={{ maxWidth: 900 }}>
      <StatGroup
        columns={4}
        items={[
          {
            id: 1,
            label: "Equipos inscritos",
            value: 64,
            description: "8 categorías activas",
            icon: "🏀",
            trend: "+12%",
          },
          {
            id: 2,
            label: "Pagos completados",
            value: "48",
            description: "75% del total",
            icon: "💳",
            trend: "+8%",
          },
          {
            id: 3,
            label: "Hoteles ocupados",
            value: "82%",
            description: "156 personas alojadas",
            icon: "🏨",
          },
          {
            id: 4,
            label: "Viajes pendientes",
            value: 12,
            description: "4 conductores disponibles",
            icon: "🚌",
          },
        ]}
      />
    </Card>
  ),
};

export const TwoColumns: Story = {
  render: () => (
    <Card style={{ maxWidth: 640 }}>
      <StatGroup
        columns={2}
        items={[
          {
            id: 1,
            label: "Partidos activos",
            value: 6,
            icon: "⛹️",
          },
          {
            id: 2,
            label: "Concursos",
            value: 3,
            icon: "🔥",
          },
        ]}
      />
    </Card>
  ),
};
