import type { HTMLAttributes, ReactNode } from "react";

import { Button } from "../Button";

import "./TripActionPanel.css";

export interface TripActionPanelProps extends HTMLAttributes<HTMLDivElement> {
  primaryLabel: string;
  onPrimaryClick: () => void;

  primaryIcon?: ReactNode;

  secondaryLabel?: string;
  onSecondaryClick?: () => void;

  dangerLabel?: string;
  onDangerClick?: () => void;

  sticky?: boolean;
}

export function TripActionPanel({
  primaryLabel,
  onPrimaryClick,
  primaryIcon,
  secondaryLabel,
  onSecondaryClick,
  dangerLabel,
  onDangerClick,
  sticky = false,
  className = "",
  ...props
}: TripActionPanelProps) {
  return (
    <div
      className={[
        "bb-trip-action-panel",
        sticky && "bb-trip-action-panel--sticky",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <Button
        className="bb-trip-action-panel__primary"
        onClick={onPrimaryClick}
      >
        {primaryIcon && (
          <span className="bb-trip-action-panel__icon">{primaryIcon}</span>
        )}

        {primaryLabel}
      </Button>

      {(secondaryLabel || dangerLabel) && (
        <div className="bb-trip-action-panel__secondary-row">
          {secondaryLabel && (
            <Button variant="secondary" onClick={onSecondaryClick}>
              {secondaryLabel}
            </Button>
          )}

          {dangerLabel && (
            <Button variant="danger" onClick={onDangerClick}>
              {dangerLabel}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
