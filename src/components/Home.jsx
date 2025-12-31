import React from "react";
import Introduction from "./Introduction";
import MyImage from "./MyImage";
import Scrolldown from "../assets/scroll-down.gif";

export default function Home() {
  return (
    <div className="border-b border-border min-h-screen w-full grid place-items-center px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-350 w-full items-center mt-10 lg:mt-0 px-8">
        <Introduction />
        <MyImage />
      </div>
      <div>
        <img
          src={Scrolldown}
          alt="Down Arrow"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 animate-bounce "
        />
      </div>
    </div>
  );
}
