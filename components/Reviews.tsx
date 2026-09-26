"use client";

import Image from "next/image";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { FadeIn, FloatingElement, Counter } from "./MotionWrapper";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Smile Transformation",
    image: "/reviews/patient-1.jpg",
    rating: 5,
    review:
      "The entire experience at DentArt was incredibly comfortable and painless. The team explained everything clearly and made me feel completely relaxed throughout my whole treatment.",
  },
  {
    id: 2,
    name: "Arun Kumar",
    role: "Dental Implants",
    image: "/reviews/patient-2.jpg",
    rating: 5,
    review:
      "I was nervous about getting a dental implant, but the doctors made the whole process smooth and painless. My new tooth looks and feels completely natural!",
  },
  {
    id: 3,
    name: "Meera Krishnan",
    role: "Clear Aligners",
    image: "/reviews/patient-3.jpg",
    rating: 5,
    review:
      "The dental team is extremely friendly, compassionate, and professional. I loved how they monitored my digital aligner progress every single week.",
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut" as const,
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0,
    scale: 0.96,
    transition: {
      duration: 0.3,
      ease: "easeInOut" as const,
    },
  }),
};

export default function Reviews() {
  const [[activeReview, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    let nextIndex = activeReview + newDirection;
    if (nextIndex < 0) nextIndex = reviews.length - 1;
    if (nextIndex >= reviews.length) nextIndex = 0;
    setPage([nextIndex, newDirection]);
  };

  const review = reviews[activeReview];

  return (
    <SectionWrapper
      topVariant="none"
      variant="none"
      className="bg-[#F8FAFC] py-24 text-slate-900 lg:py-32"
    >
      <div id="reviews" className="relative">
        {/* Background Ambient Orbs */}
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-100/70 blur-[130px]"
        />

        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-100/60 blur-[130px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          {/* HEADER */}
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn direction="up">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-cyan-500" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">
                  Patient Stories & Experiences
                </span>
                <span className="h-px w-10 bg-cyan-500" />
              </div>

              <h2 className="font-display text-4xl font-extrabold leading-tight tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-6xl">
                Smiles that speak{" "}
                <br />
                <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  for themselves.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-7 text-slate-600">
                Real feedback and candid experiences from patients who trust
                DentArt for healthy, radiant, lifelong smiles.
              </p>
            </FadeIn>
          </div>

          {/* =====================================================
              REVIEW CAROUSEL WITH DIRECTIONAL ANIMATION
          ====================================================== */}
          <div className="relative mx-auto mt-16 max-w-6xl">

            {/* Floating Quote Badge */}
            <div className="absolute -left-4 -top-7 z-20 hidden lg:block">
              <FloatingElement amplitude={6} duration={4}>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl shadow-cyan-500/30">
                  <Quote size={28} fill="currentColor" />
                </div>
              </FloatingElement>
            </div>

            <div className="grid items-stretch gap-5 lg:grid-cols-[0.75fr_1.5fr_0.75fr]">

              {/* =================================================
                  LEFT PATIENT PREVIEW
              ================================================== */}
              <FadeIn direction="right" className="hidden flex-col justify-between rounded-[2rem] border border-slate-200/90 bg-white p-7 shadow-lg backdrop-blur-xl lg:flex">
                {(() => {
                  const prevPatient = reviews[(activeReview + reviews.length - 1) % reviews.length];
                  return (
                    <>
                      <div>
                        <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border-4 border-slate-100 shadow-md">
                          <Image
                            src={prevPatient.image}
                            alt={prevPatient.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="mt-5 text-center">
                          <p className="font-display font-bold text-slate-950">
                            {prevPatient.name}
                          </p>
                          <p className="mt-1 font-sans text-xs font-medium text-slate-500">
                            {prevPatient.role}
                          </p>
                        </div>
                      </div>

                      <div className="mt-8 flex justify-center gap-1">
                        {[...Array(5)].map((_, index) => (
                          <Star
                            key={index}
                            size={15}
                            fill="currentColor"
                            className="text-amber-400"
                          />
                        ))}
                      </div>
                    </>
                  );
                })()}
              </FadeIn>

              {/* =================================================
                  FEATURED ACTIVE REVIEW CARD (ANIMATED SLIDER)
              ================================================== */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white px-7 py-9 text-slate-900 shadow-[0_20px_60px_rgba(15,23,42,0.12)] sm:px-10 sm:py-12 lg:px-12 border border-slate-200/90 backdrop-blur-2xl">

                {/* Ambient Internal Glows */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-100/50 blur-[90px]" />
                <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-100/40 blur-[90px]" />

                {/* Card Top: Quote Icon + Star Rating */}
                <div className="relative flex items-center justify-between z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 border border-cyan-200">
                    <Quote size={22} />
                  </div>

                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.08 }}
                      >
                        <Star
                          size={18}
                          fill="currentColor"
                          className="text-amber-400"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Animated Review Quote Text */}
                <div className="relative mt-8 min-h-[120px] z-10">
                  <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                      key={review.id}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                    >
                      <p className="font-serif text-lg font-normal italic leading-relaxed text-slate-900 sm:text-2xl sm:leading-[1.65]">
                        “{review.review}”
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Animated Patient Info Row */}
                <div className="relative mt-8 flex items-center justify-between border-t border-slate-100 pt-6 z-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={review.id}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 15 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-4"
                    >
                      <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-cyan-400 shadow-md">
                        <Image
                          src={review.image}
                          alt={review.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <p className="font-bold text-slate-950 text-base">
                          {review.name}
                        </p>
                        <p className="mt-0.5 text-xs text-slate-500">
                          {review.role}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="hidden text-right sm:block">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">
                      Verified Patient
                    </p>
                    <p className="mt-0.5 text-lg font-bold text-cyan-600">
                      {review.rating}.0 / 5.0
                    </p>
                  </div>
                </div>

                {/* Interactive Controls & Navigation */}
                <div className="relative mt-8 flex items-center justify-between z-10 pt-2">
                  {/* Indicator Pills */}
                  <div className="flex gap-2">
                    {reviews.map((item, index) => (
                      <button
                        key={item.id}
                        onClick={() => setPage([index, index > activeReview ? 1 : -1])}
                        aria-label={`View review ${index + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === activeReview
                            ? "w-8 bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_10px_rgba(6,182,212,0.4)]"
                            : "w-2 bg-slate-200 hover:bg-slate-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Prev / Next Arrows */}
                  <div className="flex gap-2.5">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => paginate(-1)}
                      aria-label="Previous review"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-cyan-500 hover:bg-cyan-500 hover:text-white hover:shadow-md"
                    >
                      <ChevronLeft size={18} />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => paginate(1)}
                      aria-label="Next review"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-cyan-500 hover:bg-cyan-500 hover:text-white hover:shadow-md"
                    >
                      <ChevronRight size={18} />
                    </motion.button>
                  </div>
                </div>

              </div>

              {/* =================================================
                  RIGHT PATIENT PREVIEW
              ================================================== */}
              <FadeIn direction="left" className="hidden flex-col justify-between rounded-[2rem] border border-slate-200/90 bg-white p-7 shadow-lg backdrop-blur-xl lg:flex">
                {(() => {
                  const nextPatient = reviews[(activeReview + 1) % reviews.length];
                  return (
                    <>
                      <div>
                        <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border-4 border-slate-100 shadow-md">
                          <Image
                            src={nextPatient.image}
                            alt={nextPatient.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="mt-5 text-center">
                          <p className="font-bold text-slate-950">
                            {nextPatient.name}
                          </p>
                          <p className="mt-1 text-xs font-medium text-slate-500">
                            {nextPatient.role}
                          </p>
                        </div>
                      </div>

                      <div className="mt-8 flex justify-center gap-1">
                        {[...Array(5)].map((_, index) => (
                          <Star
                            key={index}
                            size={15}
                            fill="currentColor"
                            className="text-amber-400"
                          />
                        ))}
                      </div>
                    </>
                  );
                })()}
              </FadeIn>

            </div>

          </div>

          {/* TRUST BAR */}
          <FadeIn direction="up" delay={0.25}>
            <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-4 rounded-full border border-slate-200/90 bg-white px-8 py-5 shadow-lg backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {reviews.map((patient) => (
                    <div
                      key={patient.id}
                      className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white shadow-sm"
                    >
                      <Image
                        src={patient.image}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-950">
                    <Counter value={5} suffix="K+ Patients" />
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Trusted by local families
                  </p>
                </div>
              </div>

              <div className="hidden h-8 w-px bg-slate-200 sm:block" />

              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={15}
                      fill="currentColor"
                      className="text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-sm font-bold text-slate-950">
                  4.9 / 5.0 Rating
                </p>
              </div>

              <div className="hidden h-8 w-px bg-slate-200 sm:block" />

              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse" />
                <p className="text-sm font-semibold text-slate-700">
                  100% Patient Comfort
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </SectionWrapper>
  );
}