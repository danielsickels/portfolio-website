// src/pages/about.tsx
import React from "react";
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
      <div className="bg-gradient-to-r from-orange-700 to-yellow-400 mx-auto p-8 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-center mb-4 py-10">
            About Me - Danny Sickels
          </h1>
          <TextSection />
          <BigFiveChart data={bigFiveData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default About;
