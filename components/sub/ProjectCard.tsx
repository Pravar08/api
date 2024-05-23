import React from "react";
import Image from "next/image";

interface Props {
  src: string;
}

const ProjectCard = ({ src }: Props) => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-[300px] h-[400px]">
        <div className="w-full h-full relative">
          <Image
            src={src}
            alt="Project Image"
            layout="fill"
            objectFit="contain"
            className="object-cover rounded-lg border border-[#2A0E61]"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
