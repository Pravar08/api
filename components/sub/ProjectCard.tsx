import React from "react";
import Image from "next/image";

interface Props {
  src: string;
}

const ProjectCard = ({ src }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-[300px] h-[400px]">
      <div className="w-full h-full relative">
        <Image
          src={src}
          alt={src}
          layout="fill"
          objectFit="contain"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
