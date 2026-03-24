"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Intro() {
  return (
    <section>
      <motion.p
        className="text-sm text-muted-foreground italic mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        Drawn to teams building software that demands its own UI.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Founding software engineer at{" "}
        <Link
          href="/work"
          className="underline decoration-sky-500 font-medium hover:decoration-2 transition-all"
        >
          Roebling
        </Link>
        , building AI-powered tools for biotech and chemical engineers. Based in
        New York, NY.
      </motion.p>
    </section>
  );
}
