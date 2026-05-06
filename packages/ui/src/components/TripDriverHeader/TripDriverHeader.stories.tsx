import type { Meta, StoryObj } from "@storybook/react";

import { FloatingMapControls } from "../FloatingMapControls";

import { TripDriverHeader } from "./TripDriverHeader";

const meta: Meta<typeof TripDriverHeader> = {
  title: "Transport/TripDriverHeader",
  component: TripDriverHeader,
  args: {
    driverName: "Luis Varona",
    vehicleName: "Furgoneta 1",
    currentTrip: "Hotel Tres Cantos → Pabellón La Luz",
    status: "going_to_pickup",
  },
};

export default meta;

type Story = StoryObj<typeof TripDriverHeader>;

export const Default: Story = {};

export const WithControls: Story = {
  render: () => (
    <TripDriverHeader
      driverName="Luis Varona"
      vehicleName="Furgoneta 1"
      currentTrip="Hotel → La Luz"
      status="in_progress"
      rightContent={
        <FloatingMapControls
          orientation="horizontal"
          controls={[
            {
              id: "gps",
              icon: "📍",
              label: "GPS",
              active: true,
            },
            {
              id: "nav",
              icon: "🧭",
              label: "Navegación",
            },
          ]}
        />
      }
    />
  ),
};

export const Completed: Story = {
  args: {
    status: "completed",
    currentTrip: "Trayecto finalizado correctamente",
  },
};
