import Eyebrow from "./Eyebrow";

const loop = [
  { step: "Scan", desc: "VuloPilot checks your whole site — pages, content, speed, security — automatically.", icon: "📈" },
  { step: "Explain", desc: "Every issue comes with a plain-English reason it matters, not just a red X.", icon: "💬" },
  { step: "Prioritize", desc: "Issues are ranked by real impact, so you always know what to fix first.", icon: "📋" },
  { step: "Verify", desc: "VuloPilot rescans after you fix something, so you know it actually worked.", icon: "🔄" },
];

const features = [
  { title: "Security & health", desc: "Catch the risks that could take your site down or get it flagged." },
  { title: "Search visibility", desc: "Understand what's stopping pages from ranking on Google." },
  { title: "Performance", desc: "See which pages are slow enough to lose you visitors." },
  { title: "Content", desc: "Find thin, missing, or outdated content before visitors do." },
  { title: "Automation", desc: "Let recurring checks run themselves so nothing slips through." },
  { title: "AI visibility", desc: "Make sure tools like ChatGPT can find and describe your business correctly." },
];

export default function Solution() {
  return (
    <section id="how-it-works" className="bg-brand-50/40 py-20">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <Eyebrow className="justify-center">Meet VuloPilot</Eyebrow>
        <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
          One plugin that turns
          <br />
          website noise into <span className="text-brand-600">a to-do list.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600">
          VuloPilot installs on your WordPress site, scans it the way a
          technical consultant would, and translates what it finds into
          steps anyone can act on — no jargon, no guesswork.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
          {loop.map((l, i) => (
            <div
              key={l.step}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="text-xs font-semibold text-brand-500">
                Step {i + 1}
              </span>
              <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-slate-900">
                <span>{l.icon}</span> {l.step}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                {l.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-left">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
            Everything it watches
          </p>
          <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title}>
                <p className="text-sm font-semibold text-slate-800">
                  {f.title} <span className="text-brand-500">→</span>
                </p>
                <p className="mt-1 text-xs text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-600/20 hover:bg-brand-700"
          >
            Explore VuloPilot features →
          </a>
        </div>
      </div>
    </section>
  );
}
