import type { HTMLAttributes, ReactNode } from "react";
import "./Card.css";

export type CardVariant = "default" | "highlight" | "danger" | "success";
export type CardPadding = "none" | "sm" | "md" | "lg";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  interactive?: boolean;
};

export function Card({
  children,
  variant = "default",
  padding = "md",
  interactive = false,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={[
        "bb-card",
        `bb-card--${variant}`,
        `bb-card--padding-${padding}`,
        interactive ? "bb-card--interactive" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
