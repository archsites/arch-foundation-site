import { createFileRoute } from "@tanstack/react-router";
import Gallery from "@/pages/Gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Arch General Contracting" },
      { name: "description", content: "Browse completed projects by Arch GC — kitchens, baths, basements, additions, decks and more across NJ." },
      { property: "og:title", content: "Gallery | Arch General Contracting" },
      { property: "og:description", content: "Completed remodeling projects by Arch GC across New Jersey." },
      { property: "og:url", content: "https://arch-foundation-site.lovable.app/gallery" },
    ],
    links: [{ rel: "canonical", href: "https://arch-foundation-site.lovable.app/gallery" }],
  }),
  component: Gallery,
});
