import type { HTMLAttributes, ReactNode } from "react";
import "./MobileList.css";

export interface MobileListProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export function MobileList({
  children,
  className = "",
  ...props
}: MobileListProps) {
  return (
    <div className={`bb-mobile-list ${className}`} {...props}>
      {children}
    </div>
  );
}

export interface ListItemProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  title: ReactNode;
  description?: ReactNode;
  meta?: ReactNode;
  leading?: ReactNode;
  trailing?: ReactNode;
  footer?: ReactNode;
  interactive?: boolean;
}

export function ListItem({
  title,
  description,
  meta,
  leading,
  trailing,
  footer,
  interactive = false,
  className = "",
  ...props
}: ListItemProps) {
  return (
    <div
      className={`bb-list-item ${
        interactive ? "bb-list-item--interactive" : ""
      } ${className}`}
      {...props}
    >
      {leading ? <div className="bb-list-item__leading">{leading}</div> : null}

      <div className="bb-list-item__content">
        <div className="bb-list-item__header">
          <div>
            {meta ? <div className="bb-list-item__meta">{meta}</div> : null}
            <div className="bb-list-item__title">{title}</div>
          </div>

          {trailing ? (
            <div className="bb-list-item__trailing">{trailing}</div>
          ) : null}
        </div>

        {description ? (
          <div className="bb-list-item__description">{description}</div>
        ) : null}

        {footer ? <div className="bb-list-item__footer">{footer}</div> : null}
      </div>
    </div>
  );
}
