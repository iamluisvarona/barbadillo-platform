import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../Badge";
import { Card } from "../Card";
import { Page, PageHeader } from "../Page";
import { Stack } from "../Stack";
import { Text } from "../Typography";
import { CardGrid } from "./CardGrid";

const meta = {
  title: "Layout/CardGrid",
  component: CardGrid,
  args: {
    columns: 3,
    gap: 4,
  },
  argTypes: {
    columns: {
      control: "select",
      options: [1, 2, 3, 4],
    },
    gap: {
      control: "select",
      options: [2, 3, 4, 5, 6],
    },
  },
} satisfies Meta<typeof CardGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DashboardCards: Story = {
  render: (args) => (
    <Page>
      <PageHeader
        eyebrow="Backoffice"
        title="Dashboard"
        description="Resumen rápido del estado del torneo."
      />

      <CardGrid {...args}>
        <Card>
          <Stack gap={3}>
            <Badge variant="primary">Equipos</Badge>
            <Text size="lg">32 inscritos</Text>
            <Text size="sm" tone="muted">
              4 pendientes de validar
            </Text>
          </Stack>
        </Card>

        <Card>
          <Stack gap={3}>
            <Badge variant="success">Pagos</Badge>
            <Text size="lg">24 pagados</Text>
            <Text size="sm" tone="muted">
              8 equipos con pendiente
            </Text>
          </Stack>
        </Card>

        <Card>
          <Stack gap={3}>
            <Badge variant="info">Hoteles</Badge>
            <Text size="lg">118 alojados</Text>
            <Text size="sm" tone="muted">
              12 habitaciones libres
            </Text>
          </Stack>
        </Card>

        <Card>
          <Stack gap={3}>
            <Badge variant="warning">Transporte</Badge>
            <Text size="lg">7 viajes pendientes</Text>
            <Text size="sm" tone="muted">
              Próximas 3 horas
            </Text>
          </Stack>
        </Card>
      </CardGrid>
    </Page>
  ),
};
