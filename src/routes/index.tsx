import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arch General Contracting | Remodeling & Construction in NJ" },
      { name: "description", content: "Arch GC is a Burlington County, NJ general contractor specializing in interior & exterior remodels, additions, decks, kitchens, baths and basements." },
      { property: "og:title", content: "Arch General Contracting | Arch GC" },
      { property: "og:description", content: "Quality general contracting and remodeling across New Jersey." },
    ],
  }),
  component: Index,
});
