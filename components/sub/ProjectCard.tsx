import Image from "next/image";
import React from "react";

interface Props {
  src: string;
}

const ProjectCard = ({ src }: Props) => {
  // Determine the height for all images
  const imageHeight = src==="/hotelHospital2.jpg"?420:400; // Adjust this value as needed

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] h-[400px]">
      <Image
        src={src}
        alt={src}
        width={1000}
        height={imageHeight}
        layout="responsive"
        className="object-cover"
      />
    </div>
  );
};

export default ProjectCard;
