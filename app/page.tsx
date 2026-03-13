"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import LearningJourney from "@/components/sections/LearningJourney";

export default function LandingPage() {
  return (
    <div>
      <Hero />

      <LearningJourney />
      <WhyChooseUs />
    </div>
  );
}
