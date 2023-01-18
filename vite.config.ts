import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tspaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tspaths(), react()],
});
