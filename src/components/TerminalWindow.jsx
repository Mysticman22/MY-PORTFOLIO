import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const lines = [
  "npm install sarthak",
  "Initializing AI modules...",
  "Loading data structures...",
  "Ready to boost your project.",
];

export default function TerminalWindow() {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let charIndex = 0;
    const fullText = lines[currentLine];
    setDisplayedText("");

    const interval = setInterval(() => {
      if (charIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentLine((prev) => (prev + 1) % lines.length);
        }, 2000);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [currentLine]);

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="glass absolute top-0 right-28 w-[340px] p-5 font-mono"
    >
      <div className="flex gap-2 mb-4">
        <span className="w-3 h-3 bg-red-400 rounded-full" />
        <span className="w-3 h-3 bg-yellow-400 rounded-full" />
        <span className="w-3 h-3 bg-green-400 rounded-full" />
      </div>

      <div className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed min-h-[40px]">
        <span className="text-blue-500 mr-2">$</span>
        {displayedText}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-2 h-4 bg-gray-500 ml-1 align-middle"
        />
      </div>
    </motion.div>
  );
}
