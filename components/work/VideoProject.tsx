"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { StackBadge } from "@/components/StackBadge";
import { TWorkProject } from "@/lib/types";

const ease = [0.25, 0.1, 0.25, 1] as const;

export function VideoProject({ project }: { project: TWorkProject }) {
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
      </div>
      <div ref={containerRef} className="relative group">
        {/* Glow effect */}
        <div className="absolute -inset-1 rounded-2xl bg-foreground/[0.03] dark:bg-foreground/[0.06] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700" />
        <div className="absolute -inset-px rounded-xl bg-foreground/[0.04] dark:bg-foreground/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {/* Media */}
        <div className="relative rounded-xl overflow-hidden border border-border bg-muted/30 shadow-lg shadow-black/5 dark:shadow-black/20">
          {project.media?.[0]?.type === "image" ? (
            <img
              src={project.media[0].src}
              alt={project.title}
              className="w-full"
            />
          ) : (
            <video
              ref={videoRef}
              src={project.media?.[0]?.src}
              muted
              loop
              playsInline
              className="w-full"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}
