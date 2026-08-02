import { React, useState } from "react";
import ProjectsDetails from "./ProjectsDetails";

const Projects = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
  theme = "light",
}) => {
  const [isHidden, setIsHidden] = useState(false);
  const isDark = theme === "dark";

  return (
    <>
      <div className="flex flex-col items-start justify-between gap-4 py-10 sm:flex-row sm:items-start"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}>
        <div className="flex flex-col items-start">
          <p className={`text-2xl ${isDark ? "text-white" : "text-slate-900"}`}>{title}</p>
          <div
            className={`mt-2 flex flex-wrap gap-5 ${
              isDark ? "text-[#f5c451]" : "text-[#7c3aed]"
            }`}
          >
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation mt-5"
        >
          Read more
          <img src="assets/arrow-right.svg" alt="Arrow right" className="w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-800 to-transparent mt-12 h-[1px]" />
      {isHidden && (<ProjectsDetails
        title={title}
        description={description}
        subDescription={subDescription}
        href={href}
        image={image}
        tags={tags}
        closeModal={() => setIsHidden(false)}
      />)}
    </>
  );
};

export default Projects;
