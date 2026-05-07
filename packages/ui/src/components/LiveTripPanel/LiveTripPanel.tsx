import type { HTMLAttributes, ReactNode } from "react";

import { Button } from "../Button";
import { StatusBadge } from "../StatusBadge";
import { TripMiniMapPreview } from "../TripMiniMapPreview";

import "./LiveTripPanel.css";

export interface LiveTripPanelAction {
  label: string;
  onClick?: () => void;
  variant?:
    | "primary"
    | "secondary"
    | "ghost"
    | "danger"
    | "success"
    | "warning";
}

export interface LiveTripPanelProps extends HTMLAttributes<HTMLDivElement> {
  tripCode?: string;
  statusLabel?: ReactNode;

  originLabel: string;
  originAddress?: string;
  originMeta?: string;

  destinationLabel: string;
  destinationAddress?: string;
  destinationMeta?: string;

  mapHeight?: number | string;
  mapOverlay?: ReactNode;
  mapContent?: ReactNode;

  progressLabel?: ReactNode;
  etaLabel?: ReactNode;
  progressPercent?: number;

  primaryAction?: LiveTripPanelAction;
  secondaryAction?: LiveTripPanelAction;
}

export function LiveTripPanel({
  tripCode,
  statusLabel = "Live",
  originLabel,
  originAddress,
  originMeta,
  destinationLabel,
  destinationAddress,
  destinationMeta,
  mapHeight = 220,
  mapOverlay,
  mapContent,
  progressLabel,
  etaLabel,
  progressPercent = 0,
  primaryAction,
  secondaryAction,
  className = "",
  ...props
}: LiveTripPanelProps) {
  const normalizedProgress = Math.min(Math.max(progressPercent, 0), 100);

  return (
    <div
      className={["bb-live-trip-panel", className].filter(Boolean).join(" ")}
      {...props}
    >
      <div className="bb-live-trip-panel__header">
        <div>
          <h2 className="bb-live-trip-panel__title">
            <span className="bb-live-trip-panel__live-dot" />
            Viaje en curso
          </h2>

          {tripCode && <p className="bb-live-trip-panel__code">{tripCode}</p>}
        </div>

        <StatusBadge variant="success">{statusLabel}</StatusBadge>
      </div>

      <div className="bb-live-trip-panel__route">
        <div className="bb-live-trip-panel__route-point">
          <span className="bb-live-trip-panel__marker bb-live-trip-panel__marker--origin" />

          <div>
            <h3>{originLabel}</h3>
            {originAddress && <p>{originAddress}</p>}
            {originMeta && <p>{originMeta}</p>}
          </div>
        </div>

        <div className="bb-live-trip-panel__route-line" />

        <div className="bb-live-trip-panel__route-point">
          <span className="bb-live-trip-panel__marker bb-live-trip-panel__marker--destination" />

          <div>
            <h3>{destinationLabel}</h3>
            {destinationAddress && <p>{destinationAddress}</p>}
            {destinationMeta && <p>{destinationMeta}</p>}
          </div>
        </div>
      </div>

      {mapContent ? (
        <div
          className="bb-live-trip-panel__map"
          style={{
            height:
              typeof mapHeight === "number" ? `${mapHeight}px` : mapHeight,
          }}
        >
          {mapContent}
        </div>
      ) : (
        <TripMiniMapPreview
          height={mapHeight}
          originLabel={originLabel}
          destinationLabel={destinationLabel}
          overlay={mapOverlay}
        />
      )}

      {(progressLabel || etaLabel) && (
        <div className="bb-live-trip-panel__progress">
          <div className="bb-live-trip-panel__progress-top">
            {progressLabel && <strong>{progressLabel}</strong>}
            {etaLabel && <span>{etaLabel}</span>}
          </div>

          <div className="bb-live-trip-panel__progress-bar">
            <span style={{ width: `${normalizedProgress}%` }} />
          </div>
        </div>
      )}

      {(secondaryAction || primaryAction) && (
        <div className="bb-live-trip-panel__actions">
          {secondaryAction && (
            <Button
              variant={secondaryAction.variant ?? "secondary"}
              onClick={secondaryAction.onClick}
            >
              {secondaryAction.label}
            </Button>
          )}

          {primaryAction && (
            <Button
              variant={primaryAction.variant ?? "primary"}
              onClick={primaryAction.onClick}
            >
              {primaryAction.label}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
