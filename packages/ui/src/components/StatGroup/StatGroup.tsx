import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import "./StatGroup.css";

export interface StatGroupItem {
  id: string | number;
  label: ReactNode;
  value: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  trend?: ReactNode;
}

export interface StatGroupProps
  extends HTMLAttributes<HTMLDivElement> {
  items: StatGroupItem[];
  columns?: 1 | 2 | 3 | 4;
}

export function StatGroup({
  items,
  columns = 2,
  className = "",
  ...props
}: StatGroupProps) {
  return (
    <div
      className={[
        "bb-stat-group",
        `bb-stat-group--cols-${columns}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="bb-stat-group__item"
        >
          <div className="bb-stat-group__top">
            <div className="bb-stat-group__label-wrapper">
              {item.icon && (
                <div className="bb-stat-group__icon">
                  {item.icon}
                </div>
              )}

              <div className="bb-stat-group__label">
                {item.label}
              </div>
            </div>

            {item.trend && (
              <div className="bb-stat-group__trend">
                {item.trend}
              </div>
            )}
          </div>

          <div className="bb-stat-group__value">
            {item.value}
          </div>

          {item.description && (
            <div className="bb-stat-group__description">
              {item.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}