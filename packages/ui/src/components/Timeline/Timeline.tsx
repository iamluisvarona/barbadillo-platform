import type { HTMLAttributes, ReactNode } from "react";

import "./Timeline.css";

export type TimelineItemVariant =
  | "default"
  | "success"
  | "info"
  | "warning"
  | "danger";

export interface TimelineItem {
  id: string | number;
  title: ReactNode;
  description?: ReactNode;
  time?: ReactNode;
  icon?: ReactNode;
  content?: ReactNode;
  variant?: TimelineItemVariant;
}

export interface TimelineProps extends HTMLAttributes<HTMLDivElement> {
  items: TimelineItem[];
}

export function Timeline({ items, className = "", ...props }: TimelineProps) {
  return (
    <div
      className={["bb-timeline", className].filter(Boolean).join(" ")}
      {...props}
    >
      {items.map((item, index) => (
        <div
          key={item.id}
          className={[
            "bb-timeline__item",
            `bb-timeline__item--${item.variant ?? "default"}`,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <div className="bb-timeline__left">
            <div className="bb-timeline__indicator">
              {item.icon ? (
                <span className="bb-timeline__icon">{item.icon}</span>
              ) : null}
            </div>

            {index < items.length - 1 && <div className="bb-timeline__line" />}
          </div>

          <div className="bb-timeline__right">
            <div className="bb-timeline__header">
              <div className="bb-timeline__texts">
                <div className="bb-timeline__title">{item.title}</div>

                {item.description && (
                  <div className="bb-timeline__description">
                    {item.description}
                  </div>
                )}
              </div>

              {item.time && (
                <div className="bb-timeline__time">{item.time}</div>
              )}
            </div>

            {item.content && (
              <div className="bb-timeline__content">{item.content}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
