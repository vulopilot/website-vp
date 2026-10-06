const points = [
  { icon: "🧭", text: "Make your business easier to understand." },
  { icon: "💬", text: "Strengthen information and entities that explain your business." },
  { icon: "🔗", text: "Help AI and search tools find the right information." },
  { icon: "📡", text: "Monitor the signals you can improve." },
  { icon: "📊", text: "Track what's working and where to make your website stronger." },
];

export default function SearchChanging() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-400">
              The next layer of discovery
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Search is changing.
              <br />
              Your website needs
              <br />
              to be understood everywhere.
            </h2>
            <p className="mt-4 max-w-md text-sm text-slate-300">
              VuloPilot helps you make your website clearer and structured and
              ready for what&apos;s next.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-600/30 hover:bg-brand-500"
            >
              Improve your visibility →
            </a>
          </div>

          <div className="space-y-3">
            {points.map((p) => (
              <div
                key={p.text}
                className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10"
              >
                <span className="text-base">{p.icon}</span>
                <span className="text-sm text-slate-200">{p.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
