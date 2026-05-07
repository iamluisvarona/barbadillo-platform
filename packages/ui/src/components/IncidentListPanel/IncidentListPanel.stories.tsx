import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";
import {
  IncidentListPanel,
  type IncidentListPanelItem,
} from "./IncidentListPanel";

const meta = {
  title: "Components/IncidentListPanel",
  component: IncidentListPanel,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof IncidentListPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

const items: IncidentListPanelItem[] = [
  {
    id: "incident-1",
    time: "09:45",
    dayLabel: "HOY",
    title: "Retraso por tráfico en M-607",
    description: "TR-1248 · Hotel Tres Cantos → Pabellón Norte",
    status: "ABIERTA",
    tone: "danger",
    assignedTo: "Luis Martín",
  },
  {
    id: "incident-2",
    time: "08:30",
    dayLabel: "HOY",
    title: "Cambio de vehículo solicitado",
    description: "TR-1245 · Estación Renfe → Hotel Tres Cantos",
    status: "EN PROCESO",
    tone: "warning",
    assignedTo: "Carlos Ruiz",
  },
];

export const Default: Story = {
  args: {
    items,
  },
  render: (args) => (
    <div style={{ width: 860 }}>
      <IncidentListPanel {...args} />
    </div>
  ),
};

export const WithFooter: Story = {
  args: {
    items,
    footer: (
      <Button variant="ghost" fullWidth>
        Ver todas las incidencias ›
      </Button>
    ),
  },
  render: (args) => (
    <div style={{ width: 860 }}>
      <IncidentListPanel {...args} />
    </div>
  ),
};

export const Empty: Story = {
  args: {
    items: [],
    emptyState: "No hay incidencias abiertas.",
  },
  render: (args) => (
    <div style={{ width: 860 }}>
      <IncidentListPanel {...args} />
    </div>
  ),
};
