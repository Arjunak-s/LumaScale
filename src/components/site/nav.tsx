import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./brand";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#why", label: "Why us" },
  { href: "/#next", label: "What's next" },
  { href: "/#process", label: "Process" },
  { href: "/#results", label: "Results" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "backdrop-blur-xl" : "",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 transition-all duration-300",
          scrolled
            ? "my-2 rounded-2xl border border-border/70 bg-card/80 py-2.5 shadow-[var(--shadow-lift)]"
            : "my-3 border border-transparent py-3",
        )}
      >
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/#contact"
            className="hidden items-center gap-1.5 rounded-full bg-[image:var(--gradient-brand)] px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform duration-200 hover:scale-[1.03] sm:inline-flex"
          >
            Book a free call <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-3 animate-scale-in rounded-2xl border border-border bg-card p-2 shadow-[var(--shadow-glow)] md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-xl bg-[image:var(--gradient-brand)] px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Book a free growth call
          </a>
        </div>
      )}
    </header>
  );
}
