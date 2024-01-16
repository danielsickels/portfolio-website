"use client";

import React, { useState, useEffect } from "react";

const LandingPage: React.FC = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCursorPosition({ x: e.clientX + window.scrollX, y: e.clientY + window.scrollY });
    };

    useEffect(() => {
    const spotlight = document.getElementById("spotlight");
    
    if (spotlight) {
        const spotlightWidth = spotlight.clientWidth;
        const spotlightHeight = spotlight.clientHeight;
    
        spotlight.style.left = `${cursorPosition.x - spotlightWidth / 2 + 1}px`;  
        spotlight.style.top = `${cursorPosition.y - spotlightHeight + 25}px`;  
    }
    }, [cursorPosition]);
    
    return (
    <div className="h-screen flex flex-col" onMouseMove={handleMouseMove}>

        <div
        id="spotlight"
        className="absolute w-40 h-40 bg-white rounded-full opacity-10" 
        style={{ pointerEvents: "none" }}
        ></div>
    </div>
)};

export default SVGFESpotLightElement;