"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Eye,
  Compass,
  Sparkles,
  HeartHandshake,
  Check,
  Expand,
  Minimize2,
} from "lucide-react";
import { FadeIn } from "./MotionWrapper";
import SectionWrapper from "./SectionWrapper";

interface Stage {
  id: string;
  roman: string;
  label: string;
  headline: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  image: string;
  tags: string[];
  tilt: number;
}

const stages: Stage[] = [
  {
    id: "01",
    roman: "I.",
    label: "Understand",
    headline: "Every smile is different.",
    subtitle: "In-depth consultation & 3D diagnostics",
    description:
      "We begin with compassionate listening. Using high-resolution digital scans and facial symmetry mapping, we evaluate your oral health, aesthetic desires, and lifestyle to understand your unique goals.",
    icon: Eye,
    image: "/services/general-dentistry.jpg",
    tags: ["Digital 3D scans", "Bite analysis", "Personalized goals"],
    tilt: -1.5,
  },
  {
    id: "02",
    roman: "II.",
    label: "Plan",
    headline: "Precision before treatment.",
    subtitle: "Digital smile design & virtual preview",
    description:
      "Nothing is left to chance. We craft a bespoke treatment blueprint that lets you preview your final smile in photo-realistic 3D before a single procedure begins.",
    icon: Compass,
    image: "/treatments/clear-aligners.jpg",
    tags: ["Virtual smile simulation", "Clear timeline", "Transparent costs"],
    tilt: 1.2,
  },
  {
    id: "03",
    roman: "III.",
    label: "Transform",
    headline: "Modern technique, natural results.",
    subtitle: "Minimally invasive & gentle care",
    description:
      "Our specialized clinicians employ micro-dentistry, laser therapies, and premium biocompatible ceramics to restore function and deliver a healthy, effortlessly radiant smile.",
    icon: Sparkles,
    image: "/services/cosmetic-dentistry.jpg",
    tags: ["Gentle anesthesia", "Ceramic artistry", "Same-day enhancements"],
    tilt: -0.8,
  },
  {
    id: "04",
    roman: "IV.",
    label: "Maintain",
    headline: "Care beyond treatment.",
    subtitle: "Long-term health & preventive protection",
    description:
      "Your smile transformation is a lifelong partnership. We provide preventive care regimens, routine dental hygiene maintenance, and continuous support to preserve your confidence.",
    icon: HeartHandshake,
    image: "/services/preventive-care.jpg",
    tags: ["Annual wellness checks", "Enamel shielding", "Ongoing care"],
    tilt: 1.8,
  },
];

export default function Approach() {
  const [activeStage, setActiveStage] = useState(0);
  const current = stages[activeStage];

  return (
    <SectionWrapper
      id="approach"
      variant="ornament"
      tone="light"
      className="bg-[#FFFFFF] py-24 text-[#000000] lg:py-36 overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <FadeIn direction="up">
            <p className="font-serif text-lg italic text-[#E10600]">
              Methodology & exhibition
            </p>

            <h2 className="mt-3 font-serif text-4xl font-medium leading-[1.12] tracking-tight text-[#000000] sm:text-5xl lg:text-6xl">
              The four stages of
              <br />
              clinical craft.
            </h2>
          </FadeIn>

          <FadeIn direction="left" delay={0.15}>
            <p className="max-w-md text-[15px] leading-7 text-[#555555]">
              Hung in sequence like photographic proofs in an artist's darkroom.
              Select any stage along the suspension line to inspect its methodology.
            </p>
          </FadeIn>
        </div>

        {/* =========================================================
            GALLERY WIRE / SUSPENSION ROPE DISPLAY
            Taut steel & tension cable spanning across the gallery wall
           ========================================================= */}
        <div className="relative pt-8 pb-12">
          {/* HORIZONTAL SUSPENSION WIRE */}
          <div className="relative flex items-center mb-10">
            {/* Left Turnbuckle Mount */}
            <div className="hidden sm:flex items-center gap-1.5 shrink-0 z-20">
              <span className="h-4 w-4 rounded-full border border-black bg-black flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E10600]" />
              </span>
              <span className="h-1 w-6 bg-black" />
            </div>

            {/* Main Taut Metallic Cable */}
            <div className="relative flex-1 h-px bg-[#000000]/25">
              <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/40 via-[#000000]/20 to-[#000000]/40" />
              <div className="absolute -top-[1px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#000000]/20 to-transparent" />
            </div>

            {/* Right Turnbuckle Mount */}
            <div className="hidden sm:flex items-center gap-1.5 shrink-0 z-20">
              <span className="h-1 w-6 bg-black" />
              <span className="h-4 w-4 rounded-full border border-black bg-black flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E10600]" />
              </span>
            </div>
          </div>

          {/* THE 4 HANGING SPECIMEN CARDS GRID */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stages.map((stage, index) => {
              const isActive = activeStage === index;

              return (
                <div key={stage.id} className="relative flex flex-col items-center">
                  {/* TWO SUSPENSION CLIPS / PEGS CLAMPING ONTO THE ROPE */}
                  <div className="absolute -top-12 z-20 flex w-full justify-around px-8 pointer-events-none">
                    {/* Left Clip */}
                    <HangingClip isActive={isActive} />
                    {/* Right Clip */}
                    <HangingClip isActive={isActive} />
                  </div>

                  {/* SUSPENDED ARTWORK CARD (Sways gently on interaction) */}
                  <motion.div
                    onClick={() => setActiveStage(index)}
                    animate={{
                      rotate: isActive ? 0 : stage.tilt,
                      y: isActive ? -8 : 0,
                    }}
                    whileHover={{
                      rotate: 0,
                      y: -10,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 18,
                    }}
                    className={`group relative w-full cursor-pointer rounded-sm border bg-[#FFFFFF] p-5 shadow-sm transition-all duration-300 ${
                      isActive
                        ? "border-[#E10600] ring-1 ring-[#E10600]/20 shadow-xl shadow-[#E10600]/10"
                        : "border-[#E5E5E5] hover:border-[#000000] hover:shadow-md"
                    }`}
                  >
                    {/* Card Top: Roman Numeral & Label */}
                    <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-3">
                      <span className="font-serif text-lg font-medium text-[#E10600]">
                        {stage.roman}
                      </span>
                      <span
                        className={`font-mono text-xs uppercase tracking-wider transition-colors ${
                          isActive ? "text-[#E10600] font-semibold" : "text-[#666666]"
                        }`}
                      >
                        Phase {stage.id}
                      </span>
                    </div>

                    {/* Specimen Photograph */}
                    <div className="relative my-4 aspect-[4/3] w-full overflow-hidden rounded-sm border border-[#E5E5E5] bg-[#FFFFFF]">
                      <Image
                        src={stage.image}
                        alt={stage.headline}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      {/* Duotone wash on active card */}
                      <div
                        className={`absolute inset-0 transition-opacity duration-300 ${
                          isActive
                            ? "bg-[#E10600]/15 mix-blend-color opacity-100"
                            : "opacity-0"
                        }`}
                      />
                    </div>

                    {/* Headline & Subtitle */}
                    <div className="min-h-[72px]">
                      <h3
                        className={`font-serif text-lg font-medium leading-snug transition-colors ${
                          isActive
                            ? "text-[#E10600]"
                            : "text-[#000000] group-hover:text-[#E10600]"
                        }`}
                      >
                        {stage.headline}
                      </h3>
                      <p className="mt-1 line-clamp-1 text-xs text-[#666666]">
                        {stage.subtitle}
                      </p>
                    </div>

                    {/* Bottom Status Pill */}
                    <div className="mt-4 flex items-center justify-between border-t border-[#E5E5E5] pt-3 text-xs">
                      <span
                        className={`font-serif italic text-xs ${
                          isActive ? "text-[#E10600]" : "text-[#666666]"
                        }`}
                      >
                        {stage.label}
                      </span>

                      <span
                        className={`inline-flex items-center gap-1 font-medium transition-colors ${
                          isActive ? "text-[#E10600]" : "text-[#666666] group-hover:text-[#000000]"
                        }`}
                      >
                        <span>{isActive ? "Inspecting" : "Select"}</span>
                        <ArrowRight size={11} />
                      </span>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            DETAILED CLINICAL INSPECTION PANEL (EXPANDED STAGE)
           ========================================================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="mt-6 rounded-sm border border-[#E5E5E5] bg-[#FFFFFF] p-8 sm:p-12 shadow-sm"
          >
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Metadata & Clinical Description */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-2xl font-medium text-[#E10600]">
                    {current.roman}
                  </span>
                  <span className="h-4 w-px bg-[#E5E5E5]" />
                  <span className="font-mono text-xs uppercase tracking-wider text-[#E10600]">
                    Phase {current.id} — {current.label}
                  </span>
                </div>

                <h3 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#000000] sm:text-4xl">
                  {current.headline}
                </h3>

                <p className="mt-1 font-serif text-base italic text-[#E10600]">
                  {current.subtitle}
                </p>

                <p className="mt-4 text-[15px] leading-7 text-[#555555] max-w-2xl">
                  {current.description}
                </p>

                {/* Key clinical tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {current.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-sm border border-[#E5E5E5] bg-[#FFFFFF] px-3 py-1 text-xs text-[#000000]"
                    >
                      <Check size={11} className="text-[#E10600]" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: In-Depth Action CTA */}
              <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-end lg:border-l lg:border-[#E5E5E5] lg:pl-10">
                <p className="text-xs text-[#666666] max-w-xs lg:text-right">
                  Ready to begin your consultation? Experience our gentle four-stage methodology in person.
                </p>

                <a
                  href="#appointment"
                  className="mt-5 inline-flex items-center gap-2 rounded-sm bg-[#E10600] px-7 py-3.5 text-xs font-medium tracking-wide text-white transition-colors hover:bg-[#FF2A24]"
                >
                  <span>Schedule stage {current.id} visit</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}

/**
 * HangingClip Component
 * Clamps onto the hanging wire and card
 */
function HangingClip({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Top wire hook ring */}
      <span
        className={`h-2.5 w-2.5 rounded-full border transition-colors ${
          isActive
            ? "border-[#E10600] bg-[#E10600]"
            : "border-black bg-black"
        }`}
      />
      {/* Hanging drop string/stem */}
      <span className="h-5 w-px bg-black/40" />
      {/* Clamping Peg */}
      <div
        className={`h-4 w-3 rounded-xs border shadow-xs transition-colors ${
          isActive
            ? "border-[#E10600] bg-[#E10600] text-white"
            : "border-black bg-black text-white"
        }`}
      >
        {/* Peg center spring groove */}
        <div className="mx-auto mt-1.5 h-0.5 w-1.5 bg-white/70 rounded-full" />
      </div>
    </div>
  );
}
