import type { HTMLAttributes, ReactNode } from "react";

import "./TripCodeBadge.css";

export interface TripCodeBadgeProps extends HTMLAttributes<HTMLDivElement> {
  code: ReactNode;
  direction?: ReactNode;
}

export function TripCodeBadge({
  code,
  direction,
  className = "",
  ...props
}: TripCodeBadgeProps) {
  const classes = ["bb-trip-code-badge", className].filter(Boolean).join(" ");

  return (
    <div className={classes} {...props}>
      <strong className="bb-trip-code-badge__code">{code}</strong>

      {direction ? (
        <span className="bb-trip-code-badge__direction">{direction}</span>
      ) : null}
    </div>
  );
}
