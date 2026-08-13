import { Bot, Clapperboard, Code2, Compass, Megaphone, type LucideIcon } from "lucide-react";

import svcWebsites from "@/assets/svc-websites.jpg";
import svcAutomations from "@/assets/svc-automations.jpg";
import svcContent from "@/assets/svc-content.jpg";
import svcAds from "@/assets/svc-ads.jpg";
import svcConsult from "@/assets/svc-consult.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

export type Project = {
  name: string;
  summary: string;
  image: string;
  tags: string[];
  result: string;
  videos?: string[];
};

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  hook: string;
  image: string;
  bullets: string[];
  intro: string;
  projects: Project[];
};

export const SERVICES: Service[] = [
  {
    slug: "websites",
    icon: Code2,
    title: "Custom Websites",
    hook: "Landing pages, business sites and web apps — built fast, built to convert.",
    image: svcWebsites,
    bullets: [
      "High-conversion landing pages",
      "Full business & portfolio sites",
      "Custom web apps and dashboards",
      "Speed, SEO and mobile-first by default",
    ],
    intro:
      "Every site is designed around one job: turn a visitor into an enquiry. Hand-built, fast on 4G, and easy for you to update.",
    projects: [
      {
        name: "Velvet Tips — Kalikapur, Kolkata",
        summary:
          "Salon & mobile beauty services: nail art, tattoos, lip blush, microblading, piercing and more — bookable at the shop or at home.",
        image: work1,
        videos: [
          "https://riclnykztdpcphkzzuhw.supabase.co/storage/v1/object/public/web-demos/WhatsApp%20Video%202026-08-12%20at%201.05.03%20PM.mp4",
        ],
        tags: ["Salon site", "Mobile services", "WhatsApp booking"],
        result: "Service demos and booking flow showcased",
      },
      {
        name: "NorthPeak Ops",
        summary:
          "Internal dashboard for a services company — job pipeline, client records and weekly reporting in one screen.",
        image: work2,
        tags: ["Web app", "Dashboard", "Auth"],
        result: "Replaced 4 spreadsheets",
      },
    ],
  },
  {
    slug: "automations",
    icon: Bot,
    title: "AI Automations",
    hook: "Never miss a lead again — your business answers in seconds, 24/7.",
    image: svcAutomations,
    bullets: [
      "AI call automation for enquiries",
      "WhatsApp automation for lead capture",
      "Instagram DM & chat auto-replies",
      "Support flows wired into your CRM",
    ],
    intro:
      "Most leads go cold because nobody replied in time. These flows answer instantly, qualify the person, and drop the details where you actually work.",
    projects: [
      {
        name: "Clinic front desk bot",
        summary:
          "WhatsApp assistant that answers timing, pricing and location questions, then books a slot and notifies the team.",
        image: work1,
        tags: ["WhatsApp", "Booking", "Handoff to human"],
        result: "Replies in under 60 seconds, always",
      },
      {
        name: "DM-to-CRM pipeline",
        summary:
          "Instagram DMs auto-triaged into hot / cold, logged to a sheet, with a daily follow-up list for the founder.",
        image: work3,
        tags: ["Instagram", "Lead scoring", "CRM sync"],
        result: "Zero enquiries lost in the inbox",
      },
    ],
  },
  {
    slug: "content",
    icon: Clapperboard,
    title: "AI Content Creation",
    hook: "Reels and short-form built with AI tools, ready to post every week.",
    image: svcContent,
    bullets: [
      "AI video/reels (Google Flow & co.)",
      "Consistent posting-ready batches",
      "Hooks, captions and scripting",
      "On-brand visual direction",
    ],
    intro:
      "Batch-produced short-form that keeps a feed alive without a shoot crew — scripted, generated, edited and captioned.",
    projects: [
      {
        name: "Studio Nine reels",
        summary:
          "Monthly batch of 12 vertical reels with hooks and captions, built around one brand look.",
        image: work3,
        tags: ["Reels", "Scripting", "Captions"],
        result: "From irregular posting to weekly",
      },
      {
        name: "Product launch cutdowns",
        summary: "One hero video cut into six platform-native edits for Reels, Shorts and ads.",
        image: work2,
        tags: ["Editing", "Repurposing"],
        result: "6 assets from a single shoot",
      },
    ],
  },
  {
    slug: "meta-ads",
    icon: Megaphone,
    title: "Meta Ad Campaigns",
    hook: "Facebook & Instagram ads that buy customers, not impressions.",
    image: svcAds,
    bullets: [
      "Offer and funnel strategy",
      "Creative production & testing",
      "Daily campaign management",
      "Transparent reporting on spend",
    ],
    intro:
      "Offer first, creative second, targeting last. Small tests, fast reads, and a plain-English report on where the money went.",
    projects: [
      {
        name: "Local service lead gen",
        summary:
          "Lead campaign with three creative angles tested weekly and instant WhatsApp follow-up on every form fill.",
        image: work1,
        tags: ["Lead ads", "Creative testing"],
        result: "Cost per lead down across the quarter",
      },
      {
        name: "D2C launch push",
        summary: "Prospecting plus retargeting stack for a new product drop, with a UGC-style creative set.",
        image: work2,
        tags: ["Retargeting", "UGC creative"],
        result: "Profitable ROAS by week three",
      },
    ],
  },
  {
    slug: "consulting",
    icon: Compass,
    title: "AI Growth Consultation",
    hook: "Specialised advisory on exactly where AI moves your numbers.",
    image: svcConsult,
    bullets: [
      "Audit of your current workflows",
      "AI opportunity map, prioritised",
      "Tool stack recommendations",
      "Rollout roadmap you can execute",
    ],
    intro:
      "A working session, not a slide deck. We map where your time goes, then pick the two or three automations worth building first.",
    projects: [
      {
        name: "Ops audit for an agency",
        summary:
          "Mapped 20 recurring tasks, scored each for AI leverage, and handed over a 90-day rollout plan.",
        image: work2,
        tags: ["Audit", "Roadmap"],
        result: "Two workflows automated in month one",
      },
      {
        name: "Founder AI stack setup",
        summary: "Tool selection, prompts and templates for a solo founder handling sales and delivery alone.",
        image: work3,
        tags: ["Tooling", "Templates"],
        result: "Hours back every week",
      },
    ],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
