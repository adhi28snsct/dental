"use client";

import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Users,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { FadeIn, FloatingElement, StaggerContainer, StaggerItem, Counter, MagneticHover } from "./MotionWrapper";

const features = [
  {
    icon: ShieldCheck,
    title: "Patient First",
    description:
      "Personalized care designed around your comfort, schedule, and unique dental needs.",
  },
  {
    icon: Sparkles,
    title: "Modern Technology",
    description:
      "Advanced 3D imaging and painless treatment equipment for precise results.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Experienced dental professionals committed to gentle, empathetic care.",
  },
];

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy handled silently
      });
    }
  }, []);

  const togglePlay = () => {
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

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <SectionWrapper
      className="bg-[#FAFCFF] py-24 text-slate-900 lg:py-32"
    >
      <div id="about" className="relative">
        {/* Background Ambient Glows */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-100/60 blur-[130px]"
        />

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-sky-100/60 blur-[130px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

            {/* =====================================================
                LEFT — VIDEO CONTAINER & FLOATING BADGES
            ====================================================== */}
            <FadeIn direction="right" duration={0.8} className="relative mx-auto w-full max-w-[560px]">
              {/* Rotating decorative geometric ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -left-8 top-10 h-36 w-36 rounded-full border-[12px] border-cyan-100 border-dashed pointer-events-none"
              />

              {/* Video Container with interactive play/pause and sound */}
              <div
                onClick={togglePlay}
                className="group relative z-10 overflow-hidden rounded-[2.5rem] bg-slate-950 border border-slate-200 shadow-[0_25px_60px_rgba(15,23,42,0.12)] cursor-pointer"
              >
                <video
                  ref={videoRef}
                  className="h-[540px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  preload="auto"
                >
                  <source src="/about-video.mp4" type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>

                {/* Ambient Video Vignette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                {/* Play / Pause / Sound Controls */}
                <div className="absolute top-5 right-5 z-20 flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white backdrop-blur-md transition hover:bg-cyan-500 hover:text-white"
                  >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>
                </div>

                {/* Play / Brand Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-full border border-white/20 bg-white/90 px-5 py-3 text-slate-900 backdrop-blur-md shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md">
                      {isPlaying ? (
                        <Pause size={15} className="fill-current" />
                      ) : (
                        <Play size={15} fill="currentColor" className="ml-0.5" />
                      )}
                    </div>

                    <div>
                      <p className="text-sm font-bold leading-tight text-slate-900">
                        Experience DentArt
                      </p>
                      <p className="text-[11px] text-slate-500 leading-tight">
                        {isPlaying ? "Click video to pause" : "Click video to play"}
                      </p>
                    </div>
                  </div>

                  <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider text-cyan-700 bg-cyan-100 px-3 py-1 rounded-full border border-cyan-200">
                    HD Tour
                  </span>
                </motion.div>
              </div>

              {/* Floating Experience Card */}
              <div className="absolute -bottom-7 -left-4 z-20 sm:-left-8">
                <FloatingElement amplitude={7} duration={5}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.12)] border border-slate-200/90 backdrop-blur-xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 font-bold text-2xl shadow-inner border border-cyan-200">
                      <Counter value={10} suffix="+" />
                    </div>

                    <div>
                      <p className="font-bold text-slate-900 leading-tight">
                        Years of
                      </p>
                      <p className="text-xs font-semibold text-cyan-600 leading-tight">
                        Trusted Care
                      </p>
                    </div>
                  </motion.div>
                </FloatingElement>
              </div>

              {/* Floating Trust Badge */}
              <div className="absolute -right-4 top-14 z-20 hidden sm:block">
                <FloatingElement amplitude={6} duration={4.5} delay={0.5}>
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    className="flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-4 py-2.5 shadow-[0_15px_35px_rgba(15,23,42,0.1)] backdrop-blur-xl text-slate-900"
                  >
                    <CheckCircle2 size={19} className="text-cyan-600" />
                    <span className="text-xs font-bold text-slate-800">
                      100% Certified Clinic
                    </span>
                  </motion.div>
                </FloatingElement>
              </div>
            </FadeIn>

            {/* =====================================================
                RIGHT — CONTENT & STAGGERED FEATURES
            ====================================================== */}
            <div>
              {/* Eyebrow */}
              <FadeIn direction="up">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-10 bg-cyan-500" />
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">
                    About DentArt
                  </span>
                </div>
              </FadeIn>

              {/* Heading */}
              <FadeIn direction="up" delay={0.1}>
                <h2 className="font-display max-w-xl text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-[54px]">
                  Where expertise{" "}
                  <br className="hidden sm:inline" />
                  meets{" "}
                  <span className="font-serif italic font-normal relative inline-block text-cyan-600">
                    compassionate care.
                    <motion.span
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.5 }}
                      className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full origin-left"
                    />
                  </span>
                </h2>
              </FadeIn>

              {/* Descriptions */}
              <FadeIn direction="up" delay={0.2}>
                <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 font-normal">
                  At DentArt, we believe dental care should be more than
                  just treatment. It is a personalized, stress-free
                  experience that empowers you to smile with total confidence.
                </p>

                <p className="mt-3 max-w-xl text-base leading-8 text-slate-600 font-normal">
                  Our specialized dental doctors combine modern clinical techniques,
                  painless workflows, and warm human care for individuals and families.
                </p>
              </FadeIn>

              {/* Staggered Features */}
              <StaggerContainer staggerDelay={0.15} delayChildren={0.3} className="mt-8 space-y-4">
                {features.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <StaggerItem key={feature.title}>
                      <motion.div
                        whileHover={{ x: 6 }}
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        className="group flex gap-4 rounded-2xl p-4 transition-all duration-200 bg-white border border-slate-200/80 hover:border-cyan-400 hover:shadow-md backdrop-blur-md"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white group-hover:shadow-md border border-cyan-100">
                          <Icon
                            size={22}
                            strokeWidth={1.8}
                          />
                        </div>

                        <div>
                          <h3 className="font-display font-bold text-slate-950 text-base group-hover:text-cyan-700 transition-colors">
                            {feature.title}
                          </h3>
                          <p className="mt-1 font-sans text-sm leading-6 text-slate-500">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>

              {/* CTA */}
              <FadeIn direction="up" delay={0.4}>
                <div className="mt-9 flex flex-wrap items-center gap-6">
                  <MagneticHover>
                    <a
                      href="#contact"
                      className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 via-cyan-600 to-blue-600 px-8 py-4 text-sm font-bold text-white shadow-[0_10px_25px_rgba(6,182,212,0.3)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(6,182,212,0.45)]"
                    >
                      <span>Discover Our Clinic</span>
                      <ArrowRight
                        size={17}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </a>
                  </MagneticHover>

                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-50 text-cyan-600 border border-cyan-200 shadow-sm">
                      <ShieldCheck size={22} />
                    </div>

                    <div>
                      <p className="text-xs text-slate-500">
                        Your smile is
                      </p>
                      <p className="text-sm font-bold text-slate-900">
                        In Safe Hands
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}