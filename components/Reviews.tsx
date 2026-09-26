"use client";

import Image from "next/image";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { FadeIn } from "./MotionWrapper";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Smile Transformation",
    image: "/reviews/patient-1.jpg",
    rating: 5,
    review:
      "The entire experience at DentArt was incredibly comfortable and unhurried. The team explained every step clearly and made me feel completely relaxed throughout my whole treatment.",
  },
  {
    id: 2,
    name: "Arun Kumar",
    role: "Dental Implants",
    image: "/reviews/patient-2.jpg",
    rating: 5,
    review:
      "I was anxious about getting a dental implant, but the doctors made the procedure entirely painless. My new tooth looks and feels completely indistinguishable from natural enamel.",
  },
  {
    id: 3,
    name: "Meera Krishnan",
    role: "Clear Aligners",
    image: "/reviews/patient-3.jpg",
    rating: 5,
    review:
      "The clinical team is compassionate, attentive, and deeply professional. I loved how they monitored my digital aligner progress every single week with photographic care.",
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 30 : -30,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 30 : -30,
    opacity: 0,
    transition: {
      duration: 0.25,
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
      id="reviews"
      variant="ornament"
      tone="light"
      className="bg-[#FFFFFF] py-24 text-[#000000] lg:py-36"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn direction="up">
            <p className="font-serif text-lg italic text-[#E10600]">
              Patient stories & reflections
            </p>

            <h2 className="mt-3 font-serif text-4xl font-medium leading-[1.12] tracking-tight text-[#000000] sm:text-5xl lg:text-6xl">
              Smiles that speak
              <br />
              for themselves.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-[#555555]">
              Candid reflections from individuals who trust our studio for healthy,
              harmonious, and lifelong dental care.
            </p>
          </FadeIn>
        </div>

        {/* ONE LARGE FEATURED QUOTE */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="rounded-sm border border-[#E5E5E5] bg-[#FFFFFF] p-8 sm:p-14">
            <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-6">
              <span className="font-serif text-4xl text-[#E10600] leading-none">“</span>

              <div className="flex items-center gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-[#E10600] text-[#E10600]"
                  />
                ))}
              </div>
            </div>

            {/* Featured Quote Text */}
            <div className="relative mt-8 min-h-[140px]">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={review.id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <p className="font-serif text-2xl font-normal leading-relaxed text-[#000000] sm:text-3xl sm:leading-[1.6]">
                    {review.review}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Author info & controls */}
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-[#E5E5E5] pt-8">
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-sm border border-[#E5E5E5]">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-serif text-lg font-medium text-[#000000]">
                    {review.name}
                  </p>
                  <p className="font-mono text-xs text-[#666666]">
                    {review.role} • Verified patient
                  </p>
                </div>
              </div>

              {/* Navigation controls */}
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5 mr-2">
                  {reviews.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => setPage([index, index > activeReview ? 1 : -1])}
                      aria-label={`View review ${index + 1}`}
                      className={`h-1.5 rounded-sm transition-all duration-300 ${
                        index === activeReview
                          ? "w-6 bg-[#E10600]"
                          : "w-2 bg-[#E5E5E5] hover:bg-[#000000]/30"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => paginate(-1)}
                  aria-label="Previous review"
                  className="flex h-9 w-9 items-center justify-center rounded-sm border border-[#E5E5E5] bg-[#FFFFFF] text-[#000000] transition-colors hover:border-[#E10600] hover:text-[#E10600]"
                >
                  <ChevronLeft size={16} />
                </button>

                <button
                  onClick={() => paginate(1)}
                  aria-label="Next review"
                  className="flex h-9 w-9 items-center justify-center rounded-sm border border-[#E5E5E5] bg-[#FFFFFF] text-[#000000] transition-colors hover:border-[#E10600] hover:text-[#E10600]"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SUPPORTING QUOTES BENEATH */}
        <div className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-3">
          {reviews.map((item, index) => {
            const isSelected = activeReview === index;

            return (
              <div
                key={item.id}
                onClick={() => setPage([index, index > activeReview ? 1 : -1])}
                className={`cursor-pointer rounded-sm border p-5 transition-colors duration-200 ${
                  isSelected
                    ? "border-[#E10600] bg-[#FFFFFF] shadow-sm"
                    : "border-[#E5E5E5] bg-[#FFFFFF] hover:border-[#000000]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className="font-serif text-sm font-medium text-[#000000]">
                    {item.name}
                  </p>
                  <span className="font-mono text-xs text-[#E10600]">
                    ★ 5.0
                  </span>
                </div>

                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#666666]">
                  “{item.review}”
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}