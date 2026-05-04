import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Stack } from "../Stack";
import { ConfirmDialog } from "./ConfirmDialog";

const meta = {
  title: "Feedback/ConfirmDialog",
  component: ConfirmDialog,
  args: {
    open: true,
    title: "Resetear concurso",
    description:
      "Se eliminarán todos los intentos y clasificaciones registrados.",
    confirmLabel: "Resetear",
    cancelLabel: "Cancelar",
    variant: "danger",
    onConfirm: () => undefined,
    onCancel: () => undefined,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "danger"],
    },
  },
} satisfies Meta<typeof ConfirmDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Interactive: Story = {
  args: {},
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="danger" onClick={() => setOpen(true)}>
          Resetear concurso
        </Button>

        <ConfirmDialog
          open={open}
          title="Resetear concurso"
          description="Se eliminarán todos los intentos y clasificaciones registrados. Esta acción no se puede deshacer."
          confirmLabel="Sí, resetear"
          cancelLabel="Cancelar"
          variant="danger"
          onCancel={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
        />
      </>
    );
  },
};

export const Variants: Story = {
  args: {},
  render: () => (
    <Stack gap={3}>
      <ConfirmDialog
        open
        title="Confirmar inscripción"
        description="El equipo pasará a estar validado por la organización."
        confirmLabel="Validar"
        variant="success"
        onCancel={() => undefined}
        onConfirm={() => undefined}
      />
    </Stack>
  ),
};
