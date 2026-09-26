"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Phone,
  ShieldCheck,
  Sparkles,
  Smile,
  Star,
  Stethoscope,
  Menu,
  X,
  Layers,
  Video,
} from "lucide-react";
import { Counter, MagneticHover } from "./MotionWrapper";

const heroSlides = [
  {
    id: 1,
    type: "image" as const,
    src: "/hero.png",
    label: "Gentle Family Care",
    tagline: "Pain-free pediatric & family dentistry",
    pillBadge: "01 • Family Care",
  },
  {
    id: 2,
    type: "image" as const,
    src: "/services/cosmetic-dentistry.jpg",
    label: "Cosmetic Veneers",
    tagline: "Digital smile design & porcelain artistry",
    pillBadge: "02 • Cosmetic Art",
  },
  {
    id: 3,
    type: "image" as const,
    src: "/treatments/dental-implants.jpg",
    label: "Dental Implants",
    tagline: "Permanent biocompatible titanium restorations",
    pillBadge: "03 • Implants",
  },
  {
    id: 4,
    type: "video" as const,
    src: "/about-video.mp4",
    label: "Live Clinic Tour",
    tagline: "4K Hospital-grade surgical operatory suite",
    pillBadge: "04 • Video Tour",
  },
];

const services = [
  {
    icon: Smile,
    title: "General",
    subtitle: "Dentistry",
    href: "#services",
  },
  {
    icon: Stethoscope,
    title: "Orthodontics",
    subtitle: "",
    href: "#services",
  },
  {
    icon: ShieldCheck,
    title: "Dental",
    subtitle: "Implants",
    href: "#services",
  },
  {
    icon: Sparkles,
    title: "Cosmetic",
    subtitle: "Dentistry",
    href: "#services",
  },
];

const navItems = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Doctors", href: "#doctors" },
  { label: "Master Lab", href: "#laboratory" },
  { label: "Services", href: "#services" },
  { label: "Treatments", href: "#treatments" },
  { label: "Roadmap", href: "#technology" },
  { label: "Testimonials", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentSlide = heroSlides[activeSlideIndex];

  // Auto slide rotation every 7 seconds (if video is not currently focused by user)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handleVideoToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0A0F1D] text-white">

      {/* =====================================================
          DYNAMIC HERO BACKGROUND (3 IMAGES + CLINIC VIDEO)
      ====================================================== */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          {currentSlide.type === "video" ? (
            <motion.div
              key="hero-video-slide"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative h-full w-full"
            >
              <video
                ref={videoRef}
                src={currentSlide.src}
                autoPlay
                muted={isMuted}
                loop
                playsInline
                className="h-full w-full object-cover object-center"
              />
            </motion.div>
          ) : (
            <motion.div
              key={`hero-img-${currentSlide.id}`}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="relative h-full w-full"
            >
              <Image
                src={currentSlide.src}
                alt={currentSlide.label}
                fill
                priority
                className="object-cover object-center"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* High-Contrast Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFCFF] via-transparent to-black/40" />

        {/* Dynamic ambient animated glow */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.15, 0.3, 0.15],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute left-[25%] top-[25%] h-[550px] w-[550px] rounded-full bg-cyan-500/20 blur-[150px]"
        />

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="pointer-events-none absolute right-[10%] top-[10%] h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[140px]"
        />
      </div>

      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-40 mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8"
      >
        {/* Logo */}
        <a href="#" className="group flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 border border-cyan-400/40 backdrop-blur-md shadow-sm"
          >
            <Smile
              size={30}
              strokeWidth={1.8}
              className="text-cyan-300"
            />
          </motion.div>

          <div>
            <div className="text-2xl font-bold tracking-tight">
              <span className="font-display font-black text-white">Dent</span>
              <span className="font-serif italic font-normal text-cyan-400">Art</span>
            </div>
            <p className="-mt-1 text-[10px] tracking-wider uppercase text-cyan-200/80 font-semibold">
              Restorative • Cosmetic • Implants
            </p>
          </div>
        </a>

        {/* Navigation Desktop */}
        <nav className="hidden items-center gap-1 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl shadow-lg md:flex">
          {navItems.map((item) => {
            const isActive = activeNav === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveNav(item.label)}
                className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wider transition-colors duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-slate-200 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-cyan-500/30 border border-cyan-400/50 shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Call & Book Appointment Quick Widget */}
        <div className="flex items-center gap-3">
          <MagneticHover>
            <a
              href="tel:+919876543210"
              className="hidden items-center gap-3 rounded-full bg-white/15 border border-white/25 px-5 py-2.5 text-white shadow-lg transition hover:border-cyan-400 sm:flex group backdrop-blur-md"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-sm animate-ripple">
                <Phone size={15} />
              </span>

              <span className="text-left">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-cyan-200 font-semibold">
                  BOOK APPOINTMENT
                </span>
                <span className="block text-xs font-bold text-white">
                  +91 98765 43210
                </span>
              </span>
            </a>
          </MagneticHover>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md md:hidden"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-40 border-b border-slate-200 bg-white px-6 py-6 shadow-2xl md:hidden text-slate-900"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-slate-800 hover:bg-slate-50"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 font-bold text-white shadow-lg"
              >
                Book an Appointment
                <ArrowRight size={17} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          HERO CONTENT + 4-MODE SLIDE SWITCHER
      ====================================================== */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex min-h-[660px] flex-col justify-between pt-10 pb-36 lg:flex-row lg:items-center lg:pt-0">
          
          {/* LEFT: MAIN HEADLINE & ACTIONS */}
          <div className="max-w-[650px]">

            {/* Active Mode Pill */}
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-950/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)]"
            >
              {currentSlide.type === "video" ? (
                <Video size={13} className="text-cyan-400 animate-pulse" />
              ) : (
                <Sparkles size={13} className="text-cyan-400" />
              )}
              <span>{currentSlide.label}</span>
              <span className="text-cyan-400/50">•</span>
              <span className="text-slate-300 font-normal">{currentSlide.tagline}</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-display text-5xl font-extrabold leading-[0.96] tracking-[-0.03em] text-white sm:text-6xl lg:text-[78px]"
            >
              Modern Care
              <br />
              <span className="font-sans font-light text-white/85">for a </span>
              <span className="font-serif italic font-medium relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-cyan-100 drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]">
                Perfect
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                />
              </span>
              <br />
              <span className="font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-200">
                Smile
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-7 max-w-[530px] font-sans text-base font-normal leading-relaxed text-slate-200/90 sm:text-lg"
            >
              From routine checkups to advanced aesthetic transformations, we provide
              personalized dental care for your whole family in a serene, modern environment.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <MagneticHover>
                <a
                  href="#appointment"
                  className="group relative inline-flex items-center justify-center gap-4 overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 px-8 py-4 font-bold text-slate-950 shadow-[0_12px_35px_rgba(6,182,212,0.4)] transition-all duration-300 hover:shadow-[0_16px_45px_rgba(6,182,212,0.6)]"
                >
                  <span className="relative z-10">Book an Appointment</span>
                  <ArrowRight
                    size={19}
                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                  {/* Shimmer sweep */}
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                </a>
              </MagneticHover>

              <motion.a
                href="#about"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-950/40 px-7 py-4 font-semibold text-white backdrop-blur-md transition hover:border-cyan-400/60 hover:bg-cyan-500/15"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-sm group-hover:scale-110 transition-transform">
                  <Play size={11} fill="currentColor" className="ml-0.5" />
                </span>
                Watch Our Story
              </motion.a>
            </motion.div>

            {/* Stats Counter Bar */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-11 flex flex-wrap items-center gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md max-w-fit"
            >
              {/* Patients */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {["/doctor-1.jpg", "/doctor-2.jpg", "/doctor-3.jpg"].map(
                    (src, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.15 }}
                        className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[#171717] shadow-md bg-slate-800"
                      >
                        <Image
                          src={src}
                          alt="Doctor avatar"
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    )
                  )}
                </div>

                <div>
                  <p className="font-display text-2xl font-extrabold leading-tight text-white tracking-tight">
                    <Counter value={5} suffix="K+" />
                  </p>
                  <p className="text-[11px] font-medium text-white/60">Happy Patients</p>
                </div>
              </div>

              <div className="h-8 w-px bg-white/15" />

              {/* Experience */}
              <div>
                <p className="font-display text-2xl font-extrabold leading-tight text-white tracking-tight">
                  <Counter value={10} suffix="+" />
                </p>
                <p className="text-[11px] font-medium text-white/60">Years Experience</p>
              </div>

              <div className="h-8 w-px bg-white/15" />

              {/* Rating */}
              <div className="flex items-center gap-2.5">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Star
                    size={24}
                    fill="currentColor"
                    className="text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]"
                  />
                </motion.div>

                <div>
                  <p className="font-display text-2xl font-extrabold leading-tight text-white tracking-tight">
                    <Counter value={4.9} decimals={1} />
                  </p>
                  <p className="text-[11px] font-medium text-white/60">Patient Rating</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: INTERACTIVE 4-SLIDE MEDIA SWITCHER (3 IMAGES + VIDEO) */}
          <div className="mt-12 lg:mt-0 flex flex-col items-end gap-3 z-30">
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/60 p-1.5 backdrop-blur-xl shadow-2xl">
              {heroSlides.map((slide, idx) => {
                const isActive = activeSlideIndex === idx;

                return (
                  <button
                    key={slide.id}
                    onClick={() => setActiveSlideIndex(idx)}
                    className={`group relative flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 scale-105"
                        : "text-slate-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {slide.type === "video" ? (
                      <Video size={13} className={isActive ? "text-white" : "text-cyan-400"} />
                    ) : (
                      <span className={`h-2 w-2 rounded-full ${isActive ? "bg-white animate-pulse" : "bg-cyan-400"}`} />
                    )}
                    <span>{slide.pillBadge}</span>
                  </button>
                );
              })}
            </div>

            {/* Video Controls (When Video Slide is Active) */}
            {currentSlide.type === "video" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-1.5 text-xs text-white backdrop-blur-md"
              >
                <button
                  onClick={handleVideoTogglePlay}
                  className="flex items-center gap-1 text-cyan-300 hover:text-white font-semibold"
                >
                  {isPlaying ? <Pause size={13} /> : <Play size={13} />}
                  <span>{isPlaying ? "Pause Tour" : "Play Tour"}</span>
                </button>
                <span className="h-3 w-px bg-white/20" />
                <button
                  onClick={handleVideoToggleMute}
                  className="flex items-center gap-1 text-cyan-300 hover:text-white font-semibold"
                >
                  {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
                  <span>{isMuted ? "Unmute Sound" : "Muted"}</span>
                </button>
              </motion.div>
            )}
          </div>

        </div>
      </div>

      {/* =====================================================
          BOTTOM WHITE WAVE
      ====================================================== */}
      <div className="absolute bottom-[-1px] left-0 z-20 w-full">
        <svg
          viewBox="0 0 1440 240"
          className="h-[170px] w-full lg:h-[210px]"
          preserveAspectRatio="none"
        >
          <path
            d="
              M0 95
              C160 190 270 160 390 135
              C540 105 650 105 780 135
              C930 170 1030 180 1150 140
              C1280 95 1350 80 1440 20
              L1440 240
              L0 240
              Z
            "
            fill="#FAFCFF"
          />
        </svg>
      </div>

      {/* =====================================================
          HERO SERVICE CARDS (FROSTED PORCELAIN GLASS STRIP)
      ====================================================== */}
      <div className="absolute bottom-[-10px] left-1/2 z-30 hidden w-full max-w-7xl -translate-x-1/2 px-6 lg:block">
        <div className="flex justify-end gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.a
                key={service.title}
                href={service.href}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 1 + index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 45px rgba(6,182,212,0.18)",
                }}
                className="group flex h-[150px] w-[150px] flex-col items-center justify-center rounded-2xl bg-white/95 backdrop-blur-xl p-5 text-center text-slate-900 shadow-[0_15px_40px_rgba(15,23,42,0.08)] border border-slate-200/90 transition-all duration-300 hover:border-cyan-400"
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white group-hover:shadow-md">
                  <Icon
                    size={22}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <p className="text-sm font-bold leading-tight text-slate-900 group-hover:text-cyan-700 transition-colors">
                  {service.title}
                </p>

                {service.subtitle && (
                  <p className="text-xs font-semibold text-slate-500">
                    {service.subtitle}
                  </p>
                )}

                <span className="mt-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors duration-300 group-hover:bg-cyan-500 group-hover:text-white">
                  <ArrowRight size={11} />
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* Mobile service strip */}
      <div className="relative z-30 grid grid-cols-2 gap-3 bg-[#FAFCFF] px-6 py-8 lg:hidden border-t border-slate-200">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.a
              key={service.title}
              href={service.href}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-center text-slate-900 shadow-sm transition hover:border-cyan-400"
            >
              <Icon
                size={24}
                className="mx-auto mb-2 text-cyan-600"
              />
              <p className="text-sm font-semibold text-slate-900">
                {service.title}
              </p>
              {service.subtitle && (
                <p className="text-xs text-slate-500">
                  {service.subtitle}
                </p>
              )}
            </motion.a>
          );
        })}
      </div>

    </section>
  );
}