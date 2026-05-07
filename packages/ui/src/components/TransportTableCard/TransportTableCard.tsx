import type { HTMLAttributes, ReactNode } from "react";

import "./TransportTableCard.css";

export interface TransportTableCardProps extends HTMLAttributes<HTMLDivElement> {
  filters?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
}

export function TransportTableCard({
  filters,
  footer,
  children,
  className = "",
  ...props
}: TransportTableCardProps) {
  const classes = ["bb-transport-table-card", className]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={classes} {...props}>
      {filters ? (
        <div className="bb-transport-table-card__filters">{filters}</div>
      ) : null}

      <div className="bb-transport-table-card__content">{children}</div>

      {footer ? (
        <div className="bb-transport-table-card__footer">{footer}</div>
      ) : null}
    </section>
  );
}
