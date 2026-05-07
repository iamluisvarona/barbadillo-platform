import type { Meta, StoryObj } from "@storybook/react";

import {
  DashboardKpiGrid,
  type DashboardKpiGridItem,
} from "./DashboardKpiGrid";

const meta = {
  title: "Components/DashboardKpiGrid",
  component: DashboardKpiGrid,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DashboardKpiGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

const items: DashboardKpiGridItem[] = [
  {
    id: "today",
    label: "Trayectos hoy",
    value: "24",
    description: "↑ 3 vs ayer",
    badge: "Hoy",
  },
  {
    id: "live",
    label: "En curso",
    value: "6",
    description: "25% del total",
    badge: "Live",
    badgeVariant: "success",
  },
  {
    id: "pending",
    label: "Pendientes",
    value: "12",
    description: "50% del total",
    badge: "Revisar",
    badgeVariant: "warning",
  },
  {
    id: "completed",
    label: "Completados",
    value: "6",
    description: "25% del total",
    badge: "OK",
    badgeVariant: "success",
  },
  {
    id: "incidents",
    label: "Incidencias",
    value: "2",
    description: "Ver detalles",
    badge: "Urgente",
    badgeVariant: "danger",
  },
];

export const Default: Story = {
  args: {
    items,
  },
  render: (args) => (
    <div style={{ width: 1180 }}>
      <DashboardKpiGrid {...args} />
    </div>
  ),
};

export const ThreeColumns: Story = {
  args: {
    items: items.slice(0, 3),
    columns: 3,
  },
  render: (args) => (
    <div style={{ width: 820 }}>
      <DashboardKpiGrid {...args} />
    </div>
  ),
};

export const CompactMobileWidth: Story = {
  args: {
    items,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  render: (args) => (
    <div style={{ width: 360 }}>
      <DashboardKpiGrid {...args} />
    </div>
  ),
};
