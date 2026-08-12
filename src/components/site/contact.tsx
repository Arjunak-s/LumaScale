import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Check, Instagram, Loader2, Mail, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { contactSchema, submitContact } from "@/lib/contact.functions";
import { SITE } from "./brand";
import { Reveal } from "./reveal";

const CHANNELS = [
  {
    icon: Instagram,
    label: "Instagram DM",
    value: SITE.instagramHandle,
    href: SITE.instagram,
  },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat now", href: SITE.whatsapp },
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
];

export function Contact() {
  const send = useServerFn(submitContact);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = {
      name: String(fd.get("name") ?? ""),
      business: String(fd.get("business") ?? ""),
      email: String(fd.get("email") ?? ""),
      need: String(fd.get("need") ?? ""),
    };

    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setLoading(true);
    try {
      await send({ data: parsed.data });
      setDone(true);
      toast.success("Message sent — Arjun will get back to you shortly.");
    } catch {
      toast.error("Something went wrong. Try Instagram or email instead.");
    } finally {
      setLoading(false);
    }
  }

  const field =
    "mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/25";

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="surface-card overflow-hidden p-0 hover:translate-y-0 hover:shadow-[var(--shadow-lift)]">
          <div className="grid lg:grid-cols-[1fr_1.1fr]">
            <div className="relative bg-[image:var(--gradient-brand)] p-8 text-primary-foreground sm:p-10">
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-70">
                Let's talk
              </p>
              <h2 className="mt-3 text-3xl font-bold text-balance">
                Book a free growth call.
              </h2>
              <p className="mt-3 max-w-sm text-sm opacity-85">
                Tell me what you're trying to grow. If LumaScale can help, you'll get a plan. If it
                can't, you'll get a pointer in the right direction.
              </p>

              <div className="mt-8 space-y-3">
                {CHANNELS.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl bg-background/12 px-4 py-3 text-sm backdrop-blur transition-colors hover:bg-background/20"
                  >
                    <c.icon className="h-4 w-4 shrink-0" />
                    <span className="min-w-0 flex-1 truncate">{c.value}</span>
                    <span className="text-xs opacity-70">{c.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-8 sm:p-10">
              {done ? (
                <div className="flex h-full min-h-[18rem] flex-col items-center justify-center text-center">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[image:var(--gradient-brand)] text-primary-foreground">
                    <Check className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">Got it.</h3>
                  <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                    Your message is in. Expect a reply within a day — usually much sooner.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input id="name" name="name" maxLength={100} className={field} placeholder="Arjun" />
                      {errors["name"] && (
                        <p className="mt-1 text-xs text-destructive">{errors["name"]}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="business" className="text-sm font-medium">
                        Business <span className="text-muted-foreground">(optional)</span>
                      </label>
                      <input
                        id="business"
                        name="business"
                        maxLength={120}
                        className={field}
                        placeholder="Your brand"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      maxLength={255}
                      className={field}
                      placeholder="you@company.com"
                    />
                    {errors["email"] && (
                      <p className="mt-1 text-xs text-destructive">{errors["email"]}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="need" className="text-sm font-medium">
                      What do you need help with?
                    </label>
                    <textarea
                      id="need"
                      name="need"
                      rows={4}
                      maxLength={1500}
                      className={field}
                      placeholder="e.g. We get DMs but nobody replies fast enough — need WhatsApp + IG automation."
                    />
                    {errors["need"] && (
                      <p className="mt-1 text-xs text-destructive">{errors["need"]}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.01] disabled:opacity-60"
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                    {loading ? "Sending..." : "Send message"}
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    No spam, no drip sequence. Just a reply from a human.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
