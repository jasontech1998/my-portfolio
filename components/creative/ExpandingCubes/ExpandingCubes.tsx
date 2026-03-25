"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface Position {
  x: number;
  y: number;
  floatDelay: number;
}

interface ContentSize {
  width: number;
  height: number;
}

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
  const contentRef = useRef<HTMLDivElement>(null);

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
        // 4 cubes on mobile — corners only, more breathing room
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

  return (
    <div className="relative w-full overflow-visible">
      <div
        className="relative w-full flex items-center justify-center mb-0 overflow-visible"
        style={{ minHeight: `${containerHeight}px` }}
      >
        {positions.map((position, index) => (
          <motion.div
            key={index}
            className="absolute w-6 h-6 bg-white dark:bg-black border-2 border-black dark:border-white rounded-md shadow-sm backdrop-blur-[1px]"
            initial={{ x: 0, y: 0, opacity: 0, scale: 2.5 }}
            animate={{
              x: position.x,
              y: position.y,
              opacity: 1,
              scale: 1,
            }}
            whileHover={{
              scale: 1.3,
              rotate: 45,
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
              borderRadius: "4px",
              transition: {
                duration: 0.2,
                type: "tween" as const,
                ease: "easeOut" as const,
              },
            }}
            whileTap={
              isMobile
                ? {
                    scale: 1.3,
                    rotate: 45,
                    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
                    borderRadius: "4px",
                    transition: { duration: 0.2 },
                  }
                : undefined
            }
            transition={{
              type: "spring" as const,
              stiffness: 80,
              damping: 22,
              delay: 0.3 + index * 0.07,
            }}
            onMouseEnter={() => setHoveredCube(index)}
            onMouseLeave={() => setHoveredCube(null)}
            style={{
              zIndex: hoveredCube === index ? 20 : 1,
            }}
          >
            {/* Subtle floating animation after settling */}
            <motion.div
              className="w-full h-full"
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5 + position.floatDelay,
              }}
            />
          </motion.div>
        ))}

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
