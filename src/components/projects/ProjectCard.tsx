// ProjectCard.tsx
import React from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export interface ProjectProps {
  name: string;
  description: string;
  languages: string[];
  url: string;
}

const ProjectCard: React.FC<{ project: ProjectProps }> = ({ project }) => {
  const { name, description, languages, url } = project;
  return (
    <div className="flex flex-col h-full border-2 border-[#070D59] rounded-lg shadow-lg p-4 m-4 bg-gradient-to-r from-[#FFD7D7] to-[#FFFFFF] hover:from-[#FFFFFF] hover:to-[#FFD7D7] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-[#070D59] mt-2">{name}</h3>
        <p className="text-[#1F3C88] italic break-words">{description}</p>
        <p className="text-lg text-[#070D59] mt-4 break-words">
          <span className="font-semibold">Languages:</span>{" "}
          {languages.join(", ")}
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <Link
          href={url}
          className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-[#FFD7D7] bg-[#1F3C88] hover:bg-[#EE5F57] transition duration-300 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="h-5 w-5 mr-2" />
          View on GitHub
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
