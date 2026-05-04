import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { Text } from "../Typography";
import { NumberInput } from "./NumberInput";

const meta = {
  title: "Forms/NumberInput",
  component: NumberInput,
  parameters: {
    layout: "centered",
  },
  args: {
    value: 0,
    onChange: () => {},
    min: 0,
    step: 1,
  },
} satisfies Meta<typeof NumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<number | "">(12);

    return (
      <div style={{ width: 240 }}>
        <NumberInput value={value} onChange={setValue} min={0} />
      </div>
    );
  },
};

export const JerseyNumber: Story = {
  render: () => {
    const [value, setValue] = useState<number | "">(7);

    return (
      <Card style={{ width: 320 }}>
        <Stack gap={3}>
          <Text tone="muted">Dorsal del jugador</Text>
          <NumberInput value={value} onChange={setValue} min={0} max={99} />
        </Stack>
      </Card>
    );
  },
};

export const PeopleCount: Story = {
  render: () => {
    const [value, setValue] = useState<number | "">(15);

    return (
      <Card style={{ width: 320 }}>
        <Stack gap={3}>
          <Text tone="muted">Personas en el desplazamiento</Text>
          <NumberInput value={value} onChange={setValue} min={1} max={60} />
        </Stack>
      </Card>
    );
  },
};

export const MoneyLikeValue: Story = {
  render: () => {
    const [value, setValue] = useState<number | "">(300);

    return (
      <Card style={{ width: 320 }}>
        <Stack gap={3}>
          <Text tone="muted">Precio inscripción</Text>
          <NumberInput value={value} onChange={setValue} min={0} step={50} />
        </Stack>
      </Card>
    );
  },
};
