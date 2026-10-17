import { getAllPosts } from "../lib/mdx";
import { products } from "../lib/products";
import { SITE_URL } from "../lib/site";

export const dynamic = "force-static";

// Optional map for AI assistants (llmstxt.org). Google Search ignores it; it costs nothing to serve.
export function GET() {
  const lines = [
    "# IPTV Polska (bentvpro.pl)",
    "",
    "> IPTV Polska (bentvpro.pl) to polska telewizja online: 50 000+ kanałów na żywo z kompletem polskich stacji ogólnopolskich i sportowych, 200 000+ pozycji VOD, obraz do 4K i catch-up do 7 dni wstecz. Cennik jednorazowy od €15 za miesiąc do €110 za 24 miesiące (€4,58/mies.), bez umowy i bez abonamentu. Działa w kraju i za granicą bez VPN, a przed zakupem jest bezpłatny test 3h.",
    "",
    "## Najważniejsze strony",
    `- [IPTV Polska — strona główna](${SITE_URL}/): oferta, cennik, urządzenia i FAQ`,
    `- [Plany i cennik](${SITE_URL}/product): porównanie planów 1–24 miesiące`,
    `- [Instrukcja instalacji](${SITE_URL}/setup): konfiguracja na Firestick, Smart TV, Android, iPhone, MAG i Windows`,
    `- [Kontakt](${SITE_URL}/contact): wsparcie 24/7 przez WhatsApp i e-mail`,
    "",
    "## Plany",
    ...products.map((p) => `- [${p.name}](${SITE_URL}/product/${p.slug}): €${p.price}, ${p.period}`),
    "",
    "## Blog",
    ...getAllPosts().map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}): ${p.excerpt}`),
    "",
    "## Zasady",
    `- [Polityka zwrotów](${SITE_URL}/refund-policy)`,
    `- [Regulamin](${SITE_URL}/terms-of-service)`,
    `- [Polityka prywatności](${SITE_URL}/privacy-policy)`,
    `- [DMCA](${SITE_URL}/dmca)`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
