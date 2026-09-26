"use client";

import { useId } from "react";
import { motion } from "framer-motion";

type DividerVariant =
  | "wave"
  | "double-wave"
  | "slant"
  | "curve"
  | "zigzag"
  | "tilt-wave"
  | "swoosh";

interface SectionDividerProps {
  /** The color of the section ABOVE the divider */
  fromColor?: string;
  /** The color of the section BELOW the divider */
  toColor?: string;
  /** Visual style variant */
  variant?: DividerVariant;
  /** Flip the divider horizontally */
  flip?: boolean;
  /** Additional className */
  className?: string;
  /** Whether to show a glowing accent line along the divider */
  glow?: boolean;
}

export default function SectionDivider({
  fromColor = "#FAFCFF",
  toColor = "#030712",
  variant = "wave",
  flip = false,
  className = "",
  glow = true,
}: SectionDividerProps) {
  const uid = useId();
  const gradId = `grad-${uid}`;
  const filterId = `glow-${uid}`;

  const paths: Record<DividerVariant, string> = {
    wave: "M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,50 L1440,120 L0,120 Z",
    "double-wave":
      "M0,32 C360,96 720,0 1080,64 C1260,96 1380,80 1440,64 L1440,120 L0,120 Z",
    slant: "M0,120 L1440,0 L1440,120 L0,120 Z",
    curve: "M0,80 C480,0 960,0 1440,80 L1440,120 L0,120 Z",
    zigzag:
      "M0,60 L120,20 L240,60 L360,20 L480,60 L600,20 L720,60 L840,20 L960,60 L1080,20 L1200,60 L1320,20 L1440,60 L1440,120 L0,120 Z",
    "tilt-wave":
      "M0,100 C240,60 480,100 720,40 C960,-20 1200,60 1440,20 L1440,120 L0,120 Z",
    swoosh:
      "M0,80 Q360,120 720,40 Q1080,-40 1440,60 L1440,120 L0,120 Z",
  };

  return (
    <div
      className={`relative w-full overflow-hidden pointer-events-none select-none ${className}`}
      style={{ marginTop: "-1px", marginBottom: "-1px" }}
      aria-hidden="true"
    >
      {/* Background fill from top section */}
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: fromColor }}
      />

      {/* SVG Shape divider */}
      <svg
        className={`relative z-10 block w-full h-20 sm:h-28 md:h-36 lg:h-44 ${
          flip ? "scale-x-[-1]" : ""
        }`}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {glow && (
            <filter id={filterId}>
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          )}
        </defs>
        <path d={paths[variant]} fill={toColor} />
      </svg>

      {/* Decorative glowing accent line that follows the divider shape */}
      {glow && (
        <div className="absolute inset-0 z-20 overflow-hidden">
          <svg
            className={`absolute inset-0 w-full h-full ${
              flip ? "scale-x-[-1]" : ""
            }`}
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d={paths[variant]}
              fill="none"
              stroke={`url(#${gradId})`}
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <defs>
              <linearGradient
                id={gradId}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="transparent" />
                <stop offset="20%" stopColor="#22d3ee" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.9" />
                <stop offset="80%" stopColor="#22d3ee" stopOpacity="0.6" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}

      {/* Soft glow bloom at the seam */}
      {glow && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 w-[60%] h-[3px]">
          <div
            className="h-full w-full rounded-full blur-sm opacity-40"
            style={{
              background:
                "linear-gradient(90deg, transparent, #22d3ee, #06b6d4, #22d3ee, transparent)",
            }}
          />
        </div>
      )}
    </div>
  );
}
