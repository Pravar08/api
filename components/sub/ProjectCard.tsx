import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-[300px] h-[400px]">
      <div className="w-full h-1/2">
        <Image
          src={src}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>

      <div className="relative p-4 h-1/2">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
