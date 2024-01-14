import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import Navbar from "./Navbar";

const LandingPage: React.FC = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="container mx-auto p-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mb-4">Welcome to My Portfoooolio Project</h1>
          <p className="text-lg mb-12">
            Explore sometin'.
          </p>
          <button className="bg-red-500 hover:bg-blue-800 text-black font-extrabold py-4 px-5 rounded inline-flex items-center">
            Learn More
            <BiRightArrowAlt className="ml-2 text-2x2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
