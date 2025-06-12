// ProjectCard.tsx
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

export interface ProjectProps {
  name: string;
  description: string;
  languages: string[];
  url: string;
  liveUrl?: string; // Optional live demo URL
}

const ProjectCard: React.FC<{ project: ProjectProps }> = ({ project }) => {
  const { name, description, languages, url, liveUrl } = project;
  return (
    <div className="flex flex-col h-full border-2 border-primary rounded-lg shadow-lg p-4 m-4 bg-primary-rgb hover:bg-[rgb(var(--background-start-rgb))] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-primary mt-2">{name}</h3>
        <p className="text-primary italic break-words">{description}</p>
        <p className="text-lg text-primary mt-4 break-words">
          <span className="font-semibold">Languages:</span>{" "}
          {languages.join(", ")}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 justify-center mt-4">
        <Link
          href={url}
          className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-accent bg-primary hover:bg-accent hover:text-primary transition duration-300 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="h-5 w-5 mr-2" />
          View on GitHub
        </Link>
        {liveUrl && (
          <Link
            href={liveUrl}
            className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-primary bg-accent hover:bg-primary hover:text-accent transition duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt className="h-5 w-5 mr-2" />
            Live Demo
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
