import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "../Alert";
import { Button } from "../Button";
import { Stack } from "../Stack";
import { Text } from "../Typography";
import { Modal } from "./Modal";

const meta = {
  title: "Feedback/Modal",
  component: Modal,
  args: {
    open: true,
    title: "Editar equipo",
    description: "Modifica la información básica del equipo.",
    size: "md",
    onClose: () => undefined,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {},
  render: (args) => (
    <Modal
      {...args}
      footer={
        <>
          <Button variant="secondary">Cancelar</Button>
          <Button>Guardar</Button>
        </>
      }
    >
      <Text tone="muted">
        Aquí irá el formulario o contenido que necesites mostrar dentro del
        modal.
      </Text>
    </Modal>
  ),
};

export const Interactive: Story = {
  args: {},
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Abrir modal</Button>

        <Modal
          open={open}
          title="Resetear concurso"
          description="Esta acción afecta a los datos registrados durante el torneo."
          size="sm"
          onClose={() => setOpen(false)}
          footer={
            <>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                Cancelar
              </Button>
              <Button variant="danger" onClick={() => setOpen(false)}>
                Resetear
              </Button>
            </>
          }
        >
          <Stack gap={4}>
            <Alert variant="danger" title="Cuidado">
              Se eliminarán todos los intentos y clasificaciones del concurso.
            </Alert>

            <Text tone="muted">Esta acción no se puede deshacer.</Text>
          </Stack>
        </Modal>
      </>
    );
  },
};
