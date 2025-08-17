import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/zunubakehouse/", // Must match your repo name exactly
  plugins: [react()],
});