// src/pages/projects.tsx
import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Navbar from "../components/common/Navbar";
import ProjectCard, { ProjectProps } from "../components/projects/ProjectCard";
import GitHubApiClient from "../components/lib/GithubApiClient";
import "../app/globals.css";

const Projects: NextPage = () => {
  const [projects, setProjects] = useState<ProjectProps[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectUrls = [
        "https://github.com/danielsickels/portfolio-website",
        "https://github.com/danielsickels/SmartBarLighting",
        "https://github.com/danielsickels/fighter-game",
        "https://github.com/danielsickels/puzzlegame",
        "https://github.com/danielsickels/bible-v-avatar-trivia",
        ];

      const gitHubApiClient = new GitHubApiClient();
      const fetchedProjects = await Promise.all(
        projectUrls.map((url) => gitHubApiClient.fetchRepoData(url))
      );

      const validProjects = fetchedProjects.filter(
        (project): project is ProjectProps => project !== null
      );
      setProjects(validProjects);
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-[#EE5F57] to-[#1F3C88] mx-auto p-8 text-white">
        <div className="text-center bg-[#EE5F57]/50 backdrop-blur-md rounded-xl p-4 mx-8 my-4 shadow-lg hover:scale-105 transition-transform">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 py-10 text-[#FFD7D7]">
            Explore My Projects on GitHub
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
