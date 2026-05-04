import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { Text } from "../Typography";
import { StatusBadge } from "./StatusBadge";

const meta = {
  title: "Components/StatusBadge",
  component: StatusBadge,
  args: {
    children: "Activo",
    variant: "primary",
    size: "md",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "success", "warning", "danger", "info"],
    },
    size: {
      control: "select",
      options: ["sm", "md"],
    },
  },
} satisfies Meta<typeof StatusBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
  args: {},
  render: () => (
    <Stack gap={3}>
      <StatusBadge variant="default">Inactivo</StatusBadge>
      <StatusBadge variant="primary">En curso</StatusBadge>
      <StatusBadge variant="success">Pagado</StatusBadge>
      <StatusBadge variant="warning">Pendiente</StatusBadge>
      <StatusBadge variant="danger">Cancelado</StatusBadge>
      <StatusBadge variant="info">Asignado</StatusBadge>
    </Stack>
  ),
};

export const InsideCard: Story = {
  args: {},
  render: () => (
    <Card style={{ width: 360 }}>
      <Stack gap={3}>
        <StatusBadge variant="primary" size="sm">
          En curso
        </StatusBadge>

        <Text>Hotel Tres Cantos → Polideportivo La Luz</Text>
      </Stack>
    </Card>
  ),
};
