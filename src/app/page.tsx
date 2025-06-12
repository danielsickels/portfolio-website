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
          <h1 className="text-6xl font-bold mb-6 text-primary dark:text-accent">
            Danny Sickels
          </h1>
          <h2 className="mt-4 text-2xl font-bold italic tracking-wide text-accent bg-gradient-to-r from-primary via-accent to-primary p-2 rounded-full shadow-md">
            Creative Projects, Full-Stack Development
          </h2>
          <p className="mt-4 text-2xl text-primary dark:text-accent"></p>
          <Link
            href="/about"
            className="mt-8 inline-block bg-primary hover:bg-accent text-accent hover:text-primary font-bold text-xl py-3 px-6 rounded-full flex items-center justify-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
          >
            Dive In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
