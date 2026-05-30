import { createFileRoute } from "@tanstack/react-router";
import Decks from "@/pages/services/Decks";
export const Route = createFileRoute("/services/decks")({ component: Decks });
