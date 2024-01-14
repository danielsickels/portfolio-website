// src/pages/about.tsx
// import React from "react";
import Navbar from "../components/Navbar";
import AboutComponent from "../components/About";
import "../app/globals.css";

const About: React.FC = () => {
  return (
    <div>
      <Navbar />
      <AboutComponent />
    </div>
  );
};

export default About;
