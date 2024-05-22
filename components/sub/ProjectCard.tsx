import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  imageWidth: number;
  imageHeight: number;
}

const ProjectCard = ({ src, title, description, imageWidth, imageHeight }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <div style={{ width: imageWidth, height: imageHeight }}>
        <Image
          src={src}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          layout="responsive"
          className="object-cover"
        />
      </div>

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
