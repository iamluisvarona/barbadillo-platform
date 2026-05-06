import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

import { LoadingSpinner } from "../LoadingSpinner";

import "./RouteMapPanel.css";

export interface RouteMapPanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  height?: number | string;
  isLoading?: boolean;
  error?: string;
  actions?: ReactNode;
}

export function RouteMapPanel({
  children,
  height = 320,
  isLoading = false,
  error,
  actions,
  className = "",
  style,
  ...props
}: RouteMapPanelProps) {
  const panelStyle = {
    ...style,
    "--bb-route-map-panel-height":
      typeof height === "number" ? `${height}px` : height,
  } as CSSProperties;

  return (
    <div
      className={["bb-route-map-panel", className].filter(Boolean).join(" ")}
      style={panelStyle}
      {...props}
    >
      <div className="bb-route-map-panel__content">{children}</div>

      {actions && <div className="bb-route-map-panel__actions">{actions}</div>}

      {isLoading && (
        <div className="bb-route-map-panel__overlay">
          <LoadingSpinner />
          <span>Cargando mapa...</span>
        </div>
      )}

      {error && !isLoading && (
        <div className="bb-route-map-panel__overlay bb-route-map-panel__overlay--error">
          <strong>No se pudo cargar el mapa</strong>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
