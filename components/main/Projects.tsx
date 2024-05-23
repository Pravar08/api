import React from "react";
import ProjectCard from "../sub/ProjectCard";
import styles from "./Projects.module.css"; // Import CSS file for styling

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Our Client Partnerships
      </h1>
      <div className={styles.projectBanner}>
        <div className={styles.projectCardWrapper}>
          <ProjectCard
            src="/manufacturing.png"
            // Add any additional props as needed
          />
        </div>
        <div className={styles.projectCardWrapper}>
          <ProjectCard
            src="/education.png"
            // Add any additional props as needed
          />
        </div>
        <div className={styles.projectCardWrapper}>
          <ProjectCard
            src="/muntiple.jpg"
            // Add any additional props as needed
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
