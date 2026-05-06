import type { Meta, StoryObj } from "@storybook/react";
import { useMemo, useState } from "react";

import { Button } from "../Button";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { Stepper } from "./Stepper";

function InteractiveStepperDemo() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = useMemo(() => {
    return [
      {
        id: 1,
        label: "Equipo",
        description: "Datos básicos",
        icon: "🏀",
      },
      {
        id: 2,
        label: "Jugadores",
        description: "Plantilla",
        icon: "👥",
      },
      {
        id: 3,
        label: "Pago",
        description: "Estado económico",
        icon: "💳",
      },
      {
        id: 4,
        label: "Finalización",
        description: "Confirmación",
        icon: "✅",
      },
    ].map((step, index) => {
      const position = index + 1;

      if (position < currentStep) {
        return {
          ...step,
          status: "completed" as const,
        };
      }

      if (position === currentStep) {
        return {
          ...step,
          status: "current" as const,
        };
      }

      return {
        ...step,
        status: "pending" as const,
      };
    });
  }, [currentStep]);

  return (
    <Card style={{ maxWidth: 720 }}>
      <Stack gap={5}>
        <Stepper orientation="horizontal" steps={steps} />

        <Stack direction="horizontal" gap={3}>
          <Button
            variant="secondary"
            disabled={currentStep === 1}
            onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
          >
            Atrás
          </Button>

          <Button
            disabled={currentStep === steps.length}
            onClick={() =>
              setCurrentStep((prev) => Math.min(steps.length, prev + 1))
            }
          >
            Siguiente
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
}

const meta: Meta<typeof Stepper> = {
  title: "Components/Stepper",
  component: Stepper,
  args: {
    orientation: "vertical",
    steps: [
      {
        id: 1,
        label: "Datos del equipo",
        description: "Información general",
        status: "completed",
      },
      {
        id: 2,
        label: "Jugadores",
        description: "Plantilla y dorsales",
        status: "current",
      },
      {
        id: 3,
        label: "Pago",
        description: "Pendiente",
        status: "pending",
      },
    ],
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["vertical", "horizontal"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Stepper>;

export const Vertical: Story = {};

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
};

export const WithIcons: Story = {
  args: {
    orientation: "horizontal",
    steps: [
      {
        id: 1,
        label: "Equipo",
        description: "Datos generales",
        icon: "🏀",
        status: "completed",
      },
      {
        id: 2,
        label: "Jugadores",
        description: "Plantilla",
        icon: "👥",
        status: "current",
      },
      {
        id: 3,
        label: "Pago",
        description: "Estado económico",
        icon: "💳",
        status: "pending",
      },
      {
        id: 4,
        label: "Finalización",
        description: "Todo correcto",
        icon: "✅",
        status: "pending",
      },
    ],
  },
};

export const Interactive: Story = {
  render: () => <InteractiveStepperDemo />,
};
