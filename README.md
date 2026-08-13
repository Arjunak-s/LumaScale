# LumaScale: AI Growth Ignition

Build a modern, high-conversion agency website called "LumaScale" using Next.js,
Tailwind CSS, and shadcn/ui components. This is a real business website for a
solo-founder AI/growth agency — it needs to feel premium, fast, and trustworthy,
not like a generic template.

FOUNDER / BRAND CONTEXT
- Founder: Arjun, a BTech student in India who runs LumaScale as a hands-on,
  personally-run agency (not a faceless company) — the tone should feel like
  "a sharp young operator who ships fast," confident but not corporate.
- Contact: Instagram @luma.scale , Email arjun@lumascale.in
- Domain: lumascale.in

CORE SERVICES (make each its own service block/card, with an icon, a one-line
hook, and 3-4 bullet points of what's included):
1. Custom Websites — landing pages, business sites, and web apps built fast
2. AI Automations — call automation, WhatsApp automation, Instagram DM/chat
   automation for lead capture and customer support
3. AI Content Creation — short-form video/reels made with AI tools (e.g. Google
   Flow), consistent posting-ready content for brands
4. Meta Ad Campaigns — Facebook/Instagram ad strategy, creative, and management
5. AI Growth Consultation — specialised advisory for businesses on where/how to
   use AI to grow

Upcoming/ "NEW" Plans (show these in a distinct "What's Next at LumaScale"
or "New & Upcoming" section so they don't get lost among the core services —
this builds credibility that LumaScale is expanding, without implying they're
fully live yet):
- B2B Sourcing & Distribution — building an international sourcing network
  connecting suppliers from China and Uzbekistan to businesses
- Restaurant Consulting — AI-driven growth and ops consulting for restaurants
  (coming soon)
- Own Beverage Brand — launching an original drink brand (coming soon, no
  public name yet — keep this vague/teaser-style, just "a new consumer brand
  is brewing")

PAGE STRUCTURE
1. Hero — bold headline + subheadline that positions LumaScale as an
   AI-powered growth partner for businesses, a primary CTA ("Book a Free
   Growth Call" or similar) and a secondary CTA (Instagram/WhatsApp),
   plus a clean animated/visual element (abstract AI/network motif, not stock
   photos of people).
2. Services — the 5 core services as cards/grid, each expandable or linking
   to more detail.
3. Why LumaScale — founder-led agility, fast turnaround, AI-first approach,
   personal ownership of every project (short trust-building section).
4. What's Next — the 3 emerging offerings (sourcing network, restaurant
   consulting, drink brand) as a teaser section.
5. Process — simple 3-4 step "how we work" timeline (e.g. Discover → Build →
   Launch → Grow).
6. Results / Social Proof — a placeholder section for logos, testimonials, or
   metrics (use tasteful placeholders I can swap in real results later).
7. Contact / CTA — a contact form (name, business, email, what they need
   help with), plus direct links to Instagram DM, WhatsApp, and email.
8. Footer — logo, nav links, social icons, email, copyright.

DESIGN DIRECTION
- modern, "AI-native" aesthetic - really great make by your judgement light themed but high figh many elements and artistic and creative easter eggs
- Subtle motion: fade/slide-in on scroll, hover states on cards and buttons,
  a subtle animated gradient or particle/network background in the hero only
  — keep it tasteful and fast-loading, not gimmicky.
- Fully responsive, mobile-first — most visitors will come from Instagram on
  mobile.
- Fast load, minimal dependencies, good Lighthouse score.

FUNCTIONALITY
- Working contact form that captures submissions (connect to Supabase).
- Sticky nav with smooth-scroll to sections, mobile hamburger menu.
- Clear, repeated CTAs throughout (not just one button at the top).
- SEO basics: meta title/description, Open Graph tags, favicon.

Build this as a single polished landing page first (all sections above on one
page with anchor navigation), not a multi-page site — keep it simple to launch
fast. Use placeholder copy where I haven't given exact wording, but keep the
structure and service descriptions above accurate.

This repository contains the LumaScale landing page. Remove or replace any third-party editor integrations before connecting to your own GitHub.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

Note: If you previously used a third-party editor or platform to scaffold this project, check for platform-specific files (e.g., CI hooks or tool-specific config) and remove them before pushing to a new GitHub repository.
