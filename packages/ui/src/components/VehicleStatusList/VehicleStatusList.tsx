import type { HTMLAttributes, ReactNode } from "react";

import { Badge, type BadgeProps } from "../Badge";

import "./VehicleStatusList.css";

export interface VehicleStatusListItem {
  id: string;
  name: string;
  plate?: string;
  seatsLabel?: string;
  status: ReactNode;
  tone?: BadgeProps["variant"];
  icon?: ReactNode;
}

export interface VehicleStatusListProps extends HTMLAttributes<HTMLDivElement> {
  items: readonly VehicleStatusListItem[];
  emptyState?: ReactNode;
  footer?: ReactNode;
  onItemClick?: (item: VehicleStatusListItem) => void;
}

export function VehicleStatusList({
  items,
  emptyState,
  footer,
  onItemClick,
  className = "",
  ...props
}: VehicleStatusListProps) {
  return (
    <div
      className={["bb-vehicle-status-list", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {items.length > 0 ? (
        <div className="bb-vehicle-status-list__items">
          {items.map((item) => {
            const content = (
              <>
                <span className="bb-vehicle-status-list__icon">
                  {item.icon ?? "🚐"}
                </span>

                <span className="bb-vehicle-status-list__content">
                  <strong>{item.name}</strong>

                  {(item.plate || item.seatsLabel) && (
                    <span>
                      {[item.plate, item.seatsLabel]
                        .filter(Boolean)
                        .join(" · ")}
                    </span>
                  )}
                </span>

                <Badge variant={item.tone ?? "default"}>{item.status}</Badge>

                <span className="bb-vehicle-status-list__arrow">›</span>
              </>
            );

            if (onItemClick) {
              return (
                <button
                  key={item.id}
                  type="button"
                  className="bb-vehicle-status-list__row"
                  onClick={() => onItemClick(item)}
                >
                  {content}
                </button>
              );
            }

            return (
              <div key={item.id} className="bb-vehicle-status-list__row">
                {content}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bb-vehicle-status-list__empty">
          {emptyState ?? "No hay vehículos para mostrar."}
        </div>
      )}

      {footer && <div className="bb-vehicle-status-list__footer">{footer}</div>}
    </div>
  );
}
