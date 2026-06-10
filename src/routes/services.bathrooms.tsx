import { createFileRoute } from "@tanstack/react-router";
import Bathrooms from "@/pages/services/Bathrooms";

const URL = "https://arch-foundation-site.lovable.app/services/bathrooms";

export const Route = createFileRoute("/services/bathrooms")({
  head: () => ({
    meta: [
      { title: "Bathroom Remodeling NJ | Arch General Contracting" },
      { name: "description", content: "Full bathroom remodels in New Jersey by Arch GC — tile, vanities, showers and luxury master baths." },
      { property: "og:title", content: "Bathroom Remodeling NJ | Arch General Contracting" },
      { property: "og:description", content: "Full bathroom remodels in New Jersey by Arch GC." },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Bathroom Remodeling",
        serviceType: "Bathroom Remodeling",
        provider: { "@type": "GeneralContractor", name: "Arch General Contracting", telephone: "+1-609-284-1185" },
        areaServed: { "@type": "State", name: "New Jersey" },
        url: URL,
      }),
    }],
  }),
  component: Bathrooms,
});
