"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { ProjectShowcase } from "./ProjectShowcase";
import { CubeDecoration } from "@/components/CubeDecoration";

const ease = [0.25, 0.1, 0.25, 1] as const;

export function ProjectsPage() {
  return (
    <section className="relative">
      <CubeDecoration />
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="text-3xl sm:text-4xl font-semibold tracking-tight mb-16"
      >
        Projects
      </motion.h1>

      <div className="flex flex-col gap-20">
        {projects.map((project) => (
          <ProjectShowcase key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
