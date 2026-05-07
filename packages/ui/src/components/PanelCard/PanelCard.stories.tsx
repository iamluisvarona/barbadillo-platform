import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";
import { Stack } from "../Stack";
import { Text } from "../Typography";
import { Badge } from "../Badge";

import { PanelCard } from "./PanelCard";

const meta = {
  title: "Components/PanelCard",
  component: PanelCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "highlighted", "live"],
    },
  },
} satisfies Meta<typeof PanelCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Próximos trayectos",
    description: "Control operativo de salidas y asignaciones",
    children: (
      <Stack gap={3}>
        <Text>Hotel Tres Cantos → Pabellón La Luz</Text>
        <Text tone="muted">CB Cabrini · Infantil Masculino · 15 pasajeros</Text>
      </Stack>
    ),
  },
  render: (args) => (
    <div style={{ width: 520 }}>
      <PanelCard {...args} />
    </div>
  ),
};

export const WithActions: Story = {
  args: {
    title: "Estado de vehículos",
    description: "Disponibilidad de la flota",
    actions: (
      <Button variant="ghost" size="sm">
        Ver todos
      </Button>
    ),
    children: (
      <Stack gap={3}>
        <Text>Furgoneta 1 · 1234 KLM</Text>
        <Badge variant="success">EN RUTA</Badge>
      </Stack>
    ),
  },
  render: (args) => (
    <div style={{ width: 520 }}>
      <PanelCard {...args} />
    </div>
  ),
};

export const Highlighted: Story = {
  args: {
    variant: "highlighted",
    title: "Panel destacado",
    description: "Usado para bloques importantes del dashboard",
    actions: (
      <Button variant="primary" size="sm">
        Acción
      </Button>
    ),
    children: (
      <Stack gap={3}>
        <Text>Contenido destacado con glow morado.</Text>
        <Text tone="muted">Mantiene el estilo operativo dark premium.</Text>
      </Stack>
    ),
  },
  render: (args) => (
    <div style={{ width: 520 }}>
      <PanelCard {...args} />
    </div>
  ),
};

export const Live: Story = {
  args: {
    variant: "live",
    title: (
      <>
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: 999,
            background: "var(--bb-color-success)",
            boxShadow: "0 0 18px rgba(81, 216, 90, 0.7)",
          }}
        />
        Viaje en curso
      </>
    ),
    description: "TR-1254",
    actions: <Badge variant="success">LIVE</Badge>,
    children: (
      <Stack gap={3}>
        <Text>Hotel Tres Cantos → Pabellón La Luz</Text>
        <Text tone="muted">En curso desde 10:12 · 40 min estimados</Text>
      </Stack>
    ),
  },
  render: (args) => (
    <div style={{ width: 520 }}>
      <PanelCard {...args} />
    </div>
  ),
};

export const WithFooter: Story = {
  args: {
    title: "Incidencias recientes",
    description: "Alertas abiertas durante la jornada",
    children: (
      <Stack gap={3}>
        <Text>Retraso por tráfico en M-607</Text>
        <Text tone="muted">Asignada a Luis Martín</Text>
      </Stack>
    ),
    footer: (
      <Button variant="ghost" fullWidth>
        Ver todas las incidencias
      </Button>
    ),
  },
  render: (args) => (
    <div style={{ width: 520 }}>
      <PanelCard {...args} />
    </div>
  ),
};
