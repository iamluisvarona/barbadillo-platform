import type { HTMLAttributes, ReactNode } from "react";

import "./BottomSheet.css";

export interface BottomSheetProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  open: boolean;

  title?: ReactNode;
  description?: ReactNode;

  children: ReactNode;

  footer?: ReactNode;

  onClose?: () => void;

  showHandle?: boolean;
  showCloseButton?: boolean;
}

export function BottomSheet({
  open,
  title,
  description,
  children,
  footer,
  onClose,
  showHandle = true,
  showCloseButton = true,
  className = "",
  ...props
}: BottomSheetProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="bb-bottom-sheet__backdrop" role="presentation">
      <section
        className={["bb-bottom-sheet", className].filter(Boolean).join(" ")}
        role="dialog"
        aria-modal="true"
        {...props}
      >
        {showHandle && <div className="bb-bottom-sheet__handle" />}

        {(title || description || showCloseButton) && (
          <div className="bb-bottom-sheet__header">
            <div className="bb-bottom-sheet__texts">
              {title && <h2 className="bb-bottom-sheet__title">{title}</h2>}

              {description && (
                <p className="bb-bottom-sheet__description">{description}</p>
              )}
            </div>

            {showCloseButton && (
              <button
                type="button"
                className="bb-bottom-sheet__close"
                aria-label="Cerrar"
                onClick={onClose}
              />
            )}
          </div>
        )}

        <div className="bb-bottom-sheet__content">{children}</div>

        {footer && <div className="bb-bottom-sheet__footer">{footer}</div>}
      </section>
    </div>
  );
}
