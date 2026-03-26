"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { Button } from "../ui/Button";
import { useModal } from "@/context/ModalContext";

type PathData = {
  d: string;
  fillRule?: "nonzero" | "evenodd" | "inherit";
  clipRule?: "nonzero" | "evenodd" | "inherit";
};

type StepData = {
  id: number;
  title: string;
  desc: string;
  color: string;
  viewBox: string;
  paths: PathData[];
};

const stepsData: StepData[] = [
  {
    id: 1,
    title: "Step 1",
    desc: "Submit Enquiry",
    color: "#E31C22",
    viewBox: "0 0 199 111",
    paths: [
      { d: "M192.397 1.8941C192.975 1.91172 193.544 1.99075 194.094 2.15973C194.93 2.42587 195.713 2.86675 196.354 3.46149C198.798 5.69536 198.965 9.49455 196.731 11.9381L108.128 109.05C106.743 110.58 104.649 111.276 102.619 110.911C99.3629 110.319 97.2074 107.192 97.7987 103.936L108.675 44.0845L57.5946 11.0162C55.8782 9.89811 54.8568 7.96729 54.8749 5.91266C54.9141 2.61642 57.6232 -0.0439522 60.9335 0.000550296L192.397 1.8941Z" },
      { d: "M68.1562 81.2047C69.615 80.5733 71.265 80.5463 72.7431 81.1314C74.221 81.7168 75.4059 82.8659 76.037 84.3248C77.3511 87.3628 75.9537 90.8918 72.9159 92.2066L45.411 104.107C42.373 105.421 38.8449 104.024 37.5302 100.986C36.2162 97.9479 37.6136 94.4198 40.6513 93.105L68.1562 81.2047Z" },
      { d: "M75.1386 52.0601C78.1765 50.7463 81.7047 52.1436 83.0194 55.1812C84.3333 58.2192 82.936 61.7473 79.8983 63.0621L8.3749 93.9996C5.33688 95.3135 1.8088 93.9162 0.49404 90.8785C-0.819946 87.8405 0.577429 84.3124 3.61513 82.9976L75.1386 52.0601Z" },
      { d: "M49.1151 37.1968C50.5739 36.5656 52.2241 36.5395 53.702 37.1246C55.1799 37.7101 56.3649 38.859 56.996 40.3179C58.3099 43.3559 56.9125 46.884 53.8749 48.1988L26.37 60.0992C26.3654 60.1012 26.361 60.103 26.3563 60.105C23.3163 61.4158 19.7891 60.0143 18.4784 56.9742C17.1644 53.9361 18.5618 50.4081 21.5995 49.0933L49.1151 37.1968Z" }
    ]
  },
  {
    id: 2,
    title: "Step 2",
    desc: "Schedule\nCampus Visit",
    color: "#F68025",
    viewBox: "0 0 138 138",
    paths: [
      { d: "M96.6006 55.2002C119.37 55.2004 138 73.8298 138 96.5996C138 119.37 119.37 138 96.6006 138C73.8305 138 55.2002 119.37 55.2002 96.5996C55.2004 73.8297 73.8306 55.2002 96.6006 55.2002ZM96.6006 69C92.4607 69 89.7004 71.7597 89.7002 75.8994V96.5996C89.7002 100.74 92.4606 103.5 96.6006 103.5H110.4C114.54 103.5 117.3 100.74 117.3 96.5996C117.3 92.4598 114.54 89.7002 110.4 89.7002H103.5V75.8994C103.5 71.7598 100.74 69.0002 96.6006 69Z", fillRule: "evenodd", clipRule: "evenodd" },
      { d: "M110.4 0C114.54 4.80972e-05 117.301 2.75966 117.301 6.89941V13.7998H124.2C127.65 13.7998 131.101 17.2502 131.101 20.7002V53.8203C121.441 46.2304 109.71 41.3995 96.6006 41.3994C66.2406 41.3994 41.4006 66.2397 41.4004 96.5996C41.4004 106.26 44.1602 115.92 48.9902 124.2H6.90039C3.45038 124.2 0 121.44 0 117.3V20.7002C0 16.5602 3.45038 13.7998 6.90039 13.7998H20.7002V6.89941C20.7004 2.75977 23.46 0.000204981 27.5996 0C31.7395 0 34.4998 2.75962 34.5 6.89941V13.7998H103.5V6.89941C103.5 2.75962 106.261 0 110.4 0Z" }
    ]
  },
  {
    id: 3,
    title: "Step 3",
    desc: "Interaction with\nAdmissions Team",
    color: "#3F9C49",
    viewBox: "0 0 139 139",
    paths: [
      { d: "M56.999 41.8701C88.2797 41.8701 113.998 63.381 113.998 89.8223C113.998 118.422 84.1466 138.311 61.0508 138.311H4.05273C2.46213 138.311 1.02125 137.38 0.364258 135.932C-0.296564 134.483 -0.0425975 132.786 1.00195 131.591L11.6182 119.459C4.09985 111.133 3.41701e-05 100.392 0 89.8223C0 63.381 25.7184 41.8702 56.999 41.8701ZM32.417 81.041C27.9496 81.041 24.3125 84.6779 24.3125 89.1455C24.3125 93.6128 27.9494 97.249 32.417 97.249C36.8844 97.2488 40.5207 93.6127 40.5205 89.1455C40.5205 84.6783 36.8842 81.0412 32.417 81.041ZM56.999 81.041C52.5317 81.0411 48.8955 84.6779 48.8955 89.1455C48.8956 93.6128 52.5315 97.249 56.999 97.249C61.4666 97.249 65.1035 93.6128 65.1035 89.1455C65.1035 84.6782 61.4664 81.041 56.999 81.041ZM81.582 81.041C77.1147 81.041 73.4775 84.6779 73.4775 89.1455C73.4776 93.6128 77.1144 97.249 81.582 97.249C86.0494 97.2488 89.6855 93.6127 89.6855 89.1455C89.6855 84.6783 86.0492 81.0413 81.582 81.041Z", fillRule: "evenodd", clipRule: "evenodd" },
      { d: "M85.6338 0C114.679 3.20581e-05 138.31 19.995 138.311 44.5723C138.311 54.2669 134.602 63.6378 127.792 71.3223L137.333 82.4531C139.579 85.0688 137.72 89.1444 134.259 89.1445H122.062C121.636 58.5497 92.483 33.7656 56.999 33.7656C48.6619 33.7657 40.4435 35.1808 33.1152 37.6709C37.0555 16.3674 59.3693 0 85.6338 0Z" }
    ]
  },
  {
    id: 4,
    title: "Step 4",
    desc: "Complete Admission\nFormalities",
    color: "#0095D6",
    viewBox: "0 0 98 125",
    paths: [
      { d: "M26.5544 0C22.495 0 18.6555 1.84539 16.1194 5.01546L2.92838 21.5042C1.03274 23.8738 0 26.8179 0 29.8524V111.364C0 118.744 5.98312 124.727 13.3636 124.727H84.6364C92.0171 124.727 98 118.744 98 111.364V13.3636C98 5.98312 92.0171 0 84.6364 0H26.5544ZM32.4866 56.6044C30.7471 54.8649 30.7471 52.0443 32.4866 50.3047L45.8502 36.9411C47.5897 35.2015 50.4103 35.2015 52.1498 36.9411L65.5135 50.3047C67.253 52.0443 67.253 54.8649 65.5135 56.6044C63.774 58.3439 60.9533 58.3439 59.2138 56.6044L53.4546 50.8451V71.2727C53.4546 73.733 51.4603 75.7273 49 75.7273C46.5398 75.7273 44.5455 73.733 44.5455 71.2727V50.8451L38.7862 56.6044C37.0467 58.3439 34.2261 58.3439 32.4866 56.6044ZM71.2727 89.0909C73.733 89.0909 75.7273 87.0966 75.7273 84.6364C75.7273 82.1761 73.733 80.1818 71.2727 80.1818H26.7273C24.267 80.1818 22.2727 82.1761 22.2727 84.6364C22.2727 87.0966 24.267 89.0909 26.7273 89.0909H71.2727Z", fillRule: "evenodd", clipRule: "evenodd" }
    ]
  }
];

export default function AdmissionSteps() {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLElement>(null);
  const { openEnquiryModal } = useModal();

  // Core timings
  const stepDrawTime = 1.0;
  const stepFillTime = 0.4;
  const dashDrawTime = 0.5;
  const cycleTime = stepDrawTime + stepFillTime + dashDrawTime; // 1.9s per cycle

  // Pop-in animation for the step container
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: "easeOut", delay: index * cycleTime } 
    }),
  };

  // Line drawing and filling for the step SVGs
  const pathVariants: Variants = {
    hidden: { pathLength: 0, fill: "rgba(0,0,0,0)", stroke: "#D1D5DB" }, 
    visible: ({ color, index }: { color: string; index: number }) => ({
      pathLength: 1,
      fill: color,
      stroke: color,
      transition: { 
        pathLength: { duration: stepDrawTime, ease: "easeInOut", delay: index * cycleTime },
        fill: { duration: stepFillTime, delay: (index * cycleTime) + stepDrawTime } 
      },
    }),
  };

  // Clip-path mask to draw the dashed lines from left to right completely from nothing
  const dashLineVariants: Variants = {
    hidden: { clipPath: "inset(0 100% 0 0)" }, // 100% hidden initially
    visible: (index: number) => ({
      clipPath: "inset(0 0% 0 0)", // fully revealed
      transition: { 
        duration: dashDrawTime, 
        ease: "linear", 
        // Trigger drawing exactly AFTER this current step has finished drawing & filling
        delay: (index * cycleTime) + stepDrawTime + stepFillTime 
      }
    }),
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
          controls.start("visible");
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <section ref={sectionRef} className="w-full bg-white md:pb-14 pt-3 md:pt-16 overflow-hidden">
      <div className="w-full container mx-auto px-4 ">
        <div className="border-t-[3px] md:border-t-0 pt-10 md:pt-5 md:border-b-[3px] pb-7 md:pb-24 border-[#DBDBDB] flex flex-col items-center">
        {/* Heading Section */}
        <div className="text-center mb-8 md:mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-3 tracking-tight"
          >
            Admit your Child in just <br className="md:hidden" />4 Steps
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-xl text-primary/70 font-bold"
          >
            Visit the campus and explore the environment before making a decision.
          </motion.p>
        </div>

        {/* Steps Flex Container */}
        <div className="grid grid-cols-2 md:flex md:flex-row justify-between w-full relative">
          
          {stepsData.map((step, stepIdx) => (
            <React.Fragment key={step.id}>
              
              {/* Step Detail */}
              <motion.div 
                className="flex items-center flex-col justify-start mb-12 md:mb-0 w-full md:w-[220px] relative z-10"
                initial="hidden"
                animate={controls}
                custom={stepIdx}
                variants={itemVariants}
              >
                {/* SVG Icon Container with Drop Shadow */}
                <div className="  w-[100px] h-[100px] md:w-[120px] md:h-[120px] flex items-center justify-center rounded-full">
                  <svg 
                    // Set a uniform fixed size inside the container so all icons scale to match perfectly
                    className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] object-contain" 
                    viewBox={step.viewBox} 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {step.paths.map((p, i) => (
                      <motion.path
                        key={i}
                        d={p.d}
                        fillRule={p.fillRule}
                        clipRule={p.clipRule}
                        initial="hidden"
                        animate={controls}
                        variants={pathVariants}
                        custom={{ color: step.color, index: stepIdx }}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    ))}
                  </svg>
                </div>

                {/* Step Text Container */}
                <div className="mt-4 md:mt-6 text-center flex flex-col items-center px-2">
                  <h3 className="text-lg md:text-xl font-bold text-primary">{step.title}</h3>
                  <p className="text-lg md:text-xl text-primary mt-2 whitespace-pre-line leading-snug">{step.desc}</p>
                </div>
              </motion.div>

              {/* INTERLEAVED DASHED LINE - Hidden entirely until the preceding step finishes */}
              {stepIdx < stepsData.length - 1 && (
                <div className="hidden md:block flex-1 relative h-[2px] mt-[60px] mx-2 -translate-y-1/2 z-0">
                  
                  {/* Animated Dark Dashed Line */}
                  <motion.div
                    className="w-full absolute top-0 left-0 h-full"
                    initial="hidden"
                    animate={controls}
                    custom={stepIdx}
                    variants={dashLineVariants}
                  >
                    <svg className="w-full h-full" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Reduced strokeDasharray creates MORE dashes (closer together) */}
                      <line x1="0" y1="1" x2="100%" y2="1" stroke="#6D6D6D" strokeWidth="2" strokeDasharray="6, 6" />
                    </svg>
                  </motion.div>

                </div>
              )}

            </React.Fragment>
          ))}
        </div>

        {/* CTA Button */}
        <Button aria-label="book-a-campus-visit" className="mt-6 md:mt-14" onClick={openEnquiryModal}>
          Book a Campus Visit
        </Button>
      </div>
      </div>
    </section>
  );
}