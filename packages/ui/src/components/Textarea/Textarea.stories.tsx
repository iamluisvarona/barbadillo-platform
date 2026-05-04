import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { Textarea } from "./Textarea";

const meta = {
  title: "Forms/Textarea",
  component: Textarea,
  args: {
    label: "Observaciones",
    placeholder: "Añade cualquier información relevante...",
    helperText: "Notas visibles para la organización.",
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const RegistrationNotes: Story = {
  args: {},
  render: () => (
    <Card style={{ width: 390 }}>
      <Stack gap={4}>
        <Textarea
          label="Observaciones del equipo"
          placeholder="Horarios, necesidades especiales, comentarios..."
        />
        <Textarea
          label="Alergias o intolerancias"
          placeholder="Indica alergias alimentarias o información médica relevante."
          rows={3}
        />
      </Stack>
    </Card>
  ),
};

export const WithError: Story = {
  args: {
    label: "Motivo de cancelación",
    placeholder: "Explica el motivo...",
    error: "Debes indicar un motivo.",
  },
};

export const Disabled: Story = {
  args: {
    label: "Notas internas",
    value: "Inscripción ya validada por la organización.",
    disabled: true,
  },
};
