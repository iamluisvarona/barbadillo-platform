import type { ReactNode, TextareaHTMLAttributes } from "react";
import "./Textarea.css";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  helperText?: ReactNode;
  error?: ReactNode;
  fullWidth?: boolean;
};

export function Textarea({
  label,
  helperText,
  error,
  fullWidth = true,
  id,
  className = "",
  rows = 4,
  ...props
}: TextareaProps) {
  const textareaId = id ?? props.name;

  return (
    <label
      className={[
        "bb-textarea-field",
        fullWidth ? "bb-textarea-field--full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      htmlFor={textareaId}
    >
      {label ? <span className="bb-textarea-label">{label}</span> : null}

      <textarea
        id={textareaId}
        rows={rows}
        className={["bb-textarea", error ? "bb-textarea--error" : ""]
          .filter(Boolean)
          .join(" ")}
        aria-invalid={Boolean(error)}
        {...props}
      />

      {error ? (
        <span className="bb-textarea-error">{error}</span>
      ) : helperText ? (
        <span className="bb-textarea-helper">{helperText}</span>
      ) : null}
    </label>
  );
}
