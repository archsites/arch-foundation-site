import { createFileRoute } from "@tanstack/react-router";
import Additions from "@/pages/services/Additions";

const URL = "https://archgc.com/services/additions";

export const Route = createFileRoute("/services/additions")({
  head: () => ({
    meta: [
      { title: "Home Additions NJ | Arch General Contracting" },
      { name: "description", content: "Home additions in New Jersey by Arch GC — bump-outs, second stories and full additions designed to match your home." },
      { property: "og:title", content: "Home Additions NJ | Arch General Contracting" },
      { property: "og:description", content: "Custom home additions in New Jersey by Arch GC." },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Home Additions",
        serviceType: "Home Additions",
        provider: { "@type": "GeneralContractor", name: "Arch General Contracting", telephone: "+1-609-284-1185" },
        areaServed: { "@type": "State", name: "New Jersey" },
        url: URL,
      }),
    }],
  }),
  component: Additions,
});
