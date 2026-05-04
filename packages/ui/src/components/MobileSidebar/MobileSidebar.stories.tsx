import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Badge } from "../Badge";
import { MenuButton } from "../IconButton";
import { Stack } from "../Stack";
import { Heading, Text } from "../Typography";
import { SidebarItem } from "../Sidebar";
import { MobileSidebar } from "./MobileSidebar";

const meta = {
  title: "Navigation/MobileSidebar",
  component: MobileSidebar,
  parameters: {
    layout: "centered",
  },
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
} satisfies Meta<typeof MobileSidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <MenuButton variant="soft" onClick={() => setOpen(true)} />

        <MobileSidebar
          open={open}
          onClose={() => setOpen(false)}
          brand={
            <Stack gap={1}>
              <Heading level={3}>Barbadillo</Heading>
              <Text tone="muted">Backoffice</Text>
            </Stack>
          }
          footer={<Badge>ADMIN</Badge>}
        >
          <SidebarItem active icon="🏠">
            Dashboard
          </SidebarItem>
          <SidebarItem icon="🏀">Equipos</SidebarItem>
          <SidebarItem icon="💸">Pagos</SidebarItem>
          <SidebarItem icon="🏨">Hoteles</SidebarItem>
          <SidebarItem icon="🚐">Transporte</SidebarItem>
          <SidebarItem icon="🎫">Acreditaciones</SidebarItem>
        </MobileSidebar>
      </>
    );
  },
};
