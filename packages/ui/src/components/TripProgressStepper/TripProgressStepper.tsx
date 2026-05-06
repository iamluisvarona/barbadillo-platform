import type { HTMLAttributes, ReactNode } from "react";

import { Stepper, type Step } from "../Stepper";

import "./TripProgressStepper.css";

export type TripProgressStepStatus =
  | "accepted"
  | "going_to_pickup"
  | "arrived"
  | "in_progress"
  | "completed";

export interface TripProgressStep {
  id: TripProgressStepStatus;
  label: string;
  icon?: ReactNode;
}

export interface TripProgressStepperProps
  extends HTMLAttributes<HTMLDivElement> {
  currentStep: TripProgressStepStatus;
  steps?: TripProgressStep[];
  compact?: boolean;
}

const DEFAULT_STEPS: TripProgressStep[] = [
  {
    id: "accepted",
    label: "Aceptado",
    icon: "✓",
  },
  {
    id: "going_to_pickup",
    label: "Al origen",
    icon: "↗",
  },
  {
    id: "arrived",
    label: "Llegada",
    icon: "●",
  },
  {
    id: "in_progress",
    label: "En curso",
    icon: "▶",
  },
  {
    id: "completed",
    label: "Final",
    icon: "✓",
  },
];

export function TripProgressStepper({
  currentStep,
  steps = DEFAULT_STEPS,
  compact = false,
  className = "",
  ...props
}: TripProgressStepperProps) {
  const currentIndex = steps.findIndex((step) => step.id === currentStep);

  const mappedSteps: Step[] = steps.map((step, index) => {
    if (index < currentIndex) {
      return {
        id: step.id,
        label: step.label,
        icon: step.icon,
        status: "completed",
      };
    }

    if (index === currentIndex) {
      return {
        id: step.id,
        label: step.label,
        icon: step.icon,
        status: "current",
      };
    }

    return {
      id: step.id,
      label: step.label,
      icon: step.icon,
      status: "pending",
    };
  });

  return (
    <div
      className={[
        "bb-trip-progress-stepper",
        compact && "bb-trip-progress-stepper--compact",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <Stepper
        orientation="horizontal"
        steps={mappedSteps}
      />
    </div>
  );
}