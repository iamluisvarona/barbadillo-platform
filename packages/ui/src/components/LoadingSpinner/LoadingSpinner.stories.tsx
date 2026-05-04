import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { Text } from "../Typography";
import { LoadingSpinner } from "./LoadingSpinner";

const meta = {
  title: "Feedback/LoadingSpinner",
  component: LoadingSpinner,
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Cargando...",
    size: "md",
    tone: "primary",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    tone: {
      control: "select",
      options: ["primary", "success", "info", "warning", "danger", "muted"],
    },
  },
} satisfies Meta<typeof LoadingSpinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <Card style={{ width: 320 }}>
      <Stack gap={4}>
        <LoadingSpinner size="sm" label="Cargando datos..." />
        <LoadingSpinner size="md" label="Cargando equipos..." />
        <LoadingSpinner size="lg" label="Preparando backoffice..." />
      </Stack>
    </Card>
  ),
};

export const Tones: Story = {
  render: () => (
    <Card style={{ width: 340 }}>
      <Stack gap={4}>
        <LoadingSpinner tone="primary" label="Cargando..." />
        <LoadingSpinner tone="success" label="Guardando..." />
        <LoadingSpinner tone="info" label="Sincronizando..." />
        <LoadingSpinner tone="warning" label="Procesando..." />
        <LoadingSpinner tone="danger" label="Reintentando..." />
        <LoadingSpinner tone="muted" label="Esperando..." />
      </Stack>
    </Card>
  ),
};

export const InContext: Story = {
  render: () => (
    <Card style={{ width: 360 }}>
      <Stack gap={4}>
        <Text tone="muted">
          Estado de carga dentro de una card del backoffice.
        </Text>
        <LoadingSpinner label="Cargando pagos del equipo..." />
      </Stack>
    </Card>
  ),
};
