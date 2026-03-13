'use client';

import { useState, useEffect } from 'react';
import StyledMap from '../ui/StyledMap';

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
    customMarkerImage?: string;
    title?: string;
}

export default function MapSection({ 
    data, 
    mainMarkerPosition, 
    customMarkerImage,
    title = "Transport Routes across all parts of Mangalore" 
}: MapSectionProps) {
    // We pass all points as "active" so they are always visible
    const allPoints = data.map(item => item.points[0]);

    // Handle separate zoom and centering for mobile devices
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!data || data.length === 0) return null;

    // Mobile adjustments: zoom out a bit and use original center so the map is visible above the bottom sheet
    const mapCenter = isMobile ? { lat: 12.72, lng: 74.93 } : data[0].viewport.center; 
    const mapZoom = isMobile ? 10 : data[0].viewport.zoom;

    return (
        <section className="relative md:h-screen h-[100vh] w-full bg-[#EAEAEA] overflow-hidden">
            <div className="absolute inset-0 w-full h-full z-0">
                <StyledMap
                    // Dynamically adjusts between mobile/desktop fixed center
                    center={mapCenter}
                    zoom={mapZoom}
                    allowedPoints={allPoints}
                    mainMarkerPosition={mainMarkerPosition}
                    customMarkerImage={customMarkerImage}
                />
            </div>

            {/* DESKTOP OVERLAY */}
            <div className="hidden lg:flex absolute z-10 top-1/2 left-[8%] -translate-y-1/2">
                <div className="bg-white p-10 rounded-xl  w-[500px]">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary max-w-xl leading-tight mb-6 ">
                        {title}
                    </h2>

                    <div className="space-y-4">
                        {data.map((item) => (
                            <a
                                key={item.key}
                                href={`https://www.google.com/maps/search/?api=1&query=${item.viewport.center.lat},${item.viewport.center.lng}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-left text-[20px] text-primary hover:text-[#E31C22] transition-colors cursor-pointer"
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* MOBILE OVERLAY */}
            <div className="lg:hidden absolute bottom-0 left-0 right-0 bg-white p-8 rounded-t-[32px] z-20">
                <h2 className="text-2xl font-bold mb-6 text-[#191919] leading-tight">
                    {title}
                </h2>
                 <div className="flex flex-col space-y-4 max-h-[100vh] overflow-y-auto">
                    {data.map((item) => (
                        <a
                            key={item.key}
                            href={`https://www.google.com/maps/search/?api=1&query=${item.viewport.center.lat},${item.viewport.center.lng}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-[18px] text-[#2b2b2b] hover:text-[#E31C22] transition-colors cursor-pointer"
                        >
                            {item.title}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}