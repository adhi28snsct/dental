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

  const mouseX = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 60, damping: 25 });

  useEffect(() => {
    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const x = (e.clientX / window.innerWidth - 0.5) * 16;
          mouseX.set(x);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX]);

  // Opacity transforms across the 3 evolutionary stages
  const stage1Opacity = useTransform(smoothProgress, [0, 0.22, 0.34], [0.8, 0.7, 0]);
  const stage2Opacity = useTransform(smoothProgress, [0.24, 0.36, 0.56, 0.66], [0, 0.8, 0.8, 0]);
  const stage3Opacity = useTransform(smoothProgress, [0.58, 0.68, 1], [0, 0.8, 0.8]);

  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.98, 1.01, 1.03]);
  const yOffset = useTransform(smoothProgress, [0, 1], [0, -20]);

  const [currentStageIndex, setCurrentStageIndex] = useState(1);

  useEffect(() => {
    return smoothProgress.on("change", (latest) => {
      if (latest < 0.30) setCurrentStageIndex(1);
      else if (latest < 0.62) setCurrentStageIndex(2);
      else setCurrentStageIndex(3);
    });
  }, [smoothProgress]);

  const stageDescriptions = [
    { num: "I", title: "Diagnostic state", status: "Enamel evaluation & structural mapping", icon: Activity },
    { num: "II", title: "Active restoration", status: "Sub-millimeter alignment & treatment", icon: Scan },
    { num: "III", title: "Restored harmony", status: "Biocompatible radiant smile", icon: Sparkles },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none will-change-transform transform-gpu">
      {/* FULL-BACKGROUND TEETH WATERMARK LAYER */}
      <motion.div
        style={{
          scale,
          y: yOffset,
          x: smoothMouseX,
        }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none will-change-transform"
      >
        {/* STAGE 01: Initial State */}
        <motion.div
          style={{ opacity: stage1Opacity }}
          className="absolute inset-0 flex items-center justify-center will-change-transform"
        >
          <div className="relative w-[85vw] max-w-[1000px] aspect-[16/9] opacity-[0.05] mix-blend-multiply">
            <Image
              src="/evolution/stage-1-damaged.jpg"
              alt="Tooth Condition Background"
              fill
              priority
              sizes="(max-width: 1000px) 90vw, 1000px"
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* STAGE 02: Clinical Treatment */}
        <motion.div
          style={{ opacity: stage2Opacity }}
          className="absolute inset-0 flex items-center justify-center will-change-transform"
        >
          <div className="relative w-[85vw] max-w-[1000px] aspect-[16/9] opacity-[0.05] mix-blend-multiply">
            <Image
              src="/evolution/stage-2-treatment.jpg"
              alt="Treatment Progression Background"
              fill
              sizes="(max-width: 1000px) 90vw, 1000px"
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* STAGE 03: Restored Smiling Teeth */}
        <motion.div
          style={{ opacity: stage3Opacity }}
          className="absolute inset-0 flex items-center justify-center will-change-transform"
        >
          <div className="relative w-[85vw] max-w-[1000px] aspect-[16/9] opacity-[0.06] mix-blend-multiply">
            <Image
              src="/evolution/stage-3-smiling.jpg"
              alt="Restored Smile Background"
              fill
              sizes="(max-width: 1000px) 90vw, 1000px"
              className="object-contain"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* FLOATING HUD TRACKER (Desktop) */}
      <div className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-20 flex-col items-end gap-2 pointer-events-auto">
        <div className="rounded-sm border border-[#E5E5E5] bg-[#FFFFFF]/90 p-3 shadow-sm backdrop-blur-sm">
          <div className="flex items-center gap-2 pb-2 mb-2 border-b border-[#E5E5E5]">
            <span
              className="block h-[6px] w-[6px] rotate-45 border border-[#E10600] bg-[#E10600]"
              aria-hidden="true"
            />
            <span className="font-mono text-xs uppercase tracking-wider text-[#E10600]">
              Treatment progression
            </span>
          </div>

          <div className="space-y-1">
            {stageDescriptions.map((item, idx) => {
              const active = currentStageIndex === idx + 1;
              const Icon = item.icon;

              return (
                <div
                  key={item.num}
                  className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-sm transition-colors ${
                    active
                      ? "bg-[#FFFFFF] border border-[#E10600] text-[#000000]"
                      : "text-[#888888] border border-transparent"
                  }`}
                >
                  <Icon
                    size={12}
                    className={`shrink-0 ${
                      active ? "text-[#E10600]" : "text-[#AAAAAA]"
                    }`}
                  />
                  <div className="text-left">
                    <p className="font-serif text-xs font-medium">
                      <span className="text-[#E10600] font-mono mr-1.5">{item.num}.</span>
                      {item.title}
                    </p>
                    {active && (
                      <p className="text-[10px] text-[#666666] leading-tight">
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
