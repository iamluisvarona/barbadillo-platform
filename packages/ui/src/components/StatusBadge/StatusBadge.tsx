import { Badge, type BadgeSize } from "../Badge";

export type StatusVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info";

export type StatusBadgeProps = {
  children?: React.ReactNode;
  variant?: StatusVariant;
  size?: BadgeSize;
};

export function StatusBadge({
  children,
  variant = "default",
  size = "md",
}: StatusBadgeProps) {
  return (
    <Badge variant={variant} size={size}>
      {children}
    </Badge>
  );
}
