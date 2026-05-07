import { Navigate, Route, Routes } from "react-router-dom";

import { DashboardPage } from "../pages/DashboardPage/DashboardPage";
import { TripsPage } from "../pages/TripsPage/TripsPage";
import { BoardPage } from "../pages/BoardPage/BoardPage";
import { DriversPage } from "../pages/DriversPage/DriversPage";
import { VehiclesPage } from "../pages/VehiclesPage/VehiclesPage";

export function TransportRouter() {
  return (
    <Routes>
      <Route index element={<Navigate to="/transport/dashboard" replace />} />

      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="trips" element={<TripsPage />} />
      <Route path="board" element={<BoardPage />} />
      <Route path="drivers" element={<DriversPage />} />
      <Route path="vehicles" element={<VehiclesPage />} />
    </Routes>
  );
}
