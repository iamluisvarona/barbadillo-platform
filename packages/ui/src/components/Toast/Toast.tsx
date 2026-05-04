import { useEffect } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import "./Toast.css";

export type ToastVariant = "info" | "success" | "warning" | "danger";

export type ToastProps = Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
  title?: ReactNode;
  description?: ReactNode;
  variant?: ToastVariant;
  onClose?: () => void;
  closeLabel?: string;
  duration?: number;
};

export function Toast({
  title,
  description,
  variant = "info",
  onClose,
  closeLabel = "Cerrar",
  duration = 4000,
  className = "",
  ...props
}: ToastProps) {
  useEffect(() => {
    if (!onClose || duration <= 0) return;

    const timeout = window.setTimeout(() => {
      onClose();
    }, duration);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [duration, onClose]);

  return (
    <div
      role="status"
      className={["bb-toast", `bb-toast--${variant}`, className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <div className="bb-toast__icon" aria-hidden="true">
        {variant === "success"
          ? "✓"
          : variant === "warning"
            ? "!"
            : variant === "danger"
              ? "×"
              : "i"}
      </div>

      <div className="bb-toast__content">
        {title ? <div className="bb-toast__title">{title}</div> : null}

        {description ? (
          <div className="bb-toast__description">{description}</div>
        ) : null}
      </div>

      {onClose ? (
        <button
          type="button"
          className="bb-toast__close"
          aria-label={closeLabel}
          onClick={onClose}
        >
          <span className="bb-toast__close-icon" aria-hidden="true" />
        </button>
      ) : null}
    </div>
  );
}
