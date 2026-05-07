import type { Meta, StoryObj } from "@storybook/react";

import { LiveTripPanel } from "./LiveTripPanel";

const meta = {
  title: "Components/LiveTripPanel",
  component: LiveTripPanel,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof LiveTripPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tripCode: "TR-1254",
    originLabel: "Hotel Tres Cantos",
    originAddress: "Av. de los Encuartes, 3",
    originMeta: "28760 Tres Cantos, Madrid",
    destinationLabel: "Pabellón La Luz",
    destinationAddress: "Av. de la Luz, s/n",
    destinationMeta: "28701 San Sebastián de los Reyes",
    progressLabel: "En curso desde 10:12",
    etaLabel: "40 min estimados",
    progressPercent: 48,
    secondaryAction: {
      label: "Contactar conductor",
      variant: "secondary",
    },
    primaryAction: {
      label: "Ver detalle",
      variant: "primary",
    },
  },
  render: (args) => (
    <div style={{ width: 420 }}>
      <LiveTripPanel {...args} />
    </div>
  ),
};

export const WithMapControls: Story = {
  args: {
    ...Default.args,
    mapOverlay: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--bb-space-2)",
        }}
      >
        <button
          style={{
            width: 38,
            height: 38,
            border: "1px solid rgba(148, 163, 184, 0.2)",
            borderRadius: 12,
            background: "rgba(2, 8, 23, 0.76)",
            color: "white",
            backdropFilter: "blur(10px)",
            fontSize: "1rem",
            fontWeight: 900,
            cursor: "pointer",
          }}
        >
          ⌖
        </button>

        <button
          style={{
            width: 38,
            height: 38,
            border: "1px solid rgba(148, 163, 184, 0.2)",
            borderRadius: 12,
            background: "rgba(2, 8, 23, 0.76)",
            color: "white",
            backdropFilter: "blur(10px)",
            fontSize: "1rem",
            fontWeight: 900,
            cursor: "pointer",
          }}
        >
          +
        </button>

        <button
          style={{
            width: 38,
            height: 38,
            border: "1px solid rgba(148, 163, 184, 0.2)",
            borderRadius: 12,
            background: "rgba(2, 8, 23, 0.76)",
            color: "white",
            backdropFilter: "blur(10px)",
            fontSize: "1rem",
            fontWeight: 900,
            cursor: "pointer",
          }}
        >
          −
        </button>
      </div>
    ),
  },
  render: (args) => (
    <div style={{ width: 420 }}>
      <LiveTripPanel {...args} />
    </div>
  ),
};

export const Compact: Story = {
  args: {
    tripCode: "TR-1254",
    originLabel: "Hotel Tres Cantos",
    destinationLabel: "Pabellón La Luz",
    progressLabel: "En curso",
    etaLabel: "ETA 10:52",
    progressPercent: 62,
    primaryAction: {
      label: "Ver detalle",
    },
  },
  render: (args) => (
    <div style={{ width: 360 }}>
      <LiveTripPanel {...args} />
    </div>
  ),
};
