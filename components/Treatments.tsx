"use client";

import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  ScanLine,
  Stethoscope,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { FadeIn } from "./MotionWrapper";

const treatments = [
  {
    id: 1,
    title: "Teeth Whitening",
    description: "Brighten your natural smile up to 8 shades in a single safe, gentle session.",
    image: "/treatments/teeth-whitening.jpg",
    icon: Sparkles,
  },
  {
    id: 2,
    title: "Dental Implants",
    description: "Restore your complete smile with permanent, natural-feeling implants and zirconia fixtures.",
    image: "/treatments/dental-implants.jpg",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Clear Aligners",
    description: "Discreet orthodontic trays designed to straighten teeth comfortably and predictably.",
    image: "/treatments/clear-aligners.jpg",
    icon: ScanLine,
  },
  {
    id: 4,
    title: "Root Canal Therapy",
    description: "Microscopic restorative therapy to relieve pain and preserve your natural tooth structure.",
    image: "/treatments/root-canal.jpg",
    icon: Stethoscope,
  },
];

export default function Treatments() {
  const [activeTreatment, setActiveTreatment] = useState(treatments[0]);

  return (
    <SectionWrapper
      id="treatments"
      variant="ornament"
      tone="light"
      className="bg-[#FFFFFF] py-24 text-[#000000] lg:py-36"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn direction="up">
            <p className="font-serif text-lg italic text-[#E10600]">
              Specialized disciplines
            </p>

            <h2 className="mt-3 font-serif text-4xl font-medium leading-[1.12] tracking-tight text-[#000000] sm:text-5xl lg:text-6xl">
              Everything your
              <br />
              smile needs.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-[#555555]">
              From simple restorative care to full cosmetic transformations,
              our specialized procedures ensure comfort, precision, and lasting results.
            </p>
          </FadeIn>
        </div>

        {/* SMILE ARC / SHOWCASE LAYOUT */}
        <div className="relative mx-auto mt-16 max-w-6xl">
          {/* Subtle guide curve */}
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-[25%] hidden h-[380px] rounded-[50%] border-b border-[#E5E5E5] lg:block" />

          {/* =================================================
              DESKTOP INTERACTIVE LAYOUT
          ================================================== */}
          <div className="relative hidden min-h-[640px] lg:block">
            {/* Top left card */}
            <div className="absolute left-[4%] top-0 z-20">
              <TreatmentCard
                treatment={treatments[0]}
                active={activeTreatment.id === treatments[0].id}
                onClick={() => setActiveTreatment(treatments[0])}
                delay={0.05}
              />
            </div>

            {/* Top right card */}
            <div className="absolute right-[4%] top-0 z-20">
              <TreatmentCard
                treatment={treatments[1]}
                active={activeTreatment.id === treatments[1].id}
                onClick={() => setActiveTreatment(treatments[1])}
                delay={0.1}
              />
            </div>

            {/* Bottom left card */}
            <div className="absolute bottom-4 left-[12%] z-20">
              <TreatmentCard
                treatment={treatments[2]}
                active={activeTreatment.id === treatments[2].id}
                onClick={() => setActiveTreatment(treatments[2])}
                delay={0.15}
              />
            </div>

            {/* Bottom right card */}
            <div className="absolute bottom-4 right-[12%] z-20">
              <TreatmentCard
                treatment={treatments[3]}
                active={activeTreatment.id === treatments[3].id}
                onClick={() => setActiveTreatment(treatments[3])}
                delay={0.2}
              />
            </div>

            {/* =================================================
                CENTER SPOTLIGHT PANEL
            ================================================== */}
            <div className="absolute left-1/2 top-[80px] -translate-x-1/2 z-10">
              <div className="relative h-[360px] w-[500px] overflow-hidden rounded-sm border border-[#E5E5E5] bg-[#000000] shadow-sm">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTreatment.id}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
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

                {/* Dark gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/95 via-[#000000]/50 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-end px-10 pb-8 text-center z-10 text-[#FFFFFF]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTreatment.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center"
                    >
                      <span className="font-mono text-xs uppercase tracking-wider text-[#E10600]">
                        Active discipline
                      </span>

                      <h3 className="mt-1 font-serif text-3xl font-medium tracking-tight text-[#FFFFFF]">
                        {activeTreatment.title}
                      </h3>

                      <p className="mt-2 max-w-[340px] text-xs leading-relaxed text-[#FFFFFF]/80">
                        {activeTreatment.description}
                      </p>

                      <a
                        href="#appointment"
                        className="mt-5 inline-flex items-center gap-2 rounded-sm bg-[#E10600] px-6 py-2.5 text-xs font-medium tracking-wide text-white transition-colors hover:bg-[#FF2A24]"
                      >
                        <span>Book consultation</span>
                        <ArrowRight size={13} />
                      </a>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              MOBILE LAYOUT
          ================================================== */}
          <div className="lg:hidden">
            <div className="overflow-hidden rounded-sm border border-[#E5E5E5] bg-[#FFFFFF]">
              <div className="relative h-[220px]">
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/85 via-transparent to-transparent" />
              </div>

              <div className="p-6 text-center">
                <span className="font-mono text-xs uppercase tracking-wider text-[#E10600]">
                  Featured procedure
                </span>

                <h3 className="mt-1 font-serif text-2xl font-medium text-[#000000]">
                  {activeTreatment.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#555555]">
                  {activeTreatment.description}
                </p>

                <div className="mt-5">
                  <a
                    href="#appointment"
                    className="inline-flex items-center gap-2 rounded-sm bg-[#E10600] px-6 py-2.5 text-xs font-medium tracking-wide text-white transition-colors hover:bg-[#FF2A24]"
                  >
                    <span>Book consultation</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Treatment Buttons */}
            <div className="mt-4 grid grid-cols-2 gap-3">
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
        <FadeIn direction="up" delay={0.2}>
          <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center justify-between gap-6 rounded-sm border border-[#E5E5E5] bg-[#FFFFFF] px-8 py-7 text-center sm:flex-row sm:text-left">
            <div>
              <p className="font-serif text-xl font-medium text-[#000000]">
                Unsure which treatment fits your smile?
              </p>
              <p className="mt-1 text-sm text-[#666666]">
                Let our clinical masters conduct a 3D digital diagnosis and evaluation.
              </p>
            </div>

            <a
              href="#appointment"
              className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-[#E10600] px-7 py-3 text-xs font-medium tracking-wide text-white transition-colors hover:bg-[#FF2A24]"
            >
              <span>Schedule digital analysis</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </FadeIn>
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
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      onClick={onClick}
      className={`group relative rounded-sm border p-5 sm:p-6 text-left transition-colors duration-200 ${
        mobile ? "w-full" : "w-[270px]"
      } ${
        active
          ? "border-[#E10600] bg-[#FFFFFF] shadow-sm"
          : "border-[#E5E5E5] bg-[#FFFFFF] hover:border-[#000000]"
      }`}
    >
      {/* Icon */}
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-sm transition-colors ${
          active
            ? "bg-[#E10600] text-white"
            : "border border-[#E5E5E5] bg-[#FFFFFF] text-[#555555] group-hover:border-[#E10600] group-hover:text-[#E10600]"
        }`}
      >
        <Icon size={18} />
      </div>

      {/* Text */}
      <h3 className={`mt-4 font-serif text-lg font-medium transition-colors ${
        active ? "text-[#E10600]" : "text-[#000000] group-hover:text-[#E10600]"
      }`}>
        {treatment.title}
      </h3>

      <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[#666666]">
        {treatment.description}
      </p>

      <span
        className={`mt-4 inline-flex items-center gap-1.5 font-mono text-xs transition-colors ${
          active ? "text-[#E10600] font-semibold" : "text-[#666666] group-hover:text-[#E10600]"
        }`}
      >
        <span>{active ? "Active discipline" : "View procedure"}</span>
        <ArrowRight size={12} />
      </span>
    </motion.button>
  );
}