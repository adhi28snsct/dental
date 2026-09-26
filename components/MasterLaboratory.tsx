"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

interface WellnessItem {
  id: string;
  title: string;
  description: string;
}

const WELLNESS_DATA: WellnessItem[] = [
  {
    id: "wand-anesthesia",
    title: "Computerized single-tooth anesthesia",
    description:
      "Computer-controlled STA technology precisely numbs only the specific tooth under care. You walk out with zero facial drooping, zero speech impairment, and zero lingering numbness.",
  },
  {
    id: "twilight-sedation",
    title: "Customized twilight sleep & IV sedation",
    description:
      "Administered by board-certified dental anesthesiologists, twilight sedation gently induces a peaceful state of calm. You remain serenely asleep through full-mouth reconstructions and awake feeling refreshed.",
  },
  {
    id: "sensory-sanctuary",
    title: "Acoustic sanctuary & sensory suite",
    description:
      "Each private suite is acoustically isolated — natural oak baffles, noise-cancelling spatial audio, cashmere blankets, and calming aromatherapy that eliminate clinical anxiety.",
  },
];

export default function MasterLaboratory() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.45;
      itemRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;
        if (scrollPos >= top && scrollPos <= bottom) {
          setActiveTab(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <SectionWrapper
        id="laboratory"
        variant="ornament"
        tone="dark"
        className="relative w-full py-24 sm:py-36 bg-[#0E1210] text-[#FAF9F6] overflow-hidden"
      >
        {/* PARALLAX BACKGROUND IMAGE (NATURAL LIGHTING, NO COLOR WASH) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <motion.div
            style={{ y: imageY }}
            className="relative w-full h-[128%] will-change-transform"
          >
            <Image
              src="/wellness_suite.jpg"
              alt="DentArt Painless Sleep Dentistry Suite"
              fill
              priority
              quality={95}
              sizes="100vw"
              className="object-cover object-top"
            />
          </motion.div>

          {/* Cinematic legibility scrims preserving authentic suite interior */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E1210]/95 via-[#0E1210]/75 to-[#0E1210]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1210] via-transparent to-[#0E1210]/60" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 px-6 lg:px-8">
          {/* HEADER */}
          <div className="mb-16 border-b border-white/10 pb-8">
            <p className="font-serif text-lg italic text-[#C9A24B]">
              Painless dentistry
            </p>
            <h2 className="mt-3 max-w-xl font-serif text-4xl font-medium leading-[1.12] tracking-tight text-[#FAF9F6] sm:text-5xl lg:text-6xl">
              Zero anxiety,
              <br />
              effortless comfort.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-7 text-[#FAF9F6]/70">
              Transforming dental appointments into a serene, restorative
              retreat with precision anesthesia and personalised sedation.
            </p>
          </div>

          {/* CONTENT — SCROLL-LINKED LIST */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left sticky callout */}
            <div className="col-span-1 lg:col-span-4 lg:sticky lg:top-36">
              <p className="font-serif text-sm italic text-[#C9A24B]">
                Three pillars of calm
              </p>
              <p className="mt-3 text-sm leading-7 text-[#FAF9F6]/60 max-w-sm">
                Each element of our painless protocol is designed so the chair
                feels less like a clinic and more like a place you actually
                want to be.
              </p>
              <div className="mt-6 h-px w-16 bg-[#C9A24B]/40" />
            </div>

            {/* Right — numbered items */}
            <div className="col-span-1 lg:col-span-8 space-y-16">
              {WELLNESS_DATA.map((item, index) => {
                const isActive = activeTab === index;
                return (
                  <div
                    key={item.id}
                    ref={(el) => {
                      if (el) itemRefs.current[index] = el;
                    }}
                    onClick={() => setActiveTab(index)}
                    className={`group relative border-b border-white/10 pb-10 transition-opacity duration-500 cursor-pointer ${
                      isActive ? "opacity-100" : "opacity-40 hover:opacity-75"
                    }`}
                  >
                    <div className="flex items-start gap-6">
                      {/* Numeral */}
                      <span
                        className={`font-serif text-5xl font-medium leading-none transition-colors duration-500 ${
                          isActive ? "text-[#C9A24B]" : "text-white/20"
                        }`}
                      >
                        {index + 1}
                      </span>

                      <div className="flex-1 pt-1">
                        <h3 className={`font-serif text-2xl font-medium leading-snug tracking-tight sm:text-3xl transition-colors ${
                          isActive ? "text-[#FAF9F6]" : "text-[#FAF9F6]/70"
                        }`}>
                          {item.title}
                        </h3>
                        <p className="mt-3 max-w-xl text-sm leading-7 text-[#FAF9F6]/60">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
