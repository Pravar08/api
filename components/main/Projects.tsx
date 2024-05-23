import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Our Client Partnerships
      </h1>
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-10 absolute top-0 left-0 transform transition-transform ease-in-out duration-500">
          <ProjectCard
            src="/manufacturing.png"
            key="manufacturing"
            // Add any additional props as needed
          />
          <ProjectCard
            src="/education.png"
            key="education"
            // Add any additional props as needed
          />
          <ProjectCard
            src="/muntiple.jpg"
            key="hospital-hotel"
            // Add any additional props as needed
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
