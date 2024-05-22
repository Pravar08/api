import Image from "next/image";
import React from "react";

interface Props {
  src: string;
}

const ProjectCard = ({ src }: Props) => {
  // Determine the height for the last image
  const imageHeight = src === "/hotelHospital2.jpg" ? 900 : 1000;

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] h-[400px]">
      <div className="relative" style={{ width: "100%", paddingTop: "100%" }}>
        <Image
          src={src}
          alt={src}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
