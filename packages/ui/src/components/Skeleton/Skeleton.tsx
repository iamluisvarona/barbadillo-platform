import type { HTMLAttributes } from "react";
import "./Skeleton.css";

export type SkeletonVariant = "text" | "title" | "circle" | "rect" | "card";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: SkeletonVariant;
  width?: string | number;
  height?: string | number;
  animated?: boolean;
}

export function Skeleton({
  variant = "text",
  width,
  height,
  animated = true,
  className = "",
  style,
  ...props
}: SkeletonProps) {
  return (
    <div
      className={`bb-skeleton bb-skeleton--${variant} ${
        animated ? "bb-skeleton--animated" : ""
      } ${className}`}
      style={{
        width,
        height,
        ...style,
      }}
      aria-hidden="true"
      {...props}
    />
  );
}