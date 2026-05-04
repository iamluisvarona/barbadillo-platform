import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Stack } from "../Stack";
import { Text } from "../Typography";
import { PaymentSummaryCard } from "./PaymentSummaryCard";

const meta = {
  title: "Domain/Payments/PaymentSummaryCard",
  component: PaymentSummaryCard,
  parameters: {
    layout: "centered",
  },
  args: {
    title: "CB Zaragoza",
    total: 1750,
    paid: 1000,
    pending: 750,
    status: "partial",
  },
} satisfies Meta<typeof PaymentSummaryCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Paid: Story = {
  args: {
    title: "EASO Basket",
    total: 1500,
    paid: 1500,
    pending: 0,
    status: "paid",
  },
};

export const Pending: Story = {
  args: {
    title: "CB Las Rozas",
    total: 900,
    paid: 0,
    pending: 900,
    status: "pending",
  },
};

export const WithFooter: Story = {
  render: () => (
    <div style={{ width: 420 }}>
      <PaymentSummaryCard
        title="CB Zaragoza"
        total={1750}
        paid={1000}
        pending={750}
        status="partial"
        footer={
          <Stack gap={3}>
            <Text tone="muted">
              Inscripción + hotel + transporte incluidos.
            </Text>
            <Button size="sm">Registrar pago</Button>
          </Stack>
        }
      />
    </div>
  ),
};
