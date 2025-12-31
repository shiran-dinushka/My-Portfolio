import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Connect from "./Connect";

export default function Main() {
  
  return (
    <div className="w-full min-h-screen bg-gray-700 bg-linear-to-r from-gray-500/50 to-gray-800 bg-blend-multiply  text-text">
      <Header />
      <main className="max-w-9xl mx-auto">
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects" className="relative">
          <Projects />
        </section>

        <section id="connect">
          <Connect />
        </section>
      </main>
      <Footer />
    </div>
  );
}
