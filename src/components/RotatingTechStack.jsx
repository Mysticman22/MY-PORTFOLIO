import { useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { techStack } from "../data/techStack";
import FlipCard from "./FlipCard";

const categories = Object.keys(techStack);
const STEP = 360 / categories.length;

export default function RotatingTechStack() {
  const rotation = useMotionValue(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const rotateNext = () => {
    setIsFlipped(false);
    animate(rotation, rotation.get() - STEP, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    });
  };

  const fastSpin = () => {
    animate(rotation, rotation.get() - STEP * 10, {
      duration: 2.2,
      ease: "easeOut",
    });
  };

  return (
    <section className="mt-40 flex justify-center">
      <div
        className="relative w-[440px] h-[440px] perspective"
        onDoubleClick={fastSpin}
      >
        <motion.div
          className="absolute inset-0"
          style={{ rotateY: rotation, transformStyle: "preserve-3d" }}
        >
          {categories.map((category, index) => {
            const angle = index * STEP;

            const activeIndex =
              ((Math.round(-rotation.get() / STEP) % categories.length) +
                categories.length) %
              categories.length;

            const isActive = activeIndex === index;

            return (
              <div
                key={category}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `
                    rotateY(${angle}deg)
                    translateZ(220px)
                  `,
                }}
                onClick={rotateNext}
              >
                <div
                  style={{
                    transform: `rotateY(${-rotation.get() - angle}deg)`,
                  }}
                >
                  <FlipCard
                    title={category}
                    items={techStack[category]}
                    isFlipped={isActive && isFlipped}
                    onFlip={() => {
                      if (isActive) {
                        setIsFlipped((f) => !f);
                      }
                    }}
                    dimmed={!isActive}
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
