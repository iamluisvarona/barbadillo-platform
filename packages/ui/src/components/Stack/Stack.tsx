import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

import "./Stack.css";

export type StackDirection = "vertical" | "horizontal";
export type StackAlign = "start" | "center" | "end" | "stretch";
export type StackJustify = "start" | "center" | "end" | "between" | "around";

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  direction?: StackDirection;
  gap?: number;
  align?: StackAlign;
  justify?: StackJustify;
  full?: boolean;
}

export function Stack({
  children,
  direction = "vertical",
  gap = 4,
  align = "stretch",
  justify = "start",
  full = true,
  className = "",
  style,
  ...props
}: StackProps) {
  const classes = [
    "bb-stack",
    `bb-stack--${direction}`,
    `bb-stack--align-${align}`,
    `bb-stack--justify-${justify}`,
    full ? "bb-stack--full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      style={
        {
          "--bb-stack-gap": `var(--bb-space-${gap})`,
          ...style,
        } as CSSProperties
      }
      {...props}
    >
      {children}
    </div>
  );
}
