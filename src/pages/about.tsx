// src/pages/about.tsx
import React from "react";
import Link from "next/link";
import Navbar from "../components/common/Navbar";
import "../app/globals.css";
import type { NextPage } from "next";
import TextSection from "../components/About/TextSection";
import BigFiveChart from "../components/About/BigFiveChart";
import { bigFiveData, options } from "../components/About/ChartConfig";
import { LogoLoop } from "../components/LogoLoop";
import { TECH_LOGOS } from "../components/TechLogos";

const About: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:w-3/5 lg:max-w-5xl lg:mx-auto lg:px-10 lg:py-12">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 py-6 sm:py-8 md:py-10">
            About Me - Danny Sickels
          </h1>
          <TextSection />
          <div className="w-full max-w-5xl mx-auto my-8 sm:my-10 md:my-12 py-4 sm:py-6 md:py-8">
            <LogoLoop
              logos={TECH_LOGOS}
              speed={80}
              direction="left"
              logoHeight={48}
              gap={48}
              pauseOnHover
              fadeOut
              fadeOutColor="rgb(26,30,36)"
              scaleOnHover
              ariaLabel="Technologies I work with"
            />
          </div>
          <BigFiveChart data={bigFiveData} options={options} />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-6 sm:py-5">
            <Link href="./contact">
              <button className="bg-accent hover:bg-primary text-primary hover:text-accent font-bold py-2.5 px-6 sm:py-3 sm:px-10 rounded-lg transition-transform transform hover:scale-105 shadow-md text-sm sm:text-base">
                  Feel free to contact me!
                </button>
            </Link>
            <span className="text-base sm:text-lg font-semibold opacity-90">
              or
            </span>
            <Link href="./projects">
              <button className="bg-accent hover:bg-primary text-primary hover:text-accent font-bold py-2.5 px-6 sm:py-3 rounded-lg transition-transform transform hover:scale-105 shadow-md text-sm sm:text-base">
                Check out my Github Projects!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
