import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Card } from "../Card";
import { Stack } from "../Stack";
import { Text } from "../Typography";
import { SegmentedControl } from "./SegmentedControl";

function SegmentedControlDemo() {
  const [value, setValue] = useState("matches");

  return (
    <Card style={{ maxWidth: 720 }}>
      <Stack gap={5}>
        <SegmentedControl
          fullWidth
          value={value}
          onChange={setValue}
          options={[
            {
              value: "matches",
              label: "Partidos",
              icon: "🏀",
            },
            {
              value: "contests",
              label: "Concursos",
              icon: "🔥",
            },
            {
              value: "transport",
              label: "Transporte",
              icon: "🚌",
            },
            {
              value: "hotels",
              label: "Hoteles",
              icon: "🏨",
            },
          ]}
        />

        <Text>
          Valor seleccionado: <strong>{value}</strong>
        </Text>
      </Stack>
    </Card>
  );
}

const meta: Meta<typeof SegmentedControl> = {
  title: "Components/SegmentedControl",
  component: SegmentedControl,
};

export default meta;

type Story = StoryObj<typeof SegmentedControl>;

export const Default: Story = {
  render: () => <SegmentedControlDemo />,
};

export const Compact: Story = {
  render: () => (
    <Card style={{ maxWidth: 420 }}>
      <SegmentedControl
        value="all"
        options={[
          {
            value: "all",
            label: "Todos",
          },
          {
            value: "pending",
            label: "Pendientes",
          },
          {
            value: "paid",
            label: "Pagados",
          },
        ]}
      />
    </Card>
  ),
};

export const MobileScrollable: Story = {
  render: () => (
    <Card style={{ maxWidth: 360 }}>
      <SegmentedControl
        value="1"
        options={[
          {
            value: "1",
            label: "Equipos",
            icon: "🏀",
          },
          {
            value: "2",
            label: "Pagos",
            icon: "💳",
          },
          {
            value: "3",
            label: "Hoteles",
            icon: "🏨",
          },
          {
            value: "4",
            label: "Transporte",
            icon: "🚌",
          },
          {
            value: "5",
            label: "Concursos",
            icon: "🔥",
          },
        ]}
      />
    </Card>
  ),
};
