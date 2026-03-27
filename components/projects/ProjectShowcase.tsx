"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { StackBadge } from "@/components/StackBadge";
import { TypingButton } from "@/components/TypingButton";
import { TProject } from "@/lib/types";

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
        <h3 className="text-base font-medium">{project.title}</h3>
        <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed max-w-prose">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.techStack.map((t) => (
            <StackBadge key={t} title={t} />
          ))}
        </div>
        {(project.github || project.demo) && (
          <div className="flex gap-3 mt-3">
            {project.github && <TypingButton href={project.github} text="Github" />}
            {project.demo && <TypingButton href={project.demo} text="Demo" />}
          </div>
        )}
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
