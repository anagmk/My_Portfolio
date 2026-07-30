import HeroText from "../components/HeroText.jsx";
import ParallelBackground from "../components/ParallelBackground.jsx";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Astronaut from "../components/Astronaut.jsx";
import { MOUSE } from "three";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 771px)" });
  return (
    <section
      id="hero"
      className="relative min-h-[140vh] md:min-h-[160vh] overflow-hidden"
    >
      {/* Background */}
      <ParallelBackground />

      {/* Text */}
      <HeroText />

      {/* 3D Canvas */}
      <div
        className="absolute inset-0 z-20"
        onContextMenuCapture={(event) => {
          event.nativeEvent.stopImmediatePropagation();
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Canvas
          camera={{
            position: [0, 0, 12],
            fov: 35,
          }}
          style={{
            width: "100%",
            height: "100%",
            transform: isMobile ? "translatey(20vw)" : "translateX(20vw) translatey(-5vw)",
          }}
        >
          <ambientLight intensity={2} />
          <directionalLight position={[5, 5, 5]} intensity={2} />

          <Astronaut
            scale={isMobile ? 0.2 : 0.3}
            position={isMobile ? [0.6, -0.5, 0] : [2.8, 0.5, 0]}
          />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            target={isMobile ? [0.6, -0.5, 0] : [2.8, 0.5, 0]}
            mouseButtons={{
              LEFT: MOUSE.ROTATE,
              MIDDLE: null,
              RIGHT: MOUSE.ROTATE,
            }}
          />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
