import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../Badge";
import { Button } from "../Button";
import { Card } from "../Card";
import { Page, PageHeader } from "../Page";
import { Stack } from "../Stack";
import { Text } from "../Typography";
import { Section, SectionHeader } from "./Section";

const meta = {
  title: "Layout/Section",
  component: Section,
} satisfies Meta<typeof Section>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
  render: () => (
    <Page>
      <PageHeader
        eyebrow="Backoffice"
        title="Dashboard"
        description="Vista rápida del estado general del torneo."
      />

      <Stack gap={6}>
        <Section>
          <SectionHeader
            title="Equipos"
            description="Resumen de equipos inscritos y pendientes de validar."
            actions={<Button size="sm">Ver equipos</Button>}
          />

          <Stack gap={3}>
            <Card>
              <Stack gap={2}>
                <Badge variant="success">Validado</Badge>
                <Text>CB Zaragoza</Text>
              </Stack>
            </Card>

            <Card>
              <Stack gap={2}>
                <Badge variant="warning">Pendiente</Badge>
                <Text>Ciudad de Móstoles</Text>
              </Stack>
            </Card>
          </Stack>
        </Section>

        <Section>
          <SectionHeader
            title="Transporte"
            description="Viajes pendientes para las próximas horas."
            actions={
              <Button size="sm" variant="secondary">
                Crear viaje
              </Button>
            }
          />

          <Card>
            <Stack gap={2}>
              <Badge variant="info">Asignado</Badge>
              <Text>Hotel Tres Cantos → Polideportivo La Luz</Text>
            </Stack>
          </Card>
        </Section>
      </Stack>
    </Page>
  ),
};
