import type { InputHTMLAttributes } from "react";
import "./NumberInput.css";

export interface NumberInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "onChange"> {
  value: number | "";
  onChange: (value: number | "") => void;
  min?: number;
  max?: number;
  step?: number;
}

export function NumberInput({
  value,
  onChange,
  min,
  max,
  step = 1,
  className = "",
  ...props
}: NumberInputProps) {
  const updateValue = (nextValue: number) => {
    if (typeof min === "number" && nextValue < min) return;
    if (typeof max === "number" && nextValue > max) return;

    onChange(nextValue);
  };

  const decrease = () => {
    const current = value === "" ? 0 : value;
    updateValue(current - step);
  };

  const increase = () => {
    const current = value === "" ? 0 : value;
    updateValue(current + step);
  };

  return (
    <div className={`bb-number-input ${className}`}>
      <button
        type="button"
        className="bb-number-input__button"
        onClick={decrease}
        aria-label="Reducir"
      >
        −
      </button>

      <input
        className="bb-number-input__field"
        type="number"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(event) => {
          const nextValue = event.target.value;

          if (nextValue === "") {
            onChange("");
            return;
          }

          onChange(Number(nextValue));
        }}
        {...props}
      />

      <button
        type="button"
        className="bb-number-input__button"
        onClick={increase}
        aria-label="Aumentar"
      >
        +
      </button>
    </div>
  );
}