"use client";

// pages/index.tsx
import type { NextPage } from "next";
import Link from "next/link";
import Navbar from "../components/common/Navbar";
import StreakingElements from "../components/common/StreakingElements";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <StreakingElements />
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-[#070D59] dark:text-white">
            Danny Sickels
          </h1>
          <h2 className="mt-4 text-2xl font-bold italic tracking-wide text-white bg-gradient-to-r from-[#1F3C88] via-[#EE5F57] to-[#1F3C88] p-2 rounded-full shadow-md">
            Blending the Science of Food, Quality, and Code into Innovation
          </h2>
          <p className="mt-4 text-2xl text-[#070D59] dark:text-[#FFD7D7]"></p>
          <Link
            href="/about"
            className="mt-8 inline-block bg-[#1F3C88] hover:bg-[#EE5F57] text-white font-bold text-xl py-3 px-6 rounded-full flex items-center justify-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
