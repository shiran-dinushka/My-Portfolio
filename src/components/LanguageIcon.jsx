import React from "react";
import logos from "../assets/logos";

export default function LanguageIcon({ name }) {

  return (
    <div>
      <div className="flex gap-2 border border-border py-2 px-6 rounded-full justify-center items-center shadow-xl w-35">
        <img src={logos[name]} alt={name} className="max-w-5" />
        <span className="text-sm font-semibold text-center">{name}</span>
     
      </div>
    </div>
  );
}
