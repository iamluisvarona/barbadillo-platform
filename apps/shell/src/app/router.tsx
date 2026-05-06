import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import { ShellLayout } from "../layouts/ShellLayout";
import { DashboardPage } from "../pages/DashboardPage";
import { TeamsPage } from "../pages/TeamsPage";
import { PaymentsPage } from "../pages/PaymentsPage";
import { HotelsPage } from "../pages/HotelsPage";
import { NotFoundPage } from "../pages/NotFoundPage";

const TransportApp = lazy(() => import("transport/TransportApp"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ShellLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "teams",
        element: <TeamsPage />,
      },
      {
        path: "payments",
        element: <PaymentsPage />,
      },
      {
        path: "hotels",
        element: <HotelsPage />,
      },
      {
        path: "transport/*",
        element: (
          <Suspense
            fallback={<div style={{ padding: 24 }}>Cargando transporte...</div>}
          >
            <TransportApp />
          </Suspense>
        ),
      },
    ],
  },
]);
