"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { StackBadge } from "@/components/StackBadge";
import { TCreativeItem } from "@/lib/types";

const ease = [0.25, 0.1, 0.25, 1] as const;

const componentRegistry: Record<string, React.ComponentType<any>> = {
  ListArticleLink: dynamic(
    () => import("@/components/creative/ListArticleLink/ListArticleLink").then((m) => m.ListArticleLink),
    { ssr: false }
  ),
  ExpandingCubes: dynamic(
    () => import("@/components/creative/demos/ExpandingCubesDemo"),
    { ssr: false }
  ),
  AnimatedNumber: dynamic(
    () => import("@/components/creative/demos/AnimatedNumberDemo"),
    { ssr: false }
  ),
  AiChat: dynamic(
    () => import("@/components/AiChat"),
    { ssr: false }
  ),
  CustomNav: dynamic(
    () => import("@/components/creative/CustomNav"),
    { ssr: false }
  ),
  CustomStackItems: dynamic(
    () => import("@/components/creative/CustomStackItems"),
    { ssr: false }
  ),
  AnimatedButton: dynamic(
    () => import("@/components/creative/AnimatedButton"),
    { ssr: false }
  ),
  CustomHoverCard: dynamic(
    () => import("@/components/creative/CustomHoverCard"),
    { ssr: false }
  ),
};

export function CreativeShowcase({ item }: { item: TCreativeItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const Component = componentRegistry[item.componentKey];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease }}
      className="space-y-4"
    >
      <div>
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-base font-medium">{item.title}</h3>
          <span className="text-sm text-muted-foreground">{item.date}</span>
        </div>
        <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed max-w-prose">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {item.techStack.map((t) => (
            <StackBadge key={t} title={t} />
          ))}
        </div>
        {item.note && (
          <p className="text-xs text-muted-foreground mt-3 italic">
            Note: {item.note}
          </p>
        )}
      </div>

      <div className="relative group">
        <div className="absolute -inset-1 rounded-2xl bg-foreground/[0.03] dark:bg-foreground/[0.06] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700" />
        <div className="absolute -inset-px rounded-xl bg-foreground/[0.04] dark:bg-foreground/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative flex justify-center items-center p-4 rounded-xl overflow-hidden border border-border bg-muted/30 shadow-lg shadow-black/5 dark:shadow-black/20 min-h-[200px]">
          {isInView && Component ? (
            <Component {...(item.componentProps || {})} />
          ) : (
            <div className="h-[200px]" />
          )}
        </div>
      </div>
    </motion.div>
  );
}
