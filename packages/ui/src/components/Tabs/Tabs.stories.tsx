import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { Text } from "../Typography";
import { Tabs, TabsList, TabsPanel, TabsTrigger } from "./Tabs";

const meta = {
  title: "Navigation/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  args: {
    defaultValue: "details",
    children: null,
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 380 }}>
      <Tabs defaultValue="details">
        <TabsList>
          <TabsTrigger value="details">Datos</TabsTrigger>
          <TabsTrigger value="players">Jugadores</TabsTrigger>
          <TabsTrigger value="payments">Pagos</TabsTrigger>
        </TabsList>

        <TabsPanel value="details">
          <Card>
            <Text>Información general del equipo.</Text>
          </Card>
        </TabsPanel>

        <TabsPanel value="players">
          <Card>
            <Text>Listado de jugadores y entrenadores.</Text>
          </Card>
        </TabsPanel>

        <TabsPanel value="payments">
          <Card>
            <Text>Resumen económico del equipo.</Text>
          </Card>
        </TabsPanel>
      </Tabs>
    </div>
  ),
};

export const ScrollableMobile: Story = {
  render: () => (
    <div style={{ width: 340 }}>
      <Tabs defaultValue="registration">
        <TabsList>
          <TabsTrigger value="registration">Inscripción</TabsTrigger>
          <TabsTrigger value="payments">Pagos</TabsTrigger>
          <TabsTrigger value="hotel">Hotel</TabsTrigger>
          <TabsTrigger value="transport">Transporte</TabsTrigger>
          <TabsTrigger value="accreditations">Acreditaciones</TabsTrigger>
        </TabsList>

        <TabsPanel value="registration">
          <Card>
            <Text tone="muted">
              Tabs preparadas para móvil con scroll horizontal.
            </Text>
          </Card>
        </TabsPanel>

        <TabsPanel value="payments">
          <Card>
            <Text>Estado de pagos y conceptos.</Text>
          </Card>
        </TabsPanel>

        <TabsPanel value="hotel">
          <Card>
            <Text>Habitaciones asignadas.</Text>
          </Card>
        </TabsPanel>

        <TabsPanel value="transport">
          <Card>
            <Text>Viajes y furgonetas asignadas.</Text>
          </Card>
        </TabsPanel>

        <TabsPanel value="accreditations">
          <Card>
            <Text>Preview y generación de acreditaciones.</Text>
          </Card>
        </TabsPanel>
      </Tabs>
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <Card style={{ width: 420 }}>
      <Stack gap={4}>
        <Text tone="muted">
          Navegación interna para pantallas de detalle del backoffice.
        </Text>

        <Tabs defaultValue="summary">
          <TabsList>
            <TabsTrigger value="summary">Resumen</TabsTrigger>
            <TabsTrigger value="activity">Actividad</TabsTrigger>
          </TabsList>

          <TabsPanel value="summary">
            <Text>Resumen principal.</Text>
          </TabsPanel>

          <TabsPanel value="activity">
            <Text>Últimos cambios registrados.</Text>
          </TabsPanel>
        </Tabs>
      </Stack>
    </Card>
  ),
};
