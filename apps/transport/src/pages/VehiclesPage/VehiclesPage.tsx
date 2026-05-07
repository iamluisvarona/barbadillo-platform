import { EmptyState, Page, PageHeader, Section } from "@barbadillo/ui";

export function VehiclesPage() {
  return (
    <Page>
      <PageHeader
        title="Vehículos"
        description="Gestión de furgonetas y vehículos del torneo"
      />

      <Section>
        <EmptyState
          title="Todavía no hay vehículos"
          description="Aquí aparecerán las furgonetas, plazas, matrícula y estado de disponibilidad."
        />
      </Section>
    </Page>
  );
}