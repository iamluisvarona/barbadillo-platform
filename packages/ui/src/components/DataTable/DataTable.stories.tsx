import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Badge } from "../Badge";
import { BulkActionsBar } from "../BulkActionsBar";
import { Button } from "../Button";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { Text } from "../Typography";
import { DataTable, type DataTableColumn } from "./DataTable";
import { Pagination } from "../Pagination";

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
    sortable: true,
    sortFn: (a, b) => a.name.localeCompare(b.name),
  },
  {
    key: "category",
    header: "Categoría",
    render: (team) => team.category,
    sortable: true,
    sortFn: (a, b) => a.category.localeCompare(b.category),
  },
  {
    key: "players",
    header: "Jugadores",
    align: "right",
    render: (team) => team.players,
    sortable: true,
    sortFn: (a, b) => a.players - b.players,
  },
  {
    key: "paymentStatus",
    header: "Pago",
    render: (team) => <Badge>{team.paymentStatus}</Badge>,
    sortable: true,
    sortFn: (a, b) => a.paymentStatus.localeCompare(b.paymentStatus),
  },
];

const meta = {
  title: "Data Display/DataTable",
  component: DataTable<TeamRow>,
  parameters: {
    layout: "centered",
  },
  args: {
    columns,
    data: teams,
    getRowKey: (team) => team.id,
  },
} satisfies Meta<typeof DataTable<TeamRow>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sortable: Story = {
  args: {
    columns,
    data: teams,
    getRowKey: (team) => team.id,
  },
};

export const Loading: Story = {
  args: {
    columns,
    data: teams,
    getRowKey: (team) => team.id,
    loading: true,
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

export const WithPagination: Story = {
  args: {
    columns,
    data: teams,
    getRowKey: (team) => team.id,
  },
  render: () => {
    const [page, setPage] = useState(1);

    const pageSize = 2;
    const pageCount = Math.ceil(teams.length / pageSize);

    const paginatedTeams = teams.slice((page - 1) * pageSize, page * pageSize);

    return (
      <div style={{ width: 820 }}>
        <Stack gap={4}>
          <DataTable
            columns={columns}
            data={paginatedTeams}
            getRowKey={(team) => team.id}
            selectable
            actions={() => (
              <Button size="sm" variant="secondary">
                Ver
              </Button>
            )}
          />

          <Pagination
            page={page}
            pageCount={pageCount}
            onPageChange={setPage}
          />
        </Stack>
      </div>
    );
  },
};

export const Selectable: Story = {
  args: {
    columns,
    data: teams,
    getRowKey: (team) => team.id,
    selectable: true,
  },
};

export const SelectableWithBulkActions: Story = {
  args: {
    columns,
    data: teams,
    getRowKey: (team) => team.id,
    selectable: true,
  },
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState<(string | number)[]>([]);

    return (
      <div style={{ width: 820 }}>
        <Stack gap={4}>
          <BulkActionsBar
            selectedCount={selectedKeys.length}
            onClear={() => setSelectedKeys([])}
          >
            <Button size="sm" variant="secondary">
              Exportar
            </Button>
            <Button size="sm">Generar acreditaciones</Button>
          </BulkActionsBar>

          <DataTable
            columns={columns}
            data={teams}
            getRowKey={(team) => team.id}
            selectable
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
            actions={() => (
              <Button size="sm" variant="secondary">
                Ver
              </Button>
            )}
          />
        </Stack>
      </div>
    );
  },
};

export const InCard: Story = {
  args: {
    columns,
    data: teams,
    getRowKey: (team) => team.id,
  },
  render: () => (
    <Card style={{ width: 820 }}>
      <Stack gap={4}>
        <Text tone="muted">
          DataTable v3 con sorting, selección, acciones, loading y empty state.
        </Text>

        <DataTable
          columns={columns}
          data={teams}
          getRowKey={(team) => team.id}
          selectable
          actions={() => (
            <Button size="sm" variant="secondary">
              Ver
            </Button>
          )}
        />
      </Stack>
    </Card>
  ),
};
