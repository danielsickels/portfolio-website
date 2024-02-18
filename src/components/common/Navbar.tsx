"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineMail,
  AiOutlineProject,
} from "react-icons/ai";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Page Title */}
        <div className="text-lg font-semibold">Danny Sickels</div>

        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </div>

        <div className="hidden md:flex gap-4">
          <Link href="/" className="hover:text-gray-300 flex items-center">
            <AiOutlineHome className="mr-1" /> Home
          </Link>
          <Link href="/about" className="hover:text-gray-300 flex items-center">
            <AiOutlineInfoCircle className="mr-1" /> About
          </Link>
          <Link
            href="/contact"
            prefetch={false}
            className="hover:text-gray-300 flex items-center"
          >
            <AiOutlineMail className="mr-1" /> Contact
          </Link>
          <Link
            href="/projects"
            className="hover:text-gray-300 flex items-center"
          >
            <AiOutlineProject className="mr-1" /> Projects
          </Link>
        </div>
      </div>

      {/* Sliding Menu for Mobile */}
      <div
        className={`absolute top-full left-0 w-full bg-gray-800 md:hidden transition-all ease-in-out duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link href="/" className="hover:text-gray-300 flex items-center p-4">
          <AiOutlineHome className="mr-1" /> Home
        </Link>
        <Link
          href="/about"
          className="hover:text-gray-300 flex items-center p-4"
        >
          <AiOutlineInfoCircle className="mr-1" /> About
        </Link>
        <Link
          href="/contact"
          className="hover:text-gray-300 flex items-center p-4"
        >
          <AiOutlineMail className="mr-1" /> Contact
        </Link>
        <Link
          href="/projects"
          className="hover:text-gray-300 flex items-center p-4"
        >
          <AiOutlineProject className="mr-1" /> Projects
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
