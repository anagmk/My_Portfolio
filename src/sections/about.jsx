import { React, useRef } from "react";
import codingImage from "/assets/coding-pov.png";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/copyEmailButton";
import FrameWorks from "../components/FrameWorks";

const about = ({ theme = "light" }) => {
  const grid2Container = useRef();
  const isDark = theme === "dark";

  return (
    <section id="about" className="c-space section-spacing scroll-mt-24">
      <h2 className={`text-2xl ${isDark ? "text-white" : "text-[#ffc107]"}`}>
        About Me
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        <div
          className={`grid-1 flex flex-col justify-end rounded-2xl p-6 ${isDark
            ? "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"
            : "bg-gradient-to-br from-[#f7d8b5] via-[#f1e1d4] to-[#7a5b9d]"}`}
        >
          <img
            src={codingImage}
            alt="coding_image"
            className="absolute z-0 scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="relative z-10 mt-auto">
            <p className="text-xl font-bold headtext" style={{ color: "#ffffff" }}>
              Hi, i'm Anag mk
            </p>
            <p
              className="mt-4 leading-7 subtext"
              style={{ color: "#ffffff" }}
            >
              I'm a Full Stack Developer passionate about building immersive
              digital experiences and modern web applications.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
        </div>
        <div
          className={`grid-2 rounded-2xl p-6 ${isDark
            ? "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"
            : "bg-gradient-to-br from-[#f7d8b5] via-[#f1e1d4] to-[#7a5b9d]"}`}
        >
          <div className = "flex items-center justify-center w-full h-full" ref = {grid2Container}>
            <p className={`flex items-end text-5xl ${isDark ? "text-white" : "text-slate-900"}`}>CODE IS CRAFT</p>
            <Card theme={theme} style = {{rotate : "75deg", top:"30%", left:"20%"}} text="GRASP" container={grid2Container} />
            <Card theme={theme} style = {{rotate : "-30deg", top:"60%", left:"40%"}} text="SOLID" container={grid2Container} />
            <Card theme={theme} style = {{rotate : "80deg", top:"30%", left:"60%"}} text="Design PAtterns" container={grid2Container} />
            <Card theme={theme} style = {{rotate : "-45deg", top:"55%", left:"0%"}} text="Design Principles" container={grid2Container} />
            <Card theme={theme} style = {{rotate : "-15deg", top:"8%", left:"10%"}} text="SRP" container={grid2Container} />
            <Card style = {{rotate : "30deg", top:"10%", left:"30%"}} image="/assets/logos/csharp-pink.png" container={grid2Container} />
            <Card style = {{rotate : "-45deg", top:"70%", left:"50%"}} image="/assets/logos/dotnet-pink.png" container={grid2Container} />
            <Card style = {{rotate : "15deg", top:"30%", left:"70%"}} image="/assets/logos/blazor-pink.png" container={grid2Container} />
          </div>
        </div>
        <div
          className={`grid-3 rounded-2xl p-6 ${isDark
            ? "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"
            : "bg-gradient-to-br from-[#f7d8b5] via-[#f1e1d4] to-[#7a5b9d]"}`}
        >
          <div className="z-10 w[50%]">
            <p className={`text-xl font-bold head-text ${isDark ? "text-white" : "text-slate-900"}`}>Time Zone</p>
            <p className="subtext" style={{ color: isDark ? "#cbd5e1" : "#000000" }}>
              I am based in India, and open to remote work opportunities.
            </p>
          </div>
          <figure className="absolute right-[0%] top-[10%]">
            <Globe theme={theme} />
          </figure>
        </div>
        <div
          className={`grid-4 rounded-2xl p-6 ${isDark
            ? "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"
            : "bg-gradient-to-br from-[#f7d8b5] via-[#f1e1d4] to-[#7a5b9d]"}`}
        >
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className={`text-center head-text ${isDark ? "text-white" : "text-slate-900"}`}>Do you want to start a project together?</p>
            <CopyEmailButton theme={theme} />
          </div>
        </div>
        <div
          className={`grid-5 rounded-2xl p-6 ${isDark
            ? "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"
            : "bg-gradient-to-br from-[#f7d8b5] via-[#f1e1d4] to-[#7a5b9d]"}`}
        >
          <div className="z-10 w-[50%]">
            <p className="text-xl font-bold head-text">My Skills</p>
            <p className="subtext" style={{ color: isDark ? "#cbd5e1" : "#000000" }}>
              I have a strong foundation in web development and a passion for learning new technologies.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <FrameWorks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
