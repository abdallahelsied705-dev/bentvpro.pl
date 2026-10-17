import { Clock, Globe, HeadphonesIcon, MonitorPlay, Tv2, Wifi } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import SpotlightGroup from "./ui/SpotlightGroup";

const cardBase =
  "spotlight card-hover group relative h-full overflow-hidden rounded-3xl border border-white/[0.07] bg-card/80 p-7 sm:p-8 hover:border-brand-500/30";

function IconBadge({ icon: Icon }: { icon: typeof Tv2 }) {
  return (
    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-brand-300 ring-1 ring-inset ring-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
      <Icon size={22} />
    </span>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Co dostajesz"
          title={
            <>
              Konkret, nie obietnice. <span className="text-gradient">Telewizja, która po prostu działa.</span>
            </>
          }
          subtitle="Zbudowane pod polskiego widza w kraju i za granicą — czytelny cennik, żadnych umów i żadnych ukrytych opłat."
        />

        <SpotlightGroup className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-6">
          {/* Big card: channels */}
          <Reveal className="md:col-span-4">
            <div className={cardBase}>
              <IconBadge icon={Tv2} />
              <h3 className="mt-6 text-2xl font-bold text-white">50 000+ kanałów na żywo</h3>
              <p className="mt-2 max-w-md text-slate-400">
                Stacje ogólnopolskie i regionalne, sport, wiadomości, filmy, bajki, dokumenty i muzyka — jedna
                biblioteka, w której każdy w domu znajdzie coś dla siebie.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {["Ogólnopolskie", "Sport", "Filmy", "Seriale", "Wiadomości", "Dla dzieci", "Dokumenty", "Muzyka"].map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300"
                  >
                    {c}
                  </span>
                ))}
                <span className="rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-300">
                  + tysiące innych
                </span>
              </div>
              <Tv2
                className="pointer-events-none absolute -right-8 -bottom-10 h-56 w-56 text-white/[0.03] transition-transform duration-700 group-hover:scale-110"
                aria-hidden="true"
              />
            </div>
          </Reveal>

          {/* 4K */}
          <Reveal className="md:col-span-2" delay={100}>
            <div className={cardBase}>
              <IconBadge icon={MonitorPlay} />
              <h3 className="mt-6 text-xl font-bold text-white">Streaming 4K Ultra HD</h3>
              <p className="mt-2 text-sm text-slate-400">Ostry obraz do 4K i dźwięk Dolby tam, gdzie kanał go nadaje.</p>
              <p className="mt-6 text-6xl font-extrabold tracking-tight text-gradient">4K</p>
            </div>
          </Reveal>

          {/* No buffering */}
          <Reveal className="md:col-span-2" delay={0}>
            <div className={cardBase}>
              <IconBadge icon={Wifi} />
              <h3 className="mt-6 text-xl font-bold text-white">Zero zacięć</h3>
              <p className="mt-2 text-sm text-slate-400">
                Mocne serwery i sieć CDN trzymają obraz płynnie nawet w piątkowy wieczór, gdy ogląda pół Polski.
              </p>
              <div className="mt-6 flex h-12 items-end gap-1.5" aria-hidden="true">
                {[0.5, 0.8, 0.6, 1, 0.7, 0.9, 0.55, 0.85, 0.65, 1, 0.75, 0.9].map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 origin-bottom rounded-[3px] bg-gradient-to-t from-brand-600 to-accent-500 animate-equalizer"
                    style={{ height: `${h * 100}%`, animationDelay: `${i * 0.09}s` }}
                  />
                ))}
              </div>
            </div>
          </Reveal>

          {/* Catch-up */}
          <Reveal className="md:col-span-2" delay={100}>
            <div className={cardBase}>
              <IconBadge icon={Clock} />
              <h3 className="mt-6 text-xl font-bold text-white">7-dniowy catch-up TV</h3>
              <p className="mt-2 text-sm text-slate-400">
                Nie zdążyłeś na transmisję? Cofnij i obejrzyj dowolny program z ostatnich 7 dni na obsługiwanych kanałach.
              </p>
              <div className="mt-6 flex gap-1.5" aria-hidden="true">
                {["Pn", "Wt", "Śr", "Cz", "Pt", "Sb", "Nd"].map((d, i) => (
                  <span
                    key={d}
                    className={`flex-1 rounded-lg py-1.5 text-center text-[11px] font-bold ${
                      i === 6 ? "bg-gradient-to-br from-brand-500 to-accent-600 text-white" : "bg-white/5 text-slate-400"
                    }`}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Support */}
          <Reveal className="md:col-span-2" delay={200}>
            <div className={cardBase}>
              <IconBadge icon={HeadphonesIcon} />
              <h3 className="mt-6 text-xl font-bold text-white">Wsparcie 24/7</h3>
              <p className="mt-2 text-sm text-slate-400">
                Piszesz na WhatsApp o dowolnej porze i odpowiada Ci człowiek — po polsku, bez botów i bez kolejek.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-400">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Jesteśmy online
              </div>
            </div>
          </Reveal>

          {/* Everywhere */}
          <Reveal className="md:col-span-6" delay={0}>
            <div className={`${cardBase} flex flex-col sm:flex-row sm:items-center gap-6`}>
              <IconBadge icon={Globe} />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white">Działa wszędzie — także za granicą</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Smart TV, Firestick, Android, iOS, MAG i każdy odtwarzacz IPTV. Oglądaj polską telewizję z Wielkiej
                  Brytanii, Niemiec, Irlandii, Holandii czy USA — bez VPN.
                </p>
              </div>
              <div className="flex -space-x-2" aria-hidden="true">
                {["🇵🇱", "🇬🇧", "🇩🇪", "🇮🇪", "🇳🇱", "🇺🇸"].map((f) => (
                  <span key={f} className="grid h-10 w-10 place-items-center rounded-full border-2 border-card bg-card-2 text-lg">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </SpotlightGroup>
      </div>
    </section>
  );
}
