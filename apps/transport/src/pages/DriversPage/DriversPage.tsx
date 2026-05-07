import { EmptyState, Page, PageHeader, Section } from "@barbadillo/ui";

export function DriversPage() {
  return (
    <Page>
      <PageHeader
        title="Conductores"
        description="Gestión de conductores y disponibilidad"
      />

      <Section>
        <EmptyState
          title="Todavía no hay conductores"
          description="Aquí podrás gestionar conductores, teléfonos, disponibilidad y vehículo asignado."
        />
      </Section>
    </Page>
  );
}