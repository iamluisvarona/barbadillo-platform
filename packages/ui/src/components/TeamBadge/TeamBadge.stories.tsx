import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { Text } from "../Typography";
import { TeamBadge } from "./TeamBadge";
import { TeamLogo } from "./TeamLogo";

const meta = {
  title: "Domain/Teams/TeamBadge",
  component: TeamBadge,
  parameters: {
    layout: "centered",
  },
  args: {
    name: "CB Zaragoza",
    category: "INF-M",
  },
} satisfies Meta<typeof TeamBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutLogo: Story = {
  render: () => (
    <Stack gap={4}>
      <TeamBadge name="CB Zaragoza" category="INF-M" />
      <TeamBadge name="EASO Basket" category="CAD-F" />
      <TeamBadge name="CB Las Rozas" category="INF-F" />
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack gap={4}>
      <TeamBadge size="sm" name="CB Zaragoza" category="INF-M" />
      <TeamBadge size="md" name="CB Zaragoza" category="INF-M" />
    </Stack>
  ),
};

export const LogoOnly: Story = {
  render: () => (
    <Stack gap={4}>
      <TeamLogo name="CB Zaragoza" size="sm" />
      <TeamLogo name="CB Zaragoza" size="md" />
      <TeamLogo name="CB Zaragoza" size="lg" />
    </Stack>
  ),
};

export const InCard: Story = {
  render: () => (
    <Card style={{ width: 360 }}>
      <Stack gap={3}>
        <Text tone="muted">Equipo inscrito</Text>
        <TeamBadge name="CB Zaragoza" category="INF-M" />
      </Stack>
    </Card>
  ),
};
