"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  ScanLine,
  Stethoscope,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { FadeIn, MagneticHover } from "./MotionWrapper";

const treatments = [
  {
    id: 1,
    title: "Teeth Whitening",
    description: "Brighten your natural smile up to 8 shades in a single safe session.",
    image: "/treatments/teeth-whitening.jpg",
    icon: Sparkles,
  },
  {
    id: 2,
    title: "Dental Implants",
    description: "Restore your complete smile with permanent, natural-feeling implants.",
    image: "/treatments/dental-implants.jpg",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Clear Aligners",
    description: "Discreet orthodontic trays designed to straighten teeth comfortably.",
    image: "/treatments/clear-aligners.jpg",
    icon: ScanLine,
  },
  {
    id: 4,
    title: "Root Canal",
    description: "Gentle restorative therapy to relieve pain and preserve natural teeth.",
    image: "/treatments/root-canal.jpg",
    icon: Stethoscope,
  },
];

export default function Treatments() {
  const [activeTreatment, setActiveTreatment] = useState(treatments[0]);

  return (
    <SectionWrapper
      topVariant="none"
      variant="none"
      className="bg-[#F8FAFC] py-24 text-slate-900 lg:py-32"
    >
      <div id="treatments" className="relative">
        {/* Ambient Glows */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-1/2 top-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-100/70 blur-[130px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          {/* HEADER */}
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn direction="up">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-cyan-500" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">
                  Our Specialized Treatments
                </span>
                <span className="h-px w-10 bg-cyan-500" />
              </div>

              <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-6xl">
                Everything your{" "}
                <br />
                <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  smile needs.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-7 text-slate-600">
                From simple restorative care to full cosmetic transformations,
                our specialized procedures ensure comfort, precision, and lasting results.
              </p>
            </FadeIn>
          </div>

          {/* SMILE ARC LAYOUT */}
          <div className="relative mx-auto mt-16 max-w-6xl">

            {/* Smile orbital curves (Desktop) */}
            <div className="pointer-events-none absolute left-[8%] right-[8%] top-[25%] hidden h-[380px] rounded-[50%] border-b-[2px] border-slate-200 lg:block" />
            <div className="pointer-events-none absolute left-[15%] right-[15%] top-[29%] hidden h-[320px] rounded-[50%] border-b border-slate-200/80 lg:block" />

            {/* =================================================
                DESKTOP ORBITAL INTERACTIVE LAYOUT
            ================================================== */}
            <div className="relative hidden min-h-[660px] lg:block">

              {/* Top left card */}
              <div className="absolute left-[5%] top-0 z-20">
                <TreatmentCard
                  treatment={treatments[0]}
                  active={activeTreatment.id === treatments[0].id}
                  onClick={() => setActiveTreatment(treatments[0])}
                  delay={0.1}
                />
              </div>

              {/* Top right card */}
              <div className="absolute right-[5%] top-0 z-20">
                <TreatmentCard
                  treatment={treatments[1]}
                  active={activeTreatment.id === treatments[1].id}
                  onClick={() => setActiveTreatment(treatments[1])}
                  delay={0.2}
                />
              </div>

              {/* Bottom left card */}
              <div className="absolute bottom-6 left-[14%] z-20">
                <TreatmentCard
                  treatment={treatments[2]}
                  active={activeTreatment.id === treatments[2].id}
                  onClick={() => setActiveTreatment(treatments[2])}
                  delay={0.3}
                />
              </div>

              {/* Bottom right card */}
              <div className="absolute bottom-6 right-[14%] z-20">
                <TreatmentCard
                  treatment={treatments[3]}
                  active={activeTreatment.id === treatments[3].id}
                  onClick={() => setActiveTreatment(treatments[3])}
                  delay={0.4}
                />
              </div>

              {/* =================================================
                  CENTER OVAL SPOTLIGHT WITH ANIMATED GLOW
              ================================================== */}
              <div className="absolute left-1/2 top-[95px] -translate-x-1/2 z-10">
                <div className="relative">

                  {/* Pulsing Outer Glow Halo */}
                  <motion.div
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.35, 0.65, 0.35],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-[-25px] rounded-[50%] bg-cyan-400/20 blur-3xl"
                  />

                  {/* Center Oval */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative h-[340px] w-[490px] overflow-hidden rounded-[50%] border-[4px] border-white bg-slate-950 shadow-[0_25px_60px_rgba(15,23,42,0.18)]"
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTreatment.id}
                        initial={{ opacity: 0, scale: 1.12 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0 h-full w-full"
                      >
                        <Image
                          src={activeTreatment.image}
                          alt={activeTreatment.title}
                          fill
                          priority
                          className="object-cover"
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-end px-10 pb-9 text-center z-10">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeTreatment.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.35 }}
                          className="flex flex-col items-center"
                        >
                          <span className="rounded-full bg-cyan-500/20 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300 border border-cyan-400/40 backdrop-blur-md">
                            Featured Treatment
                          </span>

                          <h3 className="mt-2.5 text-2xl font-bold text-white">
                            {activeTreatment.title}
                          </h3>

                          <p className="mt-1.5 max-w-[320px] text-xs leading-5 text-white/90">
                            {activeTreatment.description}
                          </p>

                          <a
                            href="#appointment"
                            className="mt-3.5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-cyan-600 to-blue-600 px-6 py-2.5 text-xs font-bold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                          >
                            Book Consultation
                            <ArrowUpRight size={14} />
                          </a>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </div>
              </div>

            </div>

            {/* =================================================
                MOBILE LAYOUT
            ================================================== */}
            <div className="lg:hidden">
              <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl border border-slate-200">
                <div className="relative h-[240px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTreatment.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 h-full w-full"
                    >
                      <Image
                        src={activeTreatment.image}
                        alt={activeTreatment.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                </div>

                <div className="p-7 text-center">
                  <div className="mx-auto -mt-12 relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30">
                    <activeTreatment.icon size={25} />
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-slate-950">
                    {activeTreatment.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {activeTreatment.description}
                  </p>

                  <a
                    href="#appointment"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-cyan-600 to-blue-600 px-6 py-2.5 text-xs font-bold text-white shadow-md"
                  >
                    Book This Procedure
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Mobile Treatment Buttons */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                {treatments.map((treatment) => (
                  <TreatmentCard
                    key={treatment.id}
                    treatment={treatment}
                    active={activeTreatment.id === treatment.id}
                    onClick={() => setActiveTreatment(treatment)}
                    mobile
                  />
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Consultation Banner */}
          <FadeIn direction="up" delay={0.3}>
            <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center justify-between gap-6 rounded-[2rem] border border-slate-200/90 bg-white px-8 py-7 text-center shadow-lg backdrop-blur-xl sm:flex-row sm:text-left">
              <div>
                <p className="text-lg font-bold text-slate-950">
                  Not sure what treatment your smile needs?
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Let our specialized doctors craft a custom digital smile analysis.
                </p>
              </div>

              <MagneticHover>
                <a
                  href="#appointment"
                  className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 via-cyan-600 to-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40"
                >
                  Book Free Consultation
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </MagneticHover>
            </div>
          </FadeIn>

        </div>
      </div>
    </SectionWrapper>
  );
}

function TreatmentCard({
  treatment,
  active,
  onClick,
  mobile = false,
  delay = 0,
}: {
  treatment: (typeof treatments)[number];
  active: boolean;
  onClick: () => void;
  mobile?: boolean;
  delay?: number;
}) {
  const Icon = treatment.icon;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, scale: 1.02 }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-[1.75rem] border p-6 text-left backdrop-blur-xl transition-all duration-300 ${
        mobile ? "w-full" : "w-[275px]"
      } ${
        active
          ? "border-cyan-500 bg-cyan-50/70 shadow-[0_15px_35px_rgba(6,182,212,0.15)] ring-2 ring-cyan-500/30"
          : "border-slate-200/90 bg-white shadow-sm hover:border-cyan-300 hover:bg-white hover:shadow-md"
      }`}
    >
      {/* Decorative accent top right */}
      <div
        className={`absolute right-0 top-0 h-20 w-20 rounded-bl-[4rem] transition-colors duration-300 ${
          active ? "bg-cyan-500/15" : "bg-slate-50 group-hover:bg-cyan-50"
        }`}
      />

      {/* Icon */}
      <div
        className={`relative flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ${
          active
            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30 scale-105"
            : "bg-slate-100 text-slate-600 group-hover:bg-cyan-500 group-hover:text-white"
        }`}
      >
        <Icon size={23} strokeWidth={1.8} />
      </div>

      {/* Text */}
      <h3 className={`mt-5 font-display text-lg font-bold transition-colors ${active ? "text-cyan-800" : "text-slate-900 group-hover:text-cyan-600"}`}>
        {treatment.title}
      </h3>

      <p className="mt-1.5 font-sans text-xs leading-5 text-slate-500 line-clamp-2">
        {treatment.description}
      </p>

      <span
        className={`mt-4 inline-flex items-center gap-1.5 text-xs font-bold ${
          active ? "text-cyan-600" : "text-slate-500 group-hover:text-cyan-600"
        }`}
      >
        {active ? "Active Selection" : "View Treatment"}
        <ArrowUpRight
          size={14}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </motion.button>
  );
}