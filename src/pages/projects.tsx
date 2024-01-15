import React from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import "../app/globals.css";

const ProjectsPage: React.FC = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of Project 1...",
      imageUrl: "https://via.placeholder.com/400x200",
    },
    {
      title: "Project 2",
      description: "Overview of Project 2...",
      imageUrl: "https://via.placeholder.com/400x200",
    },
  ];

  return (
    <div className= "h-screen">
      <div>
        <Navbar />
        <ProjectCard
          pageTitle="Our Projects"
          pageSubtitle="A glimpse into our range of work."
        />
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
