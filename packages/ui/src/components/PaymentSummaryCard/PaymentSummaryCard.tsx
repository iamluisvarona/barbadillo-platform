import type { HTMLAttributes, ReactNode } from "react";
import { Card } from "../Card";
import { MoneyAmount } from "../MoneyAmount";
import { PaymentStatusBadge, type PaymentStatus } from "../PaymentStatusBadge";
import { Stack } from "../Stack";
import { Text } from "../Typography";
import "./PaymentSummaryCard.css";

export interface PaymentSummaryCardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title: ReactNode;
  total: number;
  paid: number;
  pending: number;
  status: PaymentStatus;
  footer?: ReactNode;
}

export function PaymentSummaryCard({
  title,
  total,
  paid,
  pending,
  status,
  footer,
  className = "",
  ...props
}: PaymentSummaryCardProps) {
  return (
    <Card className={`bb-payment-summary-card ${className}`} {...props}>
      <Stack gap={4}>
        <div className="bb-payment-summary-card__header">
          <div>
            <Text tone="muted">Resumen económico</Text>
            <div className="bb-payment-summary-card__title">{title}</div>
          </div>

          <PaymentStatusBadge status={status} />
        </div>

        <div className="bb-payment-summary-card__grid">
          <div className="bb-payment-summary-card__item">
            <Text tone="muted">Total</Text>
            <MoneyAmount value={total} />
          </div>

          <div className="bb-payment-summary-card__item">
            <Text tone="muted">Pagado</Text>
            <MoneyAmount value={paid} tone="success" />
          </div>

          <div className="bb-payment-summary-card__item">
            <Text tone="muted">Pendiente</Text>
            <MoneyAmount
              value={pending}
              tone={pending > 0 ? "danger" : "muted"}
            />
          </div>
        </div>

        {footer ? (
          <div className="bb-payment-summary-card__footer">{footer}</div>
        ) : null}
      </Stack>
    </Card>
  );
}