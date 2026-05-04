import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../Badge";
import { Button } from "../Button";
import { MenuButton } from "../IconButton";
import { TopBar } from "./TopBar";

const meta = {
  title: "Navigation/TopBar",
  component: TopBar,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    title: "Barbadillo Platform",
    subtitle: "Backoffice del torneo",
  },
} satisfies Meta<typeof TopBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithMenu: Story = {
  render: () => (
    <TopBar
      left={<MenuButton variant="soft" />}
      title="Equipos"
      subtitle="Gestión de equipos inscritos"
    />
  ),
};

export const WithActions: Story = {
  render: () => (
    <TopBar
      left={<MenuButton variant="soft" />}
      title="Pagos"
      subtitle="Resumen económico por equipo"
      actions={
        <>
          <Badge>ADMIN</Badge>
          <Button size="sm">Nuevo pago</Button>
        </>
      }
    />
  ),
};
