import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../Badge";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { Text } from "../Typography";
import { DataTable, type DataTableColumn } from "./DataTable";
import { Button } from "../Button";

interface TeamRow {
  id: string;
  name: string;
  category: string;
  players: number;
  paymentStatus: "Pagado" | "Parcial" | "Pendiente";
}

const teams: TeamRow[] = [
  {
    id: "1",
    name: "CB Zaragoza",
    category: "INF-M",
    players: 12,
    paymentStatus: "Parcial",
  },
  {
    id: "2",
    name: "EASO Basket",
    category: "CAD-F",
    players: 11,
    paymentStatus: "Pagado",
  },
  {
    id: "3",
    name: "CB Las Rozas",
    category: "INF-F",
    players: 10,
    paymentStatus: "Pendiente",
  },
];

const columns: DataTableColumn<TeamRow>[] = [
  {
    key: "name",
    header: "Equipo",
    render: (team) => team.name,
  },
  {
    key: "category",
    header: "Categoría",
    render: (team) => team.category,
  },
  {
    key: "players",
    header: "Jugadores",
    align: "right",
    render: (team) => team.players,
  },
  {
    key: "paymentStatus",
    header: "Pago",
    render: (team) => <Badge>{team.paymentStatus}</Badge>,
  },
];

const meta = {
  title: "Data Display/DataTable",
  component: DataTable<TeamRow>,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DataTable<TeamRow>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns,
    data: teams,
    getRowKey: (team) => team.id,
  },
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
    getRowKey: (team) => team.id,
    emptyMessage: "No hay equipos que coincidan con la búsqueda.",
  },
};

export const InCard: Story = {
  render: () => (
    <Card style={{ width: 760 }}>
      <Stack gap={4}>
        <Text tone="muted">
          Tabla simple para backoffice, pagos, equipos o transporte.
        </Text>

        <DataTable
          columns={columns}
          data={teams}
          getRowKey={(team) => team.id}
        />
      </Stack>
    </Card>
  ),
  args: {
    columns,
    data: teams,
    getRowKey: (team) => team.id,
  },
};

export const WithActions: Story = {
  args: {
    columns,
    data: teams,
    getRowKey: (team) => team.id,
    actions: () => null,
  },
  render: () => (
    <div style={{ width: 760 }}>
      <DataTable
        columns={columns}
        data={teams}
        getRowKey={(team) => team.id}
        actions={() => (
          <Button size="sm" variant="secondary">
            Ver
          </Button>
        )}
      />
    </div>
  ),
};
