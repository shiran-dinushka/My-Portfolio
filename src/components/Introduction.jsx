import React from "react";

export default function Introduction() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const y = section.getBoundingClientRect().top + window.pageYOffset - 70;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full max-w-3xl px-4">
      <div className="text-3xl sm:text-5xl lg:text-6xl font-bold">
        Hi,
        <span
          className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500
               bg-clip-text text-transparent animate-gradient-x"
        >
          I'm Shiran Dinushka
        </span>
      </div>

      <div className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-4">
        A Passionate Software Engineer
      </div>

      <p className="mt-5 text-base sm:text-lg text-justify leading-relaxed text-text max-w-xl">
        I am a passionate and self-motivated recent graduate with a strong drive
        to learn new technologies in the IT field. I embrace challenges
        proactively and strive to achieve my targets. I am enthusiastic about
        applying my knowledge and skills to contribute to an organization's
        growth and success as a Full Stack Developer.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <a
          href="/Shiran_Dinushka_SE_CV.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-6 py-4 w-full sm:w-auto text-xl font-bold bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:cursor-pointer">
            Download Resume
          </button>
        </a>
        <button
          onClick={() => scrollToSection("connect")}
          className="px-6 py-4 w-full sm:w-auto text-xl font-bold  text-white rounded-full border border-border hover:shadow-xl hover:cursor-pointer"
        >
          Connect with Me
        </button>
      </div>
    </div>
  );
}
