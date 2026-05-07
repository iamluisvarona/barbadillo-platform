import type { HTMLAttributes } from "react";

import "./RouteCell.css";

export interface RouteCellProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  originLabel: string;
  destinationLabel: string;
  compact?: boolean;
}

export function RouteCell({
  originLabel,
  destinationLabel,
  compact = false,
  className = "",
  ...props
}: RouteCellProps) {
  const classes = [
    "bb-route-cell",
    compact ? "bb-route-cell--compact" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      <div className="bb-route-cell__point">
        <span className="bb-route-cell__dot bb-route-cell__dot--origin" />
        <span className="bb-route-cell__label">{originLabel}</span>
      </div>

      <div className="bb-route-cell__line" />

      <div className="bb-route-cell__point">
        <span className="bb-route-cell__dot bb-route-cell__dot--destination" />
        <span className="bb-route-cell__label">{destinationLabel}</span>
      </div>
    </div>
  );
}
