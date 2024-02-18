import React from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export interface ProjectProps {
  name: string;
  description: string;
  languages: string[];
  url: string;
}

const ProjectCard: React.FC<{ project: ProjectProps }> = ({ project }) => (
  <div className="flex flex-col h-full border rounded-lg shadow-lg p-4 m-4 bg-gradient-to-r from-gray-50 to-gray-200 hover:from-gray-200 hover:to-gray-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
    <div className="flex-grow">
      <h3 className="text-2xl font-bold text-gray-800 mt-2">{project.name}</h3>
      <p className="text-gray-700 italic break-words">{project.description}</p>
      <p className="text-lg text-gray-800 mt-4 break-words">
        <span className="font-semibold">Languages:</span>
        {project.languages.join(", ")}
      </p>
    </div>
    <div className="flex justify-center mt-4">
      <Link
        href={project.url}
        className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-orange-300 bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="h-5 w-5 mr-2" />
        View on GitHub
      </Link>
    </div>
  </div>
);

export default ProjectCard;
