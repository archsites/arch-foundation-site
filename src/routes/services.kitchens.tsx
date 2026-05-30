import { createFileRoute } from "@tanstack/react-router";
import Kitchens from "@/pages/services/Kitchens";
export const Route = createFileRoute("/services/kitchens")({ component: Kitchens });
