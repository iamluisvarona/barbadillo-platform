import type { HTMLAttributes, ReactNode } from "react";

import {
  TripStatusBadge,
  type TripStatusBadgeStatus,
} from "../TripStatusBadge";

import "./DriverRouteSheet.css";

export interface DriverRouteSheetProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  title: string;
  subtitle?: string;

  status: TripStatusBadgeStatus;

  children: ReactNode;

  primaryAction?: ReactNode;
  secondaryAction?: ReactNode;
  dangerAction?: ReactNode;
}

export function DriverRouteSheet({
  title,
  subtitle,
  status,
  children,
  primaryAction,
  secondaryAction,
  dangerAction,
  className = "",
  ...props
}: DriverRouteSheetProps) {
  return (
    <section
      className={["bb-driver-route-sheet", className].filter(Boolean).join(" ")}
      {...props}
    >
      <div className="bb-driver-route-sheet__header">
        <div className="bb-driver-route-sheet__header-top">
          <div className="bb-driver-route-sheet__texts">
            <h2 className="bb-driver-route-sheet__title">{title}</h2>

            {subtitle && (
              <p className="bb-driver-route-sheet__subtitle">{subtitle}</p>
            )}
          </div>

          <TripStatusBadge status={status} />
        </div>
      </div>

      <div className="bb-driver-route-sheet__content">{children}</div>

      {(primaryAction || secondaryAction || dangerAction) && (
        <div className="bb-driver-route-sheet__footer">
          {primaryAction && (
            <div className="bb-driver-route-sheet__primary">
              {primaryAction}
            </div>
          )}

          {(secondaryAction || dangerAction) && (
            <div className="bb-driver-route-sheet__secondary-row">
              {secondaryAction && (
                <div className="bb-driver-route-sheet__secondary">
                  {secondaryAction}
                </div>
              )}

              {dangerAction && (
                <div className="bb-driver-route-sheet__danger">
                  {dangerAction}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
