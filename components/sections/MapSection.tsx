"use client";

import { useState, useEffect, useMemo } from "react";
import StyledMap from "../ui/StyledMap";

export interface MapSectionData {
  key: string;
  title: string;
  points: number[];
  viewport: {
    center: { lat: number; lng: number };
    zoom: number;
  };
}

export interface MapSectionProps {
  data: MapSectionData[];
  mainMarkerPosition?: { lat: number; lng: number };
  mainMarkerLink?: string;
  customMarkerImage?: string;
  title?: string;
}

export default function MapSection({
  data,
  mainMarkerPosition,
  mainMarkerLink,
  customMarkerImage,
  title = "Transport Routes across all parts of Mangalore",
}: MapSectionProps) {
  const allPoints = data.map((item) => item.points[0]);

  const [isMobile, setIsMobile] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // BUG FIX 1: Memoize mapCenter to prevent the GoogleMap from receiving a new object reference on every render.
  // Without this, clicking an item changes state -> re-renders MapSection -> creates a new center object -> forces Google Maps to glitch/re-zoom.
  const mapCenter = useMemo(() => isMobile 
    ? (mainMarkerPosition 
        ? { lat: mainMarkerPosition.lat + 0.015, lng: mainMarkerPosition.lng + 0.06 } 
        : { lat: 12.88, lng: 74.95 }) 
    : data[0].viewport.center, [isMobile, mainMarkerPosition, data]);
    
  const mapZoom = isMobile ? 10.5 : data[0].viewport.zoom;

  if (!data || data.length === 0) return null;

  return (
    /* Mobile: Stacked layout (Map top, Panel bottom). Desktop: Full-screen relative with absolute overlay. */
    <section className="lg:relative lg:h-screen w-full  flex flex-col lg:block overflow-visible">

      {/* Map container — fixed height on mobile, fills section on desktop */}
      <div className="relative w-full h-[50vh] lg:absolute lg:inset-0 lg:h-full z-0 overflow-hidden">
        <StyledMap
          center={mapCenter}
          zoom={mapZoom}
          allowedPoints={allPoints}
          mainMarkerPosition={mainMarkerPosition}
          mainMarkerLink={mainMarkerLink}
          customMarkerImage={customMarkerImage}
          hoveredPoint={hoveredPoint}
          setHoveredPoint={setHoveredPoint}
        />
      </div>

      {/* DESKTOP OVERLAY — completely untouched */}
      <div className="hidden lg:flex absolute z-10 top-1/2 left-[8%] -translate-y-1/2">
        <div className="bg-white p-10 rounded-xl w-[500px]">
          <h2 className="text-3xl md:text-4xl font-bold text-primary max-w-xl leading-tight mb-6">{title}</h2>
          <div className="space-y-4">
            {data.map((item) => {
              const isHovered = hoveredPoint === item.points[0];
              return (
                <a
                  aria-label="location"
                  key={item.key}
                  href={`https://www.google.com/maps/search/?api=1&query=${item.viewport.center.lat},${item.viewport.center.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-left text-[20px] transition-colors cursor-pointer hover:text-[#E31C22] ${
                    isHovered ? "text-[#E31C22]" : "text-primary"
                  }`}
                  onMouseEnter={() => setHoveredPoint(item.points[0])}
                  onMouseLeave={() => setHoveredPoint(null)}
                >
                  <span className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {item.title}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* MOBILE PANEL — Static below map with negative margin overlap for aesthetics. No inner scroll. */}
      <div className="lg:hidden relative z-10 bg-white px-5 pt-8 pb-10 rounded-t-[32px] -mt-10 ">
        <h2 className="text-2xl font-bold mb-6 text-[#191919] leading-tight text-center">{title}</h2>
        <div className="flex flex-col space-y-4">
          {data.map((item) => {
            const isHovered = hoveredPoint === item.points[0];
            return (
              <div
                aria-label="location"
                key={item.key}
                // BUG FIX 2: Added 'touch-manipulation' to prevent native mobile browser double-tap-to-zoom
                className={`block text-[18px] py-1 border-b border-gray-100 last:border-0 transition-colors cursor-pointer touch-manipulation hover:text-[#E31C22] ${
                  isHovered ? "text-[#E31C22]" : "text-[#2b2b2b]"
                }`}
                onMouseEnter={() => setHoveredPoint(item.points[0])}
                onMouseLeave={() => setHoveredPoint(null)}
                onClick={() => setHoveredPoint(item.points[0])}
              >
                <span className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}