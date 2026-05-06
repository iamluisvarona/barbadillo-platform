import type { HTMLAttributes, ReactNode } from "react";
import { Card } from "../Card";
import { ProgressBar } from "../ProgressBar";
import "./ProgressCard.css";

export interface ProgressCardProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  title: ReactNode;
  description?: ReactNode;
  value: number;
  variant?: "default" | "success" | "info" | "warning" | "danger";
  footer?: ReactNode;
  children?: ReactNode;
}

export function ProgressCard({
  title,
  description,
  value,
  variant = "default",
  footer,
  children,
  className = "",
  ...props
}: ProgressCardProps) {
  return (
    <Card
      className={["bb-progress-card", `bb-progress-card--${variant}`, className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <div className="bb-progress-card__progress">
        <ProgressBar value={value} variant={variant} size="sm" />
      </div>

      <div className="bb-progress-card__content">
        <div className="bb-progress-card__header">
          <div className="bb-progress-card__texts">
            <div className="bb-progress-card__title">{title}</div>

            {description && (
              <div className="bb-progress-card__description">{description}</div>
            )}
          </div>

          <div className="bb-progress-card__value">{Math.round(value)}%</div>
        </div>

        {children && <div className="bb-progress-card__body">{children}</div>}

        {footer && <div className="bb-progress-card__footer">{footer}</div>}
      </div>
    </Card>
  );
}
