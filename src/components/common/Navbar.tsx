"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  ShootingStar,
  HandWaving,
  PaperPlaneTilt,
  Code,
  Martini,
  Sunglasses,
} from "@phosphor-icons/react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary text-accent p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Page Title */}
        <div className="text-lg font-semibold">
          <Link href="/" className="text-2xl hover:text-accent/70 flex">
            <ShootingStar className="mr-1" /> Danny Sickels
          </Link>
        </div>

        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </div>

        <div className="hidden md:flex gap-4">
          <Link href="/" className="hover:text-accent/70 flex items-center">
            <ShootingStar className="mr-1" /> Home
          </Link>
          <Link
            href="/about"
            className="hover:text-accent/70 flex items-center"
          >
            <HandWaving className="mr-1" /> About
          </Link>
          <Link
            href="/contact"
            prefetch={false}
            className="hover:text-accent/70 flex items-center"
          >
            <PaperPlaneTilt className="mr-1" /> Contact
          </Link>
          <Link
            href="/projects"
            className="hover:text-accent/70 flex items-center"
          >
            <Code className="mr-1" /> Projects
          </Link>
          <Link
            href="https://barapp.dannysickels.com/"
            className="hover:text-accent/70 flex items-center"
          >
            <Martini className="mr-1" /> SmartBarApp
          </Link>
          <Link
            href="https://happytracker.dannysickels.com/"
            className="hover:text-accent/70 flex items-center"
          >
            <Sunglasses className="mr-1" /> HappyTracker
          </Link>
        </div>
      </div>

      {/* Sliding Menu for Mobile */}
      <div
        className={`absolute top-full left-0 w-full bg-primary md:hidden transition-all ease-in-out duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link href="/" className="hover:text-accent/70 flex items-center p-4">
          <ShootingStar className="mr-1" /> Home
        </Link>
        <Link
          href="/about"
          className="hover:text-accent/70 flex items-center p-4"
        >
          <HandWaving className="mr-1" /> About
        </Link>
        <Link
          href="/contact"
          className="hover:text-accent/70 flex items-center p-4"
        >
          <PaperPlaneTilt className="mr-1" /> Contact
        </Link>
        <Link
          href="/projects"
          className="hover:text-accent/70 flex items-center p-4"
        >
          <Code className="mr-1" /> Projects
        </Link>
        <Link
          href="https://barapp.dannysickels.com/"
          className="hover:text-accent/70 flex items-center p-4"
        >
          <Martini className="mr-1" /> SmartBarApp
        </Link>
        <Link
          href="https://happytracker.dannysickels.com/"
          className="hover:text-accent/70 flex items-center p-4"
        >
          <Sunglasses className="mr-1" /> HappyTracker
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
