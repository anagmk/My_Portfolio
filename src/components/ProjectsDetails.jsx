import { useEffect } from "react";
import { motion } from "motion/react";

const ProjectsDetails = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  closeModal,
}) => {
  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  return (
    <div
      className="fixed inset-0 z-[60] flex size-full items-center justify-center overflow-y-auto bg-slate-950/45 p-4 backdrop-blur-2xl"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} project details`}
      onClick={closeModal}
    >
      <motion.div
        className="relative my-auto max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-l from-midnight to-navy shadow-2xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <img src="assets/close.svg" alt="close" className="w-6 h-6" />
        </button>
        <img src={image} alt={title} className="w-full h-full rounded-t-2xl" />
        <div className="p-5">
          <h5 className="text-2xl font-bold mb-2 text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription?.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">
              {subDesc}
            </p>
          ))}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  src={tag.path}
                  key={tag.id}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
              <a
                href={href}
                className="inline-flex items-center gap-1font-meddium hover-animation cursor-pointer"
              >
                View Projects
                <img
                  src="assets/arrow-up.svg"
                  alt="arrow-up"
                  className="size-4"
                />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsDetails;
