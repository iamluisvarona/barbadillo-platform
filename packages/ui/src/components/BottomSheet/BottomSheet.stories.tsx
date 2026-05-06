import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Button } from "../Button";
import { Stack } from "../Stack";
import { TripInfoRow } from "../TripInfoRow";
import { BottomSheet } from "./BottomSheet";

function Demo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Abrir bottom sheet</Button>

      <BottomSheet
        open={open}
        title="Detalle del trayecto"
        description="Información rápida para el conductor"
        onClose={() => setOpen(false)}
        footer={<Button onClick={() => setOpen(false)}>Confirmar</Button>}
      >
        <Stack gap={3}>
          <TripInfoRow
            icon="📍"
            label="Origen"
            value="Hotel Tres Cantos"
            tone="primary"
          />

          <TripInfoRow
            icon="🏁"
            label="Destino"
            value="Pabellón La Luz"
            tone="success"
          />

          <TripInfoRow
            icon="👥"
            label="Pasajeros"
            value="15 personas"
            tone="info"
          />
        </Stack>
      </BottomSheet>
    </>
  );
}

const meta: Meta<typeof BottomSheet> = {
  title: "Components/BottomSheet",
  component: BottomSheet,
};

export default meta;

type Story = StoryObj<typeof BottomSheet>;

export const Default: Story = {
  render: () => <Demo />,
};
