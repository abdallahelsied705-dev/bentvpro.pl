import { Check, Clock3, Film, Tv2, Zap } from "lucide-react";
import HeroScreen from "./HeroScreen";
import CountUp from "./ui/CountUp";
import { TRIAL_LINK } from "../lib/contact";

const trust = ["Płacisz raz, bez abonamentu", "Gotowe do oglądania w kilka minut", "Pomoc po polsku na WhatsApp"];

const stats = [
  { icon: Tv2, value: 50000, suffix: "+", label: "kanałów na żywo" },
  { icon: Film, value: 200000, suffix: "+", label: "filmów i seriali VOD" },
  { icon: Clock3, value: 7, suffix: " dni", label: "catch-up TV" },
  { icon: Zap, value: 4, suffix: "K", label: "Ultra HD" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-28 sm:pt-36 pb-16 sm:pb-24">
      {/* Drifting scarlet + gold field */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-44 -left-28 h-[36rem] w-[36rem] rounded-full bg-brand-600/30 blur-[130px] animate-drift" />
        <div className="absolute -top-10 right-[-10rem] h-[32rem] w-[32rem] rounded-full bg-accent-500/20 blur-[130px] animate-breathe" />
        <div className="absolute bottom-[-12rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-brand-800/40 blur-[130px] animate-drift [animation-delay:-8s]" />
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:px-8">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1 pl-1 pr-3.5 text-xs font-medium text-slate-300 backdrop-blur">
            <span className="flex items-center gap-1.5 rounded-full bg-brand-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white animate-pulse-ring">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
              Live
            </span>
            Serwery online — oglądaj teraz
            <span className="ml-1 inline-flex overflow-hidden rounded-[3px] ring-1 ring-white/15" aria-hidden="true">
              <span className="h-3 w-2.5 bg-white" />
              <span className="h-3 w-2.5 bg-brand-600" />
            </span>
          </div>

          <h1 className="animate-rise mt-6 text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white text-balance">
            Polska telewizja online,{" "}
            <span className="text-gradient">50&nbsp;000+ kanałów</span> w 4K
          </h1>

          <p className="animate-rise [animation-delay:80ms] mx-auto lg:mx-0 mt-6 max-w-xl text-lg sm:text-xl leading-relaxed text-slate-400 text-pretty">
            Polskie stacje, sport, filmy i seriale na żywo w jakości do 4K — na Smart TV, telefonie czy Firesticku,
            w kraju i za granicą. Bez dekodera i bez abonamentu, a przed zakupem testujesz 3 godziny za darmo.
          </p>

          <div className="animate-fade-up [animation-delay:360ms] mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
            <a
              href={TRIAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto rounded-full px-8 py-4 text-base font-semibold text-center"
            >
              Odbierz darmowy test 3h
            </a>
            <a
              href="#pricing"
              className="group w-full sm:w-auto rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white text-center backdrop-blur transition-colors hover:border-brand-400/40 hover:bg-white/10"
            >
              Sprawdź plany od €15
              <span className="ml-1.5 inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          <ul className="animate-fade-up [animation-delay:480ms] mt-8 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-slate-400">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-500/15">
                  <Check size={12} className="text-emerald-400" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* TV mockup with a rotating conic glow ring */}
        <div className="animate-fade-up [animation-delay:300ms] relative mx-auto w-full max-w-xl lg:max-w-none">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-2xl animate-spin-slow"
            style={{
              background:
                "conic-gradient(from 0deg, var(--color-brand-600), var(--color-accent-500), transparent 55%, var(--color-brand-600))",
            }}
            aria-hidden="true"
          />
          <HeroScreen />

          {/* Floating chips */}
          <div className="absolute -left-3 sm:-left-8 top-[42%] hidden sm:flex animate-bob items-center gap-2.5 rounded-2xl border border-white/10 bg-card/90 px-3.5 py-2.5 shadow-xl backdrop-blur">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-brand-500/15 text-brand-300">
              <Tv2 size={16} />
            </span>
            <span className="text-left">
              <span className="block text-sm font-bold text-white">50&nbsp;000+</span>
              <span className="block text-[11px] text-slate-400">kanałów</span>
            </span>
          </div>
          <div className="absolute -right-3 sm:-right-6 bottom-20 hidden sm:flex animate-bob [animation-delay:-1.6s] items-center gap-2.5 rounded-2xl border border-white/10 bg-card/90 px-3.5 py-2.5 shadow-xl backdrop-blur">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-accent-500/15 text-accent-400">
              <Clock3 size={16} />
            </span>
            <span className="text-left">
              <span className="block text-sm font-bold text-white">Catch-up</span>
              <span className="block text-[11px] text-slate-400">do 7 dni wstecz</span>
            </span>
          </div>
        </div>
      </div>

      {/* Stats — separate cards that lift on hover */}
      <div className="relative mx-auto mt-16 sm:mt-24 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, suffix, label }, i) => (
            <div
              key={label}
              className="card-hover animate-fade-up flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur hover:border-brand-500/30 sm:p-6"
              style={{ animationDelay: `${600 + i * 90}ms` }}
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500/25 to-accent-500/25 text-brand-300 ring-1 ring-inset ring-white/10">
                <Icon size={20} />
              </span>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">
                  <CountUp to={value} suffix={suffix} />
                </p>
                <p className="text-xs sm:text-sm text-slate-400">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
