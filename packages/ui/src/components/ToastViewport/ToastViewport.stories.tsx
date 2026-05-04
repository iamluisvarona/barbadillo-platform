import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Stack } from "../Stack";
import { Toast } from "../Toast";
import { ToastViewport } from "./ToastViewport";

const meta = {
  title: "Feedback/ToastViewport",
  component: ToastViewport,
  args: {
    position: "bottom-center",
  },
  argTypes: {
    position: {
      control: "select",
      options: ["top-right", "top-center", "bottom-right", "bottom-center"],
    },
  },
} satisfies Meta<typeof ToastViewport>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {},
  render: (args) => (
    <ToastViewport {...args}>
      <Toast
        variant="success"
        title="Equipo guardado"
        description="Los datos se han actualizado correctamente."
        duration={0}
      />
    </ToastViewport>
  ),
};

export const Interactive: Story = {
  args: {},
  render: (args) => {
    const [visible, setVisible] = useState(false);

    return (
      <>
        <Stack gap={3}>
          <Button onClick={() => setVisible(true)}>Mostrar toast</Button>
        </Stack>

        <ToastViewport {...args}>
          {visible ? (
            <Toast
              variant="success"
              title="Equipo guardado"
              description="Los datos se han actualizado correctamente."
              onClose={() => setVisible(false)}
            />
          ) : null}
        </ToastViewport>
      </>
    );
  },
};
