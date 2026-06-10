import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      // Deployment adapter (was `target: "netlify"` in older versions) is
      // now handled outside the plugin — see netlify/functions/ssr.mjs.
      server: { entry: "server" },
    }),
    viteReact(),
  ],
});
