import type { HTMLAttributes, ReactNode } from "react";

import "./TripKanbanColumn.css";

export interface TripKanbanColumnProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  title: ReactNode;
  count?: number;
  description?: ReactNode;
  actions?: ReactNode;
  children: ReactNode;
  tone?: "default" | "primary" | "success" | "warning" | "danger" | "info";
}

export function TripKanbanColumn({
  title,
  count,
  description,
  actions,
  children,
  tone = "default",
  className = "",
  ...props
}: TripKanbanColumnProps) {
  return (
    <section
      className={[
        "bb-trip-kanban-column",
        `bb-trip-kanban-column--${tone}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <div className="bb-trip-kanban-column__header">
        <div className="bb-trip-kanban-column__texts">
          <div className="bb-trip-kanban-column__title-row">
            <h3 className="bb-trip-kanban-column__title">{title}</h3>

            {count !== undefined && (
              <span className="bb-trip-kanban-column__count">{count}</span>
            )}
          </div>

          {description && (
            <div className="bb-trip-kanban-column__description">
              {description}
            </div>
          )}
        </div>

        {actions && (
          <div className="bb-trip-kanban-column__actions">{actions}</div>
        )}
      </div>

      <div className="bb-trip-kanban-column__content">{children}</div>
    </section>
  );
}
