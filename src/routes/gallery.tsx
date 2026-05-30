import { createFileRoute } from "@tanstack/react-router";
import Gallery from "@/pages/Gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Arch General Contracting" },
      { name: "description", content: "Browse completed projects by Arch GC — kitchens, baths, basements, additions, decks and more." },
    ],
  }),
  component: Gallery,
});
