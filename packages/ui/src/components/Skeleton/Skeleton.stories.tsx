import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { Skeleton } from "./Skeleton";

const meta = {
  title: "Feedback/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  args: {
    variant: "text",
    animated: true,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["text", "title", "circle", "rect", "card"],
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Skeleton {...args} style={{ width: 240 }} />,
};

export const Variants: Story = {
  render: () => (
    <Card style={{ width: 360 }}>
      <Stack gap={4}>
        <Skeleton variant="title" width="70%" />
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="85%" />
        <Skeleton variant="rect" />
        <Skeleton variant="circle" />
      </Stack>
    </Card>
  ),
};

export const CardLoading: Story = {
  render: () => (
    <Card style={{ width: 360 }}>
      <Stack gap={4}>
        <Skeleton variant="title" width="55%" />
        <Skeleton variant="text" width="90%" />
        <Skeleton variant="text" width="76%" />
        <Skeleton variant="card" />
      </Stack>
    </Card>
  ),
};

export const ListLoading: Story = {
  render: () => (
    <Card style={{ width: 380 }}>
      <Stack gap={4}>
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
            }}
          >
            <Skeleton variant="circle" />
            <Stack gap={2} style={{ flex: 1 }}>
              <Skeleton variant="title" width="60%" />
              <Skeleton variant="text" width="90%" />
            </Stack>
          </div>
        ))}
      </Stack>
    </Card>
  ),
};
