import FlipWords from "../components/FlipWords.jsx";
import { motion } from "motion/react";

const HeroText = () => {
  const varients = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="hero-text relative z-10 container mx-auto mt-20 w-full text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/*Desktop view*/}
      <div className="hidden md:flex flex-col">
        <motion.h1
          className="text-4xl font-medium"
          initial={varients.hidden}
          animate={varients.visible}
          transition={{ delay: 1 }}
        >
          HI Im Anag
        </motion.h1>
        <div className="flex flex-col items-start ">
          <motion.p
            initial={varients.hidden}
            animate={varients.visible}
            transition={{ delay: 1.3 }}
            className="text-5xl font-medium text-neutral-300 mt-4"
          >
            A Developer <br />
            Dedicated to Crafting
          </motion.p>
          <motion.div
            initial={varients.hidden}
            animate={varients.visible}
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={["Innovative", "Scalable", "User-Friendly"]}
              className="text-8xl font-bold text-neutral-300 "
            />
          </motion.div>
          <motion.p
            initial={varients.hidden}
            animate={varients.visible}
            transition={{ delay: 1.7 }}
            className="text-4xl text-neutral-300 italic"
          >
            Web solutions
          </motion.p>
        </div>
      </div>
      {/*Mobile view*/}
      <div className="md:hidden">
        <motion.h1
          initial={varients.hidden}
          animate={varients.visible}
          transition={{ delay: 1 }}
          className="text-3xl font-medium"
        >
          HI Im Anag
        </motion.h1>
        <motion.p
          initial={varients.hidden}
          animate={varients.visible}
          transition={{ delay: 1.2 }}
          className="text-5xl font-medium text-neutral-300"
        >
          A Developer <br />
          Dedicated to Crafting
        </motion.p>
        <motion.div
          initial={varients.hidden}
          animate={varients.visible}
          transition={{ delay: 1.5 }}
        >
          <FlipWords
            words={["Innovative", "Scalable", "User-Friendly"]}
            className="text-7xl font-bold text-neutral-300 "
          />
        </motion.div>
        <motion.p
          initial={varients.hidden}
          animate={varients.visible}
          transition={{ delay: 1.7 }}
          className="text-2xl text-neutral-300 italic"
        >
          Web solutions
        </motion.p>
      </div>
    </div>
  );
};

export default HeroText;
