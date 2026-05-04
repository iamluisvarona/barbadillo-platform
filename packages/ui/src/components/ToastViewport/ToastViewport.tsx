import type { HTMLAttributes, ReactNode } from "react";
import "./ToastViewport.css";

export type ToastViewportPosition =
  | "top-right"
  | "top-center"
  | "bottom-right"
  | "bottom-center";

export type ToastViewportProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  position?: ToastViewportPosition;
};

export function ToastViewport({
  children,
  position = "bottom-center",
  className = "",
  ...props
}: ToastViewportProps) {
  return (
    <div
      className={[
        "bb-toast-viewport",
        `bb-toast-viewport--${position}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
