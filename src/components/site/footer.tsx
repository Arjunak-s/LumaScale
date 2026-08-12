import { Instagram, Mail, MessageCircle } from "lucide-react";
import { Logo, SITE } from "./brand";

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why us" },
  { href: "#next", label: "What's next" },
  { href: "#process", label: "Process" },
  { href: "#results", label: "Results" },
  { href: "#contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-3 text-sm text-muted-foreground">
              AI-powered growth systems for businesses that want to move now. Built personally by
              Arjun.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm sm:grid-cols-2">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div>
            <div className="flex gap-2">
              {[
                { href: SITE.instagram, icon: Instagram, label: "Instagram" },
                { href: SITE.whatsapp, icon: MessageCircle, label: "WhatsApp" },
                { href: `mailto:${SITE.email}`, icon: Mail, label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-3 block text-sm text-muted-foreground hover:text-foreground"
            >
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} LumaScale · {SITE.domain}</p>
          <p className="font-mono tracking-widest uppercase">Built fast. Built by hand.</p>
        </div>
      </div>
    </footer>
  );
}
