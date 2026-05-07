import type { HTMLAttributes, ReactNode } from "react";

import { Badge, type BadgeProps } from "../Badge";

import "./IncidentListPanel.css";

export interface IncidentListPanelItem {
  id: string;
  time: string;
  dayLabel?: string;
  title: string;
  description?: string;
  status: ReactNode;
  tone?: BadgeProps["variant"];
  assignedTo?: string;
  icon?: ReactNode;
}

export interface IncidentListPanelProps extends HTMLAttributes<HTMLDivElement> {
  items: readonly IncidentListPanelItem[];
  emptyState?: ReactNode;
  footer?: ReactNode;
  onItemClick?: (item: IncidentListPanelItem) => void;
}

export function IncidentListPanel({
  items,
  emptyState,
  footer,
  onItemClick,
  className = "",
  ...props
}: IncidentListPanelProps) {
  return (
    <div
      className={["bb-incident-list-panel", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {items.length > 0 ? (
        <div className="bb-incident-list-panel__items">
          {items.map((item) => {
            const content = (
              <>
                <span className="bb-incident-list-panel__time">
                  <strong>{item.time}</strong>
                  {item.dayLabel && <span>{item.dayLabel}</span>}
                </span>

                <span className="bb-incident-list-panel__icon">
                  {item.icon ?? "⚠"}
                </span>

                <span className="bb-incident-list-panel__content">
                  <strong>{item.title}</strong>
                  {item.description && <span>{item.description}</span>}
                </span>

                <Badge variant={item.tone ?? "default"}>{item.status}</Badge>

                {item.assignedTo && (
                  <span className="bb-incident-list-panel__assigned">
                    Asignada a {item.assignedTo}
                  </span>
                )}

                <span className="bb-incident-list-panel__arrow">›</span>
              </>
            );

            if (onItemClick) {
              return (
                <button
                  key={item.id}
                  type="button"
                  className="bb-incident-list-panel__row"
                  onClick={() => onItemClick(item)}
                >
                  {content}
                </button>
              );
            }

            return (
              <div key={item.id} className="bb-incident-list-panel__row">
                {content}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bb-incident-list-panel__empty">
          {emptyState ?? "No hay incidencias para mostrar."}
        </div>
      )}

      {footer && <div className="bb-incident-list-panel__footer">{footer}</div>}
    </div>
  );
}
