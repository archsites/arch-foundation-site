import { createFileRoute } from "@tanstack/react-router";
import Bathrooms from "@/pages/services/Bathrooms";

export const Route = createFileRoute("/services/bathrooms")({
  head: () => ({
    meta: [
      { title: "Bathroom Remodeling NJ | Arch General Contracting" },
      { name: "description", content: "Full bathroom remodels in New Jersey by Arch GC — tile, vanities, showers and luxury master baths." },
      { property: "og:title", content: "Bathroom Remodeling NJ | Arch General Contracting" },
      { property: "og:description", content: "Full bathroom remodels in New Jersey by Arch GC." },
      { property: "og:url", content: "https://arch-foundation-site.lovable.app/services/bathrooms" },
    ],
    links: [{ rel: "canonical", href: "https://arch-foundation-site.lovable.app/services/bathrooms" }],
  }),
  component: Bathrooms,
});
