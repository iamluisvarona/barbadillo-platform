import { useEffect, type HTMLAttributes, type ReactNode } from "react";
import "./Drawer.css";

export interface DrawerProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  children?: ReactNode;
  position?: "bottom" | "right" | "left";
}

export function Drawer({
  open,
  onClose,
  title,
  children,
  position = "bottom",
  className = "",
  ...props
}: DrawerProps) {
  useEffect(() => {
    if (!open) return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className={`bb-drawer__overlay bb-drawer__overlay--${position}`}
      onClick={onClose}
    >
      <div
        className={`bb-drawer bb-drawer--${position} ${className}`}
        onClick={(event) => event.stopPropagation()}
        {...props}
      >
        {title ? (
          <div className="bb-drawer__header">
            <div className="bb-drawer__title">{title}</div>
            <button
              type="button"
              className="bb-drawer__close"
              onClick={onClose}
              aria-label="Cerrar"
            />
          </div>
        ) : null}

        <div className="bb-drawer__content">{children}</div>
      </div>
    </div>
  );
}
