import Eyebrow from "./Eyebrow";

const findings = [
  {
    n: "01",
    title: "What's wrong?",
    desc: "A specific issue on a specific page — not a generic warning.",
  },
  {
    n: "02",
    title: "Why does it matter?",
    desc: "The likely effect on traffic, trust, or sales, explained in plain terms.",
  },
  {
    n: "03",
    title: "What do I do about it?",
    desc: "A clear next step or fix you (or your developer) can act on today.",
  },
  {
    n: "04",
    title: "Did it work?",
    desc: "A follow-up check that confirms the issue is actually resolved.",
  },
];

export default function DataToDirection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="text-left">
            <Eyebrow>Not another report</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Every finding answers
              <br />
              <span className="text-brand-600">one question: now what?</span>
            </h2>
            <p className="mt-4 max-w-md text-sm text-slate-600">
              Most audits stop at &ldquo;here&apos;s a list of problems.&rdquo;
              VuloPilot treats that as the start, not the finish — every
              item is built around four questions, in order.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-600/20 hover:bg-brand-700"
            >
              See a sample report →
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
