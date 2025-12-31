import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState,useEffect } from "react";

export default function Sidebar({ isOpen, onClose, navLinkStyle }) {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const y = section.getBoundingClientRect().top + window.pageYOffset - 70; // header height

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    onClose();// close sidebar after click
  };

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-700 bg-linear-to-r from-gray-500/20 to-gray-800 bg-blend-multiply  shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-60 md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={onClose}>
            <FontAwesomeIcon icon={faX} />
          </button>
        </div>

        <nav className="flex flex-col items-start px-6 space-y-6 mt-4">
          <span
            onClick={() => scrollToSection("home")}
            className={`${navLinkStyle("home")} cursor-pointer`}
          >
            Home
          </span>
          <span
            onClick={() => scrollToSection("about")}
            className={`${navLinkStyle("about")} cursor-pointer`}
          >
            About
          </span>
          <span
            onClick={() => scrollToSection("skills")}
            className={`${navLinkStyle("skills")} cursor-pointer`}
          >
            Skills
          </span>
          <span
            onClick={() => scrollToSection("projects")}
            className={`${navLinkStyle("projects")} cursor-pointer`}
          >
            Projects
          </span>
          <span
            onClick={() => scrollToSection("connect")}
            className={`${navLinkStyle("connect")} cursor-pointer`}
          >
            Connect
          </span>
        </nav>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40"
          onClick={onClose}
        ></div>
      )}
    </>
  );
}
