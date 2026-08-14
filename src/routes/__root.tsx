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

import appCss from "../styles.css?url";
import { Toaster } from "@/components/ui/sonner";
import { reportClientError } from "../lib/lovable-error-reporting";

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
    reportClientError(error, { boundary: "tanstack_root_error_component" });
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
        {error && (
          <details open className="mt-3 text-left rounded bg-muted/80 p-3 text-xs text-foreground overflow-auto max-h-60">
            <summary className="cursor-pointer font-mono font-medium text-destructive">
              Error: {String(error?.message || error)}
            </summary>
            {error instanceof Error && error.stack ? (
              <pre className="mt-2 whitespace-pre-wrap font-mono text-[11px] text-muted-foreground">
                {error.stack}
              </pre>
            ) : null}
          </details>
        )}
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
      { title: "LumaScale — AI Growth Partner" },
      { name: "description", content: "LumaScale builds custom websites, AI automations, AI content, and Meta ad campaigns that turn attention into revenue. Founder-led, fast, AI-first." },
      { name: "author", content: "Arjun · LumaScale" },
      { name: "keywords", content: "AI agency, AI automation, custom websites, Meta ads, AI content creation, WhatsApp automation, Instagram automation, lead generation, LumaScale, Arjun" },
      { name: "theme-color", content: "#0a0a0f" },
      { name: "robots", content: "index, follow" },
      // Open Graph
      { property: "og:site_name", content: "LumaScale" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://lumascale.in/" },
      { property: "og:title", content: "LumaScale — AI Growth Partner for Ambitious Businesses" },
      { property: "og:description", content: "LumaScale builds custom websites, AI automations, AI content, and Meta ad campaigns that turn attention into revenue." },
      { property: "og:image", content: "https://lumascale.in/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      // Twitter / X card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@lumascale" },
      { name: "twitter:title", content: "LumaScale — AI Growth Partner" },
      { name: "twitter:description", content: "Custom websites, AI automations, short-form content, and Meta ads — all AI-first." },
      { name: "twitter:image", content: "https://lumascale.in/og-image.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "canonical", href: "https://lumascale.in/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
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
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <Toaster position="top-center" richColors />
    </QueryClientProvider>
  );
}
