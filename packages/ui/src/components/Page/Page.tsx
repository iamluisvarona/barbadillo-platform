import type { HTMLAttributes, ReactNode } from "react";
import "./Page.css";

export type PageProps = HTMLAttributes<HTMLElement> & {
  children?: ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
};

export function Page({
  children,
  maxWidth = "lg",
  className = "",
  ...props
}: PageProps) {
  return (
    <main
      className={["bb-page", `bb-page--${maxWidth}`, className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </main>
  );
}

export type PageHeaderProps = HTMLAttributes<HTMLDivElement> & {
  title: ReactNode;
  description?: ReactNode;
  eyebrow?: ReactNode;
  actions?: ReactNode;
};

export function PageHeader({
  title,
  description,
  eyebrow,
  actions,
  className = "",
  ...props
}: PageHeaderProps) {
  return (
    <header
      className={["bb-page-header", className].filter(Boolean).join(" ")}
      {...props}
    >
      <div className="bb-page-header__content">
        {eyebrow ? (
          <div className="bb-page-header__eyebrow">{eyebrow}</div>
        ) : null}
        <h1 className="bb-page-header__title">{title}</h1>
        {description ? (
          <p className="bb-page-header__description">{description}</p>
        ) : null}
      </div>

      {actions ? (
        <div className="bb-page-header__actions">{actions}</div>
      ) : null}
    </header>
  );
}
