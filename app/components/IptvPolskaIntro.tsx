import Link from "next/link";
import Reveal from "./ui/Reveal";

const facts: [string, string][] = [
  ["Kanały na żywo", "50 000+, w tym pełny pakiet polskich kanałów ogólnopolskich i sportowych"],
  ["Filmy i seriale (VOD)", "200 000+ tytułów"],
  ["Jakość obrazu", "SD, HD, Full HD i 4K Ultra HD"],
  ["Catch-up TV", "do 7 dni wstecz"],
  ["Cena", "od €15 / miesiąc, €4,58 / miesiąc w planie 24-miesięcznym"],
  ["Umowa", "brak — jednorazowa płatność, bez automatycznego odnawiania"],
  ["Urządzenia", "Smart TV, Firestick, Android, iPhone, iPad, MAG, Windows, macOS"],
  ["Wymagany internet", "10 Mb/s dla HD, 25 Mb/s dla 4K"],
  ["Darmowy test", "3 godziny, bez karty kredytowej"],
  ["Gwarancja", "zwrot pieniędzy w ciągu 48 godzin"],
];

export default function IptvPolskaIntro() {
  return (
    <section id="iptv-polska" className="relative bg-surface py-24 sm:py-28" aria-labelledby="iptv-polska-heading">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/25 bg-brand-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            Przewodnik
          </span>
          <h2 id="iptv-polska-heading" className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl text-balance">
            IPTV Polska — <span className="text-gradient">jak to działa</span> i co dostajesz
          </h2>

          {/* Self-contained definition: the passage search engines and AI answers can quote as-is. */}
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            <strong className="text-white">IPTV Polska</strong> (Internet Protocol Television) to telewizja, która
            trafia do Ciebie zwykłym łączem internetowym — bez anteny, kabla i talerza satelitarnego. Zamiast dekodera
            instalujesz aplikację na sprzęcie, który już masz. W pakiecie jest 50 000+ kanałów na żywo z kompletem
            polskich stacji ogólnopolskich i sportowych, biblioteka 200 000+ filmów i seriali (VOD) oraz catch-up
            sięgający 7 dni wstecz. Obraz dobiera się automatycznie do łącza — od SD aż po 4K Ultra HD. Usługa działa na
            Smart TV, Amazon Firestick, Androidzie, iPhonie, dekoderach MAG i komputerach, zarówno w Polsce, jak i za
            granicą, bez VPN. Płacisz raz: od €15 za miesiąc do €110 za dwa lata (€4,58 miesięcznie), bez abonamentu i
            bez automatycznego przedłużania. Nie jesteś pewny? Najpierw przetestuj wszystko za darmo przez 3 godziny.
          </p>

          <h3 className="mt-10 text-xl font-bold text-white">Jak działa IPTV Polska?</h3>
          <ol className="mt-4 space-y-3 text-slate-400">
            <li className="flex gap-3">
              <span className="font-bold text-brand-300">1.</span>
              <span>Zaczynasz od bezpłatnego testu 3h albo od razu wybierasz plan — od 1 do 24 miesięcy.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-brand-300">2.</span>
              <span>Dostajesz dane dostępowe (link M3U lub Xtream Codes) — zwykle w kilka minut od potwierdzenia.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-brand-300">3.</span>
              <span>
                Wpisujesz je w aplikacji IPTV (np. TiviMate lub IPTV Smarters) i oglądasz.{" "}
                <Link href="/setup" className="text-brand-300 underline underline-offset-2 hover:text-brand-200">
                  Instrukcja instalacji krok po kroku
                </Link>
                .
              </span>
            </li>
          </ol>

          <h3 className="mt-10 text-xl font-bold text-white">Dla kogo jest IPTV Polska?</h3>
          <p className="mt-3 leading-relaxed text-slate-400">
            Dla rodzin w Polsce, które mają dość rosnących rachunków za kablówkę i satelitę, i dla Polonii —
            w Wielkiej Brytanii, Niemczech, Irlandii, Holandii czy USA — która chce mieć polskie kanały na żywo tak
            jak w domu.
            Porównanie dostawców znajdziesz w artykule{" "}
            <Link href="/blog/najlepsze-iptv-polska" className="text-brand-300 underline underline-offset-2 hover:text-brand-200">
              Najlepsze IPTV Polska 2026
            </Link>
            .
          </p>
        </Reveal>

        <Reveal delay={150} className="lg:pt-16">
          <div className="overflow-hidden rounded-3xl border border-white/[0.07] bg-card/80">
            <table className="w-full text-left text-sm">
              <caption className="border-b border-white/[0.07] px-6 py-4 text-left text-base font-bold text-white">
                IPTV Polska w skrócie — najważniejsze informacje
              </caption>
              <tbody>
                {facts.map(([label, value]) => (
                  <tr key={label} className="border-b border-white/[0.05] last:border-0">
                    <th scope="row" className="w-2/5 px-6 py-3.5 align-top font-medium text-slate-400">
                      {label}
                    </th>
                    <td className="px-6 py-3.5 text-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 px-1 text-xs text-slate-400">Dane aktualne na 17 października 2026.</p>
        </Reveal>
      </div>
    </section>
  );
}
