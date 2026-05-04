import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "../Stack";
import { Badge } from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
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
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
  args: {},
  render: () => (
    <Stack gap={3}>
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Activo</Badge>
      <Badge variant="success">Pagado</Badge>
      <Badge variant="warning">Parcial</Badge>
      <Badge variant="danger">Pendiente</Badge>
      <Badge variant="info">En juego</Badge>
    </Stack>
  ),
};

export const Sizes: Story = {
  args: {},
  render: () => (
    <Stack gap={3}>
      <Badge size="sm" variant="primary">
        Infantil M
      </Badge>
      <Badge size="md" variant="primary">
        Infantil Masculino
      </Badge>
    </Stack>
  ),
};
