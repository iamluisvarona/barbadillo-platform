import { NavLink, Outlet } from "react-router-dom";

const navigationItems = [
  { label: "Dashboard", to: "/" },
  { label: "Equipos", to: "/teams" },
  { label: "Pagos", to: "/payments" },
  { label: "Hoteles", to: "/hotels" },
  { label: "Transporte", to: "/transport" },
];

export function ShellLayout() {
  return (
    <div className="shell">
      <aside className="shell__sidebar">
        <div className="shell__brand">
          <span className="shell__brand-mark">B</span>
          <div>
            <strong>Barbadillo</strong>
            <small>Platform</small>
          </div>
        </div>

        <nav className="shell__nav">
          {navigationItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                isActive
                  ? "shell__nav-link shell__nav-link--active"
                  : "shell__nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="shell__main">
        <header className="shell__topbar">
          <div>
            <strong>Memorial Pablo Barbadillo</strong>
            <span>Backoffice organización</span>
          </div>

          <button className="shell__user-button" type="button">
            LV
          </button>
        </header>

        <main className="shell__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
