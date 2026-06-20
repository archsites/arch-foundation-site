import { createFileRoute } from "@tanstack/react-router";
import Kitchens from "@/pages/services/Kitchens";

const URL = "https://archgc.com/services/kitchens";

export const Route = createFileRoute("/services/kitchens")({
  head: () => ({
    meta: [
      { title: "Kitchen Remodeling NJ | Arch General Contracting" },
      { name: "description", content: "Custom kitchen remodeling in New Jersey by Arch GC — cabinetry, countertops, islands and full kitchen renovations." },
      { property: "og:title", content: "Kitchen Remodeling NJ | Arch General Contracting" },
      { property: "og:description", content: "Custom kitchen renovations in New Jersey by Arch GC." },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Kitchen Remodeling",
        serviceType: "Kitchen Remodeling",
        provider: { "@type": "GeneralContractor", name: "Arch General Contracting", telephone: "+1-609-284-1185" },
        areaServed: { "@type": "State", name: "New Jersey" },
        url: URL,
      }),
    }],
  }),
  component: Kitchens,
});
