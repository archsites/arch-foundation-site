import { createFileRoute } from "@tanstack/react-router";
import Decks from "@/pages/services/Decks";

const URL = "https://archgc.com/services/decks";

export const Route = createFileRoute("/services/decks")({
  head: () => ({
    meta: [
      { title: "Decks & Patios NJ | Arch General Contracting" },
      { name: "description", content: "Custom decks and patios built in New Jersey by Arch GC — composite, wood and multi-level outdoor living spaces." },
      { property: "og:title", content: "Decks & Patios NJ | Arch General Contracting" },
      { property: "og:description", content: "Custom decks and patios built in New Jersey by Arch GC." },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Decks & Patios",
        serviceType: "Deck and Patio Construction",
        provider: { "@type": "GeneralContractor", name: "Arch General Contracting", telephone: "+1-609-284-1185" },
        areaServed: { "@type": "State", name: "New Jersey" },
        url: URL,
      }),
    }],
  }),
  component: Decks,
});
