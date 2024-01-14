import React from "react";
import { FaRocket, FaHistory, FaTrophy, FaUserFriends } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const AboutComponent: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 mx-auto p-8 text-white">
      <div className="text-center animate-fade-in-up">
        <FaRocket className="mx-auto text-6xl animate-bounce" />
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          Learn more about what we do and our mission to innovate.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <FaHistory className="text-3xl" />
          <FaTrophy className="text-3xl" />
          <FaUserFriends className="text-3xl" />
        </div>
        <p className="mt-6">
          Since our inception, we've been pushing the boundaries of technology.
        </p>
        <Carousel className="mt-8">
          <div>
            <img
              src="https://via.placeholder.com/600x400.png?text=Team+Member+1"
              alt="Team Member 1"
            />
            <p className="legend">John Doe - Developer</p>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/600x400.png?text=Team+Member+2"
              alt="Team Member 2"
            />
            <p className="legend">Jane Smith - Designer</p>
          </div>
          {/* Add more team member items as needed */}
        </Carousel>
      </div>
    </div>
  );
};

export default AboutComponent;
