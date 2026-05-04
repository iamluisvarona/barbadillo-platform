import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../Badge";
import { Button } from "../Button";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { Text } from "../Typography";
import { ListItem, MobileList } from "./MobileList";

const meta = {
  title: "Data Display/MobileList",
  component: MobileList,
  parameters: {
    layout: "centered",
  },
  args: {
    children: null,
  },
} satisfies Meta<typeof MobileList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Teams: Story = {
  render: () => (
    <div style={{ width: 360 }}>
      <MobileList>
        <ListItem
          meta="INF-M"
          title="CB Zaragoza"
          description="12 jugadores · Responsable: Laura Martín"
          trailing={<Badge>Parcial</Badge>}
          footer={
            <>
              <Badge>Hotel</Badge>
              <Badge>Transporte</Badge>
            </>
          }
        />

        <ListItem
          meta="CAD-F"
          title="EASO Basket"
          description="11 jugadoras · Responsable: Ane García"
          trailing={<Badge>Pagado</Badge>}
          footer={<Badge>Sin hotel</Badge>}
        />

        <ListItem
          meta="INF-F"
          title="CB Las Rozas"
          description="10 jugadoras · Responsable: Marta Ruiz"
          trailing={<Badge>Pendiente</Badge>}
          interactive
        />
      </MobileList>
    </div>
  ),
};

export const TransportTrips: Story = {
  render: () => (
    <div style={{ width: 360 }}>
      <MobileList>
        <ListItem
          meta="Viernes · 18:00"
          title="Hotel → Polideportivo La Luz"
          description="CB Zaragoza · Furgoneta 1 · Luis"
          trailing={<Badge>Asignado</Badge>}
          footer={
            <>
              <Badge>15 personas</Badge>
              <Badge>Hotel</Badge>
            </>
          }
          interactive
        />

        <ListItem
          meta="Domingo · 14:30"
          title="La Luz → Estación"
          description="EASO Basket · Furgoneta 2 · Carlos"
          trailing={<Badge>Pendiente</Badge>}
          footer={<Badge>8 personas</Badge>}
          interactive
        />
      </MobileList>
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <Card style={{ width: 390 }}>
      <Stack gap={4}>
        <Text tone="muted">
          Lista móvil para usar como alternativa responsive a tablas complejas.
        </Text>

        <MobileList>
          <ListItem
            meta="Pago"
            title="CB Zaragoza"
            description="Total 1.750 € · Pagado 1.000 € · Pendiente 750 €"
            trailing={<Button size="sm">Ver</Button>}
          />
        </MobileList>
      </Stack>
    </Card>
  ),
};
