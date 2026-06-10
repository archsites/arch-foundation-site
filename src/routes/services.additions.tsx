import { createFileRoute } from "@tanstack/react-router";
import Additions from "@/pages/services/Additions";

export const Route = createFileRoute("/services/additions")({
  head: () => ({
    meta: [
      { title: "Home Additions NJ | Arch General Contracting" },
      { name: "description", content: "Home additions in New Jersey by Arch GC — bump-outs, second stories and full additions designed to match your home." },
      { property: "og:title", content: "Home Additions NJ | Arch General Contracting" },
      { property: "og:description", content: "Custom home additions in New Jersey by Arch GC." },
      { property: "og:url", content: "https://arch-foundation-site.lovable.app/services/additions" },
    ],
    links: [{ rel: "canonical", href: "https://arch-foundation-site.lovable.app/services/additions" }],
  }),
  component: Additions,
});
