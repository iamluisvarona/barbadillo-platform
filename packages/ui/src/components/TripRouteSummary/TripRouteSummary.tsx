import type { HTMLAttributes, ReactNode } from "react";

import "./TripRouteSummary.css";

export type TripRouteSummaryVariant = "compact" | "detailed" | "vertical";

export interface TripRouteSummaryProps extends HTMLAttributes<HTMLDivElement> {
  originLabel: string;
  originAddress?: string;

  destinationLabel: string;
  destinationAddress?: string;

  variant?: TripRouteSummaryVariant;

  originIcon?: ReactNode;
  destinationIcon?: ReactNode;
}

export function TripRouteSummary({
  originLabel,
  originAddress,
  destinationLabel,
  destinationAddress,
  variant = "compact",
  originIcon,
  destinationIcon,
  className = "",
  ...props
}: TripRouteSummaryProps) {
  if (variant === "compact") {
    return (
      <div
        className={[
          "bb-trip-route-summary",
          "bb-trip-route-summary--compact",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        <span className="bb-trip-route-summary__compact-point">
          {originIcon ?? "●"}
        </span>

        <span className="bb-trip-route-summary__compact-label">
          {originLabel}
        </span>

        <span className="bb-trip-route-summary__compact-separator">→</span>

        <span className="bb-trip-route-summary__compact-point">
          {destinationIcon ?? "●"}
        </span>

        <span className="bb-trip-route-summary__compact-label">
          {destinationLabel}
        </span>
      </div>
    );
  }

  return (
    <div
      className={[
        "bb-trip-route-summary",
        `bb-trip-route-summary--${variant}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <div className="bb-trip-route-summary__location">
        <div className="bb-trip-route-summary__marker-wrapper">
          <div className="bb-trip-route-summary__marker bb-trip-route-summary__marker--origin">
            {originIcon ?? <span className="bb-trip-route-summary__dot" />}
          </div>

          <div className="bb-trip-route-summary__line" />
        </div>

        <div className="bb-trip-route-summary__content">
          <div className="bb-trip-route-summary__label">{originLabel}</div>

          {originAddress && (
            <div className="bb-trip-route-summary__address">
              {originAddress}
            </div>
          )}
        </div>
      </div>

      <div className="bb-trip-route-summary__location">
        <div className="bb-trip-route-summary__marker-wrapper">
          <div className="bb-trip-route-summary__marker bb-trip-route-summary__marker--destination">
            {destinationIcon ?? (
              <span className="bb-trip-route-summary__square" />
            )}
          </div>
        </div>

        <div className="bb-trip-route-summary__content">
          <div className="bb-trip-route-summary__label">{destinationLabel}</div>

          {destinationAddress && (
            <div className="bb-trip-route-summary__address">
              {destinationAddress}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
