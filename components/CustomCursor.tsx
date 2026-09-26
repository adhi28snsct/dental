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
  "#E10600", // Signal Red
  "#FF2A24", // Signal Red Hover
  "#000000", // Pure Black
  "#E5E5E5", // Line
  "#FFFFFF", // Pure White
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

      const dx = clientX - lastPosRef.current.x;
      const dy = clientY - lastPosRef.current.y;
      const dist = Math.hypot(dx, dy);

      if (dist > 6) {
        const count = Math.min(Math.floor(dist / 8), 2);
        for (let i = 0; i < count; i++) {
          const spread = 4;
          particlesRef.current.push({
            x: clientX + (Math.random() - 0.5) * spread,
            y: clientY + (Math.random() - 0.5) * spread,
            size: Math.random() * 2.5 + 1.2,
            color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
            vx: (Math.random() - 0.5) * 1.2 - dx * 0.03,
            vy: (Math.random() - 0.5) * 1.2 - dy * 0.03 + 0.2,
            alpha: 0.85,
            decay: Math.random() * 0.035 + 0.025,
            rotation: Math.random() * Math.PI * 2,
            vRot: (Math.random() - 0.5) * 0.2,
          });
        }
        lastPosRef.current = { x: clientX, y: clientY };
      }
    };

    const handleMouseDown = () => {
      setIsClicked(true);
      const { x, y } = mousePosRef.current;
      for (let i = 0; i < 8; i++) {
        const angle = (Math.PI * 2 * i) / 8 + Math.random() * 0.4;
        const speed = Math.random() * 2.5 + 1.5;
        particlesRef.current.push({
          x,
          y,
          size: Math.random() * 3 + 1.5,
          color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 0.9,
          decay: Math.random() * 0.03 + 0.03,
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

        // Clean small diamond particle
        const r = p.size;
        ctx.beginPath();
        ctx.moveTo(0, -r * 1.2);
        ctx.lineTo(r * 0.8, 0);
        ctx.lineTo(0, r * 1.2);
        ctx.lineTo(-r * 0.8, 0);
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
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[99998]"
      />

      {/* Trailing Ring */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicked ? 0.8 : isHovered ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
          borderColor: isHovered
            ? "rgba(225, 6, 0, 0.75)"
            : "rgba(0, 0, 0, 0.25)",
          backgroundColor: isHovered
            ? "rgba(225, 6, 0, 0.08)"
            : "transparent",
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="pointer-events-none fixed left-0 top-0 z-[99999] h-8 w-8 rounded-full border border-solid"
      />

      {/* Center Precision Point */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicked ? 1.4 : isHovered ? 0.6 : 1,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isHovered ? "#FF2A24" : "#E10600",
        }}
        transition={{ duration: 0.1 }}
        className="pointer-events-none fixed left-0 top-0 z-[99999] h-2 w-2 rounded-full"
      />
    </>
  );
}
