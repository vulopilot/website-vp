import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import Footer from "@/components/Footer";
import PricingPlans from "@/components/PricingPlans";

export const metadata: Metadata = {
  title: "Pricing — VuloPilot",
  description:
    "VuloPilot is free forever. Add Pro for technical SEO, keyword rank tracking, one-click fixes, AI crawler tracking, WooCommerce analytics, and more — from $19/year.",
};

const allPlansInclude = [
  "WordPress SEO audits",
  "GEO & AI search visibility",
  "Content optimization",
  "Performance monitoring",
  "Security monitoring",
  "Accessibility checks",
  "Reports & history",
  "AI-assisted fixes (you approve every change)",
  "AI blog post drafts",
  "AI product descriptions",
  "AI-generated FAQs",
  "AI call-to-action copy",
  "AI meta titles & descriptions",
  "Heading-structure checks",
  "Duplicate-title cleanup",
  "Readability scoring",
];

const comparisonGroups: {
  group: string;
  rows: { feature: string; free: string | boolean; pro: string | boolean }[];
}[] = [
  {
    group: "Coverage",
    rows: [
      { feature: "Core scan areas (SEO, AI visibility, content, performance, site health, accessibility, security, commerce)", free: true, pro: true },
      { feature: "Additional Pro-only modules", free: "0", pro: "20" },
      { feature: "Sites per license", free: "Unlimited", pro: "1 / 3 / 10 by plan" },
    ],
  },
  {
    group: "Search (SEO)",
    rows: [
      { feature: "SEO score & problem checks, sitemap, redirects, robots.txt", free: true, pro: true },
      { feature: "Sitewide schema gaps, duplicate meta, multiple H1s, focus-keyword check", free: false, pro: true },
      { feature: "Keyword rank tracking (Search Console rankings, opportunities)", free: false, pro: true },
      { feature: "One-click fixes — single or bulk", free: false, pro: true },
    ],
  },
  {
    group: "AI search visibility",
    rows: [
      { feature: "GEO score, brand profile, AI crawler overview, llms.txt", free: true, pro: true },
      { feature: "Answer Engine Optimization — citation coverage & engine testing", free: false, pro: true },
      { feature: "AI crawler visit tracking & alerts", free: "Basic log", pro: "Full tracking + alerts" },
      { feature: "Brand Visibility & Knowledge Graph mapping", free: false, pro: true },
    ],
  },
  {
    group: "Content & performance",
    rows: [
      { feature: "AI Writer, Blog Generator, duplicate-title fixer", free: true, pro: true },
      { feature: "Per-post content score & competitor content-gap analysis", free: false, pro: true },
      { feature: "Speed score, Core Web Vitals, one-click speed fixes", free: true, pro: true },
    ],
  },
  {
    group: "Reliability & security",
    rows: [
      { feature: "Site health checks & manual/scheduled backups", free: true, pro: true },
      { feature: "Cloud backup copies to Amazon S3 or Google Drive", free: false, pro: true },
      { feature: "Malware checks, login protection, firewall logging", free: true, pro: true },
      { feature: "Known-vulnerability feed matching, file-change tracking", free: false, pro: true },
      { feature: "WCAG audits", free: "On demand", pro: "Scheduled, with history" },
    ],
  },
  {
    group: "Commerce & automation",
    rows: [
      { feature: "WooCommerce findings & AI Sales Assistant", free: true, pro: true },
      { feature: "Revenue stats, abandoned-cart tracking, bulk AI product actions", free: false, pro: true },
      { feature: "Scheduled full-site scan & emailed visibility report", free: true, pro: true },
      { feature: "Conditional workflow rules, retries & a visual workflow builder", free: false, pro: true },
    ],
  },
  {
    group: "Reports & AI Copilot",
    rows: [
      { feature: "Overview, History timeline, CSV/PDF export", free: true, pro: true },
      { feature: "Custom report builder, scheduled reports, AI usage analytics", free: false, pro: true },
      { feature: "AI Copilot Q&A + blog drafting", free: true, pro: true },
      { feature: "Full interactive chat + MCP server (Claude Desktop & other AI tools)", free: false, pro: true },
    ],
  },
];

function Check() {
  return (
    <svg className="mx-auto h-4 w-4 text-emerald-500" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M5 10.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Dash() {
  return <span className="mx-auto block text-slate-300">—</span>;
}

function Cell({ value }: { value: string | boolean }) {
  if (value === true) return <Check />;
  if (value === false) return <Dash />;
  return <span className="text-center text-xs font-semibold text-slate-700">{value}</span>;
}

export default function PricingPage() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-brand-50 via-white to-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Eyebrow className="justify-center">Pricing</Eyebrow>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Invest in success,
            <br />
            <span className="bg-gradient-to-r from-brand-600 to-fuchsia-500 bg-clip-text text-transparent">
              not just software.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600">
            VuloPilot Pro adds 20 modules, one-click fixes, deeper automation
            and real support on top of the free plugin every site starts
            with — priced to fit one site or a whole portfolio.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-white pb-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <PricingPlans />
        </div>
      </section>

      {/* All plans include */}
      <section className="bg-brand-50/40 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <Eyebrow className="justify-center">All plans include</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            What&apos;s included, <span className="text-brand-600">free or Pro.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-600">
            Every VuloPilot install — free or Pro — starts with the same
            scanning, scoring and AI-assisted toolkit.
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-x-10 gap-y-4 text-left sm:grid-cols-2">
            {allPlansInclude.map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm text-slate-700">
                <svg className="h-4 w-4 shrink-0 text-brand-500" viewBox="0 0 20 20" fill="none" aria-hidden>
                  <path d="M5 10.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust row */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 text-center sm:grid-cols-3 lg:px-8">
          <div>
            <p className="text-sm font-semibold text-slate-900">Money-back guarantee</p>
            <p className="mt-1 text-sm text-slate-600">
              Try Pro risk-free for 15 days. If it&apos;s not right for you,
              we&apos;ll refund it in full.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Data security</p>
            <p className="mt-1 text-sm text-slate-600">
              Your data is protected with 256-bit SSL/TLS encryption.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Accepted payment methods</p>
            <p className="mt-1 text-sm text-slate-600">
              Pay securely with Stripe, PayPal, or a credit card.
            </p>
          </div>
        </div>
      </section>

      {/* Compare plans */}
      <section className="bg-brand-50/40 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center">
            <Eyebrow className="justify-center">Compare & Conquer</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Compare plans
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-slate-600">
              See what makes Pro the choice for serious WordPress site owners.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-[1fr_90px_90px] items-center gap-2 border-b border-slate-100 bg-slate-50 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:px-8">
              <span>Feature</span>
              <span className="text-center">VuloPilot Free</span>
              <span className="text-center text-brand-600">VuloPilot Pro</span>
            </div>

            {comparisonGroups.map((g) => (
              <div key={g.group}>
                <div className="bg-slate-50/60 px-6 py-2 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:px-8">
                  {g.group}
                </div>
                {g.rows.map((row) => (
                  <div
                    key={row.feature}
                    className="grid grid-cols-[1fr_90px_90px] items-center gap-2 border-t border-slate-100 px-6 py-3 text-sm sm:px-8"
                  >
                    <span className="text-slate-700">{row.feature}</span>
                    <Cell value={row.free} />
                    <Cell value={row.pro} />
                  </div>
                ))}
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

      {/* FAQ */}
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
              <p className="text-sm font-semibold text-slate-800">Do I need Pro to use VuloPilot?</p>
              <p className="mt-1 text-sm text-slate-600">
                No. The free plugin scans your whole site — SEO, AI
                visibility, performance, security, accessibility, content
                and (with WooCommerce) commerce — and gives every area a
                score. Pro adds deeper checks and automation on top.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">How does the per-site pricing work?</p>
              <p className="mt-1 text-sm text-slate-600">
                One license key activates Pro on the number of sites in your
                plan — 1, 3, or 10. Pick the tier that matches how many
                WordPress sites you manage.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">What happens if my license expires?</p>
              <p className="mt-1 text-sm text-slate-600">
                Pro features stop working until you renew, but your scan
                history, settings and data all stay exactly as they were.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">Can I turn off Pro features I don&apos;t need?</p>
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
