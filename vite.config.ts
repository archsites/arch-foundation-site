import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
  ],
});
