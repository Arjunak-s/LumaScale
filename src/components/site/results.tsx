import { Link } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";
import { Reveal } from "./reveal";
import { SERVICES } from "@/data/services";


const METRICS = [
  ["3.4x", "Avg. return on ad spend (placeholder)"],
  ["< 60s", "Lead response time with automations"],
  ["12+", "Projects shipped end-to-end"],
  ["94%", "Clients who come back for more"],
];

const TESTIMONIALS = [
  {
    quote:
      "Placeholder testimonial — swap this for a real client quote. Keep it short, specific and about the outcome, not the vibes.",
    name: "Client name",
    role: "Founder, Business Name",
  },
  {
    quote:
      "Placeholder testimonial — the best ones mention a number: leads per week, cost per lead, hours saved.",
    name: "Client name",
    role: "Owner, Business Name",
  },
];

const LOGOS = ["Your Brand", "Client Co.", "Studio Nine", "Cafe Aurora", "NorthPeak", "Vireo"];

export function Results() {
  return (
    <section id="results" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="eyebrow">Results</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Proof, in progress.</h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            These are placeholders while the case studies get written up — real numbers and client
            names drop in here.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.flatMap((s) =>
            s.projects.map((p) => ({ ...p, slug: s.slug, service: s.title })),
          )
            .slice(0, 6)
            .map((p, i) => (
              <Reveal key={`${p.slug}-${p.name}`} delay={i * 60} className="surface-card group overflow-hidden">
                <Link to="/work/$slug" params={{ slug: p.slug }} className="block">
                  <img
                    src={p.image}
                    alt={`${p.name} — ${p.service}`}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="p-4">
                    <p className="text-sm font-semibold">{p.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{p.service}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {METRICS.map(([k, v], i) => (
            <Reveal key={v} delay={i * 70} className="surface-card p-6">
              <p className="font-display text-3xl font-bold text-gradient">{k}</p>
              <p className="mt-2 text-xs text-muted-foreground">{v}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.quote} delay={i * 90} className="surface-card p-6">
              <div className="flex items-center justify-between">
                <Quote className="h-5 w-5 text-primary" />
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-sm text-foreground">{t.quote}</p>
              <p className="mt-4 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">{t.name}</span> · {t.role}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 overflow-hidden rounded-2xl border border-border bg-card/60 py-5">
          <div className="flex w-max animate-marquee gap-12 pr-12">
            {[...LOGOS, ...LOGOS].map((l, i) => (
              <span
                key={`${l}-${i}`}
                className="font-display text-lg font-semibold whitespace-nowrap text-muted-foreground/60"
              >
                {l}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
