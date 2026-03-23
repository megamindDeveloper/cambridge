import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import LearningJourney from "@/components/sections/LearningJourney";
import Hero from "@/components/sections/Hero";

const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"));
const WhatMakesUsDifferent = dynamic(() => import("@/components/sections/WhatMakesUsDifferent"));
const CampusFacilities = dynamic(() => import("@/components/sections/CampusFacilities"));
const Footer = dynamic(() => import("@/components/sections/Footer"));
const MapSection = dynamic(() => import("@/components/sections/MapSection"));
const AdmissionSteps = dynamic(() => import("@/components/sections/AdmissionSteps"));
const AdmissionsForm = dynamic(() => import("@/components/sections/AdmissionsForm"));
const WhatsappChatWidget = dynamic(() => import("@/components/ui/WhatsappChatWidget"));
const MAP_DATA = [
  {
    key: "kalladka",
    title: "Kalladka",
    icon: "/icons/cityIcon.svg",
    points: [100],
    viewport: {
      center: { lat: 12.8655, lng: 74.85 }, // Decreased lng to push map to the right
      zoom: 12, // slightly zoomed in
    },
  },
  {
    key: "sajipa",
    title: "Sajipa",
    icon: "/icons/itIcon.svg",
    points: [101],
    viewport: {
      center: { lat: 12.851351069014475, lng: 75.00883750893504 },
      zoom: 11, // Reduced zoom to zoom out
    },
  },
  {
    key: "bantwal",
    title: "Bantwal",
    icon: "/icons/educationIcon.svg",
    points: [102],
    viewport: {
      center: { lat: 12.901486321309694, lng: 75.04150879544346 },
      zoom: 11,
    },
  },
  {
    key: "bc-road",
    title: "BC Road",
    icon: "/icons/everydayIcon.svg",
    points: [103],
    viewport: {
      center: { lat: 12.882156363478204, lng: 75.03050125311479 },
      zoom: 11,
    },
  },
  {
    key: "ullal",
    title: "Ullal",
    icon: "/icons/itIcon.svg",
    points: [104],
    viewport: {
      center: { lat: 12.795573953754454, lng: 74.85479072521217 },
      zoom: 11,
    },
  },
  {
    key: "mangalore-city",
    title: "Mangalore City",
    icon: "/icons/educationIcon.svg",
    points: [105],
    viewport: {
      center: { lat: 12.92532166130058, lng: 74.83907947401185 },
      zoom: 11,
    },
  },
  {
    key: "location-7",
    title: "Lalbagh",
    icon: "/icons/everydayIcon.svg",
    points: [106],
    viewport: {
      center: { lat: 12.882739262990897, lng: 74.83944018195062 },
      zoom: 11,
    },
  },
];
export default function LandingPage() {
  return (
    <div>
      <Hero />

      <LearningJourney />
      <WhyChooseUs />
      {/* Combined Wrapper for Differentiation & Campus Sections to share the background SVG line */}
      <div className="relative w-full overflow-hidden bg-white">
        {/* Background Diagonal Red SVG Line */}
        <div className="absolute hidden md:block top-54 -left-2 w-full lg:w-[100vw]  z-0 pointer-events-none ">
          <svg viewBox="0 0 1712 1130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M3.12012 2.50293C487.259 606.036 1511.35 1101.83 1710.68 1125.89" stroke="url(#paint0_linear_86_6)" strokeWidth="8" />
            <defs>
              <linearGradient id="paint0_linear_86_6" x1="1517.11" y1="-3285.68" x2="628.134" y2="896.639" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E31C22" />
                <stop offset="1" stopColor="#FB7824" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute top-54 md:hidden left-0 w-full lg:w-[1712px] xl:w-[2200px] z-0 pointer-events-none ">
          <svg width="522" height="357" viewBox="0 0 522 357" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.62695 1.16309C110.339 153.249 312.569 270.897 520.807 355.026" stroke="url(#paint0_linear_128_35)" strokeWidth="4" />
            <defs>
              <linearGradient id="paint0_linear_128_35" x1="440.491" y1="-1911.7" x2="603.343" y2="552.957" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E31C22" />
                <stop offset="1" stopColor="#FB7824" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <WhatMakesUsDifferent />
        <div className="container mx-auto px-4 md:mt-24 mt-8">
          <div className="h-[3px] w-full bg-[#DBDBDB]"></div>
        </div>
        <CampusFacilities />
      </div>

      <MapSection data={MAP_DATA} mainMarkerPosition={{ lat: 12.866519719791675, lng: 74.9199120224277 }} customMarkerImage="/svgs/location.svg" />
      <AdmissionSteps />
      <Suspense fallback={<div className="w-full h-96" />}>
        <AdmissionsForm />
      </Suspense>
      <Footer />
      <WhatsappChatWidget />
    </div>
  );
}
