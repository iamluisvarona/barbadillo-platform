import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";
import {
  VehicleStatusList,
  type VehicleStatusListItem,
} from "./VehicleStatusList";

const meta = {
  title: "Components/VehicleStatusList",
  component: VehicleStatusList,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof VehicleStatusList>;

export default meta;

type Story = StoryObj<typeof meta>;

const items: VehicleStatusListItem[] = [
  {
    id: "vehicle-1",
    name: "Furgoneta 1",
    plate: "1234 KLM",
    seatsLabel: "15 plazas",
    status: "EN RUTA",
    tone: "success",
  },
  {
    id: "vehicle-2",
    name: "Furgoneta 2",
    plate: "5678 NOP",
    seatsLabel: "15 plazas",
    status: "DISPONIBLE",
    tone: "info",
  },
  {
    id: "vehicle-3",
    name: "Furgoneta 3",
    plate: "9101 QRS",
    seatsLabel: "12 plazas",
    status: "MANTENIMIENTO",
    tone: "warning",
  },
  {
    id: "vehicle-4",
    name: "Furgoneta 4",
    plate: "1122 TUV",
    seatsLabel: "15 plazas",
    status: "NO DISPONIBLE",
    tone: "danger",
  },
];

export const Default: Story = {
  args: {
    items,
  },
  render: (args) => (
    <div style={{ width: 480 }}>
      <VehicleStatusList {...args} />
    </div>
  ),
};

export const WithFooter: Story = {
  args: {
    items,
    footer: (
      <Button variant="ghost" fullWidth>
        Ver todos los vehículos ›
      </Button>
    ),
  },
  render: (args) => (
    <div style={{ width: 480 }}>
      <VehicleStatusList {...args} />
    </div>
  ),
};

export const Empty: Story = {
  args: {
    items: [],
    emptyState: "No hay vehículos registrados.",
  },
  render: (args) => (
    <div style={{ width: 480 }}>
      <VehicleStatusList {...args} />
    </div>
  ),
};
