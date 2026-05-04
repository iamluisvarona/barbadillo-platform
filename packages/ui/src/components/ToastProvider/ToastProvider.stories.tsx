import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { Text } from "../Typography";
import { ToastProvider, useToast } from "./ToastProvider";

function ToastDemo() {
  const toast = useToast();

  return (
    <Card style={{ width: 380 }}>
      <Stack gap={4}>
        <Text tone="muted">
          Lanza notificaciones desde cualquier componente usando useToast().
        </Text>

        <Button
          onClick={() =>
            toast.success({
              title: "Equipo guardado",
              description: "Los datos se han actualizado correctamente.",
            })
          }
        >
          Success
        </Button>

        <Button
          variant="warning"
          onClick={() =>
            toast.warning({
              title: "Pendiente de revisión",
              description: "Hay datos que necesitan validación manual.",
            })
          }
        >
          Warning
        </Button>

        <Button
          variant="danger"
          onClick={() =>
            toast.error({
              title: "Error al guardar",
              description: "No se ha podido actualizar la inscripción.",
            })
          }
        >
          Error
        </Button>
      </Stack>
    </Card>
  );
}

const meta = {
  title: "Feedback/ToastProvider",
  component: ToastProvider,
} satisfies Meta<typeof ToastProvider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
  render: () => (
    <ToastProvider position="bottom-center">
      <ToastDemo />
    </ToastProvider>
  ),
};
