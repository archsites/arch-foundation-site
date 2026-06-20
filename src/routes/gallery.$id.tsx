import { createFileRoute } from "@tanstack/react-router";
import ProjectDetail from "@/pages/ProjectDetail";

export const Route = createFileRoute("/gallery/$id")({
  head: ({ params }) => ({
    meta: [
      { title: `Project ${params.id} | Arch General Contracting` },
      { name: "description", content: `Details and photos for Arch GC project ${params.id} — a completed remodeling project in New Jersey by Arch General Contracting.` },
      { property: "og:title", content: `Project ${params.id} | Arch General Contracting` },
      { property: "og:description", content: `Details and photos for Arch GC project ${params.id} in New Jersey.` },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `https://archgc.com/gallery/${params.id}` },
    ],
    links: [{ rel: "canonical", href: `https://archgc.com/gallery/${params.id}` }],
  }),
  component: ProjectDetail,
});
