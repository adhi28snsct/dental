"use client";

import { ArrowRight, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { FadeIn, MagneticHover, Counter } from "./MotionWrapper";

const features = [
  {
    title: "Patient first",
    description:
      "Every plan is built around your comfort, your schedule, and what you actually want from your smile.",
  },
  {
    title: "Modern technique",
    description:
      "3D imaging and painless instrumentation, used in service of precision — not as a selling point.",
  },
  {
    title: "A steady hand",
    description:
      "Experienced clinicians who explain what they're doing and why, at every step.",
  },
];

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <SectionWrapper id="about" variant="ornament" tone="light" className="bg-[#FFFFFF] py-24 text-[#000000] lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* ============ LEFT — FRAMED VIDEO, ONE QUIET DETAIL ============ */}
          <FadeIn direction="right" duration={0.7} className="relative mx-auto w-full max-w-[520px] lg:mx-0">
            <div
              onClick={togglePlay}
              className="group relative cursor-pointer overflow-hidden rounded-sm border border-black/15 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.15)]"
              style={{ aspectRatio: "4 / 5" }}
            >
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                autoPlay
                muted={isMuted}
                loop
                playsInline
                preload="auto"
              >
                <source src="/about-video.mp4" type="video/mp4" />
              </video>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#000000]/70 via-transparent to-transparent" />

              <button
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-sm border border-white/30 bg-[#000000]/50 text-white backdrop-blur-sm transition hover:border-white/60"
              >
                {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
              </button>

              <div className="absolute bottom-5 left-5 flex items-center gap-3 text-white">
                <div className="flex h-9 w-9 items-center justify-center rounded-sm border border-white/40">
                  {isPlaying ? <Pause size={13} /> : <Play size={13} className="ml-0.5" />}
                </div>
                <p className="text-xs tracking-wide">
                  {isPlaying ? "Inside the clinic — tap to pause" : "Tap to resume"}
                </p>
              </div>
            </div>

            {/* Single restrained floating detail — clean hairline frame, white card panel */}
            <div className="absolute -bottom-8 -right-6 hidden rounded-sm border border-black/15 bg-[#FFFFFF] px-6 py-5 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.12)] sm:block">
              <p className="font-serif text-3xl leading-none text-[#E10600]">
                <Counter value={10} suffix="+" />
              </p>
              <p className="mt-1.5 font-mono text-[11px] tracking-wide text-[#666666]">
                Years in practice
              </p>
            </div>
          </FadeIn>

          {/* ============ RIGHT — CONTENT ============ */}
          <div>
            <FadeIn direction="up">
              <p className="font-serif text-lg italic text-[#E10600]">About DentArt</p>
              <h2 className="mt-3 max-w-xl font-serif text-4xl font-medium leading-[1.12] tracking-tight text-[#000000] sm:text-5xl">
                Dentistry, practiced the way a craft should be — unhurried, exact,
                and considerate of the person in the chair.
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.12}>
              <p className="mt-7 max-w-lg text-[15px] leading-8 text-[#555555]">
                We think of care as more than treatment. It's a relationship built
                on clear explanations, gentle pacing, and results you can trust —
                for one visit or for a lifetime of them.
              </p>
            </FadeIn>

            {/* Feature list — hairline rules, not bordered hover-cards */}
            <div className="mt-10 divide-y divide-[#E5E5E5] border-t border-[#E5E5E5]">
              {features.map((feature, i) => (
                <FadeIn key={feature.title} direction="up" delay={0.16 + i * 0.06}>
                  <div className="flex items-baseline gap-6 py-5">
                    <span className="font-mono text-sm font-semibold text-[#E10600]">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg font-medium text-[#000000]">
                        {feature.title}
                      </h3>
                      <p className="mt-1 max-w-md text-sm leading-6 text-[#555555]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn direction="up" delay={0.4}>
              <div className="mt-10">
                <MagneticHover>
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-3 border-b border-[#000000] pb-1 text-sm font-medium text-[#000000] transition-colors hover:border-[#E10600] hover:text-[#E10600]"
                  >
                    <span>Discover our clinic</span>
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </MagneticHover>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}