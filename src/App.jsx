import { useState } from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import About from "./sections/about";
import Project from "./sections/Project";

const App = () => {
  const [theme, setTheme] = useState("light");
  const isDark = theme === "dark";

  return (
    <div
      className={`w-full min-h-screen transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-b from-black to-gray-800 text-white"
          : "bg-gradient-to-b from-[black] via-[#4A216A] to-[#F3D6B0] text-slate-900"
      }`}
    >
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About theme={theme} />
      <Project theme={theme} />
      <section className="relative min-h-screen "></section>
      <section className="relative min-h-screen "></section>
      <section className="relative min-h-screen "></section>
    </div>
  );
};

export default App;
