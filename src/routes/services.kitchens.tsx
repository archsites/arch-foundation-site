import { createFileRoute } from "@tanstack/react-router";
import Kitchens from "@/pages/services/Kitchens";

export const Route = createFileRoute("/services/kitchens")({
  head: () => ({
    meta: [
      { title: "Kitchen Remodeling NJ | Arch General Contracting" },
      { name: "description", content: "Custom kitchen remodeling in New Jersey by Arch GC — cabinetry, countertops, islands and full kitchen renovations." },
      { property: "og:title", content: "Kitchen Remodeling NJ | Arch General Contracting" },
      { property: "og:description", content: "Custom kitchen renovations in New Jersey by Arch GC." },
      { property: "og:url", content: "https://arch-foundation-site.lovable.app/services/kitchens" },
    ],
    links: [{ rel: "canonical", href: "https://arch-foundation-site.lovable.app/services/kitchens" }],
  }),
  component: Kitchens,
});
