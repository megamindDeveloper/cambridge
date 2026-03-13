"use client";

import React from 'react';
import Image from 'next/image';
// 1. Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const facilities = [
  "Spacious Green\nCampus",
  "Dedicated\nSports Areas",
  "Modern Learning\nFacilities",
  "Library and Labs",
  "Robotics and\nInnovation Activities",
  "Sports Training with\nExperienced Coaches",
  "Monthly\nCompetitions",
  "Cultural and Stage\nPrograms",
  "Saturday Club\nActivities"
];

// Reusable Card Component
const FacilityCard = ({ text, idx }: { text: string; idx: number }) => (
  <div className="group h-[180px] md:h-[230px] w-full [perspective:1000px]">
    <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      {/* Front face (Text) */}
      <div className="absolute inset-0 [backface-visibility:hidden] bg-white border-[3px] border-[#DBDBDB] rounded-lg p-8 flex items-center justify-center text-center ">
        <h3 className="text-[#1A1A1A] text-2xl lg:text-[28px] font-semibold whitespace-pre-line">
          {text}
        </h3>
      </div>

      {/* Back face (Image) */}
      <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg overflow-hidden border border-[#DBDBDB]  bg-white">
        <Image
          src={`/image/cardImages/${idx + 1}.png`}
          alt={text.replace('\n', ' ')}
          fill
          className="object-cover"
        />
      </div>
    </div>
  </div>
);

export default function CampusFacilities() {
  return (
    <section className="relative w-full py-10 md:py-24 z-10">
      <div className="container mx-auto px-4">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-12 lg:mb-16 gap-4 md:gap-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary max-w-xl leading-tight">
            Campus and Facilities
          </h2>
          <p className="text-primary text-base max-w-sm flex-1 leading-relaxed md:pt-2">
            Located in Adyar on the banks of the Netravathi River, the campus provides a peaceful environment where children can focus and grow.
          </p>
        </div>

        {/* 2. Mobile Swiper (Visible below 1024px) */}
        <div className="lg:hidden">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.2 }
            }}
          >
            {facilities.map((text, idx) => (
              <SwiperSlide key={idx}>
                <FacilityCard text={text} idx={idx} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 3. Desktop Grid (Visible 1024px and up) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 relative z-10">
          {facilities.map((text, idx) => (
            <FacilityCard key={idx} text={text} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}