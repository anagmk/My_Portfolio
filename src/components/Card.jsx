import React, { useMemo } from "react";
import { motion } from "motion/react";

const Card = ({ style, text, image, container, theme = "light" }) => {
  const textColor = theme === "dark" ? "text-white" : "text-slate-900";
  const cardBackground = theme === "dark" ? "bg-storm" : "bg-white";

  // Random movement generated once
  const movement = useMemo(() => {
    const random = () => Math.random() * 80 - 40; // -40px to 40px

    return {
      x: [0, random(), random(), random(), 0],
      y: [0, random(), random(), random(), 0],
      rotate: [0, random() / 5, random() / 5, 0],
      duration: 10 + Math.random() * 8,
    };
  }, []);

  const commonProps = {
    style,
    animate: {
      x: movement.x,
      y: movement.y,
      rotate: movement.rotate,
    },
    transition: {
      duration: movement.duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    },
    whileHover: {
      scale: 1.05,
    },
    drag: true,
    dragConstraints: container,
    dragElastic: 1,
  };

  return image && !text ? (
    <motion.img
      src={image}
      alt=""
      className="absolute w-15 cursor-grab"
      {...commonProps}
    />
  ) : (
    <motion.div
      className={`absolute px-1 py-4 text-lg text-center rounded-full ring ring-gray-700 font-extralight w-[12rem] cursor-grab ${cardBackground} ${textColor}`}
      {...commonProps}
    >
      {text}
    </motion.div>
  );
};

export default Card;