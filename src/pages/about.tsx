// src/pages/about.tsx
import React from "react";
import Link from "next/link";
import Navbar from "../components/common/Navbar";
import "../app/globals.css";
import type { NextPage } from "next";
import TextSection from "../components/About/TextSection";
import BigFiveChart from "../components/About/BigFiveChart";
import { bigFiveData, options } from "../components/About/ChartConfig";

const About: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-[#1F3C88] to-[#EE5F57] mx-auto p-8 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-center mb-4 py-10">
            About Me - Danny Sickels
          </h1>
          <TextSection />
          <BigFiveChart data={bigFiveData} options={options} />
          <div className="space-x-4 flex items-center justify-center py-10 ml-10 pl-5">
            <Link href="./contact">
              <div className="space-x-4">
                <button className="bg-[#070D59] hover:bg-[#1F3C88] text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-md min-w-[250px]">
                  Feel free to contact me!
                </button>
              </div>
            </Link>
            <span className="text-white mx-4 mb-1 text-lg font-semibold">or</span>
            <Link href="./projects">
              <button className="bg-[#070D59] hover:bg-[#1F3C88] text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-md min-w-[250px]">
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
