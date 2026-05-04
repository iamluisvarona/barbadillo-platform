import type { HTMLAttributes, ReactNode } from "react";
import "./TopBar.css";

export interface TopBarProps extends Omit<
  HTMLAttributes<HTMLElement>,
  "title"
> {
  left?: ReactNode;
  title?: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
}

export function TopBar({
  left,
  title,
  subtitle,
  actions,
  className = "",
  ...props
}: TopBarProps) {
  return (
    <header className={`bb-top-bar ${className}`} {...props}>
      {left ? <div className="bb-top-bar__left">{left}</div> : null}

      <div className="bb-top-bar__content">
        {title ? <div className="bb-top-bar__title">{title}</div> : null}
        {subtitle ? (
          <div className="bb-top-bar__subtitle">{subtitle}</div>
        ) : null}
      </div>

      {actions ? <div className="bb-top-bar__actions">{actions}</div> : null}
    </header>
  );
}
