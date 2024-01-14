"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineMail,
  AiOutlineProject,
} from "react-icons/ai";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">My Next.js App</div>

        <div className="md:hidden z-50" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FiX className="text-2xl" />
          ) : (
            <FiMenu className="text-2xl" />
          )}
        </div>

        <div
          className={`absolute md:relative z-40 md:flex gap-4 transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out top-14 left-0 w-full bg-gray-800 md:bg-transparent md:w-auto md:top-0`}
        >
          <Link
            href="/"
            className="hover:text-gray-300 flex items-center cursor-pointer p-4 md:p-0"
          >
            <AiOutlineHome className="mr-1" /> Home
          </Link>
          <Link
            href="/about"
            className="hover:text-gray-300 flex items-center cursor-pointer p-4 md:p-0"
          >
            <AiOutlineInfoCircle className="mr-1" /> About
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-300 flex items-center cursor-pointer p-4 md:p-0"
          >
            <AiOutlineMail className="mr-1" /> Contact
          </Link>
          <Link
            href="/projects"
            className="hover:text-gray-300 flex items-center cursor-pointer p-4 md:p-0"
          >
            <AiOutlineProject className="mr-1" /> Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
