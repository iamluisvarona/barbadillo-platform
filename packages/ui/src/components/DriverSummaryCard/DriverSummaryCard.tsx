import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode,
} from "react";

import "./DriverSummaryCard.css";

export type DriverSummaryCardStatus =
  | "available"
  | "assigned"
  | "unavailable";

export interface DriverSummaryCardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  name: string;

  phone?: string;

  avatarSrc?: string;

  status?: DriverSummaryCardStatus;

  onCallClick?: () => void;

  actions?: ReactNode;
}

interface ActionButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

function ActionButton({
  className = "",
  children,
  ...props
}: ActionButtonProps) {
  return (
    <button
      type="button"
      className={[
        "bb-driver-summary-card__action-button",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}

const STATUS_LABELS: Record<
  DriverSummaryCardStatus,
  string
> = {
  available: "Disponible",
  assigned: "Asignado",
  unavailable: "No disponible",
};

export function DriverSummaryCard({
  name,
  phone,
  avatarSrc,
  status = "available",
  onCallClick,
  actions,
  className = "",
  ...props
}: DriverSummaryCardProps) {
  return (
    <div
      className={[
        "bb-driver-summary-card",
        `bb-driver-summary-card--${status}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <div className="bb-driver-summary-card__avatar-wrapper">
        {avatarSrc ? (
          <img
            src={avatarSrc}
            alt={name}
            className="bb-driver-summary-card__avatar"
          />
        ) : (
          <div className="bb-driver-summary-card__avatar-placeholder">
            {name.charAt(0).toUpperCase()}
          </div>
        )}

        <span className="bb-driver-summary-card__status-indicator" />
      </div>

      <div className="bb-driver-summary-card__body">
        <div className="bb-driver-summary-card__top">
          <div className="bb-driver-summary-card__texts">
            <div className="bb-driver-summary-card__name">
              {name}
            </div>

            <div className="bb-driver-summary-card__status">
              {STATUS_LABELS[status]}
            </div>
          </div>

          {phone && (
            <div className="bb-driver-summary-card__phone">
              {phone}
            </div>
          )}
        </div>

        <div className="bb-driver-summary-card__actions">
          {onCallClick && (
            <ActionButton onClick={onCallClick}>
              📞 Llamar
            </ActionButton>
          )}

          {actions}
        </div>
      </div>
    </div>
  );
}