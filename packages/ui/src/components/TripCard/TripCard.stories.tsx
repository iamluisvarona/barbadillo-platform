import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Stack } from "../Stack";
import { TripCard } from "./TripCard";

const meta = {
  title: "Domain/Transport/TripCard",
  component: TripCard,
  parameters: {
    layout: "centered",
  },
  args: {
    from: "Hotel",
    to: "Polideportivo La Luz",
    time: "Viernes 18:00",
    status: "assigned",
  },
} satisfies Meta<typeof TripCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithTeam: Story = {
  args: {
    team: {
      name: "CB Zaragoza",
      category: "INF-M",
    },
    vehicle: "Furgoneta 1",
    driver: "Luis",
    peopleCount: 15,
  },
};

export const Completed: Story = {
  args: {
    status: "completed",
    team: {
      name: "EASO Basket",
      category: "CAD-F",
    },
    vehicle: "Furgoneta 2",
    driver: "Carlos",
    peopleCount: 8,
  },
};

export const WithActions: Story = {
  render: () => (
    <div style={{ width: 380 }}>
      <TripCard
        from="Hotel"
        to="La Luz"
        time="Viernes 18:00"
        status="assigned"
        team={{
          name: "CB Zaragoza",
          category: "INF-M",
        }}
        vehicle="Furgoneta 1"
        driver="Luis"
        peopleCount={15}
        footer={
          <Stack gap={2}>
            <Button size="sm">Ver detalle</Button>
          </Stack>
        }
      />
    </div>
  ),
};
