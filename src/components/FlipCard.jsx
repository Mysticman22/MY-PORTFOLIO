import { motion } from "framer-motion";

export default function FlipCard({
  title,
  items,
  isFlipped,
  onFlip,
  dimmed = false,
}) {
  return (
    <div
      onClick={onFlip}
      className={`w-60 h-72 perspective cursor-pointer transition-all duration-700
      ${dimmed ? "opacity-40 scale-95" : "opacity-100 scale-100"}`}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div className="absolute inset-0 backface-hidden glass p-6">
          <h3 className="font-serif text-xl">{title}</h3>
          <p className="mt-4 text-sm opacity-70">
            Click to view skills
          </p>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 glass p-6">
          <h3 className="font-serif text-lg mb-3">{title}</h3>
          <ul className="space-y-1 text-sm">
            {items.map((skill) => (
              <li key={skill}>• {skill}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
