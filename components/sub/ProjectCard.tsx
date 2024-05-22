import React from "react";
import Image from "next/image";

interface Props {
  src: string;
 
}

const ProjectCard = ({ src }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-[300px] h-[400px]">
      <div className="w-full h-1/2">
        <Image
          src={src}
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>

     
    </div>
  );
};

export default ProjectCard;
