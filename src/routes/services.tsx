import { createFileRoute } from "@tanstack/react-router";
import Services from "@/pages/Services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Arch General Contracting" },
      { name: "description", content: "Interior & exterior remodels, additions, decks & patios, kitchens, baths and basements across New Jersey." },
      { property: "og:title", content: "Services | Arch General Contracting" },
      { property: "og:description", content: "Remodeling services across New Jersey: kitchens, baths, basements, additions, decks and more." },
      { property: "og:url", content: "https://arch-foundation-site.lovable.app/services" },
    ],
    links: [{ rel: "canonical", href: "https://arch-foundation-site.lovable.app/services" }],
  }),
  component: Services,
});
