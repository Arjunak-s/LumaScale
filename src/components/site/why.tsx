import { Gauge, HeartHandshake, Rocket, UserRound } from "lucide-react";
import { Reveal } from "./reveal";

const POINTS = [
  {
    icon: UserRound,
    title: "Founder-led, always",
    body: "You brief Arjun, and Arjun builds it. Nothing gets lost in a chain of account managers.",
  },
  {
    icon: Gauge,
    title: "Fast turnaround",
    body: "Most first builds go live in days, not quarters. Momentum is the whole strategy.",
  },
  {
    icon: Rocket,
    title: "AI-first approach",
    body: "Every project uses AI where it genuinely compounds output — not as a buzzword on a slide.",
  },
  {
    icon: HeartHandshake,
    title: "Personal ownership",
    body: "Your numbers are treated like my numbers. If it isn't working, we change it — no invoicing the silence.",
  },
];

export function Why() {
  return (
    <section id="why" className="relative py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-soft)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow">Why LumaScale</p>
            <h2 className="mt-3 text-3xl font-bold text-balance sm:text-4xl">
              A small agency moves faster than your competitor's committee.
            </h2>
            <p className="mt-4 text-muted-foreground">
              LumaScale isn't a faceless studio with a stock-photo team page. It's a hands-on
              operator who ships, measures and iterates — with a bias for the version that's live
              today over the version that's perfect next month.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/40 hover:bg-secondary"
            >
              Talk to Arjun directly
            </a>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {POINTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="surface-card p-5">
                <p.icon className="h-5 w-5 text-primary" />
                <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
