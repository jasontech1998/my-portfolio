"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const highlights = [
  "Founding engineer who built the product from scratch — own the frontend architecture and set the patterns the entire team builds on",
  "Co-building Roebot, an autonomous AI agent orchestration system — routes tasks from Linear, Slack, and Notion to isolated Claude agents that write code, open PRs, and triage bugs",
  "Shipped AI chat experiences, schema-driven generative UI dashboards, and automation infrastructure powering internal workflows",
];

export function Bio() {
  return (
    <section className="max-w-2xl mx-auto">
      <div className="hidden sm:block mt-6 space-y-3">
        {highlights.map((item, i) => (
          <div key={i} className="flex gap-3 items-start">
            <span className="relative flex mt-1.5 h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-sky-500" />
            </span>
            <p className="text-sm text-muted-foreground">{item}</p>
          </div>
        ))}
      </div>

      <p className="mt-4 sm:mt-6 text-sm text-muted-foreground">
        I share my thinking and taste on{" "}
        <a
          href="https://x.com/lockedinagain"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-sky-500 hover:decoration-2 transition-all"
        >
          X
        </a>
        {" "}— follow along for thoughts on design, engineering, and building products.
      </p>
    </section>
  );
}

export default Bio;
