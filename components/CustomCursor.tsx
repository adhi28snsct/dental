"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
  alpha: number;
  decay: number;
  rotation: number;
  vRot: number;
}

const SPARKLE_COLORS = [
  "#22d3ee", // cyan-400
  "#38bdf8", // sky-400
  "#06b6d4", // cyan-500
  "#f59e0b", // amber-500
  "#fbbf24", // amber-400
  "#ffffff", // pure white sparkle
];

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(pointer: fine)").matches;
    }
    return false;
  });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const mousePosRef = useRef({ x: 0, y: 0 });

  // Core dot instant position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth trailing ring spring physics
  const springConfig = { damping: 28, stiffness: 320, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const handler = (e: MediaQueryListEvent) => setIsPointerDevice(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!isPointerDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mousePosRef.current = { x: clientX, y: clientY };
      mouseX.set(clientX);
      mouseY.set(clientY);

      if (!isVisible) setIsVisible(true);

      // Spawn magic tail sparkle particles on movement
      const dx = clientX - lastPosRef.current.x;
      const dy = clientY - lastPosRef.current.y;
      const dist = Math.hypot(dx, dy);

      if (dist > 3) {
        const count = Math.min(Math.floor(dist / 4), 3);
        for (let i = 0; i < count; i++) {
          const spread = 6;
          particlesRef.current.push({
            x: clientX + (Math.random() - 0.5) * spread,
            y: clientY + (Math.random() - 0.5) * spread,
            size: Math.random() * 3.5 + 1.5,
            color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
            vx: (Math.random() - 0.5) * 1.5 - dx * 0.05,
            vy: (Math.random() - 0.5) * 1.5 - dy * 0.05 + 0.3,
            alpha: 1,
            decay: Math.random() * 0.035 + 0.02,
            rotation: Math.random() * Math.PI * 2,
            vRot: (Math.random() - 0.5) * 0.2,
          });
        }
        lastPosRef.current = { x: clientX, y: clientY };
      }
    };

    const handleMouseDown = () => {
      setIsClicked(true);
      // Burst sparkles on click
      const { x, y } = mousePosRef.current;
      for (let i = 0; i < 12; i++) {
        const angle = (Math.PI * 2 * i) / 12 + Math.random() * 0.4;
        const speed = Math.random() * 3.5 + 2;
        particlesRef.current.push({
          x,
          y,
          size: Math.random() * 4 + 2,
          color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          decay: Math.random() * 0.03 + 0.025,
          rotation: Math.random() * Math.PI * 2,
          vRot: (Math.random() - 0.5) * 0.3,
        });
      }
    };

    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.tagName === "SELECT" ||
        target.tagName === "TEXTAREA" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("cursor-pointer");

      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousemove", handleElementHover, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    // Canvas particle render loop
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId: number;

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const render = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.vRot;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        // Draw 4-point magic star sparkle
        const r = p.size;
        ctx.beginPath();
        ctx.moveTo(0, -r * 1.4);
        ctx.quadraticCurveTo(0, 0, r * 1.4, 0);
        ctx.quadraticCurveTo(0, 0, 0, r * 1.4);
        ctx.quadraticCurveTo(0, 0, -r * 1.4, 0);
        ctx.quadraticCurveTo(0, 0, 0, -r * 1.4);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", handleElementHover);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, isPointerDevice, mouseX, mouseY]);

  if (!isPointerDevice) return null;

  return (
    <>
      {/* Sparkle Trail Canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[99998]"
      />

      {/* Smooth Trailing Halo Ring */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicked ? 0.75 : isHovered ? 1.7 : 1,
          opacity: isVisible ? 1 : 0,
          borderColor: isHovered
            ? "rgba(6, 182, 212, 0.9)"
            : "rgba(6, 182, 212, 0.45)",
          backgroundColor: isHovered
            ? "rgba(6, 182, 212, 0.15)"
            : "rgba(6, 182, 212, 0.04)",
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="pointer-events-none fixed left-0 top-0 z-[99999] h-9 w-9 rounded-full border-2 shadow-[0_0_15px_rgba(6,182,212,0.35)] backdrop-blur-[0.5px]"
      />

      {/* Precision Center Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicked ? 1.6 : isHovered ? 0.5 : 1,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isHovered ? "#38bdf8" : "#22d3ee",
        }}
        transition={{ duration: 0.1 }}
        className="pointer-events-none fixed left-0 top-0 z-[99999] h-2.5 w-2.5 rounded-full shadow-[0_0_10px_#22d3ee,0_0_20px_#06b6d4]"
      />
    </>
  );
}
