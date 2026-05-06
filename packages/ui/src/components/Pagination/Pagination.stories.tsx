import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { Text } from "../Typography";
import { Pagination } from "./Pagination";

const meta = {
  title: "Navigation/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  args: {
    page: 1,
    pageCount: 6,
    onPageChange: () => {},
  },
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1);

    return (
      <div style={{ width: 420 }}>
        <Pagination page={page} pageCount={6} onPageChange={setPage} />
      </div>
    );
  },
};

export const InCard: Story = {
  render: () => {
    const [page, setPage] = useState(2);

    return (
      <Card style={{ width: 460 }}>
        <Stack gap={4}>
          <Text tone="muted">Paginación para tablas del backoffice.</Text>
          <Pagination page={page} pageCount={8} onPageChange={setPage} />
        </Stack>
      </Card>
    );
  },
};

export const Disabled: Story = {
  args: {
    page: 3,
    pageCount: 8,
    disabled: true,
    onPageChange: () => {},
  },
};