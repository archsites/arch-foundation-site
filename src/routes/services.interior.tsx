import { createFileRoute } from "@tanstack/react-router";
import InteriorRemodel from "@/pages/services/InteriorRemodel";

export const Route = createFileRoute("/services/interior")({
  head: () => ({
    meta: [
      { title: "Interior Remodeling NJ | Arch General Contracting" },
      { name: "description", content: "Interior remodeling in New Jersey by Arch GC — flooring, trim, paint and full interior renovations for any room." },
      { property: "og:title", content: "Interior Remodeling NJ | Arch General Contracting" },
      { property: "og:description", content: "Interior remodeling in New Jersey by Arch GC." },
      { property: "og:url", content: "https://arch-foundation-site.lovable.app/services/interior" },
    ],
    links: [{ rel: "canonical", href: "https://arch-foundation-site.lovable.app/services/interior" }],
  }),
  component: InteriorRemodel,
});
