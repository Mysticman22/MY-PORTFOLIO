import { motion } from "framer-motion";

export default function ProfileWindow() {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="glass absolute top-24 right-0 w-[300px] h-[460px] overflow-hidden"
    >
      <img
        src="/profile.jpg"
        alt="Sarthak Tarde"
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}
