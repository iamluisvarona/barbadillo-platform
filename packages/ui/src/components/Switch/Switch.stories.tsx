import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { Switch } from "./Switch";

const meta = {
  title: "Forms/Switch",
  component: Switch,
  args: {
    label: "Necesita hotel",
    helperText: "Activa esta opción si el equipo requiere alojamiento.",
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const RegistrationOptions: Story = {
  args: {},
  render: () => (
    <Card style={{ width: 390 }}>
      <Stack gap={4}>
        <Switch
          label="Necesita hotel"
          helperText="El equipo requiere alojamiento durante el torneo."
        />
        <Switch
          label="Necesita transporte"
          helperText="El equipo necesita desplazamientos organizados."
        />
        <Switch
          label="Inscripción validada"
          helperText="La organización ya ha revisado los datos."
          defaultChecked
        />
      </Stack>
    </Card>
  ),
};

export const Checked: Story = {
  args: {
    label: "Vehículo disponible",
    helperText: "La furgoneta puede asignarse a desplazamientos.",
    defaultChecked: true,
  },
};

export const WithError: Story = {
  args: {
    label: "Confirmar inscripción",
    error: "Debes confirmar esta opción antes de continuar.",
  },
};

export const Disabled: Story = {
  args: {
    label: "Pago cerrado",
    helperText: "Este estado ya no puede modificarse.",
    checked: true,
    disabled: true,
  },
};
