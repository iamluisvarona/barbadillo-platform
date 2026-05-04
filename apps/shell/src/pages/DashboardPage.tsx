export function DashboardPage() {
  return (
    <section className="page">
      <h1>Dashboard</h1>
      <p>Resumen general del torneo.</p>

      <div className="card-grid">
        <article className="card">
          <span>Equipos inscritos</span>
          <strong>0</strong>
        </article>

        <article className="card">
          <span>Pagos pendientes</span>
          <strong>0</strong>
        </article>

        <article className="card">
          <span>Viajes pendientes</span>
          <strong>0</strong>
        </article>
      </div>
    </section>
  );
}
