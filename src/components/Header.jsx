import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "./Sidebar";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(

    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      threshold: 0.6, // 60% of section visible
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);

  const navLinkStyle = (section) =>
  `relative cursor-pointer text-base font-semibold transition
   ${
     active === section
       ? "text-blue-500 border-b-2 border-blue-500" 
       : "text-gray-400 hover:text-blue-400 border-b-2 border-transparent hover:border-blue-400"
   }`;

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      70;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="sticky top-0 z-50 ">
        <div className="max-w-full mx-auto flex items-center justify-around h-16 px-4 md:px-6 backdrop-blur-md border-b border-border">
          <div className="text-xl font-bold w-40 cursor-pointer bg-linear-to-r from-blue-500 via-purple-500 to-pink-500
               bg-clip-text text-transparent animate-gradient-x"
               onClick={() => scrollToSection("home")}>
            Shiran Dinushka
          </div>

          <nav className="hidden md:flex px-2 ">
            <ul className="flex space-x-10">
              <li onClick={() => scrollToSection("home")} className={navLinkStyle("home")}>Home</li>
              <li onClick={() => scrollToSection("about")} className={navLinkStyle("about")}>About</li>
              <li onClick={() => scrollToSection("skills")} className={navLinkStyle("skills")}>Skills</li>
              <li onClick={() => scrollToSection("projects")} className={navLinkStyle("projects")}>Projects</li>
              <li onClick={() => scrollToSection("connect")} className={navLinkStyle("connect")}>Connect</li>
            </ul>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)}>
              <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
          </div>
        </div>

        <Sidebar
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          navLinkStyle={navLinkStyle}
        />
      </header>
    </>
  );
}
