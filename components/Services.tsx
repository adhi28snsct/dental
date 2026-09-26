"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Sparkles,
  Smile,
  ShieldCheck,
  Baby,
  Stethoscope,
  ScanLine,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { FadeIn, Counter, MagneticHover } from "./MotionWrapper";

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
      topVariant="none"
      variant="none"
      className="bg-[#F8FAFC] py-24 text-slate-900 lg:py-32"
    >
      <div id="services" className="relative">
        {/* Subtle background glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-[-150px] top-10 h-[450px] w-[450px] rounded-full bg-cyan-100/70 blur-[130px]"
        />

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="pointer-events-none absolute right-[-150px] bottom-0 h-[450px] w-[450px] rounded-full bg-blue-100/60 blur-[130px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          {/* =====================================================
              HEADER
          ====================================================== */}
          <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <FadeIn direction="up" className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-cyan-500" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">
                  Our Services
                </span>
              </div>

              <h2 className="font-display text-4xl font-extrabold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl text-slate-950">
                Complete care for{" "}
                <br />
                <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  every smile.
                </span>
              </h2>

              <p className="mt-6 max-w-xl font-sans text-base leading-7 text-slate-600">
                From gentle preventive hygiene to advanced cosmetic and restorative
                transformations, we offer everything needed for lifetime dental wellness.
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <MagneticHover>
                <a
                  href="#treatments"
                  className="group inline-flex w-fit items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-sm transition-all duration-300 hover:border-cyan-400 hover:text-cyan-600 hover:shadow-md"
                >
                  <span>Explore All Treatments</span>
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-cyan-600"
                  />
                </a>
              </MagneticHover>
            </FadeIn>
          </div>

          {/* =====================================================
              FEATURED SERVICE + SERVICE LIST
          ====================================================== */}
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">

            {/* Featured Dynamic Card */}
            <FadeIn direction="right" duration={0.7} className="group relative min-h-[520px] overflow-hidden rounded-[2.5rem] border border-slate-200/90 shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 h-full w-full"
                >
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Ambient Shadow Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

              {/* Card Content with entrance animation */}
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="mb-4 flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/30">
                      <ActiveIcon size={26} />
                    </div>

                    <p className="mb-2 font-sans text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                      Featured Specialty
                    </p>

                    <h3 className="font-display text-3xl font-extrabold sm:text-4xl text-white tracking-tight">
                      {activeService.title}
                    </h3>

                    <p className="mt-3 max-w-lg font-sans text-sm leading-6 text-slate-200">
                      {activeService.description}
                    </p>

                    <div className="mt-6 flex items-center gap-4">
                      <a
                        href="#appointment"
                        className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-cyan-600 to-blue-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40 hover:scale-[1.02]"
                      >
                        <span>Book This Treatment</span>
                        <ArrowUpRight
                          size={16}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </FadeIn>

            {/* =================================================
                SERVICE LIST (INTERACTIVE SELECTOR)
            ================================================== */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isActive = activeService.id === service.id;

                return (
                  <motion.button
                    key={service.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    onMouseEnter={() => setActiveService(service)}
                    onClick={() => setActiveService(service)}
                    className={`group relative flex w-full items-center gap-5 overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 ${
                      isActive
                        ? "border-cyan-500/80 bg-white shadow-[0_10px_25px_rgba(6,182,212,0.15)] ring-1 ring-cyan-500/20"
                        : "border-slate-200/90 bg-white/80 hover:border-cyan-300 hover:bg-white hover:shadow-sm"
                    }`}
                  >
                    {/* Active highlight background bar */}
                    {isActive && (
                      <motion.div
                        layoutId="activeServiceBorder"
                        className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-cyan-500 to-blue-600"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}

                    {/* Icon */}
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-cyan-500 text-white shadow-md scale-105"
                          : "bg-slate-100 text-slate-600 group-hover:bg-cyan-50 group-hover:text-cyan-600"
                      }`}
                    >
                      <Icon size={22} />
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <h3 className={`font-display font-bold transition-colors ${isActive ? "text-cyan-700" : "text-slate-900 group-hover:text-cyan-600"}`}>
                        {service.title}
                      </h3>
                      <p className="mt-1 line-clamp-1 font-sans text-xs text-slate-500">
                        {service.description}
                      </p>
                    </div>

                    {/* Arrow badge */}
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-cyan-500 text-white shadow-md rotate-45"
                          : "bg-slate-100 text-slate-400 group-hover:bg-cyan-50 group-hover:text-cyan-600"
                      }`}
                    >
                      <ArrowUpRight size={16} />
                    </div>
                  </motion.button>
                );
              })}
            </div>

          </div>

          {/* =====================================================
              BOTTOM TRUST STATS BAR
          ====================================================== */}
          <FadeIn direction="up" delay={0.4} className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-200/90 md:grid-cols-4 shadow-sm">
            <TrustStatItem value={5} suffix="K+" label="Happy Patients" />
            <TrustStatItem value={10} suffix="+" label="Years Experience" />
            <TrustStatItem value={6} suffix="+" label="Dental Specialties" />
            <TrustStatItem value={4.9} decimals={1} suffix=" ★" label="Patient Rating" />
          </FadeIn>

        </div>
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
    <motion.div
      whileHover={{ backgroundColor: "rgba(241, 245, 249, 1)" }}
      className="bg-white px-6 py-6 text-center transition-colors duration-200"
    >
      <p className="text-2xl font-bold text-slate-950 tracking-tight">
        <Counter value={value} suffix={suffix} decimals={decimals} />
      </p>
      <p className="mt-1 text-xs text-slate-500 font-medium">{label}</p>
    </motion.div>
  );
}