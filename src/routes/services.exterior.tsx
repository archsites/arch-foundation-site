import { createFileRoute } from "@tanstack/react-router";
import ExteriorRemodel from "@/pages/services/ExteriorRemodel";

export const Route = createFileRoute("/services/exterior")({
  head: () => ({
    meta: [
      { title: "Exterior Remodeling NJ | Arch General Contracting" },
      { name: "description", content: "Exterior remodeling in New Jersey by Arch GC — siding, roofing, windows and full exterior makeovers." },
      { property: "og:title", content: "Exterior Remodeling NJ | Arch General Contracting" },
      { property: "og:description", content: "Exterior remodeling in New Jersey by Arch GC." },
      { property: "og:url", content: "https://arch-foundation-site.lovable.app/services/exterior" },
    ],
    links: [{ rel: "canonical", href: "https://arch-foundation-site.lovable.app/services/exterior" }],
  }),
  component: ExteriorRemodel,
});
