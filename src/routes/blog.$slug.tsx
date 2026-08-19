import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, Tag, ArrowUpRight } from "lucide-react";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { BLOG_POSTS, getBlogPost } from "@/data/blog";
import { SITE } from "@/components/site/brand";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPost,
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return { slug: post.slug };
  },
  head: ({ params }) => {
    const post = getBlogPost(params.slug);
    const title = post ? `${post.title} — LumaScale` : "Blog — LumaScale";
    const desc = post?.description ?? "AI growth insights by LumaScale.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `https://www.lumascale.in/blog/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
      ],
      links: [
        { rel: "canonical", href: `https://www.lumascale.in/blog/${params.slug}` },
      ],
      scripts: post
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: post.title,
                description: post.description,
                datePublished: post.date,
                author: {
                  "@type": "Person",
                  name: "Arjun",
                  url: "https://www.lumascale.in",
                },
                publisher: {
                  "@type": "Organization",
                  name: "LumaScale",
                  url: "https://www.lumascale.in",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.lumascale.in/logo.png",
                  },
                },
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": `https://www.lumascale.in/blog/${post.slug}`,
                },
              }),
            },
          ]
        : [],
    };
  },
});

const CATEGORY_COLORS: Record<string, string> = {
  "AI Automations": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "AI Content": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Websites: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

function BlogPost() {
  const { slug } = Route.useParams();
  const post = getBlogPost(slug);
  if (!post) return null;

  const others = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <main className="relative overflow-x-clip">
      <SiteNav />

      {/* Header */}
      <section className="relative pt-28 pb-10 sm:pt-36">
        <div className="grid-veil pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-5">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All articles
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${CATEGORY_COLORS[post.category] ?? ""}`}
            >
              <Tag className="h-2.5 w-2.5" />
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" /> {post.readTime}
            </span>
            <span className="text-xs text-muted-foreground">
              {new Date(post.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl text-balance">
            {post.title}
          </h1>
          <p className="mt-4 text-base text-muted-foreground">{post.description}</p>

          <div className="mt-5 flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-xs font-bold text-white">
              A
            </div>
            <div>
              <div className="text-sm font-medium">Arjun · LumaScale</div>
              <div className="text-xs text-muted-foreground">Founder</div>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="pb-16">
        <div className="mx-auto max-w-3xl px-5">
          <div
            className="prose-blog"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 border-t border-border">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium">
            Ready to act on this?
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Let's build it for your business.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Free 20-minute call. We'll tell you exactly what makes sense for
            your situation — even if it's "not yet."
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
            >
              Book a free call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary/40"
            >
              See work on {SITE.instagramHandle}
            </a>
          </div>
        </div>
      </section>

      {/* More posts */}
      {others.length > 0 && (
        <section className="pb-20">
          <div className="mx-auto max-w-3xl px-5">
            <p className="eyebrow mb-6">More articles</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group surface-card p-6 transition-all hover:border-primary/30"
                >
                  <span
                    className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium mb-3 ${CATEGORY_COLORS[p.category] ?? ""}`}
                  >
                    {p.category}
                  </span>
                  <h3 className="font-semibold leading-snug group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
                    {p.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </main>
  );
}
