const points = [
  { icon: "🧭", text: "Clear, factual descriptions of what you actually do." },
  { icon: "💬", text: "Answers AI tools can quote directly, instead of guessing." },
  { icon: "🔗", text: "Consistent business details search engines can trust." },
  { icon: "📡", text: "An ongoing check that nothing drifts out of date." },
];

export default function SearchChanging() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-400">
              Search is changing
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              People are starting to ask
              <br />
              ChatGPT instead of Google.
            </h2>
            <p className="mt-4 max-w-md text-sm text-slate-300">
              When someone asks an AI assistant about a product or business
              like yours, it answers using whatever it can find and
              understand on your site. If your content is vague or
              inconsistent, it either gets your business wrong — or leaves
              you out of the answer entirely.
            </p>
            <p className="mt-3 max-w-md text-sm text-slate-300">
              VuloPilot checks whether your site gives AI tools what they
              need to describe your business correctly, and tells you what
              to fix if it doesn&apos;t.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-600/30 hover:bg-brand-500"
            >
              Check your AI visibility →
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
