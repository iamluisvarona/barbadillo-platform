import type { InputHTMLAttributes, ReactNode } from "react";
import "./Checkbox.css";

export type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  label?: ReactNode;
  helperText?: ReactNode;
  error?: ReactNode;
};

export function Checkbox({
  label,
  helperText,
  error,
  className = "",
  id,
  ...props
}: CheckboxProps) {
  const checkboxId = id ?? props.name;

  return (
    <label
      className={[
        "bb-checkbox-field",
        error ? "bb-checkbox-field--error" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      htmlFor={checkboxId}
    >
      <span className="bb-checkbox-control">
        <input
          id={checkboxId}
          className="bb-checkbox-input"
          type="checkbox"
          aria-invalid={Boolean(error)}
          {...props}
        />
        <span className="bb-checkbox-box" aria-hidden="true" />
      </span>

      <span className="bb-checkbox-content">
        {label ? <span className="bb-checkbox-label">{label}</span> : null}

        {error ? (
          <span className="bb-checkbox-error">{error}</span>
        ) : helperText ? (
          <span className="bb-checkbox-helper">{helperText}</span>
        ) : null}
      </span>
    </label>
  );
}
