const cards = [
  { icon: "📈", text: "Is my website even okay? I can't tell.", dark: false },
  {
    icon: "⚠️",
    text: "I have three tools and a hundred warnings. What do I fix?",
    dark: true,
  },
  { icon: "📉", text: "My visitors dropped. Why?", dark: false },
  { icon: "🔄", text: "I fixed it last week. Did it help?", dark: false },
  {
    icon: "✦",
    text: "Does ChatGPT even know my business exists?",
    dark: false,
  },
];

const summary = [
  {
    n: "01",
    title: "Too many warnings.",
    desc: "Audits, dashboards, scanners, and plugins all tell you something is wrong.",
  },
  {
    n: "02",
    title: "No clear priority.",
    desc: "A list of 100 issues does not tell you which fix could make a difference.",
  },
  {
    n: "03",
    title: "Nothing stays finished.",
    desc: "Work gets started, then stops. You can create a new problem tomorrow.",
  },
];

export default function PainPoints() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
          You have probably thought{" "}
          <span className="text-brand-600">one of these.</span>
        </h2>

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
          If you nodded at even one, you are not alone. Most website owners
          are guessing.
        </p>
        <p className="mt-1 text-sm font-semibold text-slate-800">
          And there is a simple answer.
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
