import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "./ProgressBar";

const meta: Meta<typeof ProgressBar> = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  args: {
    value: 65,
    variant: "default",
    size: "md",
    showValue: false,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "info", "warning", "danger"],
    },
    size: {
      control: "select",
      options: ["sm", "md"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: "Progreso de inscripción",
    showValue: true,
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    value: 42,
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    value: 100,
    label: "Pagado",
    showValue: true,
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    value: 58,
    label: "Pago parcial",
    showValue: true,
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    value: 18,
    label: "Pendiente",
    showValue: true,
  },
};

export const ClampedValue: Story = {
  args: {
    value: 140,
    label: "Valor limitado a 100",
    showValue: true,
  },
};
