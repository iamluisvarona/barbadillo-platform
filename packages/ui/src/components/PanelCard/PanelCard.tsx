import type { HTMLAttributes, ReactNode } from "react";

import { Card } from "../Card";

import "./PanelCard.css";

export interface PanelCardProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  title?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
  variant?: "default" | "highlighted" | "live";
}

export function PanelCard({
  title,
  description,
  actions,
  footer,
  children,
  variant = "default",
  className = "",
  ...props
}: PanelCardProps) {
  return (
    <Card
      className={["bb-panel-card", `bb-panel-card--${variant}`, className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {(title || description || actions) && (
        <div className="bb-panel-card__header">
          {(title || description) && (
            <div className="bb-panel-card__heading">
              {title && <h2 className="bb-panel-card__title">{title}</h2>}

              {description && (
                <p className="bb-panel-card__description">{description}</p>
              )}
            </div>
          )}

          {actions && <div className="bb-panel-card__actions">{actions}</div>}
        </div>
      )}

      <div className="bb-panel-card__content">{children}</div>

      {footer && <div className="bb-panel-card__footer">{footer}</div>}
    </Card>
  );
}
