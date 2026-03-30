"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  prepareWithSegments,
  layoutNextLine,
  type PreparedTextWithSegments,
  type LayoutCursor,
} from "@chenglou/pretext";

const SAMPLE_TEXT = `The art of typography is a craft that stretches back centuries, from Gutenberg's movable type to the pixel-perfect rendering engines of today. What was once the domain of craftsmen setting lead slugs by hand has become an intricate dance between software, hardware, and the human eye. Every time you read a paragraph on screen, an invisible engine is measuring glyphs, computing line breaks, and deciding where each word should land. Pretext takes this a step further — it performs all of that layout math in pure JavaScript, without ever touching the DOM. The result is text reflow that runs in microseconds, fast enough to animate in real time. Watch the bouncing cube and see hundreds of line-break decisions happen instantaneously as text flows around an obstacle. This is the kind of performance that unlocks entirely new categories of interaction design: canvas-based editors, generative typography, game UIs, and data visualizations where text is a first-class citizen.`;

const FONT = "15px Inter, system-ui, sans-serif";
const LINE_HEIGHT = 22;
const CUBE_SIZE = 48;
const CUBE_GAP = 10;
const PADDING = 16;
const SPEED = 0.6; // pixels per frame

type Cube = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
};

// Get the axis-aligned bounding box of a rotated square
function getCubeAABB(cube: Cube) {
  const half = CUBE_SIZE / 2;
  const cos = Math.abs(Math.cos(cube.rotation));
  const sin = Math.abs(Math.sin(cube.rotation));
  const hw = half * cos + half * sin;
  const hh = half * sin + half * cos;
  return {
    left: cube.x - hw,
    right: cube.x + hw,
    top: cube.y - hh,
    bottom: cube.y + hh,
    hw,
    hh,
  };
}

export default function PretextReflow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const preparedRef = useRef<PreparedTextWithSegments | null>(null);
  const cubeRef = useRef<Cube>({
    x: 160,
    y: 120,
    vx: SPEED,
    vy: SPEED * 0.75,
    rotation: Math.PI / 4, // start as diamond
    rotationSpeed: 0.003,
  });
  const animatingRef = useRef(true);
  const rafRef = useRef<number>(0);
  const [layoutTime, setLayoutTime] = useState<number>(0);
  const [prepareTime, setPrepareTime] = useState<number>(0);
  const [lineCount, setLineCount] = useState<number>(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const prepared = preparedRef.current;
    if (!canvas || !prepared) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, w, h);

    const isDark = document.documentElement.classList.contains("dark");
    const textColor = isDark ? "rgba(250, 250, 250, 0.9)" : "rgba(10, 10, 10, 0.9)";

    const cube = cubeRef.current;

    // Update cube position (bounce)
    const aabb = getCubeAABB(cube);
    cube.x += cube.vx;
    cube.y += cube.vy;

    // Bounce off walls
    const nextAABB = getCubeAABB(cube);
    if (nextAABB.left <= PADDING || nextAABB.right >= w - PADDING) {
      cube.vx *= -1;
      cube.x += cube.vx * 2;
      cube.rotationSpeed = (0.002 + Math.random() * 0.004) * (cube.vx > 0 ? 1 : -1);
    }
    if (nextAABB.top <= PADDING || nextAABB.bottom >= h - PADDING) {
      cube.vy *= -1;
      cube.y += cube.vy * 2;
      cube.rotationSpeed = (0.002 + Math.random() * 0.004) * (cube.vy > 0 ? 1 : -1);
    }

    cube.rotation += cube.rotationSpeed;

    // Recalculate AABB after position update
    const currentAABB = getCubeAABB(cube);
    const contentWidth = w - PADDING * 2;

    // Layout text around cube
    const t0 = performance.now();
    let cursor: LayoutCursor = { segmentIndex: 0, graphemeIndex: 0 };
    let y = PADDING;
    const lines: { text: string; x: number; y: number; width: number }[] = [];

    while (y + LINE_HEIGHT <= h) {
      const lineTop = y;
      const lineBottom = y + LINE_HEIGHT;

      let lineX = PADDING;
      let maxWidth = contentWidth;

      // Check if cube AABB intersects this line band
      if (lineBottom > currentAABB.top - CUBE_GAP && lineTop < currentAABB.bottom + CUBE_GAP) {
        const cubeLeft = currentAABB.left - CUBE_GAP;
        const cubeRight = currentAABB.right + CUBE_GAP;

        const leftSpace = Math.max(0, cubeLeft - PADDING);
        const rightSpace = Math.max(0, w - PADDING - cubeRight);

        if (leftSpace >= rightSpace && leftSpace > 40) {
          lineX = PADDING;
          maxWidth = leftSpace;
        } else if (rightSpace > 40) {
          lineX = cubeRight;
          maxWidth = rightSpace;
        } else {
          y += LINE_HEIGHT;
          continue;
        }
      }

      const line = layoutNextLine(prepared, cursor, maxWidth);
      if (!line) break;

      lines.push({ text: line.text, x: lineX, y, width: line.width });
      cursor = line.end;
      y += LINE_HEIGHT;
    }
    const t1 = performance.now();

    setLayoutTime(t1 - t0);
    setLineCount(lines.length);

    // Draw the cube (rotated rounded square, matching CubeDecoration style)
    ctx.save();
    ctx.translate(cube.x, cube.y);
    ctx.rotate(cube.rotation);

    const half = CUBE_SIZE / 2;
    const radius = 6;

    // Fill
    ctx.beginPath();
    ctx.roundRect(-half, -half, CUBE_SIZE, CUBE_SIZE, radius);
    ctx.fillStyle = isDark ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.95)";
    ctx.fill();

    // Border
    ctx.strokeStyle = isDark ? "rgba(255, 255, 255, 0.85)" : "rgba(0, 0, 0, 0.85)";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Subtle shadow
    ctx.shadowColor = isDark ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0.1)";
    ctx.shadowBlur = 8;
    ctx.shadowOffsetY = 2;

    ctx.restore();

    // Draw text lines
    ctx.font = FONT;
    ctx.fillStyle = textColor;
    for (const line of lines) {
      ctx.fillText(line.text, line.x, line.y + LINE_HEIGHT - 5);
    }

    // Continue animation loop
    if (animatingRef.current) {
      rafRef.current = requestAnimationFrame(draw);
    }
  }, []);

  useEffect(() => {
    document.fonts.ready.then(() => {
      const t0 = performance.now();
      preparedRef.current = prepareWithSegments(SAMPLE_TEXT, FONT);
      const t1 = performance.now();
      setPrepareTime(t1 - t0);
      animatingRef.current = true;
      rafRef.current = requestAnimationFrame(draw);
    });

    return () => {
      animatingRef.current = false;
      cancelAnimationFrame(rafRef.current);
    };
  }, [draw]);

  // Pause when not visible
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          if (!animatingRef.current && preparedRef.current) {
            animatingRef.current = true;
            rafRef.current = requestAnimationFrame(draw);
          }
        } else {
          animatingRef.current = false;
          cancelAnimationFrame(rafRef.current);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);
    return () => observer.disconnect();
  }, [draw]);

  return (
    <div ref={containerRef} className="w-full space-y-3">
      <canvas
        ref={canvasRef}
        className="w-full rounded-lg border border-border"
        style={{ height: 380, color: "var(--foreground)" }}
      />
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground font-mono">
        <span>prepare: {prepareTime.toFixed(1)}ms</span>
        <span>layout: {layoutTime.toFixed(3)}ms</span>
        <span>{lineCount} lines</span>
      </div>
    </div>
  );
}
