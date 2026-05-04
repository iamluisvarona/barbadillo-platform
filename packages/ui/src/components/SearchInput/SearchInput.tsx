import type { InputHTMLAttributes } from "react";
import "./SearchInput.css";

export interface SearchInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "onChange"
> {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  clearable?: boolean;
}

export function SearchInput({
  value,
  onChange,
  placeholder = "Buscar...",
  clearable = true,
  className = "",
  ...props
}: SearchInputProps) {
  return (
    <div className={`bb-search-input ${className}`}>
      <span className="bb-search-input__icon" />

      <input
        className="bb-search-input__field"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        {...props}
      />

      {clearable && value ? (
        <button
          type="button"
          className="bb-search-input__clear"
          onClick={() => onChange("")}
          aria-label="Limpiar búsqueda"
        />
      ) : null}
    </div>
  );
}
