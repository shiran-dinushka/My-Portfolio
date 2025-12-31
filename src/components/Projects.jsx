import React from "react";
import PageTitle from "./PageTitle";
import PageDescription from "./PageDescription";
import Card from "./Card";
import SEProject from "../assets/seproject.png";
import LMS from "../assets/LMS.jpg";
import writerB from "../assets/backend.jpeg";

export default function Projects() {
  return (
    <div className="border-b border-border py-20 px-10 sm:px-6 lg:px-8 w-full h-fit">
      <div className="max-w-6xl mx-auto text-center">
        <PageTitle title="Projects" />
        <PageDescription description="This section includes the projects I have worked on" />

        <div className="flex flex-wrap justify-center items-center mt-6 gap-4">
          <Card
            name="Writer Gate"
            description="Writer Gate is a blog writing website that enables users to both
        read and write articles. In addition to providing a platform for
        reading and writing, this website offers topic suggestion tools to
        help writers select more engaging topics for their articles."
            type="Frontend"
            tags={["NextJS", "Material UI"]}
            link="https://github.com/Anuja-2000/article-topic-platform"
            image={SEProject}
          />
          <Card
            name="Writer Gate"
            description="Writer Gate is a blog writing website that enables users to both
        read and write articles. In addition to providing a platform for
        reading and writing, this website offers topic suggestion tools to
        help writers select more engaging topics for their articles."
            type="Backend"
            tags={["NodeJS", "MongoDB", "ExpressJS"]}
            link="https://github.com/Anuja-2000/article-writing-backend"
            image={writerB}
          />
          <Card
            name="Learn Life"
            description="LearnLife is an e-learning website equipped with an
                LMS. Both instructors and students can register on the
              platform. Instructors can create courses, while
              students can easily enroll in their preferred courses
              through the website. "
            type="Full Stack"
            tags={["JavaScript", " Bootstrap", "PHP"]}
            link="https://github.com/shiran-dinushka/LearnLife"
            image={LMS}
          />
        </div>
      </div>
    </div>
  );
}
