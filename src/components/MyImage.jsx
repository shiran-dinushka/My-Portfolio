import React from "react";
import portfolioImage from "../assets/myImage.png";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function MyImage() {
  return (
    <div className="flex justify-center lg:justify-end w-full">
      <img
        src={portfolioImage}
        alt="My Image"
        className="h-auto w-64 max-w-full object-contain motion-safe:animate-image-rise sm:w-80 md:w-96 lg:w-[32rem] xl:w-[38rem]"
      />
    </div>
  );
}

