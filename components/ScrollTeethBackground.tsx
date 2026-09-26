"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Sparkles, Scan, Activity } from "lucide-react";

export default function ScrollTeethBackground() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  // Hardware-accelerated MotionValue parallax (0 React re-renders on mouse movement!)
  const mouseX = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 60, damping: 25 });

  useEffect(() => {
    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const x = (e.clientX / window.innerWidth - 0.5) * 20;
          mouseX.set(x);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX]);

  // Opacity transforms across the 3 core evolutionary stages:
  // Stage 1: Initial (Hero & About: 0.00 - 0.32)
  const stage1Opacity = useTransform(smoothProgress, [0, 0.22, 0.34], [1, 0.9, 0]);
  
  // Stage 2: Active Treatment / Clinic Care (Services & Approach: 0.26 - 0.65)
  const stage2Opacity = useTransform(smoothProgress, [0.24, 0.36, 0.56, 0.66], [0, 1, 1, 0]);
  
  // Stage 3: Restored Healthy Radiant Smiling Teeth (Treatments, Transformations, Reviews, Contact: 0.58 - 1.0)
  const stage3Opacity = useTransform(smoothProgress, [0.58, 0.68, 1], [0, 1, 1]);

  // Subtle dynamic float and scale across scroll
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.98, 1.02, 1.05]);
  const yOffset = useTransform(smoothProgress, [0, 1], [0, -30]);

  // Current stage indicator
  const [currentStageIndex, setCurrentStageIndex] = useState(1);

  useEffect(() => {
    return smoothProgress.on("change", (latest) => {
      if (latest < 0.30) setCurrentStageIndex(1);
      else if (latest < 0.62) setCurrentStageIndex(2);
      else setCurrentStageIndex(3);
    });
  }, [smoothProgress]);

  const stageDescriptions = [
    { num: "01", title: "Initial State", status: "Damaged tooth & enamel wear", icon: Activity },
    { num: "02", title: "Active Treatment", status: "Laser precision & alignment", icon: Scan },
    { num: "03", title: "Healthy Radiant Smile", status: "Flawless confident smile", icon: Sparkles },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none will-change-transform transform-gpu">
      {/* Dynamic Ambient Aura Glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 pointer-events-none"
        style={{
          width: "75vw",
          height: "75vw",
          background: useTransform(
            smoothProgress,
            [0, 0.45, 1],
            [
              "radial-gradient(circle, rgba(249,115,22,0.08) 0%, rgba(6,182,212,0.03) 45%, transparent 70%)",
              "radial-gradient(circle, rgba(34,211,238,0.10) 0%, rgba(14,165,233,0.04) 50%, transparent 70%)",
              "radial-gradient(circle, rgba(34,211,238,0.12) 0%, rgba(45,212,191,0.05) 50%, transparent 70%)",
            ]
          ),
        }}
      />

      {/* FULL-BACKGROUND TEETH WATERMARK LAYER */}
      <motion.div
        style={{
          scale,
          y: yOffset,
          x: smoothMouseX,
        }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none will-change-transform"
      >
        {/* =========================================================
            STAGE 01: DAMAGED TEETH IMAGE (Hero & About)
           ========================================================= */}
        {/* =========================================================
            STAGE 01: DAMAGED TEETH IMAGE (Hero & About)
           ========================================================= */}
        <motion.div
          style={{ opacity: stage1Opacity }}
          className="absolute inset-0 flex items-center justify-center will-change-transform"
        >
          <div className="relative w-[85vw] max-w-[1000px] aspect-[16/9] opacity-10 mix-blend-multiply">
            <Image
              src="/evolution/stage-1-damaged.jpg"
              alt="Damaged Tooth Condition Background"
              fill
              priority
              sizes="(max-width: 1000px) 90vw, 1000px"
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* =========================================================
            STAGE 02: TEETH UNDER CLINICAL TREATMENT (Services & Approach)
           ========================================================= */}
        <motion.div
          style={{ opacity: stage2Opacity }}
          className="absolute inset-0 flex items-center justify-center will-change-transform"
        >
          <div className="relative w-[85vw] max-w-[1000px] aspect-[16/9] opacity-10 mix-blend-multiply">
            <Image
              src="/evolution/stage-2-treatment.jpg"
              alt="Teeth in Treatment Background"
              fill
              sizes="(max-width: 1000px) 90vw, 1000px"
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* =========================================================
            STAGE 03: HEALTHY RADIANT SMILING TEETH (Treatments, Reviews, Contact)
           ========================================================= */}
        <motion.div
          style={{ opacity: stage3Opacity }}
          className="absolute inset-0 flex items-center justify-center will-change-transform"
        >
          <div className="relative w-[85vw] max-w-[1000px] aspect-[16/9] opacity-12 mix-blend-multiply">
            <Image
              src="/evolution/stage-3-smiling.jpg"
              alt="Healthy Radiant Smiling Teeth Background"
              fill
              sizes="(max-width: 1000px) 90vw, 1000px"
              className="object-contain"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Light vignette overlay for crisp readability */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#FAFCFF]/20 to-[#FAFCFF]/60 pointer-events-none" />

      {/* FLOATING HUD BADGE (Interactive Stage Tracker on Desktop) */}
      <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-20 flex-col items-end gap-3 pointer-events-auto">
        <div className="rounded-2xl border border-slate-200/80 bg-white/85 p-3.5 backdrop-blur-xl shadow-xl transition-all duration-300">
          <div className="flex items-center gap-2 pb-2 mb-2 border-b border-slate-100">
            <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-ping" />
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Smile Transformation
            </span>
          </div>

          <div className="space-y-1.5">
            {stageDescriptions.map((item, idx) => {
              const active = currentStageIndex === idx + 1;
              const Icon = item.icon;

              return (
                <div
                  key={item.num}
                  className={`flex items-center gap-2.5 px-3 py-1.5 rounded-xl transition-all duration-300 ${
                    active
                      ? "bg-cyan-50 border border-cyan-300 text-slate-900 shadow-sm"
                      : "text-slate-400 hover:text-slate-700"
                  }`}
                >
                  <Icon
                    size={13}
                    className={`transition-colors ${
                      active ? "text-cyan-600 scale-110" : "text-slate-400"
                    }`}
                  />
                  <div className="text-left">
                    <p
                      className={`text-[10px] font-bold uppercase tracking-wider ${
                        active ? "text-cyan-700" : "text-slate-500"
                      }`}
                    >
                      {item.num} — {item.title}
                    </p>
                    {active && (
                      <p className="text-[9px] text-slate-600 font-medium">
                        {item.status}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

