import type { HTMLAttributes, ReactNode } from "react";

import { TripBoardCard, type TripBoardCardProps } from "../TripBoardCard";

import "./TripDispatchList.css";

export interface TripDispatchListItem {
  id: string;
  time: string;
  dayLabel?: string;
  status: TripBoardCardProps["status"];
  originLabel: string;
  destinationLabel: string;
  teamName: string;
  teamCategory?: string;
  passengerCount?: number;
  vehicleName?: string;
  driverName?: string;
  etaLabel?: string;
  highlighted?: boolean;
}

export interface TripDispatchListTab {
  id: string;
  label: string;
}

export interface TripDispatchListProps extends HTMLAttributes<HTMLDivElement> {
  items: readonly TripDispatchListItem[];
  tabs?: readonly TripDispatchListTab[];
  activeTabId?: string;
  emptyState?: ReactNode;
  footer?: ReactNode;
  onTabChange?: (tabId: string) => void;
  onItemClick?: (item: TripDispatchListItem) => void;
}

const defaultTabs: TripDispatchListTab[] = [
  { id: "all", label: "Todos" },
  { id: "pending", label: "Pendientes" },
  { id: "live", label: "En curso" },
  { id: "completed", label: "Completados" },
];

export function TripDispatchList({
  items,
  tabs = defaultTabs,
  activeTabId = "all",
  emptyState,
  footer,
  onTabChange,
  onItemClick,
  className = "",
  ...props
}: TripDispatchListProps) {
  return (
    <div
      className={["bb-trip-dispatch-list", className].filter(Boolean).join(" ")}
      {...props}
    >
      {tabs.length > 0 && (
        <div className="bb-trip-dispatch-list__tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={
                tab.id === activeTabId
                  ? "bb-trip-dispatch-list__tab is-active"
                  : "bb-trip-dispatch-list__tab"
              }
              onClick={() => onTabChange?.(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {items.length > 0 ? (
        <div className="bb-trip-dispatch-list__items">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              className={[
                "bb-trip-dispatch-list__row",
                item.highlighted && "bb-trip-dispatch-list__row--active",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => onItemClick?.(item)}
            >
              <span className="bb-trip-dispatch-list__time">
                <strong>{item.time}</strong>
                {item.dayLabel && <span>{item.dayLabel}</span>}
              </span>

              <span className="bb-trip-dispatch-list__content">
                <TripBoardCard
                  time={item.time}
                  status={item.status}
                  originLabel={item.originLabel}
                  destinationLabel={item.destinationLabel}
                  teamName={item.teamName}
                  teamCategory={item.teamCategory}
                  passengerCount={item.passengerCount}
                  vehicleName={item.vehicleName}
                  etaLabel={item.etaLabel}
                  highlighted={item.highlighted}
                />
              </span>

              <span className="bb-trip-dispatch-list__driver">
                {item.driverName && <span>{item.driverName}</span>}
                <span className="bb-trip-dispatch-list__arrow">›</span>
              </span>
            </button>
          ))}
        </div>
      ) : (
        <div className="bb-trip-dispatch-list__empty">
          {emptyState ?? "No hay trayectos para mostrar."}
        </div>
      )}

      {footer && <div className="bb-trip-dispatch-list__footer">{footer}</div>}
    </div>
  );
}
