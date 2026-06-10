import { createFileRoute } from "@tanstack/react-router";
import ExteriorRemodel from "@/pages/services/ExteriorRemodel";

const URL = "https://arch-foundation-site.lovable.app/services/exterior";

export const Route = createFileRoute("/services/exterior")({
  head: () => ({
    meta: [
      { title: "Exterior Remodeling NJ | Arch General Contracting" },
      { name: "description", content: "Exterior remodeling in New Jersey by Arch GC — siding, roofing, windows and full exterior makeovers." },
      { property: "og:title", content: "Exterior Remodeling NJ | Arch General Contracting" },
      { property: "og:description", content: "Exterior remodeling in New Jersey by Arch GC." },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Exterior Remodeling",
        serviceType: "Exterior Remodeling",
        provider: { "@type": "GeneralContractor", name: "Arch General Contracting", telephone: "+1-609-284-1185" },
        areaServed: { "@type": "State", name: "New Jersey" },
        url: URL,
      }),
    }],
  }),
  component: ExteriorRemodel,
});
