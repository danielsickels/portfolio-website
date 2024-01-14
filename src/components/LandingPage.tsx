import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import Navbar from "./Navbar";

const LandingPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Next.js App</h1>
          <p className="text-lg mb-6">
            Explore our innovative solutions and projects.
          </p>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            Learn More
            <BiRightArrowAlt className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
