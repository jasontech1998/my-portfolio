"use client";

import { projects } from "@/lib/projects_data";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Page() {
  const projectItems = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <section>
      <h1 className="text-2xl self-end font-semibold tracking-tighter">
        Projects
      </h1>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }}
        className="flex flex-col gap-3 mt-8"
      >
        {projects.map((project) => (
          <motion.article variants={projectItems} key={project.title}>
            <a
              className="flex flex-col w-full p-3 -mx-3 justify-end rounded-md from-muted/50 to-muted no-underline outline-none focus:shadow-sm hover:bg-gradient-to-b"
              href={project.href}
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium leading-none max-w-60 sm:max-w-md">
                  <p className="line-clamp-2 text-sm leading-snug">
                    {project.title}
                  </p>
                  <p className="pt-2 line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <ChevronRight className="ml-2 h-4 w-4" />
              </div>
            </a>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
