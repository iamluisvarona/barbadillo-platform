import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Button } from "../Button";

const meta = {
  title: "Components/Card",
  component: Card,
  args: {
    variant: "default",
    padding: "md",
    interactive: false,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "highlight", "danger", "success"],
    },
    padding: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
    },
    interactive: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card {...args} style={{ width: 340 }}>
      <h3 style={{ margin: 0 }}>CB Zaragoza</h3>
      <p style={{ color: "var(--bb-color-text-muted)", marginBottom: 0 }}>
        Equipo inscrito · Infantil Masculino
      </p>
    </Card>
  ),
};

export const Highlight: Story = {
  args: {
    variant: "highlight",
  },
  render: (args) => (
    <Card {...args} style={{ width: 340 }}>
      <h3 style={{ margin: 0 }}>Viaje asignado</h3>
      <p style={{ color: "var(--bb-color-text-muted)" }}>
        Hotel → Polideportivo La Luz
      </p>
      <Button fullWidth>Aceptar trayecto</Button>
    </Card>
  ),
};

export const Danger: Story = {
  args: {
    variant: "danger",
  },
  render: (args) => (
    <Card {...args} style={{ width: 340 }}>
      <h3 style={{ margin: 0 }}>Resetear concurso</h3>
      <p style={{ color: "var(--bb-color-text-muted)" }}>
        Esta acción borrará todos los intentos.
      </p>
      <Button variant="danger" fullWidth>
        Resetear
      </Button>
    </Card>
  ),
};

export const Success: Story = {
  args: {
    variant: "success",
  },
  render: (args) => (
    <Card {...args} style={{ width: 340 }}>
      <h3 style={{ margin: 0 }}>Pago completado</h3>
      <p style={{ color: "var(--bb-color-text-muted)", marginBottom: 0 }}>
        El equipo no tiene importes pendientes.
      </p>
    </Card>
  ),
};
