import type { HTMLAttributes } from "react";
import "./MoneyAmount.css";

export type MoneyAmountTone =
  | "default"
  | "success"
  | "danger"
  | "warning"
  | "muted";

export interface MoneyAmountProps extends Omit<
  HTMLAttributes<HTMLSpanElement>,
  "children"
> {
  value: number;
  currency?: string;
  locale?: string;
  tone?: MoneyAmountTone;
}

export function MoneyAmount({
  value,
  currency = "EUR",
  locale = "es-ES",
  tone = "default",
  className = "",
  ...props
}: MoneyAmountProps) {
  const formatted = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(value);

  return (
    <span
      className={`bb-money-amount bb-money-amount--${tone} ${className}`}
      {...props}
    >
      {formatted}
    </span>
  );
}
