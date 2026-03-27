"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";

interface Position {
  x: number;
  y: number;
  floatDelay: number;
}

interface ContentSize {
  width: number;
  height: number;
}

const WIN_TOLERANCE = 8; // degrees from level to count as a win
const TILTED_ANGLE = 15; // initial tilt for the challenge cube

const ExpandingCubes = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [positions, setPositions] = useState<Position[]>([]);
  const [contentSize, setContentSize] = useState<ContentSize>({
    width: 0,
    height: 0,
  });
  const [hoveredCube, setHoveredCube] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [challengeCube, setChallengeCube] = useState<number | null>(null);
  const [won, setWon] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Pick a random challenge cube on desktop after positions settle
  useEffect(() => {
    if (positions.length > 0 && !isMobile && challengeCube === null) {
      setChallengeCube(Math.floor(Math.random() * positions.length));
    }
  }, [positions, isMobile]);

  useEffect(() => {
    if (contentRef.current) {
      setContentSize({
        width: contentRef.current.offsetWidth,
        height: contentRef.current.offsetHeight,
      });
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setContentSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        resizeObserver.unobserve(contentRef.current);
      }
    };
  }, [children]);

  useEffect(() => {
    const updatePositions = () => {
      const viewportWidth = window.innerWidth;
      const mobile = viewportWidth < 768;
      setIsMobile(mobile);

      const verticalPadding = 80;
      const totalHeight = contentSize.height + verticalPadding * 2;

      const baseHorizontalSpacing = Math.min(
        Math.max(contentSize.width * 0.5, 180),
        mobile ? 180 : 320
      );

      const horizontalSpacing = mobile
        ? Math.min(baseHorizontalSpacing, viewportWidth * 0.4)
        : baseHorizontalSpacing;

      if (mobile) {
        return [
          { x: -horizontalSpacing, y: -totalHeight / 2 + 50, floatDelay: 0 },
          { x: horizontalSpacing, y: -totalHeight / 2 + 50, floatDelay: 0.5 },
          { x: -horizontalSpacing, y: totalHeight / 2 - 50, floatDelay: 1.0 },
          { x: horizontalSpacing, y: totalHeight / 2 - 50, floatDelay: 1.5 },
        ];
      }

      return [
        { x: -horizontalSpacing, y: -totalHeight / 2 + 50, floatDelay: 0 },
        { x: 0, y: -totalHeight / 2 + 50, floatDelay: 0.4 },
        { x: horizontalSpacing, y: -totalHeight / 2 + 50, floatDelay: 0.8 },
        { x: -horizontalSpacing, y: totalHeight / 2 - 50, floatDelay: 1.2 },
        { x: 0, y: totalHeight / 2 - 50, floatDelay: 1.6 },
        { x: horizontalSpacing, y: totalHeight / 2 - 50, floatDelay: 2.0 },
      ];
    };

    if (contentSize.width > 0 && contentSize.height > 0) {
      setPositions(updatePositions());
    }

    const handleResize = () => {
      if (contentSize.width > 0 && contentSize.height > 0) {
        setPositions(updatePositions());
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [contentSize]);

  const contentVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.5,
      },
    },
  };

  const containerHeight = Math.max(200, contentSize.height + 100);

  // Track rotation per cube so we can wind down smoothly
  const cubeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animFrames = useRef<Map<number, number>>(new Map());
  const rotations = useRef<Map<number, number>>(new Map());
  const spinDelays = useRef<Map<number, NodeJS.Timeout>>(new Map());

  // Initialize challenge cube's rotation to the tilted angle
  useEffect(() => {
    if (challengeCube !== null && !won) {
      rotations.current.set(challengeCube, TILTED_ANGLE);
      const el = cubeRefs.current[challengeCube];
      if (el) {
        el.style.transform = `rotate(${TILTED_ANGLE}deg)`;
      }
    }
  }, [challengeCube, positions]);

  const startSpin = useCallback((index: number) => {
    const el = cubeRefs.current[index];
    if (!el) return;
    // Clear any ongoing transition
    el.style.transition = "";

    const speed = 120; // degrees per second
    let lastTime = performance.now();

    const tick = (now: number) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;
      const current = rotations.current.get(index) ?? 0;
      const next = current + speed * dt;
      rotations.current.set(index, next);
      el.style.transform = `rotate(${next}deg)`;
      animFrames.current.set(index, requestAnimationFrame(tick));
    };

    animFrames.current.set(index, requestAnimationFrame(tick));
  }, []);

  const stopSpin = useCallback((index: number, hasWon?: boolean) => {
    const frame = animFrames.current.get(index);
    if (frame) cancelAnimationFrame(frame);
    animFrames.current.delete(index);

    const el = cubeRefs.current[index];
    if (!el) return;

    const current = rotations.current.get(index) ?? 0;

    // After winning, all cubes smoothly reset to nearest level position
    if (hasWon && index !== challengeCube) {
      const normalized = ((current % 360) + 360) % 360;
      const nearest = [0, 90, 180, 270, 360].reduce((prev, curr) =>
        Math.abs(normalized - curr) < Math.abs(normalized - prev) ? curr : prev
      );
      const target = current + (nearest - normalized);
      el.style.transition = "transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)";
      el.style.transform = `rotate(${target}deg)`;
      const onEnd = () => {
        el.style.transition = "";
        rotations.current.set(index, 0);
        el.style.transform = `rotate(0deg)`;
        el.removeEventListener("transitionend", onEnd);
      };
      el.addEventListener("transitionend", onEnd);
      return;
    }

    // Smoothly wind down with a small overshoot (30deg momentum)
    const target = current + 30;
    el.style.transition = "transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)";
    el.style.transform = `rotate(${target}deg)`;

    const onEnd = () => {
      el.style.transition = "";
      rotations.current.set(index, target % 360);
      el.style.transform = `rotate(${target % 360}deg)`;
      el.removeEventListener("transitionend", onEnd);

      // Check win condition for challenge cube
      if (index === challengeCube && !won) {
        const finalAngle = ((target % 360) + 360) % 360;
        // Check if close to any level position (0, 90, 180, 270)
        const isLevel = [0, 90, 180, 270].some(
          (a) => Math.abs(finalAngle - a) <= WIN_TOLERANCE || Math.abs(finalAngle - a - 360) <= WIN_TOLERANCE
        );
        if (isLevel) {
          const nearest = [0, 90, 180, 270, 360].reduce((prev, curr) =>
            Math.abs(finalAngle - curr) < Math.abs(finalAngle - prev) ? curr : prev
          );
          setWon(true);
          rotations.current.set(index, nearest % 360);
          el.style.transform = `rotate(${nearest}deg)`;
        }
      }
    };
    el.addEventListener("transitionend", onEnd);
  }, [challengeCube, won]);

  const handleHover = useCallback((index: number) => {
    setHoveredCube(index);
    // Delay spin start so quick mouse passes don't trigger it
    const timeout = setTimeout(() => {
      startSpin(index);
      spinDelays.current.delete(index);
    }, 150);
    spinDelays.current.set(index, timeout);
  }, [startSpin]);

  const handleLeave = useCallback((index: number | null) => {
    if (index !== null) {
      // Cancel pending spin if mouse left before delay
      const pending = spinDelays.current.get(index);
      if (pending) {
        clearTimeout(pending);
        spinDelays.current.delete(index);
      } else {
        stopSpin(index, won);
      }
    }
    setHoveredCube(null);
  }, [stopSpin, won]);

  return (
    <div className="relative w-full overflow-visible">
      <div
        className="relative w-full flex items-center justify-center mb-0 overflow-visible"
        style={{ minHeight: `${containerHeight}px` }}
      >
        {positions.map((position, index) => {
          const isHovered = hoveredCube === index;
          const isWon = won && index === challengeCube;
          return (
            <motion.div
              key={index}
              className="absolute"
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{
                x: position.x,
                y: position.y,
                opacity: 1,
              }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleLeave(index)}
              onTouchStart={() => handleHover(index)}
              onTouchEnd={() => setTimeout(() => handleLeave(index), 1500)}
              style={{
                zIndex: isHovered ? 20 : 1,
              }}
            >
              <motion.div
                animate={{
                  y: isHovered ? 0 : [0, -4, 0],
                }}
                transition={
                  isHovered
                    ? { duration: 0.2 }
                    : {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5 + position.floatDelay,
                      }
                }
              >
                <div className="relative">
                  <div
                    ref={(el) => { cubeRefs.current[index] = el; }}
                    className={`w-6 h-6 bg-white dark:bg-black border-2 border-black dark:border-white rounded-md shadow-sm ${
                      isWon ? "ring-2 ring-sky-500 ring-offset-1 ring-offset-white dark:ring-offset-black" : ""
                    }`}
                    style={isWon ? { transform: "rotate(0deg)" } : undefined}
                  />
                  {/* Win message */}
                  <AnimatePresence>
                    {isWon && (
                      <motion.span
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-sky-500 font-medium whitespace-nowrap"
                      >
                        nice.
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          );
        })}

        <motion.div
          variants={contentVariants}
          initial="initial"
          animate="animate"
          className="z-10 w-full max-w-full overflow-visible"
          ref={contentRef}
        >
          <div className="w-full px-2 md:px-4">{children}</div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExpandingCubes;
