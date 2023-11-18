import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@/": path.join(__dirname, "src/"),
    },
  },
  plugins: [react()],
});
