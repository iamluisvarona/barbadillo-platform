import { useRef } from "react";
import type { ReactNode, InputHTMLAttributes } from "react";
import "./FileUpload.css";

export type FileUploadProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  label?: ReactNode;
  helperText?: ReactNode;
  error?: ReactNode;
  buttonText?: string;
};

export function FileUpload({
  label,
  helperText,
  error,
  buttonText = "Seleccionar archivo",
  id,
  className = "",
  ...props
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputId = id ?? props.name;

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div
      className={[
        "bb-file-upload",
        error ? "bb-file-upload--error" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {label ? <div className="bb-file-upload__label">{label}</div> : null}

      <input
        ref={inputRef}
        id={inputId}
        type="file"
        className="bb-file-upload__input"
        {...props}
      />

      <button
        type="button"
        className="bb-file-upload__button"
        onClick={handleClick}
      >
        {buttonText}
      </button>

      {error ? (
        <div className="bb-file-upload__error">{error}</div>
      ) : helperText ? (
        <div className="bb-file-upload__helper">{helperText}</div>
      ) : null}
    </div>
  );
}
