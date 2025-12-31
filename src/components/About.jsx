import React from "react";
import PageTitle from "./PageTitle";
import PageDescription from "./PageDescription";
import CardTitle from "./CardTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div className="border-b border-border p-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <PageTitle title="About Me" />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-border bg-card shadow-xl rounded-2xl p-8">
            <CardTitle title="My Journey" />

            <p className="mt-4 text-sm sm:text-base leading-relaxed">
              I’m an Information Technology graduate from the University of
              Moratuwa and completed a six-month internship at LiveRoom
              Technologies. 
              </p>
              <p className="mt-4 text-sm sm:text-base leading-relaxed">
              During my internship, I gained hands-on experience
              working on real-world software projects using technologies such as
              C++ and React. I enjoy learning new technologies, solving
              problems, and continuously improving my skills through practical
              development work.
            </p>

            <div className="inline-block mt-5 px-4 py-2 text-sm font-semibold rounded-4xl border border-border shadow-2xl">
              <FontAwesomeIcon icon={faLocationDot} className="mr-2"/>
              Lives in Colombo, Sri Lanka
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="border border-border bg-card shadow-xl rounded-2xl p-6">
              <CardTitle title="Experience" />

              <div className="flex justify-between mt-4 text-base">
                <span className="font-semibold">LiveRoom Technologies</span>
                <span className="font-semibold">Jan 2024 – July 2024</span>
              </div>
            </div>
            <div className="border border-border bg-card shadow-xl rounded-2xl p-6">
              <CardTitle title="Education" />

              <div className="flex justify-between mt-4 text-base">
                <span className="font-semibold">University of Moratuwa</span>
                <span className="font-semibold">2021 – 2025</span>
              </div>

              <div className="flex justify-between mt-2 text-base">
                <span className="font-semibold">Nalanda College</span>
                <span className="font-semibold">2017 – 2019</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
