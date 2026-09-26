"use client";

import {
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Check,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { FadeIn, StaggerContainer, StaggerItem, MagneticHover } from "./MotionWrapper";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 4500);
  };

  return (
    <SectionWrapper
      topVariant="none"
      variant="none"
      className="bg-[#F8FAFC] py-24 text-slate-900 lg:py-32"
    >
      <div id="contact" className="relative">
        {/* Background Glowing Ambient Orbs */}
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-100/70 blur-[140px]"
        />

        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-[140px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          {/* HEADER */}
          <div className="mb-14 max-w-3xl">
            <FadeIn direction="up">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-cyan-500" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">
                  Contact DentArt
                </span>
              </div>

              <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl text-slate-950">
                Let&apos;s take care of{" "}
                <br />
                <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  your smile.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl font-sans text-base leading-7 text-slate-600">
                Have a question or ready to schedule your consultation?
                Get in touch with our clinic and we&apos;ll help you find
                the right gentle treatment plan for your smile.
              </p>
            </FadeIn>
          </div>

          {/* MAIN GRID */}
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

            {/* =================================================
                LEFT — CONTACT CARDS & CLINIC HOURS
            ================================================== */}
            <StaggerContainer staggerDelay={0.12} className="flex flex-col gap-4">
              <StaggerItem>
                <ContactInfo
                  icon={Phone}
                  title="Call Us Directly"
                  value="+91 98765 43210"
                  description="Mon–Sat, 9:00 AM – 7:00 PM"
                  href="tel:+919876543210"
                />
              </StaggerItem>

              <StaggerItem>
                <ContactInfo
                  icon={Mail}
                  title="Email Our Team"
                  value="hello@dentart.com"
                  description="We reply within 24 business hours"
                  href="mailto:hello@dentart.com"
                />
              </StaggerItem>

              <StaggerItem>
                <ContactInfo
                  icon={MapPin}
                  title="Visit Our Clinic"
                  value="123 Dental Avenue, Coimbatore"
                  description="Tamil Nadu, India"
                />
              </StaggerItem>

              {/* Opening hours */}
              <StaggerItem>
                <div className="rounded-[1.75rem] border border-slate-200/90 bg-white p-6 shadow-sm backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-200">
                      <Clock3 size={21} />
                    </div>

                    <div>
                      <p className="font-bold text-slate-950">Opening Hours</p>
                      <p className="text-xs text-slate-500">We&apos;re here when you need us</p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3 text-sm">
                    <div className="flex justify-between border-b border-slate-100 pb-3">
                      <span className="text-slate-600">Monday – Friday</span>
                      <span className="font-semibold text-slate-950">9:00 AM – 7:00 PM</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-600">Saturday</span>
                      <span className="font-semibold text-slate-950">9:00 AM – 5:00 PM</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            {/* =================================================
                RIGHT — APPOINTMENT FORM + GOOGLE MAP
            ================================================== */}
            <div className="grid gap-6">

              {/* Appointment Booking Form */}
              <FadeIn direction="up" delay={0.2}>
                <div
                  id="appointment"
                  className="rounded-[2.5rem] bg-white p-7 text-slate-900 shadow-xl sm:p-10 border border-slate-200/90 backdrop-blur-2xl"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
                        Book a Visit
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl text-slate-950 tracking-tight">
                        Request an appointment
                      </h3>
                    </div>

                    <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 border border-cyan-200 sm:flex">
                      <CalendarDays size={22} />
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="mt-7 grid gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      className="h-13 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/15"
                    />

                    <input
                      type="tel"
                      required
                      placeholder="Phone number"
                      className="h-13 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/15"
                    />

                    <input
                      type="email"
                      required
                      placeholder="Email address"
                      className="h-13 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/15"
                    />

                    <select
                      defaultValue=""
                      required
                      className="h-13 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/15"
                    >
                      <option value="" disabled className="text-slate-400">
                        Select treatment type
                      </option>
                      <option value="general">General Dentistry / Checkup</option>
                      <option value="cosmetic">Cosmetic Dentistry & Veneers</option>
                      <option value="implants">Dental Implants</option>
                      <option value="aligners">Clear Aligners / Orthodontics</option>
                      <option value="pediatric">Pediatric Dentistry</option>
                      <option value="preventive">Preventive Deep Cleaning</option>
                    </select>

                    <input
                      type="date"
                      required
                      className="h-13 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/15"
                    />

                    <input
                      type="time"
                      required
                      className="h-13 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/15"
                    />

                    <textarea
                      rows={3}
                      placeholder="Tell us about any symptoms or dental goals..."
                      className="resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/15 sm:col-span-2"
                    />

                    <div className="sm:col-span-2">
                      <MagneticHover>
                        <button
                          type="submit"
                          className="group relative flex h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 via-cyan-600 to-blue-600 px-8 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/40"
                        >
                          <AnimatePresence mode="wait">
                            {submitted ? (
                              <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center gap-2 text-white font-bold"
                              >
                                <Check size={18} className="stroke-[3]" />
                                <span>Appointment Request Sent!</span>
                              </motion.div>
                            ) : (
                              <motion.div
                                key="default"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center gap-3"
                              >
                                <span>Request Your Appointment</span>
                                <Send
                                  size={16}
                                  className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </button>
                      </MagneticHover>
                    </div>
                  </form>

                  <div className="mt-5 flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <ShieldCheck size={16} className="text-cyan-600" />
                    <span>Your personal information is kept strictly private & confidential.</span>
                  </div>
                </div>
              </FadeIn>

              {/* Clinic Map View */}
              <FadeIn direction="up" delay={0.3}>
                <div className="relative min-h-[300px] overflow-hidden rounded-[2.5rem] border border-slate-200/90 bg-white shadow-xl">
                  <iframe
                    title="DentArt Clinic Location"
                    src="https://www.google.com/maps?q=Coimbatore,Tamil+Nadu,India&output=embed"
                    className="absolute inset-0 h-full w-full border-0 opacity-90 hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  {/* Animated Pin Location Badge */}
                  <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 text-slate-900 shadow-xl backdrop-blur-md">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                      <MapPin size={17} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-950">DentArt Dental Clinic</p>
                      <p className="text-[11px] text-slate-500 font-medium">Coimbatore, Tamil Nadu</p>
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

function ContactInfo({
  icon: Icon,
  title,
  value,
  description,
  href,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  description: string;
  href?: string;
}) {
  const content = (
    <motion.div
      whileHover={{ scale: 1.02, x: 4 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="group flex items-center gap-4 rounded-[1.75rem] border border-slate-200/90 bg-white p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-md"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 border border-slate-200/60 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white group-hover:shadow-md">
        <Icon size={21} />
      </div>

      <div className="min-w-0">
        <p className="text-xs uppercase tracking-[0.15em] text-cyan-700 font-bold">
          {title}
        </p>
        <p className="mt-1 truncate font-bold text-slate-950 group-hover:text-cyan-600 transition-colors">
          {value}
        </p>
        <p className="mt-0.5 text-xs text-slate-500">
          {description}
        </p>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}