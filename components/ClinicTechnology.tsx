"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Scan,
  ShieldCheck,
  Armchair,
  Cpu,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  Zap,
} from "lucide-react";
import { FadeIn, MagneticHover } from "./MotionWrapper";
import SectionWrapper from "./SectionWrapper";

interface TechItem {
  id: string;
  step: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  image: string;
  specs: string[];
  metrics: { label: string; value: string }[];
}

const techRoadmap: TechItem[] = [
  {
    id: "01",
    step: "MILESTONE 01",
    category: "3D PRECISION SCANNING",
    title: "Digital Diagnostics & CBCT",
    subtitle: "High-Resolution 3D Cone Beam & Intraoral Scanners",
    description:
      "Ultra-low radiation 3D CBCT scans deliver sub-millimeter anatomical accuracy in under 10 seconds. We map nerves, bone density, and tooth orientation with unmatched clarity before touching a tooth.",
    icon: Scan,
    image: "/services/general-dentistry.jpg",
    specs: ["Sub-millimeter accuracy", "80% less radiation", "Instant 3D rendering"],
    metrics: [
      { label: "Scan Time", value: "< 10s" },
      { label: "Radiation Cut", value: "-80%" },
    ],
  },
  {
    id: "02",
    step: "MILESTONE 02",
    category: "STERILE SANCTUARY",
    title: "Modern Treatment Suites",
    subtitle: "Acoustically Calibrated Surgical & Aesthetic Operatories",
    description:
      "Designed like luxury private sanctuaries. Floor-to-ceiling panoramic views, HEPA hospital-grade air filtration, and sterile surgical-grade isolation ensure absolute peace of mind during care.",
    icon: Armchair,
    image: "/services/cosmetic-dentistry.jpg",
    specs: ["Hospital HEPA-14 filtration", "Calming acoustic dampening", "Panoramic views"],
    metrics: [
      { label: "Air Purity", value: "99.97%" },
      { label: "Isolation", value: "Grade-A" },
    ],
  },
  {
    id: "03",
    step: "MILESTONE 03",
    category: "PAINLESS ERGONOMICS",
    title: "Patient Comfort & Sedation",
    subtitle: "Ergonomic Memory Lounges & Computerized Anesthesia",
    description:
      "Dental anxiety belongs in the past. Enjoy memory foam contour chairs, warm scented towels, ceiling entertainment screens, and painless computerized single-tooth anesthesia delivery.",
    icon: ShieldCheck,
    image: "/services/preventive-care.jpg",
    specs: ["Computerized painless anesthesia", "Memory contour cushioning", "Streaming ceiling suites"],
    metrics: [
      { label: "Comfort Rate", value: "100%" },
      { label: "Anesthesia", value: "Painless" },
    ],
  },
  {
    id: "04",
    step: "MILESTONE 04",
    category: "IN-HOUSE ROBOTICS",
    title: "Precision CAD/CAM Milling",
    subtitle: "In-House Ceramic Robotics & Soft-Tissue Laser Systems",
    description:
      "Same-day custom zirconia restorations and gentle laser periodontal therapies eliminate weeks of temporary crowns and traditional gooey putty dental impressions forever.",
    icon: Cpu,
    image: "/treatments/dental-implants.jpg",
    specs: ["Same-day ceramic milling", "Micro-invasive soft tissue lasers", "Zero messy putty impressions"],
    metrics: [
      { label: "Turnaround", value: "Same-Day" },
      { label: "Biocompatible", value: "100%" },
    ],
  },
];

export default function ClinicTechnology() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking for the glowing zigzag route
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 85%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <SectionWrapper
      topVariant="none"
      variant="none"
      className="bg-[#FAFCFF] py-24 text-slate-900 lg:py-36"
    >
      <div id="technology" className="relative">
        {/* Subtle background ambient glows */}
        <div className="pointer-events-none absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-cyan-100/60 blur-[160px]" />
        <div className="pointer-events-none absolute right-0 bottom-1/4 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* SECTION HEADER */}
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn direction="up">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-cyan-500" />
                <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">
                  Hospital Grade • Boutique Touch
                </span>
                <span className="h-px w-10 bg-cyan-500" />
              </div>

              <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-6xl">
                The Technology{" "}
                <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  Roadmap
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-slate-600">
                Explore our 4-stage hospital-grade infrastructure. Scroll down to follow the
                integrated route across diagnostics, surgical suites, patient ergonomics, and in-house ceramic robotics.
              </p>
            </FadeIn>
          </div>

          {/* =====================================================
              ZIGZAG ROADMAP CONTAINER WITH SCROLL-DRIVEN LASER LINE
          ====================================================== */}
          <div ref={containerRef} className="relative mt-20 sm:mt-28">

            {/* DESKTOP ZIGZAG SVG ROUTE LINE (Center Zigzag Canvas) */}
            <div className="pointer-events-none absolute inset-0 hidden lg:block">
              <svg
                viewBox="0 0 1000 1700"
                fill="none"
                preserveAspectRatio="none"
                className="h-full w-full"
              >
                <defs>
                  {/* Glowing Laser Gradient */}
                  <linearGradient id="roadmapLaserGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="35%" stopColor="#3b82f6" />
                    <stop offset="70%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#2563eb" />
                  </linearGradient>

                  <filter id="laserLineGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Background Guide Track (Faint Dashed Road) */}
                <path
                  d="M 500 40 
                     C 500 100, 270 140, 270 230 
                     C 270 420, 730 460, 730 650 
                     C 730 840, 270 880, 270 1070 
                     C 270 1260, 730 1300, 730 1490
                     C 730 1580, 500 1620, 500 1680"
                  stroke="#cbd5e1"
                  strokeWidth="3"
                  strokeDasharray="6 8"
                  className="opacity-70"
                />

                {/* Animated Glowing Tracing Laser Line */}
                <motion.path
                  d="M 500 40 
                     C 500 100, 270 140, 270 230 
                     C 270 420, 730 460, 730 650 
                     C 730 840, 270 880, 270 1070 
                     C 270 1260, 730 1300, 730 1490
                     C 730 1580, 500 1620, 500 1680"
                  stroke="url(#roadmapLaserGrad)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  filter="url(#laserLineGlow)"
                  style={{
                    pathLength: smoothProgress,
                  }}
                />
              </svg>
            </div>

            {/* MOBILE LINEAR ROUTE LINE (Left side on mobile) */}
            <div className="pointer-events-none absolute bottom-0 left-6 top-0 w-1 lg:hidden">
              <div className="h-full w-full bg-slate-200" />
              <motion.div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-500 via-blue-600 to-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.8)]"
                style={{
                  height: useTransform(smoothProgress, [0, 1], ["0%", "100%"]),
                }}
              />
            </div>

            {/* ZIGZAG ROADMAP CARDS LIST (Single Layer with Image as Background) */}
            <div className="space-y-16 sm:space-y-24 lg:space-y-36">
              {techRoadmap.map((item, index) => {
                const isRight = index % 2 === 1; // 0=Left, 1=Right, 2=Left, 3=Right

                return (
                  <RoadmapImageCard
                    key={item.id}
                    item={item}
                    index={index}
                    isRight={isRight}
                  />
                );
              })}
            </div>

            {/* ROADMAP DESTINATION ENDPOINT */}
            <FadeIn direction="up" delay={0.3} className="relative mt-24 text-center">
              <div className="inline-flex flex-col items-center">
                {/* Glowing Center Pin */}
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl shadow-cyan-500/30">
                  <Zap size={24} className="fill-current animate-bounce" />
                </div>

                <div className="rounded-[2rem] border border-slate-200/90 bg-white p-8 shadow-xl max-w-xl">
                  <span className="rounded-full bg-cyan-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-cyan-700 border border-cyan-200">
                    Destination: Lifelong Smile Health
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold text-slate-950">
                    Experience World-Class Dental Care
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Book an initial consultation to tour our surgical suites and experience 
                    our digital smile simulation in person.
                  </p>

                  <div className="mt-6 flex justify-center">
                    <MagneticHover>
                      <a
                        href="#appointment"
                        className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 via-cyan-600 to-blue-600 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40"
                      >
                        <span>Book Your Consultation</span>
                        <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </MagneticHover>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}

function RoadmapImageCard({
  item,
  index,
  isRight,
}: {
  item: TechItem;
  index: number;
  isRight: boolean;
}) {
  const Icon = item.icon;

  return (
    <div
      className={`relative flex w-full ${
        isRight ? "lg:justify-end" : "lg:justify-start"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: isRight ? 50 : -50, y: 30 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: index * 0.1 }}
        className="relative w-full lg:max-w-[580px] pl-10 sm:pl-12 lg:pl-0"
      >
        {/* =====================================================
            SINGLE ROADMAP SHOWCASE CARD (IMAGE AS BACKGROUND)
        ====================================================== */}
        <div className="group relative min-h-[440px] sm:min-h-[480px] overflow-hidden rounded-[2.5rem] border border-slate-200/90 shadow-2xl transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_30px_70px_rgba(6,182,212,0.2)] bg-slate-950">
          
          {/* Full-bleed Background Image with smooth hover scale */}
          <div className="absolute inset-0 h-full w-full">
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority={index === 0}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Frosted High-Contrast Dark Gradient Mask */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/35" />

          {/* Ambient Corner Glow on Hover */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Content Layer (Over the background image) */}
          <div className="relative z-10 flex h-full flex-col justify-between p-7 sm:p-9 text-white">
            
            {/* Top Bar: Milestone Badge + Icon + Step */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/30">
                  <Icon size={24} />
                </div>
                <div>
                  <span className="font-sans text-[11px] font-extrabold uppercase tracking-[0.2em] text-cyan-300">
                    {item.step}
                  </span>
                  <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    {item.category}
                  </p>
                </div>
              </div>

              {/* Glowing Milestone Number Pin */}
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/40 bg-black/50 text-cyan-300 font-display font-black text-sm shadow-md backdrop-blur-md">
                {item.id}
              </div>
            </div>

            {/* Middle: Title, Subtitle, Description */}
            <div className="my-6">
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {item.title}
              </h3>

              <p className="mt-1 font-sans text-xs font-semibold uppercase tracking-wider text-cyan-300">
                {item.subtitle}
              </p>

              <p className="mt-3 font-sans text-sm leading-relaxed text-slate-200">
                {item.description}
              </p>
            </div>

            {/* Bottom: Metrics & Spec Chips */}
            <div className="space-y-4 pt-4 border-t border-white/15">
              {/* Metric Highlights */}
              <div className="grid grid-cols-2 gap-3">
                {item.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/15 bg-slate-950/60 p-3 text-center backdrop-blur-md transition-colors group-hover:border-cyan-400/30 group-hover:bg-cyan-950/40"
                  >
                    <p className="font-display text-xl font-black text-cyan-300">
                      {metric.value}
                    </p>
                    <p className="text-[10px] font-semibold text-slate-300 uppercase tracking-wider">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Spec Tags */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-2">
                  {item.specs.map((spec) => (
                    <span
                      key={spec}
                      className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur-md"
                    >
                      <CheckCircle2 size={12} className="text-cyan-400 shrink-0" />
                      {spec}
                    </span>
                  ))}
                </div>

                <a
                  href="#appointment"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-cyan-300 hover:text-white transition-colors ml-auto pt-1"
                >
                  <span>Book</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
