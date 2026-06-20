import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "sonner";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "AcLxfwrECIsqVX79fDyHqHeS7JF6pG36U9DbLxQlRzY" },
      { title: "Arch General Contracting" },
      { name: "description", content: "Arch General Contracting — licensed NJ remodeling for kitchens, baths, basements, additions, decks and exteriors." },
      { name: "author", content: "Arch General Contracting" },
      { property: "og:title", content: "Arch General Contracting" },
      { property: "og:description", content: "Licensed NJ remodeling for kitchens, baths, basements, additions, decks and exteriors." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Arch General Contracting" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Arch General Contracting" },
      { name: "twitter:description", content: "Licensed NJ remodeling for kitchens, baths, basements, additions, decks and exteriors." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/Z2MCIpwUabf5d8JZ4S15c43oy4g1/social-images/social-1780156727815-General_COntracting.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/Z2MCIpwUabf5d8JZ4S15c43oy4g1/social-images/social-1780156727815-General_COntracting.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Open+Sans:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: "Arch General Contracting",
          url: "https://arch-foundation-site.lovable.app",
          telephone: "+1-609-284-1185",
          email: "archbasements@gmail.com",
          image: "https://storage.googleapis.com/gpt-engineer-file-uploads/Z2MCIpwUabf5d8JZ4S15c43oy4g1/social-images/social-1780156727815-General_COntracting.webp",
          areaServed: { "@type": "State", name: "New Jersey" },
          address: { "@type": "PostalAddress", addressRegion: "NJ", addressCountry: "US" },
          priceRange: "$$",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <PageTransition>
        <Outlet />
      </PageTransition>
      <Toaster richColors position="top-right" />
    </QueryClientProvider>
  );
}
