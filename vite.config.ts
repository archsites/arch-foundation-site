import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    imagetools({
      defaultDirectives: (url) => {
        if (url.searchParams.has("noopt")) return new URLSearchParams();
        // Default: convert to webp, cap width at 1600, compress
        if (/\.(jpe?g|png)$/i.test(url.pathname)) {
          return new URLSearchParams({
            format: "webp",
            quality: "75",
            w: "1600",
            withoutEnlargement: "true",
          });
        }
        return new URLSearchParams();
      },
    }),
  ],
});

