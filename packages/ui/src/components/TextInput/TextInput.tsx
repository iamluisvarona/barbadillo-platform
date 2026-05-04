import type { InputHTMLAttributes, ReactNode } from "react";
import "./TextInput.css";

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: ReactNode;
  error?: ReactNode;
  fullWidth?: boolean;
};

export function TextInput({
  label,
  helperText,
  error,
  fullWidth = true,
  id,
  className = "",
  ...props
}: TextInputProps) {
  const inputId = id ?? props.name;

  return (
    <label
      className={[
        "bb-text-input-field",
        fullWidth ? "bb-text-input-field--full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      htmlFor={inputId}
    >
      {label ? <span className="bb-text-input-label">{label}</span> : null}

      <input
        id={inputId}
        className={["bb-text-input", error ? "bb-text-input--error" : ""]
          .filter(Boolean)
          .join(" ")}
        aria-invalid={Boolean(error)}
        {...props}
      />

      {error ? (
        <span className="bb-text-input-error">{error}</span>
      ) : helperText ? (
        <span className="bb-text-input-helper">{helperText}</span>
      ) : null}
    </label>
  );
}
