import React from "react";
import Image from "next/image";

interface Props {
  src: string;
}

const ProjectCard = ({ src }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-[300px] h-[400px] flex justify-center items-center">
      <div className="w-[calc(100% - 2rem)] h-[calc(100% - 2rem)] relative">
        <Image
          src={src}
          alt={src}
          layout="fill"
          objectFit="contain"
          className="object-cover rounded-lg border border-[#2A0E61]"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
