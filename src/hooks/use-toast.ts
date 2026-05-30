import { toast as sonnerToast } from "sonner";

type ToastArgs = { title?: string; description?: string; variant?: "default" | "destructive" };

export function useToast() {
  return {
    toast: ({ title, description, variant }: ToastArgs) => {
      if (variant === "destructive") {
        sonnerToast.error(title ?? "", { description });
      } else {
        sonnerToast.success(title ?? "", { description });
      }
    },
  };
}
export const toast = (args: ToastArgs) => {
  if (args.variant === "destructive") sonnerToast.error(args.title ?? "", { description: args.description });
  else sonnerToast.success(args.title ?? "", { description: args.description });
};
