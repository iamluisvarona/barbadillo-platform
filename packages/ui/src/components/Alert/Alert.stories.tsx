import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../Card";
import { Page, PageHeader } from "../Page";
import { Stack } from "../Stack";
import { Alert } from "./Alert";

const meta = {
  title: "Feedback/Alert",
  component: Alert,
  args: {
    title: "Información importante",
    children:
      "Este mensaje ayuda a la organización a entender qué está pasando.",
    variant: "info",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "danger"],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
  render: () => (
    <Stack gap={3} style={{ width: 480 }}>
      <Alert variant="info" title="Información">
        Este equipo todavía no tiene habitaciones asignadas.
      </Alert>

      <Alert variant="success" title="Guardado correctamente">
        Los cambios se han aplicado en la inscripción.
      </Alert>

      <Alert variant="warning" title="Revisión pendiente">
        Hay pagos parciales que necesitan validación manual.
      </Alert>

      <Alert variant="danger" title="Acción destructiva">
        Resetear un concurso borrará todos los intentos registrados.
      </Alert>
    </Stack>
  ),
};

export const InsidePage: Story = {
  render: () => (
    <Page maxWidth="md">
      <PageHeader
        eyebrow="Concursos"
        title="Resetear concurso"
        description="Panel de administración de intentos y clasificaciones."
      />

      <Card>
        <Alert variant="danger" title="Cuidado">
          Esta acción eliminará todos los intentos y no se podrá deshacer.
        </Alert>
      </Card>
    </Page>
  ),
};
