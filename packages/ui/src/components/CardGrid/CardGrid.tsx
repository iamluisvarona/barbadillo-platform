import type { HTMLAttributes, ReactNode } from "react";
import "./CardGrid.css";

export type CardGridColumns = 1 | 2 | 3 | 4 | 5;
export type CardGridGap = 2 | 3 | 4 | 5 | 6;

export type CardGridProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  columns?: CardGridColumns;
  gap?: CardGridGap;
};

export function CardGrid({
  children,
  columns = 3,
  gap = 4,
  className = "",
  style,
  ...props
}: CardGridProps) {
  return (
    <div
      className={["bb-card-grid", `bb-card-grid--cols-${columns}`, className]
        .filter(Boolean)
        .join(" ")}
      style={{
        gap: `var(--bb-space-${gap})`,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
