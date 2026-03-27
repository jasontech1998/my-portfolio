"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Home, Briefcase, FolderOpen, Sparkles } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const navItems = [
  { href: "/", label: "Home", icon: Home, exact: true },
  { href: "/work", label: "Work", icon: Briefcase },
  { href: "/projects", label: "Projects", icon: FolderOpen },
  { href: "/creative", label: "Creative", icon: Sparkles },
];

let hasPlayedNavAnim = false;

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scope, animate] = useAnimate();
  const measureRef = useRef<HTMLDivElement>(null);
  const [showItems, setShowItems] = useState(!isHome || hasPlayedNavAnim);
  const [animDone, setAnimDone] = useState(!isHome || hasPlayedNavAnim);
  const isAnimating = useRef(false);

  // Clean up inline animation styles once done so CSS classes take over
  useEffect(() => {
    if (animDone && isHome && scope.current) {
      const el = scope.current;
      el.style.removeProperty("width");
      el.style.removeProperty("height");
      el.style.removeProperty("top");
      el.style.removeProperty("left");
      el.style.removeProperty("opacity");
      el.style.removeProperty("transform");
    }
  }, [animDone, isHome, scope]);

  useEffect(() => {
    if (!isHome) {
      setShowItems(true);
      setAnimDone(true);
      isAnimating.current = false;
      return;
    }

    // Skip animation if already played once this session
    if (hasPlayedNavAnim) {
      setShowItems(true);
      setAnimDone(true);
      return;
    }

    // Reset for homepage
    setShowItems(false);
    setAnimDone(false);

    if (isAnimating.current) return;
    isAnimating.current = true;

    const el = scope.current;
    if (!el) return;

    const targetW = measureRef.current?.offsetWidth ?? 200;
    const targetH = measureRef.current?.offsetHeight ?? 42;
    const isSm = window.innerWidth >= 640;
    const endLeft = isSm ? 16 : 12;
    const startTop = window.innerHeight / 2 - 12;
    const startLeft = window.innerWidth / 2 - 12;

    const run = async () => {
      // Set initial state: cube at center of viewport
      await animate(
        el,
        {
          top: startTop,
          left: startLeft,
          width: 24,
          height: 24,
          opacity: 0,
          scale: 2.5,
        },
        { duration: 0 }
      );

      // Phase 1: Spring to nav corner (matching cube animation)
      await animate(
        el,
        { top: 12, left: endLeft, opacity: 1, scale: 1 },
        { type: "spring", stiffness: 80, damping: 22, delay: 0.3 }
      );

      // Phase 2: Expand to full nav size
      await animate(
        el,
        { width: targetW, height: targetH },
        { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }
      );

      // Phase 3: Reveal items, let CSS take over
      setShowItems(true);
      setAnimDone(true);
      isAnimating.current = false;
      hasPlayedNavAnim = true;
    };

    run();
  }, [isHome, animate, scope]);

  const navContent = (
    <ul className="flex items-center space-x-1">
      {navItems.map(({ href, label, icon: Icon, exact }) => {
        const isActive = exact
          ? pathname === href
          : pathname.startsWith(href);
        return (
          <li key={href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={href}
                  className={cn(
                    "inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors text-muted-foreground hover:text-foreground hover:bg-accent",
                    isActive && "text-foreground"
                  )}
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{label}</p>
              </TooltipContent>
            </Tooltip>
          </li>
        );
      })}
    </ul>
  );

  return (
    <TooltipProvider delayDuration={100}>
      {/* Hidden clone for measuring final nav dimensions */}
      {isHome && !animDone && (
        <div
          ref={measureRef}
          className="fixed opacity-0 pointer-events-none -z-10 top-3 left-3 sm:left-4"
          aria-hidden="true"
        >
          <nav className="backdrop-blur-xl bg-white dark:bg-black rounded-md p-1 shadow-sm border-2 border-black dark:border-white">
            {navContent}
          </nav>
        </div>
      )}

      <div
        ref={scope}
        className={cn(
          "fixed z-50",
          (!isHome || animDone) && "top-3 left-3 sm:left-4"
        )}
      >
        <nav className="w-full h-full backdrop-blur-xl bg-white dark:bg-black rounded-md p-1 shadow-sm border-2 border-black dark:border-white whitespace-nowrap">
          {showItems ? (
            <motion.div
              initial={isHome ? { opacity: 0 } : false}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {navContent}
            </motion.div>
          ) : null}
        </nav>
      </div>
    </TooltipProvider>
  );
}
