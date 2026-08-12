import mark from "@/assets/lumascale-mark.png";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#top"
      className={cn("group flex items-center gap-2", className)}
      aria-label="LumaScale home"
    >
      <img
        src={mark}
        alt=""
        width={32}
        height={32}
        className="h-8 w-8 transition-transform duration-500 group-hover:rotate-12"
      />
      <span className="font-display text-lg font-bold tracking-tight">
        Luma<span className="text-gradient">Scale</span>
      </span>
    </a>
  );
}

export const SITE = {
  instagram: "https://instagram.com/luma.scale",
  instagramHandle: "@luma.scale",
  whatsapp: "https://wa.me/919999999999",
  email: "arjun@lumascale.in",
  domain: "lumascale.in",
};
