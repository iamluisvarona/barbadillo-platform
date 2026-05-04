import { createBrowserRouter } from "react-router-dom";
import { ShellLayout } from "../layouts/ShellLayout";
import { DashboardPage } from "../pages/DashboardPage";
import { TeamsPage } from "../pages/TeamsPage";
import { PaymentsPage } from "../pages/PaymentsPage";
import { HotelsPage } from "../pages/HotelsPage";
import { TransportPage } from "../pages/TransportPage";
import { NotFoundPage } from "../pages/NotFoundPage";

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
        path: "transport",
        element: <TransportPage />,
      },
    ],
  },
]);
