import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../Badge";
import { Button } from "../Button";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { Text } from "../Typography";
import { Page, PageHeader } from "./Page";

const meta = {
  title: "Layout/Page",
  component: Page,
  args: {
    maxWidth: "lg",
  },
  argTypes: {
    maxWidth: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "full"],
    },
  },
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <Page {...args}>
      <PageHeader
        eyebrow="Backoffice"
        title="Equipos"
        description="Gestiona equipos inscritos, jugadores, entrenadores y estado de inscripción."
        actions={
          <>
            <Button variant="secondary">Importar</Button>
            <Button>Nuevo equipo</Button>
          </>
        }
      />

      <Stack gap={4}>
        <Card>
          <Stack gap={3}>
            <Badge variant="primary">Infantil M</Badge>
            <Text>CB Zaragoza</Text>
          </Stack>
        </Card>

        <Card>
          <Stack gap={3}>
            <Badge variant="success">Validado</Badge>
            <Text>EASO Basket</Text>
          </Stack>
        </Card>
      </Stack>
    </Page>
  ),
};

export const MobileLike: Story = {
  args: {
    maxWidth: "sm",
  },
  render: (args) => (
    <Page {...args}>
      <PageHeader
        eyebrow="Transporte"
        title="Viajes pendientes"
        description="Revisa los desplazamientos asignados para hoy."
        actions={<Button fullWidth>Crear viaje</Button>}
      />

      <Card>
        <Stack gap={3}>
          <Badge variant="info">Asignado</Badge>
          <Text>Hotel Tres Cantos → Polideportivo La Luz</Text>
        </Stack>
      </Card>
    </Page>
  ),
};
