import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Badge } from "../Badge";
import { Button } from "../Button";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { Text } from "../Typography";
import { FilterBar } from "./FilterBar";

const meta = {
  title: "Data Display/FilterBar",
  component: FilterBar,
  parameters: {
    layout: "centered",
  },
  args: {
    searchValue: "",
    onSearchChange: () => {},
  },
} satisfies Meta<typeof FilterBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [search, setSearch] = useState("");

    return (
      <div style={{ width: 720 }}>
        <FilterBar
          searchValue={search}
          onSearchChange={setSearch}
          searchPlaceholder="Buscar equipos..."
        />
      </div>
    );
  },
};

export const WithFiltersAndActions: Story = {
  render: () => {
    const [search, setSearch] = useState("");

    return (
      <div style={{ width: 760 }}>
        <FilterBar
          searchValue={search}
          onSearchChange={setSearch}
          searchPlaceholder="Buscar equipo, responsable..."
          filters={
            <>
              <Badge>INF-M</Badge>
              <Badge>CAD-F</Badge>
              <Badge>Pagos pendientes</Badge>
            </>
          }
          actions={
            <>
              <Button size="sm" variant="secondary">
                Exportar
              </Button>
              <Button size="sm">Nuevo equipo</Button>
            </>
          }
        />
      </div>
    );
  },
};

export const InCard: Story = {
  render: () => {
    const [search, setSearch] = useState("");

    return (
      <Card style={{ width: 760 }}>
        <Stack gap={4}>
          <Text tone="muted">Filtros para listados de backoffice.</Text>

          <FilterBar
            searchValue={search}
            onSearchChange={setSearch}
            searchPlaceholder="Buscar equipos..."
            actions={<Button size="sm">Crear</Button>}
          />
        </Stack>
      </Card>
    );
  },
};
