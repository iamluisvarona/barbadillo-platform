import type { HTMLAttributes, ReactNode } from "react";

import "./ActivitySummaryPanel.css";

export interface ActivitySummaryPanelItem {
  id: string;
  label: string;
  value: ReactNode;
  trend?: ReactNode;
  tone?: "default" | "success" | "warning" | "danger" | "info";
}

export interface ActivitySummaryPanelProps extends HTMLAttributes<HTMLDivElement> {
  items: readonly ActivitySummaryPanelItem[];
  chartVariant?: "glow-lines" | "none";
  chart?: ReactNode;
}

export function ActivitySummaryPanel({
  items,
  chartVariant = "glow-lines",
  chart,
  className = "",
  ...props
}: ActivitySummaryPanelProps) {
  return (
    <div
      className={["bb-activity-summary-panel", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <div className="bb-activity-summary-panel__metrics">
        {items.map((item) => (
          <div key={item.id} className="bb-activity-summary-panel__metric">
            <span className="bb-activity-summary-panel__label">
              {item.label}
            </span>

            <strong className="bb-activity-summary-panel__value">
              {item.value}
            </strong>

            {item.trend && (
              <small
                className={[
                  "bb-activity-summary-panel__trend",
                  `bb-activity-summary-panel__trend--${item.tone ?? "success"}`,
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {item.trend}
              </small>
            )}
          </div>
        ))}
      </div>

      {chart ??
        (chartVariant === "glow-lines" && (
          <div className="bb-activity-summary-panel__chart">
            <span className="bb-activity-summary-panel__chart-line bb-activity-summary-panel__chart-line--primary" />
            <span className="bb-activity-summary-panel__chart-line bb-activity-summary-panel__chart-line--success" />
          </div>
        ))}
    </div>
  );
}
