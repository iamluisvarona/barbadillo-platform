import type { Meta, StoryObj } from "@storybook/react";
import { AccreditationCard } from "./AccreditationCard";

const meta = {
  title: "Domain/Accreditations/AccreditationCard",
  component: AccreditationCard,
  parameters: {
    layout: "centered",
  },
  args: {
    name: "Luis Varona",
    role: "Entrenador",
    teamName: "CB Zaragoza",
    category: "INF-M",
    number: 7,
  },
} satisfies Meta<typeof AccreditationCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Player: Story = {
  args: {
    name: "Víctor Aranda",
    role: "Jugador",
    teamName: "CB Zaragoza",
    category: "INF-M",
    number: 23,
  },
};

export const Coach: Story = {
  args: {
    name: "Luis Varona",
    role: "Entrenador",
    teamName: "CB Zaragoza",
    category: "INF-M",
  },
};

export const Staff: Story = {
  args: {
    name: "Organización",
    role: "Staff",
    teamName: undefined,
    category: undefined,
    number: undefined,
  },
};
