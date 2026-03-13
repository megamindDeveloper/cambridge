'use client';

import { GoogleMap, LoadScript, Circle, Marker } from '@react-google-maps/api';
import { useMemo } from 'react';

const LOCATIONS = [
    { id: 100, lat: 12.85050601221967, lng: 75.06984111877208 },
    { id: 101, lat: 12.856852979948613, lng: 75.00882675405474 },
    { id: 102, lat: 12.901423573357576, lng: 75.04149806660762 },
    { id: 103, lat: 12.88213544588077, lng: 75.03047979544309 },
    { id: 104, lat: 12.795657685168187, lng: 74.8547907512623 },
    { id: 105, lat: 12.884962867688321, lng: 74.83857338009977 },
    { id: 106, lat: 12.907650090007605, lng: 74.84971614242019 },
];

interface StyledMapProps {
    center: { lat: number; lng: number };
    zoom: number;
    allowedPoints?: number[];
    mainMarkerPosition?: { lat: number; lng: number };
    customMarkerImage?: string;
}

export default function StyledMap({
    center,
    zoom,
    allowedPoints,
    mainMarkerPosition,
    customMarkerImage = "/svgs/location.svg",
}: StyledMapProps) {

    const mapOptions = useMemo(() => ({
        styles: [
            { featureType: "all", elementType: "labels", stylers: [{ visibility: "off" }] },
            { featureType: "road", elementType: "geometry", stylers: [{ color: "#e5e5e5" }] },
            { featureType: "water", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
            { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
        ],
        disableDefaultUI: true,
        gestureHandling: "greedy",
    }), []);

    return (
        <div className="h-full w-full">
            <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!}>
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    center={center}
                    zoom={zoom}
                    options={mapOptions}
                >
                    {/* FIXED: Passed object instead of calling 'new google.maps.Size' */}
                    {mainMarkerPosition && (
                        <Marker 
                            position={mainMarkerPosition} 
                            icon={{ 
                                url: customMarkerImage, 
                                // @ts-ignore - The library accepts this object format even if types are strict
                                scaledSize: { width: 40, height: 40 },
                                anchor: { x: 20, y: 40 }
                            }} 
                        />
                    )}

                    {LOCATIONS.map((loc) => {
                        if (allowedPoints && !allowedPoints.includes(loc.id)) return null;

                        return (
                            <Circle
                                key={loc.id}
                                center={{ lat: loc.lat, lng: loc.lng }}
                                radius={150} 
                                options={{
                                    fillColor: '#9CA3AF', 
                                    fillOpacity: 0.8,
                                    strokeColor: '#FFFFFF',
                                    strokeWeight: 2,
                                    clickable: false,
                                }}
                            />
                        );
                    })}
                </GoogleMap>
            </LoadScript>
        </div>
    );
}