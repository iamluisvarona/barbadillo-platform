import type { ReactNode } from "react";
import { Alert, type AlertVariant } from "../Alert";
import { Button, type ButtonVariant } from "../Button";
import { Modal } from "../Modal";
import { Stack } from "../Stack";
import { Text } from "../Typography";

export type ConfirmDialogVariant = "info" | "success" | "warning" | "danger";

export type ConfirmDialogProps = {
  open: boolean;
  title: ReactNode;
  description?: ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: ConfirmDialogVariant;
  loading?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

const confirmButtonVariantByDialogVariant: Record<
  ConfirmDialogVariant,
  ButtonVariant
> = {
  info: "primary",
  success: "success",
  warning: "warning",
  danger: "danger",
};

const alertVariantByDialogVariant: Record<ConfirmDialogVariant, AlertVariant> =
  {
    info: "info",
    success: "success",
    warning: "warning",
    danger: "danger",
  };

export function ConfirmDialog({
  open,
  title,
  description,
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
  variant = "warning",
  loading = false,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  return (
    <Modal
      open={open}
      title={title}
      size="sm"
      onClose={onCancel}
      footer={
        <>
          <Button variant="secondary" onClick={onCancel} disabled={loading}>
            {cancelLabel}
          </Button>

          <Button
            variant={confirmButtonVariantByDialogVariant[variant]}
            onClick={onConfirm}
            loading={loading}
          >
            {confirmLabel}
          </Button>
        </>
      }
    >
      <Stack gap={4}>
        {description ? (
          <Alert variant={alertVariantByDialogVariant[variant]}>
            {description}
          </Alert>
        ) : null}

        {variant === "danger" ? (
          <Text size="sm" tone="muted">
            Esta acción puede afectar a datos del torneo. Revísalo antes de
            continuar.
          </Text>
        ) : null}
      </Stack>
    </Modal>
  );
}
