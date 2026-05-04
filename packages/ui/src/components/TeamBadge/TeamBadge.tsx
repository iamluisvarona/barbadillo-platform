import type { HTMLAttributes, ReactNode } from "react";
import { TeamLogo } from "./TeamLogo";
import "./TeamBadge.css";

export interface TeamBadgeProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  name: string;
  logoSrc?: string | null;
  category?: ReactNode;
  size?: "sm" | "md";
}

export function TeamBadge({
  name,
  logoSrc,
  category,
  size = "md",
  className = "",
  ...props
}: TeamBadgeProps) {
  return (
    <div
      className={`bb-team-badge bb-team-badge--${size} ${className}`}
      {...props}
    >
      <TeamLogo src={logoSrc} name={name} size={size === "sm" ? "sm" : "md"} />

      <div className="bb-team-badge__content">
        <span className="bb-team-badge__name">{name}</span>
        {category ? (
          <span className="bb-team-badge__category">{category}</span>
        ) : null}
      </div>
    </div>
  );
}
