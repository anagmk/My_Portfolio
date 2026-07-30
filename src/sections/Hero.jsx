import React from "react";
import HeroText from "../components//HeroText.jsx";
import ParallelBackground from "../components/ParallelBackground.jsx";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden hero">
      <HeroText />
      <ParallelBackground />
      <figure
        className="absolute inset-0 z-0 h-full w-full"
        style={{ width: "100vh ", height: "100vh" }}
      ></figure>
    </section>
  );
};

export default Hero;
