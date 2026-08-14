import { useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Play, X, Tag, Video } from "lucide-react";

type PortfolioVideo = {
  id: number;
  title: string;
  description: string | null;
  tags: string[] | null;
  storage_path: string | null;
  public_url: string | null;
  thumbnail_url: string | null;
  sort_order: number;
};

const SUPABASE_BASE =
  typeof import.meta !== "undefined"
    ? (import.meta.env?.VITE_SUPABASE_URL ?? "https://riclnykztdpcphkzzuhw.supabase.co")
    : "https://riclnykztdpcphkzzuhw.supabase.co";

function resolveVideoUrl(v: PortfolioVideo): string | null {
  if (v.public_url) return v.public_url;
  if (v.storage_path) {
    const clean = encodeURIComponent(v.storage_path).replaceAll("%2F", "/");
    return `${SUPABASE_BASE}/storage/v1/object/public/${clean}`;
  }
  return null;
}

/* ─── Skeleton card ──────────────────────────────────────────────────── */
function SkeletonCard() {
  return (
    <div className="portfolio-card skeleton-card" aria-hidden="true">
      <div className="skeleton-thumb" />
      <div className="p-4 space-y-2">
        <div className="skeleton-line w-3/4" />
        <div className="skeleton-line w-1/2 opacity-60" />
        <div className="flex gap-2 mt-3">
          <div className="skeleton-pill" />
          <div className="skeleton-pill w-14" />
        </div>
      </div>
    </div>
  );
}

/* ─── Lightbox / modal player ────────────────────────────────────────── */
function VideoModal({
  video,
  url,
  onClose,
}: {
  video: PortfolioVideo;
  url: string;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => { if (e.target === ref.current) onClose(); }}
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
    >
      <div className="modal-panel">
        <button
          onClick={onClose}
          className="modal-close"
          aria-label="Close video"
        >
          <X className="h-5 w-5" />
        </button>
        <video
          controls
          autoPlay
          playsInline
          preload="metadata"
          crossOrigin="anonymous"
          className="w-full rounded-xl bg-black"
          style={{ maxHeight: "70vh" }}
        >
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="mt-4 px-1">
          <h3 className="text-lg font-semibold">{video.title}</h3>
          {video.description && (
            <p className="mt-1 text-sm text-muted-foreground">{video.description}</p>
          )}
          {video.tags && video.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {video.tags.map((t) => (
                <span key={t} className="tag-chip">
                  <Tag className="h-2.5 w-2.5" /> {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Single video card ──────────────────────────────────────────────── */
function VideoCard({
  video,
  onPlay,
}: {
  video: PortfolioVideo;
  onPlay: (v: PortfolioVideo, url: string) => void;
}) {
  const url = resolveVideoUrl(video);

  return (
    <div className="portfolio-card group">
      {/* Thumbnail / preview */}
      <div className="portfolio-thumb">
        {video.thumbnail_url ? (
          <img
            src={video.thumbnail_url}
            alt={video.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : url ? (
          <video
            src={url}
            preload="metadata"
            playsInline
            muted
            crossOrigin="anonymous"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-card">
            <Video className="h-10 w-10 text-muted-foreground/30" />
          </div>
        )}

        {/* Play overlay */}
        {url && (
          <button
            onClick={() => onPlay(video, url)}
            className="play-overlay"
            aria-label={`Play ${video.title}`}
          >
            <span className="play-btn">
              <Play className="h-6 w-6 fill-white text-white" />
            </span>
          </button>
        )}
      </div>

      {/* Meta */}
      <div className="p-4">
        <h3 className="font-semibold leading-snug line-clamp-1">{video.title}</h3>
        {video.description && (
          <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
            {video.description}
          </p>
        )}
        {video.tags && video.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {video.tags.map((t) => (
              <span key={t} className="tag-chip">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Main gallery export ────────────────────────────────────────────── */
interface ServiceVideoGalleryProps {
  slug: string;
}

export function ServiceVideoGallery({ slug }: ServiceVideoGalleryProps) {
  const [videos, setVideos] = useState<PortfolioVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeVideo, setActiveVideo] = useState<{ video: PortfolioVideo; url: string } | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    (async () => {
      try {
        const { data, error } = await supabase
          .from("portfolio_videos")
          .select(
            "id,title,description,tags,storage_path,public_url,thumbnail_url,sort_order"
          )
          .eq("service_slug", slug)
          .order("sort_order", { ascending: true })
          .order("created_at", { ascending: false });

        if (error) console.error("[ServiceVideoGallery] Supabase error:", error);
        if (mounted) setVideos((data as PortfolioVideo[]) ?? []);
      } catch (e) {
        console.error("[ServiceVideoGallery] fetch failed:", e);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [slug]);

  /* Don't render section at all if no videos and not loading */
  if (!loading && videos.length === 0) return null;

  return (
    <>
      {/* Inline scoped styles */}
      <style>{`
        .portfolio-card {
          background: hsl(var(--card));
          border: 1px solid hsl(var(--border));
          border-radius: 1rem;
          overflow: hidden;
          transition: box-shadow 0.25s, transform 0.25s;
        }
        .portfolio-card:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.18);
          transform: translateY(-3px);
        }
        .portfolio-thumb {
          position: relative;
          aspect-ratio: 16/9;
          overflow: hidden;
          background: hsl(var(--muted));
        }
        .play-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0);
          transition: background 0.2s;
        }
        .play-overlay:hover { background: rgba(0,0,0,0.4); }
        .play-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3.25rem;
          height: 3.25rem;
          border-radius: 9999px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(6px);
          border: 2px solid rgba(255,255,255,0.4);
          opacity: 0;
          transform: scale(0.85);
          transition: opacity 0.2s, transform 0.2s;
        }
        .play-overlay:hover .play-btn {
          opacity: 1;
          transform: scale(1);
        }
        .tag-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.7rem;
          font-weight: 500;
          padding: 0.2rem 0.65rem;
          border-radius: 9999px;
          border: 1px solid hsl(var(--border));
          background: hsl(var(--secondary));
          color: hsl(var(--muted-foreground));
        }

        /* Skeleton */
        .skeleton-card { cursor: default; pointer-events: none; }
        .skeleton-thumb {
          aspect-ratio: 16/9;
          background: linear-gradient(90deg, hsl(var(--muted)) 25%, hsl(var(--secondary)) 50%, hsl(var(--muted)) 75%);
          background-size: 200% 100%;
          animation: shimmer 1.4s infinite;
        }
        .skeleton-line {
          height: 0.85rem;
          border-radius: 0.4rem;
          background: linear-gradient(90deg, hsl(var(--muted)) 25%, hsl(var(--secondary)) 50%, hsl(var(--muted)) 75%);
          background-size: 200% 100%;
          animation: shimmer 1.4s infinite;
        }
        .skeleton-pill {
          height: 1.25rem;
          width: 3.5rem;
          border-radius: 9999px;
          background: linear-gradient(90deg, hsl(var(--muted)) 25%, hsl(var(--secondary)) 50%, hsl(var(--muted)) 75%);
          background-size: 200% 100%;
          animation: shimmer 1.4s infinite;
        }
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        /* Modal */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0,0,0,0.82);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fadeIn 0.18s ease;
        }
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        .modal-panel {
          position: relative;
          width: 100%;
          max-width: 860px;
          background: hsl(var(--card));
          border: 1px solid hsl(var(--border));
          border-radius: 1.25rem;
          padding: 1.25rem;
          box-shadow: 0 24px 80px rgba(0,0,0,0.6);
          animation: slideUp 0.22s ease;
        }
        @keyframes slideUp { from { transform: translateY(24px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
        .modal-close {
          position: absolute;
          top: 0.85rem;
          right: 0.85rem;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          border-radius: 9999px;
          background: hsl(var(--secondary));
          border: 1px solid hsl(var(--border));
          color: hsl(var(--foreground));
          transition: background 0.15s;
        }
        .modal-close:hover { background: hsl(var(--muted)); }
      `}</style>

      <section id={`portfolio-videos-${slug}`} className="mt-16">
        {/* Section header */}
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Work samples</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              Video Portfolio
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
            : videos.map((v) => (
                <VideoCard
                  key={v.id}
                  video={v}
                  onPlay={(video, url) => setActiveVideo({ video, url })}
                />
              ))}
        </div>
      </section>

      {/* Lightbox modal */}
      {activeVideo && (
        <VideoModal
          video={activeVideo.video}
          url={activeVideo.url}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </>
  );
}

export default ServiceVideoGallery;
