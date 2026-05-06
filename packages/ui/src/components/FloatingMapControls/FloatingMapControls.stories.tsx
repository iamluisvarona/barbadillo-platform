import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "../Card";
import { Stack } from "../Stack";

import { FloatingMapControls } from "./FloatingMapControls";

const meta: Meta<typeof FloatingMapControls> = {
  title: "Transport/FloatingMapControls",
  component: FloatingMapControls,
  args: {
    orientation: "vertical",
  },
};

export default meta;

type Story = StoryObj<typeof FloatingMapControls>;

const controls = [
  {
    id: "location",
    icon: "📍",
    label: "Mi ubicación",
    active: true,
  },
  {
    id: "navigation",
    icon: "🧭",
    label: "Abrir navegación",
  },
  {
    id: "zoom-in",
    icon: "+",
    label: "Zoom in",
  },
  {
    id: "zoom-out",
    icon: "−",
    label: "Zoom out",
  },
];

export const Default: Story = {
  render: () => (
    <Card
      style={{
        maxWidth: 520,
        minHeight: 320,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 16,
          right: 16,
        }}
      >
        <FloatingMapControls controls={controls} />
      </div>
    </Card>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <Stack gap={4}>
      <FloatingMapControls orientation="horizontal" controls={controls} />
    </Stack>
  ),
};
