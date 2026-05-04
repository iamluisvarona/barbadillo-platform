import type { Meta, StoryObj } from "@storybook/react";
import { Page, PageHeader } from "../Page";
import { EmptyState } from "./EmptyState";

const meta = {
  title: "Feedback/EmptyState",
  component: EmptyState,
  args: {
    title: "No hay equipos inscritos",
    description:
      "Cuando se registren equipos en el torneo, aparecerán aquí para poder gestionarlos.",
    icon: "🏀",
    actionLabel: "Crear equipo",
  },
} satisfies Meta<typeof EmptyState>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const InsidePage: Story = {
  render: () => (
    <Page maxWidth="md">
      <PageHeader
        eyebrow="Backoffice"
        title="Equipos"
        description="Gestiona equipos inscritos, jugadores y entrenadores."
      />

      <EmptyState
        icon="🏀"
        title="No hay equipos todavía"
        description="Empieza creando el primer equipo inscrito para el torneo."
        actionLabel="Nuevo equipo"
        onAction={() => undefined}
      />
    </Page>
  ),
};

export const Transport: Story = {
  render: () => (
    <Page maxWidth="md">
      <PageHeader
        eyebrow="Transporte"
        title="Viajes"
        description="Organiza desplazamientos, furgonetas y conductores."
      />

      <EmptyState
        icon="🚐"
        title="No hay viajes pendientes"
        description="Cuando crees desplazamientos para equipos, aparecerán aquí."
        actionLabel="Crear viaje"
        onAction={() => undefined}
      />
    </Page>
  ),
};
