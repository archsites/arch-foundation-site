import { createFileRoute } from "@tanstack/react-router";
import Services from "@/pages/Services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Arch General Contracting" },
      { name: "description", content: "Interior & exterior remodels, additions, decks & patios, kitchens, baths and basements across South Jersey." },
    ],
  }),
  component: Services,
});
