import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import {
  TripStatusBadge,
  type TripStatusBadgeStatus,
} from "../TripStatusBadge";

import "./TripDriverHeader.css";

export interface TripDriverHeaderProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  driverName: string;

  vehicleName?: string;

  currentTrip?: string;

  status: TripStatusBadgeStatus;

  avatarSrc?: string;

  rightContent?: ReactNode;
}

export function TripDriverHeader({
  driverName,
  vehicleName,
  currentTrip,
  status,
  avatarSrc,
  rightContent,
  className = "",
  ...props
}: TripDriverHeaderProps) {
  return (
    <header
      className={[
        "bb-trip-driver-header",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <div className="bb-trip-driver-header__left">
        <div className="bb-trip-driver-header__avatar-wrapper">
          {avatarSrc ? (
            <img
              src={avatarSrc}
              alt={driverName}
              className="bb-trip-driver-header__avatar"
            />
          ) : (
            <div className="bb-trip-driver-header__avatar-placeholder">
              {driverName.charAt(0).toUpperCase()}
            </div>
          )}

          <span className="bb-trip-driver-header__online-dot" />
        </div>

        <div className="bb-trip-driver-header__texts">
          <div className="bb-trip-driver-header__top-row">
            <h2 className="bb-trip-driver-header__driver">
              {driverName}
            </h2>

            <TripStatusBadge
              size="sm"
              status={status}
            />
          </div>

          {vehicleName && (
            <div className="bb-trip-driver-header__vehicle">
              🚐 {vehicleName}
            </div>
          )}

          {currentTrip && (
            <div className="bb-trip-driver-header__trip">
              {currentTrip}
            </div>
          )}
        </div>
      </div>

      {rightContent && (
        <div className="bb-trip-driver-header__right">
          {rightContent}
        </div>
      )}
    </header>
  );
}