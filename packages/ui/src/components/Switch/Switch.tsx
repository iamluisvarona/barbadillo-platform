import type { InputHTMLAttributes, ReactNode } from "react";
import "./Switch.css";

export type SwitchProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  label?: ReactNode;
  helperText?: ReactNode;
  error?: ReactNode;
};

export function Switch({
  label,
  helperText,
  error,
  className = "",
  id,
  ...props
}: SwitchProps) {
  const switchId = id ?? props.name;

  return (
    <label
      className={[
        "bb-switch-field",
        error ? "bb-switch-field--error" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      htmlFor={switchId}
    >
      <span className="bb-switch-content">
        {label ? <span className="bb-switch-label">{label}</span> : null}

        {error ? (
          <span className="bb-switch-error">{error}</span>
        ) : helperText ? (
          <span className="bb-switch-helper">{helperText}</span>
        ) : null}
      </span>

      <span className="bb-switch-control">
        <input
          id={switchId}
          className="bb-switch-input"
          type="checkbox"
          role="switch"
          aria-invalid={Boolean(error)}
          {...props}
        />
        <span className="bb-switch-track" aria-hidden="true">
          <span className="bb-switch-thumb" />
        </span>
      </span>
    </label>
  );
}
