import type { Meta, StoryObj } from "@storybook/react";

import { ActivitySummaryPanel } from "./ActivitySummaryPanel";

const meta = {
  title: "Components/ActivitySummaryPanel",
  component: ActivitySummaryPanel,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ActivitySummaryPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

const items = [
  {
    id: "km",
    label: "Km recorridos",
    value: "186,4 km",
    trend: "↑ 12% vs ayer",
    tone: "success",
  },
  {
    id: "time",
    label: "Tiempo total",
    value: "8h 42m",
    trend: "↑ 8% vs ayer",
    tone: "success",
  },
  {
    id: "passengers",
    label: "Personas transportadas",
    value: "256",
    trend: "↑ 15% vs ayer",
    tone: "success",
  },
  {
    id: "trips",
    label: "Trayectos realizados",
    value: "18",
    trend: "↑ 5% vs ayer",
    tone: "success",
  },
] as const;

export const Default: Story = {
  args: {
    items,
  },
  render: (args) => (
    <div style={{ width: 720 }}>
      <ActivitySummaryPanel {...args} />
    </div>
  ),
};

export const WithoutChart: Story = {
  args: {
    items,
    chartVariant: "none",
  },
  render: (args) => (
    <div style={{ width: 720 }}>
      <ActivitySummaryPanel {...args} />
    </div>
  ),
};

export const CustomChart: Story = {
  args: {
    items,
    chart: (
      <div
        style={{
          height: 150,
          display: "grid",
          placeItems: "center",
          borderRadius: "var(--bb-radius-xl)",
          border: "1px dashed rgba(148, 163, 184, 0.25)",
          color: "var(--bb-color-text-muted)",
          fontSize: "0.85rem",
          fontWeight: 800,
        }}
      >
        Chart custom
      </div>
    ),
  },
  render: (args) => (
    <div style={{ width: 720 }}>
      <ActivitySummaryPanel {...args} />
    </div>
  ),
};
