import { motion,useScroll,useSpring,useTransform } from "motion/react";

const ParallelBackground = () => {
    const {scrollYProgress} = useScroll();
    const x = useSpring(scrollYProgress, {damping: 50});
    const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
    const planetX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
    const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
    const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  return (
    <section className="absolute inset-0 z-0 h-full w-full">
      <div className="relative h-[140vh] md:h-[160vh] overflow-y-hidden">
        {/* mountain sky */}
        <div
          className="absolute inset-0 h-[140vh] md:h-[160vh] w-full"
          style={{
            backgroundImage: "url(/assets/sky.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* mountain 3 */}
        <motion.div
          className="absolute inset-0 z-1 h-[140vh] md:h-[160vh] w-full "
          style={{
            backgroundImage: "url(/assets/mountain-3.png)",
            backgroundPosition: "bottom",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            y: mountain3Y,
          }}
        />
        {/* planets */}
        <motion.div
          className="absolute inset-0 z-2 h-[140vh] md:h-[160vh] w-full "
          style={{
            backgroundImage: "url(/assets/planets.png)",
            backgroundPosition: "bottom",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            x: planetX,
          }}
        />
        {/* mountain 2 */}
         <motion.div
          className="absolute inset-0 z-3 h-[140vh] md:h-[160vh] w-full "
          style={{
            backgroundImage: "url(/assets/mountain-2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            y: mountain2Y,
          }}
        />
        {/* mountain 1 */}
        <motion.div
          className="absolute inset-0 z-4 h-[140vh] md:h-[160vh] w-full "
          style={{
            backgroundImage: "url(/assets/mountain-1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            y: mountain1Y,
          }}
        />
      </div>
    </section>
  );
};

export default ParallelBackground;
