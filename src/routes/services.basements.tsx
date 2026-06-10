import { createFileRoute } from "@tanstack/react-router";
import Basements from "@/pages/services/Basements";

export const Route = createFileRoute("/services/basements")({
  head: () => ({
    meta: [
      { title: "Basement Finishing NJ | Arch General Contracting" },
      { name: "description", content: "Basement finishing and remodeling in New Jersey by Arch GC — home theaters, bars, guest suites and waterproofing." },
      { property: "og:title", content: "Basement Finishing NJ | Arch General Contracting" },
      { property: "og:description", content: "Basement finishing and remodeling in New Jersey by Arch GC." },
      { property: "og:url", content: "https://arch-foundation-site.lovable.app/services/basements" },
    ],
    links: [{ rel: "canonical", href: "https://arch-foundation-site.lovable.app/services/basements" }],
  }),
  component: Basements,
});
