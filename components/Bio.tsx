"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const highlights = [
  "Built the product from the ground up as one of two founding engineers",
  "Pioneered AI-native workflows across the team — built 12 custom MCP skills, a two-Lambda ticket triage system, and a nightly bug scanner with Claude",
  "Built AI chat experiences, schema-driven analysis dashboards, and AI infrastructure for internal automations",
];

export function Bio() {
  return (
    <section className="max-w-2xl mx-auto">
      <motion.p
        className="hidden sm:block text-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        I care deeply about craft — from pixel-level UI polish to scalable
        frontend architecture. I like building things that feel good to use.
      </motion.p>

      <motion.div
        className="hidden sm:block mt-6 space-y-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {highlights.map((item, i) => (
          <div key={i} className="flex gap-3 items-start">
            <span className="relative flex mt-1.5 h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-sky-500" />
            </span>
            <p className="text-sm text-muted-foreground">{item}</p>
          </div>
        ))}
      </motion.div>

      <motion.p
        className="mt-4 sm:mt-6 text-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        I share my thinking and taste on{" "}
        <a
          href="https://x.com/lockedinagain"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-sky-500 font-medium hover:decoration-2 transition-all"
        >
          X
        </a>
        {" "}— follow along for thoughts on design, engineering, and building products.
      </motion.p>
    </section>
  );
}

export default Bio;
