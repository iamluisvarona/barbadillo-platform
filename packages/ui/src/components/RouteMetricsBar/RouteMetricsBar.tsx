import type { HTMLAttributes, ReactNode } from "react";

import "./RouteMetricsBar.css";

export type RouteMetricsBarTone =
  | "default"
  | "success"
  | "warning"
  | "danger"
  | "info";

export interface RouteMetricsBarItem {
  icon?: ReactNode;
  label: string;
  value: string;
  tone?: RouteMetricsBarTone;
}

export interface RouteMetricsBarProps extends HTMLAttributes<HTMLDivElement> {
  items: RouteMetricsBarItem[];
}

export function RouteMetricsBar({
  items,
  className = "",
  ...props
}: RouteMetricsBarProps) {
  return (
    <div
      className={["bb-route-metrics-bar", className].filter(Boolean).join(" ")}
      {...props}
    >
      {items.map((item, index) => (
        <div
          key={`${item.label}-${index}`}
          className={[
            "bb-route-metrics-bar__item",
            `bb-route-metrics-bar__item--${item.tone ?? "default"}`,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {item.icon && (
            <div className="bb-route-metrics-bar__icon">{item.icon}</div>
          )}

          <div className="bb-route-metrics-bar__texts">
            <div className="bb-route-metrics-bar__value">{item.value}</div>

            <div className="bb-route-metrics-bar__label">{item.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
