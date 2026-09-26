"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Scan, ShieldCheck, Armchair, Cpu, ArrowUpRight, Sparkles, CheckCircle } from "lucide-react";
import { FadeIn, MagneticHover } from "./MotionWrapper";

import SectionWrapper from "./SectionWrapper";

const techHighlights = [
  {
    id: "01",
    title: "Digital Diagnostics",
    subtitle: "High-Resolution 3D Cone Beam & Intraoral Scanners",
    description:
      "Ultra-low radiation 3D CBCT scans deliver sub-millimeter anatomical accuracy in under 10 seconds. We map nerves, bone density, and tooth orientation with unmatched clarity before touching a tooth.",
    icon: Scan,
    image: "/services/general-dentistry.jpg",
    specs: ["Sub-millimeter accuracy", "80% less radiation", "Instant 3D rendering"],
  },
  {
    id: "02",
    title: "Modern Treatment Rooms",
    subtitle: "Acoustically Calibrated Surgical & Aesthetic Operatories",
    description:
      "Designed like luxury private sanctuaries. Floor-to-ceiling panoramic views, HEPA hospital-grade air filtration, and sterile surgical-grade isolation ensure absolute peace of mind.",
    icon: Armchair,
    image: "/services/cosmetic-dentistry.jpg",
    specs: ["Hospital HEPA-14 filtration", "Calming acoustic dampening", "Panoramic views"],
  },
  {
    id: "03",
    title: "Patient Comfort",
    subtitle: "Ergonomic Memory Lounges & Noise-Cancelling Audio",
    description:
      "Dental anxiety belongs in the past. Enjoy memory foam contour chairs, warm scented towels, ceiling entertainment screens, and painless computerized anesthesia delivery.",
    icon: ShieldCheck,
    image: "/services/preventive-care.jpg",
    specs: ["Computerized painless anesthesia", "Memory contour cushioning", "Streaming ceiling suites"],
  },
  {
    id: "04",
    title: "Precision Technology",
    subtitle: "CAD/CAM In-House Ceramic Milling & Laser Therapies",
    description:
      "Same-day custom zirconia restorations and gentle laser periodontal therapies eliminate weeks of temporary crowns and traditional dental impression trays.",
    icon: Cpu,
    image: "/treatments/dental-implants.jpg",
    specs: ["Same-day ceramic milling", "Micro-invasive soft tissue lasers", "Zero messy putty impressions"],
  },
];

export default function ClinicTechnology() {
  const [activeHighlight, setActiveHighlight] = useState(0);
  const current = techHighlights[activeHighlight];

  return (
    <SectionWrapper
      topVariant="none"
      variant="none"
      className="bg-[#FAFCFF] py-24 text-slate-900 lg:py-32"
    >
      <div id="technology" className="relative">
        {/* Ambient background glows */}
        <div className="pointer-events-none absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-cyan-100/60 blur-[150px]" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-100/50 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* SECTION HEADER */}
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <FadeIn direction="up">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-cyan-500" />
                <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">
                  Hospital Grade • Boutique Touch
                </span>
              </div>

              <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-6xl">
                Modern dentistry.
                <br />
                <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  Human care.
                </span>
              </h2>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <p className="font-sans text-sm leading-relaxed text-slate-600 lg:text-base">
                We invest in world-leading surgical robotics, 3D digital imaging, and spa-level comfort amenities so every treatment is painless, swift, and exceptionally durable.
              </p>
            </FadeIn>
          </div>

          {/* MAIN CINEMATIC HIGHLIGHT DISPLAY */}
          <div className="mt-16 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">

            {/* LEFT: LARGE CINEMATIC IMAGE VIEWER */}
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
                      alt={current.title}
                      fill
                      priority
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Subtle gradient lighting mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />

                {/* Top Floating Badge */}
                <div className="absolute top-6 left-6 z-10 flex items-center gap-3 rounded-full border border-slate-200 bg-white/95 px-5 py-2 shadow-sm backdrop-blur-md">
                  <Sparkles size={14} className="text-cyan-600" />
                  <span className="font-sans text-xs font-bold uppercase tracking-wider text-slate-800">
                    {current.id} — {current.title}
                  </span>
                </div>

                {/* Specs Chips */}
                <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-wrap gap-2.5">
                  {current.specs.map((spec) => (
                    <span
                      key={spec}
                      className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-slate-800 backdrop-blur-md shadow-sm"
                    >
                      <CheckCircle size={13} className="text-cyan-600" />
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* RIGHT: EDITORIAL HIGHLIGHT SELECTOR */}
            <div className="space-y-4">
              {techHighlights.map((item, index) => {
                const isActive = activeHighlight === index;
                const ItemIcon = item.icon;

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveHighlight(index)}
                    className={`group relative cursor-pointer overflow-hidden rounded-[1.75rem] border p-6 transition-all duration-300 backdrop-blur-xl ${
                      isActive
                        ? "border-cyan-500 bg-cyan-50/70 shadow-[0_10px_30px_rgba(6,182,212,0.12)] ring-1 ring-cyan-500/20"
                        : "border-slate-200/90 bg-white hover:border-cyan-300 hover:shadow-md"
                    }`}
                  >
                    {/* Left Indicator Line */}
                    {isActive && (
                      <motion.div
                        layoutId="techActiveIndicator"
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
                        <ItemIcon size={22} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={`font-sans text-xs font-bold uppercase tracking-widest ${
                              isActive ? "text-cyan-700 font-extrabold" : "text-slate-400"
                            }`}
                          >
                            {item.id}
                          </span>

                          <span
                            className={`text-xs font-semibold ${
                              isActive ? "text-cyan-600" : "text-slate-400"
                            }`}
                          >
                            {isActive ? "Viewing Spec" : "Explore"}
                          </span>
                        </div>

                        <h3 className={`mt-1 font-display text-xl font-bold transition-colors ${isActive ? "text-slate-950" : "text-slate-800 group-hover:text-cyan-600"}`}>
                          {item.title}
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
                                {item.subtitle}
                              </p>
                              <p className="mt-1.5 font-sans text-sm leading-relaxed text-slate-600">
                                {item.description}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Bottom Action */}
              <div className="pt-2">
                <MagneticHover>
                  <a
                    href="#appointment"
                    className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-sm transition-all duration-300 hover:border-cyan-400 hover:text-cyan-600 hover:shadow-md"
                  >
                    <span>Tour Our Facility</span>
                    <ArrowUpRight size={15} />
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
