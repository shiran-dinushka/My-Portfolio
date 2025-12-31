import React from "react";
import portfolioGif from "../assets/developer.gif";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function MyImage() {
  return (
    <div className="flex justify-center lg:justify-end w-full">
      <img
        src={portfolioGif}
        alt="Developer animation"
        className="w-90 sm:w-100 md:w-120 lg:w-200 h-auto"
      />
    </div>
  );
}

