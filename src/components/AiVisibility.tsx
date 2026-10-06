const nav = [
  { label: "Search visibility", active: false },
  { label: "AI visibility", active: true },
  { label: "Content", active: false },
  { label: "Performance", active: false },
  { label: "Security & Health", active: false },
  { label: "Automation", active: false },
];

const metrics = [
  { label: "Entities & Expertise", value: 80 },
  { label: "Experts & Authority", value: 88 },
  { label: "Brand mentions", value: 65 },
  { label: "Technical SEO", value: 90 },
  { label: "Social Signals", value: 50 },
  { label: "Content freshness", value: 72 },
];

export default function AiVisibility() {
  return (
    <section className="bg-brand-50/40 py-20">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
          Following AI search, the VuloPilot way
        </p>
        <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
          One website. Every signal.{" "}
          <span className="text-brand-600">One system.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-slate-600">
          The plugin that connects every WordPress signal — search
          visibility, AI visibility, content, performance, security, and
          automation.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 text-left shadow-xl shadow-brand-900/5 lg:grid-cols-[220px_1fr]">
          <nav className="space-y-1 border-b border-slate-100 pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-4">
            {nav.map((n) => (
              <div
                key={n.label}
                className={`rounded-lg px-3 py-2 text-sm font-medium ${
                  n.active
                    ? "bg-brand-600 text-white"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {n.label} {n.active && <span className="float-right">→</span>}
              </div>
            ))}
          </nav>

          <div className="p-2">
            <h3 className="text-sm font-semibold text-slate-800">
              Help AI systems understand your business.
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Review your Q&amp;A, find gaps in your content and track how
              your website signals change.
            </p>
            <div className="mt-2 flex flex-wrap gap-4 text-xs text-slate-400">
              <span>● Entity clarity</span>
              <span>● Question coverage</span>
              <span>● Content freshness</span>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-[auto_1fr]">
              <div className="flex flex-col items-center justify-center rounded-2xl bg-brand-50 px-8 py-6">
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-8 border-emerald-400">
                  <span className="text-2xl font-extrabold text-slate-900">
                    96
                  </span>
                </div>
                <p className="mt-3 text-xs font-semibold text-emerald-600">
                  Excellent
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Your website is well understood by AI systems.
                </p>
                <div className="mt-4 flex gap-6 text-xs text-slate-500">
                  <div>
                    <p className="font-semibold text-slate-800">70</p>
                    <p>Pages checked</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">38</p>
                    <p>Pages flagged</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {metrics.map((m) => (
                  <div key={m.label}>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-600">{m.label}</span>
                      <span className="font-semibold text-slate-800">
                        {m.value}%
                      </span>
                    </div>
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-brand-500"
                        style={{ width: `${m.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-brand-600/20 hover:bg-brand-700"
            >
              Explore AI visibility →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
