import type { Meta, StoryObj } from "@storybook/react";
import { useMemo, useState } from "react";

import { Button } from "../Button";
import { Card } from "../Card";
import { Stack } from "../Stack";
import {
  TripProgressStepper,
  type TripProgressStepStatus,
} from "./TripProgressStepper";

const FLOW: TripProgressStepStatus[] = [
  "accepted",
  "going_to_pickup",
  "arrived",
  "in_progress",
  "completed",
];

function Demo() {
  const [index, setIndex] = useState(0);

  const currentStep = useMemo(() => FLOW[index], [index]);

  return (
    <Card style={{ maxWidth: 760 }}>
      <Stack gap={5}>
        <TripProgressStepper currentStep={currentStep} />

        <Stack direction="vertical" gap={3}>
          <Button
            variant="secondary"
            disabled={index === 0}
            onClick={() => setIndex((prev) => Math.max(0, prev - 1))}
          >
            Atrás
          </Button>

          <Button
            disabled={index === FLOW.length - 1}
            onClick={() =>
              setIndex((prev) => Math.min(FLOW.length - 1, prev + 1))
            }
          >
            Siguiente
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
}

const meta: Meta<typeof TripProgressStepper> = {
  title: "Transport/TripProgressStepper",
  component: TripProgressStepper,
  args: {
    currentStep: "going_to_pickup",
    compact: false,
  },
  argTypes: {
    currentStep: {
      control: "select",
      options: FLOW,
    },
  },
};

export default meta;

type Story = StoryObj<typeof TripProgressStepper>;

export const Default: Story = {};

export const Compact: Story = {
  args: {
    compact: true,
  },
};

export const Interactive: Story = {
  render: () => <Demo />,
};
