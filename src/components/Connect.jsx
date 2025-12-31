import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import PageTitle from "./PageTitle";
import PageDescription from "./PageDescription";

export default function Connect() {
  const contactIconStyle =
    "py-10 px-15 rounded-2xl border border-border bg-card hover:scale-120 shadow-xl transition duration-300 flex flex-col space-y-2 items-center";
  const fontIconStyle = "text-4xl";
  return (
    <div className="border-b border-border pt-5 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <PageTitle title="Connect With Me" />
        <PageDescription description="Feel free to reach out through any of the platforms below" />
        <ul className="flex flex-wrap justify-center items-center gap-8 mt-6 list-none">
          <li>
            <a
              href="https://github.com/shiran-dinushka"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={contactIconStyle}>
                <FontAwesomeIcon icon={faGithub} className={fontIconStyle} />
                <span>GitHub</span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/shiran-dinushka/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={contactIconStyle}>
                <FontAwesomeIcon icon={faLinkedin} className={fontIconStyle} />
                 <span>LinkedIn</span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="mailto:shirandinushka9@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={contactIconStyle}>
                <FontAwesomeIcon icon={faEnvelope} className={fontIconStyle} />
                 <span>Gmail</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
