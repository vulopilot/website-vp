import Eyebrow from "./Eyebrow";

const flows = [
  {
    title: "A new page is published?",
    steps: ["Check SEO", "Check AI visibility", "Check links"],
    result: "Every new page gets checked before problems go unnoticed.",
  },
  {
    title: "A page became slow?",
    steps: ["Detect", "Find the cause", "Prioritize", "Resolve"],
    result: "Performance changes are flagged so you know where to investigate.",
  },
  {
    title: "Content becomes outdated?",
    steps: ["Detect", "Analyze", "Suggest refresh", "Verify"],
    result: "Find content that needs updating without checking every page manually.",
  },
  {
    title: "Review website growth?",
    steps: ["Scan", "Compare changes", "Find opportunities"],
    result: "Start the week knowing what needs attention — and where to look.",
  },
];

export default function Automation() {
  return (
    <section className="bg-brand-50/40 py-20">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <Eyebrow className="justify-center">Following problems the VuloPilot way</Eyebrow>
        <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Automation that works{" "}
          <span className="text-brand-600">around your website.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-slate-600">
          Turn recurring website work into workflows that check, prioritize,
          and follow up for you.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
          {flows.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold text-slate-900">
                {f.title}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-medium text-brand-600">
                {f.steps.map((s, i) => (
                  <span key={s} className="flex items-center gap-2">
                    <span className="rounded-full bg-brand-50 px-2.5 py-1">
                      {s}
                    </span>
                    {i < f.steps.length - 1 && (
                      <span className="text-slate-300">→</span>
                    )}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Result: </span>
                {f.result}
              </p>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-600/20 hover:bg-brand-700"
        >
          Explore automation →
        </a>
      </div>
    </section>
  );
}
