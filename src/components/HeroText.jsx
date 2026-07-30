import React from "react";
import FlipWords from "../components/FlipWords.jsx";

const HeroText = () => {
  return (
    <div className="hero-text z-10 container mx-auto mt-20 w-full text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/*Desktop view*/}
      <div className="hidden md:flex flex-col">
        <h1 className="text-4xl font-medium">HI Im Anag</h1>
        <div className="flex flex-col items-start ">
          <p className="text-5xl font-medium text-neutral-300 mt-4">A Developer <br/>Dedicated to Crafting</p>
            <div>
              <FlipWords words={["Innovative", "Scalable", "User-Friendly"]} className="text-5xl font-medium text-neutral-300 " />
            </div>
            <p className="text-lg text-neutral-300 italic">Web solutions</p>
        </div>
      </div>
      {/*Mobile view*/}
    </div>
  );
};

export default HeroText;
