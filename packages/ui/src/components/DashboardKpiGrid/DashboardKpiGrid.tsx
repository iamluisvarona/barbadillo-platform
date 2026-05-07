import type { ComponentProps, HTMLAttributes, ReactNode } from "react";

import { Badge, type BadgeProps } from "../Badge";
import { CardGrid } from "../CardGrid";
import { StatCard } from "../StatCard";

import "./DashboardKpiGrid.css";

type DashboardKpiGridColumns = ComponentProps<typeof CardGrid>["columns"];

export interface DashboardKpiGridItem {
  id: string;
  label: string;
  value: ReactNode;
  description?: ReactNode;
  badge?: ReactNode;
  badgeVariant?: BadgeProps["variant"];
}

export interface DashboardKpiGridProps extends HTMLAttributes<HTMLDivElement> {
  items: readonly DashboardKpiGridItem[];
  columns?: DashboardKpiGridColumns;
}

export function DashboardKpiGrid({
  items,
  columns = 5,
  className = "",
  ...props
}: DashboardKpiGridProps) {
  return (
    <div
      className={["bb-dashboard-kpi-grid", className].filter(Boolean).join(" ")}
      {...props}
    >
      <div className="bb-dashboard-kpi-grid__desktop">
        <CardGrid columns={columns}>
          {items.map((item) => (
            <StatCard
              key={item.id}
              label={item.label}
              value={item.value}
              description={item.description}
              badge={item.badge}
              badgeVariant={item.badgeVariant}
            />
          ))}
        </CardGrid>
      </div>

      <div className="bb-dashboard-kpi-grid__mobile">
        {items.map((item) => (
          <div key={item.id} className="bb-dashboard-kpi-grid__row">
            <div className="bb-dashboard-kpi-grid__main">
              <span className="bb-dashboard-kpi-grid__label">{item.label}</span>

              {item.description && (
                <span className="bb-dashboard-kpi-grid__description">
                  {item.description}
                </span>
              )}
            </div>

            <div className="bb-dashboard-kpi-grid__side">
              <strong className="bb-dashboard-kpi-grid__value">
                {item.value}
              </strong>

              {item.badge && (
                <Badge variant={item.badgeVariant ?? "default"}>
                  {item.badge}
                </Badge>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
