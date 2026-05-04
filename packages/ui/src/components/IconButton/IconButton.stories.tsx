import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";
import { MenuButton } from "./MenuButton";

const meta = {
  title: "Buttons/IconButton",
  component: IconButton,
  args: {
    children: "★",
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12 }}>
      <IconButton variant="ghost">★</IconButton>
      <IconButton variant="soft">★</IconButton>
      <IconButton variant="primary">★</IconButton>
    </div>
  ),
};

export const Menu: Story = {
  render: () => <MenuButton />,
};
