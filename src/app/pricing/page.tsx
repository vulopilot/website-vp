import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pricing — VuloPilot",
  description:
    "VuloPilot is free forever. Add Pro for technical SEO, keyword rank tracking, one-click fixes, AI crawler tracking, WooCommerce analytics, and more — from $19/year.",
};

const tiers = [
  {
    name: "1 site",
    price: "$19",
    note: "/year",
    desc: "For a single WordPress site.",
    cta: "Get Pro — 1 site",
    highlighted: false,
  },
  {
    name: "3 sites",
    price: "$49",
    note: "/year",
    desc: "For a few sites you manage.",
    cta: "Get Pro — 3 sites",
    highlighted: true,
  },
  {
    name: "10 sites",
    price: "$99",
    note: "/year",
    desc: "For an agency or a growing portfolio.",
    cta: "Get Pro — 10 sites",
    highlighted: false,
  },
];

const comparisonGroups: {
  group: string;
  rows: { feature: string; free: string | boolean; pro: string | boolean }[];
}[] = [
  {
    group: "Search (SEO)",
    rows: [
      { feature: "SEO score & problem checks (titles, images, links, structure)", free: true, pro: true },
      { feature: "Sitemap, robots.txt, redirects & 404 log", free: true, pro: true },
      { feature: "Per-page SEO panel in the post editor", free: true, pro: true },
      { feature: "Sitewide schema gaps, duplicate meta, multiple H1s, focus-keyword check", free: false, pro: true },
      { feature: "Keyword rank tracking (Search Console rankings, opportunities)", free: false, pro: true },
      { feature: "One-click fixes — single or bulk", free: false, pro: true },
    ],
  },
  {
    group: "AI search visibility",
    rows: [
      { feature: "GEO score, brand profile, AI crawler overview", free: true, pro: true },
      { feature: "llms.txt generation", free: true, pro: true },
      { feature: "Answer Engine Optimization — citation coverage & engine testing", free: false, pro: true },
      { feature: "AI crawler visit tracking & alerts", free: false, pro: true },
      { feature: "Brand Visibility & Knowledge Graph mapping", free: false, pro: true },
    ],
  },
  {
    group: "Content",
    rows: [
      { feature: "AI Writer, Blog Generator, duplicate-title fixer", free: true, pro: true },
      { feature: "Content audit & readability checks", free: true, pro: true },
      { feature: "Per-post content score & competitor content-gap analysis", free: false, pro: true },
      { feature: "AI-drafted titles, descriptions & summaries for weak pages", free: false, pro: true },
    ],
  },
  {
    group: "Performance",
    rows: [
      { feature: "Speed score, Core Web Vitals, slow-page list", free: true, pro: true },
      { feature: "One-click speed fixes (cache, minify, image optimization)", free: true, pro: true },
    ],
  },
  {
    group: "Site health & backups",
    rows: [
      { feature: "WordPress health checks & manual/scheduled backups", free: true, pro: true },
      { feature: "Cloud backup copies to Amazon S3 or Google Drive", free: false, pro: true },
    ],
  },
  {
    group: "Accessibility",
    rows: [
      { feature: "WCAG audit, run on demand", free: true, pro: true },
      { feature: "Automatic scheduled audits (hourly/daily/weekly) with score history", free: false, pro: true },
    ],
  },
  {
    group: "Security",
    rows: [
      { feature: "Malware checks, login protection, firewall logging", free: true, pro: true },
      { feature: "Known-vulnerability feed matching for core, plugins & themes", free: false, pro: true },
      { feature: "File-change tracking, exposed-file & debug-mode detection", free: false, pro: true },
      { feature: "Security headers, XML-RPC checks & unified incident alerts", free: false, pro: true },
    ],
  },
  {
    group: "Commerce (WooCommerce)",
    rows: [
      { feature: "Product, checkout & store findings", free: true, pro: true },
      { feature: "AI Sales Assistant summary", free: true, pro: true },
      { feature: "Revenue stats, abandoned-cart tracking, store trends", free: false, pro: true },
      { feature: "Bulk AI product actions — titles, descriptions, cross-sells (up to 50 at once)", free: false, pro: true },
    ],
  },
  {
    group: "Automation",
    rows: [
      { feature: "Scheduled full-site scan & emailed visibility report", free: true, pro: true },
      { feature: "Conditional workflow rules, retries & a visual workflow builder", free: false, pro: true },
    ],
  },
  {
    group: "Reports",
    rows: [
      { feature: "Overview, History timeline, CSV/PDF export", free: true, pro: true },
      { feature: "Custom report builder, health report, scheduled reports, AI usage analytics", free: false, pro: true },
    ],
  },
  {
    group: "AI Copilot",
    rows: [
      { feature: "Ask questions about your scan data, draft a blog post", free: true, pro: true },
      { feature: "Full interactive chat + MCP server (connect Claude Desktop & other AI tools)", free: false, pro: true },
    ],
  },
];

function Check() {
  return (
    <svg
      className="mx-auto h-4 w-4 text-emerald-500"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <path
        d="M5 10.5l3 3 7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Dash() {
  return <span className="mx-auto block text-slate-300">—</span>;
}

export default function PricingPage() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <section className="relative bg-gradient-to-b from-brand-50 via-white to-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Eyebrow className="justify-center">Pricing</Eyebrow>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Free forever.
            <br />
            <span className="bg-gradient-to-r from-brand-600 to-fuchsia-500 bg-clip-text text-transparent">
              Pro when you need more.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600">
            Every scan, score and fix described on this site works in the
            free plugin. VuloPilot Pro adds deeper checks, automation and
            one-click fixes on top — priced by how many sites you run it on.
          </p>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-8">
              <p className="text-sm font-semibold text-slate-500">Free</p>
              <p className="mt-2 text-4xl font-extrabold text-slate-900">
                $0
                <span className="text-base font-medium text-slate-400"> /forever</span>
              </p>
              <p className="mt-3 text-sm text-slate-600">
                Full scans and scores across SEO, AI visibility, content,
                performance, security, accessibility and commerce. No card
                required.
              </p>
              <a
                href="#"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Install VuloPilot free
              </a>
            </div>

            {tiers.map((t) => (
              <div
                key={t.name}
                className={`relative rounded-3xl border p-8 ${
                  t.highlighted
                    ? "border-brand-600 bg-brand-50/60 shadow-lg shadow-brand-600/10"
                    : "border-slate-200 bg-white"
                }`}
              >
                {t.highlighted && (
                  <span className="absolute -top-3 left-8 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                    Most popular
                  </span>
                )}
                <p className="text-sm font-semibold text-brand-600">
                  Pro — {t.name}
                </p>
                <p className="mt-2 text-4xl font-extrabold text-slate-900">
                  {t.price}
                  <span className="text-base font-medium text-slate-400">{t.note}</span>
                </p>
                <p className="mt-3 text-sm text-slate-600">{t.desc}</p>
                <a
                  href="#"
                  className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${
                    t.highlighted
                      ? "bg-brand-600 text-white shadow-md shadow-brand-600/20 hover:bg-brand-700"
                      : "border border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {t.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-400">
            Pro needs the free plugin installed first — it adds to it, not
            replaces it. If a license lapses, Pro features pause but nothing
            is deleted.
          </p>
        </div>
      </section>

      <section className="bg-brand-50/40 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center">
            <Eyebrow className="justify-center">Compare plans</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Every feature, <span className="text-brand-600">side by side.</span>
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-[1fr_72px_72px] items-center gap-2 border-b border-slate-100 bg-slate-50 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:px-8">
              <span>Feature</span>
              <span className="text-center">Free</span>
              <span className="text-center text-brand-600">Pro</span>
            </div>

            {comparisonGroups.map((g) => (
              <div key={g.group}>
                <div className="bg-slate-50/60 px-6 py-2 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:px-8">
                  {g.group}
                </div>
                {g.rows.map((row) => (
                  <div
                    key={row.feature}
                    className="grid grid-cols-[1fr_72px_72px] items-center gap-2 border-t border-slate-100 px-6 py-3 text-sm sm:px-8"
                  >
                    <span className="text-slate-700">{row.feature}</span>
                    <span className="text-center">
                      {row.free ? <Check /> : <Dash />}
                    </span>
                    <span className="text-center">
                      {row.pro ? <Check /> : <Dash />}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <Eyebrow className="justify-center">Questions</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Pricing, plainly.
            </h2>
          </div>

          <div className="mt-10 space-y-6 text-left">
            <div>
              <p className="text-sm font-semibold text-slate-800">
                Do I need Pro to use VuloPilot?
              </p>
              <p className="mt-1 text-sm text-slate-600">
                No. The free plugin scans your whole site — SEO, AI
                visibility, performance, security, accessibility, content
                and (with WooCommerce) commerce — and gives every area a
                score. Pro adds deeper checks and automation on top of what
                free already does.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">
                How does the per-site pricing work?
              </p>
              <p className="mt-1 text-sm text-slate-600">
                One license key activates Pro on the number of sites in your
                plan — 1, 3, or 10. Pick the tier that matches how many
                WordPress sites you manage.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">
                What happens if my license expires?
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Pro features stop working until you renew, but your scan
                history, settings and data all stay exactly as they were.
                Nothing is deleted.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">
                Can I turn off Pro features I don&apos;t need?
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Yes. Every Pro capability is its own module under{" "}
                <span className="font-medium">Settings → Modules</span> —
                turn on only what you use.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
