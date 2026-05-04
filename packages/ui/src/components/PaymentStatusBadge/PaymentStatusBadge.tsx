import type { HTMLAttributes } from "react";
import { StatusBadge, type StatusVariant } from "../StatusBadge";
import "./PaymentStatusBadge.css";

export type PaymentStatus =
  | "paid"
  | "partial"
  | "pending"
  | "overdue"
  | "cancelled";

export interface PaymentStatusBadgeProps extends Omit<
  HTMLAttributes<HTMLSpanElement>,
  "children"
> {
  status: PaymentStatus;
}

const paymentStatusConfig: Record<
  PaymentStatus,
  {
    label: string;
    variant: StatusVariant;
  }
> = {
  paid: {
    label: "Pagado",
    variant: "success",
  },
  partial: {
    label: "Parcial",
    variant: "warning",
  },
  pending: {
    label: "Pendiente",
    variant: "info",
  },
  overdue: {
    label: "Vencido",
    variant: "danger",
  },
  cancelled: {
    label: "Cancelado",
    variant: "info",
  },
};

export function PaymentStatusBadge({
  status,
  className = "",
  ...props
}: PaymentStatusBadgeProps) {
  const config = paymentStatusConfig[status];

  return (
    <span className={`bb-payment-status-badge ${className}`} {...props}>
      <StatusBadge variant={config.variant}>{config.label}</StatusBadge>
    </span>
  );
}
