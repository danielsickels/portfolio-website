// src/pages/projects.tsx
import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Navbar from "../components/common/Navbar";
import ProjectCard, { ProjectProps } from "../components/projects/ProjectCard";
import GitHubApiClient from "../components/lib/GithubApiClient";
import "../app/globals.css";

const Projects: NextPage = () => {
  const [projects, setProjects] = useState<ProjectProps[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectUrls = [
        "https://github.com/danielsickels/SmartBarLighting",
        "https://github.com/danielsickels/happy-tracker",
        "https://github.com/danielsickels/portfolio-website",
        "https://github.com/danielsickels/fighter-game",
        "https://github.com/danielsickels/puzzlegame",
        "https://github.com/danielsickels/bible-v-avatar-trivia",
      ];

      // Mapping of GitHub repo names to live demo URLs
      const liveDemoUrls: Record<string, string> = {
        SmartBarLighting: "https://barapp.dannysickels.com/",
        "happy-tracker": "https://happytracker.dannysickels.com/",
        "portfolio-website": "https://dannysickels.com/",
      };

      // Fallback static data in case GitHub API fails
      const fallbackProjects: ProjectProps[] = [
        {
          name: "SmartBarLighting",
          description:
            "A comprehensive cocktail recipe and bar management application with interest to further develop real-time lighting control integration.",
          languages: ["JavaScript", "Python", "HTML", "CSS"],
          url: "https://github.com/danielsickels/SmartBarLighting",
          liveUrl: "https://barapp.dannysickels.com/",
        },
        {
          name: "happy-tracker",
          description:
            "A mood and wellness tracking application to help users monitor their daily happiness and well-being.",
          languages: ["JavaScript", "React", "Node.js"],
          url: "https://github.com/danielsickels/happy-tracker",
          liveUrl: "https://happytracker.dannysickels.com/",
        },
        {
          name: "portfolio-website",
          description:
            "Personal portfolio website showcasing projects, skills, and professional experience.",
          languages: ["TypeScript", "React", "Next.js", "CSS"],
          url: "https://github.com/danielsickels/portfolio-website",
          liveUrl: "https://dannysickels.com/",
        },
        {
          name: "fighter-game",
          description:
            "An interactive fighting game built with modern web technologies.",
          languages: ["JavaScript", "HTML", "CSS"],
          url: "https://github.com/danielsickels/fighter-game",
        },
        {
          name: "puzzlegame",
          description: "A simple childrens' puzzle game built in Phasergame.",
          languages: ["JavaScript", "HTML", "CSS"],
          url: "https://github.com/danielsickels/puzzlegame",
        },
        {
          name: "bible-v-avatar-trivia",
          description:
            "A fun trivia game comparing biblical stories with Avatar: The Last Airbender themes.",
          languages: ["JavaScript", "HTML", "CSS"],
          url: "https://github.com/danielsickels/bible-v-avatar-trivia",
        },
      ];

      try {
        const gitHubApiClient = new GitHubApiClient();
        const fetchedProjects = await Promise.all(
          projectUrls.map((url) => gitHubApiClient.fetchRepoData(url))
        );

        const validProjects = fetchedProjects
          .filter((project): project is ProjectProps => project !== null)
          .map((project) => ({
            ...project,
            liveUrl: liveDemoUrls[project.name] || undefined,
          }));

        // If we got some projects from the API, use them; otherwise fall back to static data
        if (validProjects.length > 0) {
          setProjects(validProjects);
        } else {
          console.warn("GitHub API failed, using fallback project data");
          setProjects(fallbackProjects);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        console.warn("Using fallback project data");
        setProjects(fallbackProjects);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-accent to-primary mx-auto p-8 text-accent">
        <Link
          href="https://github.com/danielsickels"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="text-center border-2 border-primary rounded-lg shadow-lg p-4 m-4 bg-primary-rgb hover:bg-[rgb(var(--background-start-rgb))] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 py-10 text-accent">
              Explore My Projects on GitHub
            </h1>
          </div>
        </Link>
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
