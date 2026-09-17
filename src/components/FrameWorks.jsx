import OrbitingCircles from "./orbittingCircles";

export function FrameWork() {
  const skills = [
    { name: "javascript", alt: "JavaScript" },
    { name: "typescript", alt: "TypeScript" },
    { name: "react", alt: "React" },
    { name: "git", alt: "Git" },
    { name: "tailwindcss", alt: "Tailwind CSS" },
    { name: "vitejs", alt: "Vite" },
    { name: "github", alt: "GitHub" },
    { name: "nodejs", alt: "Node.js" },
    { name: "expressjs", alt: "Express.js" },
    { name: "mongodb", alt: "MongoDB" },
    {name:"html", alt:"HTML"},
    {name:"css", alt:"CSS"},

  ];

  return (
    <div className="relative flex h-[17rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill) => (
          <Icon key={skill.name} src={`/assets/logos/${skill.name}.svg`} alt={skill.alt} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src, alt = "" }) => {
  return <img src={src} alt={alt} className="duration-200 rounded-sm hover:scale-110" />;
};

export default FrameWork;
