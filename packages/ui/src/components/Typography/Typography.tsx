import type { HTMLAttributes, ReactNode } from "react";
import "./Typography.css";

export type HeadingLevel = 1 | 2 | 3 | 4;
export type TextTone =
  | "default"
  | "muted"
  | "soft"
  | "primary"
  | "success"
  | "danger"
  | "warning";

type BaseTypographyProps = HTMLAttributes<HTMLElement> & {
  children?: ReactNode;
  tone?: TextTone;
};

export type HeadingProps = BaseTypographyProps & {
  level?: HeadingLevel;
};

export type TextProps = BaseTypographyProps & {
  size?: "sm" | "md" | "lg";
};

export function Heading({
  children,
  level = 2,
  tone = "default",
  className = "",
  ...props
}: HeadingProps) {
  const Tag = `h${level}` as const;

  return (
    <Tag
      className={[
        "bb-heading",
        `bb-text--${tone}`,
        `bb-heading--${level}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function Text({
  children,
  tone = "default",
  size = "md",
  className = "",
  ...props
}: TextProps) {
  return (
    <p
      className={["bb-text", `bb-text--${tone}`, `bb-text--${size}`, className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </p>
  );
}

export function Caption({
  children,
  tone = "muted",
  className = "",
  ...props
}: BaseTypographyProps) {
  return (
    <span
      className={["bb-caption", `bb-text--${tone}`, className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </span>
  );
}
