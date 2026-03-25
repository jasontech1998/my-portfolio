"use client";

import { motion } from "framer-motion";
import { TWorkSection } from "@/lib/types";

const ease = [0.25, 0.1, 0.25, 1] as const;

export function CompanySection({
  section,
  children,
}: {
  section: TWorkSection;
  children?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease }}
      className="space-y-5"
    >
      <div>
        <a
          href={section.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl sm:text-2xl font-semibold tracking-tight hover:opacity-70 transition-opacity"
        >
          {section.company}
        </a>
        <p className="text-sm text-muted-foreground mt-1">
          {section.role} &middot; {section.period}
        </p>
      </div>
      {section.headline && (
        <p className="text-lg sm:text-xl font-medium tracking-tight leading-snug max-w-[540px]">
          {section.headline}
        </p>
      )}
      {section.intro && (
        <p className="text-sm text-muted-foreground leading-relaxed max-w-prose">
          {section.intro}
        </p>
      )}
      {children}
    </motion.div>
  );
}
