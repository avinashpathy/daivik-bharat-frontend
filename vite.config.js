import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Output goes to `build/` so firebase.json and the GitHub deploy workflows keep working unchanged.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || "/",
  build: { outDir: "build" },
});
