import type { Meta, StoryObj } from "@storybook/react";

import { TripETAChip } from "../TripETAChip";
import { TripMiniMapPreview } from "./TripMiniMapPreview";

const meta: Meta<typeof TripMiniMapPreview> = {
  title: "Transport/TripMiniMapPreview",
  component: TripMiniMapPreview,
  args: {
    originLabel: "Hotel Tres Cantos",
    destinationLabel: "Pabellón La Luz",
    animated: true,
  },
};

export default meta;

type Story = StoryObj<typeof TripMiniMapPreview>;

export const Default: Story = {};

export const WithOverlay: Story = {
  args: {
    overlay: <TripETAChip value="09:53" tone="success" />,
  },
};

export const Static: Story = {
  args: {
    animated: false,
  },
};

export const Tall: Story = {
  args: {
    height: 260,
  },
};
