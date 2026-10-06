const cards = [
  { icon: "📈", text: "“Is my website even okay? I honestly can’t tell.”", dark: false },
  {
    icon: "⚠️",
    text: "“I’ve got three tools and a hundred warnings. Which one actually matters?”",
    dark: true,
  },
  { icon: "📉", text: "“My traffic dropped last month. No idea why.”", dark: false },
  { icon: "🔄", text: "“I fixed something last week — did it even work?”", dark: false },
  {
    icon: "✦",
    text: "“Does ChatGPT even know my business exists?”",
    dark: false,
  },
];

const summary = [
  {
    n: "01",
    title: "Too many warnings, not enough answers.",
    desc: "Every scanner, plugin, and dashboard is happy to tell you something's wrong — just not what it means.",
  },
  {
    n: "02",
    title: "No sense of priority.",
    desc: "A list of 100 issues reads the same whether #3 is costing you customers or #97 never will.",
  },
  {
    n: "03",
    title: "Fixes that don't stick.",
    desc: "You patch one thing, move on, and have no idea if it helped — or if a new problem already took its place.",
  },
];

export default function PainPoints() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
          Sound familiar?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">
          If you own a WordPress site, you&apos;ve probably had one of these
          thoughts this month.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.text}
              className={`flex flex-col items-start gap-3 rounded-2xl border p-6 text-left shadow-sm ${
                c.dark
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-800"
              }`}
            >
              <span className="text-xl">{c.icon}</span>
              <p className="text-sm font-medium leading-snug">{c.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-slate-500">
          If you nodded at even one of those, you&apos;re not alone — most
          site owners are guessing, not knowing.
        </p>
        <p className="mt-1 text-base font-semibold text-slate-900">
          Here&apos;s why that happens, and what actually fixes it.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 rounded-3xl bg-slate-900 p-8 text-left sm:grid-cols-3">
          {summary.map((s) => (
            <div key={s.n}>
              <span className="text-xs font-semibold text-brand-400">
                {s.n}
              </span>
              <h3 className="mt-2 text-sm font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
