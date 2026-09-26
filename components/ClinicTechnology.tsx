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
  Activity,
  Zap,
  Layers,
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
    offset: ["start 65%", "end 80%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  // Calculate percentage for progress tracker pill
  const progressPercent = useTransform(smoothProgress, [0, 1], [0, 100]);

  return (
    <SectionWrapper
      topVariant="none"
      variant="none"
      className="bg-[#FAFCFF] py-24 text-slate-900 lg:py-36"
    >
      <div id="technology" className="relative">
        {/* Background ambient lighting */}
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
                Follow our 4-stage hospital-grade infrastructure route. Scroll down to navigate
                through high-precision 3D diagnostics, surgical suites, and in-house ceramic robotics.
              </p>
            </FadeIn>

            {/* Scroll Status Tracker Pill */}
            <FadeIn direction="up" delay={0.2} className="mt-8 flex justify-center">
              <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/95 px-5 py-2 text-xs font-bold shadow-sm backdrop-blur-md">
                <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                <span className="text-slate-500 uppercase tracking-widest text-[11px]">Roadmap Progress:</span>
                <span className="font-display font-extrabold text-cyan-700">
                  <motion.span>
                    {Math.round(progressPercent.get())}%
                  </motion.span>
                  {" "}Active
                </span>
              </div>
            </FadeIn>
          </div>

          {/* =====================================================
              ZIGZAG ROADMAP CONTAINER WITH SCROLL-DRIVEN LASER LINE
          ====================================================== */}
          <div ref={containerRef} className="relative mt-20 sm:mt-28">

            {/* DESKTOP ZIGZAG SVG ROUTE LINE (Center Zigzag Canvas) */}
            <div className="pointer-events-none absolute inset-0 hidden lg:block">
              <svg
                viewBox="0 0 1000 1600"
                fill="none"
                preserveAspectRatio="none"
                className="h-full w-full"
              >
                <defs>
                  {/* Glowing Laser Gradient */}
                  <linearGradient id="roadmapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="35%" stopColor="#3b82f6" />
                    <stop offset="70%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#2563eb" />
                  </linearGradient>

                  <filter id="laserGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Background Guide Track (Faint Dashed Line) */}
                <path
                  d="M 500 40 
                     C 500 120, 260 140, 260 220 
                     C 260 380, 740 440, 740 620 
                     C 740 800, 260 860, 260 1040 
                     C 260 1220, 740 1280, 740 1440
                     C 740 1520, 500 1540, 500 1580"
                  stroke="#cbd5e1"
                  strokeWidth="3"
                  strokeDasharray="6 8"
                  className="opacity-70"
                />

                {/* Animated Glowing Tracing Laser Line */}
                <motion.path
                  d="M 500 40 
                     C 500 120, 260 140, 260 220 
                     C 260 380, 740 440, 740 620 
                     C 740 800, 260 860, 260 1040 
                     C 260 1220, 740 1280, 740 1440
                     C 740 1520, 500 1540, 500 1580"
                  stroke="url(#roadmapGradient)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  filter="url(#laserGlow)"
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

            {/* ZIGZAG ROADMAP CARDS LIST */}
            <div className="space-y-16 sm:space-y-24 lg:space-y-36">
              {techRoadmap.map((item, index) => {
                const isEven = index % 2 === 1; // 0=Left, 1=Right, 2=Left, 3=Right

                return (
                  <RoadmapStepCard
                    key={item.id}
                    item={item}
                    index={index}
                    isEven={isEven}
                  />
                );
              })}
            </div>

            {/* ROADMAP DESTINATION BADGE (Bottom Endpoint) */}
            <FadeIn direction="up" delay={0.3} className="relative mt-24 text-center">
              <div className="inline-flex flex-col items-center">
                {/* Glowing Node Point */}
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

function RoadmapStepCard({
  item,
  index,
  isEven,
}: {
  item: TechItem;
  index: number;
  isEven: boolean;
}) {
  const Icon = item.icon;

  return (
    <div
      className={`relative flex flex-col items-center gap-8 lg:grid lg:grid-cols-2 lg:gap-16 ${
        isEven ? "lg:direction-rtl" : ""
      }`}
    >
      {/* =====================================================
          SIDE A: THE INTERACTIVE PORCELAIN CARD
      ====================================================== */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 40 : -40, y: 30 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: index * 0.1 }}
        className={`w-full ${isEven ? "lg:order-2" : "lg:order-1"}`}
      >
        <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200/90 bg-white p-7 sm:p-9 shadow-xl transition-all duration-500 hover:border-cyan-400 hover:shadow-2xl">
          
          {/* Subtle Ambient Card Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-100/50 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
          
          {/* Top Milestone Badge Bar */}
          <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25">
                <Icon size={24} />
              </div>
              <div>
                <span className="font-sans text-[11px] font-extrabold uppercase tracking-[0.2em] text-cyan-600">
                  {item.step}
                </span>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {item.category}
                </p>
              </div>
            </div>

            <span className="font-display text-3xl font-black text-slate-200 group-hover:text-cyan-600 transition-colors">
              {item.id}
            </span>
          </div>

          {/* Title & Subtitle */}
          <div className="mt-5">
            <h3 className="font-display text-2xl font-extrabold text-slate-950 sm:text-3xl tracking-tight group-hover:text-cyan-700 transition-colors">
              {item.title}
            </h3>
            <p className="mt-1 font-sans text-xs font-semibold uppercase tracking-wider text-cyan-700">
              {item.subtitle}
            </p>
            <p className="mt-3 font-sans text-sm leading-relaxed text-slate-600">
              {item.description}
            </p>
          </div>

          {/* Metric Highlights */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            {item.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-slate-100 bg-slate-50/80 p-3.5 text-center transition-colors group-hover:border-cyan-200 group-hover:bg-cyan-50/40"
              >
                <p className="font-display text-xl font-black text-slate-950">
                  {metric.value}
                </p>
                <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          {/* Spec Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {item.specs.map((spec) => (
              <span
                key={spec}
                className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-medium text-slate-700 shadow-sm"
              >
                <CheckCircle2 size={13} className="text-cyan-600 shrink-0" />
                {spec}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* =====================================================
          SIDE B: CINEMATIC VISUAL VIEWER
      ====================================================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: index * 0.15 }}
        className={`w-full ${isEven ? "lg:order-1" : "lg:order-2"}`}
      >
        <div className="group relative h-[300px] sm:h-[380px] w-full overflow-hidden rounded-[2.5rem] border border-slate-200/90 bg-white shadow-xl">
          <Image
            src={item.image}
            alt={item.title}
            fill
            priority={index === 0}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Ambient Lighting Mask */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />

          {/* Top Stage Tag */}
          <div className="absolute top-5 left-5 z-10">
            <div className="flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 backdrop-blur-md shadow-sm">
              <Sparkles size={13} className="text-cyan-600" />
              <span>{item.category}</span>
            </div>
          </div>

          {/* Bottom Interactive Spec Strip */}
          <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between rounded-2xl border border-white/20 bg-slate-950/80 px-5 py-3 text-white backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500 text-white font-bold text-xs">
                {item.id}
              </div>
              <span className="text-xs font-bold text-slate-100 line-clamp-1">
                {item.title}
              </span>
            </div>

            <a
              href="#appointment"
              className="flex items-center gap-1 text-[11px] font-bold text-cyan-300 hover:text-white transition-colors"
            >
              <span>Explore</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
