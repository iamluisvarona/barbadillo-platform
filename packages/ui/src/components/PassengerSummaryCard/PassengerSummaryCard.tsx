import type { HTMLAttributes, ReactNode } from "react";

import "./PassengerSummaryCard.css";

export interface PassengerSummaryCardProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  teamName: string;

  teamCategory?: string;

  teamLogoSrc?: string;

  passengerCount: number;

  label?: string;

  actions?: ReactNode;
}

export function PassengerSummaryCard({
  teamName,
  teamCategory,
  teamLogoSrc,
  passengerCount,
  label = "personas",
  actions,
  className = "",
  ...props
}: PassengerSummaryCardProps) {
  return (
    <div
      className={["bb-passenger-summary-card", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <div className="bb-passenger-summary-card__left">
        <div className="bb-passenger-summary-card__logo-wrapper">
          {teamLogoSrc ? (
            <img
              src={teamLogoSrc}
              alt={teamName}
              className="bb-passenger-summary-card__logo"
            />
          ) : (
            <div className="bb-passenger-summary-card__logo-placeholder">
              🏀
            </div>
          )}
        </div>

        <div className="bb-passenger-summary-card__texts">
          <div className="bb-passenger-summary-card__team">{teamName}</div>

          {teamCategory && (
            <div className="bb-passenger-summary-card__category">
              {teamCategory}
            </div>
          )}
        </div>
      </div>

      <div className="bb-passenger-summary-card__right">
        <div className="bb-passenger-summary-card__count">{passengerCount}</div>

        <div className="bb-passenger-summary-card__label">{label}</div>

        {actions && (
          <div className="bb-passenger-summary-card__actions">{actions}</div>
        )}
      </div>
    </div>
  );
}
