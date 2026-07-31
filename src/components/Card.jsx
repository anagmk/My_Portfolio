import React from "react";
import {motion} from "motion/react";

const Card = ({ style, text, image,container }) => {
  return image && !text ? (
    <motion.img
      src={image}
      alt=""
      style={style}
      className="absolute w-15 cursor-grab"
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={container}
      dragElastic={1}
    />
  ) : (
    <motion.div
      style={style}
      className="absolute px-1 py-4 text-lg text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] curson-grab"
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={container}
    >
      {text}
    </motion.div>
  );
};

export default Card;
