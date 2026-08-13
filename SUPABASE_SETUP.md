Supabase setup — quick guide

Follow these steps after you create a new Supabase project. This file contains one SQL block you can paste into the Supabase SQL editor and a few one-line CLI commands to create the storage bucket and upload reels.

1) Create tables (paste into Supabase SQL editor)

-- Create a contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  business TEXT NULL,
  email TEXT NOT NULL,
  need TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create a reels table for AI content (stores metadata; actual files go to Storage)
CREATE TABLE IF NOT EXISTS reels (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NULL,
  storage_path TEXT,      -- e.g. 'ai-reels/filename.mp4'
  public_url TEXT,        -- optional: `https://<project>.supabase.co/storage/v1/object/public/...`
  thumbnail_url TEXT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create a portfolio table for websites / automations / ad-campaigns
CREATE TABLE IF NOT EXISTS portfolio_projects (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL, -- e.g. 'website', 'automation', 'ads', 'content'
  short_desc TEXT NULL,
  images JSONB NULL,     -- array of image URLs
  videos JSONB NULL,     -- array of video URLs
  live_url TEXT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

2) Create a public storage bucket for reels (Supabase CLI)

If you have the Supabase CLI installed, run (replace with your project directory):

```bash
# create a public bucket for reels
supabase storage create-bucket ai-reels --public
```

Alternatively, create the bucket in the Supabase Dashboard → Storage → Create bucket (name: `ai-reels`, make public if you want direct public URLs).

3) Upload a reel (Supabase CLI)

```bash
# upload a file to the bucket (example)
supabase storage upload ai-reels ./path/to/reel1.mp4 ai-reels/reel1.mp4
```

4) Public URL for an uploaded file

Public storage objects are available at:

```
https://<PROJECT_REF>.supabase.co/storage/v1/object/public/ai-reels/<OBJECT_PATH>
```

Replace `<PROJECT_REF>` with your Supabase project ref (visible in the dashboard and in the API settings).

5) One-line SQL to insert a reel record (example)

```sql
INSERT INTO reels (title, description, storage_path, public_url) VALUES (
  'My AI Reel 1',
  'Short-form reel created with AI',
  'ai-reels/reel1.mp4',
  'https://<PROJECT_REF>.supabase.co/storage/v1/object/public/ai-reels/reel1.mp4'
);
```

6) Environment variables

Paste the values from your Supabase project into the project's env file. See `.env.example` for the variable names used by this site.

7) Playing reels smoothly on the website

- Use MP4 (H.264) or WebM with reasonable bitrate (e.g., 2.5–6 Mbps for 1080p) for smooth playback.
- Serve files from the public storage bucket (public URLs) or generate signed URLs server-side for private buckets.
- Use the HTML5 `<video>` tag with `preload="metadata"` and `playsInline` (mobile) and include a small poster/thumbnail image.
- Lazy-load videos on scroll (only load sources when the element is near viewport) to reduce initial payload.

Example video tag to drop into the portfolio grid:

```html
<video controls playsinline preload="metadata" poster="/path/to/thumbnail.jpg" class="w-full h-auto">
  <source src="https://<PROJECT_REF>.supabase.co/storage/v1/object/public/ai-reels/reel1.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

That's it — paste the SQL block into Supabase SQL editor and create the bucket via CLI or Dashboard. If you'd like, I can add an upload UI to the project that lets you pick files and inserts the `reels` record automatically.
