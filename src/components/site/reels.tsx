import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type Reel = {
  id: number;
  title: string;
  description?: string | null;
  public_url?: string | null;
  storage_path?: string | null;
  thumbnail_url?: string | null;
};

export function ReelsGallery() {
  const [reels, setReels] = useState<Reel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const { data, error } = await supabase
          .from("reels")
          .select("id,title,description,public_url,storage_path,thumbnail_url")
          .order("created_at", { ascending: false })
          .limit(100);
        if (error) {
          console.error("Supabase reels query error:", error);
        }
        if (!mounted) return;
        setReels((data as Reel[]) || []);
      } catch (e) {
        console.error("Failed to load reels", e);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <div className="py-12 text-center">Loading reels…</div>;
  if (reels.length === 0) return <div className="py-12 text-center">No reels yet — upload one in Supabase Storage.</div>;

  return (
    <section id="reels" className="py-12">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="mb-6 text-2xl font-bold">AI Reels — Short-form Work</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reels.map((r) => (
            <div key={r.id} className="rounded overflow-hidden bg-card">
              <video
                controls
                playsInline
                preload="metadata"
                poster={r.thumbnail_url || undefined}
                className="w-full h-auto bg-black"
                crossOrigin="anonymous"
                onError={(e) => console.error("Video error", e)}
              >
                {(() => {
                  const baseUrl = import.meta.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || "https://riclnykztdpcphkzzuhw.supabase.co";
                  const publicUrl = r.public_url
                    ? r.public_url
                    : r.storage_path
                    ? `${baseUrl}/storage/v1/object/public/${encodeURIComponent(
                        String(r.storage_path),
                      ).replaceAll("%2F", "/")}`
                    : null;
                  return publicUrl ? <source src={publicUrl} type="video/mp4" /> : null;
                })()}
                Your browser does not support the video tag.
              </video>
              <div className="p-3">
                <div className="font-medium">{r.title}</div>
                {r.description && <div className="mt-1 text-sm text-muted-foreground">{r.description}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReelsGallery;
