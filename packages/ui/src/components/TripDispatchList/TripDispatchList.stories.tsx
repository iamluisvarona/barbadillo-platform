import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";
import {
  TripDispatchList,
  type TripDispatchListItem,
} from "./TripDispatchList";

const meta = {
  title: "Components/TripDispatchList",
  component: TripDispatchList,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TripDispatchList>;

export default meta;

type Story = StoryObj<typeof meta>;

const items: TripDispatchListItem[] = [
  {
    id: "trip-1",
    time: "10:00",
    dayLabel: "HOY",
    status: "in_progress",
    originLabel: "Hotel Tres Cantos",
    destinationLabel: "Pabellón La Luz",
    teamName: "CB Cabrini",
    teamCategory: "Infantil Masculino",
    passengerCount: 15,
    vehicleName: "Furgoneta 1",
    driverName: "Luis Martín",
    highlighted: true,
  },
  {
    id: "trip-2",
    time: "11:30",
    dayLabel: "HOY",
    status: "assigned",
    originLabel: "Hotel VP El Madroño",
    destinationLabel: "Pabellón Norte",
    teamName: "EASO Basket",
    teamCategory: "Cadete Femenino",
    passengerCount: 12,
    vehicleName: "Furgoneta 2",
    driverName: "Carlos Ruiz",
  },
  {
    id: "trip-3",
    time: "13:00",
    dayLabel: "HOY",
    status: "confirmed",
    originLabel: "Estación Renfe",
    destinationLabel: "Hotel Tres Cantos",
    teamName: "CB Zaragoza",
    teamCategory: "Infantil Femenino",
    passengerCount: 10,
    vehicleName: "Furgoneta 3",
    driverName: "Ana López",
  },
];

export const Default: Story = {
  args: {
    items,
  },
  render: (args) => (
    <div style={{ width: 760 }}>
      <TripDispatchList {...args} />
    </div>
  ),
};

export const WithFooter: Story = {
  args: {
    items,
    footer: (
      <Button variant="ghost" fullWidth>
        Ver todos los trayectos ›
      </Button>
    ),
  },
  render: (args) => (
    <div style={{ width: 760 }}>
      <TripDispatchList {...args} />
    </div>
  ),
};

export const Empty: Story = {
  args: {
    items: [],
    emptyState: "No hay próximos trayectos.",
  },
  render: (args) => (
    <div style={{ width: 760 }}>
      <TripDispatchList {...args} />
    </div>
  ),
};
