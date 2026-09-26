"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Layers,
  Award,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  Compass,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { FadeIn, MagneticHover } from "./MotionWrapper";

const zoomModes = [
  {
    id: "1x",
    label: "1x Studio Overview",
    title: "Artisan Ceramic Suite",
    description:
      "Master ceramists and clinical doctors work side-by-side in our dedicated on-site lab, hand-sculpting each restoration to match your natural facial symmetry and dynamic smile line.",
    image: "/lab/master_ceramic_lab.jpg",
    specs: {
      precision: "Clinical Master Scale",
      material: "High-Translucency Zirconia & Feldspathic",
      process: "Hand-Stratified Brush Layering",
    },
    reticleZoom: "scale-100",
  },
  {
    id: "10x",
    label: "10x Surgical Loupe",
    title: "Sub-Millimeter Margin Alignment",
    description:
      "At 10x optical magnification, margins are sculpted to sit seamlessly along the gingival line, eliminating dark metallic edges and preventing microscopic plaque trap zones.",
    image: "/lab/master_ceramic_lab.jpg",
    specs: {
      precision: "25-Micron Margin Accuracy",
      material: "Multi-layered E.max & Enamel Powder",
      process: "Custom Lip Line Harmony & Light Play",
    },
    reticleZoom: "scale-125",
  },
  {
    id: "40x",
    label: "40x Zeiss Microscope",
    title: "Ultra-Micro Enamel Stratification",
    description:
      "Under 40x Zeiss surgical microscopy, our ceramists recreate natural enamel mammelons, light opalescence, and micro-texture that is completely indistinguishable from real teeth.",
    image: "/lab/microscope_macro_veneer.jpg",
    specs: {
      precision: "< 10-Micron Edge Sealing",
      material: "Micro-Faceted Opalescent Ceramics",
      process: "Bio-Mimetic Enamel Translucency",
    },
    reticleZoom: "scale-110",
  },
];

const labPillars = [
  {
    icon: Search,
    title: "40x Microscope Precision",
    description:
      "Every veneer, crown, and implant bridge is hand-finished under high-magnification Zeiss optics for a hermetic 10-micron seal against tooth surfaces.",
  },
  {
    icon: Layers,
    title: "Bespoke Multi-Layer Stratification",
    description:
      "We hand-apply up to 16 individual powder layers, blending dentin warmth, body translucency, and incisal halo effects to match your unique natural enamel.",
  },
  {
    icon: Award,
    title: "Chairside Master Ceramist",
    description:
      "Unlike outsourced dental labs, our master ceramist meets you in person to analyze tooth shape, skin tone, eye color, and smile dynamics during your appointment.",
  },
];

export default function MasterLaboratory() {
  const [activeZoomIndex, setActiveZoomIndex] = useState(0);
  const currentMode = zoomModes[activeZoomIndex];

  return (
    <SectionWrapper
      className="bg-[#FAFCFF] py-24 text-slate-900 lg:py-32"
    >
      <div id="laboratory" className="relative">
        {/* Ambient background glows */}
        <div className="pointer-events-none absolute left-1/3 top-0 h-[600px] w-[600px] rounded-full bg-cyan-100/50 blur-[180px]" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-sky-100/50 blur-[160px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          {/* SECTION HEADER */}
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn direction="up">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-cyan-500" />
                <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">
                  M.Vision Inspired Craftsmanship
                </span>
                <span className="h-px w-10 bg-cyan-500" />
              </div>

              <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-6xl">
                In-House Ceramic Lab &{" "}
                <br />
                <span className="font-serif italic font-normal text-cyan-600">
                  40x Microscope Precision.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-7 text-slate-600">
                True aesthetic dentistry is fine art. By housing our own dedicated master ceramic laboratory on-site, our doctors and master ceramists sculpt teeth with microscopic precision.
              </p>
            </FadeIn>
          </div>

          {/* INTERACTIVE MICROSCOPE MAGNIFICATION SUITE */}
          <div className="mt-16 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">

            {/* LEFT: INTERACTIVE OPTICAL VIEWER WITH LIVE TELEMETRY */}
            <FadeIn direction="right" duration={0.8}>
              <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-3 shadow-[0_30px_90px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
                
                {/* Main Viewport Container */}
                <div className="relative h-[380px] sm:h-[480px] lg:h-[540px] w-full overflow-hidden rounded-[2rem] bg-slate-950">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentMode.id}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="absolute inset-0 h-full w-full"
                    >
                      <Image
                        src={currentMode.image}
                        alt={currentMode.title}
                        fill
                        priority
                        className={`object-cover transition-transform duration-700 ${currentMode.reticleZoom}`}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Gradient mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />

                  {/* Top Optical Zoom Mode Selector Buttons */}
                  <div className="absolute top-5 left-5 right-5 z-20 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/65 p-1.5 backdrop-blur-md">
                      {zoomModes.map((mode, index) => (
                        <button
                          key={mode.id}
                          onClick={() => setActiveZoomIndex(index)}
                          className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                            activeZoomIndex === index
                              ? "bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 shadow-md shadow-cyan-400/30 scale-105"
                              : "text-white/70 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          {mode.id}
                        </button>
                      ))}
                    </div>

                    <div className="hidden sm:flex items-center gap-2 rounded-full border border-cyan-400/40 bg-black/60 px-4 py-1.5 text-xs font-mono font-bold text-cyan-300 backdrop-blur-md">
                      <Zap size={14} className="text-cyan-400 animate-pulse" />
                      <span>OPTICS: ZEISS 40X</span>
                    </div>
                  </div>

                  {/* Microscope Optical Crosshairs & Reticle Overlay */}
                  <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center opacity-40">
                    <div className="relative h-64 w-64 rounded-full border border-cyan-400/50">
                      <div className="absolute top-1/2 left-0 right-0 h-px bg-cyan-400/40 -translate-y-1/2" />
                      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-cyan-400/40 -translate-x-1/2" />
                      <div className="absolute inset-4 rounded-full border border-dashed border-cyan-300/30 animate-rotate-slow" />
                    </div>
                  </div>

                  {/* Bottom Viewport Telemetry Display */}
                  <div className="absolute bottom-5 left-5 right-5 z-20 flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300 border border-cyan-400/40 backdrop-blur-md">
                        {currentMode.label}
                      </span>
                      <h3 className="mt-2 text-xl sm:text-2xl font-display font-extrabold text-white">
                        {currentMode.title}
                      </h3>
                    </div>

                    <div className="rounded-xl border border-white/20 bg-black/70 px-4 py-2 text-right backdrop-blur-md">
                      <p className="text-[10px] uppercase tracking-wider text-slate-300 font-mono">
                        Target Tolerance
                      </p>
                      <p className="text-sm font-bold font-mono text-cyan-300">
                        {currentMode.specs.precision}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Specs Strip Below Viewer */}
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 size={15} className="text-cyan-600 shrink-0" />
                    <span><strong className="text-slate-900">Material:</strong> {currentMode.specs.material}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 size={15} className="text-cyan-600 shrink-0" />
                    <span><strong className="text-slate-900">Technique:</strong> {currentMode.specs.process}</span>
                  </div>
                </div>

              </div>
            </FadeIn>

            {/* RIGHT: STORY & MASTER LAB PILLARS */}
            <FadeIn direction="left" delay={0.2} className="space-y-5">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-200">
                    <Compass size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-600 font-bold">
                      Zero Outsource Policy
                    </p>
                    <h4 className="text-lg font-bold text-slate-950">
                      100% Hand-Crafted In-House
                    </h4>
                  </div>
                </div>

                <p className="mt-4 font-sans text-sm leading-relaxed text-slate-600">
                  Most dental clinics ship your teeth impressions to third-party mass production labs. At DentArt, our master ceramists sit beside the doctor, customizing the optical translucency and contour in real-time.
                </p>
              </div>

              {/* 3 Pillars List */}
              <div className="space-y-3.5">
                {labPillars.map((pillar) => {
                  const PillarIcon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="flex items-start gap-4 rounded-[1.5rem] border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:border-cyan-400 hover:shadow-md"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md">
                        <PillarIcon size={20} />
                      </div>

                      <div>
                        <h4 className="font-display text-base font-bold text-slate-950">
                          {pillar.title}
                        </h4>
                        <p className="mt-1 font-sans text-xs leading-5 text-slate-500">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <MagneticHover>
                  <a
                    href="#appointment"
                    className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 via-cyan-600 to-blue-600 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_10px_25px_rgba(6,182,212,0.3)] transition-all duration-300 hover:scale-105"
                  >
                    <span>Schedule Lab Smile Consultation</span>
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </MagneticHover>
              </div>
            </FadeIn>

          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
