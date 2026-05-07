import {
  Button,
  FormField,
  Modal,
  Select,
  Stack,
  TextInput,
} from "@barbadillo/ui";
import { useState } from "react";

import "./CreateTripModal.css";

type CreateTripModalProps = {
  open: boolean;
  onClose: () => void;
};

const teams = ["CB Zaragoza", "EASO Basket", "Cabrini", "Ciudad de Móstoles"];
const vehicles = ["Furgoneta 1", "Furgoneta 2", "Furgoneta 3"];
const drivers = ["Luis Varona", "Carlos Ruiz", "Ana López", "Marta García"];

const teamOptions = teams.map((team) => ({ label: team, value: team }));
const vehicleOptions = vehicles.map((vehicle) => ({
  label: vehicle,
  value: vehicle,
}));
const driverOptions = drivers.map((driver) => ({
  label: driver,
  value: driver,
}));

export function CreateTripModal({ open, onClose }: CreateTripModalProps) {
  const [form, setForm] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
    team: "",
    passengers: 12 as number | "",
    vehicle: "",
    driver: "",
    notes: "",
  });

  function updateField<K extends keyof typeof form>(
    name: K,
    value: (typeof form)[K],
  ) {
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log("Nuevo trayecto", form);
    onClose();
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      size="lg"
      title="Nuevo trayecto"
      description="Crea un desplazamiento para un equipo, vehículo y conductor."
      footer={
        <div className="transport-modal__actions">
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancelar
          </Button>

          <Button type="submit" form="create-trip-form" variant="primary">
            Crear trayecto
          </Button>
        </div>
      }
    >
      <form id="create-trip-form" onSubmit={handleSubmit}>
        <Stack gap={6}>
          <div className="transport-form-grid">
            <FormField label="Origen">
              <TextInput
                value={form.from}
                onChange={(event) => updateField("from", event.target.value)}
                placeholder="Hotel Tres Cantos"
                required
              />
            </FormField>

            <FormField label="Destino">
              <TextInput
                value={form.to}
                onChange={(event) => updateField("to", event.target.value)}
                placeholder="Pabellón La Luz"
                required
              />
            </FormField>

            <FormField label="Fecha">
              <TextInput
                type="date"
                value={form.date}
                onChange={(event) => updateField("date", event.target.value)}
                required
              />
            </FormField>

            <FormField label="Hora salida">
              <TextInput
                type="time"
                value={form.time}
                onChange={(event) => updateField("time", event.target.value)}
                required
              />
            </FormField>

            <FormField label="Equipo">
              <Select
                value={form.team}
                options={teamOptions}
                placeholder="Selecciona equipo"
                onChange={(event) => updateField("team", event.target.value)}
                required
              />
            </FormField>

            <FormField label="Vehículo">
              <Select
                value={form.vehicle}
                options={vehicleOptions}
                placeholder="Selecciona vehículo"
                onChange={(event) => updateField("vehicle", event.target.value)}
                required
              />
            </FormField>

            <FormField label="Conductor">
              <Select
                value={form.driver}
                options={driverOptions}
                placeholder="Selecciona conductor"
                onChange={(event) => updateField("driver", event.target.value)}
                required
              />
            </FormField>
          </div>
        </Stack>
      </form>
    </Modal>
  );
}
