import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// A static build. In production, serve it beside ibcmon's API (a reverse
// proxy sending /api/ to ibcmon) or build with VITE_IBCMON_API pointing at
// the API's origin. In development, /api is proxied to a running
// `ibcmon serve` (default :8080, override with IBCMON_API).
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: { "/api": process.env.IBCMON_API ?? "http://127.0.0.1:8080" },
  },
  build: { outDir: "dist", sourcemap: false },
  test: { environment: "node", include: ["src/**/*.test.ts"] },
});
