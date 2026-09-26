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
  Check,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { FadeIn, StaggerContainer, StaggerItem } from "./MotionWrapper";

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
    specialties: ["Clear Invisible Aligners", "Porcelain Veneers", "Digital Smile Design"],
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
    specialties: ["Microscopic Root Canal", "Laser Teeth Whitening", "Bio-Ceramic Restorations"],
    education: "Gold Medalist • Aesthetic Dentistry",
    availability: "Mon – Sat • 9:00 AM - 7:00 PM",
    featuredBadge: "Painless Care Expert",
  },
];

export default function Doctors() {
  return (
    <SectionWrapper
      id="doctors"
      variant="ornament"
      tone="light"
      className="bg-[#FFFFFF] py-24 text-[#000000] lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <FadeIn direction="up">
            <p className="font-serif text-lg italic text-[#E10600]">
              Clinical masters
            </p>
            <h2 className="mt-3 font-serif text-4xl font-medium leading-[1.12] tracking-tight text-[#000000] sm:text-5xl lg:text-6xl">
              Meet the dental
              <br />
              specialists.
            </h2>
          </FadeIn>

          <FadeIn direction="left" delay={0.15} className="max-w-md">
            <p className="text-[15px] leading-7 text-[#555555]">
              Our board-certified clinicians combine international academic training
              with an unhurried, gentle approach to chairside care.
            </p>
          </FadeIn>
        </div>

        {/* DOCTORS GRID */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {doctors.map((doctor) => (
            <StaggerItem key={doctor.id}>
              <div className="group flex flex-col justify-between rounded-sm border border-[#E5E5E5] bg-[#FFFFFF] p-6 transition-colors hover:border-[#E10600]">
                <div>
                  {/* Image Container with Badge */}
                  <div className="relative mb-6 aspect-[4/5] w-full overflow-hidden rounded-sm border border-[#E5E5E5] bg-[#FFFFFF]">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />

                    {/* Featured Role Badge */}
                    <div className="absolute top-3 left-3 rounded-sm border border-[#E5E5E5] bg-[#FFFFFF]/95 px-2.5 py-1 backdrop-blur-sm">
                      <span className="font-mono text-xs uppercase tracking-wide text-[#E10600]">
                        {doctor.featuredBadge}
                      </span>
                    </div>

                    {/* Rating Pill */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-sm border border-[#E5E5E5] bg-[#FFFFFF]/95 px-3 py-1.5 text-xs backdrop-blur-sm">
                      <div className="flex items-center gap-1.5 font-medium text-[#000000]">
                        <Star size={12} className="fill-[#E10600] text-[#E10600]" />
                        <span>{doctor.rating}</span>
                        <span className="text-[#666666]">({doctor.reviewsCount})</span>
                      </div>

                      <span className="font-mono text-xs text-[#000000]">
                        {doctor.experience}
                      </span>
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="mb-4">
                    <h3 className="font-serif text-2xl font-medium tracking-tight text-[#000000] transition-colors group-hover:text-[#E10600]">
                      {doctor.name}
                    </h3>
                    <p className="mt-1 font-mono text-xs font-semibold text-[#E10600]">
                      {doctor.degrees}
                    </p>
                    <p className="mt-1 text-sm text-[#555555]">
                      {doctor.role}
                    </p>
                  </div>

                  {/* Education */}
                  <div className="mb-4 flex items-center gap-2 border-t border-[#E5E5E5] pt-3 text-xs text-[#555555]">
                    <GraduationCap size={15} className="shrink-0 text-[#E10600]" />
                    <span className="truncate">{doctor.education}</span>
                  </div>

                  {/* Specialties List */}
                  <div className="mb-6 space-y-2">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-[#E10600]">
                      Focus disciplines
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {doctor.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="inline-flex items-center gap-1 rounded-sm border border-[#E5E5E5] bg-[#FFFFFF] px-2.5 py-1 text-xs text-[#444444]"
                        >
                          <Check size={10} className="text-[#E10600]" />
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Consultation CTA & Schedule */}
                <div className="border-t border-[#E5E5E5] pt-4">
                  <div className="mb-3 flex items-center gap-1.5 font-mono text-xs text-[#555555]">
                    <Calendar size={13} className="text-[#E10600]" />
                    <span>{doctor.availability}</span>
                  </div>

                  <a
                    href="#contact"
                    className="flex w-full items-center justify-center gap-2 rounded-sm bg-[#E10600] py-3 text-xs font-medium tracking-wide text-white transition-colors hover:bg-[#FF2A24]"
                  >
                    <span>Request consultation</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom Trust Guarantee Strip */}
        <FadeIn direction="up" delay={0.2} className="mt-14">
          <div className="flex flex-wrap items-center justify-around gap-6 rounded-sm border border-[#E5E5E5] bg-[#FFFFFF] px-8 py-5 text-xs text-[#555555]">
            <div className="flex items-center gap-2.5">
              <ShieldCheck size={16} className="text-[#E10600]" />
              <span className="font-medium text-[#000000]">Board-certified dental specialists</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Award size={16} className="text-[#E10600]" />
              <span className="font-medium text-[#000000]">Over 12,000+ completed smile restorations</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Sparkles size={16} className="text-[#E10600]" />
              <span className="font-medium text-[#000000]">Painless single-tooth anesthesia</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
