import { CupSoda, Globe2, UtensilsCrossed } from "lucide-react";
import { Reveal } from "./reveal";

const NEXT = [
  {
    icon: Globe2,
    tag: "In progress",
    title: "B2B Sourcing & Distribution",
    body: "An international sourcing network connecting verified suppliers from China and Uzbekistan directly to businesses here.",
  },
  {
    icon: UtensilsCrossed,
    tag: "Coming soon",
    title: "Restaurant Consulting",
    body: "AI-driven growth and operations consulting built specifically for restaurants — from footfall to reorder rate.",
  },
  {
    icon: CupSoda,
    tag: "Coming soon",
    title: "A new consumer brand is brewing",
    body: "An original beverage brand is in the works. No name yet — but the recipe's already moving.",
  },
];

export function WhatsNext() {
  return (
    <section id="next" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">New &amp; upcoming</p>
            <h2 className="mt-3 text-3xl font-bold text-balance sm:text-4xl">
              What's next at LumaScale
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Ventures currently being built. Early conversations welcome — these aren't fully live
            yet.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {NEXT.map((n, i) => (
            <Reveal key={n.title} delay={i * 90} className="surface-card relative p-6">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-secondary text-primary">
                  <n.icon className="h-5 w-5" />
                </span>
                <span className="rounded-full border border-primary/25 bg-primary/8 px-2.5 py-1 font-mono text-[10px] tracking-widest text-primary uppercase">
                  {n.tag}
                </span>
              </div>
              <h3 className="mt-5 text-base font-semibold">{n.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{n.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
