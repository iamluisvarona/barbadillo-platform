import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { Select } from "./Select";

const categoryOptions = [
  { label: "Infantil Masculino", value: "infantil-m" },
  { label: "Infantil Femenino", value: "infantil-f" },
  { label: "Cadete Masculino", value: "cadete-m" },
  { label: "Cadete Femenino", value: "cadete-f" },
];

const meta = {
  title: "Forms/Select",
  component: Select,
  args: {
    label: "Categoría",
    placeholder: "Selecciona una categoría",
    options: categoryOptions,
    helperText: "Categoría en la que compite el equipo",
    defaultValue: "",
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const FormExample: Story = {
  args: {},
  render: () => (
    <Card style={{ width: 380 }}>
      <Stack gap={4}>
        <Select
          label="Categoría"
          placeholder="Selecciona categoría"
          options={categoryOptions}
          defaultValue=""
        />

        <Select
          label="Necesita hotel"
          placeholder="Selecciona una opción"
          options={[
            { label: "Sí", value: "yes" },
            { label: "No", value: "no" },
          ]}
          defaultValue=""
        />

        <Select
          label="Necesita transporte"
          placeholder="Selecciona una opción"
          options={[
            { label: "Sí", value: "yes" },
            { label: "No", value: "no" },
          ]}
          defaultValue=""
        />
      </Stack>
    </Card>
  ),
};

export const WithError: Story = {
  args: {
    label: "Categoría",
    placeholder: "Selecciona categoría",
    options: categoryOptions,
    defaultValue: "",
    error: "Debes seleccionar una categoría",
  },
};
