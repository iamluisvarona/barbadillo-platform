import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import { Heading, IconButton, Stack, Text } from "@barbadillo/ui";

import "./ShellLayout.css";

const navigationItems = [
  { label: "Dashboard", to: "/", icon: "🏠" },
  { label: "Equipos", to: "/teams", icon: "👥" },
  { label: "Pagos", to: "/payments", icon: "💳" },
  { label: "Hoteles", to: "/hotels", icon: "🏨" },
  { label: "Transporte", to: "/transport", icon: "🚐" },
];

export function ShellLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((current) => !current);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="bb-shell">
      <header className="bb-shell__header">
        {/* LEFT */}
        <div className="bb-shell__header-left">
          <IconButton aria-label="Abrir menú" onClick={toggleDrawer}>
            ☰
          </IconButton>

          <div className="bb-shell__brand">
            <div className="bb-shell__brand-mark">B</div>

            <div>
              <Heading level={4}>Memorial Pablo Barbadillo XVIII</Heading>

              <Text size="sm" tone="muted">
                Gestión del torneo
              </Text>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bb-shell__header-right">
          <div className="bb-shell__user-chip">
            <div className="bb-shell__user-info">
              <Text size="sm">Luis Varona</Text>

              <Text size="sm" tone="muted">
                Organización
              </Text>
            </div>

            <div className="bb-shell__avatar">LV</div>
          </div>
        </div>
      </header>

      {/* BACKDROP */}
      <div
        className={[
          "bb-shell__backdrop",
          isDrawerOpen && "bb-shell__backdrop--visible",
        ]
          .filter(Boolean)
          .join(" ")}
        onClick={closeDrawer}
      />

      {/* DRAWER */}
      <aside
        className={[
          "bb-shell__drawer",
          isDrawerOpen && "bb-shell__drawer--open",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <Stack gap={6}>
          <div className="bb-shell__drawer-header">
            <div>
              <Heading level={4}>Menú</Heading>

              <Text size="sm" tone="muted">
                Backoffice organización
              </Text>
            </div>

            <IconButton aria-label="Cerrar menú" onClick={closeDrawer}>
              ✕
            </IconButton>
          </div>

          <nav className="bb-shell__nav">
            {navigationItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={closeDrawer}
                className={({ isActive }) =>
                  [
                    "bb-shell__nav-link",
                    isActive && "bb-shell__nav-link--active",
                  ]
                    .filter(Boolean)
                    .join(" ")
                }
              >
                <span className="bb-shell__nav-icon">{item.icon}</span>

                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </Stack>
      </aside>

      <main className="bb-shell__content">
        <Outlet />
      </main>
    </div>
  );
}
