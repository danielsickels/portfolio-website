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
      <div className="mx-auto p-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-center mb-4 py-10">
            About Me - Danny Sickels
          </h1>
          <TextSection />
          <div className="w-full max-w-5xl mx-auto my-12 py-8">
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
          <div className="space-x-4 flex items-center justify-center py-5">
            <Link href="./contact">
              <div className="space-x-4">
                <button className="bg-accent hover:bg-primary text-primary hover:text-accent font-bold py-3 px-10 rounded-lg transition-transform transform hover:scale-105 shadow-md">
                  Feel free to contact me!
                </button>
              </div>
            </Link>
            <span className="mx-4 mb-1 text-lg font-semibold opacity-90">
              or
            </span>
            <Link href="./projects">
              <button className="bg-accent hover:bg-primary text-primary hover:text-accent font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-md">
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
