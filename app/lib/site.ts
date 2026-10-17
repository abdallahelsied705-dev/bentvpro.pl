// The domain Vercel serves; the bare domain redirects here.
export const SITE_URL = "https://bentvpro.pl";

// Bump when the static pages change, so the sitemap reports a real lastmod.
export const PAGES_UPDATED = "2026-10-17";

// Child pages that set `openGraph` replace the layout's, so they repeat this.
export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "IPTV Polska — 50 000+ kanałów w 4K",
};

const TITLE_SUFFIX = " — IPTV Polska";

// Google truncates titles around 60 characters: keep the brand suffix only when it still fits.
export function pageTitle(title: string) {
  return title.length + TITLE_SUFFIX.length <= 60 ? title : { absolute: title };
}
