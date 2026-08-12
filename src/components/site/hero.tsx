import { ArrowUpRight, Instagram, Sparkles } from "lucide-react";
import { SITE } from "./brand";
import { Reveal } from "./reveal";

function NetworkMotif() {
  const nodes = [
    [50, 12],
    [16, 32],
    [84, 33],
    [28, 70],
    [72, 71],
    [50, 50],
    [50, 90],
  ];
  const edges: [number, number][] = [
    [5, 0],
    [5, 1],
    [5, 2],
    [5, 3],
    [5, 4],
    [5, 6],
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 4],
    [3, 6],
    [4, 6],
  ];
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="lsg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.17 0.035 259)" />
          <stop offset="60%" stopColor="oklch(0.53 0.22 262)" />
          <stop offset="100%" stopColor="oklch(0.78 0.13 210)" />
        </linearGradient>
      </defs>
      <g className="animate-orbit" style={{ transformOrigin: "50px 50px" }}>
        <circle cx="50" cy="50" r="38" fill="none" stroke="url(#lsg)" strokeWidth="0.25" />
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="url(#lsg)"
          strokeWidth="0.25"
          strokeDasharray="2 3"
        />
      </g>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a]![0]}
          y1={nodes[a]![1]}
          x2={nodes[b]![0]}
          y2={nodes[b]![1]}
          stroke="url(#lsg)"
          strokeWidth="0.35"
          opacity="0.55"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={i === 5 ? 3.4 : 1.9} fill="url(#lsg)" />
          <circle cx={x} cy={y} r={i === 5 ? 7 : 4.4} fill="url(#lsg)" opacity="0.12">
            <animate
              attributeName="r"
              values={i === 5 ? "7;11;7" : "4.4;7;4.4"}
              dur={`${3 + i * 0.45}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.16;0.02;0.16"
              dur={`${3 + i * 0.45}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="grid-veil pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="animate-drift pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--electric) 22%, transparent), transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Founder-led · AI-first · shipping from India
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl leading-[1.05] font-bold text-balance sm:text-6xl">
              Your unfair advantage is <span className="text-gradient">AI that actually ships</span>
              .
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              LumaScale builds the websites, automations and campaigns that turn attention into
              revenue — designed, built and run personally by Arjun. No account managers, no
              six-week discovery decks. Just fast, compounding growth systems.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-200 hover:scale-[1.03]"
              >
                Book a Free Growth Call
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-secondary"
              >
                <Instagram className="h-4 w-4" />
                DM {SITE.instagramHandle}
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-6">
              {[
                ["48h", "First build preview"],
                ["5", "Growth services under one roof"],
                ["1:1", "You talk to the founder"],
              ].map(([k, v]) => (
                <div key={v}>
                  <dt className="font-display text-2xl font-bold text-gradient">{k}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          {/* Easter egg: the console says hi to curious devs */}
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-[2rem] border border-border bg-card/60 backdrop-blur-sm" />
            <div className="absolute inset-4">
              <NetworkMotif />
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-border bg-card/90 px-3 py-1 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
              luma · scale · repeat
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
