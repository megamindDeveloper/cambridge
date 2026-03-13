'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

// You can replace these with your actual image paths
const tabsData = [
  {
    id: 'nursery',
    label: 'Nursery',
    image: '/images/hero/1.png',
  },
  {
    id: 'primary',
    label: 'Primary School',
    image: '/images/hero/2.png',
  },
  {
    id: 'middle',
    label: 'Middle School',
    image: '/images/hero/3.png',
  },
  {
    id: 'secondary',
    label: 'Secondary School',
    image: '/images/hero/4.png',
  },
];

export default function LearningJourney() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play effect: changes slide every 2 seconds
  // It automatically resets the timer if the user manually clicks a tab
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % tabsData.length);
    }, 2000);

    // Cleanup timeout on unmount or when activeIndex changes manually
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    // Outer Wrapper: Full screen width, holds the background SVG
    <section className="relative w-full overflow-hidden bg-white">
      
      {/* Background Red/Orange SVG Line - Now spans the entire screen */}
      <div className="absolute inset-0 w-[100vw] z-0 pointer-events-none flex items-end justify-center">
      <svg width="2052" height="424" viewBox="0 0 2052 424" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2048.01 167.629C1513.53 803.679 531.312 37.7412 0.253983 3.99202" stroke="url(#paint0_linear_86_2)" stroke-width="8"/>
<defs>
<linearGradient id="paint0_linear_86_2" x1="1620.25" y1="-1802.6" x2="18.5241" y2="2161.81" gradientUnits="userSpaceOnUse">
<stop stop-color="#E31C22"/>
<stop offset="1" stop-color="#FB7824"/>
</linearGradient>
</defs>
</svg>

      </div>

      {/* Main Content Wrapper: Constrained by the container and centered */}
      <div className="relative z-10 container mx-auto  pt-24 px-4">
        <div className='border-b-[3px] border-[#DBDBDB] pb-32'>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 max-w-xl leading-tight">
          A Journey Through Every Stage of Learning
        </h2>

        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
          
          {/* Left Side: Image Container */}
          <div className="w-full md:w-[55%]  md:aspect-video  rounded-lg  overflow-hidden shadow-lg transition-all duration-500 ">
            <Image
            width={1000}
            height={1000}
              src={tabsData[activeIndex].image}
              alt={tabsData[activeIndex].label}
              className=" object-cover transition-opacity duration-500 ease-in-out"
            />
          </div>

          {/* Right Side: Clickable Tabs */}
          <div className="w-full md:w-[40%] flex flex-col">
            {tabsData.map((tab, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveIndex(index)}
                  className={`text-left py-5 border-b border-[#DBDBDB]  text-xl transition-colors duration-300 focus:outline-none ${
                    isActive ? 'text-[#E31C22] font-bold' : 'text-primary font-semibold hover:text-primary/90'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
            {/* Final bottom border line as seen in the design */}
            {/* <div className="w-full h-px bg-gray-200 mt-12"></div> */}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}