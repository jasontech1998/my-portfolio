"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface Position {
  x: number;
  y: number;
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

      const verticalPadding = 80;
      const totalHeight = contentSize.height + verticalPadding * 2;

      const baseHorizontalSpacing = Math.min(
        Math.max(contentSize.width * 0.5, 180),
        viewportWidth < 768 ? 180 : 320
      );

      const horizontalSpacing =
        viewportWidth < 768
          ? Math.min(baseHorizontalSpacing, viewportWidth * 0.4)
          : baseHorizontalSpacing;

      if (viewportWidth < 768) {
        return [
          { x: -horizontalSpacing, y: -totalHeight / 2 + 50 },
          { x: 0, y: -totalHeight / 2 + 50 },
          { x: horizontalSpacing, y: -totalHeight / 2 + 50 },
          { x: -horizontalSpacing, y: totalHeight / 2 - 50 },
          { x: 0, y: totalHeight / 2 - 50 },
          { x: horizontalSpacing, y: totalHeight / 2 - 50 },
        ];
      }

      return [
        { x: -horizontalSpacing, y: -totalHeight / 2 + 50 },
        { x: 0, y: -totalHeight / 2 + 50 },
        { x: horizontalSpacing, y: -totalHeight / 2 + 50 },
        { x: -horizontalSpacing, y: totalHeight / 2 - 50 },
        { x: 0, y: totalHeight / 2 - 50 },
        { x: horizontalSpacing, y: totalHeight / 2 - 50 },
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

  const cubeVariants = {
    initial: { x: 0, y: 0, opacity: 1, scale: 3 },
    animate: (custom: { x: number; y: number }) => ({
      x: custom.x,
      y: custom.y,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        delay: 0.5,
      },
    }),
    hover: {
      scale: 1.3,
      rotate: 45,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
      borderRadius: "4px",
      transition: {
        duration: 0.2, // Faster duration for more immediate feedback
        type: "tween" as const, // Use tween for smoother quick interactions
        ease: "easeOut" as const, // Smooth easing function
      },
    },
  };

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
            variants={cubeVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            custom={position}
            onMouseEnter={() => setHoveredCube(index)}
            onMouseLeave={() => setHoveredCube(null)}
            style={{
              zIndex: hoveredCube === index ? 20 : 1,
            }}
          />
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
