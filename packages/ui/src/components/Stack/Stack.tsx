import type { HTMLAttributes, ReactNode } from "react";
import "./Stack.css";

export type StackDirection = "vertical" | "horizontal";
export type StackAlign = "start" | "center" | "end" | "stretch";
export type StackJustify = "start" | "center" | "end" | "between" | "around";

export type StackGap = 1 | 2 | 3 | 4 | 5 | 6;

export type StackProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  direction?: StackDirection;
  gap?: StackGap;
  align?: StackAlign;
  justify?: StackJustify;
  fullWidth?: boolean;
};

export function Stack({
  children,
  direction = "vertical",
  gap = 3,
  align = "start",
  justify = "start",
  fullWidth = false,
  className = "",
  style,
  ...props
}: StackProps) {
  return (
    <div
      className={[
        "bb-stack",
        `bb-stack--${direction}`,
        `bb-stack--align-${align}`,
        `bb-stack--justify-${justify}`,
        fullWidth ? "bb-stack--full" : "",
        className,
      ]
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
