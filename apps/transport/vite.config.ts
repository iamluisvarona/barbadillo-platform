import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "transport",
      filename: "remoteEntry.js",
      exposes: {
        "./TransportApp": "./src/app/TransportApp.tsx",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  server: {
    port: 5174,
  },
  build: {
    target: "esnext",
  },
});
