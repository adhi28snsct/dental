"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";

// Subtle film-grain texture, inlined as SVG so nothing external is fetched.
const GRAIN =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const imgScale = useTransform(scrollYProgress, [0, 0.25], [1, 1.12]);
  const imgY = useTransform(scrollYProgress, [0, 0.25], ["0%", "8%"]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0E1210] text-[#FAF9F6]">
      {/* ===================== FULL-BLEED NATURAL IMAGE (NO COLOR WASH) ===================== */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ scale: imgScale, y: imgY }} className="relative h-full w-full">
          <Image
            src="/hero.png"
            alt="DentArt clinic interior"
            fill
            priority
            quality={95}
            className="object-cover object-[65%_center]"
          />
        </motion.div>

        {/* Cinematic legibility scrims preserving true architectural photo lighting */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E1210] via-[#0E1210]/75 to-[#0E1210]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1210] via-transparent to-[#0E1210]/55" />
        {/* Film grain texture */}
        <div
          className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
          style={{ backgroundImage: `url("${GRAIN}")` }}
        />
      </div>

      {/* ===================== VERTICAL SPINE LABEL ===================== */}
      <div className="pointer-events-none absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
        <p
          className="whitespace-nowrap text-[11px] font-serif tracking-[0.3em] text-[#C9A24B]/80"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          STUDIO OF DENTAL ARTISTRY — COIMBATORE
        </p>
      </div>

      {/* ===================== MAIN CONTENT ===================== */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-20 pt-28 md:pt-36 lg:px-8 lg:pl-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } } }}
          className="max-w-2xl"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-serif text-lg italic text-[#C9A24B]"
          >
            Est. Coimbatore
          </motion.p>

          <div className="mt-5 overflow-hidden">
            <motion.h1
              variants={{ hidden: { y: "100%" }, visible: { y: "0%" } }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-3xl font-medium leading-[1.05] tracking-tight text-[#FAF9F6]/85 sm:text-4xl"
            >
              We don't rush
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              variants={{ hidden: { y: "100%" }, visible: { y: "0%" } }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-6xl font-medium leading-[1.02] tracking-tight text-[#FAF9F6] sm:text-7xl lg:text-8xl"
            >
              the art of a smile.
            </motion.h1>
          </div>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-8 max-w-md text-[15px] leading-7 text-[#FAF9F6]/75"
          >
            Digital diagnostics, painless technique, and clinicians who take the
            time to get it right — for veneers, implants, and everyday family
            dentistry alike.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center gap-8"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-sm bg-[#FAF9F6] px-7 py-3.5 text-sm font-medium tracking-wide text-[#0E1210] transition-colors hover:bg-white shadow-md"
            >
              <span>Book a consultation</span>
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#treatments"
              className="group inline-flex items-center gap-2 border-b border-[#FAF9F6]/50 pb-1 text-sm font-medium text-[#FAF9F6] transition-colors hover:border-[#FAF9F6] hover:text-white"
            >
              <span>See our treatments</span>
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-14 flex items-center gap-6 border-t border-white/15 pt-6"
          >
            <div className="flex items-center gap-1.5">
              <Star size={14} className="fill-[#C9A24B] text-[#C9A24B]" />
              <span className="text-sm font-medium text-[#FAF9F6]">4.9</span>
            </div>
            <span className="h-4 w-px bg-white/20" />
            <p className="text-sm text-[#FAF9F6]/70">
              Trusted by 5,000+ patients across Tamil Nadu
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* ===================== FLOATING POLAROID ===================== */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: -3 }}
        transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        className="absolute bottom-16 right-8 z-20 hidden w-48 rounded-sm border border-white/10 bg-[#FAF9F6] p-3 pb-4 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.6)] sm:block lg:right-16"
      >
        <div className="relative h-40 w-full overflow-hidden rounded-sm">
          <Image src="/doctor-1.jpg" alt="Dr. Elena Vance" fill className="object-cover object-top" />
        </div>
        <p className="mt-3 text-center font-serif text-[13px] italic text-[#14151A]">
          Dr. Elena Vance
        </p>
        <p className="text-center font-mono text-[10px] tracking-wide text-[#5B564E]">
          Chief Surgeon · 16 yrs
        </p>
      </motion.div>

      {/* ===================== SCROLL CUE ===================== */}
      <div className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="font-mono text-[10px] tracking-[0.25em] text-[#FAF9F6]/50">SCROLL</span>
        <motion.span
          animate={{ y: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="block h-10 w-px bg-gradient-to-b from-[#C9A24B] to-transparent"
        />
      </div>
    </section>
  );
}