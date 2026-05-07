import type { HTMLAttributes, ReactNode } from "react";

import "./CollapsibleDataList.css";

export interface CollapsibleDataListItem {
  id: string;
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  meta?: ReactNode;
  status?: ReactNode;
  content?: ReactNode;
  actions?: ReactNode;
  defaultOpen?: boolean;
}

export interface CollapsibleDataListProps extends HTMLAttributes<HTMLDivElement> {
  items: readonly CollapsibleDataListItem[];
  emptyState?: ReactNode;
}

export function CollapsibleDataList({
  items,
  emptyState,
  className = "",
  ...props
}: CollapsibleDataListProps) {
  const classes = ["bb-collapsible-data-list", className]
    .filter(Boolean)
    .join(" ");

  if (items.length === 0) {
    return (
      <div className={classes} {...props}>
        {emptyState ?? (
          <div className="bb-collapsible-data-list__empty">
            No hay datos disponibles.
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={classes} {...props}>
      {items.map((item) => (
        <details
          key={item.id}
          className="bb-collapsible-data-list__item"
          open={item.defaultOpen}
        >
          <summary className="bb-collapsible-data-list__summary">
            <div className="bb-collapsible-data-list__main">
              {item.eyebrow ? (
                <span className="bb-collapsible-data-list__eyebrow">
                  {item.eyebrow}
                </span>
              ) : null}

              <div className="bb-collapsible-data-list__title">
                {item.title}
              </div>

              {item.description ? (
                <span className="bb-collapsible-data-list__description">
                  {item.description}
                </span>
              ) : null}

              {item.meta ? (
                <div className="bb-collapsible-data-list__meta">
                  {item.meta}
                </div>
              ) : null}
            </div>

            <div className="bb-collapsible-data-list__side">
              {item.status ? (
                <div className="bb-collapsible-data-list__status">
                  {item.status}
                </div>
              ) : null}

              <span className="bb-collapsible-data-list__chevron">›</span>
            </div>
          </summary>

          {(item.content || item.actions) && (
            <div className="bb-collapsible-data-list__body">
              {item.content ? (
                <div className="bb-collapsible-data-list__content">
                  {item.content}
                </div>
              ) : null}

              {item.actions ? (
                <div className="bb-collapsible-data-list__actions">
                  {item.actions}
                </div>
              ) : null}
            </div>
          )}
        </details>
      ))}
    </div>
  );
}
