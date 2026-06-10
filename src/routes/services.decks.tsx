import { createFileRoute } from "@tanstack/react-router";
import Decks from "@/pages/services/Decks";

export const Route = createFileRoute("/services/decks")({
  head: () => ({
    meta: [
      { title: "Decks & Patios NJ | Arch General Contracting" },
      { name: "description", content: "Custom decks and patios built in New Jersey by Arch GC — composite, wood and multi-level outdoor living spaces." },
      { property: "og:title", content: "Decks & Patios NJ | Arch General Contracting" },
      { property: "og:description", content: "Custom decks and patios built in New Jersey by Arch GC." },
      { property: "og:url", content: "https://arch-foundation-site.lovable.app/services/decks" },
    ],
    links: [{ rel: "canonical", href: "https://arch-foundation-site.lovable.app/services/decks" }],
  }),
  component: Decks,
});
