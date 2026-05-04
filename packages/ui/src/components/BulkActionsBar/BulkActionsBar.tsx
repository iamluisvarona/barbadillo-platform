import type { HTMLAttributes, ReactNode } from "react";
import { Button } from "../Button";
import "./BulkActionsBar.css";

export interface BulkActionsBarProps extends HTMLAttributes<HTMLDivElement> {
  selectedCount: number;
  children?: ReactNode;
  onClear?: () => void;
  clearLabel?: string;
}

export function BulkActionsBar({
  selectedCount,
  children,
  onClear,
  clearLabel = "Limpiar",
  className = "",
  ...props
}: BulkActionsBarProps) {
  if (selectedCount <= 0) return null;

  return (
    <div className={`bb-bulk-actions-bar ${className}`} {...props}>
      <div className="bb-bulk-actions-bar__count">
        {selectedCount} seleccionado{selectedCount === 1 ? "" : "s"}
      </div>

      <div className="bb-bulk-actions-bar__actions">{children}</div>

      {onClear ? (
        <Button size="sm" variant="ghost" onClick={onClear}>
          {clearLabel}
        </Button>
      ) : null}
    </div>
  );
}
