import { projectsData } from "@/lib/data";
import Image from "next/image";
import React from "react";

type ProjectProps = (typeof projectsData)[0];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  return (
    <section
      className="group bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:p-8 
    relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 even:pl-8 hover:bg-gray-200 transition rounded-2xl"
    >
      <div className="pt-4 pb-7 pl-4 pr-2 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem] mr-[2rem]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">
          {description}
        </p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={imageUrl}
        alt={title}
        quality={95}
        className="absolute top-8 -right-40 w-[28.25rem] 
        rounded-t-lg shadow-2xl group-even:-right-[intial] group-even:-left-40"
      />
    </section>
  );
}
