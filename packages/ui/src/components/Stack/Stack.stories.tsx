import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./Stack";
import { Card } from "../Card";
import { Button } from "../Button";

const meta = {
  title: "Layout/Stack",
  component: Stack,
  args: {
    direction: "vertical",
    gap: 3,
  },
} satisfies Meta<typeof Stack>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: {},
  render: (args) => (
    <Stack {...args} style={{ width: 300 }}>
      <Card>Item 1</Card>
      <Card>Item 2</Card>
      <Card>Item 3</Card>
    </Stack>
  ),
};

export const Horizontal: Story = {
  args: {
    direction: "horizontal",
  },
  render: (args) => (
    <Stack {...args}>
      <Button>Uno</Button>
      <Button>Dos</Button>
      <Button>Tres</Button>
    </Stack>
  ),
};

export const Between: Story = {
  args: {
    direction: "horizontal",
    justify: "between",
    fullWidth: true,
  },
  render: (args) => (
    <Stack {...args} style={{ width: 400 }}>
      <span>Equipo</span>
      <Button size="sm">Ver</Button>
    </Stack>
  ),
};
