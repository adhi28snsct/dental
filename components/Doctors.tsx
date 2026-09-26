"use client";

import Image from "next/image";
import {
  Award,
  Calendar,
  GraduationCap,
  ShieldCheck,
  Star,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { FadeIn, StaggerContainer, StaggerItem, MagneticHover } from "./MotionWrapper";

const doctors = [
  {
    id: 1,
    name: "Dr. Elena Vance",
    degrees: "BDS, MDS, FICOI",
    role: "Lead Implantologist & Smile Architect",
    experience: "16+ Years Experience",
    image: "/doctor-1.jpg",
    rating: "4.98",
    reviewsCount: 380,
    specialties: ["Dental Implants (All-on-4)", "Full Mouth Reconstruction", "Guided Bone Regeneration"],
    education: "Harvard School of Dental Medicine Fellow",
    availability: "Mon, Wed, Fri • 9:30 AM - 5:00 PM",
    featuredBadge: "Chief Surgeon",
  },
  {
    id: 2,
    name: "Dr. Sarah Mitchell",
    degrees: "DDS, MS Ortho",
    role: "Cosmetic & Orthodontic Director",
    experience: "14+ Years Experience",
    image: "/doctor-2.jpg",
    rating: "4.95",
    reviewsCount: 420,
    specialties: ["Clear Invisible Aligners", "Porcelain Veneers", "Digital Smile Design (DSD)"],
    education: "King's College London Orthodontics",
    availability: "Tue, Thu, Sat • 10:00 AM - 6:30 PM",
    featuredBadge: "Smile Design Specialist",
  },
  {
    id: 3,
    name: "Dr. Arun Kumar",
    degrees: "BDS, MDS Restorative",
    role: "Aesthetic & Endodontic Specialist",
    experience: "11+ Years Experience",
    image: "/doctor-3.jpg",
    rating: "4.92",
    reviewsCount: 290,
    specialties: ["Microscopic Root Canal", "Laser Teeth Whitening", "Painless Bio-Ceramic Fillings"],
    education: "Gold Medalist • Aesthetic Dentistry",
    availability: "Mon – Sat • 9:00 AM - 7:00 PM",
    featuredBadge: "Painless Care Expert",
  },
];

export default function Doctors() {
  return (
    <SectionWrapper
      className="bg-[#F8FAFC] py-24 text-slate-900 lg:py-32"
    >
      <div id="doctors" className="relative">
        {/* Ambient background glows */}
        <div className="pointer-events-none absolute -left-20 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-100/50 blur-[160px]" />
        <div className="pointer-events-none absolute -right-20 bottom-10 h-[500px] w-[500px] rounded-full bg-sky-100/50 blur-[160px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* SECTION HEADER */}
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <FadeIn direction="up">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-cyan-500" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-600">
                  World-Class Clinical Team
                </span>
              </div>

              <h2 className="font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl text-slate-950">
                Meet the dental{" "}
                <br />
                <span className="font-serif italic font-normal text-cyan-600">
                  specialists.
                </span>
              </h2>
            </FadeIn>

            <FadeIn direction="left" delay={0.2} className="max-w-md">
              <p className="font-sans text-base leading-7 text-slate-600">
                Our board-certified dentists and master ceramists combine academic excellence with gentle, empathetic chairside care.
              </p>
            </FadeIn>
          </div>

          {/* DOCTORS GRID */}
          <StaggerContainer
            staggerDelay={0.15}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {doctors.map((doctor) => (
              <StaggerItem key={doctor.id}>
                <div className="group relative flex flex-col justify-between overflow-hidden rounded-[2.25rem] border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-500 hover:border-cyan-400 hover:shadow-xl">
                  <div>
                    {/* Image Container with Featured Badge */}
                    <div className="relative mb-6 h-72 w-full overflow-hidden rounded-2xl bg-slate-100 shadow-inner border border-slate-200">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Doctor Top Badge */}
                      <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full border border-white/40 bg-white/90 px-3.5 py-1 text-[11px] font-bold text-slate-900 backdrop-blur-md shadow-sm">
                        <Sparkles size={12} className="text-cyan-600" />
                        <span>{doctor.featuredBadge}</span>
                      </div>

                      {/* Experience Rating Tag */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/30 bg-black/60 px-3.5 py-2 backdrop-blur-md text-white">
                        <div className="flex items-center gap-1.5 text-cyan-300 text-xs font-bold">
                          <Star size={13} className="fill-amber-400 text-amber-400" />
                          <span>{doctor.rating}</span>
                          <span className="text-slate-300 text-[10px]">({doctor.reviewsCount}+ reviews)</span>
                        </div>

                        <span className="text-[11px] font-semibold text-cyan-200">
                          {doctor.experience}
                        </span>
                      </div>
                    </div>

                    {/* Doctor Info */}
                    <div className="mb-4">
                      <div className="flex items-baseline justify-between gap-2">
                        <h3 className="font-display text-2xl font-bold text-slate-950 group-hover:text-cyan-700 transition-colors">
                          {doctor.name}
                        </h3>
                      </div>
                      <p className="text-xs font-semibold text-cyan-600 uppercase tracking-wider mt-1">
                        {doctor.degrees}
                      </p>
                      <p className="text-sm font-medium text-slate-500 mt-1">
                        {doctor.role}
                      </p>
                    </div>

                    {/* Education */}
                    <div className="mb-4 flex items-center gap-2 rounded-xl bg-slate-50 p-3 text-xs text-slate-600 border border-slate-100">
                      <GraduationCap size={16} className="text-cyan-600 shrink-0" />
                      <span className="truncate">{doctor.education}</span>
                    </div>

                    {/* Specialties List */}
                    <div className="mb-6 space-y-2">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Focus Areas
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {doctor.specialties.map((spec) => (
                          <span
                            key={spec}
                            className="inline-flex items-center gap-1 rounded-lg bg-cyan-50 px-2.5 py-1 text-[11px] font-medium text-cyan-800 border border-cyan-200"
                          >
                            <CheckCircle2 size={10} className="text-cyan-600 shrink-0" />
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Consultation CTA & Schedule */}
                  <div className="border-t border-slate-100 pt-4">
                    <div className="mb-3 flex items-center gap-1.5 text-[11px] text-slate-500">
                      <Calendar size={13} className="text-cyan-600" />
                      <span>{doctor.availability}</span>
                    </div>

                    <MagneticHover>
                      <a
                        href="#appointment"
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-600 to-blue-600 py-3 text-xs font-bold text-white shadow-md transition-all hover:shadow-lg"
                      >
                        <span>Book Consultation</span>
                        <ArrowRight size={14} />
                      </a>
                    </MagneticHover>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Bottom Trust Guarantee Strip */}
          <FadeIn direction="up" delay={0.3} className="mt-14">
            <div className="flex flex-wrap items-center justify-around gap-6 rounded-2xl border border-slate-200 bg-white px-8 py-5 shadow-sm text-xs text-slate-600">
              <div className="flex items-center gap-2.5">
                <ShieldCheck size={18} className="text-cyan-600" />
                <span className="font-medium">100% Certified Dental Board Specialists</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award size={18} className="text-cyan-600" />
                <span className="font-medium">Over 12,000+ Completed Smile Transformations</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Sparkles size={18} className="text-cyan-600" />
                <span className="font-medium">Painless Computer-Guided Anesthesia</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
}
