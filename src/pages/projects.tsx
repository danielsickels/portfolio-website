// src/pages/projects.tsx
import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Navbar from "../components/common/Navbar";
import ProjectCard, { ProjectProps } from "..//components/projects/ProjectCard";
import GitHubApiClient from "../components/lib/GithubApiClient";

import "../app/globals.css";

const Projects: NextPage = () => {
  const [projects, setProjects] = useState<ProjectProps[]>([]);
  const gitHubApiClient = new GitHubApiClient();

  useEffect(() => {
    const projectUrls = [
      "https://github.com/danielsickels/portfolio-website",
      "https://github.com/danielsickels/fighter-game",
    ];

    projectUrls.forEach(async (url) => {
      const projectData = await gitHubApiClient.fetchRepoData(url);
      if (projectData) {
        setProjects((prevProjects) => [...prevProjects, projectData]);
      }
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r mx-auto p-8 text-black">
        <div className="text-center bg-blue-700/50 backdrop-blur-md rounded-xl p-4 mx-8 my-4 shadow-lg hover:scale-105 transition-transform">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 py-10 text-orange-300">
            My GitHub Projects
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4 justify-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
