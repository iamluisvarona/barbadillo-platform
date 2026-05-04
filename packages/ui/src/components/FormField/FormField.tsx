import type { HTMLAttributes, ReactNode } from "react";
import "./FormField.css";

export type FormFieldProps = HTMLAttributes<HTMLDivElement> & {
  label?: ReactNode;
  helperText?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  fullWidth?: boolean;
  children?: ReactNode;
};

export function FormField({
  label,
  helperText,
  error,
  required = false,
  fullWidth = true,
  children,
  className = "",
  ...props
}: FormFieldProps) {
  return (
    <div
      className={[
        "bb-form-field",
        fullWidth ? "bb-form-field--full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {label ? (
        <div className="bb-form-field__label">
          {label}
          {required ? <span className="bb-form-field__required">*</span> : null}
        </div>
      ) : null}

      {children}

      {error ? (
        <div className="bb-form-field__error">{error}</div>
      ) : helperText ? (
        <div className="bb-form-field__helper">{helperText}</div>
      ) : null}
    </div>
  );
}