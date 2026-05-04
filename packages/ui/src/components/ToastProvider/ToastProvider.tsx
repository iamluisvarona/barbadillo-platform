import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { Toast, type ToastVariant } from "../Toast";
import { ToastViewport, type ToastViewportPosition } from "../ToastViewport";

export type ToastItem = {
  id: string;
  title?: ReactNode;
  description?: ReactNode;
  variant?: ToastVariant;
  duration?: number;
};

export type ToastInput = Omit<ToastItem, "id">;

export type ToastContextValue = {
  showToast: (toast: ToastInput) => void;
  success: (toast: Omit<ToastInput, "variant">) => void;
  error: (toast: Omit<ToastInput, "variant">) => void;
  warning: (toast: Omit<ToastInput, "variant">) => void;
  info: (toast: Omit<ToastInput, "variant">) => void;
  clearToasts: () => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export type ToastProviderProps = {
  children?: ReactNode;
  position?: ToastViewportPosition;
};

function createToastId() {
  return `toast-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function ToastProvider({
  children,
  position = "bottom-center",
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback((toast: ToastInput) => {
    const id = createToastId();

    setToasts((current) => [
      ...current,
      {
        id,
        ...toast,
      },
    ]);
  }, []);

  const clearToasts = useCallback(() => {
    setToasts([]);
  }, []);

  const value = useMemo<ToastContextValue>(
    () => ({
      showToast,
      success: (toast) => showToast({ ...toast, variant: "success" }),
      error: (toast) => showToast({ ...toast, variant: "danger" }),
      warning: (toast) => showToast({ ...toast, variant: "warning" }),
      info: (toast) => showToast({ ...toast, variant: "info" }),
      clearToasts,
    }),
    [showToast, clearToasts],
  );

  return (
    <ToastContext.Provider value={value}>
      {children}

      <ToastViewport position={position}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            title={toast.title}
            description={toast.description}
            variant={toast.variant}
            duration={toast.duration}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </ToastViewport>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used inside ToastProvider");
  }

  return context;
}
