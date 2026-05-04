import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { TextInput } from "../TextInput";
import { FormField } from "./FormField";

const meta = {
  title: "Forms/FormField",
  component: FormField,
  args: {
    label: "Responsable del equipo",
    helperText: "Persona de contacto durante el torneo",
    required: true,
  },
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <FormField {...args}>
      <input
        style={{
          minHeight: 48,
          borderRadius: "var(--bb-radius-md)",
          border: "1px solid var(--bb-color-border)",
          background: "var(--bb-color-surface-strong)",
          color: "var(--bb-color-text)",
          padding: "0 var(--bb-space-4)",
          font: "inherit",
        }}
        placeholder="Luis Varona"
      />
    </FormField>
  ),
};

export const InsideCard: Story = {
  args: {},
  render: () => (
    <Card style={{ width: 380 }}>
      <Stack gap={4}>
        <TextInput label="Nombre del equipo" placeholder="CB Zaragoza" />
        <TextInput label="Responsable" placeholder="Luis Varona" />
        <FormField
          label="Logo del equipo"
          helperText="PNG o JPG, recomendado formato cuadrado"
        >
          <button
            style={{
              minHeight: 48,
              borderRadius: "var(--bb-radius-md)",
              border: "1px dashed var(--bb-color-border)",
              background: "var(--bb-color-surface-strong)",
              color: "var(--bb-color-text)",
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            Subir archivo
          </button>
        </FormField>
      </Stack>
    </Card>
  ),
};

export const WithError: Story = {
  args: {
    label: "Dorsal",
    error: "Este campo es obligatorio",
    required: true,
  },
  render: (args) => (
    <FormField {...args}>
      <input
        style={{
          minHeight: 48,
          borderRadius: "var(--bb-radius-md)",
          border: "1px solid var(--bb-color-danger)",
          background: "var(--bb-color-surface-strong)",
          color: "var(--bb-color-text)",
          padding: "0 var(--bb-space-4)",
          font: "inherit",
        }}
        placeholder="23"
      />
    </FormField>
  ),
};
