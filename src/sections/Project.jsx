import React from "react";
import { myProjects } from "../constants";
import Projects from "../components/Projects";
import { motion, useMotionValue, useSpring } from "motion/react";

const project = ({ theme = "light" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 50, damping: 10 });
  const springY = useSpring(y, { stiffness: 50, damping: 10 });
  const isDark = theme === "dark";

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    x.set(clientX + 20);
    y.set(clientY + 20);
  };

  const [preview, setPreview] = React.useState(null);

  return (
    <section
      id="projects"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing scroll-mt-24"
    >
      <div
        className={`rounded-[2rem] border p-5 md:p-8 backdrop-blur-sm ${
          isDark
            ? "border-white/10 bg-slate-950/60 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
            : "border-[#7c3aed]/30 bg-[linear-gradient(135deg,rgba(255,245,220,0.75),rgba(243,214,176,0.55),rgba(173,147,214,0.6))] shadow-[0_20px_60px_rgba(73,35,102,0.18)]"
        }`}
      >
        <h2 className={`text-heading ${isDark ? "text-white" : "text-slate-900"}`}>
          My Selected Projects
        </h2>
        <div className="mt-6 space-y-2">
          {myProjects.map((project) => (
            <Projects
              key={project.id}
              {...project}
              setPreview={setPreview}
              theme={theme}
            />
          ))}
        </div>
      </div>
      {preview && (
        <motion.img
          className="fixed top-10 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          style={{ x: springX, y: springY }}
          src={preview}
          alt="Preview"
        />
      )}
    </section>
  );
};

export default project;
