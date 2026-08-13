import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";
import { SERVICES, getService } from "@/data/services";
import { SITE } from "@/components/site/brand";
import { ReelsGallery } from "@/components/site/reels";

export const Route = createFileRoute("/work/$slug")({
  component: WorkPage,
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ params }) => {
    const service = getService(params.slug);
    const title = service
      ? `${service.title} — Work by LumaScale`
      : "Work — LumaScale";
    const desc = service ? service.hook : "Selected work by LumaScale.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
      ],
    };
  },
});

function WorkPage() {
  const { slug } = Route.useParams();
  const service = getService(slug);
  if (!service) return null;
  const Icon = service.icon;
  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <main className="relative overflow-x-clip">
      <SiteNav />

      <section className="relative pt-28 pb-10 sm:pt-36">
        <div className="grid-veil pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to LumaScale
          </Link>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
                <Icon className="h-3.5 w-3.5 text-primary" />
                Service
              </span>
              <h1 className="mt-5 text-4xl leading-[1.05] font-bold text-balance sm:text-5xl">
                {service.title}
              </h1>
              <p className="mt-4 max-w-xl text-base text-muted-foreground">{service.intro}</p>
              <ul className="mt-6 grid max-w-lg gap-2 sm:grid-cols-2">
                {service.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
                >
                  Start a project
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary/40 hover:bg-secondary"
                >
                  See more on {SITE.instagramHandle}
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-lift)]">
              <img
                src={service.image}
                alt={`${service.title} — LumaScale`}
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Projects in this service.</h2>
          </Reveal>

          <div className="mt-10 space-y-6">
            {service.projects.map((p, i) => (
              <Reveal
                key={p.name}
                delay={i * 80}
                className="surface-card grid overflow-hidden md:grid-cols-2"
              >
                <div className={`aspect-[4/3] overflow-hidden md:aspect-auto ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  {p.videos && p.videos.length > 0 ? (
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      className="h-full max-h-[24rem] w-full object-cover bg-black"
                      crossOrigin="anonymous"
                      onError={(e) => console.error('Project video error', e)}
                    >
                      <source src={p.videos[0]} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="h-full max-h-[24rem] w-full object-cover"
                    />
                  )}
                </div>
                <div className="flex flex-col justify-center p-7">
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{p.summary}</p>
                  <p className="mt-4 font-display text-lg font-bold text-gradient">{p.result}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            Client names on some projects are withheld until case studies are published.
          </p>
          {/* Show Reels gallery only for the Content service */}
          {service.slug === "content" && (
            <div className="mt-12">
              <ReelsGallery />
            </div>
          )}
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">Other services</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((s) => (
              <Link
                key={s.slug}
                to="/work/$slug"
                params={{ slug: s.slug }}
                className="surface-card group overflow-hidden"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="p-4 text-sm font-semibold">{s.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
