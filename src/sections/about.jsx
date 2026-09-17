import { React, useRef } from "react";
import codingImage from "/assets/coding-pov.png";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/copyEmailButton";
import DownloadCVButton from "../components/DownloadCVButton";
import FrameWorks from "../components/FrameWorks";

const about = ({ theme = "light" }) => {
  const grid2Container = useRef();
  const isDark = theme === "dark";
  const socialLinks = [
    {
      href: "https://github.com/anagmk",
      icon: "/assets/logos/github.svg",
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/anagmk-dev",
      icon: "/assets/socials/linkedIn.svg",
      label: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/an_._ag/",
      icon: "/assets/socials/instagram.svg",
      label: "Instagram",
    },
  ];
  const skills = [
    { name: "MongoDB", icon: "mongodb.svg" },
    { name: "JavaScript", icon: "javascript.svg" },
    { name: "TypeScript", icon: "typescript.svg" },
    { name: "Express.js", icon: "expressjs.svg" },
    { name: "Node.js", icon: "nodejs.svg" },
    { name: "CSS3", icon: "css3.svg" },
    { name: "HTML5", icon: "html5.svg" },
    { name: "React", icon: "react.svg" },
    { name: "Git", icon: "git.svg" },
  ];

  return (
    <section id="about" className="c-space section-spacing scroll-mt-24">
      <h2 className={`text-2xl ${isDark ? "text-white" : "text-[#ffc107]"}`}>
        About Me
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        <div
          className={`grid-1 flex flex-col justify-end rounded-2xl p-6 ${
            isDark
              ? "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"
              : "bg-gradient-to-br from-[#f7d8b5] via-[#f1e1d4] to-[#7a5b9d]"
          }`}
        >
          {/* <div className="pointer-events-none absolute right-[50%]  top-[50%] z-[1]" aria-hidden="true">
            <span className={`about-ripple ${isDark ? "about-ripple-dark" : "about-ripple-light"}`} />
            <span className={`about-ripple about-ripple-delay-1 ${isDark ? "about-ripple-dark" : "about-ripple-light"}`} />
            <span className={`about-ripple about-ripple-delay-2 ${isDark ? "about-ripple-dark" : "about-ripple-light"}`} />
          </div> */}
          <img
            src={codingImage}
            alt="coding_image"
            className="absolute z-0 scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="relative z-10 mt-auto">
            <p
              className="text-xl font-bold headtext"
              style={{ color: "#ffffff" }}
            >
              Hi, i'm Anag mk
            </p>
            <p className="mt-4 leading-7 subtext" style={{ color: "#ffffff" }}>
              I'm a Full Stack Developer passionate about building immersive
              digital experiences and modern web applications.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className={`rounded-full border p-2 transition hover:-translate-y-0.5 ${
                    isDark
                      ? "border-white/20 bg-white/10 hover:bg-white/20"
                      : "border-slate-900/15 bg-white/45 hover:bg-white/70"
                  }`}
                >
                  <img
                    src={social.icon}
                    alt={social.label}
                    className={`h-5 w-5 ${isDark ? "brightness-0 invert" : "brightness-0"}`}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
        </div>
        <div
          className={`grid-2 rounded-2xl p-6 ${
            isDark
              ? "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"
              : "bg-gradient-to-br from-[#f7d8b5] via-[#f1e1d4] to-[#7a5b9d]"
          }`}
        >
          <div
            className="flex items-center justify-center w-full h-full"
            ref={grid2Container}
          >
            <p
              className={`flex items-end text-5xl ${isDark ? "text-white" : "text-slate-900"}`}
            >
              CODE IS CRAFT
            </p>
            <Card
              theme={theme}
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="GRASP"
              container={grid2Container}
            />
            <Card
              theme={theme}
              style={{ rotate: "-30deg", top: "60%", left: "40%" }}
              text="SOLID"
              container={grid2Container}
            />
            <Card
              theme={theme}
              style={{ rotate: "80deg", top: "30%", left: "60%" }}
              text="Design PAtterns"
              container={grid2Container}
            />
            <Card
              theme={theme}
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              container={grid2Container}
            />
            <Card
              theme={theme}
              style={{ rotate: "-15deg", top: "8%", left: "10%" }}
              text="SRP"
              container={grid2Container}
            />
            {/* <Card style = {{rotate : "30deg", top:"10%", left:"30%"}} image="/assets/logos/csharp-pink.png" container={grid2Container} />
            <Card style = {{rotate : "-45deg", top:"70%", left:"50%"}} image="/assets/logos/dotnet-pink.png" container={grid2Container} />
            <Card style = {{rotate : "15deg", top:"30%", left:"70%"}} image="/assets/logos/blazor-pink.png" container={grid2Container} /> */}
          </div>
        </div>
        <div
          className={`grid-3 rounded-2xl p-6 ${
            isDark
              ? "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"
              : "bg-gradient-to-br from-[#f7d8b5] via-[#f1e1d4] to-[#7a5b9d]"
          }`}
        >
          <div className="z-10 w[50%]">
            <p
              className={`text-xl font-bold head-text ${isDark ? "text-white" : "text-slate-900"}`}
            >
              Time Zone
            </p>
            <p
              className="subtext"
              style={{ color: isDark ? "#cbd5e1" : "#000000" }}
            >
              I am based in India, and open to remote work opportunities.
              <br /><br />
              Location: Kannur, Kerala 🇮🇳
              <br />
              Remote Ready: 100%
              <br />
              Timezone: UTC +5:30
              <br />
            </p>
          </div>
          <figure className="absolute right-[0%] top-[10%]">
            <Globe theme={theme} />
          </figure>
        </div>
        <div
          className={`grid-4 rounded-2xl p-6 ${
            isDark
              ? "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"
              : "bg-gradient-to-br from-[#f7d8b5] via-[#f1e1d4] to-[#7a5b9d]"
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p
              className={`text-center head-text ${isDark ? "text-white" : "text-slate-900"}`}
            >
              Do you want to start a project together?
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <CopyEmailButton theme={theme} />
              <DownloadCVButton theme={theme} />
            </div>
          </div>
        </div>
        <div
          className={`grid-5 rounded-2xl p-6 ${
            isDark
              ? "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"
              : "bg-gradient-to-br from-[#f7d8b5] via-[#f1e1d4] to-[#7a5b9d]"
          }`}
        >
          <div className="relative z-10 w-[48%]">
            <p
              className={`text-xl font-bold head-text ${isDark ? "text-white" : "text-slate-900"}`}
            >
              My Skills
            </p>
            <p
              className="subtext hidden sm:block"
              style={{ color: isDark ? "#cbd5e1" : "#000000" }}
            >
              The tools I use to build modern web experiences.
            </p>
          </div>
          <div className="absolute -left-8 top-[55%] h-full w-[12%] scale-90 sm:left-0 sm:scale-100 md:scale-110">
            <FrameWorks />
          </div>
          <ul className="absolute right-3 top-5 z-10 grid w-[51%] grid-cols-2 gap-x-2 gap-y-2 sm:right-5 sm:top-4 sm:gap-x-4 sm:gap-y-3">
            {skills.map((skill) => (
              <li
                key={skill.name}
                className={`flex items-center gap-2 rounded-xl px-2 py-1.5 transition-transform duration-200 hover:-translate-y-0.5 ${
                  isDark ? "bg-white/10" : "bg-white/20"
                }`}
              >
                <span
                  className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${isDark ? "bg-white/10" : "bg-white/35"}`}
                >
                  <img
                    src={`/assets/logos/${skill.icon}`}
                    alt=""
                    className="size-5 object-contain"
                  />
                </span>
                <span
                  className={`text-xs font-medium sm:text-sm ${isDark ? "text-white" : "text-slate-900"}`}
                >
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default about;
