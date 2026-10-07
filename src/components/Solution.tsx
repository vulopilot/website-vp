import Eyebrow from "./Eyebrow";

const questions = [
  { icon: "📈", text: "Is my website okay?" },
  { icon: "📉", text: "Why did my visitors drop?" },
  { icon: "📋", text: "What do I fix first?" },
  { icon: "🔄", text: "Did my fix work?" },
  { icon: "✦", text: "Does AI know my business?" },
];

const howItHelps = [
  "It checks your site and shows what is fine and what needs attention.",
  "It flags issues that may affect visibility and shows the pages to investigate.",
  "It puts important findings first, so you know where to start.",
  "It scans again so you can see whether the flagged issue is resolved.",
  "It checks how clearly your site explains your business and shows what to improve.",
];

const features = [
  { title: "Security & health", desc: "Spot critical issues and make your site safer." },
  { title: "Search visibility", desc: "Check what could be done to help people find your pages on Google." },
  { title: "Performance", desc: "See how fast your pages open for visitors." },
  { title: "Content", desc: "Find thin, missing, or outdated content before visitors do." },
  { title: "Automation", desc: "Find opportunities to save time and reduce manual work." },
  { title: "AI visibility", desc: "Strengthen the signals that help tools like ChatGPT understand what you do." },
  { title: "Commerce", desc: "Spot store issues and sales opportunities on WooCommerce." },
];

export default function Solution() {
  return (
    <section id="how-it-works" className="bg-brand-50/40 py-20">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <Eyebrow className="justify-center">Meet VuloPilot</Eyebrow>
        <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Every website problem
          <br />
          deserves <span className="text-brand-600">a clear next step.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600">
          VuloPilot is the WordPress plugin that helps you find issues,
          understand what matters, and take action.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-10 text-left lg:grid-cols-3">
          <div className="space-y-4">
            {questions.map((q) => (
              <div key={q.text} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-sm shadow-sm">
                  {q.icon}
                </span>
                <span className="text-sm font-medium text-slate-700">
                  {q.text}
                </span>
              </div>
            ))}
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              How VuloPilot helps
            </p>
            <ul className="mt-4 space-y-4">
              {howItHelps.map((t) => (
                <li key={t} className="text-sm leading-relaxed text-slate-600">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              Explore the features
            </p>
            <ul className="mt-4 space-y-4">
              {features.map((f) => (
                <li key={f.title}>
                  <p className="text-sm font-semibold text-slate-800">
                    {f.title} <span className="text-brand-500">→</span>
                  </p>
                  <p className="text-xs text-slate-500">{f.desc}</p>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-600/20 hover:bg-brand-700"
            >
              Explore VuloPilot features →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
