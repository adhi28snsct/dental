"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Eye, Compass, Sparkles, HeartHandshake } from "lucide-react";
import { FadeIn, MagneticHover } from "./MotionWrapper";
import SectionWrapper from "./SectionWrapper";

const stages = [
  {
    id: "01",
    label: "UNDERSTAND",
    headline: "Every smile is different.",
    subtitle: "In-Depth Consultation & 3D Diagnostics",
    description:
      "We begin with compassionate listening. Using high-resolution digital scans and facial symmetry mapping, we evaluate your oral health, aesthetic desires, and lifestyle to understand your unique goals.",
    icon: Eye,
    image: "/services/general-dentistry.jpg",
    tags: ["Digital 3D Scans", "Bite Analysis", "Personalized Goals"],
  },
  {
    id: "02",
    label: "PLAN",
    headline: "Precision before treatment.",
    subtitle: "Digital Smile Design & Virtual Preview",
    description:
      "Nothing is left to chance. We craft a bespoke treatment blueprint that lets you preview your final smile in photo-realistic 3D before a single procedure begins.",
    icon: Compass,
    image: "/treatments/clear-aligners.jpg",
    tags: ["Virtual Smile Simulation", "Clear Timeline", "Transparent Costs"],
  },
  {
    id: "03",
    label: "TRANSFORM",
    headline: "Modern techniques. Natural results.",
    subtitle: "Minimally Invasive & Painless Care",
    description:
      "Our specialized clinicians employ micro-dentistry, laser therapies, and premium biocompatible ceramics to restore function and deliver a healthy, effortlessly radiant smile.",
    icon: Sparkles,
    image: "/services/cosmetic-dentistry.jpg",
    tags: ["Gentle Anesthesia", "Ceramic Artistry", "Same-Day Enhancements"],
  },
  {
    id: "04",
    label: "MAINTAIN",
    headline: "Care beyond treatment.",
    subtitle: "Long-Term Health & Preventive Protection",
    description:
      "Your smile transformation is a lifelong partnership. We provide preventive care regimens, routine dental hygiene maintenance, and continuous support to preserve your confidence.",
    icon: HeartHandshake,
    image: "/services/preventive-care.jpg",
    tags: ["Annual Wellness Checks", "Enamel Shielding", "Ongoing Warranty"],
  },
];

export default function Approach() {
  const [activeStage, setActiveStage] = useState(0);
  const current = stages[activeStage];

  return (
    <SectionWrapper
      topVariant="none"
      variant="none"
      className="bg-[#FAFCFF] py-24 text-slate-900 lg:py-32"
    >
      <div id="approach" className="relative">
        {/* Subtle background ambient lighting */}
        <div className="pointer-events-none absolute left-0 top-1/4 h-[450px] w-[450px] rounded-full bg-cyan-100/60 blur-[130px]" />
        <div className="pointer-events-none absolute right-0 bottom-10 h-[450px] w-[450px] rounded-full bg-blue-100/50 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          {/* SECTION HEADER */}
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <FadeIn direction="up">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-cyan-500" />
                <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">
                  Philosophy & Workflow
                </span>
              </div>

              <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-6xl">
                The DentArt{" "}
                <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  Approach
                </span>
              </h2>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <p className="max-w-md font-sans text-sm leading-relaxed text-slate-600">
                A systematic 4-stage clinical methodology that blends medical precision, 
                biocompatible materials, and artistic smile customization.
              </p>
            </FadeIn>
          </div>

          {/* MAIN INTERACTIVE STAGE STORYTELLER */}
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

            {/* LEFT: STICKY CINEMATIC IMAGE VIEWER */}
            <FadeIn direction="right" duration={0.8} className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/90 bg-white shadow-xl">
              <div className="relative h-[380px] sm:h-[480px] lg:h-[560px] w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 h-full w-full"
                  >
                    <Image
                      src={current.image}
                      alt={current.headline}
                      fill
                      priority
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Subtle bottom shadow overlay for contrast on tags */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />

                {/* Dynamic stage badge */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white/95 px-5 py-2 shadow-sm backdrop-blur-md">
                    <span className="font-display font-black text-cyan-600 text-sm">
                      {current.id}
                    </span>
                    <span className="h-3 w-px bg-slate-200" />
                    <span className="font-sans text-xs font-bold uppercase tracking-widest text-slate-800">
                      STAGE {current.label}
                    </span>
                  </div>
                </div>

                {/* Overlay Tags */}
                <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-wrap gap-2">
                  {current.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/90 px-3.5 py-1 text-xs font-semibold text-slate-800 backdrop-blur-md shadow-sm"
                    >
                      <CheckCircle2 size={13} className="text-cyan-600" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* RIGHT: INTERACTIVE 4-STAGE TIMELINE */}
            <div className="space-y-4">
              {stages.map((stage, index) => {
                const isActive = activeStage === index;
                const StageIcon = stage.icon;

                return (
                  <motion.div
                    key={stage.id}
                    onClick={() => setActiveStage(index)}
                    className={`group relative cursor-pointer overflow-hidden rounded-[1.75rem] border p-6 transition-all duration-300 ${
                      isActive
                        ? "border-cyan-500 bg-cyan-50/70 shadow-[0_10px_30px_rgba(6,182,212,0.12)] ring-1 ring-cyan-500/20"
                        : "border-slate-200/90 bg-white hover:border-cyan-300 hover:shadow-md"
                    }`}
                  >
                    {/* Active Indicator Accent */}
                    {isActive && (
                      <motion.div
                        layoutId="approachActiveAccent"
                        className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-500 to-blue-600"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}

                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${
                          isActive
                            ? "bg-cyan-500 text-white shadow-md shadow-cyan-500/30 scale-105"
                            : "bg-slate-100 text-slate-600 group-hover:bg-cyan-50 group-hover:text-cyan-600"
                        }`}
                      >
                        <StageIcon size={22} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={`font-sans text-xs font-bold uppercase tracking-widest ${
                              isActive ? "text-cyan-700 font-extrabold" : "text-slate-400"
                            }`}
                          >
                            {stage.id} — {stage.label}
                          </span>

                          <span
                            className={`text-xs font-semibold ${
                              isActive ? "text-cyan-600" : "text-slate-400"
                            }`}
                          >
                            {isActive ? "Active Phase" : `0${index + 1}`}
                          </span>
                        </div>

                        <h3 className={`mt-1 font-display text-xl font-bold transition-colors ${isActive ? "text-slate-950" : "text-slate-800 group-hover:text-cyan-600"}`}>
                          {stage.headline}
                        </h3>

                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <p className="mt-2 font-sans text-xs font-semibold uppercase tracking-wider text-cyan-700">
                                {stage.subtitle}
                              </p>
                              <p className="mt-1.5 font-sans text-sm leading-relaxed text-slate-600">
                                {stage.description}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Bottom CTA Button */}
              <div className="pt-2">
                <MagneticHover>
                  <a
                    href="#appointment"
                    className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 via-cyan-600 to-blue-600 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40 hover:scale-[1.02]"
                  >
                    <span>Experience The DentArt Difference</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </MagneticHover>
              </div>
            </div>

          </div>

        </div>

      </div>
    </SectionWrapper>
  );
}
