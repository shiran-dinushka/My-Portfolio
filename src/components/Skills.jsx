import React from "react";
import PageTitle from "./PageTitle";
import PageDescription from "./PageDescription";
import CardTitle from "./CardTitle";
import LanguageIcon from "./LanguageIcon";

export default function Skills() {
  const cardStyle =
    "border border-border bg-card shadow-xl p-6 rounded-2xl w-full mx-auto";

  const iconWrapperStyle =
    "flex flex-wrap mt-4 items-center gap-4 justify-center md:justify-start";

  return (
    <div className="border-b border-border p-20 w-full">
      <PageTitle title="Technical Skills" />
      <PageDescription description="I have worked with several technologies throughout my journey" />

      <div
        className="
        grid 
        grid-cols-1 
        sm:grid-cols-1 
        md:grid-cols-2 
        gap-6 
        mt-8 
        max-w-6xl 
        mx-auto
      "
      >
        <div className={cardStyle}>
          <CardTitle title="Frontend" />
          <div className={iconWrapperStyle}>
            <LanguageIcon name="JavaScript" />
            <LanguageIcon name="React" />
            <LanguageIcon name="NextJS" />
          </div>
        </div>

        <div className={cardStyle}>
          <CardTitle title="Backend" />
          <div className={iconWrapperStyle}>
            <LanguageIcon name="Java" />
            <LanguageIcon name="Python" />
            <LanguageIcon name="NodeJS" />
          </div>
        </div>

        <div className={cardStyle}>
          <CardTitle title="Database" />
          <div className={iconWrapperStyle}>
            <LanguageIcon name="MySQL" />
            <LanguageIcon name="MongoDB" />
          </div>
        </div>

        <div className={cardStyle}>
          <CardTitle title="Tools" />
          <div className={iconWrapperStyle}>
            <LanguageIcon name="Postman" />
            <LanguageIcon name="VSCode" />
            <LanguageIcon name="Intellij" />
          </div>
        </div>
      </div>
    </div>
  );
}
