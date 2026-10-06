import Eyebrow from "./Eyebrow";

const signals = [
  {
    label: "From finding to next steps",
    desc: "Get clear, prioritized next steps.",
    cta: "View details",
    icon: "→",
  },
  {
    label: "Search visibility",
    desc: "Improve your rankings and discoverability.",
    cta: "Explore",
    icon: "🔍",
  },
  {
    label: "Availability & content",
    desc: "Audit your content and fix what is missing.",
    cta: "Explore",
    icon: "📄",
  },
  {
    label: "Performance experience",
    desc: "Make your site faster and smoother.",
    cta: "Explore",
    icon: "⚡",
  },
  {
    label: "Security, health & automation",
    desc: "Keep your site secure and running smoothly.",
    cta: "Explore",
    icon: "🛡️",
  },
];

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-brand-50 via-white to-white">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 sm:pt-20 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>WordPress + Website Intelligence</Eyebrow>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Stop collecting warnings.
              <br />
              <span className="bg-gradient-to-r from-brand-600 to-fuchsia-500 bg-clip-text text-transparent">
                Start knowing
                <br />
                what to fix.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600">
              VuloPilot looks across your entire WordPress website, finds
              what is holding it back, explains why it matters, and helps
              you improve it.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700"
              >
                Connect your WordPress site
                <span aria-hidden>→</span>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-brand-600"
              >
                See how it works
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-200/60 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-fuchsia-200/50 blur-3xl" />
            <div className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl shadow-brand-900/10">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                  <span className="ml-2">vulopilot.com/report</span>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Connected live
                </span>
              </div>

              <div className="flex items-center justify-between py-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Overall progress for Acme
                  </p>
                  <p className="text-lg font-bold text-slate-900">
                    WordPress website
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-extrabold text-brand-600">06</p>
                  <p className="text-xs text-slate-400">Insights</p>
                </div>
              </div>

              <ul className="divide-y divide-slate-100">
                {signals.map((s) => (
                  <li
                    key={s.label}
                    className="flex items-center justify-between gap-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-sm">
                        {s.icon}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-800">
                          {s.label}
                        </p>
                        <p className="text-xs text-slate-500">{s.desc}</p>
                      </div>
                    </div>
                    <span className="shrink-0 text-xs font-semibold text-brand-600">
                      {s.cta} →
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-400">
                <span>One WordPress plugin</span>
                <span>Connected website signals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
