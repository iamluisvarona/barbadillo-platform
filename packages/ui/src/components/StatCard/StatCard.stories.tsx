import type { Meta, StoryObj } from "@storybook/react";
import { CardGrid } from "../CardGrid";
import { Page, PageHeader } from "../Page";
import { StatCard } from "./StatCard";

const meta = {
  title: "Components/StatCard",
  component: StatCard,
  args: {
    label: "Equipos inscritos",
    value: "32",
    description: "4 pendientes de validar",
    badge: "Equipos",
    badgeVariant: "primary",
  },
  argTypes: {
    badgeVariant: {
      control: "select",
      options: ["default", "primary", "success", "warning", "danger", "info"],
    },
    interactive: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof StatCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Dashboard: Story = {
  render: () => (
    <Page>
      <PageHeader
        eyebrow="Backoffice"
        title="Dashboard"
        description="Resumen rápido del estado general del torneo."
      />

      <CardGrid columns={3}>
        <StatCard
          label="Equipos inscritos"
          value="32"
          description="4 pendientes de validar"
          badge="Equipos"
          badgeVariant="primary"
          interactive
        />

        <StatCard
          label="Pagos completados"
          value="24"
          description="8 equipos con importes pendientes"
          badge="Pagos"
          badgeVariant="success"
          trend="+6 esta semana"
          interactive
        />

        <StatCard
          label="Personas alojadas"
          value="118"
          description="12 habitaciones libres"
          badge="Hoteles"
          badgeVariant="info"
          interactive
        />

        <StatCard
          label="Viajes pendientes"
          value="7"
          description="Próximas 3 horas"
          badge="Transporte"
          badgeVariant="warning"
          interactive
        />

        <StatCard
          label="Partidos en juego"
          value="5"
          description="Marcadores activos"
          badge="Directo"
          badgeVariant="danger"
          interactive
        />

        <StatCard
          label="Concursos activos"
          value="3"
          description="Triples, mates y SpeedShot"
          badge="Concursos"
          badgeVariant="primary"
          interactive
        />
      </CardGrid>
    </Page>
  ),
};
