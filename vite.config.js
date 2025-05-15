import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@img": path.resolve(__dirname, "src/assets/images"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@api": path.resolve(__dirname, "src/api"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@context": path.resolve(__dirname, "src/context"),
      "@store": path.resolve(__dirname, "src/store"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },
});
