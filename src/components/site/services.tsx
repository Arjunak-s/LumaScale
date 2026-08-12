import { useState } from "react";
import {
  Bot,
  Clapperboard,
  Code2,
  Compass,
  Megaphone,
  Plus,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

type Service = {
  icon: LucideIcon;
  title: string;
  hook: string;
  bullets: string[];
};

const SERVICES: Service[] = [
  {
    icon: Code2,
    title: "Custom Websites",
    hook: "Landing pages, business sites and web apps — built fast, built to convert.",
    bullets: [
      "High-conversion landing pages",
      "Full business & portfolio sites",
      "Custom web apps and dashboards",
      "Speed, SEO and mobile-first by default",
    ],
  },
  {
    icon: Bot,
    title: "AI Automations",
    hook: "Never miss a lead again — your business answers in seconds, 24/7.",
    bullets: [
      "AI call automation for enquiries",
      "WhatsApp automation for lead capture",
      "Instagram DM & chat auto-replies",
      "Support flows wired into your CRM",
    ],
  },
  {
    icon: Clapperboard,
    title: "AI Content Creation",
    hook: "Reels and short-form built with AI tools, ready to post every week.",
    bullets: [
      "AI video/reels (Google Flow & co.)",
      "Consistent posting-ready batches",
      "Hooks, captions and scripting",
      "On-brand visual direction",
    ],
  },
  {
    icon: Megaphone,
    title: "Meta Ad Campaigns",
    hook: "Facebook & Instagram ads that buy customers, not impressions.",
    bullets: [
      "Offer and funnel strategy",
      "Creative production & testing",
      "Daily campaign management",
      "Transparent reporting on spend",
    ],
  },
  {
    icon: Compass,
    title: "AI Growth Consultation",
    hook: "Specialised advisory on exactly where AI moves your numbers.",
    bullets: [
      "Audit of your current workflows",
      "AI opportunity map, prioritised",
      "Tool stack recommendations",
      "Rollout roadmap you can execute",
    ],
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [open, setOpen] = useState(false);
  const Icon = service.icon;

  return (
    <Reveal
      as="article"
      delay={index * 70}
      className={cn("surface-card group relative overflow-hidden p-6", index === 0 && "lg:row-span-1")}
    >
      <div
        className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--electric) 30%, transparent), transparent 70%)",
        }}
      />
      <div className="relative flex items-start justify-between gap-4">
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground">
          <Icon className="h-5 w-5" />
        </span>
        <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
          0{index + 1}
        </span>
      </div>

      <h3 className="relative mt-5 text-lg font-semibold">{service.title}</h3>
      <p className="relative mt-2 text-sm text-muted-foreground">{service.hook}</p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
      >
        <Plus
          className={cn("h-4 w-4 transition-transform duration-300", open && "rotate-45")}
        />
        {open ? "Hide details" : "What's included"}
      </button>

      <div
        className={cn(
          "relative grid transition-all duration-500 ease-out",
          open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <ul className="overflow-hidden space-y-2 text-sm text-muted-foreground">
          {service.bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="eyebrow">What we do</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold text-balance sm:text-4xl">
            Five services. One operator. Everything pointed at revenue.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}

          <Reveal
            delay={SERVICES.length * 70}
            className="surface-card flex flex-col justify-between bg-[image:var(--gradient-brand)] p-6 text-primary-foreground"
          >
            <div>
              <h3 className="text-lg font-semibold">Not sure which one you need?</h3>
              <p className="mt-2 text-sm opacity-85">
                Send one message about your business. You'll get an honest answer — even if the
                answer is "you don't need this yet."
              </p>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex w-fit rounded-full bg-background/95 px-5 py-2.5 text-sm font-semibold text-foreground transition-transform hover:scale-[1.03]"
            >
              Get a straight answer
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
