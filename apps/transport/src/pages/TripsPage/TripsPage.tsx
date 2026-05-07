import { useState } from "react";

import {
  Button,
  CollapsibleDataList,
  DataTable,
  DriverInlineInfo,
  Page,
  PageHeader,
  RouteCell,
  Stack,
  TableRowActions,
  TripCodeBadge,
  TripStatusBadge,
  VehicleInlineInfo,
  type DataTableColumn,
} from "@barbadillo/ui";

import { CreateTripModal } from "../../features/trips/components/CreateTripModal/CreateTripModal";

import "./TripsPage.css";

type TripStatus =
  | "assigned"
  | "confirmed"
  | "going_to_pickup"
  | "arrived"
  | "in_progress"
  | "completed"
  | "cancelled"
  | "rejected"
  | "incident";

interface TripListItem {
  id: string;
  code: string;
  direction: string;
  originLabel: string;
  destinationLabel: string;
  dateLabel: string;
  timeLabel: string;
  vehicleName: string;
  vehiclePlate: string;
  driverName: string;
  driverPhone: string;
  teamName: string;
  teamCategory: string;
  passengerCount: number;
  status: TripStatus;
}

const trips: TripListItem[] = [
  {
    id: "trip-001",
    code: "#TR-001",
    direction: "Ida",
    originLabel: "Hotel Central",
    destinationLabel: "Estadio Municipal",
    dateLabel: "15 Ene 2024",
    timeLabel: "09:00",
    vehicleName: "Autobús 01",
    vehiclePlate: "1234 JKT",
    driverName: "Carlos Mendoza",
    driverPhone: "+34 600 123 456",
    teamName: "CB Zaragoza",
    teamCategory: "Infantil Masculino",
    passengerCount: 15,
    status: "completed",
  },
  {
    id: "trip-002",
    code: "#TR-002",
    direction: "Vuelta",
    originLabel: "Estadio Municipal",
    destinationLabel: "Hotel Central",
    dateLabel: "15 Ene 2024",
    timeLabel: "18:30",
    vehicleName: "Autobús 01",
    vehiclePlate: "1234 JKT",
    driverName: "Carlos Mendoza",
    driverPhone: "+34 600 123 456",
    teamName: "CB Zaragoza",
    teamCategory: "Infantil Masculino",
    passengerCount: 15,
    status: "completed",
  },
  {
    id: "trip-003",
    code: "#TR-003",
    direction: "Ida",
    originLabel: "Hotel Plaza",
    destinationLabel: "Polideportivo Norte",
    dateLabel: "16 Ene 2024",
    timeLabel: "10:00",
    vehicleName: "Van 02",
    vehiclePlate: "5678 ABC",
    driverName: "Ana García",
    driverPhone: "+34 611 222 333",
    teamName: "EASO Basket",
    teamCategory: "Cadete Femenino",
    passengerCount: 8,
    status: "confirmed",
  },
  {
    id: "trip-004",
    code: "#TR-004",
    direction: "Ida",
    originLabel: "Estación Norte",
    destinationLabel: "Hotel Plaza",
    dateLabel: "16 Ene 2024",
    timeLabel: "12:15",
    vehicleName: "Van 03",
    vehiclePlate: "8842 LPM",
    driverName: "Luis Romero",
    driverPhone: "+34 622 555 777",
    teamName: "CB Las Rozas",
    teamCategory: "Infantil Femenino",
    passengerCount: 9,
    status: "in_progress",
  },
  {
    id: "trip-005",
    code: "#TR-005",
    direction: "Vuelta",
    originLabel: "La Luz",
    destinationLabel: "Hotel Central",
    dateLabel: "16 Ene 2024",
    timeLabel: "20:30",
    vehicleName: "Autobús 02",
    vehiclePlate: "9123 KLD",
    driverName: "Marta Sánchez",
    driverPhone: "+34 633 999 111",
    teamName: "FD Cassanenc",
    teamCategory: "Cadete Masculino",
    passengerCount: 14,
    status: "assigned",
  },
  {
    id: "trip-006",
    code: "#TR-006",
    direction: "Ida",
    originLabel: "Aeropuerto",
    destinationLabel: "Hotel Central",
    dateLabel: "17 Ene 2024",
    timeLabel: "08:15",
    vehicleName: "Furgoneta 01",
    vehiclePlate: "3344 UVW",
    driverName: "Andrés Sánchez",
    driverPhone: "+34 644 111 222",
    teamName: "CB L'Hospitalet",
    teamCategory: "Infantil Masculino",
    passengerCount: 11,
    status: "assigned",
  },
  {
    id: "trip-007",
    code: "#TR-007",
    direction: "Vuelta",
    originLabel: "Hotel Central",
    destinationLabel: "Aeropuerto",
    dateLabel: "17 Ene 2024",
    timeLabel: "11:30",
    vehicleName: "Furgoneta 01",
    vehiclePlate: "3344 UVW",
    driverName: "Andrés Sánchez",
    driverPhone: "+34 644 111 222",
    teamName: "CB L'Hospitalet",
    teamCategory: "Infantil Masculino",
    passengerCount: 11,
    status: "cancelled",
  },
  {
    id: "trip-008",
    code: "#TR-008",
    direction: "Ida",
    originLabel: "Hotel VP El Madroño",
    destinationLabel: "Pabellón La Luz",
    dateLabel: "17 Ene 2024",
    timeLabel: "13:00",
    vehicleName: "Furgoneta 02",
    vehiclePlate: "7788 HJK",
    driverName: "Carlos Ruiz",
    driverPhone: "+34 655 333 444",
    teamName: "Cabrini",
    teamCategory: "Infantil Masculino",
    passengerCount: 12,
    status: "confirmed",
  },
  {
    id: "trip-009",
    code: "#TR-009",
    direction: "Vuelta",
    originLabel: "Pabellón La Luz",
    destinationLabel: "Hotel VP El Madroño",
    dateLabel: "17 Ene 2024",
    timeLabel: "18:45",
    vehicleName: "Furgoneta 02",
    vehiclePlate: "7788 HJK",
    driverName: "Carlos Ruiz",
    driverPhone: "+34 655 333 444",
    teamName: "Cabrini",
    teamCategory: "Infantil Masculino",
    passengerCount: 12,
    status: "assigned",
  },
  {
    id: "trip-010",
    code: "#TR-010",
    direction: "Ida",
    originLabel: "Estación Renfe",
    destinationLabel: "Hotel Plaza",
    dateLabel: "18 Ene 2024",
    timeLabel: "09:40",
    vehicleName: "Van 04",
    vehiclePlate: "2211 BCD",
    driverName: "Laura Martín",
    driverPhone: "+34 666 555 444",
    teamName: "Ciudad de Móstoles",
    teamCategory: "Cadete Femenino",
    passengerCount: 10,
    status: "in_progress",
  },
  {
    id: "trip-011",
    code: "#TR-011",
    direction: "Ida",
    originLabel: "Hotel Plaza",
    destinationLabel: "Polideportivo Sur",
    dateLabel: "18 Ene 2024",
    timeLabel: "12:00",
    vehicleName: "Autobús 03",
    vehiclePlate: "9988 LMN",
    driverName: "Miguel Torres",
    driverPhone: "+34 677 888 999",
    teamName: "Colegio San Agustín",
    teamCategory: "Infantil Masculino",
    passengerCount: 16,
    status: "assigned",
  },
  {
    id: "trip-012",
    code: "#TR-012",
    direction: "Vuelta",
    originLabel: "Polideportivo Sur",
    destinationLabel: "Hotel Plaza",
    dateLabel: "18 Ene 2024",
    timeLabel: "19:15",
    vehicleName: "Autobús 03",
    vehiclePlate: "9988 LMN",
    driverName: "Miguel Torres",
    driverPhone: "+34 677 888 999",
    teamName: "Colegio San Agustín",
    teamCategory: "Infantil Masculino",
    passengerCount: 16,
    status: "incident",
  },
  {
    id: "trip-013",
    code: "#TR-013",
    direction: "Ida",
    originLabel: "Hotel Central",
    destinationLabel: "Club de Tenis",
    dateLabel: "19 Ene 2024",
    timeLabel: "08:30",
    vehicleName: "Minibús 01",
    vehiclePlate: "9101 OPQ",
    driverName: "Luis Ramírez",
    driverPhone: "+34 688 123 123",
    teamName: "CB Las Rozas",
    teamCategory: "Infantil Femenino",
    passengerCount: 9,
    status: "completed",
  },
  {
    id: "trip-014",
    code: "#TR-014",
    direction: "Vuelta",
    originLabel: "Club de Tenis",
    destinationLabel: "Hotel Central",
    dateLabel: "19 Ene 2024",
    timeLabel: "14:20",
    vehicleName: "Minibús 01",
    vehiclePlate: "9101 OPQ",
    driverName: "Luis Ramírez",
    driverPhone: "+34 688 123 123",
    teamName: "CB Las Rozas",
    teamCategory: "Infantil Femenino",
    passengerCount: 9,
    status: "completed",
  },
  {
    id: "trip-015",
    code: "#TR-015",
    direction: "Ida",
    originLabel: "Hotel Guadalquivir",
    destinationLabel: "Recinto Ferial",
    dateLabel: "19 Ene 2024",
    timeLabel: "17:00",
    vehicleName: "Mercedes Vito",
    vehiclePlate: "4455 XYZ",
    driverName: "Pedro Sánchez",
    driverPhone: "+34 699 321 321",
    teamName: "EASO Basket",
    teamCategory: "Cadete Femenino",
    passengerCount: 8,
    status: "confirmed",
  },
];

export function TripsPage() {
  const [isCreateTripOpen, setIsCreateTripOpen] = useState(false);

  const columns: DataTableColumn<TripListItem>[] = [
    {
      key: "trip",
      header: "Trayecto",
      width: "120px",
      render: (trip) => (
        <TripCodeBadge code={trip.code} direction={trip.direction} />
      ),
    },
    {
      key: "route",
      header: "Ruta",
      width: "250px",
      render: (trip) => (
        <RouteCell
          originLabel={trip.originLabel}
          destinationLabel={trip.destinationLabel}
        />
      ),
    },
    {
      key: "datetime",
      header: "Fecha y hora",
      width: "150px",
      render: (trip) => (
        <DriverInlineInfo name={trip.timeLabel} subtitle={trip.dateLabel} />
      ),
    },
    {
      key: "vehicle",
      header: "Vehículo",
      width: "150px",
      render: (trip) => (
        <VehicleInlineInfo name={trip.vehicleName} plate={trip.vehiclePlate} />
      ),
    },
    {
      key: "driver",
      header: "Conductor",
      width: "190px",
      render: (trip) => (
        <DriverInlineInfo name={trip.driverName} subtitle={trip.driverPhone} />
      ),
    },
    {
      key: "team",
      header: "Equipo",
      width: "170px",
      render: (trip) => (
        <DriverInlineInfo name={trip.teamName} subtitle={trip.teamCategory} />
      ),
    },
    {
      key: "status",
      header: "Estado",
      width: "130px",
      render: (trip) => <TripStatusBadge status={trip.status} />,
    },
  ];

  return (
    <Page className="transport-trips-page" maxWidth="full">
      <PageHeader
        title="Trayectos"
        description="Gestiona los trayectos y desplazamientos del torneo"
        actions={
          <Button variant="primary" onClick={() => setIsCreateTripOpen(true)}>
            + Nuevo trayecto
          </Button>
        }
      />

      <Stack gap={6}>
        <div className="transport-trips-page__table-card">
          <DataTable
            columns={columns}
            data={trips}
            getRowKey={(trip) => trip.id}
            emptyMessage="No hay trayectos disponibles."
            actions={() => <TableRowActions />}
            mobileRender={(trip) => (
              <CollapsibleDataList
                items={[
                  {
                    id: trip.id,
                    title: (
                      <RouteCell
                        originLabel={trip.originLabel}
                        destinationLabel={trip.destinationLabel}
                        compact
                      />
                    ),
                    description: (
                      <span className="transport-trips-page__mobile-summary-meta">
                        {trip.timeLabel} · {trip.teamName} · {trip.teamCategory}
                      </span>
                    ),
                    status: <TripStatusBadge status={trip.status} />,
                    content: (
                      <div className="transport-trips-page__mobile-content">
                        <div className="transport-trips-page__mobile-grid">
                          <DriverInlineInfo
                            name={trip.timeLabel}
                            subtitle={trip.dateLabel}
                          />

                          <VehicleInlineInfo
                            name={trip.vehicleName}
                            plate={trip.vehiclePlate}
                          />

                          <DriverInlineInfo
                            name={trip.driverName}
                            subtitle={trip.driverPhone}
                          />

                          <DriverInlineInfo
                            name={trip.teamName}
                            subtitle={`${trip.passengerCount} personas`}
                          />
                        </div>
                      </div>
                    ),
                    actions: (
                      <>
                        <Button variant="secondary" size="sm">
                          Ver detalle
                        </Button>
                        <Button variant="ghost" size="sm">
                          Editar
                        </Button>
                        <Button variant="danger" size="sm">
                          Cancelar
                        </Button>
                      </>
                    ),
                  },
                ]}
              />
            )}
          />
        </div>
      </Stack>

      <CreateTripModal
        open={isCreateTripOpen}
        onClose={() => setIsCreateTripOpen(false)}
      />
    </Page>
  );
}
