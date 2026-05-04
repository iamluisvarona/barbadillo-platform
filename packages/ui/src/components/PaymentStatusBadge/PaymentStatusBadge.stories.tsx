import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { Text } from "../Typography";
import { PaymentStatusBadge } from "./PaymentStatusBadge";

const meta = {
  title: "Domain/Payments/PaymentStatusBadge",
  component: PaymentStatusBadge,
  parameters: {
    layout: "centered",
  },
  args: {
    status: "partial",
  },
  argTypes: {
    status: {
      control: "select",
      options: ["paid", "partial", "pending", "overdue", "cancelled"],
    },
  },
} satisfies Meta<typeof PaymentStatusBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllStatuses: Story = {
  render: () => (
    <Stack gap={3}>
      <PaymentStatusBadge status="paid" />
      <PaymentStatusBadge status="partial" />
      <PaymentStatusBadge status="pending" />
      <PaymentStatusBadge status="overdue" />
      <PaymentStatusBadge status="cancelled" />
    </Stack>
  ),
};

export const InPaymentContext: Story = {
  render: () => (
    <Card style={{ width: 340 }}>
      <Stack gap={3}>
        <Text tone="muted">Estado económico del equipo</Text>
        <PaymentStatusBadge status="partial" />
      </Stack>
    </Card>
  ),
};
