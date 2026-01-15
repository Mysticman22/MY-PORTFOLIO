import { motion } from "framer-motion";
import { useCalmScroll } from "../hooks/useCalmScroll";

function MotionSection({ children }) {
  const { y, opacity } = useCalmScroll();

  return (
    <motion.div
      style={{ y, opacity }}
      transition={{
        duration: 1.4,
        ease: [0.22, 1, 0.37, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default MotionSection;
