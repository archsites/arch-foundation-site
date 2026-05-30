import { createFileRoute } from "@tanstack/react-router";
import Contact from "@/pages/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Arch General Contracting" },
      { name: "description", content: "Get a free estimate from Arch GC. Call (609) 284-1185 or email archbasements@gmail.com." },
    ],
  }),
  component: Contact,
});
