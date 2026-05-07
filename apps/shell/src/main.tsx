import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../../../packages/ui/dist/style.css";
import "./styles/global.css";
import "../../../apps/transport/src/pages/DashboardPage/DashboardPage.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
