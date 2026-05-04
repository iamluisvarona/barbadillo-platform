import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { TextInput } from "./TextInput";

const meta = {
  title: "Forms/TextInput",
  component: TextInput,
  args: {
    label: "Nombre del equipo",
    placeholder: "Ej. CB Zaragoza",
    helperText: "Nombre visible en el torneo",
  },
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const FormExample: Story = {
  args: {},
  render: () => (
    <Card style={{ width: 380 }}>
      <Stack gap={4}>
        <TextInput label="Equipo" placeholder="CB Zaragoza" />
        <TextInput label="Responsable" placeholder="Luis Varona" />
        <TextInput label="Teléfono" placeholder="+34 600 000 000" />
      </Stack>
    </Card>
  ),
};

export const WithError: Story = {
  args: {
    label: "Dorsal",
    placeholder: "23",
    error: "Este dorsal ya existe en el equipo",
  },
};

export const Disabled: Story = {
  args: {
    label: "Categoría",
    value: "Infantil Masculino",
    disabled: true,
  },
};
