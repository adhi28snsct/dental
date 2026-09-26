"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { ArrowRight, MoveHorizontal, Check } from "lucide-react";
import { FadeIn } from "./MotionWrapper";
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
    doctor: "Dr. Sarah Mitchell",
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
  const [sliderPosition, setSliderPosition] = useState(50);
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
      id="transformations"
      variant="ornament"
      tone="light"
      className="bg-[#FFFFFF] py-24 text-[#000000] lg:py-36"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn direction="up">
            <p className="font-serif text-lg italic text-[#E10600]">
              Documented outcomes
            </p>

            <h2 className="mt-3 font-serif text-4xl font-medium leading-[1.12] tracking-tight text-[#000000] sm:text-5xl lg:text-6xl">
              See the visible
              <br />
              difference.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-7 text-[#555555]">
              Real treatment. Documented clinical change. Slide horizontally to inspect
              the ceramic craft, precision margins, and natural tooth translucency.
            </p>
          </FadeIn>

          {/* Case Study Switcher Tabs */}
          <FadeIn direction="up" delay={0.15} className="mt-8 flex flex-wrap justify-center gap-2.5">
            {cases.map((c, index) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCase(index);
                  setSliderPosition(50);
                }}
                className={`rounded-sm px-5 py-2 text-xs font-medium tracking-wide transition-colors ${
                  activeCase === index
                    ? "bg-[#E10600] text-white"
                    : "border border-[#E5E5E5] bg-[#FFFFFF] text-[#000000] hover:border-[#000000]"
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
              className="relative h-[360px] sm:h-[460px] lg:h-[500px] w-full overflow-hidden rounded-sm border border-[#E5E5E5] select-none cursor-ew-resize bg-[#000000]"
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
                <div className="absolute bottom-5 right-5 rounded-sm bg-[#E10600] px-3.5 py-1 font-mono text-xs font-medium text-white shadow-sm">
                  After
                </div>
              </div>

              {/* BEFORE Image (Clipped overlay) */}
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
                    className="object-cover grayscale-[30%]"
                  />
                  <div className="absolute bottom-5 left-5 rounded-sm border border-white/20 bg-[#000000]/80 px-3.5 py-1 font-mono text-xs font-medium text-white backdrop-blur-sm shadow-sm">
                    Before
                  </div>
                </div>
              </div>

              {/* Slider Divider Line */}
              <div
                className="absolute inset-y-0 w-px bg-white z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Solid Signal Red Slider Handle */}
                <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-sm bg-[#E10600] text-white shadow-lg border border-white/20">
                  <MoveHorizontal size={18} />
                </div>
              </div>

              {/* Helper Prompt */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 rounded-sm border border-white/20 bg-[#000000]/80 px-3.5 py-1 font-mono text-[11px] font-medium text-[#FFFFFF] backdrop-blur-sm pointer-events-none">
                Drag to compare
              </div>
            </div>
          </FadeIn>

          {/* Clinical Results & Case Study Details */}
          <FadeIn direction="left" delay={0.15} className="flex flex-col justify-between">
            <div className="rounded-sm border border-[#E5E5E5] bg-[#FFFFFF] p-8">
              <span className="font-mono text-xs uppercase tracking-wider text-[#E10600]">
                Clinical archive case
              </span>

              <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight text-[#000000] sm:text-3xl">
                {currentCase.title}
              </h3>

              <p className="mt-1 font-serif italic text-sm text-[#555555]">
                {currentCase.subtitle}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 border-y border-[#E5E5E5] py-4">
                <div>
                  <p className="font-mono text-xs text-[#666666]">
                    Treatment timeframe
                  </p>
                  <p className="mt-0.5 font-serif text-lg font-medium text-[#000000]">
                    {currentCase.duration}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs text-[#666666]">
                    Lead clinician
                  </p>
                  <p className="mt-0.5 font-serif text-lg font-medium text-[#000000]">
                    {currentCase.doctor}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-2.5">
                <p className="font-mono text-[11px] uppercase tracking-wider text-[#E10600]">
                  Outcomes achieved
                </p>
                {currentCase.results.map((res) => (
                  <div key={res} className="flex items-start gap-2.5">
                    <Check size={14} className="mt-0.5 text-[#E10600] shrink-0" />
                    <p className="text-sm text-[#555555]">
                      {res}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 pt-4 border-t border-[#E5E5E5]">
                <a
                  href="#appointment"
                  className="inline-flex items-center gap-2 rounded-sm bg-[#E10600] px-7 py-3 text-xs font-medium tracking-wide text-white transition-colors hover:bg-[#FF2A24]"
                >
                  <span>Schedule smile assessment</span>
                  <ArrowRight size={13} />
                </a>

                <a
                  href="#treatments"
                  className="text-xs font-medium text-[#000000] transition-colors hover:text-[#E10600]"
                >
                  Explore treatments →
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
}
