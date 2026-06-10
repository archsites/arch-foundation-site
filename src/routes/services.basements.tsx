import { createFileRoute } from "@tanstack/react-router";
import Basements from "@/pages/services/Basements";

const URL = "https://arch-foundation-site.lovable.app/services/basements";

export const Route = createFileRoute("/services/basements")({
  head: () => ({
    meta: [
      { title: "Basement Finishing NJ | Arch General Contracting" },
      { name: "description", content: "Basement finishing and remodeling in New Jersey by Arch GC — home theaters, bars, guest suites and waterproofing." },
      { property: "og:title", content: "Basement Finishing NJ | Arch General Contracting" },
      { property: "og:description", content: "Basement finishing and remodeling in New Jersey by Arch GC." },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Basement Finishing",
        serviceType: "Basement Finishing",
        provider: { "@type": "GeneralContractor", name: "Arch General Contracting", telephone: "+1-609-284-1185" },
        areaServed: { "@type": "State", name: "New Jersey" },
        url: URL,
      }),
    }],
  }),
  component: Basements,
});
