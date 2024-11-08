import Image from "next/image";
import React from "react";

interface Tag {
  id: number;
  name: string;
  path: string;
}

interface Props {
  src: string;
  title: string;
  animation: string;
  desc: string;
  subdesc: string;
  href: string;
  tags: Tag[];
}

const ProjectCard = ({
  src,
  title,
  animation,
  desc,
  subdesc,
  href,
  tags,
}: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] max-w-lg">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={800}
        className="w-full h-72 object-cover"
      />

      <div className="p-3">
        {/* Title */}
        <h1 className="text-lg font-semibold text-white">{title}</h1>

        {/* Description */}
        <p className="mt-1 text-sm text-gray-300 line-clamp-2">{desc}</p>

        {/* Sub-description */}
        <p className="mt-1 text-xs text-gray-400 line-clamp-1">{subdesc}</p>

        {/* Tags */}
        <div className="mt-2 flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <div
              key={tag.id}
              className="flex items-center gap-1 px-2 py-1 rounded-full border border-gray-300 text-xs text-gray-300"
            >
              <Image src={tag.path} alt={tag.name} width={16} height={16} />
              <span>{tag.name}</span>
            </div>
          ))}
        </div>

        {/* Link */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-lg underline ml-2 text-blue-400 hover:underline"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
