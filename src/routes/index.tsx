import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Services } from "@/components/site/services";
import { Why } from "@/components/site/why";
import { WhatsNext } from "@/components/site/whats-next";
import { Process } from "@/components/site/process";
import { Results } from "@/components/site/results";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/footer";

const TITLE = "LumaScale — AI Growth Partner for Ambitious Businesses";
const DESC =
  "LumaScale builds custom websites, AI automations, AI content, and Meta ad campaigns that turn attention into revenue. Founder-led, fast, AI-first.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "LumaScale",
          description: DESC,
          email: "arjun@lumascale.in",
          url: "https://lumascale.in",
          founder: { "@type": "Person", name: "Arjun" },
          areaServed: "Worldwide",
          sameAs: ["https://instagram.com/luma.scale"],
        }),
      },
    ],
  }),
});

function Index() {
  useEffect(() => {
    // Easter egg for the curious
    console.log(
      "%cLumaScale%c  built fast, by hand. Poking around? DM @luma.scale — I like people who open devtools.",
      "font-weight:700;font-size:14px;color:#2f5bff",
      "color:#64748b",
    );
  }, []);

  return (
    <main className="relative overflow-x-clip">
      <SiteNav />
      <Hero />
      <Services />
      <Why />
      <WhatsNext />
      <Process />
      <Results />
      <Contact />
      <SiteFooter />
    </main>
  );
}
