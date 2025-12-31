import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({ name, description, type, tags,link, image }) {
  return (
    <div className="max-w-80 min-w-50 mx-auto">
      <div className="rounded-2xl shadow-xl border border-border bg-card hover:scale-105 transform transition-transform duration-300">
        <img
          src={image}
          alt={name}
          className="rounded-t-2xl w-full h-48 object-cover"
        />
        <div className="p-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-lg font-bold">{name}</span>
            <span className="border border-border text-[11px] text-blue-400 bg-blue-600/10 px-2 py-1 rounded-2xl font-bold">
              {type}
            </span>
          </div>
          <p className="mt-3 text-justify text-[14px]">{description}</p>
          <div className="mt-6 flex flex-wrap gap-2 text-[12px]">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="border border-border text-blue-400 bg-blue-600/10 px-2 py-1 rounded-2xl font-bold"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="border border-border w-25 mt-4 rounded-2xl px-2 py-1 cursor-pointer">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span className="ml-2">Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
