"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Scan,
  ShieldCheck,
  Armchair,
  Cpu,
  Check,
  ArrowRight,
} from "lucide-react";
import { FadeIn } from "./MotionWrapper";
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
    step: "Stage I",
    category: "3D Diagnostics",
    title: "Digital diagnostics & CBCT",
    subtitle: "High-resolution 3D cone beam & intraoral scanners",
    description:
      "Ultra-low radiation 3D CBCT scans deliver sub-millimeter anatomical accuracy in under 10 seconds. We map nerves, bone density, and tooth orientation with unmatched clarity before touching a tooth.",
    icon: Scan,
    image: "/services/general-dentistry.jpg",
    specs: ["Sub-millimeter accuracy", "80% lower radiation", "Instant 3D rendering"],
    metrics: [
      { label: "Scan time", value: "< 10s" },
      { label: "Radiation cut", value: "-80%" },
    ],
  },
  {
    id: "02",
    step: "Stage II",
    category: "Sterile Sanctuary",
    title: "Modern treatment suites",
    subtitle: "Acoustically calibrated surgical & aesthetic operatories",
    description:
      "Designed as private architectural retreats. Floor-to-ceiling panoramic views, HEPA hospital-grade air filtration, and surgical-grade isolation ensure absolute peace of mind during care.",
    icon: Armchair,
    image: "/services/cosmetic-dentistry.jpg",
    specs: ["Hospital HEPA-14 filtration", "Calming acoustic dampening", "Panoramic light"],
    metrics: [
      { label: "Air purity", value: "99.97%" },
      { label: "Isolation", value: "Grade A" },
    ],
  },
  {
    id: "03",
    step: "Stage III",
    category: "Painless Ergonomics",
    title: "Patient comfort & sedation",
    subtitle: "Ergonomic memory lounges & computerized anesthesia",
    description:
      "Dental discomfort belongs in the past. Memory contour lounges, heated aromatherapy linens, and computerized single-tooth anesthesia eliminate pressure and lingering numbness.",
    icon: ShieldCheck,
    image: "/services/preventive-care.jpg",
    specs: ["Single-tooth anesthesia", "Memory contour support", "Private acoustic control"],
    metrics: [
      { label: "Comfort index", value: "100%" },
      { label: "Anesthesia", value: "Gentle" },
    ],
  },
  {
    id: "04",
    step: "Stage IV",
    category: "Ceramic Robotics",
    title: "Precision CAD/CAM milling",
    subtitle: "In-house zirconia robotics & soft-tissue laser systems",
    description:
      "Same-day custom zirconia restorations and micro-invasive laser therapies eliminate weeks of temporary crowns and traditional gooey putty dental impressions forever.",
    icon: Cpu,
    image: "/treatments/dental-implants.jpg",
    specs: ["Same-day ceramic milling", "Micro-invasive soft tissue lasers", "Zero physical impressions"],
    metrics: [
      { label: "Turnaround", value: "Same-Day" },
      { label: "Biocompatible", value: "100%" },
    ],
  },
];

export default function ClinicTechnology() {
  const containerRef = useRef<HTMLDivElement>(null);

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
      id="technology"
      tone="dark"
      variant="line"
      className="bg-[#000000] py-24 text-[#FFFFFF] lg:py-36"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn direction="up">
            <p className="font-serif text-lg italic text-[#E10600]">
              Clinical infrastructure
            </p>

            <h2 className="mt-3 font-serif text-4xl font-medium leading-[1.12] tracking-tight text-[#FFFFFF] sm:text-5xl lg:text-6xl">
              Instruments of
              <br />
              uncompromising craft.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-[#FFFFFF]/75">
              A four-stage technological framework engineered for microscopic
              precision, hospital-level sterility, and serene patient ease.
            </p>
          </FadeIn>
        </div>

        {/* ROADMAP CONTAINER */}
        <div ref={containerRef} className="relative mt-20 sm:mt-28">
          {/* DESKTOP ZIGZAG ROUTE LINE */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            <svg
              viewBox="0 0 1000 1700"
              fill="none"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <defs>
                <linearGradient id="roadmapAtelierGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#E10600" />
                  <stop offset="50%" stopColor="#FF2A24" />
                  <stop offset="100%" stopColor="#E10600" />
                </linearGradient>
              </defs>

              {/* Faint Guide Track */}
              <path
                d="M 500 40 
                   C 500 100, 270 140, 270 230 
                   C 270 420, 730 460, 730 650 
                   C 730 840, 270 880, 270 1070 
                   C 270 1260, 730 1300, 730 1490
                   C 730 1580, 500 1620, 500 1680"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1.5"
                strokeDasharray="4 6"
              />

              {/* Scroll Track Progress Line */}
              <motion.path
                d="M 500 40 
                   C 500 100, 270 140, 270 230 
                   C 270 420, 730 460, 730 650 
                   C 730 840, 270 880, 270 1070 
                   C 270 1260, 730 1300, 730 1490
                   C 730 1580, 500 1620, 500 1680"
                stroke="url(#roadmapAtelierGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                style={{
                  pathLength: smoothProgress,
                }}
              />
            </svg>
          </div>

          {/* MOBILE LINEAR ROUTE LINE */}
          <div className="pointer-events-none absolute bottom-0 left-6 top-0 w-px lg:hidden bg-white/10">
            <motion.div
              className="w-full bg-[#E10600]"
              style={{
                height: useTransform(smoothProgress, [0, 1], ["0%", "100%"]),
              }}
            />
          </div>

          {/* ROADMAP CARDS LIST */}
          <div className="space-y-16 sm:space-y-24 lg:space-y-32">
            {techRoadmap.map((item, index) => {
              const isRight = index % 2 === 1;

              return (
                <RoadmapCard
                  key={item.id}
                  item={item}
                  index={index}
                  isRight={isRight}
                />
              );
            })}
          </div>

          {/* DESTINATION CALLOUT */}
          <FadeIn direction="up" delay={0.2} className="relative mt-24 text-center">
            <div className="mx-auto max-w-xl rounded-sm border border-white/15 bg-[#000000] p-8 sm:p-10 shadow-lg">
              <span className="font-mono text-xs uppercase tracking-wider text-[#E10600]">
                Lifelong smile health
              </span>
              <h3 className="mt-2 font-serif text-2xl font-medium text-[#FFFFFF] sm:text-3xl">
                Experience world-class studio care
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-[#FFFFFF]/75">
                Schedule an initial consultation to tour our surgical suites
                and review your high-resolution smile scan in person.
              </p>

              <div className="mt-8 flex justify-center">
                <a
                  href="#appointment"
                  className="inline-flex items-center gap-2 rounded-sm bg-[#E10600] px-7 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-[#FF2A24]"
                >
                  <span>Book consultation</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
}

function RoadmapCard({
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
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative w-full lg:max-w-[560px] pl-10 sm:pl-12 lg:pl-0"
      >
        <div className="group relative overflow-hidden rounded-sm border border-white/15 bg-[#000000] transition-colors hover:border-[#E10600]">
          {/* Card Image banner */}
          <div className="relative h-60 w-full overflow-hidden border-b border-white/15">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 560px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/40 to-transparent" />
            <div className="absolute top-4 left-4 flex items-center gap-2 rounded-sm border border-white/15 bg-[#000000]/85 px-2.5 py-1 backdrop-blur-sm">
              <Icon size={14} className="text-[#E10600]" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#E10600]">
                {item.category}
              </span>
            </div>
            <div className="absolute top-4 right-4">
              <span className="font-mono text-sm font-semibold text-[#E10600]">
                {item.step}
              </span>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6 sm:p-8">
            <h3 className="font-serif text-2xl font-medium tracking-tight text-[#FFFFFF]">
              {item.title}
            </h3>

            <p className="mt-1 font-serif text-sm italic text-[#E10600]">
              {item.subtitle}
            </p>

            <p className="mt-3 text-[14px] leading-relaxed text-[#FFFFFF]/75">
              {item.description}
            </p>

            {/* Metrics */}
            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/15 pt-5">
              {item.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-sm border border-white/10 bg-white/[0.04] p-3 text-center"
                >
                  <p className="font-mono text-xl font-medium text-[#FFFFFF]">
                    {metric.value}
                  </p>
                  <p className="mt-0.5 font-mono text-xs text-[#FFFFFF]/60">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Specs & Link */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                {item.specs.map((spec) => (
                  <span
                    key={spec}
                    className="inline-flex items-center gap-1.5 rounded-sm border border-white/15 bg-white/[0.04] px-2.5 py-1 text-xs text-[#FFFFFF]/80"
                  >
                    <Check size={11} className="text-[#E10600]" />
                    {spec}
                  </span>
                ))}
              </div>

              <a
                href="#appointment"
                className="inline-flex items-center gap-1 text-xs font-medium text-[#E10600] transition-colors hover:text-[#FFFFFF]"
              >
                <span>Inquire</span>
                <ArrowRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
