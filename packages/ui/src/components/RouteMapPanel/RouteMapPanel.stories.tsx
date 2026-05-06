import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";
import { RouteMapPanel } from "./RouteMapPanel";

const meta: Meta<typeof RouteMapPanel> = {
  title: "Transport/RouteMapPanel",
  component: RouteMapPanel,
  args: {
    height: 320,
    isLoading: false,
    error: undefined,
    children: (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "grid",
          placeItems: "center",
          color: "var(--bb-color-text-muted)",
          fontWeight: 800,
        }}
      >
        Aquí iría GoogleMap / Mapbox desde el microfrontend
      </div>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof RouteMapPanel>;

export const Default: Story = {};

export const WithActions: Story = {
  args: {
    actions: (
      <>
        <Button size="sm">Centrar</Button>
        <Button size="sm" variant="secondary">
          Ruta
        </Button>
      </>
    ),
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const Error: Story = {
  args: {
    error: "Revisa la conexión o los permisos de ubicación.",
  },
};
