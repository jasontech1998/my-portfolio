"use client";

import { usePathname } from "next/navigation";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./theme/theme-toggle";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scope, animate] = useAnimate();
  const measureRef = useRef<HTMLDivElement>(null);
  const [showContent, setShowContent] = useState(!isHome);
  const [animDone, setAnimDone] = useState(!isHome);
  const isAnimating = useRef(false);

  // Clean up inline animation styles once done so CSS classes take over
  useEffect(() => {
    if (animDone && isHome && scope.current) {
      const el = scope.current;
      el.style.removeProperty("width");
      el.style.removeProperty("height");
      el.style.removeProperty("bottom");
      el.style.removeProperty("right");
      el.style.removeProperty("opacity");
      el.style.removeProperty("transform");
    }
  }, [animDone, isHome, scope]);

  useEffect(() => {
    if (!isHome) {
      setShowContent(true);
      setAnimDone(true);
      isAnimating.current = false;
      return;
    }

    // Reset for homepage
    setShowContent(false);
    setAnimDone(false);

    if (isAnimating.current) return;
    isAnimating.current = true;

    const el = scope.current;
    if (!el) return;

    // Skip animation on mobile — footer is hidden there
    if (window.innerWidth < 640) {
      setShowContent(true);
      setAnimDone(true);
      isAnimating.current = false;
      return;
    }

    const targetW = measureRef.current?.offsetWidth ?? 160;
    const targetH = measureRef.current?.offsetHeight ?? 40;
    const startBottom = window.innerHeight / 2 - 12;
    const startRight = window.innerWidth / 2 - 12;

    const run = async () => {
      // Set initial state: cube at center of viewport
      await animate(
        el,
        {
          bottom: startBottom,
          right: startRight,
          width: 24,
          height: 24,
          opacity: 0,
          scale: 2.5,
        },
        { duration: 0 }
      );

      // Phase 1: Spring to footer corner (matching cube animation, slightly later stagger)
      await animate(
        el,
        { bottom: 12, right: 16, opacity: 1, scale: 1 },
        { type: "spring", stiffness: 80, damping: 22, delay: 0.3 + 5 * 0.07 }
      );

      // Phase 2: Expand to full footer size
      await animate(
        el,
        { width: targetW, height: targetH },
        { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }
      );

      // Phase 3: Reveal content, let CSS take over
      setShowContent(true);
      setAnimDone(true);
      isAnimating.current = false;
    };

    run();
  }, [isHome, animate, scope]);

  const footerContent = (
    <div className="flex items-center gap-3">
      <p className="text-xs text-black dark:text-white">Jason Yu</p>
      <ThemeToggle />
    </div>
  );

  return (
    <>
      {/* Mobile: floating theme toggle top-right */}
      <div className="sm:hidden fixed top-3 right-3 z-50">
        <ThemeToggle />
      </div>

      {/* Hidden clone for measuring final footer dimensions (desktop homepage only) */}
      {isHome && !animDone && (
        <div
          ref={measureRef}
          className="fixed opacity-0 pointer-events-none -z-10 bottom-3 right-4"
          aria-hidden="true"
        >
          <div className="flex items-center gap-3 backdrop-blur-xl bg-white dark:bg-black rounded-md px-4 py-2 shadow-sm border-2 border-black dark:border-white">
            {footerContent}
          </div>
        </div>
      )}

      {/* Desktop: footer pill bottom-right */}
      <footer
        ref={scope}
        className={cn(
          "hidden sm:block fixed z-50",
          (!isHome || animDone) && "bottom-3 right-4"
        )}
      >
        <div className="w-full h-full backdrop-blur-xl bg-white dark:bg-black rounded-md px-4 py-2 shadow-sm border-2 border-black dark:border-white overflow-hidden whitespace-nowrap">
          {showContent ? (
            <motion.div
              initial={isHome ? { opacity: 0 } : false}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {footerContent}
            </motion.div>
          ) : null}
        </div>
      </footer>
    </>
  );
}
