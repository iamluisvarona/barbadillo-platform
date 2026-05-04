import type { ReactNode, SelectHTMLAttributes } from "react";
import "./Select.css";

export type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  helperText?: ReactNode;
  error?: ReactNode;
  options: SelectOption[];
  placeholder?: string;
  fullWidth?: boolean;
};

export function Select({
  label,
  helperText,
  error,
  options,
  placeholder,
  fullWidth = true,
  id,
  className = "",
  ...props
}: SelectProps) {
  const selectId = id ?? props.name;

  return (
    <label
      className={[
        "bb-select-field",
        fullWidth ? "bb-select-field--full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      htmlFor={selectId}
    >
      {label ? <span className="bb-select-label">{label}</span> : null}

      <select
        id={selectId}
        className={["bb-select", error ? "bb-select--error" : ""]
          .filter(Boolean)
          .join(" ")}
        aria-invalid={Boolean(error)}
        {...props}
      >
        {placeholder ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>

      {error ? (
        <span className="bb-select-error">{error}</span>
      ) : helperText ? (
        <span className="bb-select-helper">{helperText}</span>
      ) : null}
    </label>
  );
}
