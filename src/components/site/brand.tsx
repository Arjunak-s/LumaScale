import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="/" className={cn("group flex items-center gap-2", className)} aria-label="LumaScale home">
      {/* Put your attached logo at /public/logo.png (place the image there) */}
      <img
        src="/logo.png"
        alt="LumaScale"
        width={40}
        height={40}
        className="h-10 w-10 transition-transform duration-500 group-hover:rotate-12 rounded"
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
  whatsapp: "https://wa.me/919958078417",
  email: "arjun@lumascale.in",
  domain: "lumascale.in",
};
