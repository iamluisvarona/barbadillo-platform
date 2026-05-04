import type { HTMLAttributes, ReactNode } from "react";
import { TeamLogo } from "../TeamBadge";
import "./AccreditationCard.css";

export interface AccreditationCardProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  name: string;
  role: string;
  teamName?: string;
  category?: string;
  number?: string | number;
  teamLogoSrc?: string | null;
  tournamentName?: ReactNode;
}

export function AccreditationCard({
  name,
  role,
  teamName,
  category,
  number,
  teamLogoSrc,
  tournamentName = "Memorial Pablo Barbadillo",
  className = "",
  ...props
}: AccreditationCardProps) {
  return (
    <div className={`bb-accreditation-card ${className}`} {...props}>
      <div className="bb-accreditation-card__top">
        <div>
          <div className="bb-accreditation-card__tournament">
            {tournamentName}
          </div>
          <div className="bb-accreditation-card__label">Acreditación</div>
        </div>

        {teamName ? (
          <TeamLogo src={teamLogoSrc} name={teamName} size="md" />
        ) : null}
      </div>

      <div className="bb-accreditation-card__body">
        <div className="bb-accreditation-card__name">{name}</div>
        <div className="bb-accreditation-card__role">{role}</div>
      </div>

      <div className="bb-accreditation-card__footer">
        {teamName ? (
          <div>
            <span>Equipo</span>
            <strong>{teamName}</strong>
          </div>
        ) : null}

        {category ? (
          <div>
            <span>Categoría</span>
            <strong>{category}</strong>
          </div>
        ) : null}

        {number != null ? (
          <div>
            <span>Dorsal</span>
            <strong>{number}</strong>
          </div>
        ) : null}
      </div>
    </div>
  );
}
