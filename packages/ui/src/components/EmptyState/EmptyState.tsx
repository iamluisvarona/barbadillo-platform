import type { HTMLAttributes, ReactNode } from "react";
import { Button } from "../Button";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { Heading, Text } from "../Typography";
import "./EmptyState.css";

export type EmptyStateProps = HTMLAttributes<HTMLDivElement> & {
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  actionLabel?: string;
  onAction?: () => void;
};

export function EmptyState({
  title,
  description,
  icon,
  actionLabel,
  onAction,
  className = "",
  ...props
}: EmptyStateProps) {
  return (
    <Card
      className={["bb-empty-state", className].filter(Boolean).join(" ")}
      {...props}
    >
      <Stack gap={4} align="center">
        {icon ? <div className="bb-empty-state__icon">{icon}</div> : null}

        <Stack gap={2} align="center">
          <Heading level={3} className="bb-empty-state__title">
            {title}
          </Heading>

          {description ? (
            <Text tone="muted" className="bb-empty-state__description">
              {description}
            </Text>
          ) : null}
        </Stack>

        {actionLabel && onAction ? (
          <Button onClick={onAction}>{actionLabel}</Button>
        ) : null}
      </Stack>
    </Card>
  );
}
