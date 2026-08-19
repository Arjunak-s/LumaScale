export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  body: string; // markdown-style paragraphs stored as HTML string
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "whatsapp-bot-save-10-hours-week",
    title: "How a WhatsApp Bot Saves Small Businesses 10+ Hours Every Week",
    description:
      "Most small business owners lose hours every day answering the same questions on WhatsApp. Here's exactly how an AI bot fixes that — and what it costs.",
    date: "2026-08-19",
    readTime: "5 min read",
    category: "AI Automations",
    body: `
<p>If you run a clinic, salon, coaching business, or any service-based company in India, you already know this pain: your phone never stops buzzing with WhatsApp messages asking the same five questions.</p>

<p><em>"What are your timings?"</em><br/><em>"What's the price for X?"</em><br/><em>"Is there availability on Saturday?"</em><br/><em>"Where are you located?"</em><br/><em>"Can I book for next week?"</em></p>

<p>You answer them manually, one by one, often at midnight, often while doing something else. It feels like customer service. It's actually data entry.</p>

<h2>What an AI WhatsApp Bot Actually Does</h2>

<p>A WhatsApp automation bot connects to your business WhatsApp number and responds to incoming messages automatically — instantly, 24/7, without you touching the phone.</p>

<p>It can:</p>
<ul>
  <li>Answer FAQs (timings, pricing, location, services)</li>
  <li>Collect lead information (name, requirement, budget)</li>
  <li>Send booking confirmations and reminders</li>
  <li>Route hot leads to you directly while filtering out tyre-kickers</li>
  <li>Follow up automatically with people who didn't reply</li>
</ul>

<h2>The Time Math</h2>

<p>The average service business owner spends 2–3 hours daily on WhatsApp enquiries. That's 15+ hours a week — almost two full working days — spent on messages that a bot could handle in milliseconds.</p>

<p>After setting up a WhatsApp bot for a Kolkata clinic, their front desk went from answering 80+ messages a day to reviewing 10 qualified leads forwarded by the bot. Same revenue, 87% less time on chat.</p>

<h2>How It's Built</h2>

<p>At LumaScale, we build these flows using a combination of WhatsApp Business API, n8n (an automation platform), and AI language models for natural conversation. The setup takes 3–5 days and runs entirely in the background once live.</p>

<p>You get a dashboard where you can see every conversation, update answers, and track how many leads the bot captured each week.</p>

<h2>What It Costs vs What It Saves</h2>

<p>A custom WhatsApp automation setup from LumaScale starts at a one-time build fee, with minimal monthly running costs. Compare that to the cost of your time: if your hourly value is ₹500, those 15 hours a week cost you ₹30,000/month in lost productivity.</p>

<p>The bot pays for itself in the first month — and then keeps paying every month after.</p>

<h2>Is It Right for You?</h2>

<p>WhatsApp bots work best when you have repetitive enquiries, clear pricing or services, and a team that's too busy to reply fast. If leads go cold because you didn't reply within an hour, a bot will directly increase your revenue.</p>

<p>If you're curious whether it makes sense for your specific business, <a href="/#contact">send us a message</a> — we'll give you an honest answer within 24 hours.</p>
    `,
  },
  {
    slug: "ai-content-creation-reels-small-business",
    title: "AI Content Creation for Small Businesses: Post Every Week Without a Crew",
    description:
      "Consistent social media content is the #1 thing most small businesses fail at. AI tools have changed the equation completely — here's how.",
    date: "2026-08-15",
    readTime: "6 min read",
    category: "AI Content",
    body: `
<p>Every business owner knows they should be posting on Instagram regularly. Almost none of them actually do it consistently. The reason isn't laziness — it's that good content is genuinely hard to produce without a team, a camera setup, and hours of editing time.</p>

<p>AI has changed this equation completely in 2026.</p>

<h2>What AI Content Creation Actually Means</h2>

<p>It doesn't mean pressing a button and getting perfect reels. It means using AI tools — Google Flow, Runway, ElevenLabs, CapCut AI, and others — to dramatically compress the time it takes to script, generate, edit, and caption video content.</p>

<p>A piece of content that used to take a day to shoot and edit now takes 2–4 hours to produce with AI tools — without a camera, without a studio, and without a video editor on payroll.</p>

<h2>What an AI Content Batch Looks Like</h2>

<p>At LumaScale, we produce content in monthly batches. For a typical client, one batch includes:</p>
<ul>
  <li>8–12 short-form reels (15–60 seconds each)</li>
  <li>AI-generated visuals and footage tailored to their brand</li>
  <li>Scripted hooks and spoken narration</li>
  <li>Captions with relevant hashtags</li>
  <li>A posting schedule so they know exactly when to publish each one</li>
</ul>

<p>The client gets a Google Drive folder with everything ready to upload. No editing required on their end.</p>

<h2>Why Consistency Beats Virality</h2>

<p>Most businesses chase viral moments. The algorithm rewards consistency. A page that posts three times a week, every week, for six months will always outperform a page that posts 10 times in one week and then disappears for a month.</p>

<p>AI makes consistency achievable for a one-person business for the first time. You don't need to be on camera every day. You don't need to hire a video team. You need a system — and AI is now good enough to power that system.</p>

<h2>The Results We've Seen</h2>

<p>One of our clients, a boutique studio in Kolkata, went from posting twice a month (inconsistently) to publishing three reels per week on a fixed schedule. Within 90 days, their follower growth tripled and they started getting inbound enquiries directly from Instagram for the first time.</p>

<p>The content itself wasn't viral. It was just consistent, on-brand, and regular. That's all it took.</p>

<h2>Is AI Content "Fake"?</h2>

<p>This is the most common concern we hear. AI-generated visuals are a tool, just like stock footage or graphic design software. What matters is whether the content communicates your value, speaks to your audience, and looks professional. AI gets you there faster — the strategy and brand voice still come from you.</p>

<p>Want to see examples of AI reels we've produced? <a href="/work/content">View our content work here.</a></p>
    `,
  },
  {
    slug: "why-your-website-is-losing-you-leads",
    title: "5 Reasons Your Website Is Losing You Leads (And How to Fix Each One)",
    description:
      "A slow, unclear, or outdated website doesn't just fail to convert — it actively drives potential clients away. Here's what to look for and fix.",
    date: "2026-08-10",
    readTime: "7 min read",
    category: "Websites",
    body: `
<p>Most business owners think their website is fine. It looks okay, it loads eventually, and it has a contact form somewhere. But "fine" websites don't convert visitors into leads. Here are the five most common problems we see — and what actually fixes them.</p>

<h2>1. It Takes More Than 3 Seconds to Load</h2>

<p>53% of mobile users abandon a website that takes longer than 3 seconds to load. If your site was built on a heavy WordPress theme with a page builder, it probably loads in 6–10 seconds on mobile. Every extra second costs you roughly 7% of your conversions.</p>

<p><strong>Fix:</strong> Rebuild on a modern framework (we use TanStack + Vite) with image optimization, minimal JavaScript, and CDN hosting. Properly built sites load in under 1.5 seconds.</p>

<h2>2. The Homepage Doesn't Answer "What Do You Do" in 5 Seconds</h2>

<p>Visitors make a decision about whether to stay within 5 seconds of landing on your site. If your hero section says something vague like "Empowering businesses through excellence," they leave. Immediately.</p>

<p><strong>Fix:</strong> Your headline should answer three things: what you do, who you do it for, and what outcome they get. Example: "WhatsApp bots for Indian clinics that book appointments automatically." Clear beats clever every time.</p>

<h2>3. There's No Clear Next Step</h2>

<p>A visitor reads your homepage and thinks "okay, this seems interesting" — and then has no idea what to do next. There's no obvious CTA, or there are five different ones fighting for attention.</p>

<p><strong>Fix:</strong> One primary call to action, repeated 3–4 times throughout the page. Make it specific: "Book a free 20-min call" beats "Contact us." Tell them exactly what happens when they click.</p>

<h2>4. It's Not Built for Mobile</h2>

<p>Over 75% of Indian internet users browse primarily on mobile. If your website was designed on a desktop and "adapted" for mobile as an afterthought, it shows — and it kills conversions on your biggest traffic source.</p>

<p><strong>Fix:</strong> Design mobile-first. Every layout decision, font size, button size, and spacing should be tested on a phone before a desktop. We build every LumaScale site mobile-first by default.</p>

<h2>5. No Social Proof Above the Fold</h2>

<p>Trust is the #1 conversion factor for service businesses. If a visitor can't see any evidence that real people have worked with you and gotten results within the first screen, their guard stays up.</p>

<p><strong>Fix:</strong> Add client logos, a result stat ("₹40L in leads generated"), or a one-line testimonial in the first section of your homepage. Even one piece of social proof dramatically increases time-on-page and enquiry rates.</p>

<h2>Want a Free Audit?</h2>

<p>If you're not sure which of these applies to your site, <a href="/#contact">send us your URL</a> and we'll take a look and tell you exactly what's costing you leads — no charge.</p>
    `,
  },
];

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
