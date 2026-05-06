import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

import "./SegmentedControl.css";

export interface SegmentedControlOption {
  value: string;
  label: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface SegmentedControlProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "onChange"
> {
  options: SegmentedControlOption[];
  value: string;
  onChange?: (value: string) => void;
  fullWidth?: boolean;
}

interface SegmentButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

function SegmentButton({
  active = false,
  className = "",
  children,
  ...props
}: SegmentButtonProps) {
  return (
    <button
      type="button"
      className={[
        "bb-segmented-control__button",
        active && "bb-segmented-control__button--active",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}

export function SegmentedControl({
  options,
  value,
  onChange,
  fullWidth = false,
  className = "",
  ...props
}: SegmentedControlProps) {
  return (
    <div
      className={[
        "bb-segmented-control",
        fullWidth && "bb-segmented-control--full-width",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      role="tablist"
      {...props}
    >
      <div className="bb-segmented-control__inner">
        {options.map((option) => {
          const active = option.value === value;

          return (
            <SegmentButton
              key={option.value}
              active={active}
              disabled={option.disabled}
              onClick={() => !option.disabled && onChange?.(option.value)}
            >
              {option.icon && (
                <span className="bb-segmented-control__icon">
                  {option.icon}
                </span>
              )}

              <span className="bb-segmented-control__label">
                {option.label}
              </span>
            </SegmentButton>
          );
        })}
      </div>
    </div>
  );
}
