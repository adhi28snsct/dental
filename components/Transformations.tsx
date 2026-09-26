"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { ArrowRight, MoveHorizontal, Sparkles, Check } from "lucide-react";
import { FadeIn, MagneticHover } from "./MotionWrapper";

import SectionWrapper from "./SectionWrapper";

const cases = [
  {
    id: 1,
    title: "Cosmetic Veneers & Whitening",
    subtitle: "Complete Aesthetic Smile Makeover",
    duration: "2 Weeks",
    doctor: "Dr. Elena Vance",
    beforeImage: "/treatments/teeth-whitening.jpg",
    afterImage: "/services/cosmetic-dentistry.jpg",
    results: [
      "Closed midline diastema gap",
      "Corrected enamel discoloration (+8 shades brighter)",
      "Harmonized gingival smile line",
    ],
  },
  {
    id: 2,
    title: "Full Dental Implant Restoration",
    subtitle: "Permanent Biocompatible Arch",
    duration: "3 Months",
    doctor: "Dr. Arun Kumar",
    beforeImage: "/treatments/root-canal.jpg",
    afterImage: "/treatments/dental-implants.jpg",
    results: [
      "100% natural bite force restoration",
      "High-translucency custom zirconia crowns",
      "Preserved bone structure & facial contours",
    ],
  },
  {
    id: 3,
    title: "Clear Invisible Aligners",
    subtitle: "Discreet Orthodontic Realignment",
    duration: "6 Months",
    doctor: "Dr. Sarah Jones",
    beforeImage: "/services/orthodontics.jpg",
    afterImage: "/services/general-dentistry.jpg",
    results: [
      "Corrected deep bite and anterior crowding",
      "Discreet, wire-free treatment trays",
      "Enhanced long-term periodontal health",
    ],
  },
];

export default function Transformations() {
  const [activeCase, setActiveCase] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const currentCase = cases[activeCase];

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <SectionWrapper
      topVariant="none"
      variant="none"
      className="bg-[#FAFCFF] py-24 text-slate-900 lg:py-32"
    >
      {/* Ambient background blur */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn direction="up">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-cyan-500" />
              <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">
                Visible Results
              </span>
              <span className="h-px w-10 bg-cyan-500" />
            </div>

            <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-6xl">
              See the{" "}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                difference.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-slate-600">
              Real treatment. Visible change. Slide left and right to inspect the
              artistry, precision, and natural results achieved at DentArt.
            </p>
          </FadeIn>

          {/* Case Study Switcher Pills */}
          <FadeIn direction="up" delay={0.2} className="mt-8 flex flex-wrap justify-center gap-3">
            {cases.map((c, index) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCase(index);
                  setSliderPosition(50);
                }}
                className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCase === index
                    ? "bg-slate-950 text-white shadow-md scale-105"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-cyan-400 hover:text-cyan-600 shadow-sm"
                }`}
              >
                {c.title}
              </button>
            ))}
          </FadeIn>
        </div>

        {/* BEFORE / AFTER DRAGGABLE VIEWER */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

          {/* Interactive Slider Container */}
          <FadeIn direction="right" duration={0.8}>
            <div
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseUp}
              onTouchMove={handleTouchMove}
              className="relative h-[360px] sm:h-[460px] lg:h-[500px] w-full overflow-hidden rounded-[2.5rem] border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.12)] select-none cursor-ew-resize bg-slate-950"
            >
              {/* AFTER Image (Full background) */}
              <div className="absolute inset-0 h-full w-full">
                <Image
                  src={currentCase.afterImage}
                  alt="After dental treatment"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute bottom-6 right-6 rounded-full bg-cyan-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md shadow-md">
                  AFTER
                </div>
              </div>

              {/* BEFORE Image (Clipped overlay using CSS clip-path) */}
              <div
                className="absolute inset-0 h-full w-full overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={currentCase.beforeImage}
                    alt="Before dental treatment"
                    fill
                    priority
                    className="object-cover grayscale-[35%]"
                  />
                  <div className="absolute bottom-6 left-6 rounded-full bg-slate-950/85 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md shadow-md border border-white/20">
                    BEFORE
                  </div>
                </div>
              </div>

              {/* Slider Divider Line */}
              <div
                className="absolute inset-y-0 w-1 bg-white shadow-[0_0_15px_rgba(6,182,212,0.8)] z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Floating Central Handle */}
                <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl shadow-cyan-500/50">
                  <MoveHorizontal size={20} className="stroke-[2.5]" />
                </div>
              </div>

              {/* Interactive Helper Prompt */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 rounded-full border border-white/30 bg-slate-950/70 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white backdrop-blur-md shadow-lg pointer-events-none">
                Drag Slider To Compare
              </div>
            </div>
          </FadeIn>

          {/* Clinical Results & Case Study Details */}
          <FadeIn direction="left" delay={0.2} className="flex flex-col justify-between">
            <div className="rounded-[2rem] border border-slate-200/90 bg-white p-8 shadow-xl backdrop-blur-xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-cyan-700 border border-cyan-200">
                <Sparkles size={14} />
                Clinical Case Study
              </div>

              <h3 className="mt-4 font-display text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                {currentCase.title}
              </h3>

              <p className="mt-1 font-sans text-sm font-semibold text-cyan-700">
                {currentCase.subtitle}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">
                    Treatment Duration
                  </p>
                  <p className="mt-0.5 font-display text-base font-extrabold text-slate-950">
                    {currentCase.duration}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">
                    Lead Clinician
                  </p>
                  <p className="mt-0.5 font-display text-base font-extrabold text-slate-950">
                    {currentCase.doctor}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <p className="font-sans text-xs font-bold uppercase tracking-wider text-slate-500">
                  Key Improvements Achieved:
                </p>
                {currentCase.results.map((res) => (
                  <div key={res} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-700 border border-cyan-200">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <p className="font-sans text-sm text-slate-700 font-medium">
                      {res}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <MagneticHover>
                  <a
                    href="#appointment"
                    className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 via-cyan-600 to-blue-600 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40"
                  >
                    <span>Book Smile Assessment</span>
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </MagneticHover>

                <a
                  href="#treatments"
                  className="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-cyan-600 transition-colors"
                >
                  Explore Treatments →
                </a>
              </div>
            </div>
          </FadeIn>

        </div>

      </div>
    </SectionWrapper>
  );
}
