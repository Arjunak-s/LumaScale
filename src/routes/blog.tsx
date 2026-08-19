import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";
import { BLOG_POSTS } from "@/data/blog";

const TITLE = "Blog — LumaScale | AI Growth Insights";
const DESC =
  "Practical guides on AI automations, WhatsApp bots, AI content creation, and website conversion — written for Indian small businesses.";

export const Route = createFileRoute("/blog")({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://www.lumascale.in/blog" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "https://www.lumascale.in/blog" }],
  }),
});

const CATEGORY_COLORS: Record<string, string> = {
  "AI Automations": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "AI Content": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Websites: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

function BlogIndex() {
  const featured = BLOG_POSTS[0];
  const rest = BLOG_POSTS.slice(1);

  return (
    <main className="relative overflow-x-clip">
      <SiteNav />

      {/* Hero */}
      <section className="relative pt-28 pb-12 sm:pt-36">
        <div className="grid-veil pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="eyebrow">LumaScale Blog</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl text-balance">
              AI Growth Insights for<br />
              <span className="text-gradient">Ambitious Businesses</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground">
              Practical guides on WhatsApp bots, AI content, website conversion,
              and Meta ads — written for Indian small businesses.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-8">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              className="group surface-card grid overflow-hidden md:grid-cols-[1fr_0.55fr] gap-0 transition-all hover:border-primary/30"
            >
              <div className="p-8 sm:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${CATEGORY_COLORS[featured.category] ?? ""}`}
                  >
                    <Tag className="h-2.5 w-2.5" />
                    {featured.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" /> {featured.readTime}
                  </span>
                </div>
                <h2 className="text-2xl font-bold leading-snug sm:text-3xl text-balance group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-4 text-sm text-muted-foreground line-clamp-3">
                  {featured.description}
                </p>
                <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Read article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-primary/5 via-primary/10 to-secondary p-10">
                <div className="text-center">
                  <div className="text-6xl mb-3">🤖</div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-widest">
                    Featured
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Rest of posts */}
      <section className="py-8 pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-5 sm:grid-cols-2">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 80}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="group surface-card flex flex-col h-full overflow-hidden transition-all hover:border-primary/30"
                >
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${CATEGORY_COLORS[post.category] ?? ""}`}
                      >
                        <Tag className="h-2.5 w-2.5" />
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" /> {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm text-muted-foreground line-clamp-3 flex-1">
                      {post.description}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Read article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
