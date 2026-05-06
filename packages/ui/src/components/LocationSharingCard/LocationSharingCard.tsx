import type { ChangeEvent, HTMLAttributes } from "react";

import { Switch } from "../Switch";

import "./LocationSharingCard.css";

export interface LocationSharingCardProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "onChange"
> {
  enabled: boolean;

  title?: string;
  description?: string;

  onChange?: (enabled: boolean) => void;

  disabled?: boolean;

  error?: string;
}

export function LocationSharingCard({
  enabled,
  title = "Compartir ubicación",
  description = "Permite que la organización vea tu posición en tiempo real durante el trayecto.",
  onChange,
  disabled = false,
  error,
  className = "",
  ...props
}: LocationSharingCardProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.checked);
  };

  return (
    <div
      className={[
        "bb-location-sharing-card",
        enabled && "bb-location-sharing-card--enabled",
        disabled && "bb-location-sharing-card--disabled",
        error && "bb-location-sharing-card--error",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <div className="bb-location-sharing-card__top">
        <div className="bb-location-sharing-card__texts">
          <div className="bb-location-sharing-card__title">{title}</div>

          <div className="bb-location-sharing-card__description">
            {description}
          </div>
        </div>

        <Switch checked={enabled} disabled={disabled} onChange={handleChange} />
      </div>

      <div className="bb-location-sharing-card__bottom">
        <div className="bb-location-sharing-card__status">
          <span className="bb-location-sharing-card__status-dot" />

          <span>
            {enabled ? "Ubicación compartida" : "Ubicación desactivada"}
          </span>
        </div>

        {error && (
          <div className="bb-location-sharing-card__error">{error}</div>
        )}
      </div>
    </div>
  );
}
