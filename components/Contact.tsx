"use client";

import {
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  ShieldCheck,
  Check,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { FadeIn, StaggerContainer, StaggerItem } from "./MotionWrapper";

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
      id="contact"
      variant="ornament"
      tone="light"
      className="bg-[#FFFFFF] py-24 text-[#000000] lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-14 max-w-3xl">
          <FadeIn direction="up">
            <p className="font-serif text-lg italic text-[#E10600]">
              Schedule an appointment
            </p>

            <h2 className="mt-3 font-serif text-4xl font-medium leading-[1.12] tracking-tight text-[#000000] sm:text-5xl lg:text-6xl">
              Let us attend to
              <br />
              your smile.
            </h2>

            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-[#555555]">
              Have a question or ready to schedule your consultation? Get in
              touch with our studio and we will prepare a personalized treatment
              plan tailored to your dental health.
            </p>
          </FadeIn>
        </div>

        {/* MAIN GRID */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* =================================================
              LEFT — CONTACT CARDS & CLINIC HOURS
          ================================================== */}
          <StaggerContainer staggerDelay={0.08} className="flex flex-col gap-4">
            <StaggerItem>
              <ContactInfo
                icon={Phone}
                title="Telephone"
                value="+91 98765 43210"
                description="Monday – Saturday, 9:00 AM – 7:00 PM"
                href="tel:+919876543210"
              />
            </StaggerItem>

            <StaggerItem>
              <ContactInfo
                icon={Mail}
                title="Direct inquiry"
                value="hello@dentart.com"
                description="We reply within 24 business hours"
                href="mailto:hello@dentart.com"
              />
            </StaggerItem>

            <StaggerItem>
              <ContactInfo
                icon={MapPin}
                title="Studio address"
                value="123 Dental Avenue, Coimbatore"
                description="Tamil Nadu, India"
              />
            </StaggerItem>

            {/* Opening hours */}
            <StaggerItem>
              <div className="rounded-sm border border-[#E5E5E5] bg-[#FFFFFF] p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#E5E5E5] bg-[#FFFFFF] text-[#E10600]">
                    <Clock3 size={18} />
                  </div>

                  <div>
                    <p className="font-serif text-base font-medium text-[#000000]">
                      Opening hours
                    </p>
                    <p className="font-mono text-xs text-[#666666]">
                      Dedicated studio appointments
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3 text-sm">
                  <div className="flex justify-between border-b border-[#E5E5E5] pb-3">
                    <span className="text-[#555555]">Monday – Friday</span>
                    <span className="font-medium text-[#000000]">
                      9:00 AM – 7:00 PM
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-[#555555]">Saturday</span>
                    <span className="font-medium text-[#000000]">
                      9:00 AM – 5:00 PM
                    </span>
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
            <FadeIn direction="up" delay={0.15}>
              <div
                id="appointment"
                className="rounded-sm border border-[#E5E5E5] bg-[#FFFFFF] p-7 text-[#000000] sm:p-10 shadow-sm"
              >
                <div className="flex items-start justify-between gap-5 border-b border-[#E5E5E5] pb-6">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-[#E10600]">
                      Consultation request
                    </p>
                    <h3 className="mt-1 font-serif text-2xl font-medium tracking-tight text-[#000000] sm:text-3xl">
                      Request an appointment
                    </h3>
                  </div>

                  <div className="hidden h-10 w-10 items-center justify-center rounded-sm border border-[#E5E5E5] bg-[#FFFFFF] text-[#E10600] sm:flex">
                    <CalendarDays size={18} />
                  </div>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="mt-7 grid gap-4 sm:grid-cols-2"
                >
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    className="h-12 rounded-sm border border-[#E5E5E5] bg-[#FFFFFF] px-4 text-sm text-[#000000] outline-none transition-colors placeholder:text-[#888888] focus:border-[#E10600]"
                  />

                  <input
                    type="tel"
                    required
                    placeholder="Phone number"
                    className="h-12 rounded-sm border border-[#E5E5E5] bg-[#FFFFFF] px-4 text-sm text-[#000000] outline-none transition-colors placeholder:text-[#888888] focus:border-[#E10600]"
                  />

                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    className="h-12 rounded-sm border border-[#E5E5E5] bg-[#FFFFFF] px-4 text-sm text-[#000000] outline-none transition-colors placeholder:text-[#888888] focus:border-[#E10600]"
                  />

                  <select
                    defaultValue=""
                    required
                    className="h-12 rounded-sm border border-[#E5E5E5] bg-[#FFFFFF] px-4 text-sm text-[#000000] outline-none transition-colors focus:border-[#E10600]"
                  >
                    <option value="" disabled className="text-[#888888]">
                      Select treatment type
                    </option>
                    <option value="general">General Dentistry & Checkup</option>
                    <option value="cosmetic">Cosmetic Dentistry & Veneers</option>
                    <option value="implants">Dental Implants</option>
                    <option value="aligners">Clear Aligners & Orthodontics</option>
                    <option value="pediatric">Pediatric Dentistry</option>
                    <option value="preventive">Preventive Hygiene</option>
                  </select>

                  <input
                    type="date"
                    required
                    className="h-12 rounded-sm border border-[#E5E5E5] bg-[#FFFFFF] px-4 text-sm text-[#000000] outline-none transition-colors focus:border-[#E10600]"
                  />

                  <input
                    type="time"
                    required
                    className="h-12 rounded-sm border border-[#E5E5E5] bg-[#FFFFFF] px-4 text-sm text-[#000000] outline-none transition-colors focus:border-[#E10600]"
                  />

                  <textarea
                    rows={3}
                    placeholder="Describe your primary dental goals or questions..."
                    className="resize-none rounded-sm border border-[#E5E5E5] bg-[#FFFFFF] px-4 py-3 text-sm text-[#000000] outline-none transition-colors placeholder:text-[#888888] focus:border-[#E10600] sm:col-span-2"
                  />

                  <div className="sm:col-span-2 mt-2">
                    <button
                      type="submit"
                      className="group flex h-12 w-full items-center justify-center gap-2 rounded-sm bg-[#E10600] px-8 text-sm font-medium tracking-wide text-white transition-colors hover:bg-[#FF2A24]"
                    >
                      <AnimatePresence mode="wait">
                        {submitted ? (
                          <motion.div
                            key="success"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2 text-white font-mono"
                          >
                            <Check size={16} />
                            <span>Consultation request submitted</span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="default"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                          >
                            <span>Submit appointment request</span>
                            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                </form>

                <div className="mt-5 flex items-center gap-2 text-xs text-[#666666]">
                  <ShieldCheck size={14} className="text-[#E10600]" />
                  <span>
                    Your medical history and contact information remain strictly confidential.
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* Clinic Map View */}
            <FadeIn direction="up" delay={0.25}>
              <div className="relative min-h-[280px] overflow-hidden rounded-sm border border-[#E5E5E5] bg-[#FFFFFF]">
                <iframe
                  title="DentArt Clinic Location"
                  src="https://www.google.com/maps?q=Coimbatore,Tamil+Nadu,India&output=embed"
                  className="absolute inset-0 h-full w-full border-0 grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Pin Location Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-sm border border-[#E5E5E5] bg-[#FFFFFF]/95 px-4 py-2.5 text-[#000000] shadow-sm backdrop-blur-sm">
                  <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-[#E10600] text-white">
                    <MapPin size={14} />
                  </div>

                  <div>
                    <p className="font-serif text-xs font-medium text-[#000000]">
                      DentArt Studio
                    </p>
                    <p className="font-mono text-[11px] text-[#666666]">
                      Coimbatore, Tamil Nadu
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
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
    <div className="group flex items-center gap-4 rounded-sm border border-[#E5E5E5] bg-[#FFFFFF] p-5 transition-colors hover:border-[#E10600]">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-[#E5E5E5] bg-[#FFFFFF] text-[#E10600] transition-colors group-hover:bg-[#E10600] group-hover:text-white">
        <Icon size={18} />
      </div>

      <div className="min-w-0">
        <p className="font-mono text-xs uppercase tracking-wider text-[#E10600]">
          {title}
        </p>
        <p className="mt-0.5 truncate font-medium text-[#000000]">
          {value}
        </p>
        <p className="mt-0.5 text-xs text-[#666666]">
          {description}
        </p>
      </div>
    </div>
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