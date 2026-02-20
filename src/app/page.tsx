"use client";

import type { NextPage } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import Navbar from "../components/common/Navbar";
import GradientText from "../components/GradientText";

const LightPillar = dynamic(() => import("../components/LightPillar"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[rgb(26,30,36)]" />,
});

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div className="relative min-h-[calc(100dvh-5rem)] flex items-center justify-center overflow-hidden">
        <div className="fixed inset-0 z-0">
          <LightPillar
          topColor="#4a95a8"
          bottomColor="#1a1e24"
          intensity={0.8}
          rotationSpeed={0.2}
          interactive={false}
          glowAmount={0.006}
          pillarWidth={2.5}
          pillarHeight={0.5}
          pillarRotation={326}
          quality="medium"
        />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-primary">
            Danny Sickels
          </h1>
          <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-bold italic tracking-wide text-primary bg-[rgb(26,30,36)]/80 backdrop-blur-sm p-3 sm:p-4 rounded-full shadow-lg">
            Creative Projects, Full-Stack Development
          </h2>
          <Link
            href="/about"
            className="mt-6 sm:mt-8 inline-block transition-transform duration-300 hover:scale-105"
          >
            <GradientText
              colors={["#00ADB5", "#00e5ff", "#ff6b9d", "#393E46"]}
              className="font-bold text-base sm:text-lg md:text-xl py-2.5 px-5 sm:py-3 sm:px-6 rounded-full bg-[rgb(26,30,36)]/60 backdrop-blur-sm"
              animationSpeed={6}
              direction="horizontal"
              pauseOnHover
            >
              Dive In
            </GradientText>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
