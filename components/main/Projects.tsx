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
          title="Manufacturing Solution"
          description="A comprehensive solution tailored for manufacturing businesses, optimizing inventory management and streamlining processes to maximize efficiency and productivity."
        />
        <ProjectCard
          src="/education.png"
          title="Empowering Education Enterprises"
          description="Dedicated solutions designed to empower educational institutions, providing innovative tools and technologies to enhance learning experiences and administrative workflows."
        />
        <ProjectCard
          src="/hotelHospital2.jpg"
          title="Hospital And Hotel Solutions"
          description="Tailored solutions for hospitals and hotels, revolutionizing operations and guest experiences through advanced technology and seamless integration of services."
        />
      </div>
    </div>
  );
};

export default Projects;
