"use client";

import { motion } from "framer-motion";
import { StackBadge } from "@/components/StackBadge";
import { TWorkProject } from "@/lib/types";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function ProjectGrid({
  projects,
  size = "sm",
}: {
  projects: TWorkProject[];
  size?: "sm" | "base";
}) {
  const titleClass = size === "base" ? "text-base font-medium" : "text-sm font-medium";
  const descClass =
    size === "base"
      ? "text-sm text-muted-foreground leading-relaxed"
      : "text-xs text-muted-foreground leading-relaxed";

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      {projects.map((project) => (
        <motion.div
          key={project.title}
          variants={cardVariants}
          className="rounded-lg border border-border p-4 space-y-2 hover:bg-muted/50 transition-colors duration-200"
        >
          <h3 className={titleClass}>{project.title}</h3>
          <p className={descClass}>{project.description}</p>
          <div className="flex flex-wrap gap-1 pt-1">
            {project.techStack.map((t) => (
              <StackBadge key={t} title={t} />
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
