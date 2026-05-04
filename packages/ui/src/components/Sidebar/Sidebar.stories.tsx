import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../Badge";
import { Stack } from "../Stack";
import { Heading, Text } from "../Typography";
import { Sidebar, SidebarItem } from "./Sidebar";

const meta = {
  title: "Navigation/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    children: null,
  },
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ height: "100vh" }}>
      <Sidebar
        brand={
          <Stack gap={1}>
            <Heading level={3}>Barbadillo Platform</Heading>
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
      </Sidebar>
    </div>
  ),
};
