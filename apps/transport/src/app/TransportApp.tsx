import { Navigate, Route, Routes } from "react-router-dom";
import {
  Card,
  CardGrid,
  Heading,
  Page,
  PageHeader,
  Section,
  Stack,
  StatCard,
  Text,
  TripCard,
} from "@barbadillo/ui";

export default function TransportApp() {
  return (
    <Routes>
      <Route index element={<Navigate to="dashboard" replace />} />

      <Route
        path="dashboard"
        element={
          <Page>
            <PageHeader
              title="Transporte"
              description="Gestión de trayectos, vehículos y conductores"
            />

            <CardGrid columns={4}>
              <StatCard
                label="Trayectos hoy"
                value="12"
                description="Total planificados"
              />

              <StatCard
                label="En curso"
                value="3"
                description="Ahora mismo"
                badge="Live"
                badgeVariant="success"
              />

              <StatCard
                label="Conductores"
                value="5"
                description="Disponibles"
              />

              <StatCard
                label="Incidencias"
                value="1"
                description="Pendiente de revisar"
                badge="Revisar"
                badgeVariant="danger"
              />
            </CardGrid>

            <Section title="Próximo trayecto">
              <TripCard
                from="Hotel"
                to="Polideportivo La Luz"
                time="18:00"
                status="assigned"
                team={{
                  name: "CB Zaragoza",
                  category: "INF-M",
                  logoSrc: null,
                }}
                vehicle="Furgoneta 1"
                driver="Luis"
                peopleCount={15}
                footer={<Text tone="muted">Salida prevista en 25 minutos</Text>}
              />
            </Section>
          </Page>
        }
      />

      <Route
        path="board"
        element={
          <Page>
            <PageHeader
              title="Panel operativo"
              description="Vista logística de trayectos"
            />

            <Section>
              <Card>
                <Stack gap={3}>
                  <Heading level={3}>Dispatch center</Heading>

                  <Text tone="muted">
                    Aquí montaremos el kanban de asignados, en camino, en curso,
                    incidencias y finalizados.
                  </Text>
                </Stack>
              </Card>
            </Section>
          </Page>
        }
      />
    </Routes>
  );
}
