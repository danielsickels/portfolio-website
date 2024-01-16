// pages/index.tsx
import type { NextPage } from "next";
import Link from "next/link";
import Navbar from "../components/common/Navbar";
// import DynamicBackground from "../components/common/DynamicBackground";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      {/* <DynamicBackground /> */}
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          {/* Apply dark mode conditional classes */}
          <h1 className="text-5xl font-bold text-black dark:text-white">
            Danny Sickels
          </h1>
          <p className="mt-4 text-2xl text-black dark:text-white">
            
          </p>
          <Link
            href="/about"
            className="mt-8 inline-block bg-blue-700 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;