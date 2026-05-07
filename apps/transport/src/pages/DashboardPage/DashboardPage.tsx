import { useState } from "react";

import {
  ActivitySummaryPanel,
  Button,
  DashboardKpiGrid,
  IncidentListPanel,
  LiveTripPanel,
  Page,
  PageHeader,
  PanelCard,
  Stack,
  TripDispatchList,
  VehicleStatusList,
} from "@barbadillo/ui";

import { LiveGpsMap } from "../../components/LiveGpsMap/LiveGpsMap";
import { CreateTripModal } from "../../features/trips/components/CreateTripModal/CreateTripModal";
import { useBrowserLocation } from "../../hooks/useBrowserLocation";

import "./DashboardPage.css";

const kpiItems = [
  {
    id: "today",
    label: "Trayectos hoy",
    value: "24",
    description: "↑ 3 vs ayer",
    badge: "Hoy",
  },
  {
    id: "live",
    label: "En curso",
    value: "6",
    description: "25% del total",
    badge: "Live",
    badgeVariant: "success",
  },
  {
    id: "pending",
    label: "Pendientes",
    value: "12",
    description: "50% del total",
    badge: "Revisar",
    badgeVariant: "warning",
  },
  {
    id: "completed",
    label: "Completados",
    value: "6",
    description: "25% del total",
    badge: "OK",
    badgeVariant: "success",
  },
  {
    id: "incidents",
    label: "Incidencias",
    value: "2",
    description: "Ver detalles",
    badge: "Urgente",
    badgeVariant: "danger",
  },
] as const;

const upcomingTrips = [
  {
    id: "trip-1",
    time: "10:00",
    dayLabel: "HOY",
    status: "in_progress",
    originLabel: "Hotel Tres Cantos",
    destinationLabel: "Pabellón La Luz",
    teamName: "CB Cabrini",
    teamCategory: "Infantil Masculino",
    passengerCount: 15,
    vehicleName: "Furgoneta 1",
    driverName: "Luis Martín",
    highlighted: true,
  },
  {
    id: "trip-2",
    time: "11:30",
    dayLabel: "HOY",
    status: "assigned",
    originLabel: "Hotel VP El Madroño",
    destinationLabel: "Pabellón Norte",
    teamName: "EASO Basket",
    teamCategory: "Cadete Femenino",
    passengerCount: 12,
    vehicleName: "Furgoneta 2",
    driverName: "Carlos Ruiz",
  },
  {
    id: "trip-3",
    time: "13:00",
    dayLabel: "HOY",
    status: "assigned",
    originLabel: "Estación Renfe",
    destinationLabel: "Hotel Tres Cantos",
    teamName: "CB Zaragoza",
    teamCategory: "Infantil Femenino",
    passengerCount: 10,
    vehicleName: "Furgoneta 3",
    driverName: "Ana López",
  },
] as const;

const activityItems = [
  {
    id: "km",
    label: "Km recorridos",
    value: "186,4 km",
    trend: "↑ 12% vs ayer",
    tone: "success",
  },
  {
    id: "time",
    label: "Tiempo total",
    value: "8h 42m",
    trend: "↑ 8% vs ayer",
    tone: "success",
  },
  {
    id: "passengers",
    label: "Personas transportadas",
    value: "256",
    trend: "↑ 15% vs ayer",
    tone: "success",
  },
  {
    id: "trips",
    label: "Trayectos realizados",
    value: "18",
    trend: "↑ 5% vs ayer",
    tone: "success",
  },
] as const;

const vehicles = [
  {
    id: "vehicle-1",
    name: "Furgoneta 1",
    plate: "1234 KLM",
    seatsLabel: "15 plazas",
    status: "EN RUTA",
    tone: "success",
  },
  {
    id: "vehicle-2",
    name: "Furgoneta 2",
    plate: "5678 NOP",
    seatsLabel: "15 plazas",
    status: "DISPONIBLE",
    tone: "info",
  },
  {
    id: "vehicle-3",
    name: "Furgoneta 3",
    plate: "9101 QRS",
    seatsLabel: "12 plazas",
    status: "MANTENIMIENTO",
    tone: "warning",
  },
  {
    id: "vehicle-4",
    name: "Furgoneta 4",
    plate: "1122 TUV",
    seatsLabel: "15 plazas",
    status: "NO DISPONIBLE",
    tone: "danger",
  },
] as const;

const incidents = [
  {
    id: "incident-1",
    time: "09:45",
    dayLabel: "HOY",
    title: "Retraso por tráfico en M-607",
    description: "TR-1248 · Hotel Tres Cantos → Pabellón Norte",
    status: "ABIERTA",
    tone: "danger",
    assignedTo: "Luis Martín",
  },
  {
    id: "incident-2",
    time: "08:30",
    dayLabel: "HOY",
    title: "Cambio de vehículo solicitado",
    description: "TR-1245 · Estación Renfe → Hotel Tres Cantos",
    status: "EN PROCESO",
    tone: "warning",
    assignedTo: "Carlos Ruiz",
  },
] as const;

export function DashboardPage() {
  const [isCreateTripOpen, setIsCreateTripOpen] = useState(false);

  const gps = useBrowserLocation();

  const gpsEnabled = gps.status === "active";
  const gpsRequesting = gps.status === "requesting_permission";

  return (
    <Page className="transport-dashboard-page" maxWidth="full">
      <PageHeader
        title="Transporte"
        description="Pantalla principal de transporte del torneo"
        actions={
          <Button variant="primary" onClick={() => setIsCreateTripOpen(true)}>
            + Nuevo trayecto
          </Button>
        }
      />

      <Stack gap={6}>
        <DashboardKpiGrid items={kpiItems} />

        <section className="transport-dashboard-main-grid">
          <PanelCard
            className="transport-panel--trips"
            title="Próximos trayectos"
            description="Control operativo de salidas y asignaciones"
            actions={
              <Button variant="ghost" size="sm">
                Ver calendario
              </Button>
            }
          >
            <TripDispatchList
              items={upcomingTrips}
              footer={
                <button className="transport-panel-link">
                  Ver todos los trayectos ›
                </button>
              }
            />
          </PanelCard>

          <PanelCard className="transport-live-trip" variant="live">
            <LiveTripPanel
              tripCode="TR-1254"
              originLabel="Hotel Tres Cantos"
              originAddress="Av. de los Encuartes, 3"
              originMeta="28760 Tres Cantos, Madrid"
              destinationLabel="Pabellón La Luz"
              destinationAddress="Av. de la Luz, s/n"
              destinationMeta="28701 San Sebastián de los Reyes"
              mapContent={
                <LiveGpsMap
                  status={gps.status}
                  location={gps.location}
                  accuracyLabel={gps.accuracyLabel}
                  updatedAtLabel={gps.updatedAtLabel}
                  error={gps.error}
                  onStop={gps.stop}
                />
              }
              progressLabel="En curso desde 10:12"
              etaLabel="40 min estimados"
              progressPercent={48}
              secondaryAction={{
                label: gpsEnabled
                  ? "Contactar conductor"
                  : gpsRequesting
                    ? "Solicitando ubicación..."
                    : "Activar ubicación",
                variant: "secondary",
                onClick: gpsEnabled ? undefined : gps.start,
              }}
              primaryAction={{
                label: "Ver detalle",
                variant: "primary",
              }}
            />
          </PanelCard>
        </section>

        <section className="transport-dashboard-secondary-grid">
          <PanelCard
            className="transport-activity"
            title="Resumen de actividad"
            description="Datos acumulados del día"
            actions={
              <Button variant="ghost" size="sm">
                Hoy
              </Button>
            }
          >
            <ActivitySummaryPanel items={activityItems} />
          </PanelCard>

          <PanelCard
            className="transport-vehicles"
            title="Estado de vehículos"
            description="Disponibilidad de la flota"
            actions={
              <button className="transport-panel-link transport-panel-link--inline">
                Ver todos
              </button>
            }
          >
            <VehicleStatusList
              items={vehicles}
              footer={
                <button className="transport-panel-link">
                  Ver todos los vehículos ›
                </button>
              }
            />
          </PanelCard>
        </section>

        <PanelCard
          className="transport-incidents"
          title="Incidencias recientes"
          description="Alertas abiertas durante la jornada"
          actions={
            <button className="transport-panel-link transport-panel-link--inline">
              Ver todas
            </button>
          }
        >
          <IncidentListPanel items={incidents} />
        </PanelCard>
      </Stack>

      <CreateTripModal
        open={isCreateTripOpen}
        onClose={() => setIsCreateTripOpen(false)}
      />
    </Page>
  );
}
