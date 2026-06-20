import { createFileRoute } from "@tanstack/react-router";
import InteriorRemodel from "@/pages/services/InteriorRemodel";

const URL = "https://archgc.com/services/interior";

export const Route = createFileRoute("/services/interior")({
  head: () => ({
    meta: [
      { title: "Interior Remodeling NJ | Arch General Contracting" },
      { name: "description", content: "Interior remodeling in New Jersey by Arch GC — flooring, trim, paint and full interior renovations for any room." },
      { property: "og:title", content: "Interior Remodeling NJ | Arch General Contracting" },
      { property: "og:description", content: "Interior remodeling in New Jersey by Arch GC." },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Interior Remodeling",
        serviceType: "Interior Remodeling",
        provider: { "@type": "GeneralContractor", name: "Arch General Contracting", telephone: "+1-609-284-1185" },
        areaServed: { "@type": "State", name: "New Jersey" },
        url: URL,
      }),
    }],
  }),
  component: InteriorRemodel,
});
