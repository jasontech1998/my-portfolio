"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { StackBadge } from "@/components/StackBadge";
import { TProject } from "@/lib/types";
import { Globe } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as const;

export function ProjectShowcase({ project }: { project: TProject }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.5 });

  useEffect(() => {
    if (!videoRef.current) return;
    if (isInView) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease }}
      className="space-y-4"
    >
      <div>
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-medium">{project.title}</h3>
            {(project.github || project.demo) && (
              <div className="flex items-center gap-1.5">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="GitHub repository"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Live demo"
                  >
                    <Globe className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            )}
          </div>
          {project.date && <span className="text-sm text-muted-foreground">{project.date}</span>}
        </div>
        <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed max-w-prose">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.techStack.map((t) => (
            <StackBadge key={t} title={t} />
          ))}
        </div>
        {project.note && (
          <p className="text-xs text-muted-foreground mt-3 italic">
            Note: {project.note}
          </p>
        )}
      </div>

      {project.media && project.media.length > 0 && (
        <div ref={containerRef} className="space-y-4">
          {project.media.map((item, i) => (
            <div key={i} className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-foreground/[0.03] dark:bg-foreground/[0.06] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700" />
              <div className="absolute -inset-px rounded-xl bg-foreground/[0.04] dark:bg-foreground/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-xl overflow-hidden border border-border bg-muted/30 shadow-lg shadow-black/5 dark:shadow-black/20">
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={project.title}
                    className="w-full"
                  />
                ) : (
                  <video
                    ref={i === 0 ? videoRef : undefined}
                    src={item.src}
                    muted
                    loop
                    playsInline
                    className="w-full"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
