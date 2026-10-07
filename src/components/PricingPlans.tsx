"use client";

import { useState } from "react";

const tiers = [
  { name: "1 site", monthly: 2, yearly: 19, desc: "For a single WordPress site.", highlighted: false },
  { name: "3 sites", monthly: 5, yearly: 49, desc: "For a few sites you manage.", highlighted: true },
  { name: "10 sites", monthly: 10, yearly: 99, desc: "For an agency or a growing portfolio.", highlighted: false },
];

const proHighlights = [
  "Every free feature, plus 20 Pro-only modules",
  "One-click fixes — single or bulk",
  "Keyword rank tracking from Search Console",
  "AI crawler tracking & alerts",
  "Scheduled accessibility audits",
  "Cloud backups to Amazon S3 or Google Drive",
];

export default function PricingPlans() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");

  return (
    <div>
      <div className="mx-auto flex w-fit items-center gap-1 rounded-full border border-slate-200 bg-white p-1 text-sm font-medium">
        <button
          type="button"
          onClick={() => setBilling("monthly")}
          className={`rounded-full px-4 py-1.5 transition ${
            billing === "monthly"
              ? "bg-brand-600 text-white"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Monthly
        </button>
        <button
          type="button"
          onClick={() => setBilling("yearly")}
          className={`flex items-center gap-2 rounded-full px-4 py-1.5 transition ${
            billing === "yearly"
              ? "bg-brand-600 text-white"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Yearly
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
              billing === "yearly"
                ? "bg-white/20 text-white"
                : "bg-emerald-50 text-emerald-600"
            }`}
          >
            Save ~20%
          </span>
        </button>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {tiers.map((t) => {
          const price = billing === "monthly" ? t.monthly : t.yearly;
          const period = billing === "monthly" ? "/month" : "/year";
          return (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-3xl border p-8 text-left ${
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
              <p className="text-sm font-semibold text-brand-600">Pro — {t.name}</p>
              <p className="mt-1 text-xs text-slate-500">Turn findings into action.</p>
              <p className="mt-4 text-4xl font-extrabold text-slate-900">
                ${price}
                <span className="text-base font-medium text-slate-400">{period}</span>
              </p>
              <p className="mt-1 text-xs text-slate-500">{t.desc}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {proHighlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-slate-600">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
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
                    {h}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${
                  t.highlighted
                    ? "bg-brand-600 text-white shadow-md shadow-brand-600/20 hover:bg-brand-700"
                    : "border border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                Buy Pro — {t.name}
              </a>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
        <span>✓ 14-day free trial</span>
        <span>✓ No credit card required</span>
        <span>✓ Full access to your selected plan</span>
      </div>
    </div>
  );
}
