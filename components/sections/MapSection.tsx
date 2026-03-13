'use client';

import { useState } from 'react';
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
    // Default to the first item
    const [activeSection, setActiveSection] = useState<string>(data[0]?.key || "");

    const activeItem = data.find(item => item.key === activeSection) || data[0];
    
    // We pass all points as "active" so they are always visible
    const allPoints = data.map(item => item.points[0]);

    if (!data || data.length === 0) return null;

    return (
        <section className="relative md:h-screen h-[80vh] w-full bg-[#EAEAEA] overflow-hidden">
            <div className="absolute inset-0 w-full h-full z-0">
                <StyledMap
                    // Map now centers and zooms based on activeItem
                    center={activeItem.viewport.center}
                    zoom={activeItem.viewport.zoom}
                    allowedPoints={allPoints}
                    mainMarkerPosition={mainMarkerPosition}
                    customMarkerImage={customMarkerImage}
                />
            </div>

            {/* DESKTOP OVERLAY */}
            <div className="hidden lg:flex absolute z-10 top-1/2 left-[8%] -translate-y-1/2">
                <div className="bg-white p-10 rounded-xl shadow-xl w-[380px]">
                    <h2 className="text-2xl font-bold mb-8 text-black leading-tight">
                        {title}
                    </h2>

                    <div className="space-y-4">
                        {data.map((item) => (
                            <button
                                key={item.key}
                                onClick={() => setActiveSection(item.key)}
                                className={`w-full text-left text-[16px] transition-all duration-300 flex items-center
                                    ${activeSection === item.key ? "text-black font-semibold translate-x-2" : "text-gray-400 hover:text-gray-600"}`}
                            >
                                {activeSection === item.key && <span className="w-2 h-2 bg-red-600 rounded-full mr-3" />}
                                {item.title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* MOBILE OVERLAY */}
            <div className="lg:hidden absolute bottom-0 left-0 right-0 bg-white p-6 rounded-t-3xl z-20">
                 <div className="grid grid-cols-2 gap-2">
                    {data.map((item) => (
                        <button
                            key={item.key}
                            onClick={() => setActiveSection(item.key)}
                            className={`py-2 px-4 rounded-full text-sm font-medium transition-all
                                ${activeSection === item.key ? "bg-black text-white" : "bg-gray-100 text-gray-600"}`}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}