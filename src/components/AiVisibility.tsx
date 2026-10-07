"use client";

import { useState } from "react";

type StandardTab = {
  kind: "standard";
  label: string;
  heading: string;
  subheading: string;
  tags: string[];
  score: number;
  scoreLabel: string;
  scoreNote: string;
  pagesChecked: number;
  pagesFlagged: number;
  metrics: { label: string; value: number }[];
  cta: string;
};

type CommerceTab = {
  kind: "commerce";
  label: string;
};

type Tab = StandardTab | CommerceTab;

const tabs: Tab[] = [
  {
    kind: "standard",
    label: "Search visibility",
    heading: "Help people find your pages on Google.",
    subheading:
      "See what's stopping pages from ranking and which ones to fix first.",
    tags: ["Indexability", "Keyword coverage", "Backlink health"],
    score: 82,
    scoreLabel: "Good",
    scoreNote: "Most of your pages are set up to be found.",
    pagesChecked: 70,
    pagesFlagged: 22,
    metrics: [
      { label: "Page titles & meta", value: 85 },
      { label: "Indexing & crawlability", value: 92 },
      { label: "Keyword targeting", value: 70 },
      { label: "Internal linking", value: 68 },
      { label: "Mobile usability", value: 95 },
      { label: "Backlink profile", value: 60 },
    ],
    cta: "Explore search visibility →",
  },
  {
    kind: "standard",
    label: "AI visibility",
    heading: "Help AI systems understand your business.",
    subheading:
      "Review your Q&A, find gaps in your content and track how your website signals change.",
    tags: ["Entity clarity", "Question coverage", "Content freshness"],
    score: 96,
    scoreLabel: "Excellent",
    scoreNote: "Your website is well understood by AI systems.",
    pagesChecked: 70,
    pagesFlagged: 38,
    metrics: [
      { label: "Entities & Expertise", value: 80 },
      { label: "Experts & Authority", value: 88 },
      { label: "Brand mentions", value: 65 },
      { label: "Technical SEO", value: 90 },
      { label: "Social Signals", value: 50 },
      { label: "Content freshness", value: 72 },
    ],
    cta: "Explore AI visibility →",
  },
  {
    kind: "standard",
    label: "Content",
    heading: "Find thin, missing, or outdated content.",
    subheading: "Spot the gaps visitors and search engines notice first.",
    tags: ["Content freshness", "Depth & completeness", "Duplicate content"],
    score: 74,
    scoreLabel: "Good",
    scoreNote: "Some pages are thin or overdue for a refresh.",
    pagesChecked: 70,
    pagesFlagged: 29,
    metrics: [
      { label: "Content freshness", value: 72 },
      { label: "Depth & completeness", value: 78 },
      { label: "Readability", value: 81 },
      { label: "Duplicate content", value: 90 },
      { label: "Media & alt text", value: 55 },
      { label: "Internal structure", value: 69 },
    ],
    cta: "Explore content →",
  },
  {
    kind: "standard",
    label: "Performance",
    heading: "See how fast your pages open for visitors.",
    subheading: "Catch the pages slow enough to be costing you visitors.",
    tags: ["Load time", "Core Web Vitals", "Image weight"],
    score: 88,
    scoreLabel: "Excellent",
    scoreNote: "Your site is fast on most devices and connections.",
    pagesChecked: 70,
    pagesFlagged: 11,
    metrics: [
      { label: "Largest Contentful Paint", value: 90 },
      { label: "Cumulative Layout Shift", value: 95 },
      { label: "Image optimization", value: 72 },
      { label: "Script weight", value: 80 },
      { label: "Server response time", value: 92 },
      { label: "Mobile speed", value: 85 },
    ],
    cta: "Explore performance →",
  },
  {
    kind: "standard",
    label: "Security & Health",
    heading: "Catch the risks that could take your site down.",
    subheading:
      "Spot critical issues before they become downtime or a security incident.",
    tags: ["Malware scan", "SSL & updates", "Backup status"],
    score: 91,
    scoreLabel: "Excellent",
    scoreNote: "No critical risks found on your most recent scan.",
    pagesChecked: 70,
    pagesFlagged: 6,
    metrics: [
      { label: "Malware & vulnerabilities", value: 98 },
      { label: "Plugin & core updates", value: 85 },
      { label: "SSL configuration", value: 100 },
      { label: "File permissions", value: 90 },
      { label: "Backup status", value: 75 },
      { label: "Login security", value: 88 },
    ],
    cta: "Explore security & health →",
  },
  {
    kind: "standard",
    label: "Automation",
    heading: "Checks that run themselves so nothing slips through.",
    subheading:
      "See what VuloPilot is watching in the background right now.",
    tags: ["Active workflows", "Last run", "Next check"],
    score: 95,
    scoreLabel: "Excellent",
    scoreNote: "Your recurring checks are running on schedule.",
    pagesChecked: 70,
    pagesFlagged: 0,
    metrics: [
      { label: "New page checks", value: 100 },
      { label: "Slow page detection", value: 100 },
      { label: "Content freshness checks", value: 90 },
      { label: "Weekly re-scan", value: 100 },
      { label: "Broken link checks", value: 95 },
      { label: "Alert delivery", value: 100 },
    ],
    cta: "Explore automation →",
  },
  { kind: "commerce", label: "Commerce" },
];

function ScoreRing({ score, scoreLabel }: { score: number; scoreLabel: string }) {
  const ringColor =
    score >= 85
      ? "border-emerald-400"
      : score >= 70
      ? "border-amber-400"
      : "border-rose-400";
  const labelColor =
    score >= 85
      ? "text-emerald-600"
      : score >= 70
      ? "text-amber-600"
      : "text-rose-600";
  return (
    <div className={`relative flex h-24 w-24 items-center justify-center rounded-full border-8 ${ringColor}`}>
      <span className="text-2xl font-extrabold text-slate-900">{score}</span>
      <span className="sr-only">{scoreLabel}</span>
    </div>
  );
}

function StandardPanel({ tab }: { tab: StandardTab }) {
  return (
    <div className="p-2">
      <h3 className="text-sm font-semibold text-slate-800">{tab.heading}</h3>
      <p className="mt-1 text-xs text-slate-500">{tab.subheading}</p>
      <div className="mt-2 flex flex-wrap gap-4 text-xs text-slate-400">
        {tab.tags.map((t) => (
          <span key={t}>● {t}</span>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-[auto_1fr]">
        <div className="flex flex-col items-center justify-center rounded-2xl bg-brand-50 px-8 py-6">
          <ScoreRing score={tab.score} scoreLabel={tab.scoreLabel} />
          <p
            className={`mt-3 text-xs font-semibold ${
              tab.score >= 85
                ? "text-emerald-600"
                : tab.score >= 70
                ? "text-amber-600"
                : "text-rose-600"
            }`}
          >
            {tab.scoreLabel}
          </p>
          <p className="mt-1 text-xs text-slate-400">{tab.scoreNote}</p>
          <div className="mt-4 flex gap-6 text-xs text-slate-500">
            <div>
              <p className="font-semibold text-slate-800">{tab.pagesChecked}</p>
              <p>Pages checked</p>
            </div>
            <div>
              <p className="font-semibold text-slate-800">{tab.pagesFlagged}</p>
              <p>Pages flagged</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {tab.metrics.map((m) => (
            <div key={m.label}>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600">{m.label}</span>
                <span className="font-semibold text-slate-800">{m.value}%</span>
              </div>
              <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-brand-500"
                  style={{ width: `${m.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-brand-600/20 hover:bg-brand-700"
      >
        {tab.cta}
      </a>
    </div>
  );
}

const commerceCategories = [
  { icon: "📦", label: "Products", note: "5 need attention", tone: "warn" as const },
  { icon: "🛒", label: "Orders", note: "1 needs attention", tone: "warn" as const },
  { icon: "💳", label: "Checkout & Payments", note: "3 active payment methods", tone: "neutral" as const },
  { icon: "🔍", label: "Product SEO", note: "No open findings", tone: "good" as const },
];

const commercePriorities = [
  {
    icon: "📋",
    title: "Product completeness",
    desc: "Update product data like categories, tags, descriptions, and SKU.",
    priority: "High",
  },
  {
    icon: "📝",
    title: "Product descriptions",
    desc: "Add rich product descriptions to improve SEO and conversion.",
    priority: "Medium",
  },
  {
    icon: "⏱️",
    title: "Stale pending orders",
    desc: "Review and process pending orders to keep customers happy.",
    priority: "Medium",
  },
];

const priorityStyles: Record<string, string> = {
  High: "bg-rose-50 text-rose-600",
  Medium: "bg-amber-50 text-amber-600",
};

function CommercePanel() {
  return (
    <div className="p-2">
      <h3 className="text-sm font-semibold text-slate-800">
        AI-powered WooCommerce intelligence to help you increase sales and
        grow revenue.
      </h3>
      <p className="mt-1 text-xs text-slate-500">
        VuloPilot watches your store the same way it watches your content and
        security — then tells you what to fix first.
      </p>

      <div className="mt-5 rounded-2xl bg-brand-50 p-5">
        <p className="text-sm font-bold text-slate-900">Your store needs some attention</p>
        <p className="mt-0.5 text-xs font-semibold text-rose-600">6 things could interfere with sales.</p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {commerceCategories.map((c) => (
          <div key={c.label} className="rounded-xl border border-slate-200 bg-white p-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-sm">
              {c.icon}
            </span>
            <p className="mt-2 text-xs font-semibold text-slate-800">{c.label}</p>
            <span
              className={`mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${
                c.tone === "warn"
                  ? "bg-rose-50 text-rose-600"
                  : c.tone === "good"
                  ? "bg-emerald-50 text-emerald-600"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              {c.note}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
          ★ What should I work on first?
        </p>
        <p className="mt-1 text-xs text-slate-500">
          The highest-impact opportunities for your WooCommerce store.
        </p>
        <ul className="mt-3 space-y-2">
          {commercePriorities.map((p) => (
            <li
              key={p.title}
              className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-3"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-sm">
                  {p.icon}
                </span>
                <div>
                  <p className="text-xs font-semibold text-slate-800">{p.title}</p>
                  <p className="text-[11px] text-slate-500">{p.desc}</p>
                </div>
              </div>
              <span
                className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold ${priorityStyles[p.priority]}`}
              >
                {p.priority}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="flex items-center gap-2 text-xs font-semibold text-slate-800">
            <span>✦</span> Bulk AI optimization
          </p>
          <p className="mt-1 text-[11px] text-slate-500">
            Select an action and a batch of products to get AI suggestions,
            then review and approve each proposal.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="flex items-center gap-2 text-xs font-semibold text-slate-800">
            <span>📈</span> AI Sales Optimizer
          </p>
          <p className="mt-1 text-[11px] text-slate-500">
            Find cross-sell, upsell, and bundle opportunities across your
            store.
          </p>
        </div>
      </div>

      <a
        href="#"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-brand-600/20 hover:bg-brand-700"
      >
        Explore commerce →
      </a>
    </div>
  );
}

export default function AiVisibility() {
  const [activeIndex, setActiveIndex] = useState(1);
  const activeTab = tabs[activeIndex];

  return (
    <section className="bg-brand-50/40 py-20">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
          Following AI search, the VuloPilot way
        </p>
        <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
          One website. Every signal.{" "}
          <span className="text-brand-600">One system.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-slate-600">
          The plugin that connects every WordPress signal — search
          visibility, AI visibility, content, performance, security, and
          automation.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 text-left shadow-xl shadow-brand-900/5 lg:grid-cols-[220px_1fr]">
          <nav className="space-y-1 border-b border-slate-100 pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-4">
            {tabs.map((t, i) => (
              <button
                key={t.label}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`block w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition ${
                  i === activeIndex
                    ? "bg-brand-600 text-white"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {t.label} {i === activeIndex && <span className="float-right">→</span>}
              </button>
            ))}
          </nav>

          {activeTab.kind === "commerce" ? (
            <CommercePanel />
          ) : (
            <StandardPanel tab={activeTab} />
          )}
        </div>
      </div>
    </section>
  );
}
