import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  base: "http://localhost:4174/",
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
  preview: {
    port: 4174,
    strictPort: true,
    cors: true,
  },
  build: {
    target: "esnext",
    modulePreload: false,
  },
});
