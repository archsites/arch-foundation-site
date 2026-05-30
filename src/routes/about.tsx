import { createFileRoute } from "@tanstack/react-router";
import About from "@/pages/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Arch General Contracting" },
      { name: "description", content: "Meet the team behind Arch GC — licensed, insured craftsmen delivering quality remodeling in Burlington County, NJ." },
    ],
  }),
  component: About,
});
