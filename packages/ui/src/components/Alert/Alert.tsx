import type { HTMLAttributes, ReactNode } from "react";
import "./Alert.css";

export type AlertVariant = "info" | "success" | "warning" | "danger";

export type AlertProps = HTMLAttributes<HTMLDivElement> & {
  title?: ReactNode;
  children?: ReactNode;
  variant?: AlertVariant;
};

export function Alert({
  title,
  children,
  variant = "info",
  className = "",
  ...props
}: AlertProps) {
  return (
    <div
      role="alert"
      className={["bb-alert", `bb-alert--${variant}`, className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <div className="bb-alert__icon" aria-hidden="true">
        {variant === "success" ? "✓" : variant === "warning" ? "!" : variant === "danger" ? "×" : "i"}
      </div>

      <div className="bb-alert__content">
        {title ? <div className="bb-alert__title">{title}</div> : null}
        {children ? <div className="bb-alert__description">{children}</div> : null}
      </div>
    </div>
  );
}