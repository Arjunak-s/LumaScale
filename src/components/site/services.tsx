import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";
import { SERVICES, type Service } from "@/data/services";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;

  return (
    <Reveal as="article" delay={index * 70} className="surface-card group overflow-hidden">
      <Link
        to="/work/$slug"
        params={{ slug: service.slug }}
        className="block focus-visible:outline-none"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={service.image}
            alt={`${service.title} work by LumaScale`}
            loading="lazy"
            width={1200}
            height={900}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, transparent 35%, color-mix(in oklab, var(--ink) 78%, transparent))",
            }}
          />
          <span className="absolute top-4 left-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-background/90 text-primary backdrop-blur">
            <Icon className="h-5 w-5" />
          </span>
          <span className="absolute top-4 right-4 rounded-full bg-background/80 px-2 py-0.5 font-mono text-[10px] tracking-widest text-muted-foreground backdrop-blur">
            0{index + 1}
          </span>
          <h3 className="absolute right-5 bottom-4 left-5 text-lg font-semibold text-primary-foreground">
            {service.title}
          </h3>
        </div>

        <div className="p-6">
          <p className="text-sm text-muted-foreground">{service.hook}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
            See the work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
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
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            Open any one to see how it's built and the kind of work it produces.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
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
              href="/#contact"
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
