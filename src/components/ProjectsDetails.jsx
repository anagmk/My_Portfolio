import {motion} from "motion/react";

const ProjectsDetails = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <div className="relatuve max-w-2xl border shadow-sm rounded-2xl bng-gradient-to-l from-midnight to-navy border-white/10">
        <button onClick={closeModal} className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white">
          <img src="assets/close.svg" alt="close" className="w-6 h-6" />
        </button>
        <img src={image} alt={title} className="w-full h-full rounded-t-2xl" />
        <div className="p-5">
          <h5 className="text-2xl font-bold mb-2 text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription?.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">{subDesc}</p>
          ))}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
                {tags.map((tag) => (
                    <img src={tag.path} key={tag.id}  alt={tag.name} className ="rounded-lg size-10 hover-animation" />
                ))}
                <a href={href} className = "inline-flex items-center gap-1font-meddium hover-animation cursor-pointer">
                    View Projects 
                    <img src="assets/arrow-up.svg" alt="arrow-up" className="size-4" />
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;
