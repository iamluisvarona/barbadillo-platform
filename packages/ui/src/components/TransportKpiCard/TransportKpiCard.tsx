import type { HTMLAttributes, ReactNode } from "react";

import "./TransportKpiCard.css";

export type TransportKpiCardTone =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info";

export interface TransportKpiCardProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  icon: ReactNode;
  value: ReactNode;
  label: ReactNode;
  tone?: TransportKpiCardTone;
  trend?: ReactNode;
  compact?: boolean;
}

export function TransportKpiCard({
  icon,
  value,
  label,
  tone = "primary",
  trend,
  compact = false,
  className = "",
  ...props
}: TransportKpiCardProps) {
  const classes = [
    "bb-transport-kpi-card",
    `bb-transport-kpi-card--${tone}`,
    compact ? "bb-transport-kpi-card--compact" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      <div className="bb-transport-kpi-card__icon" aria-hidden="true">
        {icon}
      </div>

      <div className="bb-transport-kpi-card__content">
        <strong className="bb-transport-kpi-card__value">{value}</strong>
        <span className="bb-transport-kpi-card__label">{label}</span>

        {trend ? (
          <span className="bb-transport-kpi-card__trend">{trend}</span>
        ) : null}
      </div>
    </div>
  );
}
