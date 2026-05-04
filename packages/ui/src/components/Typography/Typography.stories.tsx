import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { Caption, Heading, Text } from "./Typography";

const meta = {
  title: "Components/Typography",
  component: Heading,
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
  render: () => (
    <Card style={{ width: 360 }}>
      <Stack gap={3}>
        <Caption tone="primary">Transporte</Caption>
        <Heading level={2}>Viaje asignado</Heading>
        <Text tone="muted">Hotel Tres Cantos → Polideportivo La Luz</Text>
        <Text size="sm" tone="soft">
          Salida estimada a las 18:00 · 15 pasajeros
        </Text>
      </Stack>
    </Card>
  ),
};

export const Tones: Story = {
  args: {},
  render: () => (
    <Stack gap={3}>
      <Text>Texto normal</Text>
      <Text tone="muted">Texto muted</Text>
      <Text tone="primary">Texto primary</Text>
      <Text tone="success">Texto success</Text>
      <Text tone="danger">Texto danger</Text>
      <Text tone="warning">Texto warning</Text>
    </Stack>
  ),
};
