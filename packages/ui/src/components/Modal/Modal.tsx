import type { ReactNode } from "react";
import "./Modal.css";

export type ModalSize = "sm" | "md" | "lg";

export type ModalProps = {
  open: boolean;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  size?: ModalSize;
  closeLabel?: string;
  onClose: () => void;
};

export function Modal({
  open,
  title,
  description,
  children,
  footer,
  size = "md",
  closeLabel = "Cerrar",
  onClose,
}: ModalProps) {
  if (!open) return null;

  return (
    <div className="bb-modal-root" role="presentation">
      <div className="bb-modal-backdrop" onClick={onClose} />

      <div
        className={["bb-modal", `bb-modal--${size}`].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "bb-modal-title" : undefined}
      >
        <div className="bb-modal__header">
          <div className="bb-modal__heading">
            {title ? (
              <h2 id="bb-modal-title" className="bb-modal__title">
                {title}
              </h2>
            ) : null}

            {description ? (
              <p className="bb-modal__description">{description}</p>
            ) : null}
          </div>

          <button
            type="button"
            className="bb-modal__close"
            aria-label={closeLabel}
            onClick={onClose}
          >
            <span className="bb-modal__close-icon" aria-hidden="true" />
          </button>
        </div>

        {children ? <div className="bb-modal__body">{children}</div> : null}

        {footer ? <div className="bb-modal__footer">{footer}</div> : null}
      </div>
    </div>
  );
}
