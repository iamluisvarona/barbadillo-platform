import type { HTMLAttributes, ReactNode } from "react";

import "./TripMiniMapPreview.css";

export interface TripMiniMapPreviewProps extends HTMLAttributes<HTMLDivElement> {
  originLabel?: string;
  destinationLabel?: string;

  height?: number | string;

  overlay?: ReactNode;

  animated?: boolean;
}

export function TripMiniMapPreview({
  originLabel,
  destinationLabel,
  height = 180,
  overlay,
  animated = true,
  className = "",
  style,
  ...props
}: TripMiniMapPreviewProps) {
  return (
    <div
      className={[
        "bb-trip-mini-map-preview",
        animated && "bb-trip-mini-map-preview--animated",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        ...style,
        height: typeof height === "number" ? `${height}px` : height,
      }}
      {...props}
    >
      <div className="bb-trip-mini-map-preview__background" />

      <div className="bb-trip-mini-map-preview__route">
        <div className="bb-trip-mini-map-preview__marker bb-trip-mini-map-preview__marker--origin">
          <span />
        </div>

        <div className="bb-trip-mini-map-preview__path" />

        <div className="bb-trip-mini-map-preview__marker bb-trip-mini-map-preview__marker--destination">
          <span />
        </div>
      </div>

      {(originLabel || destinationLabel) && (
        <div className="bb-trip-mini-map-preview__labels">
          {originLabel && (
            <div className="bb-trip-mini-map-preview__label">
              <span className="bb-trip-mini-map-preview__label-dot bb-trip-mini-map-preview__label-dot--origin" />

              <span>{originLabel}</span>
            </div>
          )}

          {destinationLabel && (
            <div className="bb-trip-mini-map-preview__label">
              <span className="bb-trip-mini-map-preview__label-dot bb-trip-mini-map-preview__label-dot--destination" />

              <span>{destinationLabel}</span>
            </div>
          )}
        </div>
      )}

      {overlay && (
        <div className="bb-trip-mini-map-preview__overlay">{overlay}</div>
      )}
    </div>
  );
}
