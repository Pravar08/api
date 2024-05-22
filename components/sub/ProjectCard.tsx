import Image from "next/image";
import React from "react";

interface Props {
  src: string;

}

const ProjectCard = ({ src }: Props) => {
  const imageHeight = src === "/hotelHospital2.jpg" ? 900 : 1000;
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={src}
        width={1000}
        height={imageHeight}
        className="w-full object-contain"
      />

     
    </div>
  );
};

export default ProjectCard;
