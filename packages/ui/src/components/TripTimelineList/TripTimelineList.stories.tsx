import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "../Card";
import { Stack } from "../Stack";

import { TripTimelineList } from "./TripTimelineList";

const meta: Meta<typeof TripTimelineList> = {
  title: "Transport/TripTimelineList",
  component: TripTimelineList,
};

export default meta;

type Story = StoryObj<typeof TripTimelineList>;

export const Default: Story = {
  render: () => (
      <TripTimelineList
        trips={[
          {
            id: "1",
            time: "08:30",
            status: "completed",
            originLabel: "Hotel",
            destinationLabel: "La Luz",
            teamName: "CB Zaragoza",
            teamCategory: "Infantil Masculino",
            passengerCount: 15,
            vehicleName: "Furgoneta 1",
          },
          {
            id: "2",
            time: "10:00",
            status: "in_progress",
            originLabel: "La Luz",
            destinationLabel: "Estación",
            teamName: "EASO Basket",
            teamCategory: "Cadete Masculino",
            passengerCount: 12,
            vehicleName: "Furgoneta 2",
          },
          {
            id: "3",
            time: "12:30",
            status: "assigned",
            originLabel: "Hotel VP",
            destinationLabel: "Pabellón Columbia",
            teamName: "CB Cabrini",
            passengerCount: 10,
            vehicleName: "Furgoneta 3",
          },
        ]}
      />
  ),
};

export const CustomRender: Story = {
  render: () => (
    <Stack gap={4}>
      <TripTimelineList
        trips={[
          {
            id: "1",
            time: "09:00",
            status: "completed",
            originLabel: "Hotel",
            destinationLabel: "La Luz",
            teamName: "CB Zaragoza",
            passengerCount: 15,
          },
        ]}
        renderTrip={(trip) => (
          <div
            style={{
              padding: 16,
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            {trip.time} · {trip.teamName}
          </div>
        )}
      />
    </Stack>
  ),
};
