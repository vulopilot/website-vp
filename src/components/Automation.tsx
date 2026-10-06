import Eyebrow from "./Eyebrow";

const flows = [
  {
    title: "You publish a new page",
    steps: ["Check SEO basics", "Check AI readability", "Check broken links"],
    result: "Catches rookie mistakes before Google or visitors ever see them.",
  },
  {
    title: "A page starts loading slowly",
    steps: ["Detect the slowdown", "Find the cause", "Tell you what to fix"],
    result: "You find out from VuloPilot, not from a customer complaint.",
  },
  {
    title: "Content gets stale",
    steps: ["Flag outdated pages", "Suggest a refresh", "Confirm it's fixed"],
    result: "Old, outranked pages get noticed without you re-reading your whole site.",
  },
  {
    title: "A new week starts",
    steps: ["Re-scan everything", "Compare to last week", "Surface what changed"],
    result: "You open Monday already knowing where to look — no digging required.",
  },
];

export default function Automation() {
  return (
    <section className="bg-brand-50/40 py-20">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <Eyebrow className="justify-center">Set it up once</Eyebrow>
        <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Maintenance that happens{" "}
          <span className="text-brand-600">whether or not you log in.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-slate-600">
          The checks you&apos;d normally forget to run manually, running
          quietly in the background.
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
