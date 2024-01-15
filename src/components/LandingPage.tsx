"use client"

import React, { useState, useEffect } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import Navbar from "./Navbar";

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
  
      spotlight.style.left = `${cursorPosition.x - spotlightWidth / 2 + 2}px`;  
      spotlight.style.top = `${cursorPosition.y - spotlightHeight - 10}px`;  
    }
  }, [cursorPosition]);

    return (
    <div className="h-screen flex flex-col" onMouseMove={handleMouseMove}>
      <Navbar />
      <div className="flex-grow flex justify-center items-center relative">
        <div className="container mx-auto p-8 text-center">
          <h1 className="text-6xl font-extrabold mb-4 text-white">Danny Sickels</h1>
          <p className="text-lg mb-12 text-white">
            Dive Into My Realm
          </p>
          <button className="bg-red-500 hover:bg-blue-900 text-white font-extrabold py-5 px-6 rounded inline-flex items-center text-xl">
            Explore
            <svg stroke="currentColor" fill="currentColor" strokeWidth="02" viewBox="0 0 24 24" className="ml-2 text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
            </svg>
          </button>
        </div>
        <div
          id="spotlight"
          className="absolute w-20 h-20 bg-white rounded-full opacity-10"
          style={{ pointerEvents: "none" }}
        ></div>
      </div>
    </div>
  );
};

export default LandingPage;
