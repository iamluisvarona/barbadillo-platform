import type { HTMLAttributes, ReactNode } from "react";
import "./Section.css";

export type SectionProps = HTMLAttributes<HTMLElement> & {
  children?: ReactNode;
};

export function Section({ children, className = "", ...props }: SectionProps) {
  return (
    <section
      className={["bb-section", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </section>
  );
}

export type SectionHeaderProps = HTMLAttributes<HTMLDivElement> & {
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
};

export function SectionHeader({
  title,
  description,
  actions,
  className = "",
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={["bb-section-header", className].filter(Boolean).join(" ")}
      {...props}
    >
      <div className="bb-section-header__content">
        <h2 className="bb-section-header__title">{title}</h2>

        {description ? (
          <p className="bb-section-header__description">{description}</p>
        ) : null}
      </div>

      {actions ? (
        <div className="bb-section-header__actions">{actions}</div>
      ) : null}
    </div>
  );
}
