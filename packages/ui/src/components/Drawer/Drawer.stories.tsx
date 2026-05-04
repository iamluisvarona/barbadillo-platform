import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../Button";
import { Stack } from "../Stack";
import { Text } from "../Typography";
import { Drawer } from "./Drawer";

const meta = {
  title: "Feedback/Drawer",
  component: Drawer,
  parameters: {
    layout: "centered",
  },
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BottomDrawer: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Abrir Drawer</Button>

        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          title="Filtros"
        >
          <Stack gap={4}>
            <Text>Filtrar por categoría</Text>
            <Text>Filtrar por estado</Text>
            <Button onClick={() => setOpen(false)}>Aplicar</Button>
          </Stack>
        </Drawer>
      </>
    );
  },
};

export const RightDrawer: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Editar equipo</Button>

        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          position="right"
          title="Editar equipo"
        >
          <Stack gap={4}>
            <Text>Formulario aquí</Text>
            <Button onClick={() => setOpen(false)}>Guardar</Button>
          </Stack>
        </Drawer>
      </>
    );
  },
};