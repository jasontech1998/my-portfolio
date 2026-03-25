"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useSpring,
  useTransform,
  useInView,
  MotionValue,
} from "framer-motion";

function AnimatedDigit({ value }: { value: MotionValue<string> }) {
  return <motion.span>{value}</motion.span>;
}

function StatItem({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 30,
    restDelta: 0.5,
  });

  const display = useTransform(spring, (v) =>
    Math.round(v).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <div ref={ref} className="flex flex-col">
      <div className="flex items-baseline gap-0.5">
        <span className="text-3xl sm:text-4xl font-semibold tracking-tight tabular-nums">
          <AnimatedDigit value={display} />
        </span>
        <span className="text-xl sm:text-2xl font-semibold tracking-tight text-muted-foreground">
          {suffix}
        </span>
      </div>
      <span className="text-xs sm:text-sm text-muted-foreground mt-1">
        {label}
      </span>
    </div>
  );
}

const ease = [0.25, 0.1, 0.25, 1] as const;

export function StatCounters() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease }}
      className="flex gap-8 sm:gap-12"
    >
      <StatItem value={200} suffix="+" label="Pull Requests" />
      <StatItem value={170} suffix="K+" label="Lines of Code" />
      <StatItem value={55} suffix="+" label="Components" />
    </motion.div>
  );
}
