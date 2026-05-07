import type { ButtonHTMLAttributes, ReactNode } from "react";

import "./TableRowActions.css";

export interface TableRowAction {
  id: string;
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export interface TableRowActionsProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick"
> {
  label?: string;
  actions?: readonly TableRowAction[];
  onActionClick?: (actionId: string) => void;
}

export function TableRowActions({
  label = "Más acciones",
  actions,
  onActionClick,
  className = "",
  ...props
}: TableRowActionsProps) {
  const classes = ["bb-table-row-actions", className].filter(Boolean).join(" ");

  const handleClick = () => {
    const firstAction = actions?.find((action) => !action.disabled);

    if (firstAction) {
      firstAction.onClick?.();
      onActionClick?.(firstAction.id);
    }
  };

  return (
    <button
      type="button"
      className={classes}
      aria-label={label}
      onClick={handleClick}
      {...props}
    >
      <span className="bb-table-row-actions__dot" />
      <span className="bb-table-row-actions__dot" />
      <span className="bb-table-row-actions__dot" />
    </button>
  );
}
