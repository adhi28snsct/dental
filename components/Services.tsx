"use client";

import Image from "next/image";
import {
  ArrowRight,
  Smile,
  ShieldCheck,
  Baby,
  Stethoscope,
  ScanLine,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { FadeIn, Counter } from "./MotionWrapper";

const services = [
  {
    id: 1,
    title: "General Dentistry",
    description:
      "Complete comprehensive dental examinations, cleanings, cavity prevention, and maintaining optimal oral hygiene.",
    icon: Smile,
    image: "/services/general-dentistry.jpg",
  },
  {
    id: 2,
    title: "Cosmetic Dentistry",
    description:
      "Transform and brighten your smile with porcelain veneers, custom bonding, and personalized aesthetics.",
    icon: Sparkles,
    image: "/services/cosmetic-dentistry.jpg",
  },
  {
    id: 3,
    title: "Dental Implants",
    description:
      "Permanent, natural-looking tooth replacements with state-of-the-art titanium roots and zirconia crowns.",
    icon: ShieldCheck,
    image: "/services/dental-implants.jpg",
  },
  {
    id: 4,
    title: "Orthodontics",
    description:
      "Achieve straight teeth and a balanced bite with modern discreet clear aligners and precision braces.",
    icon: ScanLine,
    image: "/services/orthodontics.jpg",
  },
  {
    id: 5,
    title: "Pediatric Dentistry",
    description:
      "Gentle, stress-free, and friendly pediatric dental care designed specially for children and teenagers.",
    icon: Baby,
    image: "/services/pediatric-dentistry.jpg",
  },
  {
    id: 6,
    title: "Preventive Care",
    description:
      "Proactive digital checkups, deep scaling, fluoride therapies, and sealants to protect your dental health.",
    icon: Stethoscope,
    image: "/services/preventive-care.jpg",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(services[0]);

  const ActiveIcon = activeService.icon;

  return (
    <SectionWrapper
      id="services"
      variant="ornament"
      tone="light"
      className="bg-[#FFFFFF] py-24 text-[#000000] lg:py-36"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <FadeIn direction="up" className="max-w-2xl">
            <p className="font-serif text-lg italic text-[#E10600]">
              Clinical services
            </p>

            <h2 className="mt-3 font-serif text-4xl font-medium leading-[1.12] tracking-tight text-[#000000] sm:text-5xl lg:text-6xl">
              Complete care for
              <br />
              every smile.
            </h2>

            <p className="mt-6 max-w-xl text-[15px] leading-7 text-[#555555]">
              From gentle preventive hygiene to advanced cosmetic and restorative
              transformations, we offer everything needed for lifetime dental wellness.
            </p>
          </FadeIn>

          <FadeIn direction="left" delay={0.15}>
            <a
              href="#treatments"
              className="inline-flex items-center gap-2 rounded-sm border border-[#E5E5E5] bg-[#FFFFFF] px-6 py-3 text-xs font-medium text-[#000000] transition-colors hover:border-[#E10600] hover:text-[#E10600]"
            >
              <span>Explore all treatments</span>
              <ArrowRight size={13} />
            </a>
          </FadeIn>
        </div>

        {/* =====================================================
            FEATURED SERVICE + SERVICE LIST
        ====================================================== */}
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Featured Dynamic Card */}
          <FadeIn direction="right" duration={0.7} className="group relative min-h-[500px] overflow-hidden rounded-sm border border-[#E5E5E5] bg-[#000000]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="absolute inset-0 h-full w-full"
              >
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </motion.div>
            </AnimatePresence>

            {/* Gradient Scrim for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/95 via-[#000000]/50 to-transparent" />

            {/* Card Content with entrance animation */}
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 z-10 text-[#FFFFFF]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-sm bg-[#E10600] text-white">
                    <ActiveIcon size={20} />
                  </div>

                  <p className="mb-1 font-mono text-xs uppercase tracking-wider text-[#E10600]">
                    Featured discipline
                  </p>

                  <h3 className="font-serif text-3xl font-medium tracking-tight text-[#FFFFFF] sm:text-4xl">
                    {activeService.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-[#FFFFFF]/80">
                    {activeService.description}
                  </p>

                  <div className="mt-6 flex items-center gap-4">
                    <a
                      href="#appointment"
                      className="inline-flex items-center gap-2 rounded-sm bg-[#E10600] px-6 py-3 text-xs font-medium tracking-wide text-white transition-colors hover:bg-[#FF2A24]"
                    >
                      <span>Book this treatment</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </FadeIn>

          {/* =================================================
              SERVICE LIST (INTERACTIVE SELECTOR)
          ================================================== */}
          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeService.id === service.id;

              return (
                <button
                  key={service.id}
                  onMouseEnter={() => setActiveService(service)}
                  onClick={() => setActiveService(service)}
                  className={`group relative flex w-full items-center gap-4 rounded-sm border p-4 sm:p-5 text-left transition-colors duration-200 ${
                    isActive
                      ? "border-[#E10600] bg-[#FFFFFF] shadow-sm"
                      : "border-[#E5E5E5] bg-[#FFFFFF] hover:border-[#000000]"
                  }`}
                >
                  {/* Active highlight left bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeServiceBorder"
                      className="absolute inset-y-0 left-0 w-1 bg-[#E10600]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  {/* Icon */}
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-sm transition-colors ${
                      isActive
                        ? "bg-[#E10600] text-white"
                        : "border border-[#E5E5E5] bg-[#FFFFFF] text-[#555555] group-hover:border-[#E10600] group-hover:text-[#E10600]"
                    }`}
                  >
                    <Icon size={18} />
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <h3 className={`font-serif text-lg font-medium transition-colors ${isActive ? "text-[#E10600]" : "text-[#000000] group-hover:text-[#E10600]"}`}>
                      {service.title}
                    </h3>
                    <p className="mt-0.5 line-clamp-1 text-xs text-[#666666]">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow badge */}
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-sm transition-colors ${
                      isActive
                        ? "text-[#E10600]"
                        : "text-[#CCCCCC] group-hover:text-[#E10600]"
                    }`}
                  >
                    <ArrowRight size={14} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATS BAR
        ====================================================== */}
        <FadeIn direction="up" delay={0.25} className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-[#E5E5E5] bg-[#E5E5E5] md:grid-cols-4">
          <TrustStatItem value={5} suffix="K+" label="Happy patients" />
          <TrustStatItem value={10} suffix="+" label="Years clinical mastery" />
          <TrustStatItem value={6} suffix="+" label="Dental disciplines" />
          <TrustStatItem value={4.9} decimals={1} suffix=" ★" label="Average patient rating" />
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}

function TrustStatItem({
  value,
  suffix = "",
  decimals = 0,
  label,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
}) {
  return (
    <div className="bg-[#FFFFFF] px-6 py-6 text-center">
      <p className="font-mono text-3xl font-semibold text-[#E10600] tracking-tight">
        <Counter value={value} suffix={suffix} decimals={decimals} />
      </p>
      <p className="mt-1 font-mono text-xs text-[#666666]">{label}</p>
    </div>
  );
}