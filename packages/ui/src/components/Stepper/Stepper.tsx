import type { HTMLAttributes, ReactNode } from "react";

import "./Stepper.css";

export type StepStatus = "pending" | "current" | "completed" | "error";

export type StepperOrientation = "vertical" | "horizontal";

export interface Step {
  id: string | number;
  label: string;
  description?: ReactNode;
  status?: StepStatus;
  icon?: ReactNode;
  content?: ReactNode;
}

export interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  steps: Step[];
  orientation?: StepperOrientation;
}

export function Stepper({
  steps,
  orientation = "vertical",
  className = "",
  ...props
}: StepperProps) {
  return (
    <div
      className={["bb-stepper", `bb-stepper--${orientation}`, className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {steps.map((step, index) => {
        const status = step.status ?? "pending";

        return (
          <div
            key={step.id}
            className={["bb-stepper__step", `bb-stepper__step--${status}`]
              .filter(Boolean)
              .join(" ")}
          >
            <div className="bb-stepper__main">
              <div className="bb-stepper__indicator-wrapper">
                <div className="bb-stepper__indicator">
                  {step.icon ? (
                    <span className="bb-stepper__icon">{step.icon}</span>
                  ) : status === "completed" ? (
                    <span className="bb-stepper__check" />
                  ) : status === "error" ? (
                    <span className="bb-stepper__error-mark" />
                  ) : (
                    index + 1
                  )}
                </div>

                {index < steps.length - 1 && (
                  <div className="bb-stepper__line" />
                )}
              </div>

              <div className="bb-stepper__content">
                <div className="bb-stepper__label">{step.label}</div>

                {step.description && (
                  <div className="bb-stepper__description">
                    {step.description}
                  </div>
                )}
              </div>
            </div>

            {orientation === "vertical" && step.content && (
              <div className="bb-stepper__step-content">{step.content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
