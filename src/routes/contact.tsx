import { createFileRoute } from "@tanstack/react-router";
import Contact from "@/pages/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Arch General Contracting" },
      { name: "description", content: "Get a free estimate from Arch GC. Call (609) 284-1185 or email archbasements@gmail.com for NJ remodeling." },
      { property: "og:title", content: "Contact | Arch General Contracting" },
      { property: "og:description", content: "Request a free remodeling estimate from Arch GC in Burlington County, NJ." },
      { property: "og:url", content: "https://archgc.com/contact" },
    ],
    links: [{ rel: "canonical", href: "https://archgc.com/contact" }],
  }),
  component: Contact,
});
