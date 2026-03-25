"use client";

import { motion } from "framer-motion";
import { roeblingWork, eabWork } from "@/lib/data";
import { CompanySection } from "./CompanySection";
import { VideoProject } from "./VideoProject";
import { StatCounters } from "./StatCounters";
import { ProjectGrid } from "./ProjectGrid";
import { SectionDivider } from "./SectionDivider";

const ease = [0.25, 0.1, 0.25, 1] as const;

export function WorkPage() {
  const videoProjects = roeblingWork.projects.filter((p) => p.media?.length);
  const textProjects = roeblingWork.projects.filter((p) => !p.media?.length);

  return (
    <section>
      {/* Page title */}
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="text-3xl sm:text-4xl font-semibold tracking-tight mb-16"
      >
        Work
      </motion.h1>

      {/* Roebling — Hero */}
      <CompanySection section={roeblingWork}>
        <StatCounters />
      </CompanySection>

      {/* Video demos */}
      <div className="flex flex-col gap-20 mt-20">
        {videoProjects.map((project) => (
          <VideoProject key={project.title} project={project} />
        ))}
      </div>

      {/* Roebling text projects */}
      <div className="mt-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-6"
        >
          More Work
        </motion.h2>
        <ProjectGrid projects={textProjects} size="base" />
      </div>

      {/* Divider */}
      <SectionDivider />

      {/* EAB */}
      <div className="mb-10">
        <CompanySection section={eabWork} />
      </div>

      <ProjectGrid projects={eabWork.projects} />
    </section>
  );
}
