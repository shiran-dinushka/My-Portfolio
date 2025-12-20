import React from "react";
import { faGithub,faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Connect() {
  const contactIconStyle = "border-2 border-red-800 text-blue-600 p-15 rounded-2xl bg-gray-200 hover:bg-blue-100";
  const fontIconStyle = "text-4xl text-black";
  return (
    <div className="border-2 border-blue-800 h-120">
      <div>
        <h1 className="text-4xl font-bold text-center mt-10  py-4">
          Connect With Me
           <span className="block mx-auto mt-2 h-2 w-16 bg-indigo-500 rounded"></span>
        </h1>
        <p className="text-lg text-center mt-4">
          Feel free to reach out through any of the platforms below:
        </p>
        <ul className="flex justify-center items-center space-x-6 list-none text-center mt-18">
          <li>
            <a
              href="mailto:"
              className={contactIconStyle}
            >
              <FontAwesomeIcon
                icon={faGithub}
                className={fontIconStyle}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/"
              className={contactIconStyle}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className={fontIconStyle}
              />
            </a>
          </li>
          <li>
            <a
              href=""
              className={contactIconStyle}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className={fontIconStyle}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
