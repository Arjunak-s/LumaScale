import { Reveal } from "./reveal";

const STEPS = [
  {
    k: "Discover",
    body: "A 30-minute call. Your offer, your numbers, your bottleneck — no generic questionnaire.",
  },
  {
    k: "Build",
    body: "Site, automation or campaign gets built fast, with previews you can react to in days.",
  },
  {
    k: "Launch",
    body: "We ship it live, wire up tracking, and make sure every lead lands somewhere you'll see it.",
  },
  {
    k: "Grow",
    body: "Iterate on what the data says: creative, copy, funnel, spend. Compounding, not one-off.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="eyebrow">How we work</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Four steps. No mystery.</h2>
        </Reveal>

        <ol className="relative mt-12 grid gap-5 md:grid-cols-4">
          <div
            className="pointer-events-none absolute top-[2.35rem] right-0 left-0 hidden h-px md:block"
            style={{ background: "var(--gradient-brand)", opacity: 0.35 }}
            aria-hidden="true"
          />
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.k} delay={i * 90} className="relative">
              <div className="flex items-center gap-3">
                <span className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[image:var(--gradient-brand)] font-display text-sm font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <span className="h-px flex-1 bg-border md:hidden" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{s.k}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
