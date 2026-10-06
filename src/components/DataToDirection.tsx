import Eyebrow from "./Eyebrow";

const steps = [
  { label: "Connect", desc: "Install the WordPress plugin and give VuloPilot read-only access to your site.", icon: "🔌" },
  { label: "Understand", desc: "See issues, trends, connect data to content, and what you should do.", icon: "👁️" },
  { label: "Prioritize", desc: "Know which problems deserve attention now and which can wait.", icon: "📌" },
  { label: "Improve", desc: "Use clear recommendations. Add guidance and practical steps to move forward.", icon: "🛠️" },
  { label: "Verify", desc: "Check what changed and whether the site actually got better.", icon: "✔️" },
];

const findings = [
  { n: "01", title: "It spots what's wrong", desc: "One scan looks at your whole website." },
  { n: "02", title: "It explains it in plain words", desc: "You see which page is affected and why it matters." },
  { n: "03", title: "It tells you what comes first", desc: "The important things come first. The small stuff can wait." },
  { n: "04", title: "It helps you fix it", desc: "Sometimes with one click. Sometimes with a draft from AI that you approve. Sometimes with a clear note for your developer." },
  { n: "05", title: "It proves the fix worked", desc: "VuloPilot looks at the page again and confirms the problem is gone." },
];

export default function DataToDirection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <Eyebrow className="justify-center">From data to direction</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            VuloPilot turns website
            <br />
            signals into a <span className="text-brand-600">next step.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-600">
            It&apos;s the layer between &ldquo;something is wrong&rdquo; and
            &ldquo;here&apos;s what you should do.&rdquo;
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-sm text-brand-600">
                {s.icon}
              </span>
              <p className="mt-3 text-sm font-semibold text-slate-900">
                {s.label}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Not another report</Eyebrow>
            <h3 className="mt-4 text-2xl font-extrabold text-slate-900">
              From &ldquo;something is wrong&rdquo; to &ldquo;it is
              fixed.&rdquo;
            </h3>
            <p className="mt-3 max-w-md text-sm text-slate-600">
              Every problem follows the same five steps. You are never left
              with a warning and no idea what to do.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-600/20 hover:bg-brand-700"
            >
              See what your scan found →
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <ul className="space-y-5">
              {findings.map((f) => (
                <li key={f.n} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-600">
                    {f.n}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      {f.title}
                    </p>
                    <p className="text-xs text-slate-500">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
