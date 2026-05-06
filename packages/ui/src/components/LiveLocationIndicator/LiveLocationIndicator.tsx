import type { HTMLAttributes } from "react";

import "./LiveLocationIndicator.css";

export type LiveLocationIndicatorStatus = "live" | "connecting" | "offline";

const STATUS_CONFIG: Record<
  LiveLocationIndicatorStatus,
  {
    label: string;
    className: string;
  }
> = {
  live: {
    label: "Ubicación en directo",
    className: "success",
  },
  connecting: {
    label: "Conectando GPS",
    className: "warning",
  },
  offline: {
    label: "Ubicación no disponible",
    className: "danger",
  },
};

export interface LiveLocationIndicatorProps extends HTMLAttributes<HTMLDivElement> {
  status?: LiveLocationIndicatorStatus;

  compact?: boolean;

  pulsing?: boolean;
}

export function LiveLocationIndicator({
  status = "live",
  compact = false,
  pulsing = true,
  className = "",
  ...props
}: LiveLocationIndicatorProps) {
  const config = STATUS_CONFIG[status];

  return (
    <div
      className={[
        "bb-live-location-indicator",
        `bb-live-location-indicator--${config.className}`,
        compact && "bb-live-location-indicator--compact",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <span
        className={[
          "bb-live-location-indicator__dot",
          pulsing &&
            status === "live" &&
            "bb-live-location-indicator__dot--pulse",
        ]
          .filter(Boolean)
          .join(" ")}
      />

      <span className="bb-live-location-indicator__label">{config.label}</span>
    </div>
  );
}
