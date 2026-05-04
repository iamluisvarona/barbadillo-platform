import type { HTMLAttributes, ReactNode } from "react";
import { Badge, type BadgeVariant } from "../Badge";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { Caption, Heading, Text } from "../Typography";
import "./StatCard.css";

export type StatCardProps = HTMLAttributes<HTMLDivElement> & {
  label: ReactNode;
  value: ReactNode;
  description?: ReactNode;
  badge?: ReactNode;
  badgeVariant?: BadgeVariant;
  trend?: ReactNode;
  interactive?: boolean;
};

export function StatCard({
  label,
  value,
  description,
  badge,
  badgeVariant = "primary",
  trend,
  interactive = false,
  className = "",
  ...props
}: StatCardProps) {
  return (
    <Card
      className={["bb-stat-card", className].filter(Boolean).join(" ")}
      interactive={interactive}
      {...props}
    >
      <Stack gap={3}>
        <div className="bb-stat-card__top">
          <Caption tone="muted">{label}</Caption>

          {badge ? (
            <Badge variant={badgeVariant} size="sm">
              {badge}
            </Badge>
          ) : null}
        </div>

        <Heading level={2} className="bb-stat-card__value">
          {value}
        </Heading>

        {description || trend ? (
          <div className="bb-stat-card__bottom">
            {description ? (
              <Text size="sm" tone="muted">
                {description}
              </Text>
            ) : null}

            {trend ? <div className="bb-stat-card__trend">{trend}</div> : null}
          </div>
        ) : null}
      </Stack>
    </Card>
  );
}
