import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { Text } from "../Typography";
import { MoneyAmount } from "./MoneyAmount";

const meta = {
  title: "Data Display/MoneyAmount",
  component: MoneyAmount,
  parameters: {
    layout: "centered",
  },
  args: {
    value: 1750,
    currency: "EUR",
    locale: "es-ES",
    tone: "default",
  },
} satisfies Meta<typeof MoneyAmount>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Tones: Story = {
  render: () => (
    <Stack gap={3}>
      <MoneyAmount value={1750} />
      <MoneyAmount value={1000} tone="success" />
      <MoneyAmount value={750} tone="danger" />
      <MoneyAmount value={300} tone="warning" />
      <MoneyAmount value={0} tone="muted" />
    </Stack>
  ),
};

export const InPaymentCard: Story = {
  render: () => (
    <Card style={{ width: 340 }}>
      <Stack gap={3}>
        <Text tone="muted">CB Zaragoza</Text>

        <Stack gap={2}>
          <Text tone="muted">Total</Text>
          <MoneyAmount value={1750} />
        </Stack>

        <Stack gap={2}>
          <Text tone="muted">Pagado</Text>
          <MoneyAmount value={1000} tone="success" />
        </Stack>

        <Stack gap={2}>
          <Text tone="muted">Pendiente</Text>
          <MoneyAmount value={750} tone="danger" />
        </Stack>
      </Stack>
    </Card>
  ),
};
