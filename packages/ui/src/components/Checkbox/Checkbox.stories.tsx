import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "Forms/Checkbox",
  component: Checkbox,
  args: {
    label: "Necesita hotel",
    helperText: "Marca esta opción si el equipo necesita alojamiento.",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const RegistrationOptions: Story = {
  args: {},
  render: () => (
    <Card style={{ width: 380 }}>
      <Stack gap={4}>
        <Checkbox
          label="Necesita hotel"
          helperText="El equipo requiere alojamiento durante el torneo."
        />
        <Checkbox
          label="Necesita transporte"
          helperText="El equipo necesita desplazamientos organizados."
        />
        <Checkbox
          label="Tiene alergias o intolerancias"
          helperText="Se solicitará detalle en observaciones."
        />
      </Stack>
    </Card>
  ),
};

export const Checked: Story = {
  args: {
    label: "Necesita transporte",
    helperText: "Opción seleccionada",
    defaultChecked: true,
  },
};

export const WithError: Story = {
  args: {
    label: "Acepto las condiciones",
    error: "Debes aceptar esta opción para continuar.",
  },
};

export const Disabled: Story = {
  args: {
    label: "Inscripción validada",
    helperText: "Esta opción ya no puede modificarse.",
    checked: true,
    disabled: true,
  },
};
