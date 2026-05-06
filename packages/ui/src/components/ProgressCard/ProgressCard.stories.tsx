import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Stack } from "../Stack";
import { Text } from "../Typography";
import { ProgressCard } from "./ProgressCard";

const meta: Meta<typeof ProgressCard> = {
  title: "Components/ProgressCard",
  component: ProgressCard,
  args: {
    title: "Pago del equipo",
    description: "CB Zaragoza",
    value: 58,
    variant: "warning",
    children: null,
    footer: null,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "info", "warning", "danger"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProgressCard>;

export const Default: Story = {};

export const WithContent: Story = {
  args: {
    title: "Hotel asignado",
    description: "Hotel Tres Cantos",
    value: 72,
    variant: "info",
    children: (
      <Stack gap={2}>
        <Text tone="muted">18 / 25 plazas ocupadas</Text>
        <Text tone="muted">3 habitaciones libres</Text>
      </Stack>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    title: "Acreditaciones",
    description: "Generación de credenciales",
    value: 100,
    variant: "success",
    footer: <Button size="sm">Descargar PDF</Button>,
  },
};

export const Danger: Story = {
  args: {
    title: "Pago pendiente",
    description: "CB Example",
    value: 14,
    variant: "danger",
  },
};
