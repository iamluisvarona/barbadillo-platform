import type { HTMLAttributes, ReactNode } from "react";

import "./DriverInlineInfo.css";

export interface DriverInlineInfoProps extends HTMLAttributes<HTMLDivElement> {
  name: ReactNode;
  subtitle?: ReactNode;
  avatar?: ReactNode;
}

export function DriverInlineInfo({
  name,
  subtitle,
  avatar,
  className = "",
  ...props
}: DriverInlineInfoProps) {
  const classes = ["bb-driver-inline-info", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      {avatar ? (
        <div className="bb-driver-inline-info__avatar" aria-hidden="true">
          {avatar}
        </div>
      ) : null}

      <div className="bb-driver-inline-info__content">
        <strong className="bb-driver-inline-info__name">{name}</strong>

        {subtitle ? (
          <span className="bb-driver-inline-info__subtitle">{subtitle}</span>
        ) : null}
      </div>
    </div>
  );
}
