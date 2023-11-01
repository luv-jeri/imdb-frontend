import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // setup alias for absolute import
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@sections": path.resolve(__dirname, "./src/components/sections"),
      "@core": path.resolve(__dirname, "./src/components/core"),
    },
  },
});
