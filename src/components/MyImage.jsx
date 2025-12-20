import React from "react";
import portfolioGif from "../assets/worker.gif";

export default function MyImage() {
  return (
    <div className="-mt-10">
       <img
        src={portfolioGif}
        alt="Developer animation"
        className="w-auto mx-auto"
      />
    </div>
  );
}
