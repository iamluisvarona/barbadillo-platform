import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Stack } from "../Stack";
import { Toast } from "./Toast";

const meta = {
  title: "Feedback/Toast",
  component: Toast,
  args: {
    title: "Equipo guardado",
    description: "Los datos del equipo se han actualizado correctamente.",
    variant: "success",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "danger"],
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
  render: () => (
    <Stack gap={3}>
      <Toast
        variant="info"
        title="Información"
        description="El equipo todavía no tiene habitaciones asignadas."
      />

      <Toast
        variant="success"
        title="Guardado"
        description="La inscripción se ha actualizado correctamente."
      />

      <Toast
        variant="warning"
        title="Pendiente de revisión"
        description="Hay datos económicos que requieren validación."
      />

      <Toast
        variant="danger"
        title="Error"
        description="No se ha podido guardar la información."
      />
    </Stack>
  ),
};

export const Dismissible: Story = {
  render: () => {
    const [visible, setVisible] = useState(false);

    return (
      <Stack gap={4}>
        <Button onClick={() => setVisible(true)}>Mostrar toast</Button>

        {visible ? (
          <Toast
            variant="success"
            title="Equipo guardado"
            description="Los datos se han actualizado correctamente."
            onClose={() => setVisible(false)}
          />
        ) : null}
      </Stack>
    );
  },
};
