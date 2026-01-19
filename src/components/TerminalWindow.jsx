import { motion } from "framer-motion";

export default function TerminalWindow() {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="glass absolute top-0 right-28 w-[340px] p-5"
    >
      <div className="flex gap-2 mb-4">
        <span className="w-3 h-3 bg-red-400 rounded-full" />
        <span className="w-3 h-3 bg-yellow-400 rounded-full" />
        <span className="w-3 h-3 bg-green-400 rounded-full" />
      </div>

      <pre className="text-sm text-gray-800 leading-relaxed">

      </pre>
    </motion.div>
  );
}
