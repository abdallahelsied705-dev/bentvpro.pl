import { Quote, Star } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const reviews = [
  {
    name: "Grzegorz P.",
    location: "Katowice, Polska",
    avatar: "GP",
    rating: 5,
    title: "Rachunek za kablówkę spadł, a kanałów przybyło",
    body: "Za telewizję kablową płaciłem 160 zł miesięcznie. Po przejściu na IPTV Polska mam znacznie więcej stacji i lepszy obraz, a płacę raz w roku ułamek tej kwoty. Od pół roku ani jednego zacięcia.",
    plan: "Plan 12 Miesięcy",
  },
  {
    name: "Natalia C.",
    location: "Łódź, Polska",
    avatar: "NC",
    rating: 5,
    title: "Na Firesticku ruszyło w dziesięć minut",
    body: "Spodziewałam się kombinowania, a instrukcja była tak prosta, że po dziesięciu minutach już oglądałam. Pakiet sportowy robi wrażenie — wszystkie ważne mecze mam w jednym miejscu.",
    plan: "Plan 3 Miesiące",
  },
  {
    name: "Zbigniew M.",
    location: "Lublin, Polska",
    avatar: "ZM",
    rating: 5,
    title: "Drugi rok z rzędu i zero żalu",
    body: "Przez lata przewinąłem kilka usług IPTV i ta trzyma się najstabilniej. Pomoc faktycznie odpisuje szybko, a sam catch-up — możliwość cofnięcia programu o kilka dni — jest bezcenny.",
    plan: "Plan 12 Miesięcy",
  },
  {
    name: "Aleksandra T.",
    location: "Szczecin, Polska",
    avatar: "AT",
    rating: 5,
    title: "Cztery ekrany, cała rodzina zadowolona",
    body: "Cztery połączenia to u nas konieczność — dzieci oglądają bajki, mąż mecz, a ja swój serial, wszystko naraz. Nic się nie tnie i nikt się nie kłóci o pilota.",
    plan: "Plan 12 Miesięcy",
  },
  {
    name: "Rafał D.",
    location: "Dublin, Irlandia",
    avatar: "RD",
    rating: 5,
    title: "Polskie kanały w Irlandii bez żadnych sztuczek",
    body: "Mieszkam pod Dublinem i wreszcie oglądam polską telewizję bez VPN i bez przerw. Jakość świetna, buforowania nie uświadczysz. Polecam każdemu Polakowi na emigracji.",
    plan: "Plan 6 Miesięcy",
  },
  {
    name: "Justyna L.",
    location: "Bydgoszcz, Polska",
    avatar: "JL",
    rating: 4,
    title: "Największy plus to wsparcie na WhatsApp",
    body: "Napisałam z pytaniem o ustawienia grubo po 22:00 i odpowiedź przyszła w parę minut. Taki kontakt to rzadkość. Usługa chodzi u mnie solidnie już czwarty miesiąc.",
    plan: "Plan 1 Miesiąc",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`Ocena ${count} na 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className={i < count ? "fill-yellow-400 text-yellow-400" : "text-slate-400"} />
      ))}
    </div>
  );
}

const avatarColors = ["from-brand-500 to-accent-600", "from-sky-500 to-indigo-600", "from-emerald-500 to-teal-600", "from-orange-500 to-brand-600"];

function ReviewCard({ r, index }: { r: (typeof reviews)[number]; index: number }) {
  return (
    <figure className="relative flex h-full flex-col w-[20rem] sm:w-[24rem] shrink-0 rounded-3xl border border-white/[0.07] bg-card/80 p-6 transition-colors hover:border-brand-500/30">
      <Quote className="absolute right-5 top-5 h-8 w-8 text-white/[0.06]" aria-hidden="true" />
      <Stars count={r.rating} />
      <blockquote className="mt-4 mb-5">
        <p className="font-semibold text-white">{r.title}</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{r.body}</p>
      </blockquote>
      <figcaption className="mt-auto pt-5 flex items-center gap-3 border-t border-white/5">
        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br ${avatarColors[index % avatarColors.length]} text-xs font-bold text-white`}>
          {r.avatar}
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-semibold text-white">{r.name}</span>
          <span className="block text-xs text-slate-400">{r.location}</span>
        </span>
        <span className="ml-auto whitespace-nowrap rounded-full bg-brand-500/10 px-2.5 py-1 text-[11px] font-medium text-brand-300">
          {r.plan}
        </span>
      </figcaption>
    </figure>
  );
}

function Row({ items, reverse = false }: { items: typeof reviews; reverse?: boolean }) {
  // Two copies per half so a row is always wider than the screen; -50% loops seamlessly.
  const half = [...items, ...items];
  const loop = [...half, ...half];
  return (
    <div className="mask-fade-x overflow-hidden">
      <div
        className={`flex w-max gap-5 hover:[animation-play-state:paused] ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ "--marquee-duration": "70s" } as React.CSSProperties}
      >
        {loop.map((r, i) => (
          <div key={`${r.name}-${i}`} aria-hidden={i >= items.length}>
            <ReviewCard r={r} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const half = Math.ceil(reviews.length / 2);
  return (
    <section id="reviews" className="relative bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Opinie klientów"
          title={
            <>
              Co mówią <span className="text-gradient">nasi klienci</span>
            </>
          }
          subtitle="Widzowie w Polsce i Polacy za granicą o swoich wrażeniach z IPTV Polska."
        />
      </div>
      <div className="flex flex-col gap-5">
        <Row items={reviews.slice(0, half)} />
        <Row items={reviews.slice(half)} reverse />
      </div>
    </section>
  );
}
