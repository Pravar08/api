import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Our Client Partnerships
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/manufacturing.png"
          title="Modern Next.js Portfolio"
          description="Our web panel streamlines warehouse operations, inventory tracking, workforce management, export processes, and billing tasks for seamless supply chain efficiency."
        />
        <ProjectCard
          src="/education.png"
          title="Interactive Website Cards"
          description="Our web panel and mobile app streamline administrative tasks, enhance communication, and empower educators, parents, and students with tools for efficient class management and academic progress tracking."
        />
        <ProjectCard
          src="/hotelHospital2.jpg"
          title="Space Themed Website"
          description="Our platform offers tailored solutions for hospitals and hotels, optimizing operations, enhancing customer experiences, and ensuring seamless communication and service efficiency."
        />
      </div>
    </div>
  );
};

export default Projects;
