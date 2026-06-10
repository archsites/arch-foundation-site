import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start-plugin";
import viteReact from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      target: "netlify",
      customViteReactPlugin: true,
      server: { entry: "server" },
    }),
    viteReact(),
  ],
});
