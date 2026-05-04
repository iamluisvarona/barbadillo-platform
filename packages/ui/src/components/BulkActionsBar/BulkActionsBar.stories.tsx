import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { BulkActionsBar } from "./BulkActionsBar";

const meta = {
  title: "Data Display/BulkActionsBar",
  component: BulkActionsBar,
  parameters: {
    layout: "centered",
  },
  args: {
    selectedCount: 3,
  },
} satisfies Meta<typeof BulkActionsBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 680 }}>
      <BulkActionsBar selectedCount={3} onClear={() => {}}>
        <Button size="sm" variant="secondary">
          Exportar
        </Button>
        <Button size="sm" variant="danger">
          Eliminar
        </Button>
      </BulkActionsBar>
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <Card style={{ width: 680 }}>
      <Stack gap={4}>
        <BulkActionsBar selectedCount={2} onClear={() => {}}>
          <Button size="sm">Generar acreditaciones</Button>
          <Button size="sm" variant="secondary">
            Cambiar categoría
          </Button>
        </BulkActionsBar>
      </Stack>
    </Card>
  ),
};
